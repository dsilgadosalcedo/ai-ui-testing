import Link from "next/link";
import { landingContent } from "../lib/landing-content";

const c = landingContent;

export default function Page5() {
  return (
    <>
      <header className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display), sans-serif" }}>
            LEGAL TECH
          </span>
          <nav className="flex gap-8">
            <a href="#features" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
              Features
            </a>
            <a href="#use-cases" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
              Use cases
            </a>
            <Link href="/" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
              All versions
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mesh min-h-[85vh] flex items-center px-8 -mx-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[var(--accent-2)]/15 blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto py-24">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8" data-stagger="1">
                {c.hero.headline}
              </h1>
              <p className="text-xl text-[var(--muted)] max-w-2xl mb-12 leading-relaxed" data-stagger="2">
                {c.hero.subhead}
              </p>
              <div className="flex flex-wrap gap-4" data-stagger="3">
                <a
                  href="#demo"
                  className="inline-block px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[#ea580c] transition-colors focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/50"
                >
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href="#features"
                  className="inline-block px-8 py-4 border-2 border-[var(--text)]/30 text-[var(--text)] font-bold rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  {c.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-wrap gap-8 justify-between items-center">
            {c.trust.badges.map((badge) => (
              <span
                key={badge}
                className="text-sm font-semibold text-[var(--muted)] px-4 py-2 rounded-full border border-[var(--text)]/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="features" className="relative py-32 slant">
          <div className="slant-inner max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold mb-20">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.features.map((f, i) => (
                <div
                  key={f.id}
                  className="hover-lift rounded-2xl p-8 border border-[var(--text)]/10 bg-[var(--bg)]/80 backdrop-blur"
                  data-stagger={String((i % 4) + 1)}
                >
                  <span className="inline-block w-10 h-10 rounded-lg bg-[var(--accent)]/20 text-[var(--accent)] font-bold flex items-center justify-center text-lg mb-4">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="max-w-6xl mx-auto px-8 py-32">
          <h2 className="text-4xl font-bold mb-16">Who it&apos;s for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.useCases.map((u) => (
              <div
                key={u.id}
                className="hover-lift rounded-2xl p-8 border border-[var(--text)]/10 bg-gradient-to-b from-[var(--accent)]/5 to-transparent"
              >
                <h3 className="text-xl font-bold mb-3">{u.label}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 mesh" />
          <div className="relative max-w-4xl mx-auto px-8 text-center">
            <p className="text-6xl md:text-7xl font-bold text-[var(--accent)] mb-4" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              {c.socialProof.stat}
            </p>
            <p className="text-xl font-semibold text-[var(--muted)] mb-8">{c.socialProof.statLabel}</p>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
              &ldquo;{c.socialProof.quote}&rdquo;
            </blockquote>
            <cite className="text-sm not-italic text-[var(--muted)]">
              — {c.socialProof.attribution}
            </cite>
          </div>
        </section>

        <section id="demo" className="max-w-6xl mx-auto px-8 py-32">
          <div className="relative rounded-3xl p-16 md:p-24 border-2 border-[var(--accent)]/30 bg-[var(--accent)]/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.finalCta.headline}</h2>
              <p className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto">
                {c.finalCta.subhead}
              </p>
              <a
                href="#"
                className="inline-block px-10 py-5 bg-[var(--accent)] text-white font-bold rounded-full text-lg hover:bg-[#ea580c] transition-colors focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/50"
              >
                {c.finalCta.ctaPrimary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--text)]/10">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-wrap justify-between gap-12 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
                Product
              </p>
              <ul className="flex flex-wrap gap-6">
                {c.footer.product.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-medium hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
                Company
              </p>
              <ul className="flex flex-wrap gap-6">
                {c.footer.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-medium hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[var(--text)]/10">
            <div className="flex gap-8">
              {c.footer.legal.map(({ label, href }) => (
                <a key={label} href={href} className="text-sm text-[var(--muted)] font-medium hover:text-[var(--text)]">
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
