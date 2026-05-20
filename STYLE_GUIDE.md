# iLove Chalkidiki — Brand & Style Guide

**Version 1.0** · A travel journal for the three peninsulas of northern Greece.

---

## A note on structure

This guide describes a homepage built in the **same section sequence** used by the reference site `bali-travel.webflow.io` — hero → destination/category cards → featured block → category grid → testimonial → journal → newsletter → footer. That ordering is a common travel-site pattern and is reused here deliberately.

What is **not** copied is the reference site's actual design: its specific layout proportions, colours, typography, imagery, and code belong to a licensed Webflow template. iLove Chalkidiki is an original design that follows the familiar section *flow* while being entirely its own brand. Use this guide as the single source of truth; rebuild the layout yourself (in Webflow, plain HTML/Tailwind, or any tool) using the structure and tokens below.

---

## 1. Brand foundation

iLove Chalkidiki is a polished, editorial travel journal. It exists to document the food, hospitality, and quiet coastline of Chalkidiki with magazine-grade writing and photography.

**Four guiding principles**

1. **A trusted editor, not a tour operator.** Every recommendation is first-hand and earned. The writing has craft and a confident point of view — closer to a travel magazine than a personal blog.
2. **The three-peninsula coastline is the hero.** Kassandra, Sithonia, and the Mount Athos area give the brand a built-in icon and a natural way to organise content.
3. **Pine meets sea.** Chalkidiki is greener than the bare Cycladic islands — pine forest running down to clear water. The palette holds both the cool Aegean and the warm mainland.
4. **Food and hospitality lead; beaches support.** Tavernas, family guesthouses, and local food experiences get the deepest coverage. Greek *philoxenia* — the love of strangers — is the emotional core.

**Brand name treatment** — Always written *iLove Chalkidiki*. The word **Love** always carries the terracotta colour in italic. Never "I Love" with a space, never all-caps.

---

## 2. Colour

The Aegean palette: cool sea blues lead, warmed by sand, olive, and a terracotta clay accent. Whitewash and photography do most of the work; terracotta is used sparingly so it always signals "act here."

| Token | Hex | Role |
|---|---|---|
| Aegean Blue | `#1B5E83` | Primary — links, key headings, icon backgrounds |
| Deep Navy | `#0E3D57` | Dark sections, footer, featured blocks |
| Shallow Teal | `#5BA7B8` | Secondary — eyebrow labels, small accents |
| Terracotta Clay | `#C75B3F` | Accent — CTAs, highlights, the "Love" in the logo |
| Clay Deep | `#9A3F28` | Accent text on light backgrounds (category labels) |
| Pine Olive | `#6E7A52` | Tertiary — prices, nature references |
| Dry Sand | `#E7D9C2` | Section backgrounds (alternating bands) |
| Wet Sand | `#C9B48E` | Borders, dividers |
| Whitewash | `#FBF8F2` | Default page background |
| Ink | `#243137` | Body text |
| Ink Soft | `#51606A` | Muted body text, captions |

**Suggested usage ratio** — Whitewash ~54%, Aegean ~22%, Sand ~14%, Terracotta ~6%, Olive ~4%. One terracotta accent per screen, no more.

---

## 3. Typography

| Use | Font | Weight & size |
|---|---|---|
| Display / headlines | **Fraunces** (serif) | 400–500 · 44–80px |
| Heading 2 | Fraunces | 500 · 30–44px |
| Heading 3 | Mona Sans | 600 · 20–22px |
| Body | **Mona Sans** (sans) | 400 · 16–18px |
| Eyebrow / label | Mona Sans | 600 · 12–13px · uppercase · letter-spacing +0.16em |

Both fonts are free on Google Fonts. Fraunces brings editorial warmth and a postcard feel; its italic is used for asides and the brand name. Mona Sans handles all body text and UI. Never substitute generic system fonts.

---

## 4. Logo

A wordmark — *iLove Chalkidiki* — paired with a symbol: three vertical strokes (the three peninsulas / pine forests) above a terracotta wave (the Aegean). The mark sits in a rounded square with a blue gradient.

- **Primary lockup** — full-colour mark + wordmark, for light backgrounds.
- **Reversed lockup** — same mark, white wordmark, for photos and dark blocks.
- "Love" is always terracotta italic in every lockup.
- Minimum clear space around the logo = the height of the mark.

---

## 5. Homepage structure

The homepage follows this section order top to bottom. Sections alternate between whitewash and sand backgrounds for rhythm.

1. **Sticky navigation** — Logo left; links centre/right (Where to stay · Where to eat · The guide · Journal); terracotta "Plan your trip" button. Transparent over the hero, switches to solid whitewash with a soft shadow on scroll.

2. **Hero** — Full-bleed background photo with a navy gradient overlay. Small pill eyebrow, large Fraunces headline (with one word in terracotta italic), short supporting line, two buttons (terracotta primary + outline secondary), and a row of three stats (peninsulas / tavernas reviewed / first-hand).

3. **Intro strip** — Two columns: an eyebrow + headline + positioning paragraph on one side, a pair of stacked images on the other. Establishes the food-and-hospitality angle.

4. **Where to stay** — Section heading with an "All stays" link, then a three-card grid of guesthouses/hotels. Each card: image with a peninsula tag, name, one-line description, price in olive, and a circular arrow button.

5. **This month's table (featured)** — A single wide split block: large food photo on one side, deep-navy panel on the other with an editorial write-up, tag pills, and a terracotta "Read the full feature" button.

6. **Food & local experiences** — Eyebrow + heading, then a three-item grid of experiences (olive harvest, honey road, fish market). Lighter cards — image, title, short line.

7. **Testimonial** — One deep-navy rounded block with a large oversized quote mark, an italic Fraunces quote, and a reader attribution with an avatar.

8. **The journal** — Section heading with an "All articles" link, then a three-card blog grid. Each card: image, terracotta category label, headline, short excerpt.

9. **Newsletter** — A rounded block over a background photo with a navy overlay, centred: headline, supporting line, email input + terracotta subscribe button.

10. **Footer** — Deep-navy. Four columns: brand blurb, Explore links, the three peninsulas, social links. Copyright line beneath a thin divider.

---

## 6. Components

**Buttons**
- *Primary* — terracotta background, whitewash text, fully rounded (pill), soft terracotta shadow. Lifts slightly on hover.
- *Secondary* — transparent with a white or aegean border. Used over photos or beside a primary.
- *Text link* — aegean text with a 2px terracotta underline; gap widens on hover.

**Cards**
- Rounded corners (16–24px), white background, soft navy-tinted shadow, thin sand border.
- Image zooms gently on hover. A small uppercase tag pill sits top-left on the image.
- Stay cards include a price (olive) and a circular arrow button that turns terracotta on hover.

**Tags & pills** — Fully rounded. Three styles: neutral (sand), olive, and terracotta. Used for categories like *Family-run*, *Sea-to-table*, *Editor's pick*.

**Eyebrow label** — Every section opens with a short uppercase label preceded by a small terracotta line, paired with a Fraunces heading underneath.

**Inputs** — Pill-shaped, white, sand border, teal focus ring.

---

## 7. Voice & tone

Polished, editorial, travel-magazine quality. Warm but composed; affectionate but never gushing.

**Do**
- Write with an assured authorial voice; open with a scene or observation.
- Be precise — name the dish, the producer, the village, the season.
- Use considered sensory detail and varied sentence rhythm.
- Make confident judgements, backed by specifics.
- Use Greek terms lightly, with a soft translation (*philoxenia*, *meraki*).

**Don't**
- Use brochure clichés — "paradise", "hidden gem", "must-see".
- Slip into chatty blog filler, emoji, or strings of exclamation marks.
- Hype everything; if all of it is stunning, none of it is.
- Write vague praise — "great food, lovely views" says nothing.
- Sound sponsored.

**Words we like** — considered, unhurried, family-run, sun-baked, sea-to-table, quietly excellent, well-judged, honest, worth the journey.

**Sample headline** — *"The quiet case for Sithonia's western coast — and the three tavernas that make it."*

---

## 8. Editorial standards

1. **First-hand and honest.** Only feature places that have been visited; state trade-offs plainly; never accept payment for coverage.
2. **Article structure** — scene → context → detail (prices, seasons, how to get there) → considered verdict.
3. **House style** — Greek place names transliterated consistently; prices in euros with a clear basis ("per person", "per night"); seasons preferred over exact dates.
4. **Photography carries equal weight** — magazine-quality images only; natural light, warm grading, food and hospitality leading, a sign of life in every hospitality shot. Never publish a feature with weak visuals.

---

## 9. Implementation tokens

CSS custom properties — drop these into the `:root` of any build:

```css
:root {
  --aegean:      #1B5E83;
  --aegean-deep: #0E3D57;
  --shallow:     #5BA7B8;
  --clay:        #C75B3F;
  --clay-deep:   #9A3F28;
  --olive:       #6E7A52;
  --sand:        #E7D9C2;
  --sand-deep:   #C9B48E;
  --whitewash:   #FBF8F2;
  --ink:         #243137;
  --ink-soft:    #51606A;
}
```

Google Fonts embed:

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Mona+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Tailwind config (if building with Tailwind):

```js
theme: {
  extend: {
    colors: {
      aegean:'#1B5E83', 'aegean-deep':'#0E3D57', shallow:'#5BA7B8',
      clay:'#C75B3F', 'clay-deep':'#9A3F28', olive:'#6E7A52',
      sand:'#E7D9C2', 'sand-deep':'#C9B48E', whitewash:'#FBF8F2',
      ink:'#243137', 'ink-soft':'#51606A',
    },
    fontFamily: {
      display: ['Fraunces','serif'],
      body: ['Mona Sans','sans-serif'],
    },
  }
}
```

**Webflow note** — Webflow doesn't use Tailwind. Recreate these as Webflow global colour swatches and a typography system, then build each section from §5 as native Webflow classes. The hex values, fonts, and section order transfer directly; the utility classes do not.

---

*End of guide — iLove Chalkidiki Brand & Style Guide v1.0. Photography referenced in any mockups is placeholder only; replace with original Chalkidiki imagery before publishing.*