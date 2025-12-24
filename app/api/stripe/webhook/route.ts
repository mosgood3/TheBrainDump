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

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  console.log('Received event:', event.type);

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentSucceeded(paymentIntent);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailed(paymentIntent);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.supabase_user_id;
  const courseSlug = session.metadata?.course_slug || 'brain-dump';
  const customerId = session.customer as string;

  if (!userId) {
    console.error('No user ID found in checkout session metadata');
    return;
  }

  console.log(`Checkout completed for user ${userId}, course: ${courseSlug}`);

  // Update stripe_customer_id on profile (keep for reference)
  await supabase
    .from('profiles')
    .update({
      stripe_customer_id: customerId,
    })
    .eq('id', userId);

  // Get the course ID from the courses table
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('id')
    .eq('slug', courseSlug)
    .single();

  if (courseError || !course) {
    console.error(`Course not found for slug: ${courseSlug}`, courseError);
    // Fallback: still update legacy is_paid for backwards compatibility
    await supabase
      .from('profiles')
      .update({ is_paid: true })
      .eq('id', userId);
  } else {
    // Insert course access record
    const { error: accessError } = await supabase
      .from('course_access')
      .upsert({
        user_id: userId,
        course_id: course.id,
        stripe_payment_id: session.id,
        purchased_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,course_id',
      });

    if (accessError) {
      console.error('Error creating course access:', accessError);
      throw accessError;
    }
  }

  // Log payment event
  await supabase.from('payment_events').insert({
    user_id: userId,
    stripe_event_id: session.id,
    event_type: 'checkout.session.completed',
    amount: session.amount_total,
    currency: session.currency,
    status: 'succeeded',
    metadata: {
      customer_id: customerId,
      payment_status: session.payment_status,
      course_slug: courseSlug,
    },
  });

  console.log(`Successfully granted course access for user ${userId} to course ${courseSlug}`);
}

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  const userId = paymentIntent.metadata?.supabase_user_id;
  const customerId = paymentIntent.customer as string;

  if (!userId) {
    console.error('No user ID found in payment intent metadata');
    return;
  }

  console.log(`Payment succeeded for user ${userId}`);

  // Log payment event
  await supabase.from('payment_events').insert({
    user_id: userId,
    stripe_event_id: paymentIntent.id,
    event_type: 'payment_intent.succeeded',
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    status: 'succeeded',
    metadata: {
      customer_id: customerId,
      payment_method: paymentIntent.payment_method,
    },
  });
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  const userId = paymentIntent.metadata?.supabase_user_id;

  if (!userId) {
    console.error('No user ID found in payment intent metadata');
    return;
  }

  console.log(`Payment failed for user ${userId}`);

  // Log failed payment event
  await supabase.from('payment_events').insert({
    user_id: userId,
    stripe_event_id: paymentIntent.id,
    event_type: 'payment_intent.payment_failed',
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    status: 'failed',
    metadata: {
      error: paymentIntent.last_payment_error?.message,
    },
  });
}
