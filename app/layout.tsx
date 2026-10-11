import type { Metadata, Viewport } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Data scientist",
  description: site.description,
  sameAs: [site.linkedin, site.github],
};

export const viewport: Viewport = {
  themeColor: "#101114",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Data scientist`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.linkedin }],
  robots: { index: true, follow: true },
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/`,
    siteName: site.name,
    title: `${site.name} · Data scientist`,
    description: site.description,
    images: [
      {
        url: `${site.url}/images/eric-wong.jpg`,
        width: 1067,
        height: 1266,
        alt: "Portrait of Eric Wong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Data scientist`,
    description: site.description,
    images: [`${site.url}/images/eric-wong.jpg`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="h-1 bg-brass" aria-hidden="true" />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
