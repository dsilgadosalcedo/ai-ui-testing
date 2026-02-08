import type { Metadata } from "next";
import {
  Instrument_Serif,
  DM_Sans,
  Cormorant_Garamond,
  Fraunces,
  JetBrains_Mono,
  Nunito,
} from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const fontClassNames = [
  instrumentSerif.variable,
  dmSans.variable,
  cormorant.variable,
  fraunces.variable,
  jetbrainsMono.variable,
  nunito.variable,
].join(" ");

export const metadata: Metadata = {
  title: "LexForge — Legal technology with AI",
  description:
    "Legal tech software: contract review, compliance, document automation, AI legal research, e-signatures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontClassNames}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
