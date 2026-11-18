import type { ImageMetadata } from 'astro';

// Detail photos
import photoStokan from '../assets/images/stokan-beton.jpg';
import photoTiskan from '../assets/images/tiskan-beton.jpg';
import photoMetlicen from '../assets/images/metlicen-beton.jpg';
import photoBrusen from '../assets/images/brusen-beton.png';

// Sub-page gallery photos
import stokanTlak2 from '../assets/images/services/stokan-betonski-tlak-2.jpg';
import stokanTlaki from '../assets/images/services/stokan-betonski-tlaki.jpg';
import metlicenDvorisce from '../assets/images/services/metlicen-betonski-tlak-dvorisce.jpg';
import betonskaPotVrt from '../assets/images/services/betonski-tlak-pot-vrt.jpg';
import glajenViden from '../assets/images/services/masinsko-glajen-viden-betonski-tlak.jpg';
import glajenStroj from '../assets/images/services/masinsko-glajen-betonski-tlak.jpg';
import glajenTerasa from '../assets/images/services/masinsko-glajen-betonski-tlak-terasa.jpg';

export interface ProcessStep {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  title: string;
  /** short blurb for the overview card */
  summary: string;
  /** one-sentence intro on the sub-page hero */
  lead: string;
  /** full detail paragraphs on the sub-page */
  detail: string[];
  /** typical use cases, shown as a checklist on the sub-page */
  idealFor: string[];
  /** intro paragraph for the "Kam se vgrajuje" section */
  whereIntro: string;
  /** site preparation before the works — "Predpriprava" checklist */
  preparation: string[];
  /** installation steps — "Kako se vgrajuje" */
  process: ProcessStep[];
  /** approximate duration — short value (+ optional small note) for the aside, full text for the section */
  duration: { short: string; note?: string; text: string };
  /** indicative price — short value for the aside, full text for the section,
   *  min/max €/m² for structured data */
  price: { short: string; note?: string; text: string; min: number; max: number };
  /** meta description for the sub-page */
  metaDescription: string;
  /** service-specific questions, shown on the sub-page + FAQPage JSON-LD */
  faqs: Faq[];
  photo: ImageMetadata;
  /** image alt text */
  alt: string;
  /** additional photos shown in the sub-page gallery */
  photos: { src: ImageMetadata; alt: string }[];
  /** optional secondary CTA on the sub-page */
  cta?: { label: string; href: string };
  /** optional link to a related guide page */
  guide?: { label: string; href: string };
}

export const services: Service[] = [
  {
    id: 'stokan-beton',
    title: 'Štokan beton',
    summary:
      'Hrapava površina z odličnim oprijemom in naravnim videzom kamna. Najpogostejša izbira za terase, zunanja stopnišča in poti okoli hiše.',
    lead:
      'Betonski tlak z reliefno, naravno delujočo teksturo, ki ne drsi — niti v dežju niti pozimi.',
    detail: [
      'Štokanje je obdelava, pri kateri betonsko površino po brušenju z mehanskimi udarci obdelamo v hrapavo, reliefno teksturo. Rezultat spominja na naravni kamen in nudi odličen oprijem, zato je štokan beton najpogostejša izbira za terase, stopnišča, dvorišča in sprehajalne poti okoli hiše.',
      'Grobost površine prilagodimo vašim željam — od nežno hrapave do izrazito reliefne. Pred začetkom del si skupaj ogledamo primere in izberemo teksturo, ki se najbolje poda vašemu prostoru.',
      'Beton pripravimo z dodatki za odpornost proti zmrzali in soli, na koncu pa površino zaščitimo s premazom, ki prepreči vpijanje umazanije in olajša čiščenje. Tako vam terasa ali stopnišče brez posebnega vzdrževanja služi dolga leta.',
    ],
    idealFor: ['Terase', 'Zunanja stopnišča', 'Dvorišča', 'Poti okoli hiše', 'Pločniki'],
    whereIntro:
      'Štokan beton je namenjen predvsem zunanjim površinam, kjer je pomembno, da tla ne drsijo — tudi mokra ali zasnežena. Zaradi naravnega videza se lepo poda tako k sodobnim kot k tradicionalnim hišam.',
    preparation: [
      'Brezplačen ogled in izmera — skupaj določimo teksturo, višine in naklone za odvodnjavanje.',
      'Urejen izkop in utrjena tamponska podlaga iz gramoza — zemeljska dela uredite pred našim prihodom.',
      'Postavitev opažev in vgradnja armaturne mreže.',
      'Priprava robov, povezav na obstoječe površine ter postavitev kanalet in odtokov, če so potrebni.',
      'Zaščita površin s PVC folijo.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Vgradimo beton z dodatki proti zmrzali in soli, ga z letvo poravnamo v pravilne naklone in zagladimo.',
      },
      {
        title: 'Strjevanje',
        text: 'Beton negujemo in počakamo, da doseže primerno trdnost za obdelavo površine. Odvisno od temperature in letnega časa običajno traja od 2 do 5 dni.',
      },
      {
        title: 'Štokanje',
        text: 'Površino v več prehodih brusimo z diamantnimi orodji do želene gladkosti in vidnosti agregata. Nato jo strojno obdelamo v izbrano reliefno teksturo — od nežno hrapave do izrazito reliefne.',
      },
      {
        title: 'Zaščita',
        text: 'Zarežemo dilatacije, površino očistimo in nanesemo zaščitni premaz, ki prepreči vpijanje umazanije.',
      },
    ],
    duration: {
      short: '4–6 dni',
      note: '1–2 dni brušenja in štokanja',
      text: 'Pri klasični terasi velikosti 35–45 m² traja celoten postopek — od postavitve opažev do štokanja in zaščitnega premaza — približno 4 do 6 dni, odvisno od vremena in strjevanja betona. Površina je pohodna že po nekaj urah po zaključni obdelavi, pred večjimi obremenitvami pa počakamo na popolno strjevanje.',
    },
    price: {
      short: '130–180 €/m²',
      text: 'Okvirna cena štokanega betona se giblje med 130 in 180 €/m² z vključenimi materiali, odvisno od velikosti površine, zahtevnosti izvedbe in dostopnosti; izkop in tamponska podlaga nista vključena v ceno. Vsaka površina je drugačna — točno ceno pripravimo po brezplačnem ogledu, brez obveznosti.',
      min: 130,
      max: 180,
    },
    metaDescription:
      'Štokan beton — protidrsen betonski tlak z naravnim videzom kamna za terase, stopnišča in dvorišča. Cena od 130 €/m². Izvedba po vsej Sloveniji.',
    faqs: [
      {
        q: 'Koliko stane štokan beton na m²?',
        a: 'Okvirna cena štokanega betona je od 130 do 180 €/m² z vključenim betoniranjem, štokanjem, rezanjem dilatacij in zaščitnim premazom ter vsem materialom; izkop in tamponska podlaga nista vključena. Končna cena je odvisna od velikosti površine, zahtevnosti izvedbe (stopnišča, nakloni, detajli …) in dostopnosti (predvsem dovoz betona in drugih materialov) — točno ponudbo pripravimo po brezplačnem ogledu.',
      },
      {
        q: 'Ali štokan beton drsi, ko je moker ali zasnežen?',
        a: 'Ne — reliefna, hrapava tekstura nudi odličen oprijem tudi v dežju in pozimi. Prav zato je štokan beton najpogostejša izbira za zunanja stopnišča in terase.',
      },
      {
        q: 'Kakšna je razlika med štokanim in metličenim betonom?',
        a: 'Štokan beton ima izrazitejšo, reliefno teksturo z videzom naravnega kamna, metličen pa finejšo in enakomernejšo strukturo po ugodnejši ceni. Štokan izberete zaradi videza, metličenega pa, ko štejeta predvsem funkcionalnost in cena.',
      },
      {
        q: 'Ali lahko štokate obstoječo betonsko površino?',
        a: 'Da, če je obstoječa plošča dovolj debela in v dobrem stanju. Primernost preverimo na brezplačnem ogledu in predlagamo najboljšo rešitev.',
      },
      {
        q: 'Koliko časa traja izvedba štokanega betona?',
        a: 'Celotna izvedba običajne terase velikosti 35–45 m² traja približno 4 do 6 dni, od tega 1 do 2 dni brušenja in štokanja. Čas je odvisen od temperature in strjevanja betona; zaključek del še ne pomeni, da je površina pripravljena za polno obremenitev.',
      },
      {
        q: 'Kako vzdržujem štokan beton?',
        a: 'Zadostuje pometanje in občasno pranje z vodo. Za dolgotrajno zaščito priporočamo obnovo zaščitnega premaza na 2 do 4 leta.',
      },
    ],
    photo: photoStokan,
    alt: 'Vzorčna slika štokan betonski tlak',
    photos: [
      {
        src: stokanTlak2,
        alt: 'Štokan betonski tlak od blizu — hrapava tekstura z vidnim agregatom',
      },
      {
        src: stokanTlaki,
        alt: 'Štokan betonski tlak — detajl obdelane površine',
      },
    ],
  },
  {
    id: 'tiskan-beton',
    title: 'Tiskan beton',
    summary:
      'Videz kamna, opeke ali lesa — brez fug, plevela in visoke cene naravnih materialov. Priljubljena izbira za terase, dvorišča in dovoze.',
    lead:
      'Z vtiskovanjem vzorcev v svež beton dobite površino, ki je videti kot kamen ali les, a je trpežnejša in cenovno ugodnejša.',
    detail: [
      'Tiskan beton združuje trpežnost betona z videzom naravnih materialov. V svež beton vtisnemo matrico z vzorcem kamna, tlakovcev, opeke ali lesa in ga obarvamo z dodajanjem pigmenta v odtenku po vaši izbiri. Izvedba je hitrejša in cenovno konkurenčna polaganju drugih materialov, kot so tlakovci in zunanja keramika.',
      'Ker gre za enotno betonsko površino, med vtisnjenimi vzorci ne raste trava ali plevel. Tako odpade odstranjevanje plevela, ki ga pri klasičnih tlakovcih ponavljate vsako leto. Na voljo je bogata paleta vzorcev in barv; z veseljem vam pokažemo katalog in pomagamo izbrati kombinacijo, ki se poda k vaši hiši.',
      'Površino na koncu zaščitimo s premazom, ki poudari barvo in teksturo ter poveča odpornost proti vlagi, obrabi in sončnim žarkom.',
    ],
    idealFor: ['Terase', 'Dvorišča', 'Dovozne poti', 'Okolica bazena', 'Vrtne poti'],
    whereIntro:
      'Tiskan beton je najpogostejša izbira tam, kjer želite videz kamna, opeke ali lesa brez fug in plevela — na terasah, dvoriščih in dovozih. Enotna betonska površina se odlično obnese tudi ob bazenih in na vrtnih poteh.',
    preparation: [
      'Brezplačen ogled in izmera — skupaj izberemo vzorec in barvo iz kataloga.',
      'Urejen izkop in utrjena tamponska podlaga iz gramoza — zemeljska dela uredite pred našim prihodom.',
      'Postavitev opažev in vgradnja armaturne mreže.',
      'Ureditev naklonov za odvodnjavanje in priprava robov.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Vgradimo beton z dodatki proti zmrzali in soli, ga z letvo poravnamo v pravilne naklone in zagladimo.',
      },
      {
        title: 'Barvanje',
        text: 'V svežo površino vtremo barvni utrjevalec v izbranem odtenku, ki beton hkrati obarva in dodatno utrdi.',
      },
      {
        title: 'Tiskanje',
        text: 'Z matricami v svež beton vtisnemo izbran vzorec kamna, tlakovcev, opeke ali lesa.',
      },
      {
        title: 'Zaščita',
        text: 'Po strditvi površino z visokotlačnim čistilcem operemo, zarežemo dilatacije in nanesemo zaščitni premaz, ki poudari barvo in poveča obstojnost.',
      },
    ],
    duration: {
      short: '3–5 dni',
      text: 'Betoniranje, barvanje in tiskanje opravimo v enem dnevu, pranje in zaščitni premaz pa sledita po nekajdnevnem strjevanju. Pri terasi ali dvorišču velikosti 35–45 m² celoten postopek traja približno 3 do 5 dni.',
    },
    price: {
      short: '110–160 €/m²',
      text: 'Okvirna cena tiskanega betona se giblje med 110 in 160 €/m² — v ceni so že zajeti vzorec, barva in zaščitni premaz, ne pa tudi izkop in tamponska podlaga. Končna cena je odvisna od velikosti površine, debeline tlaka, zahtevnosti izvedbe in dostopnosti; točno ponudbo pripravimo po brezplačnem ogledu.',
      min: 110,
      max: 160,
    },
    metaDescription:
      'Tiskan beton — enotna betonska površina z videzom kamna, opeke ali lesa za terase, dvorišča in dovoze. Cena 110–160 €/m², vzorec in barva vključena.',
    faqs: [
      {
        q: 'Koliko stane tiskan beton na m²?',
        a: 'Okvirna cena tiskanega betona je 110–160 €/m² z vključenimi vzorcem, barvo in zaščitnim premazom. Izkop in tamponska podlaga nista vključena. Cena je odvisna od velikosti površine, debeline tlaka, zahtevnosti izvedbe in dostopnosti; točno ponudbo pripravimo po brezplačnem ogledu, brez obveznosti.',
      },
      {
        q: 'Tiskan beton ali tlakovci — kaj se bolj splača?',
        a: 'Izvedba tiskanega betona je praviloma hitrejša in cenovno konkurenčna polaganju tlakovcev, ker nosilno ploščo in dekorativno površino izdelamo v enem koraku, brez robnikov in fug med posameznimi elementi. Ker je betonska površina enotna, med vtisnjenimi vzorci ne raste plevel, kar pri tlakovcih pomeni vsakoletno vzdrževanje. Ustrezno dimenzionirana armiranobetonska plošča na pravilno pripravljeni podlagi prenese večje obremenitve in zmanjša tveganje za lokalno posedanje, ki se lahko pojavi pri klasično tlakovanih dovozih.',
      },
      {
        q: 'Ali tiskan beton prenese zmrzal in soljenje?',
        a: 'Da — beton pripravimo z dodatki za odpornost proti zmrzali, zaščitni premaz pa dodatno prepreči vpijanje vlage in soli. Tiskan beton je zato primeren tudi za dovoze, ki jih pozimi vzdržujete.',
      },
      {
        q: 'Katere vzorce in barve lahko izberem?',
        a: 'Izbirate med vzorci kamna, tlakovcev, opeke in lesa v širokem naboru barvnih odtenkov. Katalog vzorcev si ogledamo skupaj na brezplačnem ogledu in izberemo kombinacijo, ki se poda vaši hiši.',
      },
      {
        q: 'Koliko časa traja izvedba tiskanega betona?',
        a: 'Pri terasi ali dvorišču velikosti 35–45 m² izvedba običajno traja 3 do 5 dni. Betoniranje, barvanje in tiskanje opravimo v enem dnevu, pranje in zaščitni premaz pa sledita po nekajdnevnem strjevanju. Rok uporabe določimo glede na beton, vreme in izbrano zaščito.',
      },
      {
        q: 'Ali barva tiskanega betona sčasoma zbledi?',
        a: 'Barvni utrjevalec obarva beton v globino, zaščitni premaz pa ga varuje pred UV-žarki in obrabo. Za trajno svežino barve priporočamo obnovo premaza vsakih 3 do 5 let.',
      },
    ],
    photo: photoTiskan,
    alt: 'Vzorčna slika tiskan beton',
    photos: [],
    cta: {
      label: 'Katalog vzorcev in barv',
      href: 'https://www.calameo.com/books/005075689eff9f844f976',
    },
    guide: {
      label: 'Tiskan beton ali tlakovci — kaj izbrati?',
      href: '/iz-terena/tiskan-beton-ali-tlakovci',
    },
  },
  {
    id: 'metlicen-beton',
    title: 'Metličen beton',
    summary:
      'Preprosta, zanesljiva in cenovno ugodna obdelava za dovoze in dvorišča. Fina hrapava struktura poskrbi, da površina ne drsi.',
    lead:
      'Klasika med zunanjimi betonskimi tlaki — enakomerna, rahlo hrapava površina, ki varno služi v vseh vremenskih razmerah.',
    detail: [
      'Pri metličenju svežo betonsko površino povlečemo z metlico in tako ustvarimo fino, enakomerno hrapavo strukturo. Gre za eno najbolj preverjenih obdelav zunanjih površin — predvsem tam, kjer je pomembno, da tla ne drsijo: na dovozih, dvoriščih, pločnikih in stopnicah.',
      'Smer in izrazitost teksture prilagodimo površini in vašim željam. Beton pripravimo z dodatki, ki izboljšajo odpornost proti zmrzali, soli in obrabi, zato je metličen tlak odlična izbira tudi za površine, ki jih pozimi solite.',
    ],
    idealFor: ['Dovozne poti', 'Dvorišča', 'Pločniki', 'Stopnice', 'Okolica garaže'],
    whereIntro:
      'Metličen beton je prva izbira za povozne in pohodne površine, kjer štejeta varnost in cena — dovoze, dvorišča, pločnike in stopnice. Odlično prenaša tudi zimsko soljenje, zato je primeren za površine, ki jih redno vzdržujete pozimi.',
    preparation: [
      'Brezplačen ogled in izmera — skupaj določimo višine, naklone in smer teksture.',
      'Urejen izkop in utrjena tamponska podlaga iz gramoza — zemeljska dela uredite pred našim prihodom.',
      'Postavitev opažev in vgradnja armaturne mreže.',
      'Ureditev naklonov za odvodnjavanje in priprava robov.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Vgradimo beton z dodatki proti zmrzali in soli, ga z letvo poravnamo v pravilne naklone in zagladimo.',
      },
      {
        title: 'Glajenje',
        text: 'Površino ročno ali strojno zagladimo, da dobimo enakomerno in kompaktno podlago za metličenje.',
      },
      {
        title: 'Metličenje',
        text: 'Svežo površino povlečemo z metlico in ustvarimo fino, enakomerno protidrsno teksturo.',
      },
      {
        title: 'Nega in zaščita',
        text: 'Beton negujemo, zarežemo dilatacije in površino po želji zaščitimo s premazom.',
      },
    ],
    duration: {
      short: '2–4 dni',
      text: 'Metličenje se izvede takoj po betoniranju, zato je postopek med hitrejšimi — pri dovozu ali dvorišču običajne velikosti traja od postavitve opažev do zaključka približno 2 do 4 dni. Površina je pohodna po enem dnevu, povozna pa po popolnem strjevanju betona.',
    },
    price: {
      short: '100–150 €/m²',
      text: 'Metličen beton je cenovno najugodnejša obdelava — okvirno med 100 in 150 €/m², odvisno od velikosti površine, debeline tlaka, zahtevnosti izvedbe in dostopnosti; izkop in tamponska podlaga nista vključena. Točno ceno pripravimo po brezplačnem ogledu, brez obveznosti.',
      min: 100,
      max: 150,
    },
    metaDescription:
      'Metličen beton — protidrsen in cenovno ugoden betonski tlak za dovoze, dvorišča in pločnike. Cena od 100 €/m². Odporen proti zmrzali in soli.',
    faqs: [
      {
        q: 'Koliko stane metličen beton na m²?',
        a: 'Metličen beton je cenovno najugodnejša obdelava — okvirno med 100 in 150 €/m², odvisno od velikosti površine, debeline tlaka, zahtevnosti izvedbe in dostopnosti; izkop in tamponska podlaga nista vključena. Točno ceno pripravimo po brezplačnem ogledu, brez obveznosti.',
      },
      {
        q: 'Ali je metličen beton primeren za dovoz?',
        a: 'Da, metličen beton je prva izbira za dovoze in povozne površine — protidrsna tekstura in dodatki proti zmrzali ter soli zagotavljajo varno in trpežno površino skozi vse leto.',
      },
      {
        q: 'Koliko časa traja izvedba metličenega betona?',
        a: 'Od postavitve opažev do zaključka običajno potrebujemo 2 do 4 dni. Metličenje izvedemo isti dan kot betoniranje. Pred vožnjo in večjimi obremenitvami mora beton doseči ustrezno trdnost.',
      },
      {
        q: 'Kdaj je površina pohodna in kdaj povozna?',
        a: 'Površina je običajno pohodna približno en dan po betoniranju. Vožnjo z osebnimi vozili dovolimo šele, ko beton doseže ustrezno trdnost; termin potrdimo glede na debelino plošče, temperaturo in pogoje strjevanja. Projektno trdnost praviloma ocenjujemo pri starosti 28 dni.',
      },
      {
        q: 'Ali metličen beton prenese zimsko soljenje?',
        a: 'Da — beton pripravimo z dodatki, ki izboljšajo odpornost proti zmrzali in soli, zato je metličen tlak odlična izbira za površine, ki jih pozimi redno solite.',
      },
    ],
    photo: photoMetlicen,
    alt: 'Vzorčna slika metličen beton',
    photos: [
      {
        src: metlicenDvorisce,
        alt: 'Metličen betonski tlak na dvorišču pred garažo',
      },
      {
        src: betonskaPotVrt,
        alt: 'Sveže betonirana pot ob hiši',
      },
    ],
  },
  {
    id: 'brusen-beton',
    title: 'Brušen beton',
    summary:
      'Gladka, sodobna površina z vidnim agregatom, ki jo je enostavno čistiti. Odlična izbira za terase, garaže in notranje prostore.',
    lead:
      'Minimalističen videz in izjemna trpežnost — brušen beton se enako dobro obnese na terasi kot v dnevni sobi.',
    detail: [
      'Brušen beton nastane z brušenjem strjene površine z diamantnimi orodji, ki razkrijejo naravno strukturo agregata v betonu. Rezultat je gladka, enakomerna površina s sodobnim, minimalističnim videzom.',
      'Zaradi enostavnega čiščenja in trpežnosti je odlična izbira za terase, hodnike in garaže, vse pogosteje pa tudi za notranje bivalne in manjše poslovne prostore, kjer nadomesti klasične tlake.',
      'Gladke površine izdelujemo tudi s strojnim glajenjem svežega betona — hitrejšim postopkom, s katerim dosežemo kompaktno in enakomerno gladko površino, primerno za garaže, kleti in terase.',
      'Površino impregniramo s premazi, ki zmanjšajo vpijanje tekočin, preprečijo prašenje in olajšajo vsakodnevno čiščenje.',
    ],
    idealFor: ['Terase', 'Garaže', 'Hodniki', 'Bivalni prostori', 'Manjši poslovni prostori'],
    whereIntro:
      'Brušen beton se enako dobro obnese zunaj in znotraj — na pokritih terasah, v garažah in hodnikih, vse pogosteje pa tudi v bivalnih in manjših poslovnih prostorih, kjer nadomesti klasične tlake. Brusimo lahko novo ali obstoječo betonsko ploščo.',
    preparation: [
      'Brezplačen ogled — pri obstoječi plošči preverimo njeno stanje in primernost za brušenje.',
      'Pri novi površini: opaži in armaturna mreža na predhodno urejeni tamponski podlagi — zemeljska dela uredite pred našim prihodom.',
      'Skupaj določimo stopnjo brušenja: koliko bo viden agregat (kamenčki v betonu) in kako gladka bo površina — od rahlo hrapave do polirane. Oboje vpliva tudi na končno ceno.',
      'Zaščita okolice pred prahom med brušenjem.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Pri novi površini vgradimo beton in ga strojno zagladimo; obstoječo ploščo najprej pripravimo in po potrebi saniramo.',
      },
      {
        title: 'Strjevanje',
        text: 'Beton mora pred brušenjem doseči zadostno trdnost — odvisno od temperature in letnega časa običajno od 2 do 5 dni.',
      },
      {
        title: 'Brušenje',
        text: 'Površino v več prehodih brusimo z diamantnimi orodji do želene vidnosti agregata. Nato jo z dodatnimi prehodi in menjavo diamantnih orodij zbrusimo do želene gladkosti.',
      },
      {
        title: 'Impregnacija',
        text: 'Površino impregniramo s premazi, ki preprečijo prašenje, zmanjšajo vpijanje tekočin in olajšajo čiščenje.',
      },
    ],
    duration: {
      short: '4–6 dni',
      note: '1–2 dni brušenja',
      text: 'Pri novi plošči celotna izvedba običajno traja približno 4 do 6 dni, odvisno od velikosti površine, temperature in strjevanja betona. Samo brušenje običajne površine traja približno 1 do 2 dni, nato sledi impregnacija. Primernost plošče za obdelavo preverimo pred začetkom; rok uporabe je odvisen tudi od izbrane zaščite.',
    },
    price: {
      short: '140–190 €/m²',
      note: 'nov tlak; obdelava obstoječega 45–85 €/m²',
      text: 'Okvirna cena brušenega betona je 140–190 €/m² za novo vgrajen betonski tlak in 45–85 €/m² za obdelavo obstoječega tlaka. Cena je odvisna od stanja plošče, želene stopnje obdelave, debeline in velikosti površine. Strojno glajen beton je cenovno ugodnejša različica gladke površine — točno ponudbo pripravimo po brezplačnem ogledu.',
      min: 45,
      max: 190,
    },
    metaDescription:
      'Brušen beton — gladka in trpežna površina z vidnim agregatom za terase, garaže in notranje prostore. Nov tlak od 140 €/m², brušenje obstoječega od 45 €/m².',
    faqs: [
      {
        q: 'Koliko stane brušen beton na m²?',
        a: 'Okvirna cena je 140–190 €/m² za nov brušen betonski tlak in 45–85 €/m² za obdelavo obstoječe plošče. Odvisna je od stanja plošče, debeline, velikosti in želene stopnje obdelave. Izkop in priprava podlage nista vključena. Cenovno ugodnejša alternativa je strojno glajen beton za okvirno 90–140 €/m²; točno ponudbo pripravimo po brezplačnem ogledu.',
      },
      {
        q: 'Koliko časa traja izvedba brušenega betona?',
        a: 'Nova betonska površina običajno zahteva približno 4 do 6 dni, odvisno od vremena in strjevanja. Samo brušenje običajne površine traja približno 1 do 2 dni, nato sledi impregnacija. Pri obstoječi plošči rok določimo po pregledu njenega stanja in dogovoru o stopnji obdelave.',
      },
      {
        q: 'Ali lahko brusite obstoječo betonsko ploščo?',
        a: 'Da — brusimo novo ali obstoječo ploščo, če je ta v dovolj dobrem stanju. Stanje in primernost preverimo na brezplačnem ogledu.',
      },
      {
        q: 'Ali je brušen beton primeren za bivalne prostore?',
        a: 'Da, brušen beton vse pogosteje nadomešča klasične tlake v dnevnih prostorih, hodnikih in manjših poslovnih prostorih. Površina je trpežna, enostavna za čiščenje in ima sodoben, minimalističen videz.',
      },
      {
        q: 'Kakšna je razlika med brušenim in strojno glajenim betonom?',
        a: 'Brušen beton nastane z brušenjem strjene plošče z diamantnimi orodji, ki razkrijejo agregat; strojno glajen beton pa zgladimo že svežega, brez vidnega agregata. Glajenje je hitrejše in cenejše ter da „industrijski“ videz, brušenje pa z izpostavljenim agregatom da bolj izrazit, plemenit videz.',
      },
      {
        q: 'Ali izravnavate oziroma nivelirate obstoječe plošče?',
        a: 'Da. Z niveliranjem in rezkanjem lahko odpravimo lokalne grbine ter prilagodimo višine ali naklone, kadar stanje plošče to dopušča. Na brezplačnem ogledu preverimo debelino, stanje in položaj armature ter določimo varen obseg odstranjevanja. Rezkanje praviloma pusti hrapavo podlago za nadaljnjo obdelavo.',
      },
    ],
    photo: photoBrusen,
    alt: 'Vzorčna slika brušenega betona z vidnim agregatom',
    photos: [
      {
        src: glajenTerasa,
        alt: 'Mašinsko glajen betonski tlak na pokriti terasi',
      },
      {
        src: glajenViden,
        alt: 'Mašinsko glajen betonski tlak v garaži',
      },
      {
        src: glajenStroj,
        alt: 'Strojno glajenje betonskega tlaka',
      },
    ],
  },
];

export const customServiceFaqs: Faq[] = [
  {
    q: 'Koliko stane strojno glajen beton in koliko časa traja izvedba?',
    a: 'Okvirna cena je 90–140 €/m², izvedba pa običajno traja 2–4 dni. Cena je odvisna od velikosti površine, debeline tlaka, zahtevnosti in dostopnosti. Izkop in priprava podlage nista vključena. Glajenje izvedemo isti dan kot betoniranje, polna obremenitev pa je mogoča šele po ustreznem strjevanju.',
  },
  {
    q: 'Ali lahko z rezkanjem popravite višino ali naklon obstoječe plošče?',
    a: 'Da, kadar debelina in stanje plošče ter položaj armature dopuščajo varen poseg. Rezkanje odstrani odvečen beton in praviloma pusti hrapavo podlago za nadaljnjo obdelavo. Manjši posegi običajno trajajo 1–3 dni; obseg, ceno in rok določimo po brezplačnem ogledu. Hidroizolacija in zaključne obloge niso samodejno vključene.',
  },
  {
    q: 'Ali izdelujete letne kuhinje in betonske vrtne garniture po meri?',
    a: 'Da, izdelujemo letne kuhinje, mize, klopi, pulte, korita in druge betonske elemente po meri. Dimenzije, zaključni videz, kombinacije materialov ter dobavo in montažo uskladimo glede na prostor. Ceno in rok določimo po brezplačnem ogledu; vgradno opremo ter električne in vodovodne priključke posebej opredelimo v ponudbi.',
  },
  {
    q: 'Katere betonske športne objekte gradite?',
    a: 'Izdelujemo betonske skateparke, pumptrack poligone ter poligone in zanke za vožnjo s skiroji. Izvedbo prilagodimo lokaciji, uporabnikom in projektni dokumentaciji. Ceno, rok in obseg del določimo za vsak projekt; projektiranje, dovoljenja in zemeljska dela niso samodejno vključeni.',
  },
];

export const faqs: Faq[] = [
  {
    q: 'Koliko stane betonsko dvorišče ali terasa?',
    a: 'Okvirne cene novih tlakov so: metličen beton 100–150 €/m², štokan 130–180 €/m², tiskan 110–160 €/m² in brušen 140–190 €/m². Brušenje obstoječe plošče stane okvirno 45–85 €/m². Strojno glajen beton, namenjen predvsem notranjim prostorom, stane 90–140 €/m². Cena je odvisna od velikosti, debeline tlaka, zahtevnosti in dostopnosti. Izkop in tamponska podlaga nista vključena; točno ponudbo pripravimo po brezplačnem ogledu.',
  },
  {
    q: 'Koliko časa traja izvedba betonskega projekta?',
    a: 'Pri običajni površini izvedba metličenega in strojno glajenega betona traja približno 2–4 dni, tiskanega 3–5 dni, štokanega in novega brušenega tlaka pa 4–6 dni. Samo brušenje obstoječe plošče običajno traja 1–2 dni, nato sledi impregnacija. Roki so odvisni od obsega, vremena in strjevanja. Zaključek del ni enak dovoljenju za polno obremenitev; termin uporabe določimo za vsak projekt.',
  },
  {
    q: 'Ali izvajate tudi izkop in pripravo terena?',
    a: 'Ne — izkop, odvoz zemlje in utrjena podlaga iz gramoza (t. i. tamponska podlaga) niso del naše storitve. Začnemo, ko je teren pripravljen: postavimo robove (opaže), položimo železno mrežo in betoniramo. Če izkopa še nimate urejenega, vas z veseljem povežemo s preverjenim podizvajalcem.',
  },
  {
    q: 'Ali nudite garancijo?',
    a: 'Da, zagotavljamo garancijo na uporabljene materiale in izvedena dela. Pogoji so odvisni od vrste projekta in bodo opredeljeni v vaši ponudbi.',
  },
  {
    q: 'Ali sprejemate tudi manjše projekte?',
    a: 'Seveda! Z veseljem sprejmemo tudi manjše projekte. Vsakemu naročilu posvetimo enako mero natančnosti in pozornosti.',
  },
  {
    q: 'Kako vzdrževati zunanje betonske tlake?',
    a: 'Površino redno pometajte in perite z vodo oziroma nevtralnim čistilom, brez agresivnih kemikalij. Za štokan beton priporočamo obnovo zaščitnega premaza na 2–4 leta, za tiskan beton pa običajno na 3–5 let. Dejanski interval je odvisen od premaza, izpostavljenosti in obrabe; za druge obdelave upoštevajte navodila izbrane zaščite.',
  },
  {
    q: 'Ali na betonski površini ob razlitju olja ostane madež?',
    a: 'Če je premaz pravilno nanesen, le-ta učinkovito ščiti površino pred madeži olja. Kljub temu priporočamo, da olje čim prej očistite z mešanico mila in vode, da preprečite morebitne trajne sledi.',
  },
  {
    q: 'Kakšen je strošek izbire betona v primerjavi z drugimi materiali?',
    a: 'Beton je lahko cenovno konkurenčna alternativa kamnu, tlakovcem, keramiki ali lesu, ni pa vedno najcenejši. Primerjati je treba celotno izvedbo z enakim obsegom priprave podlage, debelino in zaključnimi deli. Pri tiskanem betonu za 110–160 €/m² so vzorec, barva in zaščitni premaz vključeni, izkop in tamponska podlaga pa ne.',
  },
  {
    q: 'Kakšne so prednosti tiskanega betona v primerjavi s klasičnimi tlakovci?',
    a: 'Nosilno ploščo in dekorativno površino izdelamo v enem koraku, zato je izvedba praviloma hitrejša in cenovno konkurenčna tlakovcem. Med vtisnjenimi vzorci ni fug, v katerih bi rasel plevel. Ustrezno dimenzionirana armiranobetonska plošča na pravilno pripravljeni podlagi zmanjša tveganje lokalnega posedanja. Končna primerjava stroškov je odvisna od materialov in obsega del.',
  },
  ...customServiceFaqs,
];
