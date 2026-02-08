import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Tech 2026",
  description: "AI-powered legal workflow platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
