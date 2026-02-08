import { JetBrains_Mono } from "next/font/google";
import "./layout.css";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function Layout3({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${jetbrainsMono.variable} theme-terminal`}>
      {children}
      <div className="scanlines" aria-hidden />
    </div>
  );
}
