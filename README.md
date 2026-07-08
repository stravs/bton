# BTON — Astro

Statična spletna stran podjetja **BTON, nizke gradnje** (Bled, Slovenija),
prenešena z Wix na [Astro](https://astro.build/).

## Razvoj

```bash
npm install        # namestitev odvisnosti
npm run dev        # razvojni strežnik (http://localhost:4321)
npm run build      # produkcijska gradnja v ./dist
npm run preview    # predogled zgrajene strani
```

## Struktura

```
src/
├─ assets/
│  ├─ images/          # fotografije & logotipi (optimizirane preko astro:assets)
│  │  └─ gallery/       # slike galerije
│  └─ icons/           # ikone storitev
├─ components/         # Header, Hero, Services, ServiceDetails, WhyUs,
│  │                     Faq, Gallery, Contact, Footer
├─ data/services.ts    # vsebina storitev in pogostih vprašanj (FAQ)
├─ layouts/Layout.astro
├─ pages/index.astro
└─ styles/global.css   # oblikovni žetoni (design tokens) in osnovni slogi
public/
├─ videos/hero.mp4     # video v glavi (hero)
└─ favicon.png, apple-touch-icon.png
```

## Slike

Vse slike (razen videa in favikonov) se procesirajo preko Astrove komponente
`<Image />` iz `astro:assets` — samodejno se ustvarijo optimizirane, odzivne
`webp` različice z ustreznimi `srcset` in `sizes`.

## Deploy (Cloudflare Workers + Static Assets)

Stran teče kot Cloudflare Worker (`wrangler.jsonc`, `worker/index.ts`), ne
kot Cloudflare Pages. `npm run build` zgradi statično stran v `dist/`, ki jo
Worker servira preko `env.ASSETS`; zahteve na `POST /api/contact` obravnava
`worker/index.ts` sam (glej spodaj).

```bash
npm run build          # zgradi ./dist
npx wrangler deploy    # deploy Workerja (uporablja ./dist iz zgornjega koraka)
```

V Cloudflare dashboardu (Workers & Pages → **bton** → Settings) mora biti
build ukaz nastavljen tako, da najprej zgradi (`npm run build`) in nato
požene `wrangler deploy`.

## Opombe

- Kontaktni obrazec (`src/components/Contact.astro`) pošlje podatke na
  `POST /api/contact`, ki ga obravnava `worker/index.ts` (glej `fetch`
  handler). Ta pošlje e-pošto preko [Resend](https://resend.com) z
  `noreply@bton.si` na `info@bton.si` (odgovori gredo direktno pošiljatelju
  preko `reply_to`). Za delovanje potrebuješ v nastavitvah Workerja (Settings
  → Variables and Secrets) skrivnost `RESEND_API_KEY`, domena `bton.si` pa
  mora biti potrjena (verified) v Resendu (DNS zapisi dodani v Cloudflare
  DNS).
- Mapa `wix_assets/` je vir originalnih datotek; vse uporabljene so že kopirane
  v `src/assets` in `public`, zato jo je mogoče izbrisati.
