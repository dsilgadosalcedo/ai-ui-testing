import Link from "next/link";
import {
  hero,
  trust,
  features,
  socialProof,
  ctaSection,
  footer,
} from "../lib/landing-content";

const featureIcons: Record<string, string> = {
  "ai-review": "AI",
  "document-automation": "Doc",
  "due-diligence": "DD",
  integrations: "Int",
};

export default function Variant3() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <header className="border-b border-slate-700 bg-slate-800/50">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal Tech
            </span>
            <span className="rounded bg-emerald-600/20 px-2 py-1 text-xs font-medium text-emerald-400">
              Enterprise
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {hero.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#demo"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#features"
                className="rounded-lg border border-slate-600 bg-slate-800 px-6 py-3 font-medium text-slate-100 transition-colors hover:border-slate-500"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section
          className="border-y border-slate-700 bg-slate-800/30 py-10"
          aria-label="Trust and compliance"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
              {trust.title}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {trust.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 py-4"
                >
                  <span className="font-semibold text-slate-100">
                    {item.label}
                  </span>
                  <span className="text-slate-400">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-6xl px-6 py-20"
          aria-label="Features"
        >
          <h2 className="text-center text-xl font-bold uppercase tracking-wider text-slate-200">
            What we offer
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.id}
                className="rounded-lg border border-slate-700 bg-slate-800/50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20 text-sm font-bold text-blue-400">
                  {featureIcons[f.id] ?? "•"}
                </div>
                <h3 className="mt-4 font-semibold text-slate-100">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="border-t border-slate-700 bg-slate-800/30 py-16"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
              {socialProof.headline}
            </p>
            <p className="mt-4 text-center text-3xl font-bold text-white">
              {socialProof.stat} {socialProof.statLabel}
            </p>
            <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-slate-600 bg-slate-800/50 p-8">
              <blockquote className="text-slate-200">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-sm not-italic text-slate-400">
                — {socialProof.testimonialAuthor}
              </cite>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-6xl px-6 py-20"
          aria-label="Call to action"
        >
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-100">
              {ctaSection.headline}
            </h2>
            <p className="mt-4 text-slate-400">{ctaSection.subhead}</p>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-500"
            >
              {ctaSection.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-700 bg-slate-800/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <nav className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div>
              <span className="font-semibold text-slate-400">Product</span>
              <ul className="mt-2 space-y-1">
                {footer.product.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-slate-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-slate-400">Legal</span>
              <ul className="mt-2 space-y-1">
                {footer.legal.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-slate-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-slate-400">Contact</span>
              <ul className="mt-2 space-y-1">
                {footer.contact.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-slate-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <p className="mt-10 text-sm text-slate-500">{footer.copyright}</p>
          <p className="mt-2">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-slate-300"
            >
              Other versions
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
