import { IBM_Plex_Mono, Bitter } from "next/font/google";
import "./layout.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const bitter = Bitter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function Layout1({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${ibmPlexMono.variable} ${bitter.variable} theme-brutalist`}
    >
      {children}
    </div>
  );
}
