import type { Locale } from "./i18n";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type StayCard = {
  name: string;
  peninsula: string;
  description: string;
  price: string;
  image: ImageAsset;
};

export type Experience = {
  title: string;
  eyebrow: string;
  description: string;
  image: ImageAsset;
};

export type JournalPost = {
  title: string;
  category: string;
  excerpt: string;
  image: ImageAsset;
};

export type StoryPoint = {
  title: string;
  body: string;
};

export type Story = {
  eyebrow: string;
  title: string;
  points: StoryPoint[];
  note?: string;
  image: ImageAsset;
};

export type Peninsula = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: ImageAsset;
  details: string[];
  stories: Story[];
  center: [number, number];
  zoom: number;
};

export type MapPinKind =
  | "stay"
  | "taverna"
  | "experience"
  | "journal"
  | "photo"
  | "video";

export type MapPin = {
  id: string;
  kind: MapPinKind;
  slug?: string;
  name: string;
  category: string;
  peninsulaSlug: string;
  coords: [number, number];
  image: string;
  excerpt?: string;
  body?: string[];
  href?: string;
  videoUrl?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type HomeCopy = {
  heroEyebrow: string;
  heroTitleTop: string;
  heroTitleBottom: string;
  heroSubtitle: string;
  peninsulasTitle: string;
  peninsulasIntro: string;
  cardCta: string;
  featuredCta: string;
  readersTitle: string;
  contactTitle: string;
  instagramTitle: string;
  instagramCta: string;
  newsletterTitle: string;
  newsletterDescription: string;
  emailPlaceholder: string;
  subscribe: string;
};

export type HomeContent = {
  heroImage: ImageAsset;
  heroCopy: HomeCopy;
  peninsulas: Peninsula[];
  featuredTable: typeof featuredTable;
  destinationsCta: typeof destinationsCta;
  whyBlock: typeof whyBlock;
  testimonials: Testimonial[];
  contactItems: ContactItem[];
  instagramImages: ImageAsset[];
};

export const heroImage: ImageAsset = {
  src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2400&q=85",
  alt: "Blue Greek coastline and whitewashed architecture above the sea",
};

export const heroStats = [
  { value: "3", label: "peninsulas" },
  { value: "42", label: "tavernas reviewed" },
  { value: "100%", label: "first-hand notes" },
];

export const introImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=85",
    alt: "Clear blue shoreline with white sand and gentle waves",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85",
    alt: "Fresh Mediterranean plates served on a table",
  },
];

export const stays: StayCard[] = [
  {
    name: "Ammouliani Salt House",
    peninsula: "Mount Athos area",
    description: "A pared-back guesthouse near the ferry, run by a family who know every quiet cove.",
    price: "From EUR 118/night",
    image: {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85",
      alt: "Sunlit guesthouse terrace with Mediterranean planting",
    },
  },
  {
    name: "Vourvourou Pine Rooms",
    peninsula: "Sithonia",
    description: "Simple rooms under the pines, best for early swims and unhurried taverna evenings.",
    price: "From EUR 96/night",
    image: {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1100&q=85",
      alt: "Calm turquoise bay edged by trees",
    },
  },
  {
    name: "Afytos Stone Stay",
    peninsula: "Kassandra",
    description: "A village stay with stone walls, sea-facing breakfasts, and a five-minute walk to dinner.",
    price: "From EUR 132/night",
    image: {
      src: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1100&q=85",
      alt: "White Mediterranean street with warm evening light",
    },
  },
];

export const featuredTable = {
  title: "The table worth planning a swim around.",
  eyebrow: "This month's table",
  description:
    "On Sithonia's western coast, lunch stretches into late afternoon: grilled sardines, tomato fritters, a cold carafe of house white, and a view that makes ordering slowly feel like the point.",
  tags: ["Sea-to-table", "Sithonia", "Editor's pick"],
  image: {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85",
    alt: "Mediterranean seafood and wine served outdoors",
  },
};

export const experiences: Experience[] = [
  {
    title: "The olive harvest morning",
    eyebrow: "October",
    description: "A family grove outside Ormylia, strong coffee, and oil tasted while it is still peppery.",
    image: {
      src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1100&q=85",
      alt: "Olive branches in soft Mediterranean light",
    },
  },
  {
    title: "The honey road",
    eyebrow: "Local producers",
    description: "Pine honey, thyme honey, and the small roadside shops that explain the difference.",
    image: {
      src: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1100&q=85",
      alt: "Jars of honey glowing in warm light",
    },
  },
  {
    title: "The morning fish market",
    eyebrow: "Before lunch",
    description: "What to buy, what to ask, and which nearby grill will cook it without ceremony.",
    image: {
      src: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1100&q=85",
      alt: "Fresh fish laid over crushed ice at a market",
    },
  },
];

export const testimonial = {
  quote:
    "It reads like advice from someone who has actually sat at the table, missed the turning, found the better beach, and gone back the next season to check.",
  name: "Elena Markou",
  role: "Reader, Thessaloniki",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
};

export const sharedStories: Story[] = [
  {
    eyebrow: "Long beaches",
    title: "Where the sand stretches",
    points: [
      {
        title: "Possidi Beach",
        body: "A long curve of soft sand on the west coast — shallow water and family tavernas just off the road.",
      },
      {
        title: "Sani Beach",
        body: "Pine forest down to clear water, with quiet coves between the marina and the headland.",
      },
      {
        title: "Kalandra cove",
        body: "A smaller pocket on the southern tip, best in the late afternoon when the light turns gold.",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60a?auto=format&fit=crop&w=1400&q=85",
      alt: "Calm Mediterranean cove with turquoise water",
    },
  },
  {
    eyebrow: "Villages",
    title: "Stone streets and sea views",
    points: [
      {
        title: "Afytos",
        body: "The most photographed village — stone houses on the cliff edge and bakeries that still feel local.",
      },
      {
        title: "Nea Fokaia",
        body: "A small fishing harbour with grilled fish at sunset and a watchtower above the bay.",
      },
      {
        title: "Pefkochori",
        body: "Busier in season but hides honest tavernas if you know where to look.",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=85",
      alt: "White Mediterranean street with warm evening light",
    },
  },
  {
    eyebrow: "Tables",
    title: "Eat without the tourist tax",
    points: [
      {
        title: "Chalkboards over menus",
        body: "Family-run kitchens lean on what came in that morning — ask before ordering.",
      },
      {
        title: "Sea-to-table",
        body: "Sardines, octopus, tomato fritters, and cold carafes of house white.",
      },
      {
        title: "Olive oil",
        body: "Local cooperatives sell early-press oil that's worth carrying home.",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1400&q=85",
      alt: "Greek dishes and bread on an outdoor table",
    },
  },
  {
    eyebrow: "Driving the coast",
    title: "A road that frames the peninsula",
    points: [
      {
        title: "West to east loop",
        body: "A morning drive from Sani south to Paliouri and back, with stops for swims along the way.",
      },
      {
        title: "Photo stops",
        body: "The cliff road below Loutra has the best southern views — late afternoon is the kindest light.",
      },
      {
        title: "Slow lunches",
        body: "Plan one long meal between stops and the day shapes itself.",
      },
    ],
    note: "Best done outside July and August when the road stays kind.",
    image: {
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85",
      alt: "Quiet Mediterranean coastal road at sunset",
    },
  },
];

export const peninsulas: Peninsula[] = [
  {
    slug: "kassandra",
    name: "Kassandra",
    tagline: "Westernmost finger",
    description:
      "Long beaches, easy village evenings, and the shortest drive from Thessaloniki when the week is tight.",
    price: "Start a trip here",
    image: {
      src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60a?auto=format&fit=crop&w=1100&q=85",
      alt: "Calm Mediterranean cove with turquoise water",
    },
    details: [
      "Kassandra is the easiest entry to Chalkidiki — under two hours from Thessaloniki, and the most developed of the three peninsulas.",
      "Use it for arrival ease, longer sand beaches, and village evenings in Afytos or Nea Fokaia. The food scene leans family-run and reliable.",
      "Best for a first trip, a long weekend, or travellers who want the coast without committing to the longer drive south.",
    ],
    stories: sharedStories,
    center: [23.43, 40.05],
    zoom: 10,
  },
  {
    slug: "sithonia",
    name: "Sithonia",
    tagline: "The pine peninsula",
    description:
      "Pine forest down to clear water, slower roads, and the coves that reward an unhurried afternoon.",
    price: "Best for swim days",
    image: {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1100&q=85",
      alt: "Pine-edged bay on Sithonia",
    },
    details: [
      "Sithonia is the middle finger — quieter, greener, and the strongest case for renting a car and taking the coast road slowly.",
      "Vourvourou for protected swimming, Kalamitsi for clarity, and the western coast for late lunches that stretch into afternoon.",
      "Best for swim-led weeks, photographers, and travellers who would rather find the cove than be told about it.",
    ],
    stories: sharedStories,
    center: [23.85, 40.1],
    zoom: 10,
  },
  {
    slug: "mount-athos",
    name: "Mount Athos area",
    tagline: "Slower water, monastic edge",
    description:
      "Boat days from Ouranoupoli, quiet villages, and a coastline that feels older than the rest of the region.",
    price: "Slow it down",
    image: {
      src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1100&q=85",
      alt: "Distant view of Mount Athos coastline",
    },
    details: [
      "The easternmost finger holds the monastic peninsula itself, which is closed to most visitors, and the small coastal towns that face it.",
      "Ouranoupoli is the base for boat days along the monastic coast, with Ammouliani island a short ferry away for the day's quieter swim.",
      "Best for slower weeks, anyone reading on a balcony, and trips where the boat day is the point.",
    ],
    stories: sharedStories,
    center: [24.1, 40.3],
    zoom: 10,
  },
];

export const mapPins: MapPin[] = [
  {
    id: "stay-afytos",
    kind: "stay",
    slug: "afytos-stone-stay",
    name: "Afytos Stone Stay",
    category: "Stay",
    peninsulaSlug: "kassandra",
    coords: [23.44, 40.1],
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "A village stay with stone walls, sea-facing breakfasts, and a five-minute walk to dinner.",
    href: "/peninsulas/kassandra",
  },
  {
    id: "experience-honey-road",
    kind: "experience",
    slug: "honey-road",
    name: "The honey road",
    category: "Experience",
    peninsulaSlug: "kassandra",
    coords: [23.4, 40.08],
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "Pine honey, thyme honey, and the small roadside shops that explain the difference.",
  },
  {
    id: "stay-vourvourou",
    kind: "stay",
    slug: "vourvourou-pine-rooms",
    name: "Vourvourou Pine Rooms",
    category: "Stay",
    peninsulaSlug: "sithonia",
    coords: [23.79, 40.2],
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "Simple rooms under the pines, best for early swims and unhurried taverna evenings.",
    href: "/peninsulas/sithonia",
  },
  {
    id: "taverna-month",
    kind: "taverna",
    slug: "months-table",
    name: "This month's table",
    category: "Taverna",
    peninsulaSlug: "sithonia",
    coords: [23.78, 40.08],
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "On Sithonia's western coast — grilled sardines, tomato fritters, a cold carafe of house white.",
    href: "/blog/afytos-without-losing-the-village",
  },
  {
    id: "experience-olive-harvest",
    kind: "experience",
    slug: "olive-harvest-morning",
    name: "Olive harvest morning",
    category: "Experience",
    peninsulaSlug: "sithonia",
    coords: [23.55, 40.3],
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "A family grove outside Ormylia, strong coffee, and oil tasted while it is still peppery.",
  },
  {
    id: "stay-ammouliani",
    kind: "stay",
    slug: "ammouliani-salt-house",
    name: "Ammouliani Salt House",
    category: "Stay",
    peninsulaSlug: "mount-athos",
    coords: [23.89, 40.32],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "A pared-back guesthouse near the ferry, run by a family who know every quiet cove.",
    href: "/peninsulas/mount-athos",
  },
  {
    id: "experience-fish-market",
    kind: "experience",
    slug: "morning-fish-market",
    name: "Morning fish market",
    category: "Experience",
    peninsulaSlug: "mount-athos",
    coords: [23.88, 40.35],
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "What to buy, what to ask, and which nearby grill will cook it without ceremony.",
  },
  {
    id: "journal-sithonia-western-coast",
    kind: "journal",
    name: "The quiet case for Sithonia's western coast",
    category: "Journal",
    peninsulaSlug: "sithonia",
    coords: [23.76, 40.05],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "Three tavernas, two beaches, and the late light that makes the detour make sense.",
    href: "/blog/sithonia-western-coast-tavernas",
  },
  {
    id: "journal-afytos",
    kind: "journal",
    name: "Where to eat in Afytos without losing the village",
    category: "Journal",
    peninsulaSlug: "kassandra",
    coords: [23.43, 40.1],
    image:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "A short list for grilled fish, tomato fritters, house wine, and tables that still feel local.",
    href: "/blog/afytos-without-losing-the-village",
  },
  {
    id: "journal-three-fingers",
    kind: "journal",
    name: "A first-timer's route through the three fingers",
    category: "Journal",
    peninsulaSlug: "kassandra",
    coords: [23.65, 40.18],
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "How to divide a week between Kassandra, Sithonia, and the Mount Athos coastline.",
    href: "/blog/first-timers-three-fingers-route",
  },
  {
    id: "journal-ormylia",
    kind: "journal",
    name: "What an olive harvest morning near Ormylia teaches you",
    category: "Journal",
    peninsulaSlug: "sithonia",
    coords: [23.57, 40.28],
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=240&q=80",
    excerpt:
      "Coffee in the grove, fresh oil with a peppery finish, and the patience behind a good bottle.",
    href: "/blog/olive-harvest-ormylia",
  },
  {
    id: "photo-cove-boat",
    kind: "photo",
    slug: "boat-in-the-cove",
    name: "A boat moored in a quiet cove",
    category: "Photo",
    peninsulaSlug: "mount-athos",
    coords: [23.95, 40.27],
    image:
      "https://images.unsplash.com/photo-1501950183564-3c8bc1e856a3?auto=format&fit=crop&w=240&q=80",
    excerpt: "From the journal's Instagram — a boat day on the eastern coast.",
  },
  {
    id: "photo-lunch-table",
    kind: "photo",
    slug: "mediterranean-lunch",
    name: "A Mediterranean lunch, slowly",
    category: "Photo",
    peninsulaSlug: "kassandra",
    coords: [23.5, 40.02],
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=240&q=80",
    excerpt: "Plates worth ordering for the second carafe.",
  },
  {
    id: "photo-village-light",
    kind: "photo",
    slug: "whitewashed-walls",
    name: "Whitewashed walls at evening",
    category: "Photo",
    peninsulaSlug: "kassandra",
    coords: [23.46, 40.13],
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=240&q=80",
    excerpt: "Coastline light from one of the editor's first trips.",
  },
  {
    id: "video-aerial-coast",
    kind: "video",
    slug: "aerial-coast",
    name: "Aerial pass along the coast",
    category: "Video",
    peninsulaSlug: "sithonia",
    coords: [23.82, 40.15],
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=240&q=80",
    excerpt: "A short pass over the pine-edged coastline.",
    videoUrl:
      "https://videos.pexels.com/video-files/2169307/2169307-hd_1280_720_30fps.mp4",
  },
  {
    id: "video-mediterranean",
    kind: "video",
    slug: "mediterranean-rhythms",
    name: "Mediterranean rhythms",
    category: "Video",
    peninsulaSlug: "mount-athos",
    coords: [23.93, 40.3],
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60a?auto=format&fit=crop&w=240&q=80",
    excerpt: "A slow loop of waves and coves on the eastern peninsula.",
    videoUrl:
      "https://videos.pexels.com/video-files/4584060/4584060-uhd_2560_1440_25fps.mp4",
  },
];

export function getMapPins(peninsulaSlug: string) {
  return mapPins.filter((pin) => pin.peninsulaSlug === peninsulaSlug);
}

export function getAllMapPins() {
  return mapPins;
}

export function getPlacePins() {
  return mapPins.filter((pin) => Boolean(pin.slug) && pin.kind !== "journal");
}

export function getPlaceBySlug(slug: string) {
  return mapPins.find((pin) => pin.slug === slug && pin.kind !== "journal");
}

export function getRelatedPlaces(slug: string, limit = 3) {
  const current = mapPins.find((pin) => pin.slug === slug);
  if (!current) return [];
  const candidates = mapPins.filter(
    (pin) =>
      pin.slug && pin.slug !== slug && pin.kind !== "journal",
  );
  const samePeninsula = candidates.filter(
    (pin) => pin.peninsulaSlug === current.peninsulaSlug,
  );
  const otherPeninsula = candidates.filter(
    (pin) => pin.peninsulaSlug !== current.peninsulaSlug,
  );
  return [...samePeninsula, ...otherPeninsula].slice(0, limit);
}

export function getPeninsulaNameFromSlug(slug: string) {
  return peninsulas.find((p) => p.slug === slug)?.name ?? slug;
}

export const destinationsCta = {
  eyebrow: "Let us show you the quieter Chalkidiki",
  title: "Three peninsulas, one editor.",
  description:
    "Kassandra, Sithonia, and the Mount Athos coastline each ask for a different week. The guide explains which to choose, and when.",
  buttonLabel: "Explore destinations",
  buttonHref: "/#peninsulas",
  image: {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    alt: "Clear Aegean shoreline with white sand",
  },
};

export const whyBlock = {
  title: "Why travel to Chalkidiki.",
  description:
    "Greener than the Cyclades, calmer than the coast around Athens. Pine forest meets clear water, and the food and family-run hospitality lead the trip rather than follow it.",
  primary: { label: "Stays", href: "/#stays" },
  secondary: { label: "About the journal", href: "/#journal" },
  image: {
    src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1400&q=85",
    alt: "Pine forest above a Greek bay",
  },
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "It reads like advice from someone who has actually sat at the table, missed the turning, found the better beach, and gone back the next season to check.",
    name: "Elena Markou",
    role: "Reader, Thessaloniki",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "We followed the Sithonia notes for a week and barely opened another guide. The taverna picks alone were worth the trip.",
    name: "Daniel Hoffmann",
    role: "Reader, Berlin",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "Honest, restrained, and specific. The kind of writing that makes you book the smaller guesthouse instead of the resort.",
    name: "Sofia Lambrou",
    role: "Reader, Athens",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "hello@ilovechalkidiki.com",
    href: "mailto:hello@ilovechalkidiki.com",
  },
  {
    label: "WhatsApp",
    value: "+30 694 000 0000",
    href: "https://wa.me/306940000000",
  },
  {
    label: "Editorial desk",
    value: "Nikis 21, Thessaloniki 54624",
    href: "https://maps.google.com/?q=Nikis+21+Thessaloniki",
  },
];

export const instagramImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85",
    alt: "Mediterranean lunch table from the journal",
  },
  {
    src: "https://images.unsplash.com/photo-1501950183564-3c8bc1e856a3?auto=format&fit=crop&w=900&q=85",
    alt: "Boat moored in a quiet Aegean cove",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    alt: "Fresh seafood and house wine on a taverna table",
  },
];

export const journalPosts: JournalPost[] = [
  {
    title: "The quiet case for Sithonia's western coast",
    category: "Coast",
    excerpt: "Three tavernas, two beaches, and the late light that makes the detour make sense.",
    image: {
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1100&q=85",
      alt: "Quiet Mediterranean coastal road at sunset",
    },
  },
  {
    title: "Where to eat in Afytos without losing the village",
    category: "Food",
    excerpt: "A short list for grilled fish, tomato fritters, house wine, and tables that still feel local.",
    image: {
      src: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1100&q=85",
      alt: "Greek dishes and bread on an outdoor table",
    },
  },
  {
    title: "A first-timer's route through the three fingers",
    category: "Guide",
    excerpt: "How to divide a week between Kassandra, Sithonia, and the Mount Athos coastline.",
    image: {
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1100&q=85",
      alt: "Mediterranean village overlooking blue water",
    },
  },
];

export const homeCopy: HomeCopy = {
  heroEyebrow: "Discover northern Greece",
  heroTitleTop: "Explore",
  heroTitleBottom: "Chalkidiki",
  heroSubtitle: "The true coast of pine & sea",
  peninsulasTitle: "Discover the three fingers of Chalkidiki",
  peninsulasIntro:
    "Turn an idea of northern Greece into a week that holds together — three peninsulas, three rhythms, one editor.",
  cardCta: "More details",
  featuredCta: "Read the full feature",
  readersTitle: "What readers say.",
  contactTitle: "Get in touch.",
  instagramTitle: "Follow along.",
  instagramCta: "@ilovechalkidiki",
  newsletterTitle: "Get the latest Chalkidiki notes.",
  newsletterDescription:
    "Seasonal tavernas, honest stay notes, and the routes still worth the journey.",
  emailPlaceholder: "you@example.com",
  subscribe: "Subscribe",
};

const greekPeninsulas: Peninsula[] = [
  {
    ...peninsulas[0],
    tagline: "Το δυτικότερο πόδι",
    description:
      "Μεγάλες παραλίες, εύκολα βραδινά στα χωριά και η πιο σύντομη διαδρομή από τη Θεσσαλονίκη.",
    price: "Ξεκίνα το ταξίδι εδώ",
    details: [
      "Η Κασσάνδρα είναι η πιο εύκολη είσοδος στη Χαλκιδική — κάτω από δύο ώρες από τη Θεσσαλονίκη και η πιο ανεπτυγμένη από τις τρεις χερσονήσους.",
      "Διάλεξέ τη για άνετη άφιξη, μεγάλες αμμουδιές και βραδιές σε χωριά όπως η Άφυτος ή η Νέα Φώκαια.",
      "Ταιριάζει σε πρώτο ταξίδι, μεγάλο Σαββατοκύριακο ή ταξιδιώτες που θέλουν θάλασσα χωρίς μεγάλη μετακίνηση.",
    ],
  },
  {
    ...peninsulas[1],
    tagline: "Η πευκόφυτη χερσόνησος",
    description:
      "Πεύκα μέχρι το νερό, πιο αργοί δρόμοι και κολπίσκοι που αξίζουν ένα ήρεμο απόγευμα.",
    price: "Ιδανική για ημέρες στη θάλασσα",
    details: [
      "Η Σιθωνία είναι το μεσαίο πόδι — πιο ήσυχη, πιο πράσινη και ο καλύτερος λόγος να νοικιάσεις αυτοκίνητο.",
      "Η Βουρβουρού για προστατευμένο μπάνιο, η Καλαμίτσι για καθαρότητα και η δυτική ακτή για γεύματα που κρατούν μέχρι το απόγευμα.",
      "Ταιριάζει σε εβδομάδες με βάση το μπάνιο, φωτογράφους και ταξιδιώτες που προτιμούν να βρουν τον δικό τους κολπίσκο.",
    ],
  },
  {
    ...peninsulas[2],
    name: "Περιοχή Αγίου Όρους",
    tagline: "Πιο αργό νερό, μοναστικό όριο",
    description:
      "Βόλτες με καραβάκι από την Ουρανούπολη, ήσυχα χωριά και μια ακτογραμμή που μοιάζει παλαιότερη από την υπόλοιπη περιοχή.",
    price: "Χαμήλωσε ρυθμό",
    details: [
      "Το ανατολικό πόδι κρατά τη μοναστική πολιτεία, κλειστή για τους περισσότερους επισκέπτες, και τις μικρές παραθαλάσσιες βάσεις απέναντί της.",
      "Η Ουρανούπολη είναι η βάση για θαλάσσιες διαδρομές κατά μήκος της μοναστικής ακτής, ενώ η Αμμουλιανή είναι ένα σύντομο ferry μακριά.",
      "Ταιριάζει σε πιο αργές εβδομάδες, σε αναγνώστες με μπαλκόνι και σε ταξίδια όπου η βόλτα με καραβάκι είναι ο σκοπός.",
    ],
  },
];

const greekHomeContent: HomeContent = {
  heroImage: {
    ...heroImage,
    alt: "Γαλάζια ελληνική ακτογραμμή και λευκά σπίτια πάνω από τη θάλασσα",
  },
  heroCopy: {
    heroEyebrow: "Ανακάλυψε τη βόρεια Ελλάδα",
    heroTitleTop: "Explore",
    heroTitleBottom: "Chalkidiki",
    heroSubtitle: "Η αληθινή ακτή με πεύκο και θάλασσα",
    peninsulasTitle: "Γνώρισε τα τρία πόδια της Χαλκιδικής",
    peninsulasIntro:
      "Μετέτρεψε μια ιδέα για τη βόρεια Ελλάδα σε μια εβδομάδα που έχει συνοχή — τρεις χερσόνησοι, τρεις ρυθμοί, μία επιμελημένη ματιά.",
    cardCta: "Περισσότερα",
    featuredCta: "Διάβασε το πλήρες αφιέρωμα",
    readersTitle: "Τι λένε οι αναγνώστες.",
    contactTitle: "Επικοινωνία.",
    instagramTitle: "Ακολούθησε τη διαδρομή.",
    instagramCta: "@ilovechalkidiki",
    newsletterTitle: "Λάβε τα νεότερα σημειώματα για τη Χαλκιδική.",
    newsletterDescription:
      "Εποχικές ταβέρνες, ειλικρινείς προτάσεις διαμονής και διαδρομές που αξίζουν ακόμα τον δρόμο.",
    emailPlaceholder: "you@example.com",
    subscribe: "Εγγραφή",
  },
  peninsulas: greekPeninsulas,
  featuredTable: {
    ...featuredTable,
    eyebrow: "Το τραπέζι του μήνα",
    title: "Το τραπέζι που αξίζει να οργανώσεις γύρω από ένα μπάνιο.",
    description:
      "Στη δυτική ακτή της Σιθωνίας, το μεσημεριανό απλώνεται αργά: σαρδέλες στη σχάρα, ντοματοκεφτέδες, ένα κρύο καραφάκι λευκό και μια θέα που κάνει την αναμονή μέρος της εμπειρίας.",
    tags: ["Από τη θάλασσα στο τραπέζι", "Σιθωνία", "Επιλογή σύνταξης"],
  },
  destinationsCta: {
    ...destinationsCta,
    eyebrow: "Να σου δείξουμε την πιο ήσυχη Χαλκιδική",
    title: "Τρεις χερσόνησοι, μία επιμελημένη ματιά.",
    description:
      "Η Κασσάνδρα, η Σιθωνία και η ακτή του Αγίου Όρους ζητούν διαφορετική εβδομάδα. Ο οδηγός εξηγεί ποια να διαλέξεις και πότε.",
    buttonLabel: "Δες προορισμούς",
  },
  whyBlock: {
    ...whyBlock,
    title: "Γιατί να ταξιδέψεις στη Χαλκιδική.",
    description:
      "Πιο πράσινη από τις Κυκλάδες, πιο ήρεμη από την αθηναϊκή ακτή. Το πεύκο συναντά καθαρό νερό, ενώ το φαγητό και η οικογενειακή φιλοξενία οδηγούν το ταξίδι.",
    primary: { label: "Διαμονή", href: "/el/#peninsulas" },
    secondary: { label: "Για το ημερολόγιο", href: "/el/blog" },
  },
  testimonials: testimonials.map((item, index) => ({
    ...item,
    quote:
      index === 0
        ? "Διαβάζεται σαν συμβουλή από κάποιον που έχει καθίσει στο τραπέζι, έχει χάσει τη στροφή, έχει βρει την καλύτερη παραλία και γύρισε την επόμενη σεζόν για να το επιβεβαιώσει."
        : index === 1
          ? "Ακολουθήσαμε τις σημειώσεις για τη Σιθωνία για μια εβδομάδα και σχεδόν δεν ανοίξαμε άλλον οδηγό."
          : "Ειλικρινές, συγκρατημένο και συγκεκριμένο. Το είδος γραφής που σε κάνει να κλείνεις τον μικρό ξενώνα αντί για το μεγάλο resort.",
    role: index === 0 ? "Αναγνώστρια, Θεσσαλονίκη" : index === 1 ? "Αναγνώστης, Βερολίνο" : "Αναγνώστρια, Αθήνα",
  })),
  contactItems: [
    { label: "Email", value: "hello@ilovechalkidiki.com", href: "mailto:hello@ilovechalkidiki.com" },
    { label: "WhatsApp", value: "+30 694 000 0000", href: "https://wa.me/306940000000" },
    { label: "Σύνταξη", value: "Νίκης 21, Θεσσαλονίκη 54624", href: "https://maps.google.com/?q=Nikis+21+Thessaloniki" },
  ],
  instagramImages,
};

export const homeContent = {
  en: {
    heroImage,
    heroCopy: homeCopy,
    peninsulas,
    featuredTable,
    destinationsCta,
    whyBlock,
    testimonials,
    contactItems,
    instagramImages,
  },
  el: greekHomeContent,
} satisfies Record<Locale, HomeContent>;

export function getHomeContent(locale: Locale = "en") {
  return homeContent[locale];
}

export function getPeninsulas(locale: Locale = "en") {
  return homeContent[locale].peninsulas;
}
