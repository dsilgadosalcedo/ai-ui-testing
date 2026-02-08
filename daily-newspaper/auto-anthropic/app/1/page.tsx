import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { newspaperContent } from "@/app/lib/newspaper-content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export default function Edition1() {
  const { masthead, date, edition, lead, stories } = newspaperContent;

  return (
    <div
      className={`${playfair.variable} ${sourceSerif.variable} min-h-screen bg-[#f5f0e8] text-[#1a1a1a]`}
      style={{ fontFamily: "var(--font-source-serif), serif" }}
    >
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="border-b-4 border-[#8b0000] pb-4">
          <div className="flex items-baseline justify-between gap-4">
            <h1
              className="text-4xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {masthead}
            </h1>
            <div className="text-right text-sm text-[#555]">
              {date}
              {edition && (
                <span className="ml-2 border-l border-[#999] pl-2">
                  {edition}
                </span>
              )}
            </div>
          </div>
        </header>

        <main className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
          <article className="md:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8b0000]">
              {lead.section}
            </span>
            <h2
              className="mt-2 text-3xl font-bold leading-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {lead.headline}
            </h2>
            {lead.dek && (
              <p className="mt-2 text-lg text-[#444]">{lead.dek}</p>
            )}
            <p className="mt-2 text-sm text-[#666]">{lead.byline}</p>
            {lead.excerpt && (
              <p className="mt-4 columns-1 text-[#333] md:columns-2 md:gap-8">
                {lead.excerpt}
              </p>
            )}
          </article>

          <aside className="space-y-6 border-l border-[#ccc] pl-6 md:col-span-4">
            {stories.map((story) => (
              <article key={story.id}>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8b0000]">
                  {story.section}
                </span>
                <h3
                  className="mt-1 text-lg font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  <Link href="#" className="hover:underline">
                    {story.headline}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-[#666]">{story.byline}</p>
                {story.excerpt && (
                  <p className="mt-2 text-sm text-[#555]">{story.excerpt}</p>
                )}
              </article>
            ))}
          </aside>
        </main>

        <footer className="mt-10 border-t border-[#ccc] pt-4 text-center text-xs text-[#666]">
          <Link href="/" className="text-[#8b0000] hover:underline">
            ← All editions
          </Link>
        </footer>
      </div>
    </div>
  );
}
