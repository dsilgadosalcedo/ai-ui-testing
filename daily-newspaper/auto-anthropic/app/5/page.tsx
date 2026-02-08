import { Oswald, Merriweather } from "next/font/google";
import Link from "next/link";
import { newspaperContent } from "@/app/lib/newspaper-content";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export default function Edition5() {
  const { masthead, date, edition, lead, stories } = newspaperContent;

  return (
    <div
      className={`${oswald.variable} ${merriweather.variable} min-h-screen bg-[#0d0d0d] text-white`}
      style={{ fontFamily: "var(--font-merriweather), serif" }}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-8">
        <header className="relative z-10 flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#e63946] pb-4">
          <h1
            className="text-4xl font-bold uppercase leading-none tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            {masthead}
          </h1>
          <div className="text-right text-sm uppercase tracking-wider text-[#a0a0a0]">
            <span className="block text-[#e63946]">{date}</span>
            {edition && <span className="text-xs">{edition}</span>}
          </div>
        </header>

        <main className="relative mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="relative overflow-hidden bg-[#e63946] p-8 md:col-span-7 md:-rotate-[-0.5deg] md:shadow-2xl">
            <div className="relative z-10">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/90"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                {lead.section}
              </span>
              <h2
                className="mt-3 text-3xl font-bold leading-tight text-white drop-shadow-sm md:text-4xl"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                {lead.headline}
              </h2>
              {lead.dek && (
                <p className="mt-4 text-lg text-white/95">{lead.dek}</p>
              )}
              <p className="mt-2 text-sm text-white/80">{lead.byline}</p>
              {lead.excerpt && (
                <p className="mt-6 text-white/90">{lead.excerpt}</p>
              )}
            </div>
          </article>

          <aside className="grid grid-cols-1 gap-4 md:col-span-5 md:grid-cols-1">
            {stories.map((story, i) => (
              <article
                key={story.id}
                className="border-l-4 border-[#e63946] bg-[#1a1a1a] p-5 transition hover:bg-[#252525]"
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-widest text-[#e63946]"
                  style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                >
                  {story.section}
                </span>
                <h3
                  className="mt-2 text-lg font-bold leading-snug"
                  style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                >
                  <Link href="#" className="text-white hover:text-[#e63946]">
                    {story.headline}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-[#888]">{story.byline}</p>
                {story.excerpt && (
                  <p className="mt-2 text-sm text-[#aaa]">{story.excerpt}</p>
                )}
              </article>
            ))}
          </aside>
        </main>

        <footer className="mt-10 border-t border-[#333] pt-6 text-center">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider text-[#e63946] hover:underline"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            ← All editions
          </Link>
        </footer>
      </div>
    </div>
  );
}
