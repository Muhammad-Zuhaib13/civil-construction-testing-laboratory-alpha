import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComp, FooterComp } from "@/app/_components/ui";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Civil Contruction Testing Laboratory",
  description: "Civil Contruction Testing Laboratory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
