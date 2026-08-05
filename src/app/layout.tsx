import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notJustGroovy = localFont({
  src: "../fonts/NotJustGroovy.ttf",
  variable: "--font-groovy",
  display: "swap",
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ntstar | Murder your software bloat",
  description:
    "Custom software and AI automation for operators who refuse to wait. Built in days. Owned outright.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "ntstar | Enterprise software is dead.",
    description:
      "Custom ops tools built in days and handed over with the keys attached.",
    siteName: "ntstar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notJustGroovy.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-midnight font-sans text-ice">{children}</body>
    </html>
  );
}
