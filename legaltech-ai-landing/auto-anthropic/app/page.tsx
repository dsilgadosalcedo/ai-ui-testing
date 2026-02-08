import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center justify-center p-8">
      <main className="max-w-lg w-full text-center">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Legal Tech Landing Pages
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Five distinct designs for the same product. Pick a version to view.
        </p>
        <nav className="flex flex-wrap justify-center gap-3" aria-label="Landing page versions">
          {["1", "2", "3", "4", "5"].map((v) => (
            <Link
              key={v}
              href={`/${v}`}
              className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-lg bg-zinc-800 text-white px-5 font-medium transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              {v}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
