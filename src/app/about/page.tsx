import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <section className="rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-8 dark:border-white/10 dark:from-white/[0.06] sm:p-12">
        <p className="text-sm font-medium text-foreground/70">About</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          We build software with clarity, quality, and care.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          Aurastacks Technology is a software development company focused on
          building web apps, mobile apps, ERP systems, and helping teams make
          sound technology decisions through consulting.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            What we build
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-background px-6 text-sm font-medium transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.06]"
          >
            Work with us
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:mt-24 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-3xl border border-black/10 bg-background p-8 dark:border-white/10 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Mission
          </h2>
          <p className="mt-3 text-foreground/80">
            Help organizations grow by delivering software that is secure,
            maintainable, and aligned with real business goals.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-background p-8 dark:border-white/10 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            What to expect
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            {[
              "Clear scope, timelines, and milestone-based delivery",
              "Thoughtful architecture and clean, testable code",
              "Security-first practices for authentication and data",
              "Reliable support after release: monitoring and improvements",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Our approach
        </h2>
        <p className="mt-2 max-w-2xl text-foreground/80">
          We keep things simple: understand the problem deeply, build the
          smallest reliable solution, then iterate based on feedback.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Product Thinking",
              description:
                "We focus on user value and measurable outcomes, not just features.",
            },
            {
              title: "Engineering Quality",
              description:
                "Code reviews, testing, and good architecture that scales with your business.",
            },
            {
              title: "Long-Term Partnership",
              description:
                "After launch, we help you maintain, improve, and extend your software.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10"
            >
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="rounded-3xl border border-black/10 bg-foreground p-8 text-background dark:border-white/10 sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 max-w-2xl text-background/80">
            Let’s talk about requirements, timeline, and the best technical
            approach for your team.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

