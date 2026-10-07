import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, HAS_EMAIL, LINKEDIN } from "../config";
import ResumeCard from "./ResumeCard";
import Reveal from "./ui/Reveal";

export default function Contact({ hasResume }) {
  return (
    <section id="contact" className="section contact">
      <Reveal className="contact-box">
        <div>
          <span className="eyebrow">05 — Contact</span>
          <h2>Have an idea?<br /><em>Let's build it.</em></h2>
          <p>I'm open to internships, entry-level opportunities, freelance work and interesting collaborations.</p>
        </div>

        <div className="contact-actions">
          {HAS_EMAIL && <a className="primary" href={`mailto:${EMAIL}`}>Send an email <Mail size={18} /></a>}
          <a className="secondary" href={GITHUB} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          {LINKEDIN && <a className="secondary" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>}
        </div>
      </Reveal>

      {hasResume && <ResumeCard />}
    </section>
  );
}
