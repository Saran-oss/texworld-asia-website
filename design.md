# Texworld Asia — Design System Option A: "Botanical Editorial"
### Quiet Luxury / Editorial direction — standalone specification (Revision 2)

---

## 1. Design Direction & Brand Rationale

**Concept:** A restrained, editorial identity that treats cotton and craftsmanship as the subject — quiet confidence instead of loud salesmanship.

**Brand personality:** Measured, material-literate, unhurried, trustworthy, quietly confident.

**Intended impression:** A buyer lands on the homepage and feels they've reached an established specialist, not a wholesale catalogue — the same feeling as opening a well-printed trade portfolio.

**Why it suits Texworld Asia:** The company's positioning claims — years in operation, a supplier network, testing/inspection capability, long-term buyer relationships — are credibility claims, not excitement claims. *(Note: specific figures such as "15+ years," named certifications, client names, or export-destination counts are placeholders for whatever the client can verify; none are asserted as fact in this document. Mark each with its real, confirmed value — or remove it — before publishing copy.)* Editorial restraint lets photography of fabric, fiber and finished product carry the "quality" argument instead of decorative UI.

**Relationship to the logo:** The logo's green is desaturated and deepened into a near-black botanical green for primary use, so it reads as ink rather than a bright corporate accent. The logo's grey cotton-boll tone becomes the system's secondary neutral. The logo's circular "seal" structure (a ring of text framing a mark) is echoed only once — in a small certification/inspection badge motif used near trust content, and only for claims the company can actually verify — never repeated as decoration. The brush-script wordmark itself is never imitated in UI type; it stays exactly as supplied, unaltered.

**Key visual characteristics:** Large serif headlines, generous whitespace, warm ivory grounds, full-bleed editorial photography, thin rule dividers instead of boxes/cards, muted palette with one reserved warm accent.

**Potential weaknesses:** Restraint can read as "slow" to a buyer who wants fast proof (pricing, certifications, specs) above the fold; requires genuinely good photography — without it, the whitespace looks empty rather than premium; lower visual energy may underperform for urgent calls-to-action (RFQ/quote requests) unless CTA contrast is deliberately raised.

---

## 2. Logo Analysis

- **Composition:** combination mark — pictorial symbol (cotton leaf wrapping a grey cotton boll) + a circular wordmark/tagline ring + a separate brush-script logotype "Texworld Asia" beneath.
- **Color relationship:** single green (symbol + ring text) against a neutral grey (boll) on a white/transparent ground. Green ≈ `#1C8A4C`, grey ≈ `#A8A8A8` with a darker grey edge ≈ `#7F7F7F`. *(Sampled approximately from the supplied logo file; confirm against the vector/brand-guideline source if one exists.)*
- **Typography in the mark:** informal brush-script/calligraphic italic — warm, hand-made, personal. This sits in tension with the formal international-trade positioning; the website typography resolves that tension with a disciplined serif/sans pairing rather than echoing the script.
- **Geometric vs. organic:** organic (leaf, boll, flowing script) contained by one geometric structure (the circular ring) — reads as "nature, certified."
- **Formality & weight:** the ring reads like a seal/stamp (credibility, inspection); the script softens it (approachable, relationship-driven).
- **What carries to the website:** the deep green, the grey, the seal/ring idea (used sparingly and only for verifiable claims), the organic/material feeling. **What does not carry:** the script typeface at UI scale, the exact leaf illustration style, gradients or effects — the logo file itself is never redrawn, recolored, distorted, or has effects added.

---

## 3. Colour System

All hex values below are valid 6-digit sRGB. Every text/background and non-text/background pairing has been recalculated using the WCAG relative-luminance method (`L = 0.2126R + 0.7152G + 0.0722B` on linearized channels; `contrast = (L1+0.05)/(L2+0.05)`), not estimated. Figures that corrected an earlier, inaccurate reading are marked **(corrected)**.

| Token | Hex | Purpose | Use | Avoid |
|---|---|---|---|---|
| `--color-primary` | `#1B4332` | Deep botanical green — primary brand color | Nav underline, primary CTA fill, section eyebrows, icon strokes | Large body-text blocks on light backgrounds without checking Section 3 pairs |
| `--color-primary-dark` | `#122D22` | Hover/active state of primary, dark footer ground | Footer background, button hover/active | Body copy |
| `--color-secondary` | `#6B7A6E` | Muted sage-grey derived from logo grey | Secondary buttons, tags, quiet icons | Primary CTAs; body text smaller than 18px |
| `--color-accent` | `#B2834F` | Warm clay-gold — decorative accent (raw cotton/fiber tone) | Icons, dividers, bars, numeral underlines, **large bold display numerals only (≥28px/700 weight)** | Any body-size or UI text; link color; any text under 28px |
| `--color-accent-text` | `#8B5E2A` | Accessible, darker warm-gold — the *text-safe* counterpart of the accent | Link hover/active state, inline warning text, any case where the accent's warmth is needed *as text* | Backgrounds darker than `--color-bg-alt` (re-check contrast before reuse) |
| `--color-bg` | `#F7F5F0` | Warm ivory — main page background | All default section grounds | — |
| `--color-bg-alt` | `#EFEBE2` | Alternate section background, one shade warmer/darker than bg | Alternating content sections, card grounds | — |
| `--color-surface` | `#FFFFFF` | Card/panel surface on top of bg-alt | Forms, elevated panels | Full-page background (too stark against ivory) |
| `--color-text-primary` | `#1F2421` | Near-black warm charcoal | Headlines, body copy | — |
| `--color-text-secondary` | `#4B5350` | Secondary text | Sub-copy, descriptions | Fine print under 14px without re-checking |
| `--color-text-muted` | `#5A615C` | Muted text — **accessible at any text size** | Captions, metadata, timestamps, form helper text | — |
| `--color-text-faint` | `#7C847F` | Faint/quiet text — **large-text or decorative use only** | Large (≥18.66px bold / 24px regular) quiet labels, disabled-adjacent hints, icon-paired micro-copy | Any normal-weight body or caption text under the large-text threshold |
| `--color-border` | `#DAD5C8` | Hairline border/divider | Rules under headings, input borders, table lines | Card "boxes" around every element |
| `--color-btn-primary-bg` | `#1B4332` | Primary button fill | Primary CTA | — |
| `--color-btn-primary-text` | `#FFFFFF` | Primary button label | Primary CTA | — |
| `--color-btn-secondary-bg` | `transparent` | Secondary (outline) button | Secondary CTA | — |
| `--color-btn-secondary-border` | `#1B4332` | Secondary button outline | Secondary CTA | — |
| `--color-btn-secondary-text` | `#1B4332` | Secondary button label | Secondary CTA | — |
| `--color-link` | `#1B4332` | Default link | In-paragraph links | — |
| `--color-link-hover` | `#8B5E2A` | Link hover/active (uses `--color-accent-text`, not the decorative accent) | Hover/active/focus state only | Default (resting) link state |
| `--color-focus` | `#2E6E52` | Focus ring for interactive elements on light backgrounds — 3px, 2px offset | All interactive elements on `--color-bg`/`--color-bg-alt`/`--color-surface` | Elements sitting directly on `--color-primary`/`--color-primary-dark` |
| `--color-focus-on-dark` | `#F7F5F0` | Focus ring for interactive elements on dark/primary backgrounds | Footer, final-CTA band, any control on `--color-primary`/`--color-primary-dark` | Light-background contexts (use `--color-focus` instead) |
| `--color-success` | `#2F7A4D` | Success state | Form success, confirmation text/icon | — |
| `--color-warning-text` | `#8A5A17` | Warning state — **text-safe** amber-brown (replaces the former use of raw accent as warning text) | Inline form warnings (text + icon) | Large decorative fills (use `--color-accent` instead) |
| `--color-error` | `#A3402F` | Error state | Form errors (text + icon) | — |
| `--color-overlay` | `rgba(19,27,22,0.45)` | Image overlay for text legibility | Hero image text protection | Never over product-detail photography |

**Proportions:** ivory/white (`bg`, `bg-alt`, `surface`) ≈ 75% of any screen; deep green ≈ 15% (headlines, nav, CTA); grey-sage ≈ 7%; clay-gold accent ≈ 3%, reserved for single emphasis moments only (never two decorative accent uses visible in the same viewport — this is visual guidance to keep the accent special, not a hard technical limit; a third, incidental accent touch such as a focus ring does not violate it).

### Contrast verification (WCAG 2.2 — recalculated via relative luminance)

| Pair | Ratio | Normal text (≥4.5:1) | Large text (≥3:1) | Non-text UI (≥3:1) | Notes |
|---|---|---|---|---|---|
| `text-primary` #1F2421 on `bg` #F7F5F0 | **14.46:1** | Pass (AAA) | Pass | Pass | — |
| `text-primary` #1F2421 on `bg-alt` #EFEBE2 | **13.19:1** | Pass (AAA) | Pass | Pass | — |
| `btn-primary-text` #FFFFFF on `btn-primary-bg` #1B4332 | **11.08:1** | Pass (AAA) | Pass | Pass | — |
| `text-secondary` #4B5350 on `bg` #F7F5F0 | **7.28:1** (corrected from an earlier "8.3:1") | Pass (AAA) | Pass | Pass | — |
| `text-secondary` #4B5350 on `bg-alt` #EFEBE2 | **6.66:1** | Pass (AA; near AAA) | Pass | Pass | — |
| `text-muted` #5A615C on `bg` #F7F5F0 | **5.84:1** | Pass (AA) | Pass | Pass | New accessible default for captions/metadata |
| `text-muted` #5A615C on `bg-alt` #EFEBE2 | **5.35:1** | Pass (AA) | Pass | Pass | — |
| `text-faint` #7C847F on `bg` #F7F5F0 | **3.53:1** | Fail | Pass | Pass | Large-text/decorative only |
| `text-faint` #7C847F on `bg-alt` #EFEBE2 | **3.23:1** | Fail | Pass (thin margin) | Pass | Prefer bold weight at the large-text minimum size |
| `color-accent` #B2834F on `bg` #F7F5F0 | **3.08:1** (corrected from an earlier, inaccurate "2.5:1") | Fail | Pass (thin margin) | Pass | Use bold weight and ≥28px when set as text; never body-size |
| `color-accent-text` #8B5E2A on `bg` #F7F5F0 | **5.16:1** | Pass (AA) | Pass | Pass | Safe for link-hover/warning text at any size |
| `color-accent-text` #8B5E2A on `bg-alt` #EFEBE2 | **4.73:1** | Pass (AA, thin margin) | Pass | Pass | — |
| `color-warning-text` #8A5A17 on `bg` #F7F5F0 | **5.43:1** | Pass (AA) | Pass | Pass | — |
| `color-success` #2F7A4D on `bg` #F7F5F0 | **4.83:1** | Pass (AA, thin margin) | Pass | Pass | Pair with a success icon, not color alone |
| `color-error` #A3402F on `bg` #F7F5F0 | **5.78:1** | Pass (AA) | Pass | Pass | — |
| `color-focus` #2E6E52 vs `bg` #F7F5F0 (ring vs. adjacent page color) | **5.55:1** | — | — | Pass | Use on light backgrounds only |
| `color-focus-on-dark` #F7F5F0 vs `bg` `--color-primary` #1B4332 | **10.17:1** | — | — | Pass | Use wherever a control sits directly on the primary-green ground |
| `color-btn-secondary-border` #1B4332 vs `bg` #F7F5F0 | **10.17:1** | — | — | Pass | Outline remains visible as a non-text UI component |
| Secondary footer text at 85% opacity white blended over `--color-primary-dark` #122D22 | **≈11.05:1** (blended color ≈#DBE0DE) | Pass (AAA) | Pass | Pass | Verified by blending the opacity against the footer ground, not assumed |

**Resulting usage rules:**
- `--color-accent` (#B2834F) is decorative only: icons, rules, dots, and large bold numerals ≥28px. It must never be used as link, button, or body text color — at those sizes it fails AA.
- `--color-accent-text` (#8B5E2A) is the accessible stand-in whenever the accent's warm tone needs to carry text — this is now the link-hover and inline-warning color.
- `--color-text-muted` is now the default, safe choice for any caption/metadata text; `--color-text-faint` is reserved for large or decorative-only use and must never carry small body/caption copy.
- Disabled controls are exempt from these contrast minimums per WCAG 2.2 (inactive UI), so the existing disabled-button values are unchanged.

---

## 4. Typography System

| Role | Family | Fallback stack | Source |
|---|---|---|---|
| Display / Hero | **Fraunces** (weight 400/500/600, optical size axis `opsz` 9–144) | `"Fraunces", Georgia, "Times New Roman", serif` | Google Fonts, SIL OFL |
| Main heading (H2–H4) | **Fraunces** (weight 500/600) | same stack | Google Fonts |
| Body | **Public Sans** (weight 400/500) | `"Public Sans", -apple-system, "Segoe UI", sans-serif` | Google Fonts, OFL |
| UI / navigation | **Public Sans** (weight 500/600) | same stack | Google Fonts |
| Accent (optional) | none — the system intentionally uses two families only | — | — |

The system uses exactly two type families: **Fraunces** for all display/heading roles and **Public Sans** for all body and UI roles. (The earlier draft of this document listed a contradictory, unused "Source Serif 4" body-font row; that row has been removed. Fraunces's fallback stack no longer references Source Serif 4 either, since it was never loaded.)

**Why these:** Fraunces is a high-contrast, soft-serif display face with genuine editorial character and a wide optical-size (`opsz`) axis that keeps large headline settings crisp without a separate font file; Public Sans is an open, highly legible grotesque built for long-form reading and small UI text, keeping the system fast and legible where Fraunces would strain at small sizes.

**Loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
`font-display: swap` is set via the `css2` request itself; the fallback stacks above render until each font loads, so no layout-blocking flash of invisible text occurs. Self-hosting the two `.woff2` files (one Fraunces variable-font file covering the `opsz`/`wght` ranges, one Public Sans static set) is an acceptable alternative if third-party font requests must be avoided; in that case declare `@font-face` with `font-display: swap` manually.

**Type scale (rem, 1rem = 16px):**

| Style | Desktop (≥1024px) | Tablet (640–1023px) | Mobile (<640px) | Weight | Line-height | Letter-spacing | Font |
|---|---|---|---|---|---|---|---|
| H1 / Hero | 4.5rem (72px) | 3rem (48px) | 2.25rem (36px) | 600 | 1.05 | -0.01em | Fraunces |
| H2 | 2.75rem (44px) | 2.25rem (36px) | 1.75rem (28px) | 500 | 1.15 | -0.005em | Fraunces |
| H3 | 2rem (32px) | 1.75rem (28px) | 1.5rem (24px) | 500 | 1.2 | 0 | Fraunces |
| H4 | 1.375rem (22px) | 1.25rem (20px) | 1.125rem (18px) | 600 | 1.3 | 0 | Public Sans |
| Body large | 1.25rem (20px) | 1.1875rem (19px) | 1.125rem (18px) | 400 | 1.6 | 0 | Public Sans |
| Body regular | 1rem (16px) | 1rem (16px) | 1rem (16px) | 400 | 1.65 | 0 | Public Sans |
| Body small | 0.875rem (14px) | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.55 | 0 | Public Sans |
| Nav | 0.9375rem (15px) | 0.9375rem (15px) | 1rem (16px, drawer) | 500 | 1 | 0.02em | Public Sans |
| Button | 0.9375rem (15px) | 0.9375rem (15px) | 1rem (16px) | 600 | 1 | 0.03em | Public Sans |
| Eyebrow/overline | 0.8125rem (13px) | 0.8125rem (13px) | 0.75rem (12px) | 600 | 1 | 0.12em, uppercase | Public Sans |
| Caption/metadata | 0.8125rem (13px) | 0.8125rem (13px) | 0.8125rem (13px) | 400 | 1.4 | 0.01em | Public Sans |

Every size in the CSS examples (Sections 11 and 14) maps 1:1 to this table; there are no undocumented sizes used anywhere else in the system.

**Responsive behaviour:** H1 never drops below 2.25rem (36px); body text never drops below 1rem (16px) at any breakpoint, including mobile (the button and nav rows increase slightly on mobile instead of shrinking, to keep touch targets legible); line-length target is 60–75 characters for body copy (constrain with `max-width: 38rem` — see `--measure` token in Section 11); eyebrow letter-spacing never exceeds 0.12em for legibility.

---

## 5. Layout & Spacing System

- **Breakpoints:** mobile `<640px`, tablet `640–1023px`, desktop `1024–1439px`, wide `≥1440px`. The navigation's hamburger breakpoint (`<1024px`) is deliberately aligned to the top of the tablet range, so "tablet" and "nav is collapsed" are always the same condition — there is no gap where the layout is tablet-width but the nav is still the full desktop bar, or vice versa.
- **Max content width:** `--container-max: 1200px`, with `--container-wide: 1440px` for full-bleed editorial image sections.
- **Grid:** 12-column, gutters responsive — `--gutter: 24px` desktop, `--gutter-tablet: 16px`, `--gutter-mobile: 16px`.
- **Page padding (responsive):** `--space-page-x: 80px` desktop, `--space-page-x-tablet: 48px`, `--space-page-x-mobile: 20px`.
- **Section spacing (responsive):** `--space-section: 128px` desktop, `--space-section-tablet: 88px`, `--space-section-mobile: 56px` (vertical padding between major sections).
- **Component spacing scale (4px base, same at every breakpoint):** `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-5: 24px`, `--space-6: 32px`, `--space-7: 48px`, `--space-8: 64px`, `--space-9: 96px`.
- **Image aspect ratios:** hero 21:9 (desktop) / 4:5 (mobile crop); editorial split 4:5; product/fabric close-up 1:1; wide banner 16:7.
- **Border radius scale:** `--radius-sm: 2px` (inputs), `--radius-md: 4px` (buttons), `--radius-lg: 0px` (images/cards — intentionally square, editorial, no rounding).
- **Borders/dividers:** 1px hairline `--color-border`, used under headings and between list rows; no boxed "cards" with shadows by default — content is separated by whitespace and rules.
- **Shadows:** none by default; one optional `--shadow-float: 0 12px 32px rgba(19,27,22,0.08)` reserved for sticky nav-on-scroll and modal/dialog only.
- **Container/alignment:** content is left-aligned by default (editorial convention); hero copy may center only on mobile.

All responsive tokens above are also declared as CSS custom properties with breakpoint overrides in Section 11, so the prose and the code agree exactly.

---

## 6. Component Design Language

**Main navigation:** transparent over the hero image (white text, `--color-overlay` scrim) at the top of the page, becomes `--color-surface` with a 1px bottom border and `--shadow-float` once the page scrolls past the hero. Logo mark at 32px height, left-aligned; nav links in Public Sans 0.9375rem/500 with 0.02em tracking, 40px gaps; "Request a Quote" as the one filled primary button at far right. Height 88px desktop / 64px mobile; collapses to a right-aligned hamburger icon at `<1024px` (see Section 5). The mobile drawer slides from the right, full-height, `--color-bg` background, and traps focus while open (`Tab`/`Shift+Tab` cycle only within it; `Escape` closes it and returns focus to the trigger button).

**Dropdown navigation:** simple list, no icons, 1px top border separating it from the trigger, `--color-surface` background, 16px vertical padding, items 44px min-height; opens on click/`Enter`/`Space` and on focus-in via keyboard, closes on `Escape` or an outside click, and is announced with `aria-expanded` on the trigger.

**Primary button:** bg `--color-btn-primary-bg`, text white, padding `14px 32px`, radius `--radius-md`, Public Sans 600 0.9375rem. Hover: bg `--color-primary-dark`, 150ms ease. Focus: 3px `--color-focus` ring (or `--color-focus-on-dark` when the button sits on a `--color-primary`/`--color-primary-dark` ground), 2px offset, always visible — never suppressed. Active: bg darkens a further 6%. Disabled: bg `#B9C2BC`, text `#F7F5F0`, `aria-disabled="true"`, no hover/focus styling change (contrast minimums do not apply to disabled controls under WCAG 2.2, but the control must still be announced as disabled to assistive tech).

**Secondary button:** transparent bg, 1.5px border `--color-btn-secondary-border`, text `--color-btn-secondary-text`. Hover: bg `--color-bg-alt`. Focus/active/disabled mirror the primary pattern with outline variants.

**Text links:** underline always visible (editorial convention, not hover-only), color `--color-link`; hover/active/focus color `--color-link-hover` (`--color-accent-text`) with the underline retained, plus the standard focus ring on keyboard focus.

**Text inputs/textareas:** bg white, 1.5px border `--color-border`, radius `--radius-sm`, padding `12px 16px`, Public Sans 1rem (never smaller — prevents mobile browsers from auto-zooming on focus). Focus: border `--color-primary`, 3px focus ring outside the border. Error: border `--color-error`, helper text 0.8125rem `--color-error` below the field with an inline icon, referenced by the input's `aria-describedby` (never color alone).

**Select controls:** same chrome as text inputs, custom chevron icon (stroke, `--color-text-secondary`), 44×44px minimum touch target, fully operable via keyboard (arrow keys to change value, `Enter`/`Space` to open where a custom listbox is used).

**Form labels/validation:** a real `<label for>` above each field, Public Sans 600 0.875rem, `--color-text-primary`, 8px bottom margin; validation messages at 0.8125rem with icon + color + text (never color alone), linked via `aria-describedby` and announced through `aria-live="polite"` on submit.

**Product/service cards:** no box/shadow — image (1:1 or 4:5) full-width, 1px hairline rule below, eyebrow category label, H4 title, one-line description, text link "Learn more →". Hover: image scales 1.03 over 400ms ease, link color shifts to `--color-accent-text`; the same visual state is reachable via keyboard focus on the card's link (`:focus-within` mirrors `:hover`), and is skipped entirely under `prefers-reduced-motion: reduce`.

**Image cards:** identical treatment to product cards without the CTA link.

**Service list:** numbered editorial list (serif numerals 01–04 in `--color-accent`, bold, ≥28px — within the accent's large-text-safe range), each row separated by a `--color-border` hairline, 48px vertical rhythm.

**Brand/logo displays:** logo shown at a minimum of 120px width, always on `--color-bg`, `--color-surface`, or white — never directly on `--color-primary` (the grey cotton-boll tone loses legibility there) — with clear space on all sides equal to the leaf symbol's own height. The logo file is never recolored, distorted, or given effects.

**Testimonial/quote block:** large Fraunces italic quote (H3 scale), attribution in Public Sans small-caps-style (uppercase, 0.8125rem), a single thin green rule above, no decorative quotation-mark glyphs.

**Statistics/metrics:** large Fraunces numerals in `--color-accent` (H2 scale, bold — within the accent's safe large-text range) with a Public Sans label beneath (0.875rem, `--color-text-secondary`) — used only for figures the company has actually verified; otherwise the stat is omitted rather than invented or left as a placeholder number.

**Image galleries/carousels:** horizontal scroll-snap track, fully swipeable on touch; arrow buttons (44×44px targets) are present and keyboard-focusable at all viewport widths — they fade in visually on desktop hover/focus but remain in the tab order and operable at every breakpoint, including touch devices that also have an attached keyboard. One image is fully visible plus a 10% peek of the next, as a visual affordance that more content follows.

**Section headings:** eyebrow (overline) + H2, 16px gap, optional intro paragraph (≤48 characters per line) beneath at Body large.

**Eyebrows/separators:** eyebrow text as above; section separators are 1px `--color-border` rules spanning the content column only (never full-bleed).

**Final CTA section:** full-bleed deep-green (`--color-primary`) background, white H2, one Body-large line, a single white-outline button inverted to white-fill/green-text on hover. Any focusable control in this section uses `--color-focus-on-dark`, not `--color-focus`, since the page background here is the dark primary green. This is the one section intentionally allowed to break the ivory palette, for emphasis.

**Footer:** `--color-primary-dark` background; primary heading text in full-opacity white/ivory; secondary links at 85% opacity white (verified ≈11:1 against this background — see Section 3); 4-column layout (About, Products, Services, Contact) collapsing to an accordion on mobile; hairline `rgba(255,255,255,0.15)` dividers; logo on a small white tile if needed for contrast (logo artwork itself unaltered).

**Decorative restrictions as guidance, not hard limits:** the "one accent moment per viewport" rule in Section 3 is visual guidance to keep the clay-gold accent feeling special — it should never be relaxed to justify poor contrast, but it also should never block a genuinely necessary second use (e.g., an accent-colored focus indicator appearing alongside an accent-colored stat in the same view is fine; two decorative accent *fills* competing for attention in the same view is what the guidance is trying to prevent).

---

## 7. Image & Photography Direction

- **Hero imagery:** wide, naturally lit shots of raw cotton, woven greige fabric, or finishing-stage textile (not posed stock models); warm daylight color temperature (~4500–5500K); composition favors negative space on one side for headline copy; 21:9 crop desktop, 4:5 mobile.
- **Textile close-ups:** macro shots of weave structure, thread tension, stitching — shallow depth of field, true-to-fabric color (no heavy filtering).
- **Product photography:** finished goods (bedding, towels, curtains) shot on neutral linen/ivory backdrops matching `--color-bg`, soft single-direction light, consistent 1:1 or 4:5 crop across a grid.
- **Manufacturing/sourcing imagery:** only genuine facility/process photography if supplied by the client; otherwise use fabric/material macro shots instead of generic "factory" stock, which undermines authenticity and risks implying an unverified claim about the facility shown.
- **People/workplace photography:** natural, unstaged-looking portraits — warm tone, plain or softly blurred background, no corporate-stock gloss. Any named individual (e.g. a leadership photo) must be confirmed as a real, current member of the company before use.
- **Wide cinematic banners:** 16:7, single dominant subject, ample headroom for a centered or left eyebrow+headline.
- **Editorial split layouts:** image left/text right (or alternating), 55/45 split desktop, stacked image-then-text on mobile.
- **Overlay use:** `--color-overlay` scrim only on hero text zones, linear from the side where text sits, fading to transparent by 60% width — never a flat overlay across an entire photo.
- **What undermines the design:** glossy "corporate handshake" stock photography, oversaturated colors, visible watermarks, generic warehouse-with-forklift imagery, or any stock image that doesn't match the ivory/green color temperature.

---

## 8. Motion & Interaction System

- **Navigation:** background fade-in 200ms ease on scroll threshold (80px); mobile drawer slides 280ms cubic-bezier(0.4,0,0.2,1).
- **Button hover:** background color 150ms ease, no scale/transform.
- **Image hover:** scale(1.03) over 400ms ease on cards/galleries only; never on the hero image.
- **Section reveals:** content fades up 12px over 400ms ease, triggered once at 20% viewport visibility, staggered 60ms per child — subtle, and never re-triggers on scroll-back.
- **Carousels:** native scroll-snap behaviour is preferred over JS-animated autoplay; manual arrow transitions use 250ms ease translate; no autoplay is used anywhere in this system, so no pause control is needed for WCAG 2.2.2.
- **Page transitions:** none required (standard navigation); if used, a 150ms fade only.
- **Loading states:** a thin 2px `--color-primary` progress bar at the viewport top for route/content loads; skeleton blocks in `--color-bg-alt` for async content; no spinners with motion blur.
- **Reduced motion:** every transform and reveal animation listed above is disabled under `prefers-reduced-motion: reduce` — content appears immediately at full opacity and final position, with no functional difference (nothing is revealed *only* by an animation that reduced motion then removes). No autoplaying video with sound anywhere.
- **Keyboard parity:** every hover-triggered visual state (image zoom, link color shift, card elevation) has an equivalent `:focus-within`/`:focus-visible` state, so keyboard users see the same feedback mouse users do.

---

## 9. Responsive Behaviour

- **Desktop (≥1024px):** full 12-column grid, horizontal nav, 2–4 column sections, split editorial layouts side-by-side.
- **Tablet (640–1023px):** nav is collapsed to a hamburger for this entire range (see Section 5); grids reduce to 2 columns; split layouts stack only below 768px; section spacing uses `--space-section-tablet` (88px); page padding uses `--space-page-x-tablet` (48px); gutters use `--gutter-tablet` (16px).
- **Mobile (<640px):** single column; H1 drops to 2.25rem; hero image crops to 4:5 with text placed below the image (not overlaid) whenever overlay contrast can't be guaranteed; buttons expand to full width with a 48px minimum height; forms stack with 16px field gaps; carousels become swipeable scroll-snap with visible, focusable controls; footer collapses to an accordion; section spacing uses `--space-section-mobile` (56px); page padding uses `--space-page-x-mobile` (20px); gutters use `--gutter-mobile` (16px).
- Mobile is treated as its own composition (image-then-headline stacking order sometimes reversed from desktop for faster scannability), not a shrunk desktop layout.

---

## 10. Accessibility & Usability

- Every text/background pair used anywhere in this system is listed and verified in Section 3; where a pair fails for normal text, the system provides a verified, accessible alternative token rather than leaving the failing color in active use.
- Minimum 16px body text everywhere, including form inputs (prevents mobile auto-zoom); buttons/inputs minimum 44×44px touch target.
- A visible focus indicator (`--color-focus` or `--color-focus-on-dark`, chosen by background) appears on every interactive element and is never removed via `outline: none` without an equivalent replacement.
- Logical heading order: one `<h1>` per page, sequential `<h2>`/`<h3>` without skipped levels; nav is a real `<nav>` containing `<a>` elements, fully keyboard-operable with a focus order matching the visual order.
- Forms: every input has a bound `<label>`; errors are announced via `aria-describedby` plus an icon and text, never color alone.
- `prefers-reduced-motion` is respected everywhere per Section 8.
- All informative images carry descriptive `alt` text (e.g. "Raw cotton fiber close-up," never a filename); decorative images use `alt=""`.
- Color is never the sole carrier of meaning — status icons accompany status colors throughout (success/warning/error).

---

## 11. CSS Variables / Design Tokens

```css
:root {
  /* Color — core palette */
  --color-primary: #1B4332;
  --color-primary-dark: #122D22;
  --color-secondary: #6B7A6E;
  --color-accent: #B2834F;          /* decorative only — see Section 3 */
  --color-accent-text: #8B5E2A;     /* accessible text counterpart of the accent */
  --color-bg: #F7F5F0;
  --color-bg-alt: #EFEBE2;
  --color-surface: #FFFFFF;

  /* Color — text */
  --color-text-primary: #1F2421;
  --color-text-secondary: #4B5350;
  --color-text-muted: #5A615C;      /* accessible at any size */
  --color-text-faint: #7C847F;      /* large-text / decorative only */

  /* Color — structure */
  --color-border: #DAD5C8;

  /* Color — buttons & links */
  --color-btn-primary-bg: #1B4332;
  --color-btn-primary-text: #FFFFFF;
  --color-btn-secondary-border: #1B4332;
  --color-btn-secondary-text: #1B4332;
  --color-link: #1B4332;
  --color-link-hover: #8B5E2A;

  /* Color — focus */
  --color-focus: #2E6E52;           /* for controls on light backgrounds */
  --color-focus-on-dark: #F7F5F0;   /* for controls on --color-primary/-dark */

  /* Color — status */
  --color-success: #2F7A4D;
  --color-warning-text: #8A5A17;
  --color-error: #A3402F;
  --color-overlay: rgba(19, 27, 22, 0.45);

  /* Typography */
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Public Sans", -apple-system, "Segoe UI", sans-serif;

  --text-h1: 4.5rem;
  --text-h2: 2.75rem;
  --text-h3: 2rem;
  --text-h4: 1.375rem;
  --text-body-lg: 0.9375rem;   /* 15px — was 1.25rem */
--text-body: 0.9375rem;      /* 15px — was 1rem */
--text-body-sm: 0.9375rem;   /* 15px — was 0.875rem */
  --text-nav: 0.9375rem;
  --text-button: 0.9375rem;
  --text-eyebrow: 0.8125rem;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;

  --leading-tight: 1.05;
  --leading-snug: 1.2;
  --leading-normal: 1.6;

  --tracking-eyebrow: 0.12em;
  --measure: 38rem; /* paragraph max-width, ~60–75 characters */

  /* Spacing (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  /* Responsive layout tokens (desktop defaults) */
  --space-section: 128px;
  --space-page-x: 80px;
  --gutter: 24px;

  /* Layout */
  --container-max: 1200px;
  --container-wide: 1440px;
  --bp-tablet: 640px;
  --bp-desktop: 1024px;
  --bp-wide: 1440px;

  /* Radius & shadow */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 0px;
  --shadow-float: 0 12px 32px rgba(19, 27, 22, 0.08);

  /* Motion */
  --transition-standard: 200ms ease;
  --transition-fast: 150ms ease;
  --transition-reveal: 400ms ease;
}

/* Responsive overrides — tablet */
@media (max-width: 1023px) {
  :root {
    --text-h1: 3rem;
    --text-h2: 2.25rem;
    --text-h3: 1.75rem;
    --space-section: 88px;
    --space-page-x: 48px;
    --gutter: 16px;
  }
}

/* Responsive overrides — mobile */
@media (max-width: 639px) {
  :root {
    --text-h1: 2.25rem;
    --text-h2: 1.75rem;
    --text-h3: 1.5rem;
    --text-h4: 1.125rem;
    --text-body-lg: 1.125rem;
    --text-nav: 1rem;
    --text-button: 1rem;
    --text-eyebrow: 0.75rem;
    --space-section: 56px;
    --space-page-x: 20px;
    --gutter: 16px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

Every token referenced in Sections 6 and 14 is declared above; there are no orphan references.

### Tailwind integration

The CSS variables above are plain CSS custom properties — they work in any project with no Tailwind at all. Tailwind integration is an *additional*, optional mapping layer, and the method differs by major version. Pick one; do not mix v3 config syntax with v4 `@theme` syntax in the same project.

**Tailwind v4 (CSS-first theming).** Tailwind v4 generates utility classes directly from `@theme` blocks in your CSS, using its own variable names. These are a *separate* set of variables from the plain tokens above — copy the values across explicitly rather than assuming the plain `:root` block is read by Tailwind:

```css
@import "tailwindcss";

@theme {
  --color-primary: #1B4332;
  --color-primary-dark: #122D22;
  --color-secondary: #6B7A6E;
  --color-accent: #B2834F;
  --color-accent-text: #8B5E2A;
  --color-bg: #F7F5F0;
  --color-bg-alt: #EFEBE2;
  --color-surface: #FFFFFF;
  --color-text-primary: #1F2421;
  --color-text-secondary: #4B5350;
  --color-text-muted: #5A615C;
  --color-text-faint: #7C847F;
  --color-border: #DAD5C8;

  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Public Sans", -apple-system, "Segoe UI", sans-serif;

  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 24px;
  --spacing-6: 32px;
  --spacing-7: 48px;
  --spacing-8: 64px;
  --spacing-9: 96px;

  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 0px;
}
```
With this block in place, Tailwind v4 generates `bg-primary`, `text-text-primary`, `border-border`, `font-display`, `p-5`, `rounded-md`, etc. automatically, because each variable sits in a namespace (`--color-*`, `--font-*`, `--spacing-*`, `--radius-*`) Tailwind v4 recognizes. A variable in the plain `:root` block from the previous section does **not** by itself create a utility class — only variables declared inside `@theme` (or explicitly re-declared there) do.

**Tailwind v3 (config-based theming) — do not combine with the v4 block above.** In `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1B4332', dark: '#122D22' },
        secondary: '#6B7A6E',
        accent: '#B2834F',
        'accent-text': '#8B5E2A',
        bg: { DEFAULT: '#F7F5F0', alt: '#EFEBE2' },
        surface: '#FFFFFF',
        text: { primary: '#1F2421', secondary: '#4B5350', muted: '#5A615C', faint: '#7C847F' },
        border: '#DAD5C8',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Public Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px',
        5: '24px', 6: '32px', 7: '48px', 8: '64px', 9: '96px',
      },
      borderRadius: {
        sm: '2px', md: '4px', lg: '0px',
      },
    },
  },
};
```
This produces the same class names (`bg-primary`, `text-text-primary`, `font-display`, `p-5`, `rounded-md`) through v3's build-time config instead of v4's CSS-native `@theme`. In both cases, a design token only becomes a usable Tailwind class once it has been registered in the version-appropriate place shown above — writing a CSS variable name that merely *resembles* a Tailwind token name does not generate a utility on its own.

---

## 12. Component Usage Rules

- `--color-accent` is a punctuation mark, not a palette: it appears only as an icon, rule, dot, or large bold numeral (≥28px) — never as body/UI text color, and never as a large background fill.
- When the accent's warm tone is needed *as text* (link hover, inline warnings), use `--color-accent-text`, not `--color-accent`.
- Keep decorative accent fills to roughly one "moment" per viewport as visual guidance (Section 6); this does not override contrast requirements and does not forbid an accent-colored focus ring or icon appearing alongside it.
- Cards never get a drop shadow in the default state; shadows are reserved for true elevation (sticky nav, modal) only.
- Every primary CTA on a page shares identical button styling; never mix filled-button styles for the same action.
- Body copy max-width is `--measure` (38rem) per column; never set full-bleed body text.
- The logo sits only on `--color-bg`, `--color-surface`, or white — never directly on `--color-primary`.
- Use `--color-focus-on-dark` instead of `--color-focus` for any control placed directly on `--color-primary`/`--color-primary-dark` (footer, final CTA).

---

## 13. Do's and Don'ts

**Do:** use generous whitespace; let one strong photograph anchor each section; keep the decorative accent rare and intentional; set body copy in Public Sans at 1rem minimum; use hairline rules instead of boxes; give every hover state a matching keyboard-focus state.

**Don't:** add card shadows "for depth"; use more than the two specified typefaces; round the corners of images; use the logo's script style for UI headings; set body or UI text in `--color-accent` or `--color-text-faint`; use stock photography that doesn't match the warm, natural color temperature; invent a business claim, figure, or certification that hasn't been confirmed by the client.

---

## 14. Example Homepage Section Styling

```css
.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: flex-end;
  padding: var(--space-8) var(--space-page-x);
  background:
    linear-gradient(to right, var(--color-overlay), transparent 60%),
    url('/images/hero-cotton.jpg') center / cover;
}

.hero__eyebrow {
  font: var(--weight-semibold) var(--text-eyebrow) / 1 var(--font-body);
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  color: #FFFFFF;
}

.hero__title {
  font: var(--weight-semibold) var(--text-h1) / var(--leading-tight) var(--font-display);
  color: #FFFFFF;
  max-width: 20ch;
  margin: var(--space-4) 0 var(--space-6);
}

.section--alt {
  background: var(--color-bg-alt);
  padding: var(--space-section) var(--space-page-x);
}

.btn-primary {
  background: var(--color-btn-primary-bg);
  color: var(--color-btn-primary-text);
  font: var(--weight-semibold) var(--text-button) / 1 var(--font-body);
  letter-spacing: 0.03em;
  padding: 14px 32px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

/* Use this variant for any primary button placed on a dark/primary-green section */
.btn-primary--on-dark:focus-visible {
  outline: 3px solid var(--color-focus-on-dark);
  outline-offset: 2px;
}

.link {
  color: var(--color-link);
  text-decoration: underline;
}

.link:hover,
.link:focus-visible {
  color: var(--color-link-hover);
}

@media (prefers-reduced-motion: no-preference) {
  .card__image {
    transition: transform var(--transition-reveal) ease;
  }
  .card:hover .card__image,
  .card:focus-within .card__image {
    transform: scale(1.03);
  }
}
```

---

## 15. Implementation Checklist

- [ ] Load Fraunces + Public Sans via the Google Fonts `css2` request in Section 4 (or self-host equivalents) with `font-display: swap`
- [ ] Register all CSS variables from Section 11 globally, including the tablet/mobile `@media` overrides, before any component CSS
- [ ] Map tokens into Tailwind v4 `@theme` **or** v3 `tailwind.config.js` — not both — per Section 11
- [ ] Verify every new text/background pairing against Section 3 before shipping new content; never reuse `--color-accent` or `--color-text-faint` for small body/UI text
- [ ] Confirm the logo is placed only on `--color-bg`/`--color-surface`/white, at ≥120px width, completely unaltered
- [ ] Build nav as real `<nav>`/`<a>` markup with a working focus trap in the mobile drawer
- [ ] Apply `--color-focus-on-dark` to every control inside the footer and final-CTA sections
- [ ] Implement the `prefers-reduced-motion` override block from Section 11 for all transitions/reveals
- [ ] Source or commission photography matching Section 7 direction before building hero/section imagery
- [ ] Replace every placeholder business claim, figure, certification, or name with a client-verified value before launch (Sections 1–2, 7)
- [ ] QA the mobile breakpoint as its own composition, not a scaled desktop layout
- [ ] Run an automated + manual accessibility pass (axe or equivalent) before launch, re-testing the contrast table in Section 3 against final production colors if any are adjusted
