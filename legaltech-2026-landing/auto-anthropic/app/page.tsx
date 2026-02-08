import Link from "next/link";

const versions = [
  { path: "/1", name: "Brutalist" },
  { path: "/2", name: "Editorial" },
  { path: "/3", name: "Terminal" },
  { path: "/4", name: "Luxury" },
  { path: "/5", name: "Maximalist" },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-zinc-100 text-zinc-900">
      <h1 className="text-2xl font-semibold">Legal Tech 2026 — Landing variants</h1>
      <p className="text-zinc-600 text-center max-w-md">
        Choose a design version to view the landing page.
      </p>
      <nav className="flex flex-wrap justify-center gap-4" aria-label="Landing versions">
        {versions.map(({ path, name }) => (
          <Link
            key={path}
            href={path}
            className="px-6 py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2"
          >
            {name} — {path}
          </Link>
        ))}
      </nav>
    </main>
  );
}
