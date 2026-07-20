# MathCosine — notes, writing, mathematics

A static site (Astro) for publishing college course notes as PDFs, plus essays and an about page. Light "engineering pad" theme with a cosine-wave motif.

## How to add notes (the easy way)

Once deployed on Netlify with Identity enabled, go to **`yoursite.netlify.app/admin`**, log in, click **Course Notes → New Note**, fill in the form, and upload your PDF. It commits to this repo and Netlify redeploys automatically. No database, no server.

## Deploying to Netlify (one-time setup, ~5 minutes)

1. On [netlify.com](https://app.netlify.com): **Add new site → Import an existing project → GitHub → this repo.** Build settings are auto-detected from `netlify.toml`.
2. Enable the admin panel (Decap CMS):
   - Site configuration → **Identity** → Enable Identity.
   - Identity → Registration → set to **Invite only**, then invite yourself (your email).
   - Identity → **Services → Git Gateway** → Enable.
3. Accept the invite email, set a password, and visit `/admin`.
4. If you use a custom domain or different site name, update `site_url` in `public/admin/config.yml` and `site` in `astro.config.mjs`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Adding content by hand (the git way)

- Notes: drop a PDF in `public/pdfs/` and a markdown file in `src/content/notes/` (copy an existing one for the frontmatter).
- Writing: markdown files in `src/content/writing/`.
- About page: `src/pages/about.astro`.
