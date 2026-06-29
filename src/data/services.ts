import type { ImageMetadata } from 'astro';

// Service card icons
import iconStokan from '../assets/icons/stokan.png';
import iconTiskan from '../assets/icons/tiskan.png';
import iconMetlicen from '../assets/icons/metlicen.png';
import iconBrusen from '../assets/icons/brusen.png';
import iconSportni from '../assets/icons/sportni.png';
import iconVrtna from '../assets/icons/vrtna.png';

// Detail photos
import photoStokan from '../assets/images/stokan-beton.jpg';
import photoTiskan from '../assets/images/tiskan-beton.jpg';
import photoMetlicen from '../assets/images/metlicen-beton.jpg';
import photoBrusen from '../assets/images/brusen-beton.png';
import photoSportni from '../assets/images/sportni-objekti.jpeg';
import photoVrtna from '../assets/images/vrtna-garnitura.png';

export interface Service {
  id: string;
  title: string;
  /** short blurb for the overview card */
  summary: string;
  /** full detail paragraphs */
  detail: string[];
  icon: ImageMetadata;
  photo: ImageMetadata;
  /** image alt text */
  alt: string;
  /** which side the photo sits on in the detail row */
  imageSide: 'left' | 'right';
  /** optional secondary CTA inside a detail block */
  cta?: { label: string };
}

export const services: Service[] = [
  {
    id: 'stokan-beton',
    title: 'Štokan beton',
    summary:
      'Betonski tlak s hrapavo in reliefno strukturo, ki zagotavlja dober oprijem in privlačen estetski videz. Priporočena izbira za terase, dvorišča in zunanja stopnišča.',
    detail: [
      'Štokan beton je tehnika obdelave betonske površine, pri kateri s pomočjo mehanskih udarcev nastane hrapava in reliefna tekstura. Zaradi protidrsnih lastnosti ter estetsko zanimivega in naravnega videza je štokan betonski tlak priljubljena izbira za zunanje površine, kot so terase, dvorišča, stopnišča, pločniki in sprehajalne poti.',
      'Grobost površine lahko prilagodimo z izbiro različnih vrst in velikosti udarnih glav, kar omogoča natančen nadzor nad končnim izgledom in funkcionalnostjo obdelane površine.',
      'Za dodatno zaščito se uporabljajo prilagojene betonske mešanice z dodatki, ki zagotavljajo odpornost proti zmrzali, soli in obrabi. Površine zaščitimo s premazi, ki preprečujejo vpijanje umazanije, olajšajo čiščenje in povečajo odpornost površine na zunanje vplive.',
    ],
    icon: iconStokan,
    photo: photoStokan,
    alt: 'Vzorčna slika štokan betonski tlak',
    imageSide: 'left',
  },
  {
    id: 'tiskan-beton',
    title: 'Tiskan beton',
    summary:
      'Inovativna rešitev, ki združuje vzdržljivost betona z estetiko naravnih materialov. Posnemamo lahko obliko, teksturo in barvo naravnega kamna, tlakovcev, opeke ali lesa. Odlična izbira za terase, dvorišča in dovozne poti.',
    detail: [
      'Tiskan beton je inovativna tehnika, ki združuje vzdržljivost betona z estetiko naravnih materialov. Z vtiskovanjem matric v beton lahko posnemamo obliko, teksturo in barvo kamna, tlakovcev, opeke ali lesa. Ta rešitev je cenovno ugodnejša in omogoča bistveno hitrejšo izvedbo v primerjavi z uporabo izvornih materialov.',
      'Izbira tehnike tiskanega betona odpira neskončne kreativne možnosti z bogato paleto barv in vzorcev, ki jih lahko popolnoma prilagodimo vašim željam. Izbirana tehnika ustvari brezšivno površino, ki za razliko od klasičnih tlakovcev, preprečuje vmesno rast trave in plevela ter omogoča enostavno vzdrževanje.',
      'Tiskan betonski tlak zaščitimo s premazom, ki poveča odpornost proti vlagi, obrabi in sončnim žarkom ter poudari izbrano barvo in teksturo površine.',
    ],
    icon: iconTiskan,
    photo: photoTiskan,
    alt: 'Vzorčna slika tiskan beton',
    imageSide: 'right',
    cta: { label: 'Katalog vzorcev in barv' },
  },
  {
    id: 'metlicen-beton',
    title: 'Metličen beton',
    summary:
      'Betonski tlak s finim in rahlo hrapavim zaključkom, ki zagotavlja varno in nedrsno površino. Primerna izbira za dvorišča, dovozne poti ter območja z večjo izpostavljenostjo vlagi in zmrzali.',
    detail: [
      'Metličen beton je tehnika obdelave, pri kateri se na mokro betonirano površino z metlico ustvari rahlo hrapava in enakomerna struktura. Zaradi svoje protidrsnosti je metličen betonski tlak odlična izbira za zunanje površine, kot so dvorišča, dovozne poti, pločniki in stopnišča, kjer je varnost pri uporabi ključnega pomena.',
      'Teksturo in stopnjo reliefa lahko prilagodimo z izbiro različnih vrst metlic in tehnik nanašanja. Posebne betonske mešanice z dodatki nam pomagajo izboljšati odpornost proti zmrzali, soli in obrabi ter tako podaljšajo življenjsko dobo betonske površine.',
    ],
    icon: iconMetlicen,
    photo: photoMetlicen,
    alt: 'Vzorčna slika metličen beton',
    imageSide: 'left',
  },
  {
    id: 'brusen-beton',
    title: 'Brušen beton',
    summary:
      'Brušen beton združuje brezčasno eleganco in izjemno trpežnost ter ustvarja minimalistične in vzdržljive površine, primerne tako za zunanje kot notranje prostore.',
    detail: [
      'Brušen beton združuje brezčasno eleganco in izjemno trpežnost ter ustvarja minimalistične in vizualno dovršene površine, primerne tako za zunanje kot notranje prostore. Njegova gladka in enakomerna tekstura se doseže z natančnim brušenjem s stroji z diamantnimi glavami, ki poudarijo naravno strukturo izbranega agregata.',
      'Zaradi enostavnega vzdrževanja in oblikovne fleksibilnosti, je brušen betonski tlak odlična izbira povsod, kjer želimo preplet funkcionalnosti in sodobnega videza. Primeren je za terase, hodnike in garaže, kot tudi za uporabo v poslovnih ali bivalnih notranjih prostorih.',
      'Za dodatno zaščito in daljšo življenjsko dobo, se brušene betonske površine impregnirajo s posebnimi premazi, ki zmanjšujejo vpijanje tekočin, olajšajo čiščenje in učinkovito preprečujejo nastajanje prahu.',
    ],
    icon: iconBrusen,
    photo: photoBrusen,
    alt: 'Vzorčna slika brušenega betona z vidnim agregatom',
    imageSide: 'right',
  },
  {
    id: 'sportni-objekti',
    title: 'Betonski športni objekti',
    summary:
      'Strokovno zasnovane in izdelane betonske konstrukcije, ki zagotavljajo trdnost in varnost. Specializirani smo za izdelavo betonskih skate parkov oz. rolkarskih poligonov, prilagojenih potrebam uporabnikov in različnim slogom vožnje.',
    detail: [
      'Pri zasnovi betonskih športnih objektov sledimo načelu “od uporabnika za uporabnika”, saj smo svojo pot v svetu betona začeli prav zaradi strasti do rolkanja. Naše izkušnje na terenu in znanje s področja gradnje, se prepletajo v kakovostnih rešitvah, ki nudijo strokovno zasnovane in izdelane betonske konstrukcije.',
      'Specializirani smo za gradnjo betonskih skateparkov oz. rolkarskih poligonov, prilagojenih potrebam prostora, kamor so umeščeni. Betonski tlaki se gladijo strojno, posamezne elemente pa obdelujemo ročno, kar zahteva poglobljeno poznavanje lastnosti betona in dolgoletne izkušnje z oblikovanjem. Takšna obdelava zagotavlja minimalno trenje, visoko odpornost proti obrabi in dolgo življenjsko dobo objekta.',
    ],
    icon: iconSportni,
    photo: photoSportni,
    alt: 'Izdelava betonskega igrišča za rolkanje (skatepark)',
    imageSide: 'left',
  },
  {
    id: 'vrtna-garnitura',
    title: 'Betonska vrtna garnitura',
    summary:
      'Naše betonske vrtne garniture združujejo elegantno zasnovo z robustno vzdržljivostjo, ki zagotavlja trajnostno uporabo. Nudimo celovito rešitev ureditve zunanjega prostora in po potrebi sodelujemo s preverjenimi podizvajalci.',
    detail: [
      'Betonska vrtna garnitura je odlična izbira za brezčasno in funkcionalno pohištvo, primerno za vse zunanje prostore. Z uporabo kakovostne betonske mešanice ter natančne strojne in ročne obdelave, ustvarimo stabilne izdelke, odporne na vremenske vplive, obrabo in zob časa.',
      'Vsak kos je premišljeno oblikovan z mislijo na udobje, estetiko in uporabnost. Površine so lahko gladke, brušene ali rahlo strukturirane, kar nam omogoča različne vizualne učinke, skladne z okolico in vašimi željami. V končni fazi po potrebi vključimo tudi dodatke, kot so lesena ali kovinska sedišča, vratca, vodovodne in električne inštalacije ter vgradne elemente.',
      'Betonska garnitura ostaja stabilna tudi v zahtevnejših vremenskih razmerah, obenem pa ne zahteva posebnega vzdrževanja. Za dodatno zaščito jo lahko impregniramo s premazi, ki zmanjšujejo vpijanje madežev, so primerni za stik s hrano in olajšajo čiščenje.',
    ],
    icon: iconVrtna,
    photo: photoVrtna,
    alt: 'Betonska vrtna garnitura z zunanjo kuhinjo',
    imageSide: 'right',
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
  {
    q: 'Ali nudite celovito izdelavo betonske vrtne garniture?',
    a: 'Da, nudimo celovito izdelavo vrtne garniture. Betonske elemente izdelamo sami, za vodovodne, električne in druge potrebne inštalacije pa sodelujemo s preverjenimi podizvajalci. Tako vam zagotovimo usklajeno, kakovostno in brezskrbno izvedbo celotnega projekta.',
  },
];
