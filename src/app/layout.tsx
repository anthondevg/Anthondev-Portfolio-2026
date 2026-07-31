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
  alternates: {
    canonical: "/",
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anthony Gonzalez",
  url: siteUrl,
  image: `${siteUrl}/anthony-gonzalez-portrait.jpg`,
  jobTitle: "Full-Stack & AI Engineer",
  sameAs: [
    "https://github.com/anthondevg",
    "https://www.linkedin.com/in/anthondev/",
    "https://www.upwork.com/freelancers/~0176de8d20e4948f58",
  ],
  knowsAbout: [
    "Artificial intelligence",
    "Full-stack development",
    "Next.js",
    "TypeScript",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
