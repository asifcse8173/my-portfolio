import { SKILLS, TECH_STACK } from "../data/skills";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead label="02 — Skills">Tools I use to <em>build.</em></SectionHead>

      <div className="skills-grid">
        {SKILLS.map(({ title, text, icon: Icon, color }, i) => (
          <Reveal className="skill-card" key={title} style={{ "--c": color }} delay={i * 0.05}>
            <div className="skill-icon"><Icon size={21} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>

      {/* the list is doubled so the scrolling loop has no gap */}
      <div className="marquee">
        <div className="marquee-track">
          {[...TECH_STACK, ...TECH_STACK].map(([name, color], i) => (
            <span key={i} style={{ "--c": color }}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
