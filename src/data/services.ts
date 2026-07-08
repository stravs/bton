import type { ImageMetadata } from 'astro';

// Service card icons
import iconStokan from '../assets/icons/stokan.png';
import iconTiskan from '../assets/icons/tiskan.png';
import iconMetlicen from '../assets/icons/metlicen.png';
import iconBrusen from '../assets/icons/brusen.png';

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
  /** meta description for the sub-page */
  metaDescription: string;
  icon: ImageMetadata;
  photo: ImageMetadata;
  /** image alt text */
  alt: string;
  /** additional photos shown in the sub-page gallery */
  photos: { src: ImageMetadata; alt: string }[];
  /** optional secondary CTA on the sub-page */
  cta?: { label: string; href: string };
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
    metaDescription:
      'Štokan beton — protidrsen betonski tlak z naravnim videzom kamna za terase, stopnišča in dvorišča. Izvedba po meri, Bled in okolica.',
    icon: iconStokan,
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
    metaDescription:
      'Tiskan beton — brezšivna površina z videzom kamna, opeke ali lesa za terase, dvorišča in dovoze. Bogata izbira vzorcev in barv.',
    icon: iconTiskan,
    photo: photoTiskan,
    alt: 'Vzorčna slika tiskan beton',
    photos: [],
    cta: {
      label: 'Katalog vzorcev in barv',
      href: 'https://www.calameo.com/books/005075689eff9f844f976',
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
    metaDescription:
      'Metličen beton — protidrsen in cenovno ugoden betonski tlak za dovoze, dvorišča in pločnike. Odporen proti zmrzali in soli.',
    icon: iconMetlicen,
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
    metaDescription:
      'Brušen beton — gladka in trpežna površina z vidnim agregatom za terase, garaže in notranje prostore. Sodoben videz, enostavno vzdrževanje.',
    icon: iconBrusen,
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

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Koliko časa traja izvedba betonskega projekta?',
    a: 'Čas izvedbe je odvisen od velikosti in kompleksnosti projekta. Pri klasični stanovanjski terasi (velikosti 35 - 45 m²) celoten postopek, od priprave podlage do končne obdelave in utrjevanja, traja približno od 3 do 5 dni. Površina je pohodna že po nekaj urah, vendar je pred večjimi obremenitvami potrebno počakati na popolno strjevanje.',
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
