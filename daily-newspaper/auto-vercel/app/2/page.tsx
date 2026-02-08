import Image from "next/image";
import Link from "next/link";
import {
  MASTHEAD_NAME,
  articles,
  heroImage,
  formatNewspaperDate,
} from "../lib/newspaper-content";

export default function Version2() {
  const hero = articles.find((a) => a.isHero);
  const others = articles.filter((a) => !a.isHero);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded bg-zinc-900 px-4 py-2 text-white focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {MASTHEAD_NAME}
          </h1>
          <p
            className="mt-4 text-sm text-zinc-500 tabular-nums"
            suppressHydrationWarning
          >
            {formatNewspaperDate()}
          </p>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl scroll-mt-6 px-6 pb-24" role="main">
        <h2 className="sr-only">Top stories</h2>
        <div className="space-y-20">
          {hero && (
            <article className="space-y-6">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                {hero.kicker}
              </span>
              <h3 className="text-2xl font-semibold leading-tight text-balance md:text-3xl">
                {hero.title}
              </h3>
              {hero.byline && (
                <p className="text-sm text-zinc-500">{hero.byline}</p>
              )}
              <div className="aspect-[8/5] w-full overflow-hidden rounded-sm bg-zinc-100">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <p className="text-zinc-600 leading-relaxed max-w-2xl">
                {hero.summary}
              </p>
            </article>
          )}
          <div className="border-t border-zinc-200 pt-12">
            <div className="space-y-14">
              {others.map((article) => (
                <article key={article.id} className="space-y-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                    {article.kicker}
                  </span>
                  <h4 className="text-xl font-semibold leading-snug text-balance line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-zinc-600 text-pretty line-clamp-2">
                    {article.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <nav className="mt-20 pt-8 border-t border-zinc-200" aria-label="Versions">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded"
              >
                All versions
              </Link>
            </li>
            {[1, 3, 4, 5].map((n) => (
              <li key={n}>
                <Link
                  href={`/${n}`}
                  className="text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded"
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
