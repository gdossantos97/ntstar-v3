import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ntstar | Murder your software bloat",
  description:
    "Custom software and AI automation for operators who refuse to wait. Built in days. Owned outright.",
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
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full bg-midnight text-ice">{children}</body>
    </html>
  );
}
