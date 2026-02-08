import Link from "next/link";
import { landingContent } from "../lib/landing-content";

const c = landingContent;

export default function Page3() {
  return (
    <>
      <header className="border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-medium tracking-wider">&gt; LEGAL_TECH_2026</span>
          <nav className="flex gap-6">
            <a href="#features" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:underline">
              #features
            </a>
            <a href="#use-cases" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:underline">
              #use_cases
            </a>
            <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:underline">
              #all_versions
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="terminal-block p-8">
            <p className="text-[var(--muted)] text-sm mb-4">$ ./welcome</p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight cursor-blink">
              {c.hero.headline}
            </h1>
            <p className="text-[var(--muted)] text-sm mb-8 max-w-2xl leading-relaxed">
              {c.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-block px-5 py-2 border border-[var(--text)] text-[var(--text)] font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                &gt; {c.hero.ctaPrimary}
              </a>
              <a
                href="#features"
                className="inline-block px-5 py-2 text-[var(--muted)] font-medium hover:text-[var(--text)] transition-colors focus:outline-none focus:underline"
              >
                &gt; {c.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-8 border-y border-[var(--border)]">
          <div className="flex flex-wrap gap-8">
            {c.trust.badges.map((badge) => (
              <span key={badge} className="text-xs text-[var(--muted)] font-medium">
                [{badge}]
              </span>
            ))}
          </div>
        </section>

        <section id="features" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-sm font-semibold text-[var(--muted)] mb-8">// FEATURES</h2>
          <div className="space-y-6">
            {c.features.map((f) => (
              <div key={f.id} className="terminal-block p-6 hover:border-[var(--accent)]/50 transition-colors">
                <p className="text-[var(--accent)] text-xs font-medium mb-2">.{f.id}</p>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="use-cases" className="max-w-4xl mx-auto px-6 py-20 border-t border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--muted)] mb-8">// WHO_IT_FOR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.useCases.map((u) => (
              <div key={u.id} className="terminal-block p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">&gt; {u.label}</h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="terminal-block p-8 border-[var(--accent)]/40">
            <p className="text-[var(--accent)] text-4xl font-semibold mb-2">{c.socialProof.stat}</p>
            <p className="text-sm text-[var(--muted)] mb-6">{c.socialProof.statLabel}</p>
            <blockquote className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
              &quot;{c.socialProof.quote}&quot;
            </blockquote>
            <cite className="text-xs not-italic text-[var(--muted)]">
              — {c.socialProof.attribution}
            </cite>
          </div>
        </section>

        <section id="demo" className="max-w-4xl mx-auto px-6 py-20 border-t border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--muted)] mb-4">$ ./request_demo</h2>
          <h3 className="text-xl font-semibold mb-2">{c.finalCta.headline}</h3>
          <p className="text-[var(--muted)] text-sm mb-6 max-w-xl">
            {c.finalCta.subhead}
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-[var(--text)] text-[var(--bg)] font-semibold hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            &gt; {c.finalCta.ctaPrimary}
          </a>
        </section>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-between gap-8 mb-8">
            <div>
              <p className="text-xs text-[var(--muted)] mb-3">// product</p>
              <ul className="flex flex-wrap gap-4">
                {c.footer.product.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-[var(--accent)] focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-[var(--muted)] mb-3">// company</p>
              <ul className="flex flex-wrap gap-4">
                {c.footer.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-[var(--accent)] focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
            <div className="flex gap-6">
              {c.footer.legal.map(({ label, href }) => (
                <a key={label} href={href} className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
                  {label}
                </a>
              ))}
            </div>
            <p className="text-xs text-[var(--muted)]">{c.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
