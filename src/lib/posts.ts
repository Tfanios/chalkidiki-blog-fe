import type { Locale } from "./i18n";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: string;
  featured?: boolean;
  cover: {
    src: string;
    alt: string;
  };
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "sithonia-western-coast-tavernas",
    title: "The quiet case for Sithonia's western coast",
    excerpt:
      "Three tavernas, two beaches, and the late light that makes the detour make sense.",
    category: "Coast",
    publishedAt: "2026-05-10",
    readTime: "6 min read",
    author: "iLove Chalkidiki",
    featured: true,
    cover: {
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85",
      alt: "Quiet Mediterranean coastal road at sunset",
    },
    content: [
      "Sithonia's western coast rewards travelers who do not need every beach announced from the highway.",
      "The day works best if lunch is the anchor: grilled sardines, tomato salad, cold house wine, and enough time for the water to change colour twice.",
      "Go in late May or September, when the roads are quieter and the tavernas still have time to explain what came in that morning.",
    ],
  },
  {
    slug: "afytos-without-losing-the-village",
    title: "Where to eat in Afytos without losing the village",
    excerpt:
      "A short list for grilled fish, tomato fritters, house wine, and tables that still feel local.",
    category: "Food",
    publishedAt: "2026-05-04",
    readTime: "5 min read",
    author: "Mira Stone",
    cover: {
      src: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1200&q=85",
      alt: "Greek dishes and bread on an outdoor table",
    },
    content: [
      "Afytos can feel polished by early evening, but it still has good tables if you avoid the loudest view-first promises.",
      "Start with the chalkboard, ask what is actually local, and do not ignore the simplest plates.",
      "The better meals here are rarely elaborate. They are well timed, honestly priced, and close enough to the village to keep their shape.",
    ],
  },
  {
    slug: "first-timers-three-fingers-route",
    title: "A first-timer's route through the three fingers",
    excerpt:
      "How to divide a week between Kassandra, Sithonia, and the Mount Athos coastline.",
    category: "Guide",
    publishedAt: "2026-04-28",
    readTime: "7 min read",
    author: "Theo Vale",
    cover: {
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
      alt: "Mediterranean village overlooking blue water",
    },
    content: [
      "A first trip should not try to see every beach. Chalkidiki is better when each peninsula has a distinct job.",
      "Use Kassandra for arrival ease and village evenings, Sithonia for beaches and pine roads, and the Mount Athos area for slower water and boat days.",
      "A week is enough if you keep the moves clean and build the meals into the route instead of treating them as an afterthought.",
    ],
  },
  {
    slug: "olive-harvest-ormylia",
    title: "What an olive harvest morning near Ormylia teaches you",
    excerpt:
      "Coffee in the grove, fresh oil with a peppery finish, and the patience behind a good bottle.",
    category: "Producers",
    publishedAt: "2026-04-19",
    readTime: "4 min read",
    author: "Nadia Park",
    cover: {
      src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85",
      alt: "Olive branches in soft Mediterranean light",
    },
    content: [
      "The first taste of new oil is sharper than visitors expect. It catches at the back of the throat, then settles into something grassy and clean.",
      "Near Ormylia, the best visits are not performances. They are working mornings with a short explanation, a long coffee, and a table set under shade.",
      "Buy less than you think and ask when it was pressed. That question tells you more than the label.",
    ],
  },
];

const greekPosts: BlogPost[] = [
  {
    ...posts[0],
    title: "Η ήσυχη υπόθεση για τη δυτική ακτή της Σιθωνίας",
    excerpt:
      "Τρεις ταβέρνες, δύο παραλίες και το φως του απογεύματος που δικαιώνει την παράκαμψη.",
    category: "Ακτή",
    readTime: "6 λεπτά",
    content: [
      "Η δυτική ακτή της Σιθωνίας ανταμείβει τους ταξιδιώτες που δεν χρειάζονται κάθε παραλία γραμμένη σε πινακίδα.",
      "Η ημέρα λειτουργεί καλύτερα όταν το μεσημεριανό είναι η άγκυρα: σαρδέλες στη σχάρα, ντοματοσαλάτα, κρύο λευκό κρασί και αρκετός χρόνος για να αλλάξει το χρώμα του νερού.",
      "Πήγαινε στα τέλη Μαΐου ή τον Σεπτέμβριο, όταν οι δρόμοι είναι πιο ήσυχοι και οι ταβέρνες έχουν ακόμα χρόνο να εξηγήσουν τι ήρθε το πρωί.",
    ],
  },
  {
    ...posts[1],
    title: "Πού να φας στην Άφυτο χωρίς να χάσεις το χωριό",
    excerpt:
      "Μια σύντομη λίστα για ψάρι, ντοματοκεφτέδες, κρασί και τραπέζια που παραμένουν τοπικά.",
    category: "Φαγητό",
    readTime: "5 λεπτά",
    content: [
      "Η Άφυτος μπορεί να μοιάζει πολύ γυαλισμένη νωρίς το βράδυ, αλλά κρατά καλά τραπέζια αν αποφύγεις τις πιο θορυβώδεις υποσχέσεις θέας.",
      "Ξεκίνα από τον μαυροπίνακα, ρώτα τι είναι πραγματικά τοπικό και μην αγνοήσεις τα απλούστερα πιάτα.",
      "Τα καλύτερα γεύματα εδώ σπάνια είναι περίτεχνα. Είναι σωστά χρονισμένα, τίμια στην τιμή και αρκετά κοντά στο χωριό ώστε να κρατούν τον χαρακτήρα τους.",
    ],
  },
  {
    ...posts[2],
    title: "Η πρώτη διαδρομή στα τρία πόδια",
    excerpt:
      "Πώς να μοιράσεις μία εβδομάδα ανάμεσα στην Κασσάνδρα, τη Σιθωνία και την ακτή του Αγίου Όρους.",
    category: "Οδηγός",
    readTime: "7 λεπτά",
    content: [
      "Ένα πρώτο ταξίδι δεν χρειάζεται να δει κάθε παραλία. Η Χαλκιδική λειτουργεί καλύτερα όταν κάθε χερσόνησος έχει τον δικό της ρόλο.",
      "Χρησιμοποίησε την Κασσάνδρα για εύκολη άφιξη και βραδιές στα χωριά, τη Σιθωνία για παραλίες και πευκόδρομους, και την περιοχή του Αγίου Όρους για πιο αργό νερό και εκδρομές με καραβάκι.",
      "Μία εβδομάδα αρκεί αν κρατήσεις τις μετακινήσεις καθαρές και εντάξεις τα γεύματα στη διαδρομή αντί να τα αφήσεις για μετά.",
    ],
  },
  {
    ...posts[3],
    title: "Τι μαθαίνει ένα πρωινό στον ελαιώνα κοντά στην Ορμύλια",
    excerpt:
      "Καφές στο κτήμα, φρέσκο λάδι με πιπεράτο τελείωμα και η υπομονή πίσω από ένα καλό μπουκάλι.",
    category: "Παραγωγοί",
    readTime: "4 λεπτά",
    content: [
      "Η πρώτη δοκιμή νέου λαδιού είναι πιο έντονη απ' όσο περιμένουν οι επισκέπτες. Πιάνει στον λαιμό και μετά γίνεται πράσινη και καθαρή.",
      "Κοντά στην Ορμύλια, οι καλύτερες επισκέψεις δεν είναι παραστάσεις. Είναι πρωινά δουλειάς με σύντομη εξήγηση, έναν μεγάλο καφέ και τραπέζι στη σκιά.",
      "Αγόρασε λιγότερο απ' όσο νομίζεις και ρώτα πότε πιέστηκε. Αυτή η ερώτηση λέει περισσότερα από την ετικέτα.",
    ],
  },
];

const postsByLocale = {
  en: posts,
  el: greekPosts,
} satisfies Record<Locale, BlogPost[]>;

export function getPosts(locale: Locale = "en") {
  return [...postsByLocale[locale]].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedPost(locale: Locale = "en") {
  return getPosts(locale).find((post) => post.featured) ?? getPosts(locale)[0];
}

export function getCategories(locale: Locale = "en") {
  return Array.from(new Set(getPosts(locale).map((post) => post.category)));
}
