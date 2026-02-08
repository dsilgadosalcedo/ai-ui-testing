import Link from "next/link";
import {
  hero,
  trust,
  features,
  socialProof,
  ctaSection,
  footer,
} from "../lib/landing-content";

export default function Variant5() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <header className="border-b-4 border-black">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <span className="font-mono text-sm font-bold uppercase tracking-wider">
            Legal Tech
          </span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="border-4 border-black p-8 md:p-12">
            <p className="font-mono text-sm font-bold uppercase tracking-wider text-black">
              2026
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-black/80">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-block border-4 border-black bg-lime-400 px-6 py-3 font-bold uppercase tracking-wide transition-colors hover:bg-lime-300"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#features"
                className="inline-block border-4 border-black px-6 py-3 font-bold uppercase tracking-wide transition-colors hover:bg-black hover:text-white"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section
          className="border-y-4 border-black bg-black py-10"
          aria-label="Trust and compliance"
        >
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-mono text-center text-xs font-bold uppercase tracking-wider text-white">
              {trust.title}
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-6">
              {trust.items.map((item) => (
                <li
                  key={item.label}
                  className="border-2 border-white px-4 py-2 font-mono text-sm text-white"
                >
                  <span className="font-bold">{item.label}</span>
                  <span className="ml-2 opacity-80">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-20"
          aria-label="Features"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-black">
            What we offer
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.id}
                className={`border-4 border-black p-6 ${
                  i % 2 === 0 ? "bg-white" : "bg-lime-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-black/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 font-mono text-sm text-black/80">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="border-t-4 border-black bg-lime-100 py-16"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-mono text-center text-xs font-bold uppercase tracking-wider text-black">
              {socialProof.headline}
            </p>
            <p className="mt-4 text-center font-mono text-4xl font-bold">
              {socialProof.stat} {socialProof.statLabel}
            </p>
            <div className="mx-auto mt-10 max-w-xl border-4 border-black bg-white p-8">
              <blockquote className="text-lg font-medium">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
              <cite className="mt-4 block font-mono text-sm not-italic text-black/70">
                — {socialProof.testimonialAuthor}
              </cite>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-5xl px-6 py-20"
          aria-label="Call to action"
        >
          <div className="border-4 border-black bg-black p-12 text-white">
            <h2 className="text-2xl font-bold">{ctaSection.headline}</h2>
            <p className="mt-4 text-white/80">{ctaSection.subhead}</p>
            <a
              href="#"
              className="mt-8 inline-block border-4 border-white bg-lime-400 px-8 py-3 font-bold uppercase tracking-wide text-black transition-colors hover:bg-lime-300"
            >
              {ctaSection.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <nav className="flex flex-wrap gap-x-10 gap-y-6 font-mono text-sm">
            <div>
              <span className="font-bold uppercase tracking-wider text-black/60">
                Product
              </span>
              <ul className="mt-2 space-y-1">
                {footer.product.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-black hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-black/60">
                Legal
              </span>
              <ul className="mt-2 space-y-1">
                {footer.legal.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-black hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-black/60">
                Contact
              </span>
              <ul className="mt-2 space-y-1">
                {footer.contact.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-black hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <p className="mt-10 font-mono text-sm text-black/60">
            {footer.copyright}
          </p>
          <p className="mt-2">
            <Link
              href="/"
              className="font-mono text-sm text-black/60 hover:text-black hover:underline"
            >
              Other versions
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
