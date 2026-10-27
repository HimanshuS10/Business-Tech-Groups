import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { club } from "@/data/site";
import { indexingEnabled, siteOrigin } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const origin = siteOrigin();

export const metadata: Metadata = {
  metadataBase: origin ?? undefined,
  title: {
    default: `${club.name} | ${club.tagline}`,
    template: `%s | ${club.name}`,
  },
  description: club.description,
  robots: indexingEnabled()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: {
    icon: "/brand/btg-logo.png",
    apple: "/brand/btg-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
