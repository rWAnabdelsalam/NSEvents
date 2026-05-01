# Najmat AlSafa UI Replica

## Run locally

```bash
npm install
npm start
```

or

```bash
npm run dev
```

## Build for deployment

```bash
npm run build
```

Upload the `dist` folder to Vercel, Netlify, Cloudflare Pages, or your hosting provider.

## Replace before launch

- Replace `/public/assets/hero.jpg`
- Replace `/public/assets/og-image.jpg`
- Replace placeholder visual blocks with your real images
- Replace WhatsApp number in `src/components/Contact.jsx`
- Replace domain in `index.html`, `robots.txt`, `sitemap.xml`, and `src/components/SEOJsonLd.jsx`


## WhatsApp setup

Open:

`src/data/contact.js`

Replace:

`971000000000`

with your real WhatsApp number in international format, without `+`, spaces, or brackets.

Example:

`971501234567`

All Book Now, Inquire Now, Learn More, Get In Touch, and View Full Menu buttons use this same WhatsApp setup and send a pre-filled message.
