import { NAME } from "../config";
import { scrollToSection } from "../utils/scroll";

export default function Footer() {
  return (
    <footer>
      <span>© 2026 {NAME}.</span>
      <span>Designed &amp; built with React + Framer Motion.</span>
      <button onClick={() => scrollToSection("home")}>Back to top ↑</button>
    </footer>
  );
}
