"use client";

import Link from "next/link";

const VERSIONS = [1, 2, 3, 4, 5] as const;

type VersionSwitcherProps = {
  current: number;
  className?: string;
};

export function VersionSwitcher({ current, className = "" }: VersionSwitcherProps) {
  return (
    <nav
      className={className}
      aria-label="Switch landing page version"
    >
      <span className="sr-only">Landing version: </span>
      <ul className="flex flex-wrap items-center gap-1 text-sm" role="list">
        {VERSIONS.map((v) => (
          <li key={v}>
            {v === current ? (
              <span
                className="font-medium opacity-100"
                aria-current="page"
              >
                {v}
              </span>
            ) : (
              <Link
                href={`/${v}`}
                className="opacity-60 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-400 rounded touch-manipulation"
                aria-label={`View landing version ${v}`}
              >
                {v}
              </Link>
            )}
            {v < 5 && (
              <span className="mx-1 opacity-40" aria-hidden="true">
                |
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
