import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-zinc-900">
      <main className="flex w-full max-w-2xl flex-col items-center gap-10 px-6 py-16">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Daily Newspaper
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          Choose a design
        </p>
        <nav className="flex flex-wrap justify-center gap-3" aria-label="Editions">
          {[1, 2, 3, 4, 5].map((n) => (
            <Link
              key={n}
              href={`/${n}`}
              className="flex h-12 min-w-[3rem] items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-500"
            >
              {n}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
