import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { newspaperContent } from "../lib/newspaper-content";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Edition 4 — Minimal | The Daily Chronicle",
  description: "Modern minimal newspaper design",
};

export default function Edition4() {
  const { masthead, date, edition, lead, secondaries } = newspaperContent;

  return (
    <div
      className={`${dmSans.variable} min-h-screen bg-white font-[family-name:var(--font-dm-sans)] text-zinc-800`}
      style={{ colorScheme: "light" }}
    >
      <div className="mx-auto max-w-3xl px-8 py-20">
        <Link
          href="/"
          className="mb-12 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
        >
          ← All editions
        </Link>

        <header className="mb-20">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {masthead}
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            {date} · {edition}
          </p>
        </header>

        <main className="space-y-16">
          <article>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              {lead.section}
            </p>
            <h2 className="text-2xl font-semibold leading-snug text-balance text-zinc-900 sm:text-3xl">
              {lead.headline}
            </h2>
            <p className="mt-6 max-w-xl text-zinc-600 leading-relaxed">
              {lead.dek}
            </p>
            <p className="mt-4 text-sm text-zinc-500">{lead.byline}</p>
          </article>

          <div className="grid gap-10 border-t border-zinc-200 pt-16 sm:grid-cols-3">
            {secondaries.map((item, i) => (
              <div key={i}>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {item.section}
                </p>
                <h3 className="mt-2 font-medium leading-snug text-zinc-800">
                  {item.headline}
                </h3>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
