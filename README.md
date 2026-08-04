# Savannah & Denver — Honeymoon Fund

Static wedding honeymoon-fund page for guests who scan a QR code. Cream background with rust and sage accents.

## Payment links

| Method   | Destination      |
|----------|------------------|
| Venmo    | @Savannahv1351   |
| Cash App | $Savannahv1351   |
| Zelle    | 7063056200 (copy)|

## Project structure

```
├── index.html
├── css/styles.css
├── js/script.js
├── assets/images/couple.jpg
├── vercel.json
└── README.md
```

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx serve .
```

## Live site

- **Production:** https://sd-wedding.vercel.app
- **GitHub:** https://github.com/BrocCodyNchz/SD-Wedding

Point your QR code at the production URL above.

## Deploy on Vercel

Already configured as a static site (`vercel.json`, no build step).

To redeploy from this folder:

```bash
npx vercel --prod
```

Or connect the GitHub repo in the Vercel dashboard so every push to `main` deploys automatically.

## Brand

Cream `#F3EDE3`, rust `#A85A3A`, sage `#7A8F74`. Full tokens live in `docs/brand/BRAND_BRIEF.md` (local pipeline docs).
