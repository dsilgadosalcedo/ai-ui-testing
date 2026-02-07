import type { Metadata } from "next";
import {
  Playfair_Display,
  Source_Serif_4,
  JetBrains_Mono,
  Bebas_Neue,
  Orbitron,
  Rajdhani,
  Cormorant_Garamond,
  Outfit,
  Archivo_Black,
  DM_Sans,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal Tech | AI-Powered Legal Services",
  description:
    "Legal tech platform: AI contract review, document automation, legal research, compliance, e-signature, and due diligence.",
};

const fontVariables = [
  playfair.variable,
  sourceSerif.variable,
  jetbrainsMono.variable,
  bebasNeue.variable,
  orbitron.variable,
  rajdhani.variable,
  cormorant.variable,
  outfit.variable,
  archivoBlack.variable,
  dmSans.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>{children}</body>
    </html>
  );
}
