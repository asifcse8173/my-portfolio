import { EXPERIENCE } from "../data/experience";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHead label="04 — Experience">Learning by <em>doing.</em></SectionHead>
      <div className="timeline">
        {EXPERIENCE.map((item) => (
          <Reveal className="timeline-item" key={item.title}>
            <div className="timeline-dot" />
            <div>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
