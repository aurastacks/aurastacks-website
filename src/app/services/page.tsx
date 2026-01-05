import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <section className="rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-8 dark:border-white/10 dark:from-white/[0.06] sm:p-12">
        <p className="text-sm font-medium text-foreground/70">Services</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Build, modernize, and scale your software.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          Aurastacks Technology helps teams ship dependable software across web,
          mobile, and enterprise systems. From discovery to delivery, we focus
          on quality, security, and measurable business outcomes.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Talk to us
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-background px-6 text-sm font-medium transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.06]"
          >
            How we work
          </Link>
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Core offerings
        </h2>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Pick a single service or combine them into a full delivery team.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Web App Development",
              points: [
                "Dashboards, portals, and customer platforms",
                "High-performance UI and accessible UX",
                "API design and third-party integrations",
              ],
            },
            {
              title: "Mobile App Development",
              points: [
                "iOS/Android apps with great UX",
                "Offline-first and push notifications",
                "Secure authentication and payments",
              ],
            },
            {
              title: "ERP Systems",
              points: [
                "Inventory, finance, HR, and operations",
                "Workflow automation and approvals",
                "Reporting, analytics, and audit trails",
              ],
            },
            {
              title: "Custom Software & Automation",
              points: [
                "Internal tools that save time",
                "System integrations and data pipelines",
                "Role-based access and observability",
              ],
            },
            {
              title: "IT Consulting",
              points: [
                "Architecture reviews and system audits",
                "Modernization and cloud strategy",
                "Team enablement and technical leadership",
              ],
            },
            {
              title: "Maintenance & Support",
              points: [
                "Monitoring, incident response, and SLAs",
                "Bug fixes and continuous improvements",
                "Performance and security enhancements",
              ],
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10"
            >
              <h3 className="text-base font-semibold">{service.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="grid gap-4 rounded-3xl border border-black/10 bg-background p-8 dark:border-white/10 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Engagement models
            </h2>
            <p className="mt-3 text-foreground/80">
              Choose the setup that best matches your timeline and team needs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Project Delivery",
                description:
                  "Fixed scope with clear milestones, timelines, and release plan.",
              },
              {
                title: "Dedicated Team",
                description:
                  "A long-term squad that ships continuously alongside your team.",
              },
              {
                title: "Consulting & Audits",
                description:
                  "Short engagements to unblock delivery and reduce technical risk.",
              },
              {
                title: "Support Retainers",
                description:
                  "Ongoing maintenance, reliability, and feature improvements.",
              },
            ].map((model) => (
              <div
                key={model.title}
                className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.05]"
              >
                <p className="text-sm font-semibold">{model.title}</p>
                <p className="mt-1 text-sm text-foreground/80">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="rounded-3xl border border-black/10 bg-foreground p-8 text-background dark:border-white/10 sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let’s estimate your project
          </h2>
          <p className="mt-3 max-w-2xl text-background/80">
            Share your goals, scope, and timeline. We’ll propose the best
            approach and provide a clear estimate.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Contact Aurastacks
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

