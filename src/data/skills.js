import { Code2, Database, Sparkles, Globe, Smartphone, Server } from "lucide-react";

// `color` themes each card (icon, hover glow, top bar).
export const SKILLS = [
  { title: "Frontend", text: "React.js, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Responsive UI", icon: Code2, color: "#a78bfa" },
  { title: "Backend", text: "Node.js, Express.js, REST API integration", icon: Server, color: "#22d3ee" },
  { title: "Database", text: "Supabase, MySQL", icon: Database, color: "#f472b6" },
  { title: "AI & Modern Web", text: "Next.js, AI fundamentals, AI-assisted product features", icon: Sparkles, color: "#fbbf24" },
  { title: "Tools", text: "Git, GitHub, VS Code, Postman, Chrome DevTools", icon: Globe, color: "#34d399" },
  { title: "Mobile-first", text: "Accessible layouts, cross-browser compatibility, UI debugging", icon: Smartphone, color: "#60a5fa" },
];

// Scrolling strip under the skill cards: [name, dot colour]
export const TECH_STACK = [
  ["React", "#61dafb"], ["JavaScript", "#f7df1e"], ["Node.js", "#68a063"],
  ["Express", "#a1a1aa"], ["Supabase", "#3ecf8e"], ["MySQL", "#38bdf8"],
  ["Git", "#f05032"], ["GitHub", "#c084fc"], ["Vercel", "#e4e4e7"], ["Render", "#46e3b7"],
];
