import type { NewspaperContent } from "@/lib/newspaper-content";
import { VersionNav } from "./version-nav";

export function BoldTabloid({ content }: { content: NewspaperContent }) {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <div className="mx-auto max-w-3xl border-4 border-black bg-white">
        <header className="border-b-4 border-black bg-red-600 px-4 py-3 text-white">
          <h1 className="text-2xl font-black uppercase tracking-tighter">
            {content.masthead}
          </h1>
          <p className="mt-0.5 text-xs font-bold">{content.date}</p>
        </header>

        <div className="grid grid-cols-2 gap-0">
          <article className="border-r-4 border-black p-4">
            <h2 className="text-3xl font-black uppercase leading-tight">
              {content.lead.headline}
            </h2>
            <p className="mt-3 text-sm font-medium leading-snug">
              {content.lead.summary}
            </p>
          </article>
          <aside className="flex flex-col border-l-2 border-black p-4">
            {content.secondary.map((story, i) => (
              <section
                key={i}
                className={
                  i < content.secondary.length - 1
                    ? "border-b-2 border-black pb-3"
                    : ""
                }
              >
                <h3 className="text-lg font-black uppercase">
                  {story.headline}
                </h3>
                <p className="mt-1 text-xs font-semibold">{story.summary}</p>
              </section>
            ))}
          </aside>
        </div>

        <footer className="border-t-4 border-black bg-neutral-100 px-4 py-3">
          <VersionNav />
        </footer>
      </div>
    </div>
  );
}
