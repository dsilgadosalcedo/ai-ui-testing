import { Fraunces } from "next/font/google";
import Link from "next/link";
import { newspaperContent } from "@/app/lib/newspaper-content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function Edition4() {
  const { masthead, date, edition, lead, stories } = newspaperContent;

  return (
    <div
      className={`${fraunces.variable} min-h-screen bg-[#fafaf9] text-[#2d2d2d]`}
      style={{ fontFamily: "var(--font-fraunces), serif" }}
    >
      <div className="mx-auto max-w-3xl px-8 py-20">
        <header className="mb-20">
          <h1 className="text-2xl font-semibold tracking-tight text-[#2d2d2d] md:text-3xl">
            {masthead}
          </h1>
          <p className="mt-4 text-sm text-[#6b6b6b]">
            {date}
            {edition && <span className="ml-2">· {edition}</span>}
          </p>
        </header>

        <main className="space-y-16">
          <article>
            <span className="text-xs font-medium uppercase tracking-wider text-[#7d8a7a]">
              {lead.section}
            </span>
            <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#2d2d2d] md:text-3xl">
              {lead.headline}
            </h2>
            {lead.dek && (
              <p className="mt-4 text-lg text-[#5a5a5a]">{lead.dek}</p>
            )}
            <p className="mt-3 text-sm text-[#888]">{lead.byline}</p>
            {lead.excerpt && (
              <p className="mt-8 leading-relaxed text-[#444]">
                {lead.excerpt}
              </p>
            )}
          </article>

          <div className="h-px w-12 bg-[#e0e0e0]" />

          <div className="space-y-14">
            {stories.map((story) => (
              <article key={story.id}>
                <span className="text-xs font-medium uppercase tracking-wider text-[#7d8a7a]">
                  {story.section}
                </span>
                <h3 className="mt-3 text-xl font-semibold leading-snug">
                  <Link
                    href="#"
                    className="text-[#2d2d2d] hover:text-[#7d8a7a]"
                  >
                    {story.headline}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-[#888]">{story.byline}</p>
                {story.excerpt && (
                  <p className="mt-3 text-[#5a5a5a]">{story.excerpt}</p>
                )}
              </article>
            ))}
          </div>
        </main>

        <footer className="mt-24 pt-8">
          <Link
            href="/"
            className="text-sm text-[#7d8a7a] hover:underline"
          >
            ← All editions
          </Link>
        </footer>
      </div>
    </div>
  );
}
