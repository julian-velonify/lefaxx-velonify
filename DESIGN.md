---
name: Le Faxx
description: Premium-Denim-Fertigung aus Istanbul und Sivas, gesetzt als gedruckter Firmenbericht im Modemagazin-Satz.
colors:
  paper: "#F5F5F2"
  paper-2: "#EAEBEE"
  white: "#FCFCFA"
  ink: "#11152B"
  ink-soft: "#4B5064"
  indigo: "#0A2470"
  indigo-deep: "#081A52"
  red: "#C8512F"
  red-ink: "#A6401F"
  rule: "rgba(17,21,43,.16)"
  rule-light: "rgba(252,252,250,.24)"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.1rem, 8.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.3rem, 4.6vw, 4.1rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.45rem, 2vw, 1.85rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.3vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 600
    lineHeight: 1.2
  caption:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
spacing:
  s1: "0.5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2.5rem"
  s5: "4rem"
  s6: "6rem"
  s7: "9rem"
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  button-text:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.95rem 0.1rem"
  button-text-hover:
    textColor: "{colors.red}"
  nav-solid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "76px"
  phase-tab:
    textColor: "{colors.white}"
    backgroundColor: "{colors.indigo-deep}"
    padding: "1.1rem 1rem 1.15rem 1.4rem"
  form-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.4rem, 3vw, 2.4rem)"
  input-field:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0"
    height: "44px"
  care-label:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    width: "min(300px, 80vw)"
    padding: "3.2rem 1.6rem 1.9rem"
  footer:
    backgroundColor: "{colors.indigo-deep}"
    textColor: "{colors.white}"
---

# Design System: Le Faxx

## Overview

**Creative North Star: "Der gedruckte Firmenbericht"**

Le Faxx is set like a printed company report in fashion-magazine typesetting: a photo essay of the company's own production, every image carrying a numbered caption, and one fine red line (der rote Faden) running through the page as the only ornament. The ground is a single paper white; the world is printed in two spot inks taken from the real logo, indigo and red, used with risograph discipline. Indigo is ink and, twice, a denim field; red is never text, only a mark.

Modules are separated by hairline rules, not boxes or cards. Headlines are Bodoni in sentence case and a single ink; running text and every UI string are Schibsted Grotesk. Photographs stay uncoloured: no duotones, no tints, no overlays except the legibility scrim on full-bleed hero media. Density is magazine-like: generous section spacing, tight internal rhythm, figures that bleed to their column edges.

The world explicitly replaces an earlier AI-industrial direction (condensed uppercase display with Inter, gold accents, particles, magnetic and wave effects, tiled stat counters). None of those devices belong here.

**Key Characteristics:**
- One paper ground, two spot inks (indigo, red), no third colour.
- Bodoni Moda display in sentence case, upright only; Schibsted Grotesk for text and UI.
- Hairline-ruled modules; zero radius; no drop shadows.
- Figures captioned "Abb. n — Beschreibung" in caption type.
- A single 1.5px red thread drawn on scroll, connecting the story's stations.

## Colors

A paper-and-two-inks palette: cool off-white ground, near-black blue ink, the Le Faxx indigo, and the logo's brick red as a marker.

### Primary
- **Le-Faxx-Indigo** (#0A2470): the brand ink for action and emphasis. Primary button fill, station numbers, care-point terms, label values, form success headline, focus underline on fields, text selection and scrollbar thumb.
- **Denim Deep** (#081A52): the only large colour field. Used for exactly three surfaces: the Knot Washed demo band, the footer, and the subpage closing call-to-action. Never as a card or tile background.

### Secondary
- **Logo-Rot / Der rote Faden** (#C8512F): a marker, never a text colour or a block fill. It draws the scroll thread, fills a station marker once the thread has reached it, fills location pins, underlines active nav items, language toggles and the active Knot phase, colours link underlines in dark bands, and is the hover fill of buttons and the keyboard focus outline.
- **Red Ink** (#A6401F): the darker red reserved for form error text and errored field underlines, where the logo red would fail contrast on white.

### Neutral
- **Paper** (#F5F5F2): the single page ground and the solid nav background (at 97% opacity).
- **Paper Grey** (#EAEBEE): only the fill behind an image frame before or without its photo. Never a section background.
- **Label White** (#FCFCFA): the care label, the inquiry form card, and all light type on dark media or denim fields.
- **Ink** (#11152B): headlines and body text on paper; also the dark base under hero media.
- **Ink Soft** (#4B5064): secondary paragraphs, captions, spec terms, coordinates and form footnotes.
- **Rule** (rgba(17,21,43,.16)): every hairline on paper: section tops, list separators, card borders.
- **Rule Light** (rgba(252,252,250,.24)): hairlines on dark: hero foot, phase tabs, meters, footer divider.

### Named Rules
**The Two Inks Rule.** Indigo and red are the only chromatic colours. Any new surface is paper, white, ink or one of the two inks; nothing else.

**The Marker Rule.** Red marks state and path (reached, active, hovered, focused, the thread); it never carries a sentence and never fills a section.

**The Three Fields Rule.** Denim Deep appears as a full-bleed field only for the signature demo, the closing CTA and the footer. A fourth denim band dilutes it.

## Typography

**Display Font:** Bodoni Moda (with Didot, Georgia, serif), self-hosted variable, optical sizing.
**Body Font:** Schibsted Grotesk (with system-ui, sans-serif), self-hosted, weights 400 to 700.

**Character:** a high-contrast Didone in sentence case reads as a fashion masthead set by a careful editor; the grotesk underneath is plain, newsy and industrial enough to carry facts, specs and form labels.

### Hierarchy
- **Display** (500, clamp(3.1rem, 8.2vw, 6rem), 1.02): page heroes and closing CTAs (contact and subpage CTA scale to about 5.5rem). Hero lines are set as separate lines, at most three.
- **Statement** (400, clamp(2rem, 4.2vw, 3.6rem), 1.12): the single opening statement after the hero, max 22ch. The only place Bodoni drops to regular.
- **Headline** (500, clamp(2.3rem, 4.6vw, 4.1rem), 1.06): section heads, balanced wrap.
- **Title** (500, clamp(1.45rem, 2vw, 1.85rem), 1.15): station, step and location heads; product names (1.45rem, first piece 2rem); FAQ questions (1.3rem). Bodoni numerals also carry meters and spec figures (about 2 to 2.7rem).
- **Lead** (400, clamp(1.08rem, 1.3vw, 1.22rem), 1.55): section intros, max 56ch.
- **Body** (400, 1.0625rem, 1.6): running text, max 66ch, pretty wrap.
- **Label** (600, 0.97rem): buttons, form labels (0.88rem), nav links (500, 0.95rem), station numbers in indigo Bodoni.
- **Caption** (400, 0.8rem): figure captions and footnotes, in Ink Soft on paper or 60 to 66% white on dark.

### Named Rules
**The Sentence Case Rule.** Every headline is sentence case, upright, single ink. No uppercase display, no italic emphasis, no second-colour word inside a headline.

**The Kerning Pass Rule.** Bodoni's "W" before a, e, o is tightened by -0.07em at runtime; any new display string goes through the same pass.

**The Figure Rule.** Every photograph or video carries a numbered caption "Abb. n — Beschreibung", numbered in reading order per page; placeholders say so in parentheses ("(Platzhalter)").

## Layout

A centred 1440px column with a fluid gutter (16 to 56px). Sections stack on paper separated by a full-width top hairline, with large vertical rhythm (s6 to s7, 6 to 9rem) between modules and s3 to s4 inside them. Spacing comes from the s1 to s7 scale only.

Composition is editorial and asymmetric: a narrow anchor column beside a wide statement (1 : 3.2); production stations alternate image and copy left/right across a 72px marker spine, with portrait (4:5) and landscape (3:2) frames alternating; the lookbook is a four-column grid whose first piece spans 2x2; locations pair a 4:3 and a 4:5 frame. Text blocks stay at 440 to 900px measure regardless of viewport.

Responsive: at 1080px the nav collapses to a burger and the lookbook to two columns; at 820px all two-column modules stack, stations become a left marker spine with copy above image, and the thread hugs the left edge; at 560px the lookbook is single column.

Motion is quiet and print-like: text rises 18px and fades in, images unclip vertically (6% inset), station images drift with light parallax, the nav hides on scroll down. Easing is cubic-bezier(.2,.7,.2,1) for state and cubic-bezier(.16,1,.3,1) for reveals. Reduced motion removes all of it.

## Elevation & Depth

The system is flat. Depth comes from paper versus white (the care label and form card sit on the ground as printed objects with a hairline border), from the two denim fields, and from full-bleed photography. There are no drop shadows anywhere.

### Shadow Vocabulary
- **Button keyline** (`box-shadow: inset 0 0 0 1px rgba(252,252,250,.55)`): only on primary buttons placed over photography or a denim field, so the indigo edge holds against dark imagery. Removed on hover.
- **Field focus underline** (`box-shadow: 0 1px 0 var(--indigo)`): thickens an input's bottom rule to 2px on focus. It is a line, not a shadow.

### Named Rules
**The Printed Matter Rule.** Objects are separated by paper tone and 1px rules, never lifted. If something needs to stand out, give it white stock and a hairline.

**The Only Scrim Rule.** Gradients exist only as the dark legibility veil over full-bleed hero media. Nowhere else.

## Shapes

Every corner is square (0 radius), including buttons, inputs, tabs and image frames. Form language is the printed page: 1px hairlines for structure, a 2px red underline for the active state, small solid squares for markers (11px station marker with a 1.5px indigo border that fills red when reached; 10px red location pin). The care label is the one composed object: a white card with an inner keyline 8px inside the border and a square eyelet. Image frames hold fixed aspect ratios (4:5, 3:2, 4:3, 3:4) with overflow clipped.

## Components

### Buttons
Confident and plain, like a printed order line.
- **Shape:** square corners (0).
- **Primary:** Le-Faxx-Indigo fill, Label White text, label type, 0.95rem by 1.4rem, followed by a thin arrow (stroke 1.8) that slides 3px right on hover.
- **Hover / Focus:** fill switches to red; press nudges 1px down; keyboard focus is a 2px red outline offset 3px.
- **Over imagery:** adds the 1px inset white keyline. In the transparent nav the primary inverts (white fill, indigo text) until the nav turns solid.
- **Text link button:** no fill, underlined in current colour, minimal side padding; hover turns the text red (on dark: stays white, underline turns red). Always pairs with, never replaces, a primary.

### Navigation
- Fixed, 76px tall; transparent with white type over the hero, then solid paper at 97% with ink type and a bottom hairline after 60px of scroll; hides on scroll down past 400px.
- Links in Schibsted 500, 0.95rem; hover and current page get a 1px red bottom rule. Language toggle DE/EN uses the same red rule for the pressed state.
- Below 1080px: a two-line burger (1.5px bars) opens a full-screen paper menu with Bodoni links between hairlines.

### Inputs / Fields
- **Style:** no box; transparent background, 1px bottom rule in 35% ink, 0.55rem vertical padding, 44px minimum height, red caret. Labels sit above in 600, 0.88rem.
- **Focus:** bottom rule turns indigo and doubles to 2px.
- **Error:** message in Red Ink 0.84rem below; the field's rule turns Red Ink.
- **Container:** the inquiry form is a white card with a 1px rule border and fluid padding; success replaces the fields with an indigo Bodoni headline.

### Knot Washed Demo (signature)
A Denim Deep band with three Bodoni phase tabs between light hairlines (Stein, Knoten, Hälfte), each preceded by a small grotesk number. Inactive tabs sit at 55% white; the active tab is full white with a 2px red underline that scales in from the left. Selecting a phase crossfades the 4:3 photo (0.7s, slight scale settle), swaps the step text, and tweens three meters (Wasser, Energie, CO₂): Bodoni figures over a 2px bar that turns red at the halved state. Arrow keys move between phases.

### Care Label (signature)
A 300px white garment label with outer border, inner keyline and eyelet, the Knot Washed logo, a ruled spec list with values in bold indigo, line-drawn care symbols (stroke 1.4) and a "Made in" line. Its small tracked uppercase line belongs to the label as an object and is not a general type style.

### Lookbook
Four-column grid, first piece 2x2 at 4:5, others 3:4, filled with Paper Grey until loaded. Under each image: Bodoni name, Ink Soft subline, a hairline, then a two-column spec list (term in Ink Soft, value in 500), then the figure caption. Hover scales the photo 3% and red-underlines the name.

### Production Stations
Numbered (01 to 06, indigo Bodoni) image-and-copy rows on a central marker spine; each carries a short origin line led by a 22px red dash and its "Abb." caption. The red thread connects the markers and fills each as it passes.

### Q/A List
Questions and answers as an open two-column ruled list (Bodoni question, Ink Soft answer), every pair visible. No accordion, no toggles.

### Footer
Denim Deep, 82% white text, the Le Faxx and Knot Washed logos side by side, a four-column link grid closed by a light hairline, and a small bottom row. Link hover: white with red underline.

## Do's and Don'ts

### Do:
- **Do** keep a single paper ground (#F5F5F2) and separate every module with a 1px rule hairline.
- **Do** caption every figure "Abb. n — …" in caption type, numbered per page.
- **Do** set headlines in Bodoni Moda, sentence case, upright, one ink, weight 500 (400 only for the opening statement).
- **Do** use red only as a mark: thread, reached marker, active underline, hover fill, focus outline.
- **Do** draw the thread as one 1.5px solid red line revealed with scroll, ending without a terminal marker.
- **Do** keep every corner square and every surface shadowless.
- **Do** use Denim Deep only for the demo band, closing CTA and footer.

### Don't:
- **Don't** use uppercase or condensed display type, italic emphasis, or a second-colour word inside a headline.
- **Don't** add a third accent, gold, gradients beyond the hero legibility scrim, or tinted/duotone photography.
- **Don't** add drop shadows, rounded corners, glass or blur.
- **Don't** set small tracked uppercase labels above headlines; the only tracked uppercase line is printed on the care label.
- **Don't** add particles, magnetic or wave cursor effects, or tiled count-up stat cards; figures live in ruled spec rows and meters.
- **Don't** fold content into accordions; Q/A stays an open ruled list.
- **Don't** use Paper Grey as a section background; it is only the empty-image fill.
