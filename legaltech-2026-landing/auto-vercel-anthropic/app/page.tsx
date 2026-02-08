import Link from "next/link";
import { productName } from "@/lib/landing-content";

const versions = [
  { path: "1", label: "Minimal" },
  { path: "2", label: "Editorial" },
  { path: "3", label: "Dark" },
  { path: "4", label: "Geometric" },
  { path: "5", label: "Soft" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
      >
        Skip to main content
      </a>
      <main id="main" className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-2xl font-semibold text-zinc-900">
          {productName} — Landing variants
        </h1>
        <p className="mt-2 text-zinc-600">
          Pick a version (1–5) to view a different design style.
        </p>
        <ul className="mt-8 flex flex-col gap-3">
          {versions.map((v) => (
            <li key={v.path}>
              <Link
                href={`/${v.path}`}
                className="block rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
              >
                <span className="font-medium">Version {v.path}</span>
                <span className="ml-2 text-zinc-500">— {v.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
