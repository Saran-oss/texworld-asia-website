# Texworld Asia — Design System (Revision 3: As-Built)
### Documents the site as it actually exists today, not an aspirational starting point.

---

## 1. Design Direction & Brand Rationale

**What changed from Revision 2:** The original "Botanical Editorial" spec called for a hushed, all-ivory, no-rounding, no-motion trade-portfolio aesthetic. That is not what got built. What's live is a **bolder, more kinetic, modern textile brand**: a huge tight-tracked serif wordmark, black pill CTAs, a scrolling product carousel with GSAP reveals, an infinite brand-logo marquee, a full-bleed autoplay video section, and one deliberately dramatic dark "frosted glass over photography" section. This revision documents *that* system, because it's the one actually shipping, not the one originally planned.

**Brand personality now:** Confident, modern, a little theatrical in its motion, still grounded in real sourcing/inspection credibility — closer to a contemporary B2B brand site than a quiet print portfolio.

**Intended impression:** A buyer lands on the homepage and feels they've reached an active, capable, international-facing operator — not a sleepy local broker. Motion and scale are used to project competence and momentum.

**Relationship to the logo:** The leaf-and-boll mark and brush-script wordmark are used as supplied, unaltered. On white/light surfaces the full logo image is used directly. On dark surfaces (footer) it currently sits with no backing tile — watch legibility here (see Section 12).

---

## 2. Logo Usage (unchanged from original)

- Composition: cotton-leaf + boll mark, circular ring text, brush-script "Texworld Asia" wordmark beneath.
- Never redrawn, recolored, distorted, or given effects.
- Used directly as an `<img>` at both in the nav (`/logo.png`) and the footer (`/lo2.png`) — these are two different exported files; confirm they're the same logo at different crops/resolutions, not two different assets, before shipping further pages.

---

## 3. Colour System (as actually used)

The site runs on **two overlapping green families** plus a **near-black action color** that the original spec didn't anticipate. Documenting both rather than pretending only one exists:

| Token | Hex | Where it's actually used |
|---|---|---|
| `--color-ink` | `#302B2B` | Primary heading/text color in Hero, Products, Brands — a warmer near-black than the old `--color-text-primary` |
| `--color-text-secondary` | `#4B5350` | Body copy in Products modal, Brands intro — unchanged from original, still accurate |
| `--color-text-muted` | `#5A615C` | CTA subtext, CEO sign-off title — unchanged from original |
| `--color-primary` (formal green) | `#1B4332` | Footer background pairing (`--color-primary-dark` `#122D22`), CEO sign-off name, Final CTA divider rule — the "official," restrained brand green |
| `--color-accent-green` (leaf green) | `#4F8C52` *(consolidated from observed `#568E49`, `#3F6B4C`, `#8FBF7A`, `#8ebc9b`)* | Eyebrow labels and thin divider rules across Hero, Products, Brands, Services — a brighter, more energetic green than `--color-primary` |
| `--color-action` | `#111111` (hover `#000000`) | **The real primary CTA color sitewide** — every "Request a Quote" / "Request a quote" button on Hero, Header, Intro, and Final CTA is a solid near-black pill, not green |
| `--color-bg` | `#FFFFFF` | Hero, Intro, Products, Brands, Final CTA — white is now the dominant ground, not ivory |
| `--color-bg-alt` | `#F7F5F0` / `#EFEBE2` | Still used for the CEO Message section only |
| `--color-bg-dark-feature` | `#101411` over `/back.jpg` | Services section only — a deliberate dark photographic exception (see Section 6) |
| `--color-footer-bg` | `#122D22` | Footer |

**Known inconsistency to resolve:** four different greens (`#568E49`, `#3F6B4C`, `#8FBF7A`, `#8ebc9b`) are currently doing the same decorative job (eyebrow text / thin rule accents) in different sections. They read as "the same idea, slightly off" rather than intentional variation. Recommendation: pick one `--color-accent-green` value and apply it everywhere that role appears, reserving `--color-primary` (`#1B4332`) for the handful of "formal" brand moments (footer, CEO signature, final CTA divider).

**Accessibility note:** `--color-ink` (`#302B2B`) on white has not been re-verified against WCAG since it replaced the original `#1F2421` — it's close enough to still pass comfortably (both are near-black on white), but if it's ever placed on a mid-tone background, re-check contrast before shipping.

---

## 4. Typography System (as actually used)

| Role | Family actually used | Where |
|---|---|---|
| All headlines, numerals, quote/signature text | **Fraunces** (weights 400–600, often italic for a secondary emphasis word) | Hero, Intro stats, Products, Banner, Brands, Services, CEO Message, Final CTA |
| Body copy / labels / eyebrows (marketing sections) | **"Helvetica Neue", Arial, "Segoe UI", sans-serif** (hardcoded, not a CSS variable) | Hero subhead, Intro body, Products descriptions, Banner eyebrow, Brands body |
| Body copy / labels (content sections) | **Public Sans** via `var(--font-body)` | CEO Message, Footer, form elements, base `body` style in `index.css` |

**Known inconsistency to resolve:** two different sans-serif stacks are live at once — a hardcoded system/Helvetica stack in the more recently-built marketing sections, and the original `--font-body` (Public Sans) token everywhere else. Neither is wrong on its own, but they should converge on one. Since Public Sans is already loaded sitewide and used in the base styles, the lower-effort fix is updating the Helvetica-stack sections to use `var(--font-body)` instead of hardcoding a different stack — but if the Helvetica look is intentional (it does read slightly more neutral/modern against Fraunces), that's a legitimate choice too — just make it the *one* documented choice, not an accident of which section was built when.

**Headline tracking is tighter than originally specified:** the Hero wordmark uses `letter-spacing: -3px` at huge sizes, Intro/Products/Services headings use `-0.025em` to `-0.04em`. This is notably tighter than Revision 2's `-0.005em`–`-0.01em` and is part of why the type now reads bolder/more condensed. Keep this tighter tracking as the current standard for large Fraunces display text.

**Eyebrow labels:** now consistently uppercase, 10–13px, 0.1em–0.24em letter-spacing, in the accent green — same *idea* as Revision 2's eyebrow spec, just with heavier tracking and the brighter green instead of the deep primary green.

---

## 5. Layout, Radius & Spacing (as actually used)

- **Section backgrounds mostly alternate white → white** now, with only three real departures: CEO Message (ivory `section-alt`), Services (dark photographic), Footer (dark green). This is a flatter rhythm than Revision 2's ivory/alt-ivory alternation.
- **Border radius is no longer "0 on everything editorial."** Actual radius usage:
  - Primary/secondary CTA buttons: **full pill (`999px`)**, everywhere, including header, hero, intro, final CTA — this is now the one consistent button shape sitewide.
  - Service cards (Services section): `17px` rounded, frosted glass panels.
  - Brand logo tiles: `4px`.
  - Product carousel cards: square (no radius) — matches the original "no rounding on photography" instinct.
  - Modal/lightbox image (Products): square, explicitly `borderRadius: 0`.
- **Section vertical padding is tighter than Revision 2's 128px/88px/56px scale** — most homepage sections now run 56–80px top/bottom (e.g. Intro `56px`, Services `68px`, Products `72px`, Final CTA `72px`). Treat **56–80px** as the new default section padding on desktop, not 128px.
- **Max width / container:** still `container-wide` at 1440px, consistent with the original token.

---

## 6. Component Design Language (section-by-section, as built)

**Header:** Fixed, white background always (not transparent-over-hero as Revision 2 proposed) — 72–88px tall, shrinks slightly on scroll with a shadow. Logo on the left, centered nav links with a green underline for the active route, a black pill "Request a Quote" button on the right, full-height slide-in drawer on mobile with focus-trap.

**Hero:** White background with a soft radial sage-green glow behind the wordmark. Giant tight-tracked Fraunces wordmark split into two colors (`#302B2B` + `#4F8C52`-family green). Uppercase Helvetica-stack subhead. Two pill buttons (black filled "Request a Quote," black-outline "Learn More"). Below the fold copy, a tilted auto-scrolling image grid of six textile photos.

**Intro:** White background. Eyebrow + serif heading + body copy on the left (max measure), a vertical stack of three animated count-up statistics on the right, each row divided by a hairline. One black pill CTA.

**Products:** White background with a very subtle animated ambient gradient. GSAP-driven word-by-word heading reveal, a horizontally scrollable card carousel (10 categories) with image-reveal-on-scroll, hover zoom, and a click-to-expand modal with full description. Auto-advances slowly when idle, pauses on interaction.

**Banner (Global Reach):** Full-bleed autoplay/muted/looped video background, dark radial vignette behind centered white serif copy, uppercase with one italic connecting word per line ("Rooted in Pakistan **and** / **ready** for the world's trade").

**Brands:** White background. Eyebrow + serif heading + green divider rule + intro line, then two rows of brand-logo tiles scrolling in opposite directions on an infinite marquee, masked to fade at the edges, pausing on hover.

**Services:** The one deliberate dark/dramatic section — a photographic background (`/back.jpg`) with cursor-reactive parallax, a dark tint overlay, and six frosted-glass cards (blurred, translucent, 17px radius) in a numbered grid. This directly contradicts the original "no glassmorphism" rule — and that's fine; it's one intentional high-contrast moment against an otherwise flat-white homepage, not a sitewide pattern. Keep it scoped to this one section.

**CEO Message:** Closest section to the original Revision 2 spec — ivory `section-alt` background, split portrait/quote layout, scroll-triggered staggered reveal, green hairline, Fraunces heading with one italic phrase.

**Final CTA ("Ready to Partner With Us?"):** Near-white background, centered, bold Fraunces heading, short green divider, muted subtext, single black pill button. Compact — capped well under 500px tall, not a full-bleed dark band like Revision 2 specified.

**Footer:** Dark green (`#122D22`) background, three columns (logo + description / flat "Useful Links" list / "Address" block with plain-text contact details), no social icons, no bottom copyright bar.

---

## 7. Image & Photography Direction

Largely unchanged in spirit from Revision 2 — natural daylight, true-to-fabric color, no glossy corporate-handshake stock. What's new in practice:

- The site now also uses **video** (Banner section, muted autoplay loop) as a hero-adjacent device, not just stills.
- The Services section photo is treated with a dark overlay + frosted cards on top, rather than letting the photo carry text directly via a side gradient as Revision 2 described — this is the one section where the image is a backdrop for UI rather than the primary subject.
- Product card photography uses a bottom-up dark gradient scrim under white text, not a side scrim.

---

## 8. Motion & Interaction System (significantly expanded from Revision 2)

Revision 2 called for one restrained reveal per section and nothing else. What's actually live is a much richer, more "premium interactive" motion language:

- **Scroll-triggered reveals** (IntersectionObserver): CEO Message, Services cards, Final CTA — fade + translateY, staggered per element, fires once.
- **GSAP scroll-triggered sequences** (Products): word-mask heading reveal, clip-path image wipes, scroll-scrub parallax on card images.
- **Infinite marquee** (Brands): two rows of logos scrolling opposite directions, continuous, pausing on hover.
- **Count-up numbers** (Intro): animated number counters triggered on mount.
- **Cursor-reactive parallax background** (Services): background image shifts subttly toward the cursor position.
- **Auto-advancing carousel** (Products): idles forward/back automatically, pauses on any interaction.
- **Autoplay video** (Banner): muted, looped, no controls.
- **Hover states:** image scale-up on product cards, lift on service cards, pill-button fill/darken + slight scale on CTAs.

**Still true from Revision 2 and must stay true:** every animated element must have a `prefers-reduced-motion: reduce` fallback that shows final state immediately — this is already implemented correctly in every section reviewed (Hero's tilted grid, Products' GSAP timeline, Services, CEO, Final CTA, Brands' marquee all check for it).

---

## 9. Responsive Behaviour

Breakpoints remain consistent with the original (`<640px` mobile, `640–1023px` tablet, `≥1024px` desktop), but several sections now use their own bespoke breakpoints inline (e.g. Products scroller, Services grid at `1000px`/`600px`) rather than the shared tokens. This is acceptable for one-off interactive components but should not spread further — new sections should default to the shared breakpoints unless there's a specific layout reason not to.

---

## 10. Accessibility & Usability

Carried over from Revision 2 and still generally respected in what's built:
- Every reveal/motion effect checked has a working `prefers-reduced-motion` fallback.
- Modal (Products) traps focus-equivalent behavior via `Escape`-to-close and scroll lock (verify full focus trap before launch — current implementation closes on Escape but should be checked for a complete focus loop like the mobile nav drawer has).
- Mobile nav drawer has a correct, verified focus trap.
- Logo `alt` text is descriptive, not a filename.

**Open item:** the footer logo (`/lo2.png`) currently sits directly on the dark green background with no contrast-safety tile behind it, unlike the nav logo. Confirm it reads clearly at normal viewing size before launch, since the original rule ("logo never directly on `--color-primary` without a backing tile") was written specifically because low-contrast logo marks lose legibility on the dark green.

---

## 11. CSS Variables / Design Tokens (updated)

```css
:root {
  /* Ink & text */
  --color-ink: #302B2B;
  --color-text-secondary: #4B5350;
  --color-text-muted: #5A615C;

  /* Formal brand green — footer, CEO signature, final-CTA divider */
  --color-primary: #1B4332;
  --color-primary-dark: #122D22;

  /* Decorative leaf green — eyebrows & thin rules across marketing sections */
  --color-accent-green: #4F8C52;

  /* Real primary action color — every CTA pill sitewide */
  --color-action: #111111;
  --color-action-hover: #000000;

  /* Backgrounds */
  --color-bg: #FFFFFF;
  --color-bg-alt: #F7F5F0;
  --color-bg-alt-2: #EFEBE2;
  --color-bg-dark-feature: #101411; /* Services section only, over /back.jpg */
  --color-footer-bg: #122D22;

  /* Typography */
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Public Sans", -apple-system, "Segoe UI", sans-serif;
  --font-body-alt: "Helvetica Neue", Arial, "Segoe UI", sans-serif; /* used in Hero/Products/Banner/Brands — consolidate with --font-body when convenient */

  /* Radius */
  --radius-pill: 999px;   /* all CTA buttons */
  --radius-card: 17px;    /* Services frosted cards only */
  --radius-tile: 4px;     /* brand logo tiles */
  --radius-none: 0px;     /* product/modal photography */

  /* Spacing (section padding, desktop) */
  --space-section-default: 72px; /* was 128px in Revision 2 — actual sections run 56–80px */
}
```

---

## 12. Open Issues to Resolve (carried forward as action items, not opinions)

1. **Four greens doing one job.** Consolidate `#568E49` / `#3F6B4C` / `#8FBF7A` / `#8ebc9b` into the single `--color-accent-green` token above, applied consistently to every eyebrow/thin-rule accent.
2. **Two sans-serif stacks.** Decide whether the Helvetica/system stack (Hero, Products, Banner, Brands) or Public Sans (CEO, Footer, forms) is the real body font, and apply it everywhere.
3. **Footer logo legibility.** `/lo2.png` has no backing tile on the dark green background — confirm it's legible, or add one back.
4. **Two logo files.** `/logo.png` (nav) and `/lo2.png` (footer) — confirm these are deliberately different exports and not an accidental duplicate asset.
5. **Services section glassmorphism** is a deliberate, scoped exception to an otherwise flat site — document it as such so a future contributor doesn't either rip it out as "inconsistent" or spread it elsewhere thinking it's the new default.

---

## 13. Do's and Don'ts (updated for what's actually live)

**Do:** use the black pill button for every primary action, site-wide, without exception; use Fraunces for every headline and numeral; keep the Services-style frosted/dark treatment to that one section only; respect `prefers-reduced-motion` on every new animated element, the way every current section already does; keep product/modal photography unrounded.

**Don't:** introduce a second accent-green shade without adding it to Section 11 first; add a new hardcoded font stack — use `--font-display` or the agreed body token; round product photography; add new sitewide glassmorphism/glow effects outside the Services section; invent a business claim, figure, or certification that hasn't been confirmed by the client.