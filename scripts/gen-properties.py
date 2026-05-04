#!/usr/bin/env python3
import random
import json
random.seed(42)

# Real Wrocław districts
DISTRICTS = [
    "Stare Miasto", "Plac Solny", "Plac Powstańców", "Wyspa Piasek",
    "Nadodrze", "Karłowice", "Sępolno", "Biskupin", "Bartoszowice",
    "Krzyki", "Krzyki Górne", "Klecina", "Powstańców Śląskich", "Grabiszyn", "Borek",
    "Fabryczna", "Popowice", "Pilczyce", "Kuźniki", "Leśnica",
    "Psie Pole", "Zacisze", "Kowale", "Wojnów", "Zalesie",
    "Ołtaszyn", "Jagodno", "Wojszyce", "Brochów",
    "Plac Strzegomski", "Podwale", "Wybrzeże Wyspiańskiego", "Śródmieście",
]

TYPES = ["mieszkanie", "dom", "apartament", "loft", "kamienica", "kawalerka", "penthouse"]

# Image pool — real Unsplash photo IDs for real estate (interiors + exteriors)
IMAGE_POOL = [
    "photo-1502672023488-70e25813eb80", "photo-1560448204-e02f11c3d0e2",
    "photo-1505693416388-ac5ce068fe85", "photo-1568605114967-8130f3a36994",
    "photo-1583608205776-bfd35f0d9f83", "photo-1564013799919-ab600027ffc6",
    "photo-1522708323590-d24dbb6b0267", "photo-1554995207-c18c203602cb",
    "photo-1556909114-f6e7ad7d3136", "photo-1560185007-cde436f6a4d0",
    "photo-1560185127-6ed189bf02f4", "photo-1560185893-a55cbc8c57e8",
    "photo-1560448075-bb485b067938", "photo-1560448075-cbc16bb4af8e",
    "photo-1567496898669-ee935f5f647a", "photo-1565182999561-18d7dc61c393",
    "photo-1494526585095-c41746248156", "photo-1493809842364-78817add7ffb",
    "photo-1484154218962-a197022b5858", "photo-1480074568708-e7b720bb3f09",
    "photo-1512917774080-9991f1c4c750", "photo-1502005229762-cf1b2da7c5d6",
    "photo-1513584684374-8bab748fbf90", "photo-1505761671935-60b3a7427bad",
    "photo-1499916078039-922301b0eb9b", "photo-1486304873000-235643847519",
    "photo-1416331108676-a22ccb276e35", "photo-1502672260266-1c1ef2d93688",
    "photo-1554995207-c18c203602cb", "photo-1545324418-cc1a3fa10c00",
    "photo-1480796927426-f609979314bd", "photo-1505691938895-1758d7feb511",
    "photo-1506439773649-6e0eb8cfb237", "photo-1512917774080-9991f1c4c750",
    "photo-1519643381401-22c77e60520e", "photo-1517541866997-12c5cd4b1c2e",
    "photo-1493809842364-78817add7ffb", "photo-1525361992541-21a6dffea8b9",
    "photo-1531835551805-16d864c8d311", "photo-1535622554275-dc09b1ba1cdf",
    "photo-1536376072261-38c75010e6c9", "photo-1542621334-a254cf47733d",
    "photo-1543248939-ff40856f65d4", "photo-1549517045-bc93de075e53",
    "photo-1555041469-a586c61ea9bc", "photo-1556228720-195a672e8a03",
]

# Adjectives + nouns for variety in titles
ADJ_BY_TYPE = {
    "mieszkanie": ["Komfortowe", "Słoneczne", "Przestronne", "Ciche", "Nowoczesne", "Eleganckie", "Świetnie zaaranżowane", "Funkcjonalne"],
    "dom": ["Wolnostojący", "Bliźniaczy", "Szeregowy", "Nowoczesny", "Energooszczędny", "Eko-przyjazny", "Z dużym ogrodem", "Stylowy"],
    "apartament": ["Premium", "Designerski", "Z widokiem", "W kamienicy", "Pełen światła", "Z tarasem", "Z antresolą", "Z balkonem francuskim"],
    "loft": ["Postindustrialny", "Z wysokim sufitem", "Z odsłoniętą cegłą", "Designerski", "Artystyczny", "Otwarty", "Z antresolą", "Studio"],
    "kamienica": ["Przedwojenna", "Po renowacji", "Z oryginalnymi zdobieniami", "Secesyjna", "Z dużymi oknami", "Z parkietem dębowym", "Klasyczna"],
    "kawalerka": ["Idealna na start", "Funkcjonalna", "Świeżo wyremontowana", "Słoneczna", "Z aneksem kuchennym", "Mała ale praktyczna", "Studio"],
    "penthouse": ["Z ogromnym tarasem", "Z widokiem na Odrę", "Z prywatnym dachem", "Premium", "Z windą do mieszkania", "Z dwoma poziomami"],
}

FEATURES_POOL = {
    "common": ["Balkon", "Taras", "Parking podziemny", "Komórka lokatorska", "Klimatyzacja", "Domofon", "Miejsce postojowe", "Piwnica"],
    "premium": ["Sztukaterie", "Wysokie sufity", "Marmurowe podłogi", "Dębowy parkiet", "Kamin", "Garderoba", "Sauna w mieszkaniu", "Concierge 24/7"],
    "modern": ["Smart home", "Fotowoltaika", "Pompa ciepła", "Rekuperacja", "Wentylacja mechaniczna", "Inteligentny system grzewczy", "Karta dostępu", "Monitoring 24/7"],
    "garden": ["Ogród", "Taras zielony", "Patio", "Zielony dach", "Strefa BBQ", "Oczko wodne"],
    "luxury": ["Garaż 2-stanowiskowy", "Winda", "Recepcja", "Siłownia w budynku", "Strefa SPA", "Basen", "Sala konferencyjna", "Concierge"],
    "investor": ["Wysokie ROI", "Krótki termin najmu", "Rynkowe Yield 6%+", "Już wynajęte", "Stabilny najemca"],
}

SALE_DESC_TEMPLATES = [
    "{type_label} w {district}, jedna z najbardziej pożądanych dzielnic Wrocławia. {feature_text} Stan: {condition}. Idealna inwestycja długoterminowa lub miejsce do życia.",
    "Wyjątkowa propozycja w sercu {district}. {feature_text} Po {renowation}. Doskonała lokalizacja — w pobliżu komunikacja, sklepy, szkoły, parki.",
    "Polecam ofertę w spokojnej części {district}. {feature_text} Świetna ekspozycja okien, wysoka jakość wykończenia. Gotowe do wprowadzenia.",
    "Klimatyczna nieruchomość w {district}. {feature_text} {condition}. Dobra cena za m² na lokalnym rynku. Możliwość negocjacji.",
    "Nowoczesna nieruchomość w {district} — dla tych, którzy cenią detal i jakość. {feature_text} Niskie koszty eksploatacji.",
]

RENT_DESC_TEMPLATES = [
    "Do wynajęcia od zaraz w {district}. {feature_text} Czynsz najmu {rent_inc}. Idealne dla pracujących lub studiujących, blisko komunikacja miejska.",
    "Komfortowy najem w {district}. {feature_text} W cenie: {rent_inc}. Minimum najmu: 12 miesięcy. Kaucja: 1-miesięczna.",
    "{type_label} w {district} — w pełni wyposażone, gotowe do wprowadzenia. {feature_text} Czynsz administracyjny i media wg liczników.",
    "Wynajmę {type_label_lower} w prestiżowej części {district}. {feature_text} Tylko poważne oferty — preferowane długoterminowe umowy.",
    "Świeży najem w {district}. {feature_text} Lokal nie wymaga remontu, można wprowadzić się od ręki. Możliwość przedłużenia umowy.",
]

CONDITIONS = ["świetny", "wyremontowany", "po pełnej renowacji", "developerski", "wysoki standard", "deweloperski"]
RENOVATIONS = ["pełnej renowacji w 2024", "remoncie generalnym", "modernizacji", "developerskim wykończeniu"]
RENT_INCLUDES = ["mediów (woda, prąd, ogrzewanie wg licznika)", "prądu i wody", "wszystkich opłat poza prądem", "z wyłączeniem mediów", "internet w cenie"]
TYPE_LABELS = {
    "mieszkanie": "Mieszkanie", "dom": "Dom", "apartament": "Apartament",
    "loft": "Loft", "kamienica": "Mieszkanie w kamienicy",
    "kawalerka": "Kawalerka", "penthouse": "Penthouse"
}

def slugify(s):
    repl = {"ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z"}
    out = ""
    for ch in s.lower():
        out += repl.get(ch, ch)
    out = "".join(c if c.isalnum() else "-" for c in out)
    while "--" in out:
        out = out.replace("--", "-")
    return out.strip("-")

def gen_price_sale(ptype, area):
    # PLN/m² ranges by type
    pm2 = {
        "kawalerka": (10000, 14000),
        "mieszkanie": (10000, 17000),
        "apartament": (14000, 22000),
        "loft": (12000, 18000),
        "kamienica": (11000, 16000),
        "dom": (8000, 13000),
        "penthouse": (18000, 28000),
    }
    lo, hi = pm2[ptype]
    p = int(area * random.randint(lo, hi))
    # Round to 10000
    return round(p / 10000) * 10000

def gen_price_rent(ptype, area):
    # PLN/month/m²
    pm2 = {
        "kawalerka": (45, 70),
        "mieszkanie": (40, 70),
        "apartament": (60, 100),
        "loft": (55, 95),
        "kamienica": (55, 80),
        "dom": (35, 60),
        "penthouse": (90, 150),
    }
    lo, hi = pm2[ptype]
    p = int(area * random.randint(lo, hi))
    return round(p / 100) * 100  # round to 100

def gen_area(ptype):
    return {
        "kawalerka": random.randint(22, 35),
        "mieszkanie": random.randint(38, 85),
        "apartament": random.randint(60, 130),
        "loft": random.randint(55, 110),
        "kamienica": random.randint(60, 110),
        "dom": random.randint(120, 280),
        "penthouse": random.randint(110, 200),
    }[ptype]

def gen_beds(ptype, area):
    if ptype == "kawalerka": return 0
    if ptype == "dom":       return random.randint(3, 6)
    if ptype == "penthouse": return random.randint(3, 5)
    if area < 40:  return 1
    if area < 60:  return random.choice([1, 2])
    if area < 90:  return random.choice([2, 3])
    return random.choice([3, 4])

def gen_baths(ptype, beds, area):
    if ptype == "kawalerka": return 1
    if ptype == "dom" or ptype == "penthouse": return random.randint(2, 3)
    if area > 80: return random.choice([1, 2])
    return 1

def gen_year(ptype):
    if ptype == "kamienica": return random.randint(1880, 1939)
    if ptype == "loft":      return random.choice([random.randint(1920, 1960), random.randint(2018, 2024)])
    return random.randint(1995, 2024)

def pick_features(ptype, listing, beds, n=5):
    pools = ["common"]
    if ptype in ("apartament", "kamienica", "penthouse"):
        pools += ["premium", "luxury"]
    if ptype in ("dom", "apartament", "penthouse"):
        pools += ["modern", "garden"]
    if ptype == "loft":
        pools += ["modern", "premium"]
    if listing == "rent":
        pools += ["investor"]
    items = []
    for p in pools:
        items += FEATURES_POOL[p]
    items = list(dict.fromkeys(items))  # dedupe preserving order
    random.shuffle(items)
    return items[:n]

def gen_description(ptype, listing, district, features):
    feature_text = "Najważniejsze atuty: " + ", ".join(features[:3]).lower() + "."
    template = random.choice(SALE_DESC_TEMPLATES if listing == "sale" else RENT_DESC_TEMPLATES)
    return template.format(
        type_label=TYPE_LABELS[ptype],
        type_label_lower=TYPE_LABELS[ptype].lower(),
        district=district,
        feature_text=feature_text,
        condition=random.choice(CONDITIONS),
        renowation=random.choice(RENOVATIONS),
        rent_inc=random.choice(RENT_INCLUDES),
    )

def pick_images():
    return random.sample(IMAGE_POOL, 3)

def gen_title(ptype, district, beds, area, listing):
    adj = random.choice(ADJ_BY_TYPE[ptype])
    if ptype == "kawalerka":
        return f"{adj.lower().capitalize()} kawalerka {area}m² — {district}"
    if ptype == "dom":
        return f"{adj} dom {beds}-pok., {district}"
    if ptype == "penthouse":
        return f"Penthouse z tarasem — {district}"
    if ptype == "loft":
        return f"{adj} loft {area}m² — {district}"
    if ptype == "apartament":
        return f"Apartament {beds}-pok. {area}m² — {district}"
    if ptype == "kamienica":
        return f"{adj.lower().capitalize()} mieszkanie w kamienicy — {district}"
    return f"Mieszkanie {beds}-pok. {area}m² — {district}"

# --- Generation strategy ---
# For each district we add:
#   - At least 1 sale + 1 rent
#   - 2-5 properties total
# Then add bonus random ones to reach >= 110

properties = []
slug_seen = set()
type_dist_seen = set()

def add_prop(district, listing, ptype):
    area = gen_area(ptype)
    beds = gen_beds(ptype, area)
    baths = gen_baths(ptype, beds, area)
    year = gen_year(ptype)
    features = pick_features(ptype, listing, beds, n=random.randint(4, 7))
    title = gen_title(ptype, district, beds, area, listing)
    desc = gen_description(ptype, listing, district, features)
    base_slug = slugify(f"{ptype}-{district}-{beds}pok-{area}m")
    slug = base_slug
    n = 2
    while slug in slug_seen:
        slug = f"{base_slug}-{n}"
        n += 1
    slug_seen.add(slug)
    p = {
        "id": len(properties) + 1,
        "slug": slug,
        "title": title,
        "listing": listing,
        "type": ptype,
        "district": district,
        "price": gen_price_sale(ptype, area) if listing == "sale" else gen_price_rent(ptype, area),
        "beds": beds,
        "baths": baths,
        "area_m2": area,
        "year_built": year,
        "description": desc,
        "features": features,
        "images": pick_images(),
    }
    properties.append(p)

# Ensure every district has both sale+rent + variety
for district in DISTRICTS:
    # Pick which types fit this district (urban districts skip 'dom', suburbs prefer 'dom')
    urban = ["Stare Miasto","Plac Solny","Plac Powstańców","Wyspa Piasek","Nadodrze","Plac Strzegomski","Podwale","Wybrzeże Wyspiańskiego","Śródmieście"]
    suburban = ["Karłowice","Sępolno","Biskupin","Bartoszowice","Zacisze","Kowale","Wojnów","Zalesie","Ołtaszyn","Jagodno","Wojszyce","Brochów","Klecina","Pilczyce","Kuźniki","Leśnica"]
    
    if district in urban:
        type_options_sale = ["apartament", "kamienica", "loft", "mieszkanie", "penthouse"]
        type_options_rent = ["apartament", "kamienica", "kawalerka", "mieszkanie", "loft"]
    elif district in suburban:
        type_options_sale = ["dom", "mieszkanie", "apartament", "kawalerka"]
        type_options_rent = ["dom", "mieszkanie", "kawalerka"]
    else:
        type_options_sale = ["mieszkanie", "apartament", "kawalerka", "loft"]
        type_options_rent = ["mieszkanie", "kawalerka", "apartament"]
    
    # 1-3 sale
    n_sale = random.randint(1, 3)
    sale_types = random.sample(type_options_sale, min(n_sale, len(type_options_sale)))
    for t in sale_types:
        add_prop(district, "sale", t)
    
    # 1-2 rent
    n_rent = random.randint(1, 2)
    rent_types = random.sample(type_options_rent, min(n_rent, len(type_options_rent)))
    for t in rent_types:
        add_prop(district, "rent", t)

print(f"Generated {len(properties)} properties", file=__import__("sys").stderr)

# Stats
from collections import Counter
districts_count = Counter(p["district"] for p in properties)
listings_count = Counter(p["listing"] for p in properties)
types_count = Counter(p["type"] for p in properties)
print(f"Districts: {dict(districts_count)}", file=__import__("sys").stderr)
print(f"Listings: {dict(listings_count)}", file=__import__("sys").stderr)
print(f"Types: {dict(types_count)}", file=__import__("sys").stderr)

# Verify every district has both
missing = []
for d in DISTRICTS:
    listings = set(p["listing"] for p in properties if p["district"] == d)
    if "sale" not in listings: missing.append(f"{d}: missing sale")
    if "rent" not in listings: missing.append(f"{d}: missing rent")
if missing:
    print("MISSING:", missing, file=__import__("sys").stderr)
    raise SystemExit(1)

# --- Emit TS file ---
ts_lines = [
    "/**",
    f" * {len(properties)} nieruchomości w katalogu Dom Expert. Wrocław.",
    " * Auto-generated — every district has both sale + rent across multiple types.",
    " */",
    "",
    'export type PropertyType = "mieszkanie" | "dom" | "apartament" | "loft" | "kamienica" | "kawalerka" | "penthouse";',
    'export type Listing = "sale" | "rent";',
    "",
    "export type Property = {",
    "  id: number;",
    "  slug: string;",
    "  title: string;",
    "  listing: Listing;",
    "  type: PropertyType;",
    "  district: string;",
    "  price: number;",
    "  beds: number;",
    "  baths: number;",
    "  area_m2: number;",
    "  year_built: number;",
    "  description: string;",
    "  features: string[];",
    "  images: string[];",
    "};",
    "",
    "const u = (id: string, w = 1200, q = 80) =>",
    "  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;",
    "",
    "export const PROPERTIES: Property[] = [",
]
for p in properties:
    images_inline = ", ".join(f'u("{img}")' for img in p["images"])
    features_inline = ", ".join(json.dumps(f, ensure_ascii=False) for f in p["features"])
    title_q = json.dumps(p["title"], ensure_ascii=False)
    desc_q = json.dumps(p["description"], ensure_ascii=False)
    district_q = json.dumps(p["district"], ensure_ascii=False)
    slug_q = json.dumps(p["slug"], ensure_ascii=False)
    price_str = "{:_}".format(p["price"]).replace(",", "_")
    ts_lines.append("  {")
    ts_lines.append(f"    id: {p['id']}, slug: {slug_q},")
    ts_lines.append(f"    title: {title_q},")
    ts_lines.append(f'    listing: "{p["listing"]}", type: "{p["type"]}",')
    ts_lines.append(f"    district: {district_q}, price: {price_str},")
    ts_lines.append(f"    beds: {p['beds']}, baths: {p['baths']}, area_m2: {p['area_m2']}, year_built: {p['year_built']},")
    ts_lines.append(f"    description: {desc_q},")
    ts_lines.append(f"    features: [{features_inline}],")
    ts_lines.append(f"    images: [{images_inline}],")
    ts_lines.append("  },")
ts_lines.append("];")
ts_lines.append("")

# Constants
ts_lines.append('export const PROPERTY_TYPES: PropertyType[] = ["mieszkanie", "dom", "apartament", "loft", "kamienica", "kawalerka", "penthouse"];')
ts_lines.append("")
districts_sorted = sorted({p["district"] for p in properties})
districts_inline = ", ".join(json.dumps(d, ensure_ascii=False) for d in districts_sorted)
ts_lines.append(f"export const DISTRICTS: string[] = [{districts_inline}];")
ts_lines.append("")

print("\n".join(ts_lines))
