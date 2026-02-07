import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-6 py-16">
      <main className="w-full max-w-md space-y-10 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          LexForge — Landing page versions
        </h1>
        <p className="text-zinc-600">
          Choose a version to view the legal tech landing page.
        </p>
        <nav className="flex flex-col gap-3" aria-label="Landing page versions">
          {["1", "2", "3", "4", "5"].map((v) => (
            <Link
              key={v}
              href={`/${v}`}
              className="flex h-12 items-center justify-center rounded-lg bg-zinc-800 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2"
            >
              Version {v}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
