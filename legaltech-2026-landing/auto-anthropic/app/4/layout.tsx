import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./layout.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Layout4({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${cormorant.variable} ${outfit.variable} theme-luxury`}>
      {children}
    </div>
  );
}
