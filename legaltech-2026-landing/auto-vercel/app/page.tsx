import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
      >
        Skip to main content
      </a>
      <main
        id="main"
        className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 scroll-mt-24"
        tabIndex={-1}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-neutral-900">
          Legal Tech 2026 — Landing versions
        </h1>
        <p className="mt-4 text-center text-neutral-600 text-pretty">
          Choose a design version to view the full landing page.
        </p>
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          aria-label="Landing page versions"
        >
          {[1, 2, 3, 4, 5].map((v) => (
            <Link
              key={v}
              href={`/${v}`}
              className="flex h-12 min-w-[3rem] items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 touch-manipulation"
            >
              Version {v}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-sm text-neutral-500 text-pretty">
          Each version uses the same content with a different UX/UI style: minimal, dark, card-based, asymmetric, and glassmorphism.
        </p>
      </main>
    </div>
  );
}
