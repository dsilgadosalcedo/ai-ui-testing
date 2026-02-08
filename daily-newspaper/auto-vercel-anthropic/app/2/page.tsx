import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { newspaperContent } from "../lib/newspaper-content";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Edition 2 — Brutalist | The Daily Chronicle",
  description: "Brutalist newspaper design",
};

export default function Edition2() {
  const { masthead, date, edition, lead, secondaries } = newspaperContent;

  return (
    <div
      className={`${plexMono.variable} min-h-screen bg-black font-[family-name:var(--font-plex-mono)] text-white`}
      style={{ colorScheme: "dark" }}
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-white/70 underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          ← All editions
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-bold uppercase tracking-tighter sm:text-7xl">
            {masthead}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
            {date} — {edition}
          </p>
        </header>

        <main className="space-y-16">
          <article className="grid gap-10 sm:grid-cols-2">
            <div className="border-l-4 border-white py-2 pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {lead.section}
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-balance sm:text-3xl">
                {lead.headline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {lead.dek}
              </p>
              <p className="mt-3 text-xs text-white/50">{lead.byline}</p>
            </div>
            <div className="flex flex-col justify-end space-y-6 sm:justify-start">
              {secondaries.map((item, i) => (
                <div key={i} className="border-b border-white/20 pb-4 last:border-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    {item.section}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{item.headline}</h3>
                </div>
              ))}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
