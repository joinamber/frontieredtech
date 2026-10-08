import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frontieredtech.org";
const title = "Frontier EdTech — Rethinking Education for the Age of AI";
const description =
  "We're exploring a new approach to education that nurtures critical thinkers, curious learners, creative builders, and fearless adventurers.";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title,
  description,
  openGraph: { title, description, type: "website", url: site, siteName: "Frontier EdTech" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#F5F4EF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
