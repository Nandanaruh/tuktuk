// Navbar links
const navLinks = [
  {
    name: "BOOK NOW",
    path: "/",
  },
  {
    name: "HOW IT WORKS",
    path: "/how-it-works",
    children: [
      {
        name: "How It Works",
        path: "/how-it-works",
      },
      {
        name: "Tuktuk Itineraries",
        path: "/how-it-works/itineraries",
      },
      {
        name: "FAQ",
        path: "/how-it-works/faq",
      },
      {
        name: "Pricing",
        path: "/how-it-works/pricing",
      },
    ],
  },
  {
    name: "GALLERY",
    path: "/tuktuk-rental-travels-photos",
  },
  {
    name: "BLOG",
    path: "/stories-of-tuktuk-rental-hire-rental-adventures",
    children: [
      {
        name: "Customer Reviews",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/reviews",
      },
      {
        name: "Tuktuk Itineraries",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/itineraries",
      },
      {
        name: "Getting a License",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/license",
      },
      {
        name: "News & Updates",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/news",
      },
      {
        name: "Road Trips",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/road-trips",
      },
      {
        name: "Surfing",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/surfing",
      },
      {
        name: "Travel Sri Lanka",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/travel",
      },
      {
        name: "Tuktuk Tournaments",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/tournaments",
      },
      {
        name: "TukTuks",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/tuktuks",
      },
      {
        name: "All Others",
        path: "/stories-of-tuktuk-rental-hire-rental-adventures/others",
      },
    ],
  },
  {
    name: "PARTNERSHIPS",
    path: "/travel-agents",
    children: [
      {
        name: "Travel Agents Program",
        path: "/travel-agents/program",
      },
      {
        name: "Affiliate Program",
        path: "/travel-agents/affiliate-program",
      },
    ],
  },
  {
    name: "ABOUT",
    path: "/about-tuktuk-rental",
  },
  {
    name: "TULTUK TOURNAMENTS",
    path: "/tuktuktournament.com",
  },
  {
    name: "JOBS",
    path: "/jobs",
  },
];

export default navLinks;
