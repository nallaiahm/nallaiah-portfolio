# Nallaiah M — Portfolio

A premium, futuristic developer portfolio built with **React + Vite**. Fully static, no backend, no API keys — just install and run.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build with:

```bash
npm run preview
```

## 3. Replace your profile photo

Replace this file with your own square photo (JPG or PNG, ideally 800×800px+):

```
src/assets/profile.jpg
```

Keep the same filename, or update the import in `src/components/Hero.jsx`:

```js
import profileImg from '../assets/profile.jpg'
```

## 4. Replace your resume

Replace this file with your real resume PDF:

```
src/assets/resume.pdf
```

Keep the same filename and the "Download Resume" button on the Hero section will automatically serve your real file.

## 5. Update your links & content

All editable text — name, bio, skills, projects, experience, education, certifications, achievements, contact info — lives in one file:

```
src/data/portfolioData.js
```

Specifically, replace these placeholders near the top of the file:

```js
linkedin: 'https://linkedin.com/in/your-profile',
github: 'https://github.com/your-username',
leetcode: 'https://leetcode.com/your-username',
```

And add real links for each project (`github`, `demo` fields) once you have them.

## 6. Deploy to Vercel (recommended, free)

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your GitHub repo.
3. Vercel auto-detects Vite. Leave defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL in about a minute.

## 7. Deploy to Netlify (alternative)

1. Push the project to GitHub (see step 6.1).
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

## Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── profile.jpg      ← replace with your photo
│   │   └── resume.pdf       ← replace with your resume
│   ├── components/          ← one component per section
│   ├── data/
│   │   └── portfolioData.js ← all editable content lives here
│   ├── hooks/
│   │   └── useReveal.js     ← scroll-reveal animation hook
│   ├── styles/
│   │   └── layout.css       ← component/layout styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            ← design tokens & global styles
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- The contact form uses a `mailto:` link — no backend or form service is required. It opens the visitor's email client pre-filled with their message.
- Animations respect `prefers-reduced-motion` for accessibility.
- The site is fully responsive (mobile, tablet, laptop, desktop) with a dedicated mobile navigation menu.
