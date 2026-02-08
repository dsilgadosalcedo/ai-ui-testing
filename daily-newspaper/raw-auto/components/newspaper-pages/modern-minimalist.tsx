import type { NewspaperContent } from "@/lib/newspaper-content";
import { VersionNav } from "./version-nav";

export function ModernMinimalist({ content }: { content: NewspaperContent }) {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <div className="mx-auto max-w-2xl px-8 py-16">
        <header className="mb-16">
          <p className="text-sm text-neutral-500">{content.date}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
            {content.masthead}
          </h1>
        </header>

        <article className="mb-20">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900">
            {content.lead.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            {content.lead.summary}
          </p>
        </article>

        <div className="space-y-12 border-t border-neutral-200 pt-12">
          {content.secondary.map((story, i) => (
            <section key={i}>
              <h3 className="text-lg font-medium text-neutral-900">
                {story.headline}
              </h3>
              <p className="mt-1 text-neutral-600">{story.summary}</p>
            </section>
          ))}
        </div>

        <footer className="mt-20 pt-8">
          <VersionNav />
        </footer>
      </div>
    </div>
  );
}
