import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Permanent_Marker } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RevealObserver } from "@/components/RevealObserver";
import { SmoothScroll } from "@/components/SmoothScroll";
import { hero, profile } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const marker = Permanent_Marker({ variable: "--font-marker", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} · Product leader`, template: `%s · ${profile.name}` },
  description: hero.intro,
  openGraph: { type: "website", siteName: profile.name, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1012" },
  ],
};

// Runs before first paint: applies the saved theme and flags that JS is on.
const bootScript = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")d.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${mono.variable} ${marker.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <SmoothScroll />
        <RevealObserver />
      </body>
    </html>
  );
}
