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
  /** approximate duration — short value for the aside, full text for the section */
  duration: { short: string; text: string };
  /** indicative price — short value for the aside, full text for the section,
   *  min/max €/m² for structured data */
  price: { short: string; text: string; min: number; max: number };
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
      'Štokanje je obdelava, pri kateri betonsko površino z mehanskimi udarci obdelamo v hrapavo, reliefno teksturo. Rezultat spominja na naravni kamen in nudi odličen oprijem, zato je štokan beton najpogostejša izbira za terase, stopnišča, dvorišča in sprehajalne poti okoli hiše.',
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
      'Priprava robov, priključkov na obstoječe površine in razporeditev dilatacij.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Vgradimo beton z dodatki proti zmrzali in soli, ga poravnamo v pravilne naklone in zagladimo.',
      },
      {
        title: 'Strjevanje',
        text: 'Beton negujemo in počakamo, da doseže primerno trdnost za obdelavo površine.',
      },
      {
        title: 'Štokanje',
        text: 'Površino strojno obdelamo v izbrano reliefno teksturo — od nežno hrapave do izrazito reliefne.',
      },
      {
        title: 'Zaščita',
        text: 'Zarežemo dilatacije, površino očistimo in nanesemo zaščitni premaz, ki prepreči vpijanje umazanije.',
      },
    ],
    duration: {
      short: '3–5 dni',
      text: 'Pri klasični terasi velikosti 35–45 m² traja celoten postopek — od postavitve opažev do štokanja in zaščitnega premaza — približno 3 do 5 dni. Površina je pohodna že po nekaj urah po zaključni obdelavi, pred večjimi obremenitvami pa počakamo na popolno strjevanje.',
    },
    price: {
      short: 'od 50 €/m²',
      text: 'Okvirna cena štokanega betona se giblje med 50 in 80 €/m², odvisno od velikosti površine, zahtevnosti izvedbe in dostopnosti; izkop in tamponska podlaga nista vključena v ceno. Vsaka površina je drugačna — točno ceno pripravimo po brezplačnem ogledu, brez obveznosti.',
      min: 50,
      max: 80,
    },
    metaDescription:
      'Štokan beton — protidrsen betonski tlak z naravnim videzom kamna za terase, stopnišča in dvorišča. Cena od 50 €/m². Izvedba po vsej Sloveniji.',
    faqs: [
      {
        q: 'Koliko stane štokan beton na m²?',
        a: 'Okvirna cena štokanega betona je od 50 do 80 €/m² z vključenim betoniranjem, štokanjem in zaščitnim premazom; izkop in tamponska podlaga nista vključena. Končna cena je odvisna od velikosti površine in dostopnosti — točno ponudbo pripravimo po brezplačnem ogledu.',
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
        q: 'Kako vzdržujem štokan beton?',
        a: 'Zadostuje pometanje in občasno pranje z vodo. Za dolgotrajno zaščito priporočamo obnovo zaščitnega premaza vsakih 3 do 5 let.',
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
      'Tiskan beton združuje trpežnost betona z videzom naravnih materialov. V svež beton vtisnemo matrico z vzorcem kamna, tlakovcev, opeke ali lesa in površino obarvamo po vaši izbiri. Izvedba je hitrejša in cenovno ugodnejša kot polaganje izvornih materialov.',
      'Ker je površina brezšivna, med »tlakovci« ne raste trava ali plevel — opravilo, ki ga pri klasičnih tlakovcih ponavljate vsako leto. Na voljo je bogata paleta vzorcev in barv; z veseljem vam pokažemo katalog in pomagamo izbrati kombinacijo, ki se poda k vaši hiši.',
      'Površino na koncu zaščitimo s premazom, ki poudari barvo in teksturo ter poveča odpornost proti vlagi, obrabi in sončnim žarkom.',
    ],
    idealFor: ['Terase', 'Dvorišča', 'Dovozne poti', 'Okolica bazena', 'Vrtne poti'],
    whereIntro:
      'Tiskan beton je najpogostejša izbira tam, kjer želite videz kamna, opeke ali lesa brez fug in plevela — na terasah, dvoriščih in dovozih. Brezšivna površina se odlično obnese tudi ob bazenih in na vrtnih poteh.',
    preparation: [
      'Brezplačen ogled in izmera — skupaj izberemo vzorec in barvo iz kataloga.',
      'Urejen izkop in utrjena tamponska podlaga iz gramoza — zemeljska dela uredite pred našim prihodom.',
      'Postavitev opažev in vgradnja armaturne mreže.',
      'Ureditev naklonov za odvodnjavanje in priprava robov.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Vgradimo beton z dodatki proti zmrzali, ga poravnamo v pravilne naklone in zagladimo.',
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
        text: 'Po strditvi površino operemo, zarežemo dilatacije in nanesemo zaščitni premaz, ki poudari barvo in poveča obstojnost.',
      },
    ],
    duration: {
      short: '3–5 dni',
      text: 'Betoniranje, barvanje in tiskanje opravimo v enem dnevu, pranje in zaščitni premaz pa sledita po nekajdnevnem strjevanju. Pri terasi ali dvorišču velikosti 35–45 m² celoten postopek traja približno 3 do 5 dni.',
    },
    price: {
      short: 'od 55 €/m²',
      text: 'Okvirna cena tiskanega betona se giblje med 55 in 90 €/m² — v ceni so že zajeti vzorec, barva in zaščitni premaz, ne pa tudi izkop in tamponska podlaga. Končna cena je odvisna od velikosti površine, zahtevnosti izvedbe in dostopnosti; točno ponudbo pripravimo po brezplačnem ogledu.',
      min: 55,
      max: 90,
    },
    metaDescription:
      'Tiskan beton — brezšivna površina z videzom kamna, opeke ali lesa za terase, dvorišča in dovoze. Cena od 55 €/m², vzorec in barva vključena.',
    faqs: [
      {
        q: 'Koliko stane tiskan beton na m²?',
        a: 'Okvirna cena tiskanega betona je od 55 do 90 €/m² — v ceni so že zajeti vzorec, barva in zaščitni premaz. Točno ponudbo pripravimo po brezplačnem ogledu, brez obveznosti.',
      },
      {
        q: 'Tiskan beton ali tlakovci — kaj se bolj splača?',
        a: 'Tiskan beton je praviloma hitrejši in cenejši, ker nosilno ploščo in dekorativno površino izdelamo v enem koraku, brez robnikov in fug. Ker je površina brezšivna, med njo ne raste plevel, kar pri tlakovcih pomeni vsakoletno vzdrževanje.',
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
      href: '/tiskan-beton-ali-tlakovci',
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
        text: 'Vgradimo beton z dodatki proti zmrzali in soli ter ga poravnamo v pravilne naklone.',
      },
      {
        title: 'Glajenje',
        text: 'Površino zagladimo, da dobimo enakomerno in kompaktno podlago za metličenje.',
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
      short: 'od 40 €/m²',
      text: 'Metličen beton je cenovno najugodnejša obdelava — okvirno med 40 in 60 €/m², odvisno od velikosti površine, zahtevnosti izvedbe in dostopnosti; izkop in tamponska podlaga nista vključena. Točno ceno pripravimo po brezplačnem ogledu, brez obveznosti.',
      min: 40,
      max: 60,
    },
    metaDescription:
      'Metličen beton — protidrsen in cenovno ugoden betonski tlak za dovoze, dvorišča in pločnike. Cena od 40 €/m². Odporen proti zmrzali in soli.',
    faqs: [
      {
        q: 'Koliko stane metličen beton na m²?',
        a: 'Metličen beton je cenovno najugodnejša obdelava — okvirno od 40 do 60 €/m², odvisno od velikosti površine, zahtevnosti izvedbe in dostopnosti; izkop in tamponska podlaga nista vključena. Točno ceno pripravimo po brezplačnem ogledu, brez obveznosti.',
      },
      {
        q: 'Ali je metličen beton primeren za dovoz?',
        a: 'Da, metličen beton je prva izbira za dovoze in povozne površine — protidrsna tekstura in dodatki proti zmrzali ter soli zagotavljajo varno in trpežno površino skozi vse leto.',
      },
      {
        q: 'Kdaj je površina pohodna in kdaj povozna?',
        a: 'Površina je pohodna približno en dan po betoniranju, za osebna vozila pa je primerna po približno enem tednu. Polno trdnost beton doseže po 28 dneh.',
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
      'Brušen beton se enako dobro obnese zunaj in znotraj — na terasah, v garažah in hodnikih, vse pogosteje pa tudi v bivalnih in manjših poslovnih prostorih, kjer nadomesti klasične tlake. Brusimo lahko novo ali obstoječo betonsko ploščo.',
    preparation: [
      'Brezplačen ogled — pri obstoječi plošči preverimo njeno stanje in primernost za brušenje.',
      'Pri novi površini: opaži in armaturna mreža na predhodno urejeni tamponski podlagi — zemeljska dela uredite pred našim prihodom.',
      'Skupaj določimo stopnjo brušenja — od fino glajene površine do izrazito vidnega agregata.',
      'Zaščita okolice pred prahom in vodo med brušenjem.',
    ],
    process: [
      {
        title: 'Betoniranje',
        text: 'Pri novi površini vgradimo beton in ga strojno zagladimo; obstoječo ploščo najprej pripravimo in po potrebi saniramo.',
      },
      {
        title: 'Strjevanje',
        text: 'Beton mora pred brušenjem doseči zadostno trdnost — običajno približno teden dni.',
      },
      {
        title: 'Brušenje',
        text: 'Površino v več prehodih brusimo z diamantnimi orodji do želene gladkosti in vidnosti agregata.',
      },
      {
        title: 'Impregnacija',
        text: 'Površino impregniramo s premazi, ki preprečijo prašenje, zmanjšajo vpijanje tekočin in olajšajo čiščenje.',
      },
    ],
    duration: {
      short: '2–3 dni brušenja',
      text: 'Samo brušenje in impregnacija pri običajni površini trajata približno 2 do 3 dni. Pri novi plošči prištejte še betoniranje in približno teden dni strjevanja, preden lahko začnemo z brušenjem.',
    },
    price: {
      short: 'od 60 €/m²',
      text: 'Okvirna cena brušenega betona se giblje med 60 in 100 €/m², odvisno od stanja plošče, želene stopnje obdelave in velikosti površine. Strojno glajen beton je cenovno ugodnejša različica gladke površine — točno ponudbo pripravimo po brezplačnem ogledu.',
      min: 60,
      max: 100,
    },
    metaDescription:
      'Brušen beton — gladka in trpežna površina z vidnim agregatom za terase, garaže in notranje prostore. Cena od 60 €/m². Sodoben videz, enostavno vzdrževanje.',
    faqs: [
      {
        q: 'Koliko stane brušen beton na m²?',
        a: 'Okvirna cena brušenega betona je od 60 do 100 €/m², odvisno od stanja plošče, želene stopnje obdelave in velikosti površine. Strojno glajen beton je cenovno ugodnejša različica gladke površine — točno ponudbo pripravimo po brezplačnem ogledu.',
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
        a: 'Brušen beton nastane z brušenjem strjene plošče z diamantnimi orodji, ki razkrijejo agregat; strojno glajen beton pa zgladimo že svežega, brez vidnega agregata. Glajenje je hitrejše in cenejše, brušenje pa da bolj izrazit, plemenit videz.',
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

export const faqs: Faq[] = [
  {
    q: 'Koliko časa traja izvedba betonskega projekta?',
    a: 'Čas izvedbe je odvisen od velikosti in kompleksnosti projekta. Pri klasični stanovanjski terasi (velikosti 35 - 45 m²) celoten postopek, od postavitve opažev do končne obdelave in utrjevanja, traja približno od 3 do 5 dni. Površina je pohodna že po nekaj urah, vendar je pred večjimi obremenitvami potrebno počakati na popolno strjevanje.',
  },
  {
    q: 'Ali izvajate tudi izkop in pripravo terena?',
    a: 'Ne — zemeljska dela (izkop, odvoz materiala, nasutje in utrjevanje tamponske podlage) niso del naše storitve. Dela prevzamemo od postavitve opažev in armature naprej. Če izkopa še nimate urejenega, vas z veseljem povežemo s preverjenim podizvajalcem.',
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
    a: 'Za lep videz površine zadostuje redno pometanje in pranje ter občasno čiščenje z nevtralnim čistilom. Izogibamo se uporabi agresivnih kemikalij, saj lahko le-te poškodujejo betonsko površino. Za dolgotrajno obstojnost in ohranitev zaščitnih lastnosti je priporočljivo vsakih 3 do 5 let nanesti nov sloj zaščitnega premaza.',
  },
  {
    q: 'Ali na betonski površini ob razlitju olja ostane madež?',
    a: 'Če je premaz pravilno nanesen, le-ta učinkovito ščiti površino pred madeži olja. Kljub temu priporočamo, da olje čim prej očistite z mešanico mila in vode, da preprečite morebitne trajne sledi.',
  },
  {
    q: 'Kakšen je strošek izbire betona v primerjavi z drugimi materiali?',
    a: 'Različne vrste obdelave betona pogosto predstavljajo cenovno ugodnejšo alternativo naravnemu kamnu, tlakovcem ali lesu, pri čemer omogočajo primerljiv estetski učinek. Strošek izvedbe je odvisen od zahtevnosti projekta, velikosti površine ter izbranega načina obdelave.',
  },
  {
    q: 'Kakšne so prednosti tiskanega betona v primerjavi s klasičnimi tlakovci?',
    a: 'Tiskan beton omogoča sočasno izdelavo nosilne plošče in dekorativne površine, kar prihrani čas in občutno zniža stroške izdelave. V ceno so že vključeni vsi vzorci, barve in oblike. Za razliko od klasičnih tlakovcev, ne zahteva robnikov ali zaključnih elementov, neprekinjena površina pa zagotavlja večjo trpežnost in daljšo življenjsko dobo.',
  },
];
