import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  MessageSquare,
  Database,
  Bot,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useTheme } from "@/hooks/use-theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Omeh — Web developer and automation builder in Lagos" },
      {
        name: "description",
        content:
          "I build websites, apps and AI automations for businesses. Based in Lagos, Nigeria.",
      },
      {
        property: "og:title",
        content: "David Omeh — Web developer and automation builder in Lagos",
      },
      {
        property: "og:description",
        content:
          "I build websites, apps and AI automations for businesses. Based in Lagos, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://davigraph-portfolio.vercel.app/" },
      {
        name: "twitter:title",
        content: "David Omeh — Web developer and automation builder in Lagos",
      },
      {
        name: "twitter:description",
        content:
          "I build websites, apps and AI automations for businesses. Based in Lagos, Nigeria.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

// Single projects array for easy editing as requested in rule 6
interface ProjectItem {
  id: string;
  name: string;
  type: "Client project" | "Live app" | "In progress";
  description: string;
  url?: string;
  image?: string;
}

const projects: ProjectItem[] = [
  {
    id: "israelee-academy",
    name: "Israelee Academy",
    type: "Client project",
    description:
      "A full site for a video editing and animation academy: courses, student work, certification and WhatsApp registration.",
    url: "https://isrealee-academy.vercel.app/",
    image: "/images/projects/israelee-academy.jpg",
  },
  {
    id: "cleanique",
    name: "Cleanique",
    type: "Client project",
    description:
      "Booking site for a cleaning company, with bank-transfer deposits and owner alerts on Telegram.",
    url: "https://cleanique-eight.vercel.app/",
    image: "/images/projects/cleanique.jpg",
  },
  {
    id: "61-day-challenge",
    name: "61-Day Challenge",
    type: "Live app",
    description:
      "A finance tracker built for a 61-day money challenge. Installable and made for the phone.",
    url: "https://60-days-zeta.vercel.app",
    image: "/images/projects/61-day-challenge.jpg",
  },
  {
    id: "crossdrop",
    name: "CrossDrop",
    type: "Live app",
    description: "Share files across devices with a QR code. Files expire after 5 minutes.",
    url: "https://cross-drop-one.vercel.app",
    image: "/images/projects/crossdrop.jpg",
  },
  {
    id: "elonvest",
    name: "ElonVest",
    type: "Client project",
    description:
      "Stock broker platform with live market data and trade execution through the Alpaca API.",
  },
  {
    id: "studypadi",
    name: "StudyPadi",
    type: "In progress",
    description: "AI study companion for Nigerian SS1 to SS3 students, built on the Claude API.",
  },
];

const marqueeItems = [
  "Websites",
  "AI automation",
  "Web apps",
  "WhatsApp and Telegram bots",
  "n8n workflows",
];

const skills = ["React", "Next.js", "Python", "Supabase", "n8n", "Claude API", "Gemini", "Vercel"];

const processSteps = [
  {
    num: "1",
    title: "Understand",
    body: "The goal, the user and the limits, before any code.",
  },
  {
    num: "2",
    title: "Build",
    body: "Short feedback loops and no wasted scope.",
  },
  {
    num: "3",
    title: "Ship and iterate",
    body: "Launch, watch real usage, then refine.",
  },
];

function Portfolio() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={rootRef}
      className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300 font-sans selection:bg-[#E10600] selection:text-white"
    >
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <AutomationFlow />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 ${className}`}>{children}</div>
  );
}

/* 1. Nav */
function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 text-xl font-extrabold tracking-tight"
          aria-label="Davi Graph — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E10600] text-white font-black text-sm tracking-tighter">
            DG
          </span>
          <span className="font-display text-2xl font-black text-foreground tracking-tight group-hover:text-[#D80500] dark:group-hover:text-[#FF3B30] transition-colors">
            Davi Graph
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground"
          aria-label="Primary navigation"
        >
          <a
            href="#services"
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D80500] rounded-sm py-1"
          >
            Services
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D80500] rounded-sm py-1"
          >
            About
          </a>
          <a
            href="#work"
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D80500] rounded-sm py-1"
          >
            Work
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="btn-lift flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:border-[#D80500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D80500]"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-[#FFD400]" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
          <a
            href="https://wa.me/2348077319385"
            target="_blank"
            rel="noreferrer"
            className="btn-lift inline-flex items-center gap-2 rounded-full bg-[#1A0606] dark:bg-[#FFEDE9] px-5 py-2.5 text-xs md:text-sm font-bold text-white dark:text-[#1A0606] shadow-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D80500]"
          >
            <MessageSquare className="h-3.5 w-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </Container>
    </header>
  );
}

/* 2. Hero */
function Hero() {
  const line1 = "David";
  const line2 = "Omeh";

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#E10600] text-white pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <Container className="relative">
        {/* Yellow Circular Spinning Badge */}
        <div className="absolute right-0 top-0 sm:right-4 sm:top-2 z-10 pointer-events-none">
          <div
            className="relative flex h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <svg className="h-full w-full animate-spin-slow" viewBox="0 0 120 120">
              <path
                id="textPathHero"
                d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                fill="none"
              />
              <text fill="#1A0606" className="text-[10px] font-black uppercase tracking-[0.22em]">
                <textPath href="#textPathHero" startOffset="50%" textAnchor="middle">
                  Open for work • Lagos, Nigeria •
                </textPath>
              </text>
            </svg>
            <div className="absolute h-14 w-14 md:h-18 md:w-18 rounded-full bg-[#FFD400] flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-[#1A0606]" />
            </div>
          </div>
        </div>

        {/* Hero Name with letter mask & rise animation */}
        <h1
          className="font-display font-black leading-[0.88] tracking-[-0.05em] uppercase text-white select-none max-w-5xl"
          style={{ fontSize: "clamp(84px, 19vw, 290px)" }}
        >
          <span className="block whitespace-nowrap">
            {line1.split("").map((char, index) => (
              <span key={index} className="letter-mask">
                <span className="letter-rise" style={{ animationDelay: `${index * 70}ms` }}>
                  {char}
                </span>
              </span>
            ))}
          </span>
          <span className="block whitespace-nowrap">
            {line2.split("").map((char, index) => (
              <span key={index} className="letter-mask">
                <span
                  className="letter-rise"
                  style={{ animationDelay: `${(index + line1.length) * 70}ms` }}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Hero Description */}
        <p
          data-reveal
          data-reveal-delay="350"
          className="reveal mt-8 md:mt-12 max-w-2xl text-xl md:text-2xl font-medium leading-snug text-white/95"
        >
          I build websites, apps and AI automations for businesses, from my base in Lagos. One
          person, idea to live product.
        </p>

        {/* Hero Action Buttons */}
        <div
          data-reveal
          data-reveal-delay="450"
          className="reveal mt-8 md:mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="https://wa.me/2348077319385"
            target="_blank"
            rel="noreferrer"
            className="btn-lift inline-flex items-center gap-2.5 rounded-full bg-[#1A0606] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-[#1A0606]/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD400]"
          >
            <MessageSquare className="h-5 w-5 fill-current text-[#FFD400]" />
            <span>Start a project on WhatsApp</span>
          </a>
          <a
            href="#work"
            className="btn-lift inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#E10600] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            <span>See live work</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}

/* 3. Marquee Band */
function Marquee() {
  return (
    <aside
      className="relative overflow-hidden bg-[#1A0606] border-y-4 border-[#FFD400] py-4 select-none"
      aria-label="Core competencies"
    >
      <div className="flex animate-marquee">
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="flex shrink-0 items-center gap-8 px-4"
            aria-hidden={copyIndex === 1}
          >
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-[#FFEDE9]">
                  {item}
                </span>
                <span className="inline-block h-3 w-3 rotate-45 bg-[#E10600]" aria-hidden="true" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

/* 4. Services */
function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-b border-border">
      <Container>
        <div data-reveal className="reveal mb-14 md:mb-18">
          <span className="font-mono-label text-xs text-[#D80500] dark:text-[#FF3B30] font-bold">
            01 // CAPABILITIES
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-3">
            Services built for scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Red Panel: Websites and apps */}
          <div
            data-reveal
            className="reveal service-card-tilt group flex flex-col justify-between rounded-3xl bg-[#E10600] p-8 md:p-12 text-white shadow-xl"
          >
            <div>
              <div className="inline-flex rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Core Development
              </div>
              <h3 className="font-display mt-6 text-3xl md:text-5xl font-black leading-tight text-white">
                Websites and apps
              </h3>
              <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-white/95">
                Fast, mobile-first products for businesses, schools and startups: booking flows,
                dashboards, payments and live data.
              </p>
            </div>
            <div className="mt-10 border-t border-white/20 pt-6">
              <span className="font-mono-label text-xs uppercase tracking-wider text-white/70 block mb-2">
                Stack
              </span>
              <p className="text-sm md:text-base font-semibold text-white">
                React · Next.js · Tailwind CSS · Supabase
              </p>
            </div>
          </div>

          {/* Ink Panel: AI automation */}
          <div
            data-reveal
            data-reveal-delay="150"
            className="reveal service-card-tilt group flex flex-col justify-between rounded-3xl bg-[#1A0606] p-8 md:p-12 text-white shadow-xl border border-white/10"
          >
            <div>
              <div className="inline-flex rounded-full bg-[#FFD400] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A0606]">
                Smart Systems
              </div>
              <h3 className="font-display mt-6 text-3xl md:text-5xl font-black leading-tight text-white">
                AI automation
              </h3>
              <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-[#FFEDE9]/95">
                Workflows that capture leads, answer customers and alert you, so repeat work stops
                eating your day.
              </p>
            </div>
            <div className="mt-10 border-t border-white/20 pt-6">
              <span className="font-mono-label text-xs uppercase tracking-wider text-white/70 block mb-2">
                Stack
              </span>
              <p className="text-sm md:text-base font-semibold text-[#FFD400]">
                n8n · WhatsApp and Telegram bots · Gemini · Claude API
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 5. Automation Flow */
function AutomationFlow() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Customer messages",
      detail: "WhatsApp",
      highlight: false,
    },
    {
      icon: Database,
      title: "n8n saves it",
      detail: "Database",
      highlight: false,
    },
    {
      icon: Bot,
      title: "AI drafts a reply",
      detail: "Price and date",
      highlight: false,
    },
    {
      icon: Send,
      title: "Owner alerted",
      detail: "Telegram, one tap",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-card/40 border-b border-border">
      <Container>
        <div data-reveal className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-label text-xs text-[#D80500] dark:text-[#FF3B30] font-bold">
            02 // HOW IT WORKS
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-3">
            How a booking runs itself
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground font-medium">
            From initial message to completed transaction — zero manual busywork.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Layout */}
        <div className="relative">
          {/* Animated Connecting Flow Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-8 pointer-events-none z-0"
            aria-hidden="true"
          >
            <svg className="w-full h-4 overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#E10600"
                strokeWidth="3"
                strokeDasharray="8 8"
                className="animate-dash-flow"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((node, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={i * 120}
                className={`reveal relative flex flex-col items-center text-center rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-2 duration-300 border ${
                  node.highlight
                    ? "bg-[#FFD400] text-[#1A0606] border-[#FFD400] shadow-xl"
                    : "bg-card text-foreground border-border shadow-md"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full mb-5 font-bold shadow-sm ${
                    node.highlight
                      ? "bg-[#1A0606] text-[#FFD400]"
                      : "bg-[#E10600]/10 text-[#E10600] dark:bg-[#FF3B30]/20 dark:text-[#FF3B30]"
                  }`}
                >
                  <node.icon className="h-6 w-6" />
                </div>
                <span className="font-mono-label text-[11px] opacity-70 mb-1">Node 0{i + 1}</span>
                <h3 className="font-display text-xl font-black leading-snug">{node.title}</h3>
                <span
                  className={`mt-2 text-sm font-semibold px-3 py-1 rounded-full ${
                    node.highlight
                      ? "bg-[#1A0606]/10 text-[#1A0606]"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {node.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 6. Work Section */
function Work() {
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-border">
      <Container>
        <div data-reveal className="reveal mb-14 md:mb-18">
          <span className="font-mono-label text-xs text-[#D80500] dark:text-[#FF3B30] font-bold">
            04 // PORTFOLIO
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-3">Work you can open.</h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground font-medium">
            Live products, client engagements, and active builds.
          </p>
        </div>

        {/* Full-width Rows (Not cards) */}
        <div className="divide-y divide-border border-y border-border">
          {projects.map((proj, idx) => {
            const hasLink = Boolean(proj.url);
            const RowTag = hasLink ? "a" : "div";

            return (
              <RowTag
                key={proj.id}
                href={proj.url}
                target={hasLink ? "_blank" : undefined}
                rel={hasLink ? "noreferrer" : undefined}
                onMouseEnter={() => proj.image && setHoveredProject(proj)}
                onMouseLeave={() => setHoveredProject(null)}
                data-reveal
                data-reveal-delay={idx * 70}
                className="reveal group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 md:py-10 px-4 transition-all duration-300 hover:bg-[#E10600] hover:text-white rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D80500]"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-label text-xs font-bold text-muted-foreground group-hover:text-white/80 transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E10600] group-hover:bg-[#FFD400]" />
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#D80500] dark:text-[#FF3B30] group-hover:text-[#FFD400] transition-colors">
                      {proj.type}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-black mt-2 text-foreground group-hover:text-white transition-colors">
                    {proj.name}
                  </h3>
                  <p className="mt-2 text-sm md:text-base font-medium text-muted-foreground group-hover:text-white/90 leading-relaxed transition-colors">
                    {proj.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs md:text-sm font-bold text-foreground/80 group-hover:text-white transition-colors">
                    {hasLink ? "Open Project" : "Private / In Progress"}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border group-hover:border-white bg-card group-hover:bg-white text-foreground group-hover:text-[#E10600] transition-all duration-300 shadow-sm">
                    {hasLink ? (
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    ) : (
                      <span className="text-xs font-mono font-bold">—</span>
                    )}
                  </div>
                </div>
              </RowTag>
            );
          })}
        </div>

        {/* Floating preview image following cursor on desktop */}
        {hoveredProject?.image && (
          <div
            className="pointer-events-none fixed z-50 hidden lg:block -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border-4 border-[#1A0606] shadow-2xl transition-opacity duration-200"
            style={{
              left: `${cursorPos.x + 180}px`,
              top: `${cursorPos.y}px`,
              width: "360px",
              height: "225px",
            }}
          >
            <img
              src={hoveredProject.image}
              alt={`${hoveredProject.name} preview`}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}

/* 7. About */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/30 border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Photo with rotated red backdrop */}
          <div data-reveal className="reveal lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4]">
              {/* Red rounded rectangle rotated 5deg behind it */}
              <div
                className="absolute inset-0 rounded-[28px] bg-[#E10600] rotate-5 transform origin-bottom-right transition-transform hover:rotate-6 duration-300"
                aria-hidden="true"
              />
              {/* Photo: 3:4, rounded 28px, object-fit cover, lazy loaded */}
              {/*
                TODO: The original user photo is 274x365 (< 800px wide).
                Once a high-resolution >= 800px image is provided, replace /public/images/david.jpg.
              */}
              <img
                src="/images/david.jpg"
                alt="David Omeh"
                loading="lazy"
                decoding="async"
                className="relative h-full w-full object-cover rounded-[28px] shadow-2xl border-2 border-border"
              />
            </div>
          </div>

          {/* Right: Headline and Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div data-reveal className="reveal">
              <span className="font-mono-label text-xs text-[#D80500] dark:text-[#FF3B30] font-bold">
                03 // ABOUT DAVID
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mt-3 leading-tight">
                I take the stress out of running a business.
              </h2>
            </div>

            <p
              data-reveal
              data-reveal-delay="100"
              className="reveal mt-6 text-xl md:text-2xl font-semibold leading-relaxed text-foreground"
            >
              I'm David Omeh. I build websites and automation tools for businesses, so the busywork
              gets handled and you can earn more money.
            </p>

            <p
              data-reveal
              data-reveal-delay="200"
              className="reveal mt-4 text-base md:text-lg leading-relaxed text-muted-foreground font-medium"
            >
              I'm a 300-level Computer Science student at Delta State University. I use AI-assisted
              workflows to move fast, then refine each product with what real users do.
            </p>

            {/* Skills & Process Grid */}
            <div className="mt-12 pt-10 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Skills Tags */}
              <div data-reveal data-reveal-delay="300" className="reveal">
                <h3 className="font-display text-xl font-black mb-4">What I work with</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag-tilt inline-flex items-center rounded-full bg-secondary px-4 py-2 text-xs md:text-sm font-bold text-foreground border border-border cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3-Step Process */}
              <div data-reveal data-reveal-delay="400" className="reveal">
                <h3 className="font-display text-xl font-black mb-4">How I deliver</h3>
                <ol className="space-y-4">
                  {processSteps.map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E10600] text-white text-xs font-black">
                        {step.num}
                      </span>
                      <div>
                        <span className="font-bold text-foreground text-sm block">
                          {step.title}
                        </span>
                        <span className="text-xs md:text-sm text-muted-foreground">
                          {step.body}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 8. Contact */
function Contact() {
  return (
    <section id="contact" className="bg-[#E10600] text-white py-24 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-mono-label text-xs font-black tracking-widest text-white/80 uppercase">
            05 // GET IN TOUCH
          </span>

          <h2
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mt-4 leading-none tracking-tight uppercase"
            style={{ fontSize: "clamp(56px, 12vw, 130px)" }}
          >
            Let's build it.
          </h2>

          {/* Yellow Circular Button with Pulsing Ring */}
          <div className="mt-10 mb-8 flex justify-center">
            <a
              href="https://wa.me/2348077319385"
              target="_blank"
              rel="noreferrer"
              className="animate-pulse-ring btn-lift group relative flex h-36 w-36 sm:h-44 sm:w-44 flex-col items-center justify-center rounded-full bg-[#FFD400] text-[#1A0606] shadow-2xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 fill-current mb-1" />
              <span className="text-center font-display text-xs sm:text-sm font-black uppercase leading-tight px-3">
                Message me on WhatsApp
              </span>
            </a>
          </div>

          <p className="max-w-xl text-lg sm:text-xl font-medium text-white/95 leading-relaxed">
            Open to freelance work, internships and remote roles. I reply with questions, not a
            sales pitch.
          </p>

          {/* Contact Direct Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/2348077319385"
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-[#1A0606] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
            >
              <MessageSquare className="h-4 w-4 fill-current text-[#FFD400]" />
              <span>0807 731 9385 (WhatsApp)</span>
            </a>
            <a
              href="mailto:davigraph.code@gmail.com"
              className="btn-lift inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-[#E10600] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail className="h-4 w-4" />
              <span>davigraph.code@gmail.com</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Footer */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A0606] text-[#FFEDE9] border-t border-white/10 py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-[#E10600] text-[10px] font-black text-white">
            DG
          </span>
          <span className="text-[#FFEDE9]/90 font-semibold">
            © {currentYear} David Omeh · Davi Graph · Lagos, Nigeria
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/DaviGraph"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#FFEDE9]/80 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/davi-graph-543615"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#FFEDE9]/80 hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://wa.me/2348077319385"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#FFD400] hover:underline"
          >
            <span>WhatsApp</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
