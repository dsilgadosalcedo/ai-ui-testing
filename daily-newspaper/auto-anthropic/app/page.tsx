import Link from "next/link";

const editions = [
  { path: "/1", label: "Edition 1", style: "Classic broadsheet" },
  { path: "/2", label: "Edition 2", style: "Brutalist" },
  { path: "/3", label: "Edition 3", style: "Art deco" },
  { path: "/4", label: "Edition 4", style: "Minimal" },
  { path: "/5", label: "Edition 5", style: "Maximalist" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-6 py-16">
      <main className="w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-zinc-900">
          The Daily Chronicle
        </h1>
        <p className="mt-2 text-center text-sm text-zinc-600">
          Choose a front page design
        </p>
        <nav className="mt-10 flex flex-col gap-3">
          {editions.map(({ path, label, style }) => (
            <Link
              key={path}
              href={path}
              className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-left transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              <span className="font-medium text-zinc-900">{label}</span>
              <span className="ml-2 text-sm text-zinc-500">— {style}</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
