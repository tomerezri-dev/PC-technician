# תומר עזרי – טכנאי מחשבים

Static business website (Hebrew, RTL). No build step: open `index.html` in a browser,
or host the folder on GitHub Pages / Netlify / any static host.

## Updating contact details
Edit the `CONFIG` object at the top of `script.js` (phone, WhatsApp number, email).
Opening hours are in the contact section of `index.html`.

## Portrait photo
Upload a photo as `images/tomer.jpg` (portrait, about 4:5, under ~300 KB). It replaces the
computer illustration in the hero automatically; until then the illustration is shown.

## SEO
- Target query: "טכנאי מחשבים בראשון לציון" (title, meta description, H1, H2s, LocalBusiness JSON-LD).
- Live at https://tomer-pc.co.il/ (GitHub Pages custom domain; keep the `CNAME` file GitHub creates).
- Canonical URLs, og:url, JSON-LD, `sitemap.xml` and `robots.txt` all use https://tomer-pc.co.il/.
  If the domain ever changes, update it in `index.html`, `business.html`, `sitemap.xml` and `robots.txt`.
- Google Search Console verification: paste the meta tag where the comment in `<head>` says so.

## Files
- `index.html` – home page (residential customers)
- `business.html` – "שירותי IT לעסקים קטנים בראשון לציון" (business customers)
- `styles.css` – design (light/dark mode, responsive)
- `script.js` – contact details, mobile menu, scroll animations, portrait loader, contact form → WhatsApp
- `sitemap.xml`, `robots.txt` – for search engines
