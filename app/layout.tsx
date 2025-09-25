import type { Metadata } from "next";
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

// Removed unused Google font variables to satisfy lints

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
