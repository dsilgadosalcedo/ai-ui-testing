import Link from "next/link";
import { Oswald, Source_Serif_4 } from "next/font/google";
import { newspaperContent } from "../lib/newspaper-content";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Edition 5 — Maximalist | The Daily Chronicle",
  description: "Maximalist bold newspaper design",
};

export default function Edition5() {
  const { masthead, date, edition, lead, secondaries } = newspaperContent;

  return (
    <div
      className={`${oswald.variable} ${sourceSerif.variable} min-h-screen overflow-x-hidden bg-zinc-900 font-[family-name:var(--font-source-serif)] text-white`}
      style={{ colorScheme: "dark" }}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-8">
        <Link
          href="/"
          className="relative z-10 mb-6 inline-block text-sm font-medium text-amber-300 underline decoration-amber-300/50 underline-offset-2 transition-colors hover:decoration-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          ← All editions
        </Link>

        <header className="relative z-10 mb-10">
          <div className="inline-block bg-amber-400 px-4 py-1">
            <p className="font-[family-name:var(--font-oswald)] text-xs font-bold uppercase tracking-widest text-zinc-900">
              {date}
            </p>
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl md:text-8xl">
            {masthead}
          </h1>
          <p className="mt-2 text-sm text-zinc-400">{edition}</p>
        </header>

        <main className="relative">
          <div className="relative grid gap-6 sm:grid-cols-12">
            <article className="relative z-10 sm:col-span-7">
              <div className="bg-rose-600 p-6">
                <p className="font-[family-name:var(--font-oswald)] text-xs font-bold uppercase tracking-widest text-rose-200">
                  {lead.section}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase leading-tight text-balance sm:text-4xl">
                  {lead.headline}
                </h2>
                <p className="mt-4 text-rose-50/95 leading-relaxed">
                  {lead.dek}
                </p>
                <p className="mt-3 text-sm text-rose-200">{lead.byline}</p>
              </div>
            </article>

            <aside className="relative sm:col-span-5 sm:-mt-4">
              <div className="space-y-4">
                {secondaries.map((item, i) => (
                  <div
                    key={i}
                    className="border-2 border-amber-400 bg-zinc-800 p-4"
                  >
                    <p className="font-[family-name:var(--font-oswald)] text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      {item.section}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-oswald)] text-lg font-semibold leading-snug">
                      {item.headline}
                    </h3>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div
            className="pointer-events-none absolute -right-20 top-20 hidden select-none font-[family-name:var(--font-oswald)] text-[12rem] font-bold uppercase leading-none text-zinc-700/40 md:block"
            aria-hidden
          >
            News
          </div>
        </main>
      </div>
    </div>
  );
}
