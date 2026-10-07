import Reveal from "./Reveal";

/** Small label + big title used at the top of every section. */
export default function SectionHead({ label, children }) {
  return (
    <Reveal className="section-head">
      <span>{label}</span>
      <h2>{children}</h2>
    </Reveal>
  );
}
