import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { NAV_SECTIONS } from "./data/sections";
import useResume from "./hooks/useResume";
import useScrollSpy from "./hooks/useScrollSpy";

// App = page layout only. Each section lives in src/components, its content in src/data.
export default function App() {
  const [dark, setDark] = useState(true);
  const { scrolled, progress, active } = useScrollSpy(NAV_SECTIONS);
  const hasResume = useResume();

  // Feeds the soft light that follows the mouse (see .cursor-glow in base.css).
  const trackMouse = (e) => {
    e.currentTarget.style.setProperty("--mx", `${e.clientX}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY}px`);
  };

  return (
    <div className={dark ? "app dark" : "app light"} onMouseMove={trackMouse}>
      <div className="cursor-glow" />
      <div className="noise" />
      <div className="progress" style={{ width: `${progress}%` }} />

      <Navbar active={active} scrolled={scrolled} dark={dark} onToggleTheme={() => setDark(!dark)} hasResume={hasResume} />

      <main>
        <Hero hasResume={hasResume} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact hasResume={hasResume} />
      </main>

      <Footer />
    </div>
  );
}
