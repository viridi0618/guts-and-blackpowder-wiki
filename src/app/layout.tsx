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

export const metadata: Metadata = {
  title: {
    default: "Guts and Blackpowder Wiki: Commands, Maps, Badges & Guides",
    template: "%s | Guts and Blackpowder Wiki",
  },
  description:
    "Find Guts and Blackpowder commands, maps, badges, achievements, enemies, weapons, classes, and beginner guides for Roblox G&B.",
  openGraph: {
    title: "Guts and Blackpowder Wiki: Commands, Maps, Badges & Guides",
    description:
      "Find Guts and Blackpowder commands, maps, badges, achievements, enemies, weapons, classes, and beginner guides for Roblox G&B.",
    url: "https://gutsandblackpowder.wiki",
    type: "website",
    locale: "en_US",
    siteName: "Guts and Blackpowder Wiki",
    images: [{ url: "https://gutsandblackpowder.wiki/og-image.png", width: 288, height: 288 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Guts and Blackpowder Wiki: Commands, Maps, Badges & Guides",
    description:
      "Find Guts and Blackpowder commands, maps, badges, achievements, enemies, weapons, classes, and beginner guides for Roblox G&B.",
    images: ["https://gutsandblackpowder.wiki/og-image.png"],
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
