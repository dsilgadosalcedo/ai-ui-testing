import Link from "next/link";
import {
  hero,
  trust,
  features,
  socialProof,
  ctaSection,
  footer,
} from "../lib/landing-content";

export default function Variant4() {
  return (
    <div className="min-h-screen bg-amber-50/80 font-sans text-stone-800">
      <header className="border-b border-amber-200/60 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <span className="text-sm font-medium text-stone-600">
            Legal Tech
          </span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-stone-200/60 md:p-14">
            <h1 className="text-3xl font-bold leading-tight text-stone-900 md:text-4xl lg:text-5xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="rounded-2xl bg-teal-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-500"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 font-medium text-stone-700 transition-colors hover:bg-stone-50"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-12"
          aria-label="Trust and compliance"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-sm font-medium text-stone-500">
              {trust.title}
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-4">
              {trust.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl bg-white px-6 py-3 shadow-sm ring-1 ring-stone-200/60"
                >
                  <span className="font-medium text-stone-800">
                    {item.label}
                  </span>
                  <span className="ml-2 text-stone-500">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-16"
          aria-label="Features"
        >
          <h2 className="text-2xl font-bold text-stone-900">
            What we offer
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.id}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-lg text-rose-600">
                  •
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="px-6 py-16"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-sm font-medium text-stone-500">
              {socialProof.headline}
            </p>
            <p className="mt-2 text-center text-3xl font-bold text-teal-700">
              {socialProof.stat} {socialProof.statLabel}
            </p>
            <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200/60">
              <blockquote className="text-lg leading-relaxed text-stone-700">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-sm not-italic text-stone-500">
                — {socialProof.testimonialAuthor}
              </cite>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-5xl px-6 py-16"
          aria-label="Call to action"
        >
          <div className="rounded-3xl bg-teal-600 p-12 text-center text-white shadow-lg">
            <h2 className="text-2xl font-bold">{ctaSection.headline}</h2>
            <p className="mt-4 text-teal-100">{ctaSection.subhead}</p>
            <a
              href="#"
              className="mt-8 inline-block rounded-2xl bg-white px-8 py-3 font-medium text-teal-700 transition-opacity hover:opacity-95"
            >
              {ctaSection.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-200/60 bg-white/40">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <nav className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
            <div>
              <span className="font-medium text-stone-500">Product</span>
              <ul className="mt-2 space-y-1">
                {footer.product.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-600 hover:text-stone-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-stone-500">Legal</span>
              <ul className="mt-2 space-y-1">
                {footer.legal.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-600 hover:text-stone-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium text-stone-500">Contact</span>
              <ul className="mt-2 space-y-1">
                {footer.contact.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-600 hover:text-stone-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <p className="mt-10 text-sm text-stone-500">{footer.copyright}</p>
          <p className="mt-2">
            <Link
              href="/"
              className="text-sm text-stone-500 hover:text-stone-700"
            >
              Other versions
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
