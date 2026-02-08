import Link from "next/link";
import { Bebas_Neue, Libre_Baskerville } from "next/font/google";
import { newspaperContent } from "../lib/newspaper-content";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Edition 3 — Retro | The Daily Chronicle",
  description: "Retro vintage newspaper design",
};

export default function Edition3() {
  const { masthead, tagline, date, edition, lead, secondaries } = newspaperContent;

  return (
    <div
      className={`${bebas.variable} ${libre.variable} min-h-screen bg-[#f4efe6] font-[family-name:var(--font-libre)] text-[#2d2a26]`}
      style={{ colorScheme: "light" }}
    >
      <div className="mx-auto max-w-4xl px-6 py-8">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-[#5c4a3d] underline decoration-[#5c4a3d]/50 underline-offset-2 transition-colors hover:decoration-[#5c4a3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c4a3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe6]"
        >
          ← All editions
        </Link>

        <div className="border-4 border-[#2d2a26] p-6 shadow-[6px_6px_0_0_#2d2a26]">
          <header className="border-b-2 border-[#2d2a26] pb-4">
            <h1 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-wide text-[#1e3a2f] sm:text-6xl">
              {masthead}
            </h1>
            <p className="mt-2 font-[family-name:var(--font-bebas)] text-sm tracking-[0.25em] text-[#1e3a2f]">
              {tagline}
            </p>
            <p className="mt-3 text-sm text-[#5c4a3d]">
              {date} · {edition}
            </p>
          </header>

          <main className="mt-6">
            <article className="grid gap-8 sm:grid-cols-12">
              <div className="sm:col-span-7">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#1e3a2f]">
                  {lead.section}
                </p>
                <h2 className="font-[family-name:var(--font-bebas)] text-2xl leading-tight text-balance text-[#1e3a2f] sm:text-3xl">
                  {lead.headline}
                </h2>
                <p className="mt-3 text-[#3d362d] leading-relaxed">
                  {lead.dek}
                </p>
                <p className="mt-2 text-sm italic text-[#5c4a3d]">{lead.byline}</p>
              </div>
              <aside className="space-y-5 border-l-2 border-[#2d2a26]/30 pl-5 sm:col-span-5">
                {secondaries.map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a2f]">
                      {item.section}
                    </p>
                    <h3 className="mt-0.5 font-bold leading-snug text-[#2d2a26]">
                      {item.headline}
                    </h3>
                  </div>
                ))}
              </aside>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
