import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./layout.css";

const playfair = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Layout2({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${playfair.variable} ${sourceSans.variable} theme-editorial`}>
      {children}
    </div>
  );
}
