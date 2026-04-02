# WickedAILabs Website

React + Vite + Tailwind website for **WickedAILabs** (www.wickedailabs.com).

## Included
- React + Vite
- Tailwind CSS
- React Router
- shadcn-like UI components (Button, Card, Input, Textarea)
- Placeholder logo and favicon
- .htaccess for SPA fallback (for Hostinger)

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
# dist/ will contain production files
```

## Deploy to Hostinger (shared hosting)
1. Build the project (`npm run build`).
2. Upload contents of `dist/` to `public_html` on Hostinger.
3. Ensure the included `.htaccess` is uploaded to `public_html` so client-side routing works.

