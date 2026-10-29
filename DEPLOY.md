# Deploy — Blackrock Auto Clinic (blackrock-autoclinic.ie)

Static one-page site, no build step. Deploys to Hostinger via Git (same as the other sites).
(This repo previously held the Kingstown Turkish Barber site — it's in git history at commit be4e6c1.)

1. Push to `main` at https://github.com/Nicholasrooney/Kingstownbarber.ie.git
2. In Hostinger hPanel → Websites → the domain → Git: connect the repo (branch `main`, directory `public_html`), then click **Deploy** after each push.
3. Point the domain at Hostinger and enable free SSL.

## Domain
- `blackrockautoclinic.ie` / `.com` are **taken** — registered to the old owner's hosting (now shows "Account Suspended"). Dave may be able to get it transferred from Derek Behan as part of the handover.
- Site is set up for `blackrock-autoclinic.ie` (showed Available at €3.95 in the registrar). `blackrockauto.ie` was also available.
- If the domain changes, find/replace `blackrock-autoclinic.ie` in `index.html`, `robots.txt`, `sitemap.xml`.

## Before / after launch (on Nicholas)
- Confirm hours (Mon–Fri 8–6, weekends closed — from Waze/Google, Saturday not confirmed)
- Real photos of the garage would beat the Unsplash stock shots — swap files in `images/` keeping the same names
- Add an email address if Dave wants one shown (none found online)
- Google Search Console: verify domain, submit `sitemap.xml`; add the URL to the Google Business Profile

## Notes
- Source screenshots, original stock photos and `info.json` (all 24 Google reviews transcribed) live in `_source/` (gitignored, not deployed)
- Contact is buttons-only: call / directions — no forms, no backend
- Ownership: Derek Behan retired May 2025 after 35 years; former technician Dave Murdock (Murdock Automotive Ltd) runs it now
