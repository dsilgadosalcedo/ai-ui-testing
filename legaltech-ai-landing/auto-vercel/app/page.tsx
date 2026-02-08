import Link from "next/link";

export const metadata = {
  title: "Legal Tech | Landing Page Versions",
  description:
    "Five style variants of the Legal Tech landing page. Choose a version to view.",
};

const versions = [
  { path: "/1", label: "Version 1", style: "Minimal / Corporate" },
  { path: "/2", label: "Version 2", style: "Dark / Noir" },
  { path: "/3", label: "Version 3", style: "Editorial / Magazine" },
  { path: "/4", label: "Version 4", style: "Soft / Modern SaaS" },
  { path: "/5", label: "Version 5", style: "Brutalist / Industrial" },
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
        <main
          id="main-content"
          className="mx-auto max-w-2xl px-6 py-24 scroll-mt-20"
          tabIndex={-1}
        >
          <h1 className="text-3xl font-semibold text-neutral-900 text-balance">
            Legal Tech Landing Pages
          </h1>
          <p className="mt-4 text-neutral-600">
            Five style variants of the same legal tech product. Pick a version
            to view the full landing page.
          </p>
          <nav
            className="mt-10 flex flex-col gap-3"
            aria-label="Landing page versions"
          >
            {versions.map((v) => (
              <Link
                key={v.path}
                href={v.path}
                className="block rounded-lg border border-neutral-200 bg-white px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 touch-manipulation"
                style={{ touchAction: "manipulation" }}
              >
                <span className="font-medium text-neutral-900">{v.label}</span>
                <span className="ml-2 text-neutral-500">— {v.style}</span>
              </Link>
            ))}
          </nav>
        </main>
      </div>
    </>
  );
}
