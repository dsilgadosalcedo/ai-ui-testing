import Image from "next/image";
import Link from "next/link";
import {
  MASTHEAD_NAME,
  articles,
  heroImage,
  formatNewspaperDate,
} from "../lib/newspaper-content";

export default function Version5() {
  const hero = articles.find((a) => a.isHero);
  const others = articles.filter((a) => !a.isHero);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded bg-stone-900 px-4 py-2 text-stone-50 focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <main id="main" className="mx-auto max-w-6xl scroll-mt-6 px-6 py-12" role="main">
        <header className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h1 className="font-[var(--font-serif)] text-4xl font-bold italic leading-tight text-balance md:text-5xl">
              {MASTHEAD_NAME}
            </h1>
            <p
              className="mt-4 font-[var(--font-serif)] text-sm text-stone-500 tabular-nums"
              suppressHydrationWarning
            >
              {formatNewspaperDate()}
            </p>
          </div>
          <div className="hidden lg:block" aria-hidden="true">
            <div className="h-px w-full bg-stone-300" />
          </div>
        </header>
        <h2 className="sr-only">Top stories</h2>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <article className="lg:col-span-7 lg:col-start-2">
            {hero && (
              <>
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-8 space-y-4">
                  <span className="font-[var(--font-serif)] text-xs uppercase tracking-widest text-stone-500">
                    {hero.kicker}
                  </span>
                  <h3 className="font-[var(--font-serif)] text-3xl font-bold leading-tight text-balance md:text-4xl">
                    {hero.title}
                  </h3>
                  {hero.byline && (
                    <p className="text-sm text-stone-500">{hero.byline}</p>
                  )}
                  <p className="font-[var(--font-serif)] text-stone-600 leading-relaxed text-pretty">
                    {hero.summary}
                  </p>
                </div>
              </>
            )}
          </article>
          <aside className="lg:col-span-3 space-y-10" aria-label="More stories">
            {others.map((article) => (
              <article key={article.id} className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
                  {article.kicker}
                </span>
                <h4 className="font-[var(--font-serif)] text-lg font-semibold leading-snug text-balance line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-stone-500 line-clamp-2 text-pretty">
                  {article.summary}
                </p>
              </article>
            ))}
          </aside>
        </div>
        <nav className="mt-20 pt-8 border-t border-stone-200" aria-label="Versions">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="text-stone-500 transition-colors hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded"
              >
                All versions
              </Link>
            </li>
            {[1, 2, 3, 4].map((n) => (
              <li key={n}>
                <Link
                  href={`/${n}`}
                  className="text-stone-500 transition-colors hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded"
                >
                  Version {n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
