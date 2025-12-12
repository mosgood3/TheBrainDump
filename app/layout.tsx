import type { Metadata } from "next";
import { Comic_Neue, Geist_Mono } from "next/font/google";
import { QueryProvider } from "../context/QueryProvider";
import { AuthProvider } from "../context/AuthContext";
import { ProgressProvider } from "../context/ProgressContext";
import DisclaimerGate from "../components/ui/DisclaimerGate";
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
    default: "The Brain Dump - Anxiety Relief & Freedom | Interactive Course",
    template: "%s | The Brain Dump"
  },
  description: "The Brain Dump helps you overcome anxiety with proven techniques. Evidence-based anxiety relief course teaching CBT, mindfulness, and exposure therapy. Try 2 chapters FREE, then just $9.99 for lifetime access. Break free from anxiety, panic attacks, and worry today.",
  keywords: ["the brain dump", "anxiety", "anxiety relief", "anxiety help", "overcome anxiety", "anxiety treatment", "anxiety course", "anxiety therapy", "CBT therapy", "mindfulness", "exposure therapy", "panic attacks", "mental health", "self-help anxiety", "cognitive behavioral therapy", "anxiety recovery", "anxiety freedom", "anxiety symptoms", "how to deal with anxiety", "anxiety management"],
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
    title: 'The Brain Dump - Anxiety Relief & Freedom',
    description: 'The Brain Dump helps you overcome anxiety with proven techniques. Evidence-based anxiety relief course teaching CBT, mindfulness, and exposure therapy. Try 2 chapters FREE, then just $9.99 for lifetime access. Break free from anxiety, panic attacks, and worry today.',
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
    title: 'The Brain Dump - Anxiety Relief & Freedom',
    description: 'The Brain Dump helps you overcome anxiety with proven techniques. Evidence-based anxiety relief course teaching CBT, mindfulness, and exposure therapy. Try 2 chapters FREE, then just $9.99 for lifetime access. Break free from anxiety, panic attacks, and worry today.',
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
              <DisclaimerGate>
                {children}
              </DisclaimerGate>
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
