# תומר עזרי – טכנאי מחשבים

Static business website (Hebrew, RTL). No build step: open `index.html` in a browser,
or host the folder on GitHub Pages / Netlify / any static host.

## Updating contact details
Edit the `CONFIG` object at the top of `script.js` (phone, WhatsApp number, email).
Opening hours are in the contact section of `index.html`.

## Portrait photo
The hero shows `images/tomer-240.webp` / `images/tomer-380.webp` (phones get the small one) with
`images/tomer-380.jpg` as fallback. To replace the photo, regenerate all three at the same sizes
(4:5 crop, metadata stripped).

## SEO
- Target query: "טכנאי מחשבים בראשון לציון" (title, meta description, H1, H2s, LocalBusiness JSON-LD).
- Live at https://tomer-pc.co.il/ (GitHub Pages custom domain; keep the `CNAME` file GitHub creates).
- Canonical URLs, og:url, JSON-LD, `sitemap.xml` and `robots.txt` all use https://tomer-pc.co.il/.
  If the domain ever changes, update it in `index.html`, `business.html`, `sitemap.xml` and `robots.txt`.
- Google Search Console verification: paste the meta tag where the comment in `<head>` says so.

## Prices
Prices appear in several places – keep them in sync when they change:
- `index.html`: price cards (#pricing), MacBook section, FAQ, and `makesOffer`/`priceRange` in the JSON-LD
- `business.html`: hero price card, price cards (#it-pricing), FAQ, and `offers` in the JSON-LD

The free offer is only the initial consultation by phone/WhatsApp ("אבחון ראשוני בטלפון או בוואטסאפ – ללא עלות").

## Files
- `index.html` – home page (residential customers)
- `business.html` – "שירותי IT לעסקים קטנים בראשון לציון" (business customers)
- `styles.css` – design (light/dark mode, responsive)
- `script.js` – contact details, mobile menu, scroll animations, portrait loader, contact form → WhatsApp
- `sitemap.xml`, `robots.txt` – for search engines
