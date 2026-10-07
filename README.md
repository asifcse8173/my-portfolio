# Asif — Portfolio (React + Vite)

A responsive, animated developer portfolio. Works on phones, tablets, laptops and large screens.

## Run it

```bash
npm install      # first time only
npm run dev      # open http://localhost:5173
npm run build    # creates the /dist folder to deploy
```

## Folder structure

```
asif-portfolio/
├── index.html              Page title, description, social preview tags
├── vite.config.js          Vite + React setup (you rarely touch this)
├── public/                 Files served as-is
│   ├── asif.jpg            Your photo
│   └── Asif-Resume.pdf     <- put your resume here (exact name)
└── src/
    ├── main.jsx            Starts the app
    ├── App.jsx             Page layout: Navbar + sections + Footer
    ├── config.js           ★ Email, LinkedIn, GitHub, resume path
    │
    ├── data/               ★ All your CONTENT lives here
    │   ├── projects.js       project cards
    │   ├── skills.js         skill cards + scrolling tech strip
    │   ├── experience.js     timeline entries
    │   ├── about.js          education / focus / location details
    │   ├── hero.js           typing roles + counter numbers
    │   └── sections.js       order of nav links
    │
    ├── components/         One file per section
    │   ├── Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx
    │   ├── Projects.jsx (+ ProjectCard.jsx)  Experience.jsx
    │   ├── Contact.jsx (+ ResumeCard.jsx)    Footer.jsx
    │   └── ui/             Small reusable pieces
    │       ├── Reveal.jsx      fade-in-on-scroll wrapper
    │       ├── SectionHead.jsx section label + title
    │       ├── Typewriter.jsx  typing effect
    │       └── Counter.jsx     counting numbers
    │
    ├── hooks/              Reusable logic
    │   ├── useScrollSpy.js   active nav link + progress bar
    │   └── useResume.js      shows resume card only if the PDF exists
    │
    ├── utils/scroll.js     smooth scroll helper
    │
    └── styles/             One CSS file per section
        ├── index.css         imports everything (order matters)
        ├── base.css          colours, reset, shared layout
        ├── navbar.css  buttons.css  hero.css  about.css  skills.css
        ├── projects.css  experience.css  contact.css  resume.css  footer.css
        ├── animations.css    all @keyframes
        └── responsive.css    ★ every breakpoint (phone / tablet / laptop / large)
```

## "I want to change…" cheat sheet

| I want to change | Edit this file |
|---|---|
| Email, LinkedIn, GitHub link | `src/config.js` |
| Add / edit a project | `src/data/projects.js` |
| Skills or tech strip | `src/data/skills.js` |
| Experience / internships | `src/data/experience.js` |
| Education, location, focus | `src/data/about.js` |
| Typing words, CGPA / project counts | `src/data/hero.js` |
| Headline or intro paragraph | `src/components/Hero.jsx` |
| Colours or spacing of one section | that section's file in `src/styles/` |
| Mobile / tablet layout | `src/styles/responsive.css` |

## Add your resume (view-only)

1. Rename your resume to `Asif-Resume.pdf`.
2. Copy it into the `public/` folder.
3. Rebuild and redeploy. The "View Resume" buttons appear automatically in the navbar, hero, and contact sections.

If the file is missing the buttons stay hidden, so visitors never see a broken link.
(View-only hides the download button, but anyone can still save a PDF that is publicly hosted.)

## Deploy

Upload the project to GitHub, then import it on Vercel or Netlify
(build command `npm run build`, output folder `dist`).
