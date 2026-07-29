import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "@fontsource/momo-trust-display";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anthony Gonzalez — AI Engineer",
    template: "%s — Anthony Gonzalez",
  },
  description:
    "AI Engineer designing and building intelligent products where thoughtful engineering meets creative direction.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Next.js",
    "Artificial Intelligence",
    "Product Engineering",
  ],
  authors: [{ name: "Anthony Gonzalez" }],
  creator: "Anthony Gonzalez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Anthony Gonzalez — AI Engineer",
    description:
      "Intelligent products, thoughtful engineering, and creative direction.",
    siteName: "Anthony Gonzalez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Gonzalez — AI Engineer",
    description:
      "Intelligent products, thoughtful engineering, and creative direction.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
