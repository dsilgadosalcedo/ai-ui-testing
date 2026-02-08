import Link from "next/link";
import {
  hero,
  trust,
  features,
  socialProof,
  ctaSection,
  footer,
} from "../lib/landing-content";

export default function Variant1() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <span className="font-serif text-sm font-medium tracking-wide text-neutral-500">
            Legal Tech
          </span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-neutral-900 md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#demo"
              className="inline-block border-b-2 border-neutral-900 pb-1 font-medium text-neutral-900 transition-opacity hover:opacity-70"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#features"
              className="inline-block border-b border-neutral-300 pb-1 font-medium text-neutral-600 transition-opacity hover:opacity-70"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section
          className="border-t border-neutral-100 bg-neutral-50/50 py-16"
          aria-label="Trust and compliance"
        >
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-serif text-sm font-medium tracking-wide text-neutral-500">
              {trust.title}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {trust.items.map((item) => (
                <li key={item.label} className="flex items-baseline gap-2">
                  <span className="font-medium text-neutral-800">
                    {item.label}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-3xl px-6 py-24"
          aria-label="Features"
        >
          <h2 className="font-serif text-2xl font-normal text-neutral-900">
            What we offer
          </h2>
          <ul className="mt-12 space-y-16 border-l border-neutral-200 pl-6">
            {features.map((f) => (
              <li key={f.id}>
                <h3 className="font-serif text-xl font-normal text-neutral-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-neutral-600">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-t border-neutral-100 bg-neutral-50/50 py-16"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-serif text-sm font-medium tracking-wide text-neutral-500">
              {socialProof.headline}
            </p>
            <p className="mt-2 text-2xl font-medium text-neutral-800">
              {socialProof.stat} {socialProof.statLabel}
            </p>
            <div className="mt-10 border-l-2 border-neutral-300 pl-6">
              <blockquote className="font-serif text-lg italic text-neutral-700">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
              <cite className="mt-2 block text-sm not-italic text-neutral-500">
                — {socialProof.testimonialAuthor}
              </cite>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-3xl px-6 py-24"
          aria-label="Call to action"
        >
          <h2 className="font-serif text-2xl font-normal text-neutral-900">
            {ctaSection.headline}
          </h2>
          <p className="mt-4 text-neutral-600">{ctaSection.subhead}</p>
          <a
            href="#"
            className="mt-8 inline-block border-b-2 border-neutral-900 pb-1 font-medium text-neutral-900 transition-opacity hover:opacity-70"
          >
            {ctaSection.button}
          </a>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div>
              <span className="font-medium text-neutral-500">Product</span>
              <ul className="mt-2 space-y-1">
                {footer.product.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-neutral-500">Legal</span>
              <ul className="mt-2 space-y-1">
                {footer.legal.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-neutral-500">Contact</span>
              <ul className="mt-2 space-y-1">
                {footer.contact.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <p className="mt-10 text-sm text-neutral-500">{footer.copyright}</p>
          <p className="mt-2">
            <Link
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              Other versions
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
