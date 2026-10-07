import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHead from "./ui/SectionHead";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionHead label="03 — Selected work">Projects with a <em>purpose.</em></SectionHead>
      <div className="project-grid">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  );
}
