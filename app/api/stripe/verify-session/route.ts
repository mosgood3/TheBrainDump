import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');
    const userId = searchParams.get('user_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id parameter' },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing user_id parameter' },
        { status: 400 }
      );
    }

    // 1. Verify the session with Stripe
    let session: Stripe.Checkout.Session;
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (err: any) {
      console.error('Failed to retrieve Stripe session:', err);
      return NextResponse.json(
        {
          verified: false,
          error: 'Invalid session ID',
          sessionStatus: 'invalid'
        },
        { status: 400 }
      );
    }

    // 2. Check if session belongs to this user
    if (session.metadata?.supabase_user_id !== userId) {
      return NextResponse.json(
        {
          verified: false,
          error: 'Session does not belong to this user',
          sessionStatus: 'unauthorized'
        },
        { status: 403 }
      );
    }

    // 3. Check payment status from Stripe
    const stripePaymentStatus = session.payment_status;
    const stripeSessionStatus = session.status;

    // 4. Check database to see if webhook has updated the user
    const { data: profile, error: dbError } = await supabase
      .from('profiles')
      .select('is_paid, stripe_customer_id')
      .eq('id', userId)
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        {
          verified: false,
          error: 'Database error',
          sessionStatus: stripeSessionStatus,
          paymentStatus: stripePaymentStatus,
        },
        { status: 500 }
      );
    }

    // 5. Determine verification status
    const isStripePaid = stripePaymentStatus === 'paid' && stripeSessionStatus === 'complete';
    const isDatabaseUpdated = profile?.is_paid === true;

    return NextResponse.json({
      verified: isStripePaid && isDatabaseUpdated,
      isPaid: isDatabaseUpdated,
      sessionStatus: stripeSessionStatus,
      paymentStatus: stripePaymentStatus,
      webhookProcessed: isDatabaseUpdated,
      // If Stripe says paid but DB not updated, webhook is pending
      webhookPending: isStripePaid && !isDatabaseUpdated,
    });

  } catch (error: any) {
    console.error('Verify session error:', error);
    return NextResponse.json(
      { error: 'Internal server error', verified: false },
      { status: 500 }
    );
  }
}
