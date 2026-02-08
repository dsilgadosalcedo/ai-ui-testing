import Link from "next/link";

export function VersionNav() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-1 text-sm"
      aria-label="Switch newspaper design version"
    >
      {["1", "2", "3", "4", "5"].map((v) => (
        <span key={v} className="flex items-center gap-1">
          <Link
            href={`/${v}`}
            className="font-medium hover:underline focus:outline-none focus:underline"
          >
            {v}
          </Link>
          {v !== "5" && <span aria-hidden>·</span>}
        </span>
      ))}
    </nav>
  );
}
