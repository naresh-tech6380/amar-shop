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
  }
];

const CATEGORIES = ["All", "Mirror & Glass", "Door Hardware"];
