# MathCosine — notes & portfolio

A clean, static website. No login, no database. You add notes by pasting Google Drive links into one file, and visitors can search and filter them by subject.

---

## The only two files you'll ever edit

| I want to change… | Edit this file |
| --- | --- |
| My **notes** (add / remove / edit) | `src/data/notes.js` |
| My **"Writing on a Wall" thoughts** | `src/data/wall.js` |
| My **name, photo, bio, email, tagline** | `src/data/site.js` |

Both files are heavily commented — open them and you'll see exactly what to change. After you edit and commit, Netlify rebuilds the site automatically (about a minute).

### How to add a note

1. Upload your PDF to **Google Drive**.
2. Right-click it → **Share** → set to **"Anyone with the link"** → **Copy link**.
3. Open `src/data/notes.js`, copy one of the `{ ... }` blocks, paste it at the top of the list, and fill in your `title`, `subject`, `description`, and paste your link into `link`.

The `subject` must be spelled exactly like one in the `subjects` list at the top of that file (e.g. `"Higher Math"`). To rename or add a subject, edit that `subjects` list.

**Important for the in-page preview:** clicking a note opens the PDF *inside* the site in a preview window (with an "Open in new tab" button). For that preview to show, the Google Drive file's sharing must be set to **"Anyone with the link."** If it isn't, visitors will see a Google "you need access" screen instead.

### How to add a "Writing on a Wall" thought

Open `src/data/wall.js` and paste a new line at the top:

```js
{ date: "2026-07-22", text: "Whatever you're thinking right now." },
```

The date uses `YYYY-MM-DD` and is shown nicely (e.g. "Jul 22, 2026").

### How to add your photo

1. Put your image in the **`public/`** folder (e.g. `public/me.jpg`).
2. In `src/data/site.js`, set `photo: "/me.jpg"`.

Until you do, a placeholder "MC" avatar is shown.

### How to change any wording

Everything on the page (name, tagline, bio, email) lives in `src/data/site.js`. The bio has a `[your school]` placeholder — replace it with your school.

---

## What's in this repo

```
src/
  data/
    site.js        ← your name, photo, bio, email  (EDIT ME)
    notes.js       ← your notes + Google Drive links  (EDIT ME)
    wall.js        ← your "Writing on a Wall" thoughts  (EDIT ME)
  layouts/
    Base.astro     ← page shell, fonts, colors
  pages/
    index.astro    ← the whole site (hero + searchable notes)
public/
  profile.svg      ← placeholder avatar (replace with your own photo)
  favicon.svg
netlify.toml       ← Netlify build settings
```

## Publishing to Netlify (one time)

1. On [netlify.com](https://app.netlify.com): **Add new site → Import an existing project → GitHub → this repo.** Settings are auto-detected.
2. Done. Every time you push a change (including edits made in the GitHub website), Netlify rebuilds and redeploys automatically — **you never re-import.**

## Local development (optional)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
