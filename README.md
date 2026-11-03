# Ethan Cho — Personal Website

A clean, modern, and responsive personal portfolio built with **HTML5** and **Tailwind CSS**.

## Features

- **Dark Mode Support:** Automatically detects system preferences and includes an interactive toggle with persistent local storage.
- **Responsive Design:** Optimized for mobile phones, tablets, and desktop displays.
- **Zero Build Setup Required:** Uses Tailwind via CDN—no Node.js or bundlers needed to get started.
- **Sections Included:**
  - Hero with status badge and call-to-actions
  - About Me
  - Featured Projects with tags and repository links
  - Skills & Tech Stack badges
  - Contact section & social links

---

## File Structure

```text
ethancho/
├── index.html              # Main webpage and layout
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styling and Google font imports
│   ├── js/
│   │   └── main.js         # Dark mode toggle and mobile menu interactivity
│   └── images/             # Place your profile picture and project screenshots here
│       └── .gitkeep
├── .gitignore              # Ignored files for macOS and editors
└── README.md
```

---

## How to Preview Locally

You don't need to install anything! Choose either method:

### Option 1: Using Python's built-in web server (Recommended)
Open your terminal in this directory and run:
```bash
python3 -m http.server 8000
```
Then open your browser to [http://localhost:8000](http://localhost:8000).

### Option 2: Direct file opening
Simply double-click `index.html` or open it with your favorite web browser (Chrome, Safari, Firefox).

---

## How to Customize

1. **Edit Info & Bio:** Open `index.html` and search for `Ethan Cho` to personalize your headline, bio, and social links.
2. **Add Your Projects:** Locate the `<section id="projects">` block in `index.html` to update project titles, descriptions, and links.
3. **Update Skills:** Modify the tags in `<section id="skills">` to match your personal tech stack.
4. **Email Address:** Replace `your-email@example.com` in the Contact section with your actual email.

---

## How to Deploy to GitHub Pages (Free Hosting)

1. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Build initial portfolio website"
   git push origin main
   ```
2. Go to your repository on GitHub: `https://github.com/eddandomcho/ethancho`
3. Click **Settings** &rarr; **Pages** (under "Code and automation" in the left sidebar).
4. Under **Build and deployment > Source**, select **Deploy from a branch**.
5. Set the branch to `main` and folder to `/ (root)`, then click **Save**.
6. Your portfolio will be live at `https://eddandomcho.github.io/ethancho` in about 1-2 minutes!
