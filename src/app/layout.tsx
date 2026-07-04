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
    default: "Guts and Blackpowder Wiki — 游戏攻略、地图指南、敌人图鉴一站式平台",
    template: "%s | Guts and Blackpowder Wiki",
  },
  description:
    "Guts and Blackpowder 中文攻略站，提供完整的游戏模式攻略、武器指南、敌人图鉴、地图攻略、新手入门等全方位内容，助你在拿破仑战争战场上浴血奋战。",
  openGraph: {
    title: "Guts and Blackpowder Wiki",
    description:
      "Guts and Blackpowder 中文攻略站 — 游戏模式、武器、敌人、地图一站式攻略平台",
    type: "website",
    locale: "zh_CN",
    siteName: "Guts and Blackpowder Wiki",
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
    <html lang="zh-CN" className="h-full scroll-smooth">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
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
