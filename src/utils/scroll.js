// Smoothly scroll to a section by its id (used by the nav, hero buttons and footer).
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
