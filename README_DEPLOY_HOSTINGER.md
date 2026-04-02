# Deploying to Hostinger (shared hosting)

1. Run `npm run build`.
2. After build completes, a `dist/` folder will be created.
3. Upload the contents of `dist/` (all files and folders inside it) to your Hostinger `public_html` folder.
4. Ensure the `.htaccess` file is uploaded to `public_html` so SPA routing works.
5. If using Hostinger file manager, you can zip and upload, then extract.

