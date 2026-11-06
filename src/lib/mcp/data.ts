export type ProjectStatus = "LIVE" | "CLIENT PROJECT" | "IN PROGRESS";

export type Project = {
  name: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  slug?: string;
};

export const profile = {
  name: "David Omeh",
  role: "Web developer and automation builder",
  location: "Lagos, Nigeria",
  education: "300-level Computer Science student at Delta State University",
  thesis:
    "I build websites, apps and AI automations for businesses, from my base in Lagos. One person, idea to live product.",
  availability: "Open to freelance work, internships and remote roles.",
};

export const projects: Project[] = [
  {
    name: "Israelee Academy",
    status: "CLIENT PROJECT",
    tagline: "Video editing and animation academy platform.",
    description:
      "A full site for a video editing and animation academy: courses, student work, certification and WhatsApp registration.",
    tags: ["React", "Client Project", "Education", "WhatsApp"],
    url: "https://isrealee-academy.vercel.app/",
    slug: "israelee-academy",
  },
  {
    name: "Cleanique",
    status: "CLIENT PROJECT",
    tagline: "Cleaning company booking with automated alerts.",
    description:
      "Booking site for a cleaning company, with bank-transfer deposits and owner alerts on Telegram.",
    tags: ["Next.js", "Telegram Bot", "Bookings", "Payments"],
    url: "https://cleanique-eight.vercel.app/",
    slug: "cleanique",
  },
  {
    name: "61-Day Challenge",
    status: "LIVE",
    tagline: "Installable finance tracker made for the phone.",
    description:
      "A finance tracker built for a 61-day money challenge. Installable and made for the phone.",
    tags: ["PWA", "Finance", "Mobile-First", "Offline"],
    url: "https://60-days-zeta.vercel.app",
    slug: "61-day-challenge",
  },
  {
    name: "CrossDrop",
    status: "LIVE",
    tagline: "Temporary QR-code file transfers across devices.",
    description: "Share files across devices with a QR code. Files expire after 5 minutes.",
    tags: ["PWA", "QR Transfer", "Realtime", "Auto-Expire"],
    url: "https://cross-drop-one.vercel.app",
    slug: "crossdrop",
  },
  {
    name: "ElonVest",
    status: "CLIENT PROJECT",
    tagline: "Stock broker platform with live market data.",
    description:
      "Stock broker platform with live market data and trade execution through the Alpaca API.",
    tags: ["Next.js", "Alpaca API", "Trading", "Finance"],
  },
  {
    name: "StudyPadi",
    status: "IN PROGRESS",
    tagline: "AI study companion for Nigerian secondary school students.",
    description: "AI study companion for Nigerian SS1 to SS3 students, built on the Claude API.",
    tags: ["Claude API", "AI EdTech", "NERDC", "Python"],
  },
];

export const stack = [
  {
    category: "Web Development",
    items: ["React", "Next.js", "Tailwind CSS", "Supabase", "Python"],
  },
  {
    category: "AI & Automations",
    items: ["n8n", "WhatsApp & Telegram bots", "Claude API", "Gemini"],
  },
  { category: "Deployment & Tools", items: ["Vercel", "Git", "REST APIs"] },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    body: "The goal, the user and the limits, before any code.",
  },
  {
    step: "02",
    title: "Build",
    body: "Short feedback loops and no wasted scope.",
  },
  {
    step: "03",
    title: "Ship and iterate",
    body: "Launch, watch real usage, then refine.",
  },
];

export const contact = [
  { label: "WhatsApp", value: "0807 731 9385", href: "https://wa.me/2348077319385" },
  { label: "Email", value: "davigraph.code@gmail.com", href: "mailto:davigraph.code@gmail.com" },
  { label: "GitHub", value: "github.com/DaviGraph", href: "https://github.com/DaviGraph" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/davi-graph-543615",
    href: "https://linkedin.com/in/davi-graph-543615",
  },
];
