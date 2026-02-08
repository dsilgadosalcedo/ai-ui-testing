import Link from "next/link";
import { landingContent } from "../lib/landing-content";

const c = landingContent;

export default function Page2() {
  return (
    <>
      <header className="py-8">
        <div className="max-w-5xl mx-auto px-8 flex justify-between items-baseline">
          <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display), serif" }}>
            Legal Tech
          </span>
          <nav className="flex gap-10">
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
        <section className="max-w-5xl mx-auto px-8 pt-16 pb-32">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-8" data-animate="1">
                {c.hero.headline}
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed mb-12 max-w-lg" data-animate="2">
                {c.hero.subhead}
              </p>
              <div className="flex gap-5" data-animate="3">
                <a
                  href="#demo"
                  className="inline-block px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                >
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href="#features"
                  className="inline-block px-8 py-4 border border-[var(--text)]/30 text-[var(--text)] font-semibold rounded-sm hover:bg-[var(--text)]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--text)] focus:ring-offset-2"
                >
                  {c.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <aside className="col-span-12 lg:col-span-5 flex items-end">
              <p className="pull-quote text-2xl lg:text-3xl leading-snug border-l-4 border-[var(--quote)] pl-8 py-4" data-animate="4">
                Built for firms and in-house teams who demand precision and speed.
              </p>
            </aside>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-8 py-16 border-y border-[var(--text)]/10">
          <div className="flex flex-wrap gap-12 justify-between">
            {c.trust.badges.map((badge) => (
              <span key={badge} className="text-sm text-[var(--muted)] font-medium">
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="features" className="max-w-5xl mx-auto px-8 py-28">
          <h2 className="text-3xl font-bold mb-20">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {c.features.map((f, i) => (
              <article key={f.id} className="max-w-md">
                <span className="text-sm font-semibold text-[var(--accent)] block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{f.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="use-cases" className="max-w-5xl mx-auto px-8 py-28 border-t border-[var(--text)]/10">
          <h2 className="text-3xl font-bold mb-16">Who it&apos;s for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {c.useCases.map((u) => (
              <div key={u.id}>
                <h3 className="font-bold text-xl mb-3">{u.label}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--text)]/5 py-28">
          <div className="max-w-3xl mx-auto px-8">
            <p className="text-5xl font-bold text-[var(--accent)] mb-2" style={{ fontFamily: "var(--font-display), serif" }}>
              {c.socialProof.stat}
            </p>
            <p className="text-lg font-semibold text-[var(--muted)] mb-8">{c.socialProof.statLabel}</p>
            <blockquote className="pull-quote text-2xl leading-relaxed mb-6">
              &ldquo;{c.socialProof.quote}&rdquo;
            </blockquote>
            <cite className="text-sm not-italic text-[var(--muted)]">
              — {c.socialProof.attribution}
            </cite>
          </div>
        </section>

        <section id="demo" className="max-w-5xl mx-auto px-8 py-28">
          <h2 className="text-3xl font-bold mb-4">{c.finalCta.headline}</h2>
          <p className="text-[var(--muted)] text-lg mb-10 max-w-xl">
            {c.finalCta.subhead}
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            {c.finalCta.ctaPrimary}
          </a>
        </section>
      </main>

      <footer className="border-t border-[var(--text)]/10">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <div className="flex flex-wrap justify-between gap-12 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
                Product
              </p>
              <ul className="flex flex-col gap-2">
                {c.footer.product.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[var(--text)] hover:underline focus:outline-none focus:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-2">
                {c.footer.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[var(--text)] hover:underline focus:outline-none focus:underline">
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
                <a key={label} href={href} className="text-sm text-[var(--muted)] hover:text-[var(--text)] hover:underline">
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
