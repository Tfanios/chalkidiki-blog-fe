export const locales = ["en", "el"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "el";
}

export function localizePath(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}/`;
  }

  return `/${locale}${path}`;
}

export function unlocalizePath(pathname: string) {
  if (pathname === "/el" || pathname === "/el/") {
    return "/";
  }

  if (pathname.startsWith("/el/")) {
    return pathname.replace(/^\/el/, "");
  }

  return pathname;
}

export const ui = {
  en: {
    localeName: "English",
    nav: {
      peninsulas: "Peninsulas",
      featured: "Featured",
      journal: "Journal",
      map: "Map",
      places: "Places",
      contact: "Contact",
      plan: "Plan your trip",
    },
    footer: {
      blurb: "A travel journal for the three peninsulas of northern Greece.",
      explore: "Explore",
      social: "Social",
      copyright: "All rights reserved.",
    },
    blog: {
      indexTitle: "Latest posts",
      indexSubtitle: "Read about the latest tips and news on Chalkidiki",
      moreTitle: "More blog posts",
      moreSubtitle: "Read about the latest tips and news on Chalkidiki",
      planTrip: "Plan Trip",
      prev: "Previous",
      next: "Next",
    },
    map: {
      eyebrow: "On the map",
      title: (name: string) => `${name} at a glance`,
      subtitle: "Stays, tavernas, and small experiences worth the detour.",
      pageTitle: "Map",
      pageDescription: "Every stay, taverna, experience and story on a single map.",
      eyebrowGlobal: "Chalkidiki on the map",
      titleGlobal: "Explore the whole region",
      filters: {
        all: "All",
        stay: "Stays",
        taverna: "Tavernas",
        experience: "Experiences",
        journal: "Journal",
        photo: "Photos",
        video: "Videos",
      },
      readMore: "Read more",
      close: "Close",
    },
    places: {
      pageTitle: "Places",
      pageDescription:
        "Stays, tavernas, walks, and a few photos and clips from the road.",
      eyebrow: "Chalkidiki, place by place",
      title: "Places to know",
      subtitle:
        "Stays, tavernas, walks, and a few photos and clips from the road.",
      empty: "No places match this filter yet.",
      readOnJournal: "Read on the journal",
      openOnMap: "Open on map",
      inPeninsula: "In",
      related: "More places",
      back: "All places",
    },
  },
  el: {
    localeName: "Ελληνικά",
    nav: {
      peninsulas: "Χερσόνησοι",
      featured: "Αφιέρωμα",
      journal: "Ημερολόγιο",
      map: "Χάρτης",
      places: "Μέρη",
      contact: "Επικοινωνία",
      plan: "Οργάνωσε το ταξίδι",
    },
    footer: {
      blurb: "Ένα ταξιδιωτικό ημερολόγιο για τις τρεις χερσονήσους της βόρειας Ελλάδας.",
      explore: "Εξερεύνηση",
      social: "Κοινωνικά",
      copyright: "Με επιφύλαξη κάθε δικαιώματος.",
    },
    blog: {
      indexTitle: "Πρόσφατα άρθρα",
      indexSubtitle: "Διάβασε τις τελευταίες σημειώσεις και νέα από τη Χαλκιδική",
      moreTitle: "Περισσότερα άρθρα",
      moreSubtitle: "Διάβασε τις τελευταίες σημειώσεις και νέα από τη Χαλκιδική",
      planTrip: "Οργάνωσε το ταξίδι",
      prev: "Προηγούμενο",
      next: "Επόμενο",
    },
    map: {
      eyebrow: "Στον χάρτη",
      title: (name: string) => `${name} με μια ματιά`,
      subtitle: "Διαμονές, ταβέρνες και μικρές εμπειρίες που αξίζουν την παράκαμψη.",
      pageTitle: "Χάρτης",
      pageDescription: "Κάθε διαμονή, ταβέρνα, εμπειρία και ιστορία σε έναν χάρτη.",
      eyebrowGlobal: "Η Χαλκιδική στον χάρτη",
      titleGlobal: "Εξερεύνησε ολόκληρη την περιοχή",
      filters: {
        all: "Όλα",
        stay: "Διαμονές",
        taverna: "Ταβέρνες",
        experience: "Εμπειρίες",
        journal: "Ημερολόγιο",
        photo: "Φωτογραφίες",
        video: "Βίντεο",
      },
      readMore: "Περισσότερα",
      close: "Κλείσιμο",
    },
    places: {
      pageTitle: "Μέρη",
      pageDescription:
        "Διαμονές, ταβέρνες, περπατήματα και μερικές εικόνες από τον δρόμο.",
      eyebrow: "Η Χαλκιδική, μέρος μέρος",
      title: "Μέρη που αξίζουν",
      subtitle:
        "Διαμονές, ταβέρνες, περπατήματα και μερικές εικόνες από τον δρόμο.",
      empty: "Δεν υπάρχουν μέρη για αυτό το φίλτρο ακόμη.",
      readOnJournal: "Δες στο ημερολόγιο",
      openOnMap: "Άνοιγμα στον χάρτη",
      inPeninsula: "Στην",
      related: "Περισσότερα μέρη",
      back: "Όλα τα μέρη",
    },
  },
} satisfies Record<Locale, object>;
