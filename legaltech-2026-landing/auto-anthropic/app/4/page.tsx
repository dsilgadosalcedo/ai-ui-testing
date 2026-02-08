import Link from "next/link";
import { landingContent } from "../lib/landing-content";

const c = landingContent;

export default function Page4() {
  return (
    <>
      <header className="py-12">
        <div className="max-w-2xl mx-auto px-8 flex justify-between items-center">
          <span className="text-xl font-display font-light tracking-[0.2em] uppercase text-[var(--accent)]">
            Legal Tech
          </span>
          <nav className="flex gap-12">
            <a href="#features" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
              Features
            </a>
            <a href="#use-cases" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
              Use cases
            </a>
            <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline">
              All versions
            </Link>
          </nav>
        </div>
      </header>

      <main className="text-center">
        <section className="max-w-2xl mx-auto px-8 pt-24 pb-36">
          <h1 className="text-4xl md:text-5xl font-display font-light leading-tight mb-8" data-fade="1">
            {c.hero.headline}
          </h1>
          <p className="text-[var(--muted)] text-lg font-light leading-relaxed mb-14 max-w-xl mx-auto" data-fade="2">
            {c.hero.subhead}
          </p>
          <div className="flex justify-center gap-6" data-fade="3">
            <a
              href="#demo"
              className="inline-block px-10 py-4 border border-[var(--accent)] text-[var(--accent)] font-light tracking-widest uppercase text-sm hover:bg-[var(--accent-soft)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            >
              {c.hero.ctaPrimary}
            </a>
            <a
              href="#features"
              className="inline-block px-10 py-4 text-[var(--muted)] font-light tracking-widest uppercase text-sm hover:text-[var(--text)] transition-colors focus:outline-none focus:underline"
            >
              {c.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-8 py-16 border-y border-[var(--text)]/10">
          <div className="flex flex-wrap justify-center gap-12">
            {c.trust.badges.map((badge) => (
              <span key={badge} className="text-xs text-[var(--muted)] font-light tracking-[0.15em] uppercase">
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="features" className="max-w-2xl mx-auto px-8 py-32">
          <h2 className="text-2xl font-display font-light tracking-wider uppercase text-[var(--accent)] mb-20">
            Features
          </h2>
          <div className="space-y-20">
            {c.features.map((f) => (
              <article key={f.id} className="text-center">
                <h3 className="text-xl font-display font-light mb-4">{f.title}</h3>
                <p className="text-[var(--muted)] text-sm font-light leading-relaxed max-w-md mx-auto">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="use-cases" className="max-w-2xl mx-auto px-8 py-32 border-t border-[var(--text)]/10">
          <h2 className="text-2xl font-display font-light tracking-wider uppercase text-[var(--accent)] mb-20">
            Who it&apos;s for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {c.useCases.map((u) => (
              <div key={u.id} className="text-center">
                <h3 className="font-display font-light text-lg mb-3">{u.label}</h3>
                <p className="text-[var(--muted)] text-sm font-light leading-relaxed">
                  {u.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 border-t border-[var(--text)]/10">
          <div className="max-w-xl mx-auto px-8">
            <p className="font-display text-5xl font-light text-[var(--accent)] mb-4">
              {c.socialProof.stat}
            </p>
            <p className="text-sm text-[var(--muted)] font-light tracking-wider uppercase mb-10">
              {c.socialProof.statLabel}
            </p>
            <blockquote className="font-display text-2xl font-light leading-relaxed text-[var(--text)]/90 mb-6">
              &ldquo;{c.socialProof.quote}&rdquo;
            </blockquote>
            <cite className="text-xs not-italic text-[var(--muted)] font-light">
              — {c.socialProof.attribution}
            </cite>
          </div>
        </section>

        <section id="demo" className="max-w-2xl mx-auto px-8 py-32 border-t border-[var(--text)]/10">
          <h2 className="text-2xl font-display font-light mb-4">{c.finalCta.headline}</h2>
          <p className="text-[var(--muted)] font-light mb-12 max-w-md mx-auto">
            {c.finalCta.subhead}
          </p>
          <a
            href="#"
            className="inline-block px-12 py-4 border border-[var(--accent)] text-[var(--accent)] font-light tracking-widest uppercase text-sm hover:bg-[var(--accent-soft)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          >
            {c.finalCta.ctaPrimary}
          </a>
        </section>
      </main>

      <footer className="border-t border-[var(--text)]/10">
        <div className="max-w-2xl mx-auto px-8 py-16 text-center">
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {c.footer.product.map((item) => (
              <a key={item} href="#" className="text-sm text-[var(--muted)] font-light hover:text-[var(--accent)] transition-colors">
                {item}
              </a>
            ))}
            {c.footer.company.map((item) => (
              <a key={item} href="#" className="text-sm text-[var(--muted)] font-light hover:text-[var(--accent)] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-8 mb-6">
            {c.footer.legal.map(({ label, href }) => (
              <a key={label} href={href} className="text-xs text-[var(--muted)] font-light hover:text-[var(--text)]">
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] font-light">{c.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
