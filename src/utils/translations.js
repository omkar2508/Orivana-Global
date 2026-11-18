// All site copy is taken from the Orivana Global company brochure (Vision 2026-40).
// English is the source language. The other languages translate the navigation only and
// fall back to the English brochure copy for everything else (see `withFallback` below).

const en = {
  nav: {
    home: "Home",
    location: "Location",
    projects: "Projects",
    investment: "Investment",
    about: "About Us",
    contact: "Contact",
    enquireNow: "Book a Site Visit",
  },

  common: {
    confidential: "Private & Confidential",
    requestPack: "Request the information pack",
    bookVisit: "Book a private site visit",
    sampleTermSheet: "Sample term sheet",
    investorPreview: "Investor preview",
    partnership: "In partnership with Avishkar Infra",
  },

  hero: {
    badge: "Orivana Global City",
    title: "Where the next",
    titleHighlight: "city",
    titleEnd: "takes off.",
    description:
      "A 600-acre integrated township · 05 minutes from Navi Mumbai International Airport",
    primary: "Book a private site visit",
    secondary: "Explore the township",
    scroll: "Scroll",
  },

  glance: {
    badge: "At a glance",
    title: "A piece of land is a promise.",
    text: "Here, it comes with a master plan, a partner who builds townships, and your name on the title.",
    points: [
      { title: "A master plan", text: "600 acres, one master plan, 60 million sq.ft. planned." },
      { title: "A partner who builds townships", text: "Orivana Global with project partner Avishkar Infra." },
      { title: "Your name on the title", text: "Registered on the 7/12 land-title extract." },
    ],
  },

  vision: {
    badge: "Vision 2026–40",
    title: "Development scale & strategic targets.",
    intro: "Fifteen years, five numbers. A land platform that becomes a city — and a group that grows with it.",
    stats: [
      { prefix: "", num: 600, suffix: "", unit: "acres", label: "Land area", sub: "Navi Mumbai 300 ac · Third Mumbai 300 ac" },
      { prefix: "", num: 60, suffix: "M", unit: "sq.ft.", label: "Development", sub: "Commercial & residential" },
      { prefix: "$", num: 12, suffix: "Bn", unit: "", label: "Asset value", sub: "Est. commercial assets value" },
      { prefix: "", num: 12000, suffix: "+", unit: "", label: "Jobs", sub: "Employment creation" },
      { prefix: "$", num: 1, suffix: "Bn", unit: "", label: "Group valuation", sub: "Vision 2026–40 target" },
    ],
    note: "Targets as stated by Orivana Global Pvt. Ltd. (Vision 2026–40).",
  },

  quickLocation: {
    badge: "The opportunity · The growth corridor",
    title: "The city's smartest entry strategy.",
    intro: "Orivana Global City, 600 acres, sits inside the Navi Mumbai growth corridor.",
    times: [
      { value: "05", label: "Navi Mumbai Int'l Airport & Aero City" },
      { value: "15", label: "Mumbai–Pune Expressway" },
      { value: "15", label: "JNPT Port · DFC & JNPT highway" },
      { value: "25", label: "South Mumbai via Atal Setu (MTHL)" },
    ],
    min: "min",
    corridors: [
      "Alibag–Virar Multi-Modal Corridor",
      "Airport-to-Airport Metro & Navi Mumbai–Alibaug coastal road",
    ],
    note: "Schematic — not to scale. Travel times as stated by Orivana Global Pvt. Ltd.; indicative.",
    cta: "See the full location",
  },

  homeCta: {
    title: "Walk the land with us.",
    text: "Request the information pack, book a site visit, or ask for a sample term sheet.",
    button: "Contact us",
  },

  // ---------------- Location page ----------------
  locationPage: {
    header: { title: "Where the", highlight: "township sits", subtitle: "Two parcels, one corridor: Navi Mumbai and Third Mumbai, around the new airport." },
    connectivity: {
      badge: "Location",
      title: "Connected to everything that matters.",
      intro: "Travel times as stated by Orivana Global Pvt. Ltd.; indicative, subject to route and traffic.",
    },
    project1: {
      badge: "Location · Project 1 · Navi Mumbai · 300 acres",
      title: "Where the township sits.",
      text: "Proposed township site · Navi Mumbai · 300 acres · 05 mins from NMIA · 25 mins from Mumbai · 15 mins from Mumbai–Pune Expressway",
      rows: [
        { time: "05 min", name: "Navi Mumbai International Airport", desc: "Ulwe-side passenger entry · ~5 km access (as stated) · site ~2 km from the NMIA boundary (map)" },
        { time: "05 min", name: "Atal Setu (MTHL) · Chirle interchange", desc: "Direct link to South Mumbai" },
        { time: "15 min", name: "JNPT port · NH-348", desc: "JNPT highway · freight corridor" },
        { time: "15 min", name: "Mumbai–Pune Expressway", desc: "Via Panvel" },
        { time: "25 min", name: "South Mumbai", desc: "Over Atal Setu" },
        { time: "12 min", name: "Belapur · CBD", desc: "" },
      ],
      site: "Panvel taluka · adjoining Pushpak Nagar (CIDCO) · township entry 7 km from Atal Setu · site outline 307.5 acres from the acquisition phasing plan (July 2026)",
    },
    project2: {
      badge: "Location · Project 2 · Third Mumbai · 300 acres",
      title: "Where the second township sits.",
      text: "Proposed township site · Uran taluka, Raigad · 300 acres · south-east of the Chirle interchange, south of NMIA · beside Karnala Bird Sanctuary and the Mumbai–Goa NH-66",
      rows: [
        { time: "~12 km", name: "Navi Mumbai International Airport", desc: "map distance · indicative" },
        { time: "~6 km", name: "Atal Setu (MTHL) · Chirle interchange", desc: "via NH-348 & the village road · road distance" },
        { time: "~12 km", name: "JNPT / Sheva port", desc: "NH-348 · map distance · indicative" },
        { time: "~18 km", name: "Panvel", desc: "map distance · indicative" },
        { time: "~42 km", name: "South Mumbai", desc: "map distance · indicative" },
        { time: "~18 km", name: "CBD Belapur", desc: "Navi Mumbai business district · derived estimate" },
      ],
      site: "Site outline 290.6 acres from the master layout (July 2026); placement indicative. Distances are measured on the map and are indicative; the deck states no travel times for the Third Mumbai parcel.",
    },
    mapNote: "Schematic maps in the brochure use OpenStreetMap data (© OpenStreetMap contributors, ODbL); planned alignments indicative; not for navigation.",
    infra: {
      badge: "Infrastructure catalysts",
      title: "Every catalyst is either built or under way.",
      intro: "The infrastructure that is transforming Navi Mumbai is still being delivered — and the township sits within minutes of all of it.",
      items: [
        { title: "Navi Mumbai International Airport & Aero City", text: "Global air-connectivity hub — five minutes from the township." },
        { title: "Mumbai Trans-Harbour Link (Atal Setu)", text: "Direct access to South Mumbai — twenty-five minutes." },
        { title: "Alibag–Virar Multi-Modal Corridor", text: "Seamless regional connectivity across the metropolitan region." },
        { title: "Delhi–Mumbai DFC & JNPT Highway", text: "Logistics & freight advantage — port and freight-corridor linked." },
        { title: "Mumbai Airport – Navi Mumbai Airport Metro", text: "Airport-to-airport connectivity." },
        { title: "Navi Mumbai – Alibaug Coastal Road", text: "Quick connectivity to Alibaug and the coast." },
      ],
      note: "Six catalysts, all government infrastructure — either commissioned or under construction — each within minutes of the township.",
    },
    third: {
      badge: "Third Mumbai Vision City · Government vision",
      title: "Next door to a city being planned from scratch.",
      intro: "Third Mumbai Vision City is planned as a cluster of specialised cities around the new airport — six sectors, one region, one runway.",
      landLabel: "Proposed land area in this region",
      land: "300 acres",
      landSub: "Orivana Estate II Pvt. Ltd. · Third Mumbai · 29.95 M sq.ft. saleable (est.)",
      sectors: [
        { title: "Innovation City", text: "Research, start-ups and new-economy campuses" },
        { title: "Healthcare City", text: "Hospitals, medical education and wellness" },
        { title: "Sports City", text: "Stadia, training and sports infrastructure" },
        { title: "Edu City", text: "Schools, universities and institutions" },
        { title: "IT Hub & Data Center", text: "Technology parks and data infrastructure" },
        { title: "Cargo & Logistics Hub", text: "Airport- and port-linked logistics" },
      ],
      note: "Sector cities as named in Orivana's deck; one-line descriptions are indicative of the sector, not official project scopes.",
    },
  },

  // ---------------- Projects page ----------------
  projectsPage: {
    header: { title: "The", highlight: "township", subtitle: "Orivana Global City is planned as a complete address — 600 acres, one master plan, and sixty million square feet of the things a city is made of." },
    build: {
      badge: "The township · What we build",
      title: "A city to work, stay, heal and live in.",
      items: [
        { title: "Business hub", text: "IT campuses, offices, retail and education — the commercial core of the township." },
        { title: "Hotels", text: "Hospitality at the airport's doorstep — for the visitors the new airport brings." },
        { title: "Healthcare", text: "A global healthcare & wellness complex." },
        { title: "Residential", text: "Premium multi-storied neighbourhoods — 15.80 M sq.ft. Navi Mumbai · 21.73 M sq.ft. Third Mumbai." },
        { title: "Villas", text: "Plotted villa & bungalow precincts — low-density homes on the quiet side of the city." },
      ],
      public: "Planned social public spaces — plazas, promenades, waterfront walks, parks, community squares and cultural & entertainment zones (planned; subject to master-planning). Commercial-led in Navi Mumbai; residential-led in Third Mumbai.",
    },
    projects: {
      badge: "600 acres · Two projects",
      title: "Navi Mumbai & Third Mumbai · 59.9 M sq.ft. planned.",
      items: [
        {
          tag: "Project 1",
          name: "Navi Mumbai",
          acres: "300 acres",
          commercial: "14.15 M sq.ft.",
          commercialPct: "~47%",
          residential: "15.80 M sq.ft.",
          residentialPct: "~53%",
          saleable: "29.95 M sq.ft. saleable (est.)",
          pctC: 47,
        },
        {
          tag: "Project 2",
          name: "Third Mumbai",
          acres: "300 acres",
          commercial: "8.23 M sq.ft.",
          commercialPct: "~27%",
          residential: "21.73 M sq.ft.",
          residentialPct: "~73%",
          saleable: "29.95 M sq.ft. saleable (est.)",
          pctC: 27,
        },
      ],
      commercialLabel: "Commercial",
      residentialLabel: "Residential",
      commercialDesc: "Commercial — IT · hospitality · healthcare · education · retail",
      residentialDesc: "Residential — multi-storied buildings · villa & bungalow plots",
    },
    overview: {
      badge: "Development overview · What we are building",
      title: "Sixty million square feet, planned as one.",
      intro: "Two development areas, one master plan — commercial-led in Navi Mumbai, residential-led in Third Mumbai.",
      stats: [
        { num: 59.9, decimals: 1, suffix: "M sq.ft.", label: "Total saleable (est.)" },
        { num: 22.38, decimals: 2, suffix: "M", label: "Commercial sq.ft." },
        { num: 37.53, decimals: 2, suffix: "M", label: "Residential sq.ft." },
        { num: 2, decimals: 0, suffix: " areas", label: "300 ac + 300 ac" },
      ],
      mixTitle: "Product mix",
      mix: [
        { group: "Commercial · 22.38 M sq.ft.", title: "IT", text: "IT campuses" },
        { group: "Commercial · 22.38 M sq.ft.", title: "Hospitality", text: "Hotels" },
        { group: "Commercial · 22.38 M sq.ft.", title: "Healthcare", text: "Global healthcare complex" },
        { group: "Commercial · 22.38 M sq.ft.", title: "Education", text: "Schools & institutions" },
        { group: "Commercial · 22.38 M sq.ft.", title: "Retail", text: "Retail streets" },
        { group: "Residential · 37.53 M sq.ft.", title: "Residential", text: "Premium towers" },
        { group: "Residential · 37.53 M sq.ft.", title: "Villas", text: "Villa & bungalow plots" },
      ],
      note: "Estimates; subject to planning approvals, FSI entitlements and final master-planning. Areas as stated by Orivana Global Pvt. Ltd. (September 2026 update); percentages and totals computed from the stated component areas. Images are for reference only.",
    },
  },

  // ---------------- Investment page ----------------
  investmentPage: {
    header: { title: "Returns, title &", highlight: "a clear path", subtitle: "What the corridor has delivered — and what Orivana projects." },
    returns: {
      badge: "Returns",
      title: "What the corridor has delivered — and what Orivana projects.",
      landTitle: "A · Land price growth · 2010–2025",
      land: [
        { place: "Navi Mumbai", mult: 10, note: "Established hub" },
        { place: "Panvel", mult: 8, note: "Connectivity hub" },
        { place: "Third Mumbai", mult: 10, note: "Future growth · airport zone" },
      ],
      landText: "Navi Mumbai 10x · Panvel 8x · Third Mumbai 10x — directional appreciation of land over fifteen years, as stated by Orivana.",
      propTitle: "B · Property price growth · 2010–2025",
      propMult: 3,
      propText: "Navi Mumbai property prices over fifteen years — premium developments (Nerul, Kharghar, Kamothe & Ulwe) with consistent double-digit growth.",
      irrTitle: "C · Orivana Global City · Illustrative target IRR range",
      irrFlag: "Indicative only — not a projection of guaranteed returns",
      driversLabel: "Value drivers",
      drivers: "Returns against land investment — projected land value appreciation of 2.5x of land purchase value in the next 5–6 years.",
      exitLabel: "Exit — ROFR",
      exit: "Orivana's Right of First Refusal offers a pre-defined pathway to a buy-back or third-party sale, at Orivana's discretion and per the definitive agreement. It is not a guaranteed buy-back commitment.",
      irrNote: "Illustrative only, not guaranteed. Actual returns and exit timing depend on market conditions, statutory approvals and the definitive Term Sheet.",
      note: "A and B are historical, directional estimates from Orivana Global Pvt. Ltd.'s analysis of 2010–2025 market movements (axis-free, proportional); past performance is not a guarantee of future returns. C is Orivana's illustrative target for this opportunity, not a projection of guaranteed returns.",
    },
    security: {
      badge: "Title security",
      title: "Your name on the land record.",
      intro: "Most real-estate investments give you a promise. This one gives you the title — the land is registered in your name, or in an SPV you control, on the 7/12 extract.",
      extract: "7/12",
      extractLabel: "Land-title extract · in your name",
      structure: "Security structure · What protects the investor",
      items: [
        { title: "7/12 title", text: "Direct asset ownership — your name (or your SPV) on the land-title record." },
        { title: "DA / JV agreement", text: "Roles, profit sharing and development obligations defined in a definitive agreement." },
        { title: "Escrow & milestone drawdowns", text: "Capital released only against verifiable milestones; quarterly investor reporting." },
        { title: "ROFR exit", text: "Orivana's Right of First Refusal — a pre-defined pathway to a buy-back or takeout at the target horizon, at Orivana's discretion. Not a guaranteed buy-back commitment." },
      ],
    },
    journey: {
      badge: "Governance & next steps",
      title: "A clear path to closing.",
      intro: "Your seven-step journey from enquiry to exit — what happens at each step, and what you receive along the way.",
      receive: "What you receive at each step",
      steps: [
        { title: "Enquiry", text: "Information pack" },
        { title: "Site visit", text: "Site-visit programme · walk the parcels" },
        { title: "Term sheet", text: "Term sheet — MOU signing for land purchase" },
        { title: "DA / JV", text: "Signed DA / JV Agreement incl. ROFR*" },
        { title: "Registration", text: "7/12 extract in your name" },
        { title: "Milestones", text: "Milestone drawdown & quarterly reports" },
        { title: "Exit", text: "Exit proceeds via ROFR* (indicative timing) or JV Partner" },
      ],
      footnote: "* ROFR — Right of First Refusal; a pre-defined pathway, not a guaranteed buy-back commitment. Customary terms are set out in the definitive DA / JV Agreement and Term Sheet; a sample DA / JV is available on request.",
      cta: "Request the information pack · sales@orivanagroup.com",
    },
  },

  // ---------------- About page ----------------
  aboutPage: {
    header: { title: "The people", highlight: "behind the plan", subtitle: "Finance, land, legal, design and healthcare on one board; specialist counsel; regional execution partners." },
    board: {
      badge: "Backed by",
      title: "The people behind the plan.",
      intro: "Finance, land, legal, design and healthcare on one board; specialist counsel; regional execution partners.",
      boardTitle: "Board of Directors",
      members: [
        { initials: "RB", name: "Rupesh V. Bhoir", role: "Co-founder & Managing Director", text: "Land acquisition, legal compliance, title consolidation." },
        { initials: "KC", name: "Keshab D. Chaudhuri", role: "Co-founder & Chief Executive Officer", text: "Finance, investment, business development, M&A, organisation building." },
        { initials: "VP", name: "Ar. Vaibhav A. Patil", role: "Director", text: "Design, planning & execution, contracts — township projects." },
        { initials: "AJ", name: "Avinash G. Jadhav", role: "Partner", text: "Investment & development partner — 300-acre mixed-use project, Third Mumbai." },
        { initials: "AD", name: "Dr. Aarti G. Dhumal", role: "Director", text: "Orivana Healthcare & Wellness — global healthcare & wellness complex, Navi Mumbai." },
        { initials: "RK", name: "Rakesh Kumar", role: "Non-executive Director", text: "Investment strategy, financial structuring, compliances, institutional capital (AIF, NCD, equity, debt, REIT)." },
        { initials: "SV", name: "Adv. Subhash K. Vaskar", role: "Director — Legal", text: "Legal aspects of land acquisition, real estate projects, title verification, documentation." },
      ],
    },
    advisors: {
      title: "Board of Advisors",
      subtitle: "Specialist counsel · Legal · Land · Township · Logistics",
      members: [
        { initials: "CM", name: "Adv. C. B. Mhatre", role: "Advisor — Legal, Land Acquisition", text: "Land acquisition, title search reports, critical litigation, land laws & compliance." },
        { initials: "LR", name: "Adv. Laxminarayan Ramanujam", role: "Advisor — Land Investment", text: "Industrial land acquisition, land investment, land laws & legal compliance." },
        { initials: "SD", name: "Shyam Deshpande", role: "Advisor — Township Projects", text: "Township projects, execution strategy and phasing." },
      ],
    },
    partners: {
      title: "Project partners",
      company: "Company",
      role: "Role",
      office: "Office",
      rows: [{ name: "Avishkar Infra", role: "Project partner · Kolhapur office", office: "Kolhapur" }],
    },
  },

  // ---------------- Contact page ----------------
  contactPage: {
    header: { title: "Walk the land", highlight: "with us", subtitle: "Private site visits to the Navi Mumbai and Third Mumbai parcels, and investor previews of the master plan, are arranged by appointment through our Belapur office." },
    invitation: {
      badge: "An invitation",
      title: "Walk the land with us.",
      text: "Private site visits to the Navi Mumbai and Third Mumbai parcels, and investor previews of the master plan, are arranged by appointment through our Belapur office.",
    },
    requests: {
      title: "Let's walk the land together.",
      text: "Request the information pack, book a site visit, or ask for a sample term sheet.",
      subject: {
        visit: "Book a private site visit",
        preview: "Investor preview",
        pack: "Request the information pack",
        term: "Sample term sheet",
      },
    },
    offices: {
      corporate: "Corporate office · Navi Mumbai",
      corporateName: "Orivana Global Pvt. Ltd.",
      corporateAddress: "\"Casa Blanca\", Office No. 1201, Plot 45, Sector 11, CBD Belapur, Navi Mumbai – 400 614, Maharashtra, India",
      kolhapur: "Kolhapur office",
      kolhapurName: "Avishkar Infra",
      kolhapurAddress: "\"Business Bay\", Office No. Fi 01, Tarabai Park, Kolhapur – 416 003, Maharashtra",
    },
    emailLabel: "Email",
    webLabel: "Website",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "This presentation is issued by Orivana Global Pvt. Ltd. for information purposes only and is private and confidential. It does not constitute an offer, solicitation or invitation to invest, nor investment, legal or tax advice. This document does not constitute a public offer under the SEBI (Alternative Investment Funds) Regulations, 2012, the SEBI (Collective Investment Schemes) Regulations, 1999, or the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018. All master layout plans, FSI/FAR allocations and permissible development are indicative and subject to approval by CIDCO, MMRDA, RERA and other competent authorities. All figures are estimates, targets or directional analyses, subject to due diligence, approvals, market conditions and the definitive Term Sheet and agreements; past performance is not a guarantee of future returns. Images are for reference only and do not represent actual project images; photographs are licensed stock imagery (Unsplash / Pexels licences).",
  },

  footer: {
    description: "Orivana Global City — a 600-acre integrated township, 05 minutes from Navi Mumbai International Airport. Project partner: Avishkar Infra.",
    quickLinks: "Quick links",
    contactInfo: "Contact",
    address: "Orivana Global Pvt. Ltd.\n\"Casa Blanca\", Office No. 1201, Plot 45, Sector 11, CBD Belapur,\nNavi Mumbai – 400 614, Maharashtra, India",
    copyright: "© 2026 Orivana Global Pvt. Ltd. Private & Confidential.",
  },

  notFound: {
    title: "Page not found",
    home: "Return to Home",
  },
};

const navOverrides = {
  hi: { home: "होम", location: "स्थान", projects: "परियोजनाएं", investment: "निवेश", about: "हमारे बारे में", contact: "संपर्क करें" },
  mr: { home: "मुख्यपृष्ठ", location: "स्थान", projects: "प्रकल्प", investment: "गुंतवणूक", about: "आमच्याबद्दल", contact: "संपर्क" },
  bn: { home: "হোম", location: "অবস্থান", projects: "প্রকল্প", investment: "বিনিয়োগ", about: "আমাদের সম্পর্কে", contact: "যোগাযোগ" },
  gu: { home: "હોમ", location: "સ્થાન", projects: "પ્રોજેક્ટ્સ", investment: "રોકાણ", about: "અમારા વિશે", contact: "સંપર્ક" },
};

// Non-English languages: translated nav labels, English brochure copy for everything else.
const withFallback = (nav) => ({ ...en, nav: { ...en.nav, ...nav } });

export const translations = {
  en,
  hi: withFallback(navOverrides.hi),
  mr: withFallback(navOverrides.mr),
  bn: withFallback(navOverrides.bn),
  gu: withFallback(navOverrides.gu),
};
