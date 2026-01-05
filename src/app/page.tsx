import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-8 dark:border-white/10 dark:from-white/[0.06] sm:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-foreground/70">
            Aurastacks Technology
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Software that fits your business, built to scale.
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
            Aurastacks builds custom software applications, ERP systems, mobile
            apps, web apps, and provides IT consulting for teams that need
            reliable delivery and long‑term support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Request a quote
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-background px-6 text-sm font-medium transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.06]"
            >
              View services
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-foreground/80 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10 text-xs font-semibold">
                1
              </span>
              <p>Product-minded engineering with clean, maintainable code</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10 text-xs font-semibold">
                2
              </span>
              <p>Fast delivery using modern web and mobile stacks</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10 text-xs font-semibold">
                3
              </span>
              <p>Support, maintenance, and improvements after launch</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we do
            </h2>
            <p className="mt-2 max-w-2xl text-foreground/80">
              End-to-end delivery from discovery to deployment, with a focus on
              performance, security, and a great user experience.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-medium text-foreground/80 underline-offset-4 hover:underline sm:inline"
          >
            Explore all services
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Web Applications",
              description:
                "Modern, responsive web apps for internal tools, portals, and customer platforms.",
            },
            {
              title: "Mobile Applications",
              description:
                "iOS/Android apps with excellent UX, offline support, and robust APIs.",
            },
            {
              title: "ERP Solutions",
              description:
                "Inventory, finance, HR, and operations systems tailored to your workflows.",
            },
            {
              title: "Custom Software",
              description:
                "Automations, integrations, dashboards, and bespoke systems that reduce manual work.",
            },
            {
              title: "IT Consulting",
              description:
                "Architecture, audits, modernization, and technical leadership for your team.",
            },
            {
              title: "Maintenance & Support",
              description:
                "Monitoring, bug fixes, improvements, and feature development after launch.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-background p-6 transition-colors hover:bg-black/[0.02] dark:border-white/10 dark:hover:bg-white/[0.04]"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          How we deliver
        </h2>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Clear milestones, transparent communication, and predictable delivery.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {[
            {
              title: "Discovery",
              description:
                "We clarify goals, users, and success metrics, then define scope and roadmap.",
            },
            {
              title: "Design",
              description:
                "UX flows and UI systems to ensure a product that feels intuitive and polished.",
            },
            {
              title: "Build",
              description:
                "Iterative development with reviews, testing, and secure engineering practices.",
            },
            {
              title: "Launch & Support",
              description:
                "Deploy, monitor, and continuously improve based on real usage and feedback.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10"
            >
              <p className="text-xs font-semibold text-foreground/60">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="rounded-3xl border border-black/10 bg-foreground p-8 text-background dark:border-white/10 sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to build with Aurastacks?
          </h2>
          <p className="mt-3 max-w-2xl text-background/80">
            Tell us what you’re working on. We’ll respond with a plan, timeline,
            and a clear estimate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Contact us
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-full border border-background/20 px-6 text-sm font-medium text-background transition-colors hover:bg-white/10"
            >
              Learn about our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
