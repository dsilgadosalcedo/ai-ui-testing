import Image from "next/image";
import Link from "next/link";
import {
  MASTHEAD_NAME,
  articles,
  heroImage,
  formatNewspaperDate,
} from "../lib/newspaper-content";

export default function Version1() {
  const hero = articles.find((a) => a.isHero);
  const others = articles.filter((a) => !a.isHero);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-[var(--font-serif)]">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded bg-black px-4 py-2 text-white focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="border-b-2 border-black py-4">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
            {MASTHEAD_NAME}
          </h1>
          <p
            className="mt-2 text-center text-sm font-[var(--font-geist-sans)] tabular-nums"
            suppressHydrationWarning
          >
            {formatNewspaperDate()}
          </p>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-8" role="main">
        <h2 className="sr-only">Top stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <article className="md:col-span-8">
            {hero && (
              <>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  {hero.kicker}
                </span>
                <h3 className="mt-1 text-2xl font-bold leading-tight text-balance md:text-3xl">
                  {hero.title}
                </h3>
                {hero.byline && (
                  <p className="mt-2 text-sm text-zinc-600">By {hero.byline}</p>
                )}
                <div className="mt-4 aspect-[8/5] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <p className="mt-4 text-zinc-700 leading-relaxed">
                  {hero.summary}
                </p>
              </>
            )}
          </article>
          <div className="md:col-span-4 space-y-6 border-l border-zinc-300 pl-6">
            {others.slice(0, 3).map((article) => (
              <article key={article.id}>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {article.kicker}
                </span>
                <h4 className="mt-1 text-lg font-bold leading-snug text-balance line-clamp-2">
                  {article.title}
                </h4>
                <p className="mt-1 text-sm text-zinc-600 line-clamp-2">
                  {article.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
        <nav className="mt-12 border-t border-zinc-300 pt-6" aria-label="Versions">
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <Link
                href="/"
                className="text-zinc-600 underline decoration-zinc-400 underline-offset-2 transition-colors hover:text-black focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 rounded"
              >
                All versions
              </Link>
            </li>
            {[2, 3, 4, 5].map((n) => (
              <li key={n}>
                <Link
                  href={`/${n}`}
                  className="text-zinc-600 underline decoration-zinc-400 underline-offset-2 transition-colors hover:text-black focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 rounded"
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
