import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aurastacks Technology",
    template: "%s | Aurastacks",
  },
  description:
    "Aurastacks Technology builds custom software applications, ERP systems, mobile apps, web apps, and provides IT consulting for clients.",
  openGraph: {
    title: "Aurastacks Technology",
    description:
      "Custom software development: web apps, mobile apps, ERP systems, and IT consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-black/10 dark:border-white/10">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <Link href="/" className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background">
                  A
                </span>
                <span className="text-sm font-semibold tracking-tight sm:text-base">
                  Aurastacks
                </span>
              </Link>

              <nav className="hidden items-center gap-6 text-sm sm:flex">
                <Link
                  href="/services"
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Get a quote
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-6xl px-6 pb-5 sm:hidden">
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/services"
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </div>
            </div>
          </header>

          <div className="flex-1">{children}</div>

          <footer className="border-t border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-6xl px-6 py-12">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm font-semibold">Aurastacks Technology</p>
                  <p className="mt-3 text-sm text-foreground/80">
                    Custom software development for web, mobile, and enterprise
                    systems.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Services</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    <li>Web applications</li>
                    <li>Mobile applications</li>
                    <li>ERP systems</li>
                    <li>IT consulting</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold">Company</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <Link
                        href="/about"
                        className="text-foreground/80 underline-offset-4 hover:underline"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-foreground/80 underline-offset-4 hover:underline"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-foreground/80 underline-offset-4 hover:underline"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold">Get started</p>
                  <p className="mt-3 text-sm text-foreground/80">
                    Ready to build? Send a short project brief and we’ll respond
                    within 1 business day.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-background px-5 text-sm font-medium transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.06]"
                    >
                      Contact Aurastacks
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-8 text-sm text-foreground/70 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Aurastacks Technology</p>
                <p>Built for clients who value reliable delivery.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
