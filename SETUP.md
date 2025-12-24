# Setup Guide for TheBrainDump

This guide will walk you through setting up Supabase, Stripe, and configuring your payment system.

## 1. Supabase Setup

### Step 1: Create Database Tables

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Copy the contents of `supabase-schema.sql`
4. Paste it into the SQL Editor and click **Run**

This will create:
- `profiles` table - stores user info and payment status
- `payment_events` table - logs all Stripe payment events
- Triggers for automatic profile creation on signup
- Row Level Security (RLS) policies

### Step 2: Get Supabase Credentials

1. In your Supabase dashboard, go to **Project Settings** → **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep this secret!)

### Step 3: Update MCP Configuration (Optional)

If using Claude Code MCP server:

1. Go to **Project Settings** → **Database**
2. Find **Connection string** → **Connection pooling** → **Transaction mode**
3. Copy the connection string
4. Update `.vscode/mcp.json` with your actual values:
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@cloudflare/mcp-server-supabase",
        "postgresql://postgres.YOUR_PROJECT_REF:YOUR_PASSWORD@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
      ]
    }
  }
}
```

## 2. Stripe Setup

### Step 1: Create Stripe Account

1. Go to https://dashboard.stripe.com/register
2. Complete the signup process
3. Enable **Test Mode** (toggle in top right)

### Step 2: Get Stripe Keys

1. In Stripe Dashboard, go to **Developers** → **API keys**
2. Copy these values:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY` (⚠️ Keep this secret!)

### Step 3: Set Up Webhook

1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. For **Endpoint URL**, enter:
   - For local testing: Use ngrok (see below)
   - For production: `https://yourdomain.com/api/stripe/webhook`
4. For **Events to send**, select:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### Step 4: Local Testing with ngrok (Optional)

For testing webhooks locally:

1. Install ngrok: `npm install -g ngrok`
2. Start your dev server: `npm run dev`
3. In another terminal: `ngrok http 3000`
4. Copy the https URL (e.g., `https://abc123.ngrok.io`)
5. Use this URL for your webhook endpoint: `https://abc123.ngrok.io/api/stripe/webhook`

## 3. Environment Variables

### Step 1: Create .env.local File

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### Step 2: Fill in Your Values

Edit `.env.local` with your actual credentials:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xtubpexwrstuucwleaug.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 4. Install Dependencies

Make sure you have the Stripe packages:

```bash
npm install stripe @stripe/stripe-js @supabase/supabase-js
```

## 5. Test the Payment Flow

### Step 1: Start Your Dev Server

```bash
npm run dev
```

### Step 2: Test Checkout

1. Sign up for a new account or log in
2. Click "Unlock Full Course"
3. Use Stripe test card: `4242 4242 4242 4242`
4. Use any future expiration date and any CVC
5. Complete the checkout

### Step 3: Verify in Supabase

1. Go to Supabase **Table Editor** → **profiles**
2. Find your user
3. Check that `is_paid` is now `true`
4. Check **payment_events** table for the logged event

### Step 4: Verify in Stripe

1. Go to Stripe Dashboard → **Payments**
2. You should see your test payment
3. Go to **Developers** → **Webhooks** → Your endpoint
4. Click on it to see the events sent

## 6. Going to Production

### Step 1: Switch to Live Mode in Stripe

1. Toggle **Test Mode** off in Stripe Dashboard
2. Get your **live** API keys from **Developers** → **API keys**
3. Update your **production** environment variables

### Step 2: Update Webhook for Production

1. Create a new webhook endpoint with your production URL
2. Update `STRIPE_WEBHOOK_SECRET` with the new signing secret

### Step 3: Deploy

1. Deploy to Vercel/your hosting platform
2. Add all environment variables in the hosting dashboard
3. Test the production payment flow

## Troubleshooting

### Webhook not receiving events?

- Check webhook URL is correct
- Verify webhook secret matches
- Check webhook endpoint logs in Stripe Dashboard
- For local testing, make sure ngrok is running

### Payment succeeds but user not updated?

- Check webhook is being received (Stripe Dashboard → Webhooks)
- Check API logs for errors
- Verify `SUPABASE_SERVICE_ROLE_KEY` is correct
- Check Supabase table editor to see if event was logged

### Checkout session won't create?

- Verify Stripe secret key is correct
- Check browser console for errors
- Verify user is logged in
- Check API route is accessible at `/api/stripe/create-checkout`

## Support

If you need help:
1. Check Stripe Dashboard → Developers → Logs for API errors
2. Check Supabase Dashboard → Logs for database errors
3. Check browser console for frontend errors
4. Check Next.js terminal for API route errors
