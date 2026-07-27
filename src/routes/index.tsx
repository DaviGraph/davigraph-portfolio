import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import markAsset from "@/assets/davi-graph-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Onyekachukwu — Founder, Davi Graph" },
      {
        name: "description",
        content:
          "Founder of Davi Graph. I build and ship software fast — out of Abraka, Nigeria. Portfolio, projects, and contact.",
      },
      { property: "og:title", content: "David Onyekachukwu — Founder, Davi Graph" },
      {
        property: "og:description",
        content:
          "Founder of Davi Graph. I build and ship software fast — out of Abraka, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "David Onyekachukwu — Founder, Davi Graph" },
      {
        name: "twitter:description",
        content: "Founder of Davi Graph. Building and shipping fast from Abraka, Nigeria.",
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
  span: string;
}[] = [
  {
    name: "CrossDrop",
    status: "LIVE",
    tagline: "Cross-platform file sharing, in a tap.",
    description:
      "A PWA for instant file transfers via QR code. Install to home screen, share in Pidgin English, and files auto-expire after 5 minutes.",
    tags: ["PWA", "QR transfer", "Pidgin EN", "Auto-expire"],
    link: { href: "https://cross-drop-one.vercel.app", label: "cross-drop-one.vercel.app" },
    span: "md:col-span-4 md:row-span-2",
  },
  {
    name: "ElonVest",
    status: "CLIENT PROJECT",
    tagline: "A stock-broker platform with live market data.",
    description:
      "Freelance build for a broker. Next.js frontend wired to the Alpaca API for live quotes and trade execution.",
    tags: ["Next.js", "Alpaca API", "Realtime"],
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "StudyPadi",
    status: "IN PROGRESS",
    tagline: "AI study companion for Nigerian SS1–SS3.",
    description:
      "NERDC-aligned study app powered by the Claude API to generate dynamic explanations, quizzes, and practice.",
    tags: ["Claude API", "NERDC", "EdTech"],
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "ARIA",
    status: "PROTOTYPE",
    tagline: "A JARVIS-style desktop assistant.",
    description:
      "Electron + Node.js assistant with voice input, TTS responses, live weather, and system monitoring.",
    tags: ["Electron", "Voice", "TTS", "System"],
    span: "md:col-span-2 md:row-span-1",
  },
];

const stack = [
  { label: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Python"] },
  { label: "AI tools", items: ["Lovable", "Base44", "Bolt.new", "Claude API"] },
  { label: "Deployment", items: ["Vercel"] },
];

function statusStyles(status: Status): string {
  switch (status) {
    case "LIVE":
      return "bg-[color:var(--status-live)]/15 text-[color:var(--status-live)] ring-[color:var(--status-live)]/30";
    case "CLIENT PROJECT":
      return "bg-[color:var(--indigo-accent)]/15 text-[color:var(--indigo-glow)] ring-[color:var(--indigo-accent)]/40";
    case "IN PROGRESS":
      return "bg-[color:var(--status-progress)]/15 text-[color:var(--status-progress)] ring-[color:var(--status-progress)]/30";
    case "PROTOTYPE":
      return "bg-muted text-muted-foreground ring-border";
  }
}

function Portfolio() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 80% -10%, color-mix(in oklab, var(--indigo-accent) 22%, transparent), transparent 60%), radial-gradient(50rem 50rem at -10% 20%, color-mix(in oklab, var(--brand-red) 10%, transparent), transparent 60%)",
        }}
      />

      <Nav />

      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2" aria-label="Davi Graph — home">
          <img
            src={markAsset.url}
            alt="Davi Graph"
            className="h-8 w-auto object-contain"
          />
        </a>
        <nav className="font-mono-label hidden items-center gap-8 text-[11px] text-muted-foreground md:flex">
          <a href="#projects" className="transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#stack" className="transition-colors hover:text-foreground">Stack</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="font-mono-label rounded-none border border-border px-4 py-1.5 text-[10px] text-foreground/90 transition-colors hover:border-[color:var(--brand-red)] hover:text-foreground"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-12 md:pt-20">
      <div data-reveal className="reveal">
        <span className="font-mono-label inline-flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="text-[color:var(--brand-red)]">[</span>
          Founder — Davi Graph
          <span className="text-[color:var(--brand-red)]">]</span>
        </span>
      </div>

      <h1
        data-reveal
        data-reveal-delay="100"
        className="reveal font-display mt-6 text-5xl font-bold leading-[0.95] md:text-7xl"
      >
        David
        <br />
        <span className="bg-gradient-to-r from-foreground via-[color:var(--indigo-glow)] to-foreground bg-clip-text text-transparent">
          Onyekachukwu
        </span>
      </h1>

      <p
        data-reveal
        data-reveal-delay="200"
        className="reveal mt-8 max-w-2xl text-base leading-[1.7] text-muted-foreground md:text-lg"
      >
        I build and ship software fast — out of{" "}
        <span className="text-foreground">Abraka, Nigeria</span>. Products people actually use,
        made with a small stack and a short feedback loop.
      </p>

      <div data-reveal data-reveal-delay="300" className="reveal mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="font-mono-label group inline-flex items-center gap-2 bg-[color:var(--brand-red)] px-5 py-3 text-[11px] text-white shadow-[0_10px_40px_-10px_var(--brand-red)] transition-all hover:translate-y-[-1px]"
        >
          View my work
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="#contact"
          className="font-mono-label inline-flex items-center gap-2 border border-border bg-card/40 px-5 py-3 text-[11px] text-foreground transition-colors hover:border-[color:var(--brand-red)]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="pt-24 md:pt-36">
      <SectionHeader index="01" eyebrow="Work" title="Projects" caption="Shipped, in-flight, and prototypes." />

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[minmax(220px,auto)]">
        {projects.map((p, i) => (
          <article
            key={p.name}
            data-reveal
            data-reveal-delay={i * 90}
            className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--brand-red)]/60 hover:bg-card md:p-8 ${p.span}`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "var(--brand-red)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono-label text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-mono-label inline-flex items-center gap-1.5 rounded-none px-2 py-1 text-[9px] ring-1 ${statusStyles(p.status)}`}
                >
                  {p.status === "LIVE" && (
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--status-live)]" />
                  )}
                  {p.status}
                </span>
              </div>

              <h3 className="font-display mt-6 text-3xl font-bold md:text-4xl">
                {p.name}
              </h3>
              <p className="mt-2 text-base font-medium text-foreground/90">{p.tagline}</p>
              <p className="mt-3 max-w-xl text-sm leading-[1.7] text-muted-foreground">
                {p.description}
              </p>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-label mt-4 inline-flex items-center gap-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Visit
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono-label rounded-none border border-border bg-background/60 px-2 py-1 text-[9px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="pt-24 md:pt-36">
      <SectionHeader index="02" eyebrow="About" title="Learn by shipping." caption="A short story." />

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
        <div
          data-reveal
          className="reveal md:col-span-3 rounded-2xl border border-border bg-card/60 p-6 md:p-8"
        >
          <p className="text-lg leading-[1.7] text-foreground/90 md:text-xl">
            I'm a <span className="text-[color:var(--indigo-glow)]">200-level Computer Science</span>{" "}
            student at Delta State University, Abraka. I learn by building and shipping real
            products — not tutorials.
          </p>
          <p className="mt-6 leading-[1.7] text-muted-foreground">
            I lean on AI-assisted workflows to move fast without cutting corners on quality. The
            goal is always the same: get a working thing in front of real users, then iterate.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          <StatCard label="Based in" value="Abraka, NG" delay={80} />
          <StatCard label="Role" value="Founder" delay={160} />
          <StatCard label="Studio" value="Davi Graph" delay={240} />
          <StatCard label="Year" value="2026" delay={320} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <div
      data-reveal
      data-reveal-delay={delay}
      className="reveal rounded-2xl border border-border bg-card/60 p-5"
    >
      <div className="font-mono-label text-[10px] text-muted-foreground">{label}</div>
      <div className="font-display mt-2 text-xl font-bold">{value}</div>
    </div>
  );
}

function Stack() {
  return (
    <section id="stack" className="pt-24 md:pt-36">
      <SectionHeader index="03" eyebrow="Toolkit" title="Stack" caption="What I reach for." />

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-4">
        {stack.map((group, i) => (
          <div
            key={group.label}
            data-reveal
            data-reveal-delay={i * 100}
            className="reveal rounded-2xl border border-border bg-card/60 p-6"
          >
            <div className="font-mono-label text-[10px] text-muted-foreground">
              {group.label}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-none border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
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
      span: "md:col-span-2",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/DaviGraph",
      href: "https://github.com/DaviGraph",
      span: "md:col-span-2",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/davi-graph-543615",
      href: "https://linkedin.com/in/davi-graph-543615",
      span: "md:col-span-2",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0807 731 9385",
      href: "tel:+2348077319385",
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="contact" className="pt-24 md:pt-36">
      <SectionHeader index="04" eyebrow="Contact" title="Let's build something." caption="Open for work." />

      <div data-reveal className="reveal mt-10 rounded-2xl border border-border bg-card/60 p-6 md:p-8">
        <h3 className="font-display text-3xl font-bold leading-tight md:text-5xl">
          Open to <span className="text-[color:var(--brand-red)]">freelance work</span> and
          remote <span className="text-[color:var(--brand-red)]">internships</span>.
        </h3>
        <p className="mt-4 max-w-xl leading-[1.7] text-muted-foreground">
          If you're building something interesting or need a fast, capable pair of hands — say hi.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-4">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              data-reveal
              data-reveal-delay={i * 80}
              className={`reveal group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/40 p-5 transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand-red)]/60 ${c.span}`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-red)]/15 text-[color:var(--brand-red)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono-label text-[10px] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate text-sm text-foreground">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
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
  caption: string;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div data-reveal className="reveal">
        <div className="font-mono-label flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="text-[color:var(--brand-red)]">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl">
          {title}
        </h2>
      </div>
      <div data-reveal data-reveal-delay="120" className="reveal font-mono-label text-[10px] text-muted-foreground">
        {caption}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="font-mono-label mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 text-[10px] text-muted-foreground md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
          © 2026 Davi Graph
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3" />
          Abraka, Nigeria
        </div>
      </div>
    </footer>
  );
}
