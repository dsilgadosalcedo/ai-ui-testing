import type { NewspaperContent } from "@/lib/newspaper-content";
import { VersionNav } from "./version-nav";

export function ClassicBroadsheet({ content }: { content: NewspaperContent }) {
  return (
    <div className="min-h-screen bg-stone-100 font-serif text-black">
      <div className="mx-auto max-w-4xl border-x border-black bg-stone-50 px-8 py-6 shadow-lg">
        <header className="border-b-2 border-black pb-3">
          <h1 className="text-center text-4xl font-bold tracking-tight">
            {content.masthead}
          </h1>
          <p className="mt-1 text-center text-sm">{content.date}</p>
        </header>

        <div className="mt-4 grid grid-cols-4 gap-4 border-t border-black pt-4">
          <article className="col-span-3 border-r border-black pr-4">
            <h2 className="text-2xl font-bold leading-tight">
              {content.lead.headline}
            </h2>
            <p className="mt-2 text-sm leading-relaxed">{content.lead.summary}</p>
          </article>
          <aside className="col-span-1 space-y-3 border-l border-stone-300 pl-4">
            {content.secondary.map((story, i) => (
              <section key={i}>
                <h3 className="text-sm font-bold">{story.headline}</h3>
                <p className="mt-0.5 text-xs leading-snug">{story.summary}</p>
              </section>
            ))}
          </aside>
        </div>

        <footer className="mt-8 border-t border-black pt-4">
          <VersionNav />
        </footer>
      </div>
    </div>
  );
}
