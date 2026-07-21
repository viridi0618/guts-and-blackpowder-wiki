import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Guts and Blackpowder Wiki";
const SITE_URL = "https://gutsandblackpowder.wiki";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_TITLE = "Guts and Blackpowder Wiki — PvE Zombie Survival Guide, Maps & Weapons";
const DEFAULT_DESC =
  "The complete Guts and Blackpowder wiki. Maps, weapons, enemies, classes, badges, commands and more for the Roblox PvE zombie survival shooter.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google AdSense Auto Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="flex-1">
          <div id="ad-banner-top" style={{ minHeight: "90px", textAlign: "center", margin: "15px 0" }}></div>
          {children}
        </main>
        <div id="ad-banner-footer" style={{ minHeight: "250px", textAlign: "center", margin: "20px 0" }}></div>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYRWBHSZHB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XYRWBHSZHB');
          `}
        </Script>
      </body>
    </html>
  );
}
