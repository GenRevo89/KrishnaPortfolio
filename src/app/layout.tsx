import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ConwayBackground from '@/components/conway/ConwayBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Krishna Patel — Entrepreneur · Scientist · Author · Builder',
    template: '%s | Krishna Patel',
  },
  description:
    'Polymathic serial entrepreneur and published author building at the intersection of technology, biology, and human systems. Founder of BasaltHQ, published in Current Biology, author of 8 books.',
  keywords: [
    'Krishna Patel',
    'BasaltHQ',
    'Theory of Intentionality',
    'Dynamic Phenomenology',
    'biochemistry',
    'reservoir computing',
    'entrepreneur',
    'published author',
  ],
  authors: [{ name: 'Krishna Patel' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Krishna Patel — Entrepreneur · Scientist · Author · Builder',
    description:
      'Building at the intersection of technology, biology, and human systems.',
    siteName: 'Krishna Patel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Patel — Entrepreneur · Scientist · Author · Builder',
    description:
      'Building at the intersection of technology, biology, and human systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${playfair.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased flex flex-col h-screen overflow-hidden">
        <ConwayBackground />
        <Navigation />
        <main className="absolute inset-0 opacity-0 pointer-events-none z-[-1]" aria-hidden="true">
          {children}
        </main>
        <div className="flex-1 pointer-events-none" />
        <Footer />
      </body>
    </html>
  );
}
