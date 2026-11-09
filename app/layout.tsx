import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kikimorita.com",
  description: "Website under construction. Coming soon.",
  metadataBase: new URL('https://kikimorita.com'),
  keywords: ['UI', 'web design', 'app design', 'UX Audit', 'Design and Usability Consultation'],
  authors: [{ name: 'Yuki Tschopp' }],
  creator: 'Yuki Tschopp',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kikimorita.com',
    title: 'kikimorita.com',
    description: 'Website under construction. Coming soon.',
    siteName: 'kikimorita.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'kikimorita.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kikimorita.com',
    description: 'Website under construction. Coming soon.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
