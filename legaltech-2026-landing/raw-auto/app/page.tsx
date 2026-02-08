import Link from "next/link";

const variants = [
  { path: "/1", label: "Minimal editorial" },
  { path: "/2", label: "Dark tech / SaaS" },
  { path: "/3", label: "Corporate trust" },
  { path: "/4", label: "Warm and human" },
  { path: "/5", label: "Neo-brutalist" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans">
      <main className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Legal Tech 2026 – Landing variants
        </h1>
        <p className="mt-2 text-zinc-600">
          Choose a design to view the full landing page.
        </p>
        <ul className="mt-8 flex flex-col gap-3">
          {variants.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className="block rounded-lg border border-zinc-200 bg-white px-4 py-3 text-left font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
