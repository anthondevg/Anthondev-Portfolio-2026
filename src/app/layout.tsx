import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/tasa-orbiter";
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
    default: "Anthony Gonzalez — Full-Stack & AI Engineer",
    template: "%s — Anthony Gonzalez",
  },
  description:
    "Full-stack engineer designing and building end-to-end digital products with practical AI systems.",
  keywords: [
    "AI Engineer",
    "Full-Stack Engineer",
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
    title: "Anthony Gonzalez — Full-Stack & AI Engineer",
    description:
      "End-to-end digital products built with full-stack engineering and practical AI.",
    siteName: "Anthony Gonzalez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Gonzalez — Full-Stack & AI Engineer",
    description:
      "End-to-end digital products built with full-stack engineering and practical AI.",
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
