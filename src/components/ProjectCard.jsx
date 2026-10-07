import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function ProjectCard({ project, index }) {
  const { title, featured, category, description, tags, accent, github, live } = project;
  const hasLive = live !== "#";
  const hasCode = github !== "#";

  return (
    <Reveal as="article" className={`project-card ${accent}`} delay={index * 0.07}>
      {/* coloured banner */}
      <div className="project-visual">
        <div className="project-number">0{index + 1}</div>
        {featured && <div className="badge">★ Featured</div>}
        <div className="project-shape"><span>{title.split(" ")[0]}</span></div>
        <div className="project-links">
          {hasCode && <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} source code`}><Github size={17} /></a>}
          {hasLive && <a href={live} target="_blank" rel="noreferrer" aria-label={`${title} live demo`}><ExternalLink size={17} /></a>}
        </div>
      </div>

      {/* text + buttons */}
      <div className="project-body">
        <small>{category}</small>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="card-actions">
          {hasLive
            ? <a className="btn-sm" href={live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>
            : <span className="btn-sm muted">Concept</span>}
          {hasCode && <a className="btn-sm ghost" href={github} target="_blank" rel="noreferrer"><Github size={14} /> Source</a>}
        </div>
      </div>
    </Reveal>
  );
}
