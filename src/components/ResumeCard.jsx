import { Eye, FileText } from "lucide-react";
import { NAME, RESUME_VIEW } from "../config";
import Reveal from "./ui/Reveal";

// View-only resume card (no download button). Shown only when the PDF exists.
export default function ResumeCard() {
  return (
    <Reveal className="resume-card">
      <div className="resume-icon"><FileText size={26} /></div>
      <div className="resume-info">
        <h3>{NAME} — Resume</h3>
        <p>Education, projects, skills &amp; internship experience</p>
      </div>
      <div className="resume-actions">
        <a className="btn-sm" href={RESUME_VIEW} target="_blank" rel="noreferrer"><Eye size={14} /> View Resume</a>
      </div>
    </Reveal>
  );
}
