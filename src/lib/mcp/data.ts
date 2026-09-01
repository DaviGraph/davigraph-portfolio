export type ProjectStatus = "LIVE" | "CLIENT PROJECT" | "IN PROGRESS" | "PROTOTYPE";

export type Project = {
  name: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
};

export const profile = {
  name: "David Onyekachukwu",
  role: "Founder, Davi Graph",
  location: "Abraka, Nigeria",
  education: "200-level Computer Science student at Delta State University, Abraka",
  thesis:
    "Designs and builds full software products solo — from first idea to live deployment — using AI-assisted workflows to move fast without cutting corners on quality.",
  availability: "Open to freelance work, internships and remote roles.",
};

export const projects: Project[] = [
  {
    name: "CrossDrop",
    status: "LIVE",
    tagline: "Cross-platform file sharing, in a tap.",
    description:
      "A PWA for instant file transfers over QR code. Install to home screen, share in Pidgin English, and files auto-expire after 5 minutes.",
    tags: ["PWA", "QR transfer", "Pidgin EN", "Auto-expire"],
    url: "https://cross-drop-one.vercel.app",
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

export const stack = [
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Python"] },
  { category: "AI tools", items: ["Lovable", "Base44", "Bolt.new", "Claude API"] },
  { category: "Deployment", items: ["Vercel"] },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    body: "Learn the goal, the user and the constraint before a single line of code.",
  },
  {
    step: "02",
    title: "Build",
    body: "Design and develop fast, with a short feedback loop and no wasted scope.",
  },
  {
    step: "03",
    title: "Ship & Iterate",
    body: "Launch it, gather real usage, then refine what the data actually shows.",
  },
];

export const contact = [
  { label: "Email", value: "davigraph.code@gmail.com", href: "mailto:davigraph.code@gmail.com" },
  { label: "GitHub", value: "github.com/DaviGraph", href: "https://github.com/DaviGraph" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/davi-graph-543615",
    href: "https://linkedin.com/in/davi-graph-543615",
  },
  { label: "WhatsApp", value: "0807 731 9385", href: "https://wa.me/2348077319385" },
];
