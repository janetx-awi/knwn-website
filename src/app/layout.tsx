import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { VercelToolbar } from "@vercel/toolbar/next";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KNWN | Elite Cheer & Stunting Training — Colorado",
  description:
    "Colorado's premier elite cheer and stunting facility. Personalized coaching, college pathway consulting, and structured development for athletes who demand more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
        <VercelToolbar />
      </body>
    </html>
  );
}
