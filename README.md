Personal Branding Site — Quick Start

This is a minimal static site scaffold for a personal branding site. It includes a hero, about, selected work, and a contact form.

How to run locally

1. Open the `personal-site` folder and open `index.html` in any browser.

2. Or serve it locally (recommended) with Python's simple HTTP server:

```powershell
cd 'C:\Users\mosta\OneDrive\Documents\program\personal-site'
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Customize

- Edit `index.html` to add your name, bio, projects, and real links.
- Update `styles.css` for visual tweaks.
- Replace the `handleContact` function in `script.js` with a real backend or a service like Formspree, Netlify Forms, or your own API.

Deploy

- Easiest: push to GitHub and enable GitHub Pages on the repository's `gh-pages` branch or use `main` with the `docs/` folder.
- Alternative: Netlify / Vercel — just connect the repository and they will publish automatically.

Automatic deploy with GitHub Actions (included)

This repository includes a workflow at `.github/workflows/deploy.yml` that will publish the `personal-site` folder to the `gh-pages` branch whenever you push to `main`.

Steps:

1. Commit and push everything to your `main` branch.
2. The workflow will run and publish to `gh-pages`. In repo Settings → Pages, set the source to the `gh-pages` branch and `/ (root)`.

Contact form (Formspree)

If you want a simple contact form without a backend, use Formspree:

1. Sign up at https://formspree.io and create a form. You'll get an endpoint URL like `https://formspree.io/f/yourid`.
2. Edit the contact `<form>` element in `index.html` and add the endpoint as `data-endpoint`:

```html
<form class="contact-form" action="#" data-endpoint="https://formspree.io/f/yourid" onsubmit="handleContact(event)">
```

3. The included `script.js` will submit the form via fetch to Formspree and show success/failure messages.

Extras (optional)

- Add a `CNAME` for custom domain.
- Add a small GitHub Actions workflow to build and deploy to GitHub Pages automatically.
