import { ArrowUpRight } from "lucide-react";
import { GITHUB } from "../config";
import { ABOUT_DETAILS } from "../data/about";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function About() {
  return (
    <section id="about" className="section about">
      <SectionHead label="01 — About">Turning ideas into <em>working products.</em></SectionHead>

      <div className="about-grid">
        <Reveal className="about-card">
          <img className="about-photo" src="/asif.jpg" alt="Asif" loading="lazy" width="72" height="72" />
          <h3>Hi, I'm Asif.</h3>
          <p>
            I enjoy taking an idea from a rough problem statement to a responsive interface,
            functional backend and deployable product. My recent work combines React,
            Node.js, databases and AI-assisted workflows.
          </p>
          <p>I care about clean UI, useful features and learning by shipping real projects.</p>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">
            Explore GitHub <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal className="about-details">
          {ABOUT_DETAILS.map((d) => (
            <div className="detail" key={d.label}>
              <span>{d.label}</span>
              <strong>{d.title}</strong>
              <small>{d.note}</small>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
