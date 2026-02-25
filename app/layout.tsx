import type { Viewport, Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kimhab Ork - Fashion Designer',
  description: 'Explore artistic collections and commercial lookbooks by Kimhab Ork, a visionary fashion designer blending artistry with commercial excellence.',
  icons: {
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      new URL("/favicon/favicon.ico", "https://kimhabork.com/favicon.ico"),
      {
        url: "/favicon.svg",
        type: "image/svg",
        sizes: "1000x1000",
      },
      {
        url: "/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon/andriod-icon-36x36.png",
        type: "image/png",
        sizes: "36x36",
      },
      {
        url: "/favicon/andriod-icon-38x38.png",
        type: "image/png",
        sizes: "38x38",
      },
      {
        url: "/favicon/andriod-icon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon/andriod-icon-114x114.png",
        type: "image/png",
        sizes: "114x114",
      },
      {
        url: "/favicon/andriod-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/favicon/andriod-icon-512x512.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
    {
      url: "/favicon/apple-icon.png",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-57x57.png",
      sizes: "57x57",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-60x60.png",
      sizes: "60x60",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-76x76.png",
      sizes: "76x76",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-114x114.png",
      sizes: "114x114",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-120x120.png",
      sizes: "120x120",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
    },
    {
      url: "/favicon/apple-icon-180x180.png",
      sizes: "180x180",
      type: "image/png",
    }, ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly < {
  children: React.ReactNode
} > ) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main className="pt-8 md:pt-12">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}