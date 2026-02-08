import Link from "next/link";
import { landingContent } from "../lib/landing-content";

const c = landingContent;

export default function Page1() {
  return (
    <>
      <header className="border-b border-[var(--text)]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-semibold tracking-tight">LEGAL TECH</span>
          <nav className="flex gap-8">
            <a href="#features" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:underline">
              Features
            </a>
            <a href="#use-cases" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:underline">
              Use cases
            </a>
            <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:underline">
              All versions
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-24 border-b border-[var(--text)]/20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6">
                {c.hero.headline}
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-xl mb-10">
                {c.hero.subhead}
              </p>
              <div className="flex gap-4">
                <a
                  href="#demo"
                  className="inline-block px-6 py-3 bg-[var(--accent)] text-white font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href="#features"
                  className="inline-block px-6 py-3 border border-[var(--text)] text-[var(--text)] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text)]"
                >
                  {c.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 border-b border-[var(--text)]/20">
          <div className="flex flex-wrap gap-8 justify-between">
            {c.trust.badges.map((badge) => (
              <span
                key={badge}
                className="text-sm text-[var(--muted)] font-medium uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16">Features</h2>
          <div className="grid grid-cols-12 gap-8">
            {c.features.map((f, i) => (
              <div
                key={f.id}
                className="col-span-12 sm:col-span-6 lg:col-span-3 border border-[var(--text)]/20 p-6 hover:border-[var(--accent)] transition-colors"
              >
                <span className="text-xs text-[var(--accent)] font-semibold block mb-3">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--muted)]">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="use-cases" className="max-w-6xl mx-auto px-6 py-24 border-t border-[var(--text)]/20">
          <h2 className="text-3xl font-bold mb-12">Who it&apos;s for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.useCases.map((u) => (
              <div key={u.id} className="p-6 border border-[var(--text)]/20">
                <h3 className="font-bold text-lg mb-2">{u.label}</h3>
                <p className="text-[var(--muted)] text-sm">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-[var(--text)]/20 bg-[var(--text)]/5">
          <div className="max-w-2xl">
            <p className="text-6xl font-bold text-[var(--accent)] mb-4">
              {c.socialProof.stat}
            </p>
            <p className="text-lg font-semibold mb-4">{c.socialProof.statLabel}</p>
            <blockquote className="text-[var(--muted)] mb-4">
              &ldquo;{c.socialProof.quote}&rdquo;
            </blockquote>
            <cite className="text-sm not-italic text-[var(--muted)]">
              — {c.socialProof.attribution}
            </cite>
          </div>
        </section>

        <section id="demo" className="max-w-6xl mx-auto px-6 py-24 border-t border-[var(--text)]/20">
          <h2 className="text-3xl font-bold mb-4">{c.finalCta.headline}</h2>
          <p className="text-[var(--muted)] mb-8 max-w-xl">
            {c.finalCta.subhead}
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-[var(--accent)] text-white font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            {c.finalCta.ctaPrimary}
          </a>
        </section>
      </main>

      <footer className="border-t border-[var(--text)]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-between gap-8 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                Product
              </p>
              <ul className="flex flex-wrap gap-4">
                {c.footer.product.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:underline focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                Company
              </p>
              <ul className="flex flex-wrap gap-4">
                {c.footer.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:underline focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[var(--text)]/20">
            <div className="flex gap-6">
              {c.footer.legal.map(({ label, href }) => (
                <a key={label} href={href} className="text-sm text-[var(--muted)] hover:underline">
                  {label}
                </a>
              ))}
            </div>
            <p className="text-sm text-[var(--muted)]">{c.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
