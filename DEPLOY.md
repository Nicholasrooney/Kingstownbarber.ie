# Deploy — Kingstown Turkish Barber (kingstownbarber.ie)

Static one-page site, no build step. Deploys to Hostinger via Git (same as the other sites).

1. Push to `main` at https://github.com/Nicholasrooney/Kingstownbarber.ie.git
2. In Hostinger hPanel → Websites → the domain → Git: connect the repo (branch `main`, directory `public_html`), then click **Deploy** after each push.
3. Point the domain at Hostinger and enable free SSL.

## Before / after launch (on Nicholas)
- Confirm opening hours (taken from the shop's old WordPress page: Mon–Sat 9–6:30, Sun 11–4)
- Confirm 083 072 3599 is on WhatsApp (the WhatsApp button uses it)
- Prices are deliberately not listed — the only online price list (2024) is out of date vs. reviews. Add a price list if the shop sends current prices
- If the domain isn't kingstownbarber.ie, update canonical/og/schema URLs in `index.html`, `robots.txt`, `sitemap.xml`
- Google Search Console: verify domain, submit `sitemap.xml`
- Add the website URL to the Google Business Profile and Instagram bio (@kingstown_turkishbarber)

## Notes
- Original photos, logo and Google review screenshots live in `_source/` (gitignored, not deployed). `_source/reviews.json` has all 23 reviews transcribed
- Contact is buttons-only: call / WhatsApp / directions — no forms, no backend
- Reviews on the page are copied verbatim from Google (5-star picks); rating 4.9 from 634 reviews as of Oct 2026 — update the number occasionally
