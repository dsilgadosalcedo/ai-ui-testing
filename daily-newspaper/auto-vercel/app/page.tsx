import Link from "next/link";

export default function Home() {
  const versions = [
    { path: "/1", label: "Version 1 – Classic broadsheet" },
    { path: "/2", label: "Version 2 – Modern minimal" },
    { path: "/3", label: "Version 3 – Bold / magazine" },
    { path: "/4", label: "Version 4 – Compact / tabloid" },
    { path: "/5", label: "Version 5 – Editorial / editorial-arts" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded bg-zinc-900 px-4 py-2 text-white focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <main
        id="main"
        className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center scroll-mt-6 px-6 py-16"
        role="main"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Daily Newspaper – 5 Versions
        </h1>
        <p className="mt-4 text-zinc-600">
          Choose a design to view the first page of The Daily Chronicle.
        </p>
        <nav className="mt-10" aria-label="Newspaper versions">
          <ul className="space-y-3">
            {versions.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
