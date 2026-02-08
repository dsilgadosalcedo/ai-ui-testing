import type { NewspaperContent } from "@/lib/newspaper-content";
import { VersionNav } from "./version-nav";

export function EditorialMagazine({ content }: { content: NewspaperContent }) {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <header className="mb-8 flex items-baseline justify-between border-b border-neutral-300 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            {content.masthead}
          </h1>
          <p className="text-sm text-neutral-500">{content.date}</p>
        </header>

        <section className="mb-10 overflow-hidden rounded-lg bg-neutral-800 shadow-xl">
          <div className="aspect-[16/9] bg-neutral-700" aria-hidden />
          <div className="p-8">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              {content.lead.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-300">
              {content.lead.summary}
            </p>
          </div>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.secondary.map((story, i) => (
            <article
              key={i}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {story.headline}
              </h3>
              <p className="mt-2 text-neutral-600">{story.summary}</p>
            </article>
          ))}
        </div>

        <footer className="mt-12 pt-6">
          <VersionNav />
        </footer>
      </div>
    </div>
  );
}
