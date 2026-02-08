import Link from "next/link";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import { newspaperContentExtended } from "../lib/newspaper-content-extended";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Edition 6 — Brutalist Retro | The Daily Chronicle",
  description: "Brutalist–retro extended newspaper front page",
};

export default function Edition6() {
  const { masthead, tagline, date, edition, leads, secondaries, briefs } =
    newspaperContentExtended;
  const [heroLead, ...secondaryLeads] = leads;

  return (
    <div
      className={`${bebas.variable} ${plexMono.variable} min-h-screen bg-[#f4efe6] font-[family-name:var(--font-plex-mono)] text-[#2d2a26]`}
      style={{ colorScheme: "light" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <Link
          href="/"
          className="animate-brutalist-reveal mb-4 inline-block text-sm text-[#1e3a2f] underline decoration-[#1e3a2f]/50 underline-offset-2 transition-colors hover:decoration-[#1e3a2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe6]"
          style={{ animationDelay: "0ms" }}
        >
          ← All editions
        </Link>

        <div className="border-4 border-[#2d2a26] p-4 shadow-[6px_6px_0_0_#2d2a26] sm:p-6">
          <header
            className="animate-brutalist-reveal border-b-4 border-[#2d2a26] pb-4"
            style={{ animationDelay: "50ms" }}
          >
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wide text-[#1e3a2f] sm:text-6xl md:text-7xl">
              {masthead}
            </h1>
            <p className="mt-2 font-[family-name:var(--font-bebas)] text-xs uppercase tracking-[0.2em] text-[#1e3a2f] sm:text-sm sm:tracking-[0.25em]">
              {tagline}
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-[#5c4a3d] sm:text-sm">
              {date} — {edition}
            </p>
          </header>

          <main className="mt-6 space-y-8">
            <section className="grid gap-6 sm:grid-cols-12">
              <article
                className="animate-brutalist-reveal border-l-4 border-[#1e3a2f] py-2 pl-4 sm:col-span-7"
                style={{ animationDelay: "100ms" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1e3a2f] sm:text-xs">
                  {heroLead.section}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-bebas)] text-2xl leading-tight text-balance text-[#2d2a26] sm:text-3xl md:text-4xl">
                  {heroLead.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#3d362d]">
                  {heroLead.dek}
                </p>
                <p className="mt-2 text-xs italic text-[#5c4a3d]">{heroLead.byline}</p>
              </article>
              <div className="flex flex-col gap-4 sm:col-span-5">
                {secondaryLeads.map((story, i) => (
                  <article
                    key={i}
                    className="animate-brutalist-reveal border-b border-[#2d2a26]/30 pb-4 last:border-0"
                    style={{ animationDelay: `${160 + i * 60}ms` }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1e3a2f]">
                      {story.section}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-bebas)] text-lg leading-snug text-[#2d2a26]">
                      {story.headline}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#5c4a3d]">
                      {story.dek}
                    </p>
                    <p className="mt-1 text-[10px] text-[#5c4a3d]">{story.byline}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="animate-brutalist-reveal border-t-2 border-[#2d2a26] pt-6"
              style={{ animationDelay: "320ms" }}
            >
              <h2 className="sr-only">More headlines</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {secondaries.map((item, i) => (
                  <div
                    key={i}
                    className="animate-brutalist-reveal border-l-2 border-[#1e3a2f] py-1 pl-3"
                    style={{ animationDelay: `${380 + i * 40}ms` }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1e3a2f]">
                      {item.section}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-[#2d2a26]">
                      {item.headline}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="animate-brutalist-reveal border-t-2 border-[#2d2a26] pt-6"
              style={{ animationDelay: "760ms" }}
              aria-labelledby="briefs-heading"
            >
              <h2 id="briefs-heading" className="font-[family-name:var(--font-bebas)] text-sm uppercase tracking-widest text-[#1e3a2f]">
                In brief
              </h2>
              <ul className="mt-3 space-y-1">
                {briefs.map((line, i) => (
                  <li
                    key={i}
                    className="animate-brutalist-reveal flex gap-2 text-xs text-[#3d362d]"
                    style={{ animationDelay: `${820 + i * 35}ms` }}
                  >
                    <span className="text-[#1e3a2f]" aria-hidden>·</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
