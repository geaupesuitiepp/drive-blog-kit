import heroCarImg from "@/assets/hero-car.jpg";
import technikImg from "@/assets/article-technik.jpg";
import lifestyleImg from "@/assets/article-lifestyle.jpg";
import elektroImg from "@/assets/article-elektro.jpg";
import motorImg from "@/assets/article-motor.jpg";
import roadtripImg from "@/assets/article-roadtrip.jpg";
import pflegeImg from "@/assets/article-pflege.jpg";

export type Category = "Auto & Fahrkultur" | "Technik & Gadgets" | "Style & Lifestyle" | "Allgemein";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: Category;
  date: string;
}

export const categories: Category[] = [
  "Auto & Fahrkultur",
  "Technik & Gadgets",
  "Style & Lifestyle",
  "Allgemein",
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "sportwagenkultur-in-deutschland",
    title: "Sportwagenkultur in Deutschland: Faszination auf vier Rädern",
    excerpt: "Deutschland ist das Land der Sportwagen. Von Porsche über BMW M bis hin zu AMG – die deutsche Sportwagenkultur hat eine lange und beeindruckende Geschichte, die Autofans weltweit begeistert.",
    content: `<p>Deutschland ist das Land der Sportwagen. Von Porsche über BMW M bis hin zu AMG – die deutsche Sportwagenkultur hat eine lange und beeindruckende Geschichte, die Autofans weltweit begeistert.</p>
    <h2>Die Anfänge der deutschen Sportwagenkultur</h2>
    <p>Bereits in den 1950er Jahren begannen deutsche Hersteller, Hochleistungsfahrzeuge zu entwickeln, die sowohl auf der Rennstrecke als auch auf der Straße überzeugen konnten. Porsche setzte mit dem legendären 356 den Grundstein für eine Ära, die bis heute andauert.</p>
    <h2>Moderne Sportwagen und ihre Technologie</h2>
    <p>Heute vereinen deutsche Sportwagen modernste Technologie mit traditioneller Handwerkskunst. Turboaufladung, adaptive Fahrwerke und intelligente Allradsysteme sorgen für ein Fahrerlebnis, das seinesgleichen sucht. Der Porsche 911, der BMW M3 und der Mercedes-AMG GT sind nur einige Beispiele für die Vielfalt der deutschen Sportwagenlandschaft.</p>
    <h2>Die Zukunft: Elektrifizierung</h2>
    <p>Mit dem Porsche Taycan und dem BMW i4 M50 zeigen deutsche Hersteller, dass Elektrifizierung und Sportlichkeit kein Widerspruch sein müssen. Die Zukunft der Sportwagenkultur wird elektrisch – und Deutschland ist an vorderster Front dabei.</p>`,
    image: heroCarImg,
    category: "Auto & Fahrkultur",
    date: "2026-03-01",
  },
  {
    id: "2",
    slug: "beste-auto-gadgets-2026",
    title: "Die besten Auto-Gadgets 2026: Smarte Helfer für unterwegs",
    excerpt: "Moderne Technik macht das Autofahren komfortabler und sicherer. Wir stellen die besten Gadgets vor, die in keinem Fahrzeug fehlen sollten – von Dashcams bis hin zu smarten Ladegeräten.",
    content: `<p>Moderne Technik macht das Autofahren komfortabler und sicherer. Wir stellen die besten Gadgets vor, die in keinem Fahrzeug fehlen sollten.</p>
    <h2>Dashcams für mehr Sicherheit</h2>
    <p>Eine gute Dashcam ist heute fast unverzichtbar. Sie dokumentiert das Geschehen auf der Straße und kann im Falle eines Unfalls wichtige Beweise liefern. Moderne Modelle bieten 4K-Auflösung, GPS-Tracking und Cloud-Backup.</p>
    <h2>Smarte Ladegeräte und USB-Hubs</h2>
    <p>Mit mehreren USB-C-Ports und Schnellladefunktion sorgen moderne Auto-Ladegeräte dafür, dass alle Geräte stets geladen sind. Einige Modelle bieten sogar kabelloses Laden über MagSafe-kompatible Pads.</p>
    <h2>Head-Up-Displays zum Nachrüsten</h2>
    <p>Nachrüst-Head-Up-Displays projizieren wichtige Fahrinformationen direkt in das Sichtfeld des Fahrers. Geschwindigkeit, Navigation und Warnhinweise werden so angezeigt, ohne dass der Blick von der Straße abgewendet werden muss.</p>`,
    image: technikImg,
    category: "Technik & Gadgets",
    date: "2026-02-25",
  },
  {
    id: "3",
    slug: "oldtimer-als-wertanlage",
    title: "Oldtimer als Wertanlage: Lohnt sich die Investition?",
    excerpt: "Klassische Automobile sind nicht nur eine Leidenschaft, sondern können auch eine lukrative Wertanlage sein. Erfahren Sie, worauf es beim Kauf eines Oldtimers als Investment ankommt.",
    content: `<p>Klassische Automobile sind nicht nur eine Leidenschaft, sondern können auch eine lukrative Wertanlage sein. Der Markt für Oldtimer hat sich in den letzten Jahren stark entwickelt.</p>
    <h2>Warum Oldtimer im Wert steigen</h2>
    <p>Die Nachfrage nach gut erhaltenen Klassikern übersteigt das Angebot bei weitem. Besonders Modelle in Originalzustand oder mit dokumentierter Historie erzielen Höchstpreise auf Auktionen. Ein Mercedes 300 SL oder ein Porsche 911 aus den 1960er Jahren können heute Millionenbeträge erzielen.</p>
    <h2>Worauf Sie beim Kauf achten sollten</h2>
    <p>Provenienz, Zustand und Seltenheit sind die drei wichtigsten Faktoren bei der Bewertung eines Oldtimers. Lassen Sie das Fahrzeug immer von einem unabhängigen Gutachter prüfen und achten Sie auf lückenlose Dokumentation.</p>`,
    image: lifestyleImg,
    category: "Style & Lifestyle",
    date: "2026-02-18",
  },
  {
    id: "4",
    slug: "elektroautos-laden-zuhause",
    title: "Elektroautos zuhause laden: Der komplette Guide",
    excerpt: "Das Laden eines Elektroautos zu Hause wird immer einfacher. In diesem Guide erfahren Sie alles über Wallboxen, Ladezeiten und Kosten – und wie Sie die richtige Lösung für sich finden.",
    content: `<p>Das Laden eines Elektroautos zu Hause wird immer einfacher und komfortabler. Wir erklären, wie Sie die perfekte Ladelösung für Ihr Zuhause finden.</p>
    <h2>Wallbox vs. Steckdose</h2>
    <p>Während das Laden an der Haushaltssteckdose möglich ist, empfehlen Experten die Installation einer Wallbox. Diese bietet deutlich höhere Ladeleistungen (bis zu 22 kW) und zusätzliche Sicherheitsfunktionen wie einen integrierten FI-Schutzschalter.</p>
    <h2>Kosten und Förderung</h2>
    <p>Eine Wallbox kostet inklusive Installation zwischen 1.500 und 3.000 Euro. Verschiedene Förderprogramme können die Kosten deutlich senken. Informieren Sie sich bei Ihrem lokalen Energieversorger über aktuelle Angebote.</p>
    <h2>Solarstrom nutzen</h2>
    <p>Die Kombination aus Photovoltaikanlage und Elektroauto ist besonders wirtschaftlich. Mit selbst erzeugtem Solarstrom laden Sie Ihr Auto nahezu kostenlos und vollständig CO2-neutral.</p>`,
    image: elektroImg,
    category: "Technik & Gadgets",
    date: "2026-02-10",
  },
  {
    id: "5",
    slug: "motortuning-fuer-einsteiger",
    title: "Motortuning für Einsteiger: Mehr Leistung richtig gemacht",
    excerpt: "Sie möchten mehr Leistung aus Ihrem Motor herausholen? Wir erklären die Grundlagen des Motortunings und zeigen, welche Maßnahmen sich lohnen und worauf Sie achten müssen.",
    content: `<p>Motortuning ist ein faszinierendes Thema für jeden Autoliebhaber. Doch wo fängt man an und was bringt wirklich mehr Leistung?</p>
    <h2>Chiptuning: Der einfachste Weg</h2>
    <p>Chiptuning ist die populärste Methode, um mehr Leistung zu gewinnen. Durch Anpassung der Motorsteuerung können oft 20-30% mehr Leistung freigesetzt werden. Wichtig ist dabei, einen seriösen Anbieter zu wählen, der auch die Garantie und den TÜV berücksichtigt.</p>
    <h2>Ansaugung und Abgasanlage</h2>
    <p>Ein Sportluftfilter und eine optimierte Abgasanlage können die Atmung des Motors verbessern. Die Leistungssteigerung ist hier meist geringer als beim Chiptuning, dafür wird der Sound deutlich verbessert.</p>`,
    image: motorImg,
    category: "Auto & Fahrkultur",
    date: "2026-01-28",
  },
  {
    id: "6",
    slug: "roadtrip-planung-tipps",
    title: "Den perfekten Roadtrip planen: Tipps und Checkliste",
    excerpt: "Ein Roadtrip ist das ultimative Autoabenteuer. Mit der richtigen Planung wird die Reise unvergesslich. Hier finden Sie die besten Tipps und eine komplette Checkliste für Ihren nächsten Trip.",
    content: `<p>Ein Roadtrip verbindet die Freiheit des Fahrens mit dem Entdecken neuer Orte. Damit alles reibungslos läuft, ist eine gute Vorbereitung das A und O.</p>
    <h2>Route und Zeitplanung</h2>
    <p>Planen Sie nicht zu viele Kilometer pro Tag ein. 300-400 km sind ein gutes Tagespensum, das noch genügend Zeit für Pausen und Erkundungen lässt. Nutzen Sie Apps wie Google Maps oder Komoot, um interessante Zwischenstopps zu finden.</p>
    <h2>Fahrzeugcheck vor der Abfahrt</h2>
    <p>Überprüfen Sie Ölstand, Reifendruck, Kühlflüssigkeit und Bremsen vor jeder längeren Fahrt. Ein kurzer Check kann spätere Probleme verhindern und sorgt für eine sichere Reise.</p>
    <h2>Packliste für den Roadtrip</h2>
    <p>Neben den üblichen Reiseutensilien sollten Sie an Warndreieck, Verbandskasten, Ladekabel, Sonnenschutz und ausreichend Wasser denken. Eine gute Playlist rundet das Roadtrip-Erlebnis ab.</p>`,
    image: roadtripImg,
    category: "Allgemein",
    date: "2026-01-15",
  },
  {
    id: "7",
    slug: "autopflege-im-winter",
    title: "Autopflege im Winter: So schützen Sie Ihr Fahrzeug",
    excerpt: "Der Winter stellt besondere Anforderungen an die Autopflege. Streusalz, Kälte und Feuchtigkeit setzen dem Lack und der Technik zu. Mit diesen Tipps bleibt Ihr Auto auch im Winter in Topform.",
    content: `<p>Die kalte Jahreszeit ist eine Herausforderung für jedes Fahrzeug. Mit der richtigen Pflege schützen Sie Ihr Auto vor Winterschäden.</p>
    <h2>Lackschutz und Unterbodenwäsche</h2>
    <p>Eine Versiegelung oder Wachsschicht schützt den Lack vor Streusalz und Schmutz. Regelmäßige Unterbodenwäschen sind im Winter besonders wichtig, um Rostbildung vorzubeugen.</p>
    <h2>Gummipflege und Türdichtungen</h2>
    <p>Behandeln Sie Türdichtungen regelmäßig mit Silikonspray oder speziellem Gummipfleger. So verhindern Sie, dass die Türen bei Frost zufrieren und die Dichtungen brüchig werden.</p>
    <h2>Winterreifen und Frostschutz</h2>
    <p>Rechtzeitig auf Winterreifen wechseln und den Frostschutz der Scheibenwischanlage überprüfen – diese einfachen Maßnahmen können viel Ärger ersparen.</p>`,
    image: pflegeImg,
    category: "Auto & Fahrkultur",
    date: "2026-01-05",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}
