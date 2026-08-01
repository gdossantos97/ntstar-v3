import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ntstar | Murder your SaaS bill",
  description:
    "Custom software and AI automation for operators who are done renting their own tools. Built in days. Owned outright.",
  openGraph: {
    title: "ntstar | $80k quote? Cute.",
    description:
      "The ops tool you were quoted $80k for, built in days and owned outright.",
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
