import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollWrapper from "./components/ScrollWrapper";
import localFont from "next/font/local";

const yourFont = localFont({
  src: "../public/fonts/Pretendard-SemiBold.woff",
  weight: "600",
  style: "normal",
  variable: "--font-yourfont",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryce's Bday Gift",
  description: "Bryce Turned 20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${yourFont.variable} antialiased`}
      >
        <ScrollWrapper>
          {children}
        </ScrollWrapper>
      </body>
    </html>
  );
}
