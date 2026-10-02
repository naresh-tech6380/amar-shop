/* AMAR product catalog.
   To add a product: copy a block, change the details, save.
   (A Google Sheet auto-sync can replace this later.) */
const SHOP = {
  name: "AMAR",
  tagline: "Glass • Plywood • Hardware • Electricals",
  whatsapp: "916380116798",
  phoneDisplay: "+91 63801 16798",
  address: "Near Jayapriya Bustop, Cuddalore Main Road, Neyveli – 607802",
  hours: "Open daily: 9:00 AM – 9:30 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Amar+Glass+Plywood+Neyveli"
};

const PRODUCTS = [
  {
    id: "mirror-tiles",
    name: "Wall Glass Mirror Tiles",
    category: "Mirror & Glass",
    desc: "Decorative mirror tiles for wall decoration — TV wall, living room, bedrooms.",
    variants: [{ label: "1 ft × 1 ft", price: 350 }],
    unit: "per piece",
    images: ["images/mirror-1.jpg", "images/mirror-2.jpg", "images/mirror-3.jpg"]
  },
  {
    id: "aldrops",
    name: "Door Aldrops",
    category: "Door Hardware",
    desc: "Brass & antique-finish door aldrops in elegant designs. Strong, rust-free, smooth slide.",
    variants: [{ label: "8 inch", price: 700 }],
    unit: "per piece",
    images: ["images/aldrops-1.png", "images/aldrops-2.jpg", "images/aldrops-3.jpg"]
  },
  {
    id: "door-handles",
    name: "Main Door Handles",
    category: "Door Hardware",
    desc: "Premium main door pull handles in rose-gold & antique finishes. Heavy-duty build.",
    variants: [
      { label: "18 inch", price: 1600 },
      { label: "16 inch", price: 1400 },
      { label: "14 inch", price: 1200 }
    ],
    unit: "per piece",
    images: [
      "images/handle-1.jpg", "images/handle-2.jpg", "images/handle-3.jpg",
      "images/handle-4.jpg", "images/handle-5.jpg", "images/handle-6.jpg"
    ]
  },
  /* ---- From MEIL purchase order (Oct 2026) — unit rates rounded to whole rupees ---- */
  {
    id: "po-night-latch",
    name: "Main Door Night Latch",
    category: "Door Hardware",
    desc: "Godrej 7-lever night latch for main doors. Inside opening, high security.",
    variants: [{ label: "1 pc", price: 1372 }],
    unit: "per piece",
    images: ["images/po-01-night-latch.jpg"]
  },
  {
    id: "po-mortice-lock",
    name: "Mortice Door Lock",
    category: "Door Hardware",
    desc: "Godrej mortice lock for main doors. Sturdy, smooth operation.",
    variants: [{ label: "1 pc", price: 1764 }],
    unit: "per piece",
    images: ["images/po-02-mortice-lock.jpg"]
  },
  {
    id: "po-plywood-18",
    name: "Commercial Plywood 18mm",
    category: "Plywood",
    desc: "18mm commercial plywood (Sharon / Greenply / Century).",
    variants: [{ label: "per sq ft", price: 98 }],
    unit: "per sq ft",
    images: ["images/po-03-plywood-18.jpg"]
  },
  {
    id: "po-plywood-12",
    name: "Commercial Plywood 12mm",
    category: "Plywood",
    desc: "12mm commercial plywood (Sharon / Greenply / Century).",
    variants: [{ label: "per sq ft", price: 74 }],
    unit: "per sq ft",
    images: ["images/po-04-plywood-12.jpg"]
  },
  {
    id: "po-plywood-8",
    name: "Commercial Plywood 8mm",
    category: "Plywood",
    desc: "8mm commercial plywood (Sharon / Greenply / Century).",
    variants: [{ label: "per sq ft", price: 64 }],
    unit: "per sq ft",
    images: ["images/po-05-plywood-8.jpg"]
  },
  {
    id: "po-anchor-m12",
    name: "Anchor Fastener M12",
    category: "Hardware",
    desc: "M12 anchor fastener (Hilti type) for strong concrete fixing.",
    variants: [{ label: "1 pc", price: 25 }],
    unit: "per piece",
    images: ["images/po-06-anchor-m12.jpg"]
  },
  {
    id: "po-waste-hose",
    name: "Flexible Waste Hose",
    category: "Bathware & Sanitary",
    desc: "White flexible waste hose, 750mm — expands and contracts as needed.",
    variants: [{ label: "1 pc", price: 78 }],
    unit: "per piece",
    images: ["images/po-07-waste-hose.jpg"]
  },
  {
    id: "po-waste-coupling",
    name: "Sanitary Waste Coupling",
    category: "Bathware & Sanitary",
    desc: "Sanitary waste coupling, full threaded (Metro / Parryware).",
    variants: [{ label: "1 pc", price: 176 }],
    unit: "per piece",
    images: ["images/po-08-waste-coupling.jpg"]
  },
  {
    id: "po-connection-tube",
    name: "Connection Tube 24 inch",
    category: "Bathware & Sanitary",
    desc: "24-inch flexible connection tube / hose (Kohinoor).",
    variants: [{ label: "1 pc", price: 127 }],
    unit: "per piece",
    images: ["images/po-09-connection-tube.jpg"]
  },
  {
    id: "po-seat-cover",
    name: "Toilet Seat Cover",
    category: "Bathware & Sanitary",
    desc: "White sanitary seat cover for EWC (Parryware).",
    variants: [{ label: "1 pc", price: 902 }],
    unit: "per piece",
    images: ["images/po-10-seat-cover.jpg"]
  },
  {
    id: "po-flush-knob",
    name: "Flush Tank Knob",
    category: "Bathware & Sanitary",
    desc: "Flush tank knob for cisterns. Easy-fit replacement.",
    variants: [{ label: "1 pc", price: 120 }],
    unit: "per piece",
    images: ["images/po-11-flush-knob.jpg"]
  },
  {
    id: "po-sink-cock",
    name: "Sink Cock 15mm",
    category: "Bathware & Sanitary",
    desc: "15mm sink cock, chrome finish (Metro).",
    variants: [{ label: "1 pc", price: 1764 }],
    unit: "per piece",
    images: ["images/po-12-sink-cock.jpg"]
  },
  {
    id: "po-bib-cock",
    name: "Bib Cock 15mm",
    category: "Bathware & Sanitary",
    desc: "15mm bib cock, chrome finish (Metro).",
    variants: [{ label: "1 pc", price: 1274 }],
    unit: "per piece",
    images: ["images/po-13-bib-cock.jpg"]
  },
  {
    id: "po-long-bib-cock",
    name: "Long Body Bib Cock 15mm",
    category: "Bathware & Sanitary",
    desc: "15mm long-body bib cock (Metro / Parryware).",
    variants: [{ label: "1 pc", price: 1470 }],
    unit: "per piece",
    images: ["images/po-14-long-bib-cock.jpg"]
  },
  {
    id: "po-angle-cock",
    name: "Angle Cock 15mm",
    category: "Bathware & Sanitary",
    desc: "15mm angle cock, chrome finish (Metro).",
    variants: [{ label: "1 pc", price: 1078 }],
    unit: "per piece",
    images: ["images/po-15-angle-cock.jpg"]
  },
  {
    id: "po-ball-valve",
    name: "CPVC Ball Valve 1 inch",
    category: "Bathware & Sanitary",
    desc: "1-inch CPVC ball valve for water lines.",
    variants: [{ label: "1 pc", price: 372 }],
    unit: "per piece",
    images: ["images/po-16-ball-valve.jpg"]
  },
  {
    id: "po-spindle",
    name: "Wall Mixture Centre Spindle",
    category: "Bathware & Sanitary",
    desc: "Centre spindle (2-piece set) for wall mixture (Metro).",
    variants: [{ label: "1 set", price: 235 }],
    unit: "per set",
    images: ["images/po-17-spindle.jpg"]
  },
  {
    id: "po-white-cement",
    name: "White Cement",
    category: "Hardware",
    desc: "White cement (Birla / JK).",
    variants: [{ label: "per kg", price: 37 }],
    unit: "per kg",
    images: ["images/po-18-white-cement.jpg"]
  }
];

const CATEGORIES = ["All", "Mirror & Glass", "Door Hardware", "Plywood", "Bathware & Sanitary", "Hardware"];
