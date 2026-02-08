import { Syne, DM_Sans } from "next/font/google";
import "./layout.css";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Layout5({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${syne.variable} ${dmSans.variable} theme-maximalist`}>
      {children}
    </div>
  );
}
