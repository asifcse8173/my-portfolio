// =====================================================================
//  EDIT THIS FILE to personalise the portfolio (email, links, resume).
// =====================================================================

export const NAME = "Asif";

export const EMAIL = "your-email@example.com"; // <- put your real email here
export const LINKEDIN = "";                    // <- e.g. "https://www.linkedin.com/in/your-handle"
export const GITHUB = "https://github.com/asifcse8173";

// Put your resume PDF inside the /public folder with this exact name.
export const RESUME = "/Asif-Resume.pdf";
// "#toolbar=0" hides the download toolbar in most browser PDF viewers.
export const RESUME_VIEW = `${RESUME}#toolbar=0&navpanes=0`;

// The email button stays hidden until you replace the placeholder above.
export const HAS_EMAIL = Boolean(EMAIL) && !EMAIL.includes("example.com");
