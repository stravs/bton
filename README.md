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

## Opombe

- Kontaktni obrazec sestavi e-poštno sporočilo na `info@bton.si` (`mailto:`).
  Za strežniško oddajo (npr. Formspree / Web3Forms) zamenjaj logiko v
  `src/components/Contact.astro`.
- Mapa `wix_assets/` je vir originalnih datotek; vse uporabljene so že kopirane
  v `src/assets` in `public`, zato jo je mogoče izbrisati.
