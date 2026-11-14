// All site copy lives here. Facts are taken from elitemasterpainting.com.au;
// the real estate / rent roll / systems / first-response positioning comes from
// the REINE brief. Anything still needing a client figure is marked TODO.

export const business = {
  name: "Elite Master Painting",
  owner: "Mark",
  tagline: "Premium interior & exterior painting, done properly.",
  shortTagline: "Painting for homes, agencies and rent rolls across Melbourne.",
  phone: "+61 415 751 399",
  phoneHref: "tel:+61415751399",
  whatsapp: "https://wa.me/61415751399",
  email: "Elitemasterpainting@hotmail.com",
  abn: "86 736 530 684",
  location: "Melbourne, VIC",
  serviceArea: "Melbourne, the Mornington Peninsula, Geelong and regional Victoria",
  googleReviews:
    "https://www.google.com/maps/place/Elite+Master+Painting/@-37.7364818,145.0559147,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad64529233dbfcf:0x962b97a372028d93!8m2!3d-37.7364818!4d145.0584896!16s%2Fg%2F11wh_476b6",
  rating: "5.0",
  reviewCount: 15,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Areas", href: "/areas" },
  { label: "Projects", href: "/projects" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  level: string;
  idealFor: string;
  summary: string;
  image: string;
  facts: { timeframe: string; idealFor: string; included: string; price: string; disruption: string };
  blocks: { title: string; text: string; image: string }[];
};

export const services: Service[] = [
  {
    slug: "real-estate-rent-rolls",
    name: "Real Estate & Rent Rolls",
    short: "Real Estate",
    level: "Agencies & property managers",
    idealFor: "Property managers, agencies, landlords",
    summary:
      "End-of-lease repaints and whole rent roll programs, quoted digitally, reported clearly and turned around between tenants.",
    image: "/images/real-estate-2.webp",
    facts: {
      timeframe: "Most rooms 1–2 days. Booked around your vacancy window.",
      idealFor: "Property managers, real estate agencies, landlords",
      included:
        "Digital quote to approve, before & after photo report, one point of contact, paint, protection and clean-up.",
      price: "Fixed per property. Volume pricing across a rent roll.",
      disruption: "Low. Vacant or tenanted",
    },
    blocks: [
      {
        title: "What it is",
        text: "Painting built around how agencies actually work. A vacancy needs turning around fast, an owner needs to see what they paid for, and a property manager needs one person who picks up the phone. We quote digitally so you can approve from your desk, book the job around your vacancy window, and send a photo report you can forward straight to the landlord.",
        image: "/images/real-estate.webp",
      },
      {
        title: "How a job runs",
        text: "You send the address and access details. We inspect, then send an itemised digital quote, usually within a day. Once approved, the property is protected, prepared and painted, with progress updates as we go. When it is done you get before and after photos and a short report, formatted for the owner.",
        image: "/images/blk-living.webp",
      },
      {
        title: "Who it's for",
        text: "Property managers looking after a single listing or an entire rent roll, agencies who want one reliable painter across every property, and landlords who want their investment presented properly between tenants. First response is the standard: enquiries are picked up fast, and you are never left chasing an update.",
        image: "/images/new-build.webp",
      },
    ],
  },
  {
    slug: "interiors",
    name: "Interiors",
    short: "Interiors",
    level: "Homes, period homes & apartments",
    idealFor: "Homeowners, period homes, new builds, apartments",
    summary:
      "Walls, ceilings, ornate cornices and joinery. Prepared properly and finished clean, from period homes to new builds.",
    image: "/images/interiors.webp",
    facts: {
      timeframe: "1–2 days per room, including preparation",
      idealFor: "Period homes, new builds, apartments",
      included: "Paint, protection, filling, sanding, priming and daily clean-up. Usually two coats.",
      price: "$450–$1,200 per room",
      disruption: "Low. Stay home",
    },
    blocks: [
      {
        title: "What it is",
        text: "Walls, ceilings, ornate cornices and joinery. Ornate plaster asks for a careful hand: cornices and ceiling roses cut in with a brush because a roller cannot follow the moulding, cracks plastered and sanded back rather than painted over, and the original detail kept sharp against the wall colour.",
        image: "/images/ornate.webp",
      },
      {
        title: "How a job runs",
        text: "A house taken through in one go, room by room, while the owners keep living in it. Walls, ceilings, doors, window frames and skirtings, with the furniture sheeted where it stands and the floors boarded before a tin is opened.",
        image: "/images/reno-kitchen.webp",
      },
      {
        title: "Who it's for",
        text: "Period homes in Armadale, St Kilda, Brighton and Oakleigh, new builds taken from raw plaster to finished, and older apartments where every crack is patched and made good before the colour goes on.",
        image: "/images/stairs.webp",
      },
    ],
  },
  {
    slug: "exteriors",
    name: "Exteriors",
    short: "Exteriors",
    level: "Weatherboard, render & brick",
    idealFor: "Victorian, Edwardian, weatherboard and modern homes",
    summary:
      "Weatherboard, render and brick, plus fascia, eaves, decks and doors. Prepared properly and finished to last through Melbourne weather.",
    image: "/images/exteriors.webp",
    facts: {
      timeframe: "5–8 days for a full exterior, weather permitting",
      idealFor: "Period, weatherboard and modern homes",
      included: "Washing, scraping, filling, priming, two topcoats, trims, fascia and eaves.",
      price: "$5,500–$12,000 single storey",
      disruption: "Minimal. Outside only",
    },
    blocks: [
      {
        title: "What it is",
        text: "Weatherboard, render and brick, along with the fascia, eaves and gutters that go with them. Older homes ask for a careful hand: ornate trim cut in by hand, tired surfaces prepared rather than painted over, and the original character kept intact.",
        image: "/images/facade.webp",
      },
      {
        title: "How a job runs",
        text: "Surfaces washed and prepared, cracks filled, then primed and finished in two topcoats. Metal takes its own system: doors and steel are machine sanded, given a metal undercoat and finished with two topcoats so they do not chalk and streak a few summers in.",
        image: "/images/wb-after.webp",
      },
      {
        title: "Who it's for",
        text: "Victorian terraces, Edwardian and weatherboard homes, modern render facades, and the decks and verandahs that take the most weather and get the least attention.",
        image: "/images/deck-after.webp",
      },
    ],
  },
  {
    slug: "roofs-floors",
    name: "Roofs & Floors",
    short: "Roofs & Floors",
    level: "Tile roofs, garages & driveways",
    idealFor: "Tile roofs, garage floors, driveways",
    summary:
      "Tile roofs washed back under high pressure and resprayed, and concrete floors opened up and finished in floor-grade coatings.",
    image: "/images/roofs.webp",
    facts: {
      timeframe: "Quoted on site after inspection",
      idealFor: "Tile roofs, garage floors, driveways",
      included: "High-pressure clean, primer and two sprayed topcoats. Eaves and fascia to match.",
      price: "Fixed after site visit",
      disruption: "Minimal. Outside only",
    },
    blocks: [
      {
        title: "What it is",
        text: "Paint only lasts on a roof that was prepared for it. Before any colour goes on, the tiles are cleaned back under high pressure, stripping years of moss, lichen and chalked-out surface so the new finish has something sound to hold to.",
        image: "/images/roofs.webp",
      },
      {
        title: "How a job runs",
        text: "One coat of primer straight onto the cleaned tiles, then two topcoats. Three coats in total, sprayed rather than rolled, because a sprayer reaches the profile and overlaps of a tile evenly where a roller leaves thin edges that fail first.",
        image: "/images/hero-poster.jpg",
      },
      {
        title: "Who it's for",
        text: "Tired tile roofs that are ageing the whole house, and concrete garage floors and driveways, washed back with acid until the surface will hold a coating, then finished in a floor-grade paint built to carry a car.",
        image: "/images/floor.webp",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    short: "Commercial",
    level: "Shops, schools & offices",
    idealFor: "Shops, service stations, schools, offices, community buildings",
    summary:
      "Worked in stages or overnight so the doors open on time. $20M public liability, safety cards and lift licences in order before day one.",
    image: "/images/commercial.webp",
    facts: {
      timeframe: "Staged around trading hours, or overnight",
      idealFor: "Retail, schools, offices, community buildings",
      included: "Staged program, boom and scissor lift access, site paperwork, metal and render systems.",
      price: "Staged, fixed quote",
      disruption: "Minimal. After hours available",
    },
    blocks: [
      {
        title: "What it is",
        text: "Shops, service stations, offices, schools and community buildings, worked in stages or overnight so the doors open on time. High walls are reached from a boom lift, and the site paperwork is in order before the first day.",
        image: "/images/commercial.webp",
      },
      {
        title: "How a job runs",
        text: "Every job is painted around somebody's trading hours. Access is planned around the working day, high sections are reached from a lift rather than staged off the footpath, and public buildings stay open with entrances and walkways kept usable.",
        image: "/images/office.webp",
      },
      {
        title: "Who it's for",
        text: "Retail and franchise sites, occupied office buildings, schools worked around term times, and community buildings that stay open to the public while the work is on.",
        image: "/images/school.webp",
      },
    ],
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years painting" },
  { value: 5, suffix: ".0", label: "Google rating" },
  { value: 20, prefix: "$", suffix: "M", label: "Public liability" },
  { value: 7, suffix: " yr", label: "Workmanship warranty" },
];

export const whyAgencies = [
  {
    title: "Rent roll ready",
    text: "One painter across your whole portfolio. End-of-lease repaints turned around inside your vacancy window.",
  },
  {
    title: "Digital quoting",
    text: "Itemised, fixed quotes sent digitally, usually within a day. Approve from your desk, no site meeting needed.",
  },
  {
    title: "Easy reporting",
    text: "Before and after photos and a clear job report on every property, ready to forward to the owner.",
  },
  {
    title: "First response",
    text: "Enquiries picked up fast and updates sent as we go, backed by systems built so you never chase us.",
  },
];

export const ownerQuote = {
  text: "Anyone can apply paint. What separates a finish that lasts fifteen years from one that fails in three is everything that happens before the first coat. I treat every job as if the next client is watching, and more often than not, they are.",
  name: "Mark",
  role: "Owner — 15+ Years Painting Melbourne",
  image: "/images/mark.webp",
};

export const rentRollPrograms = {
  banner: {
    title: "First response. Every enquiry.",
    text: "Digital quotes, usually within a day. No site meeting needed to get started.",
    checks: ["Digital Quotes", "Photo Reports", "One Point Of Contact"],
  },
  tiers: [
    {
      name: "End of Lease",
      price: "$450",
      unit: "/room from",
      text: "Touch-ups to full room repaints, turned around between tenants.",
    },
    {
      name: "Full Vacancy",
      price: "Fixed",
      unit: "/property",
      text: "Walls, ceilings, doors and trims throughout, ready for the next listing.",
    },
    {
      name: "Rent Roll Program",
      price: "Volume",
      unit: "/pricing",
      text: "One painter across your portfolio, with reporting built in.",
      popular: true,
    },
  ],
};

export const faqs: [string, string][] = [
  [
    "How long will my project take?",
    "Most interior rooms take one to two days including preparation. Smaller projects are usually finished within five days, larger ones up to around ten, depending on the size of the home and the size of the team. A full exterior repaint typically runs five to eight days depending on size and weather.",
  ],
  [
    "Will the final price be higher than the quote?",
    "No. The price we give you after inspecting the job is the final price. We take a day or two to work it out properly beforehand, precisely so nothing needs recalculating later. In the rare case something genuinely unforeseeable turns up, we raise it with you straight away, never at the end.",
  ],
  [
    "Do you work with real estate agencies and rent rolls?",
    "Yes. We quote digitally, book around vacancy windows, and send before and after photos with a short report you can forward to the owner. One point of contact across every property on your rent roll.",
  ],
  [
    "Do I need to move out during the work?",
    "Usually not. We work room by room and air out the space well, so most clients stay home comfortably. Some jobs, like oil-based paint on doors and windows, carry a stronger smell, and it's always your call whether to step out for a day or two, especially with young children, elderly family or pets.",
  ],
  [
    "How do you protect my furniture and floors?",
    "Before we open a single tin, everything is covered: drop sheets over floors and carpet, and furniture, TVs and fixtures protected. Nothing is left uncovered. We also tidy the work area and clean our tools at the end of every day, not just at the end of the job.",
  ],
  [
    "What paint brands do you use?",
    "We work mainly with Dulux and other trusted Australian brands, chosen for washability, colour retention and durability. We're happy to talk through options during your quote.",
  ],
  [
    "Do you provide a warranty?",
    "Yes, seven years on our workmanship. If a problem comes from how the paint was applied, that's our responsibility and we'll put it right. Issues caused by the building itself sit outside painting, and any fault in the paint itself is covered by the manufacturer's own warranty.",
  ],
  [
    "Are you insured?",
    "Yes. We carry $20M public liability insurance, so in the unlikely event something is damaged, you're fully covered. Documentation is provided before work begins.",
  ],
];

export const process = [
  { title: "Consultation", text: "We look at the space and talk through what you need." },
  { title: "Detailed quote", text: "A fixed price, in writing and sent digitally, before anything starts." },
  { title: "Protection", text: "Furniture and floors covered and masked before any dust or sanding begins." },
  { title: "Surface preparation", text: "Cleaning, filling, sanding and priming: the part that actually matters." },
  { title: "Painting", text: "Premium materials, careful application, daily clean-up." },
  { title: "Walkthrough & report", text: "We go through the finished job together, with photos for your records." },
];

export type Project = { suburb: string; title: string; text: string; image: string; service: string };

export const projects: Project[] = [
  {
    suburb: "Brighton",
    title: "Period home, ornate plaster kept crisp",
    text: "Rooms taken to a deep blue grey, with panelled ceilings, deep cornices and the ceiling rose held in white and cut in by hand.",
    image: "/images/interiors.webp",
    service: "interiors",
  },
  {
    suburb: "Carlton",
    title: "Lancarr House, Victorian terrace",
    text: "Heritage cream with the cast iron lace, verandah posts and panelled front door picked out in deep oxide red.",
    image: "/images/facade.webp",
    service: "exteriors",
  },
  {
    suburb: "Footscray",
    title: "Two storey office, beige to graphite",
    text: "The full outside of an occupied office building, upper sections reached from a boom lift while the building kept working.",
    image: "/images/office.webp",
    service: "commercial",
  },
  {
    suburb: "Preston",
    title: "Apartment repainted throughout",
    text: "Damage patched and made good first, then ceilings, walls, frames and skirtings in a warm greige with white trims.",
    image: "/images/real-estate.webp",
    service: "real-estate-rent-rolls",
  },
  {
    suburb: "Essendon",
    title: "School entrance colonnade",
    text: "New steel columns finished in a run of colours, metal system from primer to topcoat, worked around the timetable.",
    image: "/images/school.webp",
    service: "commercial",
  },
  {
    suburb: "Melton",
    title: "New home, finished before move-in",
    text: "Walls, ceilings, doors and trims in a warm off white. First coat sprayed, second rolled by hand for an even finish.",
    image: "/images/new-build.webp",
    service: "interiors",
  },
];

export const areas = [
  {
    region: "Inner East & Bayside",
    note: "Period housing",
    suburbs: [
      { name: "Brighton", text: "Ornate plaster, cedar bifolds stained and sealed" },
      { name: "Malvern", text: "Plaster detail, high ceilings, old timber windows" },
      { name: "Armadale", text: "Old house taken back to sound plaster" },
      { name: "St Kilda", text: "Victorian rooms and a leadlight stair hall" },
    ],
  },
  {
    region: "West",
    note: "Weatherboard & render",
    suburbs: [
      { name: "Footscray", text: "Two storey office, beige to graphite" },
      { name: "Yarraville", text: "Period verandah floor taken to charcoal" },
      { name: "Williamstown", text: "Weatherboard taking the weather off the bay" },
      { name: "Point Cook", text: "Community decking, ramps and stairs recoated" },
    ],
  },
  {
    region: "North",
    note: "Apartments & schools",
    suburbs: [
      { name: "Preston", text: "Apartment repainted throughout" },
      { name: "Essendon", text: "School colonnade in a metal system" },
      { name: "Carlton", text: "Lancarr House, Victorian terrace" },
      { name: "Alphington", text: "Rooftop deck stripped and recoated" },
    ],
  },
  {
    region: "Growth Corridors",
    note: "First repaints & builders",
    suburbs: [
      { name: "Melton", text: "New home finished before move-in" },
      { name: "Tarneit", text: "Six-year-old homes hitting their first repaint" },
      { name: "Clyde North", text: "Builder programs held to schedule" },
      { name: "Berwick", text: "Interiors and exteriors" },
    ],
  },
  {
    region: "North East & Hills",
    note: "Damp, moss & roofs",
    suburbs: [
      { name: "Eltham", text: "Roof washes before wall work" },
      { name: "Ringwood", text: "Interiors and exteriors" },
      { name: "Ferntree Gully", text: "White to deep olive, inside and out" },
      { name: "Doncaster", text: "Floating hardwood staircase stained and sealed" },
    ],
  },
  {
    region: "Peninsula & Regional",
    note: "Salt air & commercial",
    suburbs: [
      { name: "Frankston", text: "Exteriors built for salt air" },
      { name: "Mornington", text: "Coastal exteriors" },
      { name: "Geelong", text: "Homes and commercial sites" },
      { name: "Ballarat", text: "Bottle shop ceiling sprayed overnight" },
    ],
  },
];

export const pricing = {
  tabs: ["Homeowners", "Agencies & Rent Rolls", "Commercial"] as const,
  plans: {
    Homeowners: [
      { name: "Single Room", price: "$450", unit: "–$1,200", text: "Walls, ceiling and trims, prepared and finished in two coats." },
      { name: "3-Bed Interior", price: "$4,500", unit: "–$9,000", text: "A whole interior taken through room by room while you live in it." },
      { name: "Single-Storey Exterior", price: "$5,500", unit: "–$12,000", text: "Weatherboard, render or brick, with fascia, eaves and trims.", popular: true },
    ],
    "Agencies & Rent Rolls": [
      { name: "End of Lease", price: "$450", unit: "/room from", text: "Touch-ups to full room repaints, turned around between tenants." },
      { name: "Full Vacancy", price: "Fixed", unit: "/property", text: "Walls, ceilings, doors and trims throughout, ready for the next listing." },
      { name: "Rent Roll Program", price: "Volume", unit: "/pricing", text: "One painter across your portfolio, with reporting built in.", popular: true },
    ],
    Commercial: [
      { name: "Retail & Franchise", price: "Staged", unit: "/fixed quote", text: "Worked around trading so the doors open on time." },
      { name: "Offices & Buildings", price: "Staged", unit: "/fixed quote", text: "High walls from a boom lift while the building keeps working." },
      { name: "Schools & Community", price: "Staged", unit: "/fixed quote", text: "Worked around term times and public access.", popular: true },
    ],
  },
  compare: {
    columns: ["Homeowners", "Agencies", "Commercial"],
    groups: [
      {
        name: "Quoting",
        rows: [
          ["Fixed written quote", "✓", "✓", "✓"],
          ["Digital quote to approve", "✓", "✓", "✓"],
          ["Quote turnaround", "Usually 1 day", "Usually 1 day", "Staged"],
          ["Volume pricing", "—", "✓", "✓"],
        ],
      },
      {
        name: "On the job",
        rows: [
          ["Paint, protection & clean-up included", "✓", "✓", "✓"],
          ["Vacancy-window scheduling", "—", "✓", "—"],
          ["After-hours & staged work", "—", "On request", "✓"],
          ["One point of contact", "✓", "✓", "✓"],
        ],
      },
      {
        name: "Reporting",
        rows: [
          ["Before & after photos", "✓", "✓", "✓"],
          ["Owner-ready job report", "—", "✓", "✓"],
          ["Progress updates", "✓", "✓", "✓"],
        ],
      },
      {
        name: "Cover",
        rows: [
          ["$20M public liability", "✓", "✓", "✓"],
          ["Workmanship warranty", "7 years", "7 years", "7 years"],
          ["Insurance docs before start", "✓", "✓", "✓"],
        ],
      },
    ],
  },
};
