import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { getCourseBySlug } from '../../../../components/courses/CourseIndex';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { userId, email, courseSlug = 'brain-dump' } = await req.json();

    if (!userId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get course details
    const course = getCourseBySlug(courseSlug);
    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    // Get or create Stripe customer
    let stripeCustomerId: string;

    // Check if user already has a Stripe customer ID
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single();

    if (profile?.stripe_customer_id) {
      stripeCustomerId = profile.stripe_customer_id;
    } else {
      // Create new Stripe customer
      const customer = await stripe.customers.create({
        email,
        metadata: {
          supabase_user_id: userId,
        },
      });
      stripeCustomerId = customer.id;

      // Save customer ID to database
      await supabase
        .from('profiles')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('id', userId);
    }

    // Create Checkout Session with embedded mode
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'payment', // One-time payment
      payment_method_types: ['card'],
      ui_mode: 'embedded', // Enable embedded checkout
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${course.title} - Full Course Access`,
              description: course.description,
              images: ['https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/logo.png'],
            },
            unit_amount: course.priceCents,
          },
          quantity: 1,
        },
      ],
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/course/${courseSlug}?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        supabase_user_id: userId,
        course_slug: courseSlug,
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
