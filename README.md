# Field Notes

Basic Astro and Tailwind blog starter with local post data that can be replaced by Payload CMS later.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Payload handoff

Post data currently lives in `src/lib/posts.ts`. When Payload is ready, replace `getPosts()` with a fetch to your Payload posts collection and keep the returned object shape aligned with `BlogPost`.
