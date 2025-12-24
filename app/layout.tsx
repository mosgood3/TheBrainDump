import type { Metadata } from "next";
import { Comic_Neue, Geist_Mono } from "next/font/google";
import { QueryProvider } from "../context/QueryProvider";
import { AuthProvider } from "../context/AuthContext";
import { ProgressProvider } from "../context/ProgressContext";
import StructuredData from "../components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Brain Dump - Learn to Build Apps | Beginner-Friendly Course",
    template: "%s | The Brain Dump"
  },
  description: "The Brain Dump teaches you to build real web applications from scratch. Beginner-friendly course covering Next.js, Supabase, Stripe payments, and deployment. Try 2 chapters FREE, then just $19.99 for lifetime access. Build a production-ready app today.",
  keywords: ["the brain dump", "learn to code", "web development course", "build an app", "nextjs tutorial", "react course", "full stack development", "beginner coding", "app development", "stripe integration", "supabase tutorial", "deploy app", "coding course", "learn web development", "build products app", "javascript course", "typescript course", "beginner app development", "coding for beginners"],
  authors: [{ name: "TheBrainDump Team" }],
  creator: "TheBrainDump",
  publisher: "TheBrainDump",
  metadataBase: new URL('https://thebraindump.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebraindump.com',
    title: 'The Brain Dump - Learn to Build Apps',
    description: 'The Brain Dump teaches you to build real web applications from scratch. Beginner-friendly course covering Next.js, Supabase, Stripe payments, and deployment. Try 2 chapters FREE, then just $19.99 for lifetime access. Build a production-ready app today.',
    siteName: 'The Brain Dump',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'The Brain Dump Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'The Brain Dump - Learn to Build Apps',
    description: 'The Brain Dump teaches you to build real web applications from scratch. Beginner-friendly course covering Next.js, Supabase, Stripe payments, and deployment. Try 2 chapters FREE, then just $19.99 for lifetime access. Build a production-ready app today.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you set them up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${comicNeue.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <ProgressProvider>
              {children}
            </ProgressProvider>
          </AuthProvider>
        </QueryProvider>
        <Analytics />
      </body>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17639168060"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17639168060');
        `}
      </Script>
    </html>
  );
}
