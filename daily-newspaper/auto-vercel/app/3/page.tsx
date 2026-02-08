import Image from "next/image";
import Link from "next/link";
import {
  MASTHEAD_NAME,
  articles,
  heroImage,
  formatNewspaperDate,
} from "../lib/newspaper-content";

export default function Version3() {
  const hero = articles.find((a) => a.isHero);
  const others = articles.filter((a) => !a.isHero);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded bg-white px-4 py-2 text-zinc-950 focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        Skip to main content
      </a>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600/90 to-zinc-950/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {MASTHEAD_NAME}
          </h1>
          <p
            className="mt-3 text-sm text-amber-200/90 tabular-nums"
            suppressHydrationWarning
          >
            {formatNewspaperDate()}
          </p>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-6xl scroll-mt-6 px-6 py-12" role="main">
        <h2 className="sr-only">Top stories</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {hero && (
              <>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-800">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    className="h-full w-full object-cover opacity-90"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 to-transparent p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {hero.kicker}
                    </span>
                    <h3 className="mt-2 text-3xl font-bold leading-tight text-balance md:text-4xl">
                      {hero.title}
                    </h3>
                    {hero.byline && (
                      <p className="mt-2 text-sm text-zinc-400">
                        By {hero.byline}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                  {hero.summary}
                </p>
              </>
            )}
          </article>
          <div className="lg:col-span-4 space-y-6">
            {others.map((article) => (
              <article
                key={article.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-amber-600/50 focus-within:border-amber-500"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {article.kicker}
                </span>
                <h4 className="mt-2 text-lg font-bold leading-snug text-balance line-clamp-2">
                  {article.title}
                </h4>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                  {article.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-zinc-800" aria-label="Versions">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="text-zinc-400 transition-colors hover:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
              >
                All versions
              </Link>
            </li>
            {[1, 2, 4, 5].map((n) => (
              <li key={n}>
                <Link
                  href={`/${n}`}
                  className="text-zinc-400 transition-colors hover:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
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
