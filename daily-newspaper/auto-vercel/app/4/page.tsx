import Image from "next/image";
import Link from "next/link";
import {
  MASTHEAD_NAME,
  articles,
  heroImage,
  formatNewspaperDate,
} from "../lib/newspaper-content";

export default function Version4() {
  const hero = articles.find((a) => a.isHero);
  const others = articles.filter((a) => !a.isHero);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded bg-red-600 px-4 py-2 text-white focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="border-b-4 border-red-600 bg-red-600 py-2">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-center text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            {MASTHEAD_NAME}
          </h1>
          <p
            className="mt-1 text-center text-xs font-medium text-red-100 tabular-nums"
            suppressHydrationWarning
          >
            {formatNewspaperDate()}
          </p>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-5xl scroll-mt-6 px-4 py-4" role="main">
        <h2 className="sr-only">Top stories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="sm:col-span-2 lg:col-span-2">
            {hero && (
              <>
                <div className="overflow-hidden rounded border-2 border-zinc-200">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    className="aspect-[4/3] w-full object-cover"
                    priority
                  />
                </div>
                <span className="mt-2 inline-block text-xs font-bold uppercase text-red-600">
                  {hero.kicker}
                </span>
                <h3 className="mt-0.5 text-lg font-black leading-tight text-balance line-clamp-2">
                  {hero.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 line-clamp-2">
                  {hero.summary}
                </p>
              </>
            )}
          </article>
          {others.map((article) => (
            <article
              key={article.id}
              className="border-b border-zinc-200 pb-3 last:border-b-0"
            >
              <span className="text-xs font-bold uppercase text-red-600">
                {article.kicker}
              </span>
              <h4 className="mt-0.5 text-base font-bold leading-snug text-balance line-clamp-2">
                {article.title}
              </h4>
              <p className="mt-1 text-xs text-zinc-600 line-clamp-2">
                {article.summary}
              </p>
            </article>
          ))}
        </div>
        <nav className="mt-6 pt-4 border-t border-zinc-200" aria-label="Versions">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <Link
                href="/"
                className="text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded"
              >
                All versions
              </Link>
            </li>
            {[1, 2, 3, 5].map((n) => (
              <li key={n}>
                <Link
                  href={`/${n}`}
                  className="text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded"
                >
                  V{n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
