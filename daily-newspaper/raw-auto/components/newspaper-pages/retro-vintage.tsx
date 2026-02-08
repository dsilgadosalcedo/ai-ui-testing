import type { NewspaperContent } from "@/lib/newspaper-content";
import { VersionNav } from "./version-nav";

export function RetroVintage({ content }: { content: NewspaperContent }) {
  return (
    <div className="min-h-screen bg-amber-50 font-serif text-amber-950">
      <div className="mx-auto max-w-3xl border-2 border-amber-800/30 bg-amber-50/95 px-10 py-8 shadow-amber-900/10">
        <div className="border border-amber-700/40 p-6">
          <header className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">
              {content.date}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-wide text-amber-900">
              {content.masthead}
            </h1>
            <div className="mx-auto mt-2 h-px w-24 bg-amber-700/50" />
          </header>

          <article className="mt-8 border-t border-amber-700/30 pt-6">
            <h2 className="text-2xl font-bold leading-snug text-amber-900">
              {content.lead.headline}
            </h2>
            <p className="mt-3 text-amber-900/90 leading-relaxed">
              {content.lead.summary}
            </p>
          </article>

          <div className="mt-8 grid gap-6 border-t border-amber-700/30 pt-6 sm:grid-cols-3">
            {content.secondary.map((story, i) => (
              <section key={i} className="border-l-2 border-amber-700/40 pl-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                  {story.headline}
                </h3>
                <p className="mt-1 text-xs text-amber-900/80">{story.summary}</p>
              </section>
            ))}
          </div>

          <footer className="mt-8 border-t border-amber-700/30 pt-4">
            <VersionNav />
          </footer>
        </div>
      </div>
    </div>
  );
}
