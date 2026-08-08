import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useTheme } from "@/hooks/use-theme";
import { useCountUp } from "@/hooks/use-count-up";
import markAsset from "@/assets/davi-graph-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Onyekachukwu — Founder, Davi Graph" },
      {
        name: "description",
        content:
          "Founder of Davi Graph. I design and build full software products solo — from idea to deployment — out of Abraka, Nigeria.",
      },
      { property: "og:title", content: "David Onyekachukwu — Founder, Davi Graph" },
      {
        property: "og:description",
        content:
          "Building software that ships. Full products, idea to deployment, from Abraka, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "David Onyekachukwu — Founder, Davi Graph" },
      {
        name: "twitter:description",
        content: "Building software that ships — from Abraka, Nigeria.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

type Status = "LIVE" | "CLIENT PROJECT" | "IN PROGRESS" | "PROTOTYPE";

const projects: {
  name: string;
  status: Status;
  tagline: string;
  description: string;
  tags: string[];
  link?: { href: string; label: string };
}[] = [
  {
    name: "CrossDrop",
    status: "LIVE",
    tagline: "Cross-platform file sharing, in a tap.",
    description:
      "A PWA for instant file transfers over QR code. Install to home screen, share in Pidgin English, and files auto-expire after 5 minutes.",
    tags: ["PWA", "QR transfer", "Pidgin EN", "Auto-expire"],
    link: { href: "https://cross-drop-one.vercel.app", label: "cross-drop-one.vercel.app" },
  },
  {
    name: "ElonVest",
    status: "CLIENT PROJECT",
    tagline: "A stock-broker platform with live market data.",
    description:
      "Freelance build for a broker. Next.js frontend wired to the Alpaca API for live quotes and trade execution.",
    tags: ["Next.js", "Alpaca API", "Realtime"],
  },
  {
    name: "StudyPadi",
    status: "IN PROGRESS",
    tagline: "AI study companion for Nigerian SS1–SS3.",
    description:
      "NERDC-aligned study app powered by the Claude API to generate dynamic explanations, quizzes and practice sets.",
    tags: ["Claude API", "NERDC", "EdTech"],
  },
  {
    name: "ARIA",
    status: "PROTOTYPE",
    tagline: "A JARVIS-style desktop assistant.",
    description:
      "Electron + Node.js assistant with voice input, TTS responses, live weather and RAM monitoring.",
    tags: ["Electron", "Voice", "TTS", "RAM monitor"],
  },
];

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "Learn the goal, the user and the constraint before a single line of code.",
  },
  {
    n: "02",
    title: "Build",
    body: "Design and develop fast, with a short feedback loop and no wasted scope.",
  },
  {
    n: "03",
    title: "Ship & Iterate",
    body: "Launch it, gather real usage, then refine what the data actually shows.",
  },
];

const stack = [
  { label: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Python"] },
  { label: "AI tools", items: ["Lovable", "Base44", "Bolt.new", "Claude API"] },
  { label: "Deployment", items: ["Vercel"] },
];

const stats = [
  { value: 4, suffix: "", label: "Products built" },
  { value: 1, suffix: "", label: "Shipped live" },
  { value: 10, suffix: "+", label: "Tools in the stack" },
  { value: 100, suffix: "%", label: "Built solo" },
];

function statusStyles(status: Status): string {
  switch (status) {
    case "LIVE":
      return "bg-[color:var(--status-live)]/10 text-[color:var(--status-live)] ring-[color:var(--status-live)]/25";
    case "CLIENT PROJECT":
      return "bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)] ring-[color:var(--brand-red)]/25";
    case "IN PROGRESS":
      return "bg-[color:var(--status-progress)]/12 text-[color:var(--status-progress)] ring-[color:var(--status-progress)]/25";
    case "PROTOTYPE":
      return "bg-muted text-muted-foreground ring-border";
  }
}

function Portfolio() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <About />
        <Process />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}

function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2" aria-label="Davi Graph — home">
          <img src={markAsset.url} alt="Davi Graph" className="h-8 w-auto object-contain" />
        </a>
        <nav className="font-mono-label hidden items-center gap-9 text-[10px] text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          <a href="#stack" className="transition-colors hover:text-foreground">Stack</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[color:var(--brand-red)] hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="font-mono-label rounded-full bg-[color:var(--brand-red)] px-5 py-2.5 text-[10px] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <Container className="pt-20 pb-20 md:pt-32 md:pb-28">
        <div data-reveal className="reveal">
          <span className="font-mono-label inline-flex items-center gap-2 text-[10px] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
            Founder — Davi Graph
          </span>
        </div>

        <h1
          data-reveal
          data-reveal-delay="90"
          className="reveal font-display mt-8 max-w-4xl text-[3.25rem] font-extrabold leading-[0.94] md:text-[6.5rem]"
        >
          Building software
          <br />
          that <span className="text-[color:var(--brand-red)]">ships.</span>
        </h1>

        <p
          data-reveal
          data-reveal-delay="180"
          className="reveal mt-10 max-w-2xl text-lg leading-[1.7] text-muted-foreground md:text-xl"
        >
          I'm David Onyekachukwu, founder of Davi Graph, based in{" "}
          <span className="text-foreground">Abraka, Nigeria</span>. I design and build full
          products solo — from first idea to live deployment.
        </p>

        <div data-reveal data-reveal-delay="270" className="reveal mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="font-mono-label group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-7 py-4 text-[11px] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="font-mono-label inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[11px] text-foreground transition-colors hover:border-[color:var(--brand-red)]"
          >
            View my work
          </a>
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <Container className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4 md:py-16">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 90} />
        ))}
      </Container>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div data-reveal data-reveal-delay={delay} className="reveal">
      <div className="font-display text-5xl font-extrabold md:text-6xl">
        <span ref={ref}>{current}</span>
        <span className="text-[color:var(--brand-red)]">{suffix}</span>
      </div>
      <div className="font-mono-label mt-3 text-[10px] text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionHeader({
  index,
  eyebrow,
  title,
  caption,
}: {
  index: string;
  eyebrow: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div data-reveal className="reveal">
        <div className="font-mono-label flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="text-[color:var(--brand-red)]">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-display mt-5 max-w-2xl text-4xl font-extrabold leading-[1.02] md:text-6xl">
          {title}
        </h2>
      </div>
      {caption && (
        <div
          data-reveal
          data-reveal-delay="120"
          className="reveal font-mono-label text-[10px] text-muted-foreground"
        >
          {caption}
        </div>
      )}
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="border-b border-border">
      <Container className="py-24 md:py-32">
        <SectionHeader index="01" eyebrow="Work" title="Selected projects." caption="Shipped, in-flight, prototypes" />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              data-reveal-delay={i * 90}
              className="reveal group relative flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-accent md:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono-label text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-mono-label inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] ring-1 ${statusStyles(p.status)}`}
                >
                  {p.status === "LIVE" && (
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--status-live)]" />
                  )}
                  {p.status}
                </span>
              </div>

              <h3 className="font-display mt-10 text-4xl font-extrabold md:text-5xl">{p.name}</h3>
              <p className="mt-3 text-base font-medium text-foreground/90">{p.tagline}</p>

              <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] md:grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <p className="pt-4 text-sm leading-[1.75] text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>

              <p className="pt-4 text-sm leading-[1.75] text-muted-foreground md:hidden">
                {p.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono-label rounded-full border border-border px-2.5 py-1 text-[9px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-label mt-6 inline-flex items-center gap-1.5 text-[10px] text-[color:var(--brand-red)]"
                >
                  {p.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-card">
      <Container className="py-24 md:py-32">
        <SectionHeader index="02" eyebrow="About" title="I learn by shipping." />
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <p
            data-reveal
            className="reveal md:col-span-7 text-xl leading-[1.7] text-foreground/90 md:text-2xl"
          >
            I'm a 200-level Computer Science student at{" "}
            <span className="text-[color:var(--brand-red)]">Delta State University, Abraka</span>.
            I learn by building and shipping real products — not by collecting tutorials.
          </p>
          <p
            data-reveal
            data-reveal-delay="120"
            className="reveal md:col-span-5 leading-[1.8] text-muted-foreground"
          >
            I use AI-assisted workflows to move fast without cutting corners on quality. The goal
            never changes: get a working product in front of real users, then refine it with what
            they actually do.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-b border-border">
      <Container className="py-24 md:py-32">
        <SectionHeader index="03" eyebrow="Process" title="How I work." caption="Three steps, no theatre" />
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
          {steps.map((s, i) => (
            <div key={s.n} data-reveal data-reveal-delay={i * 120} className="reveal">
              <div className="font-display text-6xl font-extrabold text-[color:var(--brand-red)]/20 md:text-7xl">
                {s.n}
              </div>
              <div className="mt-4 h-px w-full bg-border" />
              <h3 className="font-display mt-6 text-2xl font-bold md:text-3xl">{s.title}</h3>
              <p className="mt-3 leading-[1.8] text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b border-border bg-card">
      <Container className="py-24 md:py-32">
        <SectionHeader index="04" eyebrow="Toolkit" title="The stack." caption="What I reach for" />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {stack.map((group, i) => (
            <div
              key={group.label}
              data-reveal
              data-reveal-delay={i * 90}
              className="reveal grid grid-cols-1 gap-4 py-7 md:grid-cols-12 md:items-center"
            >
              <div className="font-mono-label text-[10px] text-muted-foreground md:col-span-3">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-9">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "davigraph.code@gmail.com",
      href: "mailto:davigraph.code@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/DaviGraph",
      href: "https://github.com/DaviGraph",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/davi-graph-543615",
      href: "https://linkedin.com/in/davi-graph-543615",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "0807 731 9385",
      href: "https://wa.me/2348077319385",
    },
  ];

  return (
    <section id="contact">
      <Container className="py-24 md:py-32">
        <SectionHeader index="05" eyebrow="Contact" title="Let's build something." caption="Open for work" />

        <p
          data-reveal
          className="reveal mt-8 max-w-2xl text-lg leading-[1.7] text-muted-foreground md:text-xl"
        >
          Open to <span className="text-foreground">freelance work</span> and{" "}
          <span className="text-foreground">internships or remote roles</span>. If you're building
          something interesting and need a fast, capable pair of hands — say hi.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              data-reveal
              data-reveal-delay={i * 80}
              className="reveal group flex items-center justify-between gap-4 bg-card p-6 transition-colors hover:bg-accent md:p-7"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono-label text-[10px] text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm text-foreground">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-red)]" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="font-mono-label flex flex-col items-start justify-between gap-4 py-8 text-[10px] text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
          © 2026 Davi Graph
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3" />
          Abraka, Nigeria
        </div>
      </Container>
    </footer>
  );
}
