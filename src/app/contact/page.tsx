import Link from "next/link";

const CONTACT_EMAIL = "hello@aurastacks.com";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <section className="rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-8 dark:border-white/10 dark:from-white/[0.06] sm:p-12">
        <p className="text-sm font-medium text-foreground/70">Contact</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Let’s build something great.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          Share your project goals and timeline. Aurastacks will respond with
          questions, a plan, and next steps.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Project inquiry"
            )}`}
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Email us
          </a>
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-background px-6 text-sm font-medium transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.06]"
          >
            See services
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:mt-24 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-3xl border border-black/10 bg-background p-8 dark:border-white/10 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Contact details
          </h2>
          <dl className="mt-6 space-y-4 text-sm text-foreground/80">
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="font-medium text-foreground/70">Email</dt>
              <dd className="font-medium">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline underline-offset-4 hover:opacity-90"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="font-medium text-foreground/70">Services</dt>
              <dd>
                Web apps, mobile apps, ERP systems, custom software, and IT
                consulting.
              </dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="font-medium text-foreground/70">Response time</dt>
              <dd>Usually within 1 business day.</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-black/10 bg-background p-8 dark:border-white/10 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            What to send
          </h2>
          <p className="mt-3 text-foreground/80">
            To help us estimate quickly, include:
          </p>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            {[
              "A short description of the product or system",
              "Target users and key features",
              "Timeline and budget range (if available)",
              "Any existing tools, APIs, or integrations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-5 text-sm text-foreground/80 dark:border-white/10 dark:bg-white/[0.05]">
            <p className="font-medium text-foreground">Prefer a quick start?</p>
            <p className="mt-1">
              Send an email with the subject “Project inquiry” and we’ll take it
              from there.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="rounded-3xl border border-black/10 bg-foreground p-8 text-background dark:border-white/10 sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want to learn more first?
          </h2>
          <p className="mt-3 max-w-2xl text-background/80">
            See our services and approach to delivery.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-full border border-background/20 px-6 text-sm font-medium text-background transition-colors hover:bg-white/10"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

