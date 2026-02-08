import Link from "next/link";
import { Playfair_Display, Lora } from "next/font/google";
import { newspaperContent } from "../lib/newspaper-content";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Edition 1 — Classic | The Daily Chronicle",
  description: "Classic editorial newspaper design",
};

export default function Edition1() {
  const { masthead, tagline, date, edition, lead, secondaries } = newspaperContent;

  return (
    <div
      className={`${playfair.variable} ${lora.variable} min-h-screen bg-[#faf9f6] font-[family-name:var(--font-lora)] text-[#1a1a1a]`}
      style={{ colorScheme: "light" }}
    >
      <div className="mx-auto max-w-4xl px-6 py-8">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-[#2c5282] underline decoration-[#2c5282]/40 underline-offset-2 transition-colors hover:decoration-[#2c5282] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5282] focus-visible:ring-offset-2"
        >
          ← All editions
        </Link>

        <header className="border-b-2 border-[#1a1a1a] pb-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight sm:text-5xl">
            {masthead}
          </h1>
          <p className="mt-1 font-[family-name:var(--font-playfair)] text-sm uppercase tracking-widest text-[#2c5282]">
            {tagline}
          </p>
          <p className="mt-3 text-sm text-[#444]">
            {date} · {edition}
          </p>
        </header>

        <main className="mt-8">
          <article className="grid gap-8 sm:grid-cols-12">
            <div className="sm:col-span-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#2c5282]">
                {lead.section}
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-balance sm:text-4xl">
                {lead.headline}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-[#333]">
                {lead.dek}
              </p>
              <p className="mt-2 text-sm italic text-[#555]">{lead.byline}</p>
            </div>
            <aside className="space-y-6 border-l-2 border-[#e2e8f0] pl-6 sm:col-span-4">
              {secondaries.map((item, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2c5282]">
                    {item.section}
                  </p>
                  <h3 className="mt-0.5 font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug">
                    {item.headline}
                  </h3>
                </div>
              ))}
            </aside>
          </article>
        </main>
      </div>
    </div>
  );
}
