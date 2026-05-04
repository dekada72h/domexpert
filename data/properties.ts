/**
 * 24 nieruchomości w katalogu Dom Expert. Wrocław.
 * Dla statycznego site — array TS.
 */

export type PropertyType = "mieszkanie" | "dom" | "apartament" | "loft" | "kamienica" | "kawalerka" | "penthouse";
export type Listing = "sale" | "rent";

export type Property = {
  id: number;
  slug: string;
  title: string;
  listing: Listing;
  type: PropertyType;
  district: string;
  price: number;
  beds: number;
  baths: number;
  area_m2: number;
  year_built: number;
  description: string;
  features: string[];
  images: string[];
};

const u = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const PROPERTIES: Property[] = [
  {
    id: 1, slug: "apartament-stare-miasto-rynek",
    title: "Apartament 4-pokojowy z widokiem na Rynek",
    listing: "sale", type: "apartament",
    district: "Stare Miasto", price: 1_650_000,
    beds: 3, baths: 2, area_m2: 95, year_built: 1890,
    description:
      "Wyjątkowy apartament w zabytkowej kamienicy w samym sercu Wrocławia. Pełen światła, z oryginalnymi sztukateriami i ogromnymi oknami z widokiem na Rynek. Po pełnym remoncie z zachowaniem charakteru epoki.",
    features: ["Sztukaterie", "Wysokie sufity 3.6m", "Garaż w pobliżu", "Klimatyzacja", "Piwnica"],
    images: [u("photo-1502672023488-70e25813eb80"), u("photo-1560448204-e02f11c3d0e2"), u("photo-1505693416388-ac5ce068fe85")],
  },
  {
    id: 2, slug: "dom-szeregowy-karlowice",
    title: "Dom szeregowy z ogrodem na Karłowicach",
    listing: "sale", type: "dom",
    district: "Karłowice", price: 2_490_000,
    beds: 5, baths: 3, area_m2: 220, year_built: 2015,
    description:
      "Nowoczesny dom szeregowy w zielonej, spokojnej dzielnicy. Energooszczędny, z fotowoltaiką i pompą ciepła. Ogród z tarasem, dwa miejsca parkingowe, blisko Parku Szczytnickiego.",
    features: ["Fotowoltaika", "Pompa ciepła", "Ogród 200m²", "Garaż 2-stanowiskowy", "Smart home"],
    images: [u("photo-1568605114967-8130f3a36994"), u("photo-1583608205776-bfd35f0d9f83"), u("photo-1564013799919-ab600027ffc6")],
  },
  {
    id: 3, slug: "mieszkanie-krzyki-2pok",
    title: "Mieszkanie 2-pokojowe na Krzykach",
    listing: "rent", type: "mieszkanie",
    district: "Krzyki", price: 3_200,
    beds: 1, baths: 1, area_m2: 52, year_built: 2018,
    description:
      "Komfortowe mieszkanie do wynajęcia w nowym budownictwie. Umeblowane, z balkonem, miejscem postojowym i komórką lokatorską. Idealne dla pary lub singla.",
    features: ["Umeblowane", "Balkon", "Miejsce postojowe", "Komórka lokatorska", "Wysoki standard"],
    images: [u("photo-1560448075-bb485b067938"), u("photo-1556909114-f6e7ad7d3136"), u("photo-1502005229762-cf1b2da7c5d6")],
  },
  {
    id: 4, slug: "loft-nadodrze-fabryka",
    title: "Stylowy loft w postindustrialnym budynku",
    listing: "sale", type: "loft",
    district: "Nadodrze", price: 1_350_000,
    beds: 2, baths: 1, area_m2: 110, year_built: 1928,
    description:
      "Loft w zaadaptowanej fabryce z lat 20. Ekspozycja cegły, stalowe konstrukcje, ogromne okna. Otwarta przestrzeń z mezaninem. Nadodrze szybko zyskuje na popularności.",
    features: ["Open space", "Mezanin", "Cegła ekspozycyjna", "Okna od podłogi do sufitu", "Wysoki sufit 4.2m"],
    images: [u("photo-1493809842364-78817add7ffb"), u("photo-1600585154340-be6161a56a0c"), u("photo-1600210492486-724fe5c67fb0")],
  },
  {
    id: 5, slug: "kawalerka-srodmiescie",
    title: "Kompaktowa kawalerka w Śródmieściu",
    listing: "rent", type: "kawalerka",
    district: "Śródmieście", price: 1_950,
    beds: 0, baths: 1, area_m2: 28, year_built: 2020,
    description:
      "Funkcjonalna kawalerka idealna dla studenta lub młodego profesjonalisty. W pełni umeblowana, blisko Politechniki i Uniwersytetu Wrocławskiego. Świetna komunikacja.",
    features: ["W pełni umeblowane", "Świetlik", "Blisko uczelni", "Kafelki na podłodze", "Internet w czynszu"],
    images: [u("photo-1505693314120-0d443867891c"), u("photo-1522708323590-d24dbb6b0267"), u("photo-1560185007-cde436f6a4d0")],
  },
  {
    id: 6, slug: "penthouse-sky-tower",
    title: "Penthouse w Sky Tower z panoramą Wrocławia",
    listing: "sale", type: "penthouse",
    district: "Powstańców Śląskich", price: 4_800_000,
    beds: 4, baths: 3, area_m2: 220, year_built: 2012,
    description:
      "Najwyższy poziom luksusu w najwyższym budynku Wrocławia. 360° widok na miasto, prywatny taras 50m², concierge 24/7, basen, siłownia. Dwa miejsca w garażu podziemnym.",
    features: ["Taras 50m²", "Widok 360°", "Concierge 24/7", "Basen + siłownia", "2x miejsce w garażu"],
    images: [u("photo-1600596542815-ffad4c1539a9"), u("photo-1600210492493-0946911123ea"), u("photo-1605276373954-0c4a0dac5b12")],
  },
  {
    id: 7, slug: "mieszkanie-biskupin-3pok",
    title: "Mieszkanie 3-pokojowe na Biskupinie",
    listing: "sale", type: "mieszkanie",
    district: "Biskupin", price: 825_000,
    beds: 2, baths: 1, area_m2: 65, year_built: 1962,
    description:
      "Po kapitalnym remoncie. Ciche, zielone osiedle z świetną komunikacją do centrum. Blisko Parku Szczytnickiego i Hali Stulecia. Funkcjonalny rozkład.",
    features: ["Po remoncie 2024", "Balkon", "Cicha okolica", "Park w pobliżu", "Doskonała komunikacja"],
    images: [u("photo-1502672260266-1c1ef2d93688"), u("photo-1505691938895-1758d7feb511"), u("photo-1493809842364-78817add7ffb")],
  },
  {
    id: 8, slug: "apartament-sepolno-2pok",
    title: "Apartament 2-pokojowy w Sępolnie",
    listing: "rent", type: "apartament",
    district: "Sępolno", price: 4_100,
    beds: 1, baths: 1, area_m2: 58, year_built: 2021,
    description:
      "Premium apartament w nowo wybudowanym kompleksie z basenem i siłownią. Kompletnie wyposażony, balkon z widokiem na park, miejsce postojowe podziemne.",
    features: ["Basen + siłownia", "Concierge", "Miejsce w garażu", "Balkon z widokiem", "Smart home"],
    images: [u("photo-1567496898669-ee935f5f647a"), u("photo-1560448204-603b3fc33ddc"), u("photo-1556228720-195a672e8a03")],
  },
  {
    id: 9, slug: "dom-oltaszyn",
    title: "Dom jednorodzinny na Ołtaszynie",
    listing: "sale", type: "dom",
    district: "Ołtaszyn", price: 1_290_000,
    beds: 4, baths: 2, area_m2: 145, year_built: 2008,
    description:
      "Spokojna, willowa dzielnica. Działka 600m² z dorosłymi drzewami, basen w ogrodzie, dwa garaże. Po liftingu w 2022. Idealny dla rodziny.",
    features: ["Basen w ogrodzie", "Działka 600m²", "Dwa garaże", "Po liftingu 2022", "Kominek"],
    images: [u("photo-1600585154340-be6161a56a0c"), u("photo-1576941089067-2de3c901e126"), u("photo-1582268611958-ebfd161ef9cf")],
  },
  {
    id: 10, slug: "kamienica-krzyki-gorne",
    title: "Apartament w zabytkowej kamienicy",
    listing: "sale", type: "kamienica",
    district: "Krzyki Górne", price: 3_350_000,
    beds: 5, baths: 3, area_m2: 250, year_built: 1905,
    description:
      "Reprezentacyjny apartament w eleganckiej kamienicy z 1905. Sztukaterie, parkiet dębowy, oryginalne kominki. Po pełnej renowacji z zachowaniem detali. Jedyna w swoim rodzaju nieruchomość.",
    features: ["Sztukaterie", "Parkiet dębowy", "Dwa kominki", "Wysokie sufity 4m", "Zabytkowa winda"],
    images: [u("photo-1600607687939-ce8a6c25118c"), u("photo-1605276374104-dee2a0ed3cd6"), u("photo-1545324418-cc1a3fa10c00")],
  },
  {
    id: 11, slug: "mieszkanie-fabryczna-1pok",
    title: "Małe mieszkanie 1-pokojowe na Fabrycznej",
    listing: "rent", type: "mieszkanie",
    district: "Fabryczna", price: 1_750,
    beds: 0, baths: 1, area_m2: 32, year_built: 2010,
    description:
      "Kompaktowe i ekonomiczne. Niska cena za świetną lokalizację — 10 min komunikacją do centrum. Idealne dla studenta lub jako pierwsza inwestycja.",
    features: ["Niski czynsz", "Komunikacja", "W pełni umeblowane", "Bez prowizji", "Wpłata = miesiąc"],
    images: [u("photo-1522708323590-d24dbb6b0267"), u("photo-1555041469-a586c61ea9bc"), u("photo-1505693416388-ac5ce068fe85")],
  },
  {
    id: 12, slug: "apartament-zacisze-4pok",
    title: "Rodzinny apartament 4-pokojowy na Zaciszu",
    listing: "sale", type: "apartament",
    district: "Zacisze", price: 1_790_000,
    beds: 3, baths: 2, area_m2: 130, year_built: 2017,
    description:
      "Idealny dla większej rodziny. 4 pokoje, dwa balkony, ogromny salon z kuchnią. Bezpieczne, monitorowane osiedle z placem zabaw. Doskonałe szkoły w okolicy.",
    features: ["4 pokoje", "Dwa balkony", "Plac zabaw na osiedlu", "Monitoring", "Garderoba"],
    images: [u("photo-1574362848149-11496d93a7c7"), u("photo-1592595896616-c37162298647"), u("photo-1600210492486-724fe5c67fb0")],
  },
  {
    id: 13, slug: "loft-popowice",
    title: "Industrialny loft 3-pokojowy",
    listing: "rent", type: "loft",
    district: "Popowice", price: 5_500,
    beds: 2, baths: 1, area_m2: 95, year_built: 1935,
    description:
      "Klimatyczny loft w starej drukarni. Cegła, beton, stal — kompletny vintage chic. Z tarasem na dachu (15m²) z widokiem na Odrę. Limitowana oferta.",
    features: ["Taras na dachu", "Cegła + beton", "Widok na Odrę", "Stal industrialna", "Wysokość 3.8m"],
    images: [u("photo-1505691938895-1758d7feb511"), u("photo-1556228453-efd6c1ff04f6"), u("photo-1556909114-f6e7ad7d3136")],
  },
  {
    id: 14, slug: "kawalerka-grabiszynska",
    title: "Nowoczesna kawalerka 2-poziomowa",
    listing: "sale", type: "kawalerka",
    district: "Grabiszyn", price: 480_000,
    beds: 0, baths: 1, area_m2: 36, year_built: 2022,
    description:
      "Pierwsza inwestycja idealna. 2-poziomowa kawalerka z antresolą — sypialnia na górze, salon-kuchnia na dole. Świetnie zaprojektowana, kompaktowa.",
    features: ["Antresola", "Nowoczesny design", "Niskie koszty utrzymania", "Inwestycja pod wynajem", "Klimatyzacja"],
    images: [u("photo-1502005229762-cf1b2da7c5d6"), u("photo-1502672260266-1c1ef2d93688"), u("photo-1505693314120-0d443867891c")],
  },
  {
    id: 15, slug: "dom-mieszczanski-bartoszowice",
    title: "Dom mieszczański z secesyjnymi detalami",
    listing: "sale", type: "dom",
    district: "Bartoszowice", price: 3_100_000,
    beds: 6, baths: 3, area_m2: 280, year_built: 1923,
    description:
      "Reprezentacyjny dom w spokojnej, prestiżowej lokalizacji. Działka 800m², dorosły ogród, oryginalne wnętrza secesyjne. Po renowacji w 2020 — nowe instalacje, dach, okna. Marzenie kolekcjonera.",
    features: ["Secesyjne detale", "Działka 800m²", "6 pokoi", "Garaż na 2 auta", "Oryginalne kafelki"],
    images: [u("photo-1564013799919-ab600027ffc6"), u("photo-1572120360610-d971b9b78825"), u("photo-1583608205776-bfd35f0d9f83")],
  },
  {
    id: 16, slug: "apartament-rzeznicza-3pok",
    title: "Apartament 3-pokojowy przy Rzeźniczej",
    listing: "rent", type: "apartament",
    district: "Stare Miasto", price: 6_200,
    beds: 2, baths: 2, area_m2: 88, year_built: 2019,
    description:
      "Premium wynajem w sercu miasta. Dwie sypialnie, salon, dwie łazienki, balkon. Concierge, ochrona 24/7. Dla wymagających klientów. Możliwa krótka umowa.",
    features: ["Concierge", "Ochrona 24/7", "Krótkie umowy OK", "Premium wykończenie", "Garaż podziemny"],
    images: [u("photo-1600596542815-ffad4c1539a9"), u("photo-1606744824163-985d376605aa"), u("photo-1600585154340-be6161a56a0c")],
  },
  {
    id: 17, slug: "mieszkanie-klecina-2pok",
    title: "Mieszkanie 2-pokojowe na Klecinie",
    listing: "sale", type: "mieszkanie",
    district: "Klecina", price: 615_000,
    beds: 1, baths: 1, area_m2: 48, year_built: 2014,
    description:
      "Spokojne, zielone osiedle. Idealny start dla młodej pary lub jako wynajem (~2800 zł/mc). Dobra inwestycja długoterminowa. Blisko Aquaparku.",
    features: ["Aquapark w pobliżu", "Niski czynsz", "Balkon", "Idealne pod wynajem", "Cicha lokalizacja"],
    images: [u("photo-1502672023488-70e25813eb80"), u("photo-1556909114-f6e7ad7d3136"), u("photo-1571055107559-3e67626fa8be")],
  },
  {
    id: 18, slug: "penthouse-thespian",
    title: "Penthouse w Thespian Wrocław",
    listing: "sale", type: "penthouse",
    district: "Plac Solny", price: 5_900_000,
    beds: 3, baths: 3, area_m2: 200, year_built: 2008,
    description:
      "Limitowana oferta — penthouse w prestiżowym Thespianie. Widok na Plac Solny i Rynek. 3 prywatne tarasy o łącznej powierzchni 90m². Najwyższa półka.",
    features: ["3 tarasy 90m²", "Widok na Rynek", "Prestige location", "Concierge", "Designerskie wykończenie"],
    images: [u("photo-1600210492493-0946911123ea"), u("photo-1605276374104-dee2a0ed3cd6"), u("photo-1600596542815-ffad4c1539a9")],
  },
  {
    id: 19, slug: "loft-poludnie-kowale",
    title: "Loft 4-pokojowy z antresolą",
    listing: "sale", type: "loft",
    district: "Kowale", price: 980_000,
    beds: 3, baths: 2, area_m2: 130, year_built: 2016,
    description:
      "Nowoczesny loft inspirowany nowojorskim stylem. Antresola sypialniana, otwarta kuchnia z wyspą. Wysokie sufity, wielkie okna. Po pełnym wyposażeniu.",
    features: ["Antresola", "Wysokość 4m", "Kuchnia z wyspą", "Po pełnym wyposażeniu", "Garaż"],
    images: [u("photo-1493809842364-78817add7ffb"), u("photo-1574362848149-11496d93a7c7"), u("photo-1605276373954-0c4a0dac5b12")],
  },
  {
    id: 20, slug: "kamienica-podwale-investment",
    title: "Cała kamienica pod inwestycję",
    listing: "sale", type: "kamienica",
    district: "Podwale", price: 8_500_000,
    beds: 12, baths: 8, area_m2: 850, year_built: 1898,
    description:
      "Pełna kamienica do remontu lub adaptacji. 8 mieszkań + lokal usługowy na parterze. Pełna księga wieczysta, brak obciążeń. Możliwość przekształcenia na butikowy hotel.",
    features: ["8 mieszkań", "Lokal usługowy", "Bez obciążeń", "Idealne na hotel", "ROI 6-8% p.a."],
    images: [u("photo-1572120360610-d971b9b78825"), u("photo-1583608205776-bfd35f0d9f83"), u("photo-1502672023488-70e25813eb80")],
  },
  {
    id: 21, slug: "mieszkanie-dluga-3pok",
    title: "Mieszkanie 3-pokojowe na ul. Długiej",
    listing: "rent", type: "mieszkanie",
    district: "Stare Miasto", price: 4_800,
    beds: 2, baths: 1, area_m2: 75, year_built: 1925,
    description:
      "Charakterystyczne mieszkanie w przedwojennej kamienicy. Sztukaterie, drewniane podłogi, balkon. W pełni umeblowane w stylu nowoczesnym z nutą vintage. Dla wymagających.",
    features: ["Sztukaterie", "Drewniane podłogi", "Vintage + nowoczesny", "Balkon", "Klimatyzacja"],
    images: [u("photo-1505693416388-ac5ce068fe85"), u("photo-1556909114-f6e7ad7d3136"), u("photo-1576941089067-2de3c901e126")],
  },
  {
    id: 22, slug: "apartament-strzegomski",
    title: "Apartament 2-pokojowy z widokiem",
    listing: "rent", type: "apartament",
    district: "Plac Strzegomski", price: 3_400,
    beds: 1, baths: 1, area_m2: 55, year_built: 2020,
    description:
      "Nowoczesny apartament z widokiem na Plac Strzegomski i Muzeum Pana Tadeusza. Komunikacja jak nigdzie indziej. Dla wszystkich którzy cenią sobie centrum kulturalne.",
    features: ["Widok na muzeum", "Komunikacja A1", "Smart home", "Designer kuchnia", "Pomyślane dla pary"],
    images: [u("photo-1556228720-195a672e8a03"), u("photo-1505693416388-ac5ce068fe85"), u("photo-1567496898669-ee935f5f647a")],
  },
  {
    id: 23, slug: "dom-szeregowy-leshnica",
    title: "Dom szeregowy z ogrodem na Leśnicy",
    listing: "sale", type: "dom",
    district: "Leśnica", price: 1_120_000,
    beds: 4, baths: 2, area_m2: 160, year_built: 2019,
    description:
      "Ostatni dom z 6 w zamkniętym osiedlu. Energooszczędny standard, fotowoltaika 8kW, magazyn energii. Ogród 150m² z tarasem. Komunikacja tramwajowa.",
    features: ["Fotowoltaika 8kW", "Magazyn energii", "Energooszczędny", "Ogród 150m²", "Komunikacja tramwajowa"],
    images: [u("photo-1568605114967-8130f3a36994"), u("photo-1576941089067-2de3c901e126"), u("photo-1582268611958-ebfd161ef9cf")],
  },
  {
    id: 24, slug: "kawalerka-traugutta",
    title: "Stylowa kawalerka przy ul. Traugutta",
    listing: "sale", type: "kawalerka",
    district: "Stare Miasto", price: 525_000,
    beds: 0, baths: 1, area_m2: 30, year_built: 1932,
    description:
      "W centrum, w przedwojennej kamienicy. Po pełnym remoncie z zachowaniem charakteru. Inwestycja idealna pod krótkoterminowy wynajem dla turystów.",
    features: ["Centrum", "Po remoncie", "Pod krótki wynajem", "Inwestycja", "Charakter epoki"],
    images: [u("photo-1502005229762-cf1b2da7c5d6"), u("photo-1505691938895-1758d7feb511"), u("photo-1502672260266-1c1ef2d93688")],
  },
  {
    id: 25, slug: "mieszkanie-psie-pole-3pok",
    title: "Mieszkanie rodzinne 3-pokojowe na Psim Polu",
    listing: "sale", type: "mieszkanie",
    district: "Psie Pole", price: 695_000,
    beds: 2, baths: 1, area_m2: 67, year_built: 2011,
    description:
      "Spokojna dzielnica idealna dla rodziny z dziećmi. Mieszkanie po remoncie, dwa balkony, miejsce postojowe w garażu podziemnym. Świetna komunikacja autobusowa do centrum.",
    features: ["Dwa balkony", "Garaż podziemny", "Po remoncie", "Pokój dziecięcy", "Klimatyzacja"],
    images: [u("photo-1556909114-f6e7ad7d3136"), u("photo-1556228720-195a672e8a03"), u("photo-1571055107559-3e67626fa8be")],
  },
  {
    id: 26, slug: "dom-osobno-stojacy-jagodno",
    title: "Dom wolnostojący na Jagodnie",
    listing: "sale", type: "dom",
    district: "Jagodno", price: 1_950_000,
    beds: 5, baths: 3, area_m2: 195, year_built: 2020,
    description:
      "Świeży dom w nowej dzielnicy. Działka 450m², garaż dwustanowiskowy, fotowoltaika, rekuperacja. Wysoki standard wykończenia. Spokojna, rosnąca lokalizacja.",
    features: ["Fotowoltaika", "Rekuperacja", "Działka 450m²", "Wysokie wykończenie", "Garaż 2-stanowiskowy"],
    images: [u("photo-1572120360610-d971b9b78825"), u("photo-1576941089067-2de3c901e126"), u("photo-1564013799919-ab600027ffc6")],
  },
  {
    id: 27, slug: "apartament-business-link",
    title: "Apartament biznesowy z widokiem na Odrę",
    listing: "rent", type: "apartament",
    district: "Wybrzeże Wyspiańskiego", price: 7_500,
    beds: 2, baths: 2, area_m2: 105, year_built: 2017,
    description:
      "Premium apartament dla biznesu lub na home-office. Widok na Odrę, 2 sypialnie, gabinet, dwie łazienki, taras 12m². Ochrona, concierge, parking podziemny.",
    features: ["Widok na Odrę", "Gabinet do pracy", "Taras 12m²", "Concierge", "Parking podziemny"],
    images: [u("photo-1605276373954-0c4a0dac5b12"), u("photo-1600210492486-724fe5c67fb0"), u("photo-1502672260266-1c1ef2d93688")],
  },
  {
    id: 28, slug: "loft-piaskowa",
    title: "Mały loft 1-pokojowy na Piaskowej",
    listing: "sale", type: "loft",
    district: "Wyspa Piasek", price: 720_000,
    beds: 0, baths: 1, area_m2: 42, year_built: 1924,
    description:
      "Unikalna lokalizacja — Ostrów Tumski w zasięgu spaceru. Mały, ale charakterny loft po renowacji. Idealny pod airbnb (ROI ~9% rocznie) lub jako mieszkanie singla.",
    features: ["Ostrów Tumski", "Pod Airbnb", "ROI 9%", "Charakter zabytku", "Wysokość 3.4m"],
    images: [u("photo-1502672023488-70e25813eb80"), u("photo-1493809842364-78817add7ffb"), u("photo-1556909114-f6e7ad7d3136")],
  },
  {
    id: 29, slug: "dom-jednorodzinny-wojnow",
    title: "Dom 4-pokojowy z dużym ogrodem na Wojnowie",
    listing: "sale", type: "dom",
    district: "Wojnów", price: 1_490_000,
    beds: 4, baths: 2, area_m2: 175, year_built: 2010,
    description:
      "Wysoka jakość przyrody. Spokojny dom z ogrodem 700m² i sadem. 5 minut do Parku Krajobrazowego. Dobre miejsce dla osób ceniących ciszę i prywatność.",
    features: ["Sad owocowy", "Działka 700m²", "Park Krajobrazowy", "Garaż", "Cicha okolica"],
    images: [u("photo-1568605114967-8130f3a36994"), u("photo-1582268611958-ebfd161ef9cf"), u("photo-1583608205776-bfd35f0d9f83")],
  },
  {
    id: 30, slug: "apartament-przyjazn",
    title: "Designerski apartament w Przyjaźń Park",
    listing: "rent", type: "apartament",
    district: "Krzyki Górne", price: 5_900,
    beds: 2, baths: 2, area_m2: 78, year_built: 2022,
    description:
      "Świeżo oddany, designerski apartament w prestiżowym kompleksie. Dwa pokoje, dwie łazienki, taras 8m², parking, basen, fitness, sauna. Kompletnie wyposażony.",
    features: ["Basen + sauna", "Fitness", "Taras 8m²", "W pełni wyposażone", "Smart home"],
    images: [u("photo-1567496898669-ee935f5f647a"), u("photo-1605276373954-0c4a0dac5b12"), u("photo-1502672260266-1c1ef2d93688")],
  },
  {
    id: 31, slug: "kawalerka-pulaskiego",
    title: "Inwestycyjna kawalerka przy ul. Pułaskiego",
    listing: "sale", type: "kawalerka",
    district: "Plac Powstańców", price: 459_000,
    beds: 0, baths: 1, area_m2: 26, year_built: 2023,
    description:
      "Najnowsza inwestycja deweloperska. Mała powierzchnia, ale doskonale zaprojektowana. ROI z najmu długoterminowego ~6.5% rocznie. Stan deweloperski, do własnego wykończenia lub gotowe pakiety.",
    features: ["Stan deweloperski", "ROI 6.5%", "Pakiety wykończeniowe", "Garaż w cenie", "Niski czynsz"],
    images: [u("photo-1505693314120-0d443867891c"), u("photo-1502005229762-cf1b2da7c5d6"), u("photo-1505691938895-1758d7feb511")],
  },
  {
    id: 32, slug: "kamienica-uniwersytecka",
    title: "Apartament w kamienicy przy Uniwersytecie",
    listing: "sale", type: "kamienica",
    district: "Stare Miasto", price: 2_650_000,
    beds: 4, baths: 2, area_m2: 165, year_built: 1888,
    description:
      "Reprezentacyjne mieszkanie w odrestaurowanej kamienicy z 1888 r. tuż przy budynku Uniwersytetu Wrocławskiego. Sztukaterie, wysokie sufity, oryginalne kafelki w korytarzu. Po pełnej renowacji 2023.",
    features: ["Renowacja 2023", "Sztukaterie", "Sufity 4m", "Oryginalne kafelki", "Przy Uniwersytecie"],
    images: [u("photo-1572120360610-d971b9b78825"), u("photo-1605276374104-dee2a0ed3cd6"), u("photo-1583608205776-bfd35f0d9f83")],
  },
];

export const DISTRICTS = Array.from(new Set(PROPERTIES.map((p) => p.district))).sort();
export const PROPERTY_TYPES: PropertyType[] = ["mieszkanie", "dom", "apartament", "loft", "kamienica", "kawalerka", "penthouse"];
