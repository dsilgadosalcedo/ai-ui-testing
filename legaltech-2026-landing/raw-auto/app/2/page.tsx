import Link from "next/link";
import {
  hero,
  trust,
  features,
  socialProof,
  ctaSection,
  footer,
} from "../lib/landing-content";

export default function Variant2() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-900 font-sans text-zinc-100">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -left-40 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden
      />

      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <span className="text-sm font-medium tracking-wide text-zinc-400">
            Legal Tech
          </span>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {hero.headline}
                </span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400">{hero.subhead}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#demo"
                  className="rounded-xl bg-white px-6 py-3 font-medium text-zinc-900 transition-opacity hover:opacity-90"
                >
                  {hero.ctaPrimary}
                </a>
                <a
                  href="#features"
                  className="rounded-xl border border-white/20 px-6 py-3 font-medium text-zinc-100 transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  {hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="aspect-video rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
          </div>
        </section>

        <section
          className="border-t border-white/10 py-12"
          aria-label="Trust and compliance"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm font-medium tracking-wide text-zinc-500">
              {trust.title}
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-8">
              {trust.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
                >
                  <span className="font-medium text-zinc-100">{item.label}</span>
                  <span className="ml-2 text-zinc-500">{item.description}</span>
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
          <h2 className="text-2xl font-bold text-zinc-100">What we offer</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <h3 className="font-semibold text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="border-t border-white/10 py-16"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm font-medium text-zinc-500">
              {socialProof.headline}
            </p>
            <p className="mt-2 text-center text-4xl font-bold text-white">
              {socialProof.stat}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {socialProof.statLabel}
              </span>
            </p>
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <blockquote className="text-lg text-zinc-300">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-sm not-italic text-zinc-500">
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
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-zinc-100">
              {ctaSection.headline}
            </h2>
            <p className="mt-4 text-zinc-400">{ctaSection.subhead}</p>
            <a
              href="#"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-medium text-zinc-900 transition-opacity hover:opacity-90"
            >
              {ctaSection.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <nav className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
            <div>
              <span className="font-medium text-zinc-500">Product</span>
              <ul className="mt-2 space-y-1">
                {footer.product.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-zinc-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-zinc-500">Legal</span>
              <ul className="mt-2 space-y-1">
                {footer.legal.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-zinc-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-zinc-500">Contact</span>
              <ul className="mt-2 space-y-1">
                {footer.contact.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-zinc-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <p className="mt-10 text-sm text-zinc-500">{footer.copyright}</p>
          <p className="mt-2">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300">
              Other versions
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
