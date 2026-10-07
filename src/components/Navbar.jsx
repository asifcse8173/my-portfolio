import { useEffect, useState } from "react";
import { Eye, Github, Menu, X } from "lucide-react";
import { GITHUB, NAME, RESUME_VIEW } from "../config";
import { NAV_SECTIONS } from "../data/sections";
import { scrollToSection } from "../utils/scroll";

export default function Navbar({ active, scrolled, dark, onToggleTheme, hasResume }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={scrolled || menuOpen ? "nav scrolled" : "nav"}>
      <button className="brand" onClick={() => go("home")}>
        <span className="brand-mark">{NAME[0]}</span>
        <span>{NAME}<span className="dot">.</span></span>
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        {NAV_SECTIONS.map((id) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
            {id}
          </button>
        ))}
        <a className="nav-github" href={GITHUB} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
      </div>

      <div className="nav-actions">
        {hasResume && (
          <a className="nav-resume" href={RESUME_VIEW} target="_blank" rel="noreferrer">
            <Eye size={15} /> View Resume
          </a>
        )}
        <button className="nav-cta" onClick={() => go("contact")}>Hire me</button>
        <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {dark ? "☼" : "☾"}
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
