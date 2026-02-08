import Link from "next/link";

const versions = [
  { path: "/1", label: "Version 1", style: "Corporate / trust" },
  { path: "/2", label: "Version 2", style: "Modern SaaS" },
  { path: "/3", label: "Version 3", style: "Dark premium" },
  { path: "/4", label: "Version 4", style: "Editorial / bold" },
  { path: "/5", label: "Version 5", style: "Minimal / calm" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-8 px-6 py-16">
        <h1 className="text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          LexFlow – Landing page versions
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          Choose a version to view the legal tech landing page in a different style.
        </p>
        <ul className="flex w-full flex-col gap-3">
          {versions.map((v) => (
            <li key={v.path}>
              <Link
                href={v.path}
                className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-left transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-750"
              >
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {v.label} ({v.style})
                </span>
                <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                  localhost:3000{v.path}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
