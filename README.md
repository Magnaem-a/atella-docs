# atella-docs

Documentation site for the **Atella member area** — the Webflow + Memberstack
learning site. Built with [Fumadocs](https://fumadocs.dev) (Next.js).

The docs explain, page by page, how the scripts work and which attributes each
Webflow page needs. The scripts themselves live in the separate
[`Magnaem-a/atella`](https://github.com/Magnaem-a/atella) repo.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where the content lives

All documentation is MDX in **`content/docs/`**:

```
content/docs/
  index.mdx            Overview
  getting-started.mdx  The atella.js bundle, CDN, Webflow setup
  attributes.mdx       data-ms-code / data-ms-field / ms-code-* conventions
  data-tables.mdx      Memberstack table schema
  pages/               One file per page script (dashboard, course-detail, …)
  meta.json            Sidebar order
```

To edit the docs you only touch `content/docs/`. `meta.json` files control the
sidebar order.

## Deploy

Push to GitHub and import the repo in Vercel — Fumadocs is a standard Next.js
app, so Vercel builds it with no extra configuration.

## Build

```bash
npm run build
```
