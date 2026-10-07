import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2, Eye, Mail } from "lucide-react";
import { RESUME_VIEW } from "../config";
import { ROLES, STATS } from "../data/hero";
import { scrollToSection } from "../utils/scroll";
import Counter from "./ui/Counter";
import Typewriter from "./ui/Typewriter";

export default function Hero({ hasResume }) {
  return (
    <section id="home" className="hero section">
      {/* coloured glows drifting in the background */}
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="hero-glow glow-three" />

      {/* LEFT: text */}
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="eyebrow"><span className="pulse" /> Available for internships &amp; opportunities</div>

        <h1>
          I build web products<br />
          <span>people actually use.</span>
        </h1>
        <div className="role-line"><span>›</span> <Typewriter words={ROLES} /></div>

        <p className="hero-text">
          I'm <strong>Asif</strong>, a final-year B.Tech CSE student and frontend / full-stack developer.
          I design, build and deploy React + Node.js applications, with <strong>3 live projects</strong> and
          hands-on internship experience.
        </p>

        <div className="hero-actions">
          <button className="primary" onClick={() => scrollToSection("projects")}>View my work <ArrowUpRight size={18} /></button>
          <button className="secondary" onClick={() => scrollToSection("contact")}>Let's connect <Mail size={17} /></button>
          {hasResume && (
            <a className="secondary" href={RESUME_VIEW} target="_blank" rel="noreferrer"><Eye size={17} /> View Resume</a>
          )}
        </div>

        <div className="mini-stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <b><Counter to={s.value} decimals={s.decimals} suffix={s.suffix} /></b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: photo */}
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="photo-card">
          <img src="/asif.jpg" alt="Portrait of Asif" width="560" height="740" fetchpriority="high" />
          <div className="chip chip-a"><span className="pulse" /> Open to opportunities</div>
          <div className="chip chip-b"><Code2 size={15} /> React · Node.js · Supabase</div>
        </div>
      </motion.div>

      <button className="scroll-hint" onClick={() => scrollToSection("about")}>
        <span>Scroll to explore</span><ChevronDown />
      </button>
    </section>
  );
}
