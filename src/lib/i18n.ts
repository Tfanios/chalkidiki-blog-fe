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
    },
  },
  el: {
    localeName: "Ελληνικά",
    nav: {
      peninsulas: "Χερσόνησοι",
      featured: "Αφιέρωμα",
      journal: "Ημερολόγιο",
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
    },
  },
} satisfies Record<Locale, object>;
