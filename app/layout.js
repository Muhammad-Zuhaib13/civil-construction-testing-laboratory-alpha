import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComp, FooterComp, GoogleAnalaytics } from "@/app/_components/ui";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { home } from "@/app/_utils/content";
const { seo } = home;
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: seo?.title,
  description: seo?.description,
  keywords: seo?.keywords,
  robots: seo?.metaRobots,
  viewport: seo?.metaViewport,
  alternates: {
    canonical: seo?.canonicalURL,
  },
  openGraph: seo?.openGraph,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalaytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-700`}
      >
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
