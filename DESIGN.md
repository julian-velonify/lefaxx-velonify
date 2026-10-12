---
name: Le Faxx Jeans (Velonify pitch)
description: One gold contrast seam runs through a garment factory: indigo stages, linen workbench, square-cut labels.
colors:
  indigo-950: "#0A1428"
  indigo-900: "#0E1A33"
  indigo-700: "#1E3160"
  indigo-300: "#8EA3CF"
  anth: "#1F2126"
  anth-700: "#2E3138"
  linen: "#F4F2EE"
  linen-200: "#E7E3DA"
  paper: "#FAFAF8"
  ink: "#14171E"
  ink-soft: "#4A4E58"
  stitch: "#C99A5B"
  stitch-deep: "#9A6E37"
  moss: "#5F6B4A"
  moss-200: "#D9DCCB"
  error: "#F0B27A"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.2rem, 9.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.25rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  figure:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.12em"
rounded:
  none: "0px"
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
    backgroundColor: "{colors.stitch}"
    textColor: "{colors.indigo-950}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.indigo-950}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.6rem"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.indigo-950}"
  button-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.6rem"
  button-ink-hover:
    backgroundColor: "{colors.indigo-900}"
    textColor: "{colors.paper}"
  nav:
    textColor: "{colors.paper}"
    height: "76px"
  lang-toggle-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.indigo-950}"
    rounded: "{rounded.none}"
    padding: "0.42rem 0.55rem"
  origin-chip:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.6rem"
  hangtag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.6rem 0.8rem 0.8rem"
    width: "132px"
  care-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3.4rem 1.6rem 2rem"
    width: "300px"
  station-marker:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "22px"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
    height: "44px"
  meter-bar:
    backgroundColor: "{colors.indigo-300}"
    height: "6px"
  meter-bar-low:
    backgroundColor: "{colors.stitch}"
---

# Design System: Le Faxx Jeans (Velonify pitch)

## Overview

**Creative North Star: "The Contrast Seam"**

A denim factory told as one continuous double-needle seam. A gold contrast stitch, the jeans' own topstitch, leaves the primary call to action, runs down the page, cross-stitches each numbered production station closed as it passes, threads through the eyelet of a care label and the strings of hangtags, and ends at the inquiry form. Everything else is quiet working material: deep indigo and anthracite as stages, linen as the workbench, paper as the station sheet. The thread is the only thing allowed to glint.

Density is that of a cutting room: heavy condensed uppercase headlines set tight, small tracked labels, hairline 1px rules dividing data the way a spec sheet does. Objects from the garment trade (hangtags, a care label, origin chips, a spec strip) carry the facts instead of cards or counter tiles. Corners are square-cut like fabric off the cutting bench; nothing casts a shadow.

Motion is mechanical and fabric-like: water fills rising inside buttons, magnetic pull on calls to action, a needle point travelling along the stitch path, warp threads parting around the pointer, and one pinned WebGL wash drum where pumice particles become recycled knots and the water halves. All of it collapses to static under reduced motion.

**Key Characteristics:**
- One gold seam as thread and sole accent; earth tones support, never compete.
- Indigo / anthracite stages alternate with linen, paper and moss-pale working surfaces.
- Condensed uppercase display (800–900) over a neutral grotesk body with tabular figures.
- Zero radius, zero shadows, 1px hairlines; depth comes from surface alternation and physical overlap.
- Facts live on garment objects: hangtags, care label, origin chips, spec strip, numbered stations.

## Colors

A cold indigo-and-anthracite cloth with warm undyed linen, stitched in one gold thread.

### Primary
- **Seam Gold** (stitch): the contrast topstitch. Thread path, needle, primary button fill, the "XX" in the wordmark, the third hero headline line, focus outlines, text selection, location pins, the low-consumption meter state, nav link underlines. Used on dark stages or as a fill under dark text.
- **Deep Seam Gold** (stitch-deep): the same thread where it must sit on light surfaces at small sizes: station numbers, stitched station markers, origin chip squares, hangtag strings.

### Secondary
- **Washed Indigo** (indigo-300): the "before" state in data. Full-consumption meter bars, the cool end of the compare slider, the non-gold warp threads in the contact canvas.

### Tertiary
- **Loden Moss** (moss) and **Pale Sage Cloth** (moss-200): the care-label world. Moss sets the care-point labels; pale sage is the care section's surface. In this build both stay with the Knot Washed evidence; the confirmed amendment allows earthy tones beyond sustainability, as support only.

### Neutral
- **Raw Indigo** (indigo-900): primary dark stage (hero, Knot Washed drum, contact, mobile menu, WebGL clear colour, browser theme colour).
- **Overdyed Indigo** (indigo-950): deepest stage (footer) and dark text on gold or paper fills.
- **Rinse Indigo** (indigo-700): hero colour tint over video, statement numerals, scrollbar thumb.
- **Anthracite** (anth) / **Anthracite Lift** (anth-700): the second stage (locations) and its image placeholder.
- **Linen** (linen) / **Linen Shadow** (linen-200): default page surface; linen-200 is image placeholder ground and chip border.
- **Paper** (paper): station sheet surface, label and tag stock, light text on dark stages (often at reduced opacity for secondary copy).
- **Ink** (ink) / **Soft Ink** (ink-soft): text on light surfaces; soft ink for paragraphs and tag field names.
- **Form Amber** (error): field error text and underline on the dark contact stage only.

### Named Rules
**The One Thread Rule.** Seam gold is the only accent. It marks the thread, the primary action, focus and the "good" end of data, and it never fills an area larger than a button or a pin.

**The Deep Thread Rule.** On linen or paper, small gold elements switch to deep seam gold; bright seam gold is reserved for dark stages and fills.

**The Stage and Bench Rule.** Sections alternate between dark stages (indigo-900, anth, indigo-950) and light working surfaces (linen, paper, moss-200); two adjacent sections never share a surface.

## Typography

**Display Font:** Big Shoulders Display 700–900 (with Arial Narrow, sans-serif), self-hosted
**Body Font:** Inter 400–600 (with system-ui, sans-serif)

**Character:** A stencilled, condensed factory-floor grotesk shouting in capitals, against a calm neutral grotesk that reads like a spec sheet. Numerals are tabular everywhere.

### Hierarchy
- **Display** (900, clamp 3.2–6rem, 0.86): hero headline in three masked lines, Knot Washed title, contact headline, mobile menu links. Always uppercase, balanced wrap.
- **Headline** (900, clamp 2.6–5.25rem, 0.9): section headings, uppercase.
- **Title** (800, clamp 1.7–2.4rem, 0.95): station and step headings, product captions at a smaller fixed size.
- **Figure** (800, clamp 1.5–2.1rem, 1): numbers that prove scale: spec strip, meter readouts, care-label values.
- **Lead** (400, clamp 1.08–1.25rem, 1.55): section intros, max 56ch.
- **Body** (400, 1.0625rem, 1.6): paragraphs, max 68ch, tabular figures.
- **Label** (600, 0.72–0.8rem, tracked 0.08–0.16em, uppercase): origin chips, form labels, meter names, footer column heads, care-label sub-line. Labels name a field or object; they never sit above a headline as a kicker.

### Named Rules
**The Versal Rule.** Big Shoulders is only ever uppercase at 800–900 with leading under 1; it never sets running text.

**The Spec Sheet Rule.** Every number is tabular, and a proof number is set in the figure style, not in body weight.

## Layout

A 1440px max container with a fluid gutter (16–56px). Spacing follows the s1–s7 scale (0.5rem to 9rem); full sections breathe at s7 top and bottom, heads sit s4–s6 above content. The production line is an alternating three-column station grid (media / 80px marker lane / copy) that flips side every station and collapses on mobile to a 28px marker rail on the left with copy above media; the thread then runs down that rail at 3px. Products sit in a 5 / 3 / 2 column grid. The Knot Washed section is a full-viewport pinned stage scrubbed over 2.6 viewport heights, with steps left and a four-column meter row along the bottom. Breakpoints observed: 620, 720, 820 (primary mobile switch), 1080 (nav collapses to burger), 1180.

## Elevation & Depth

Flat. No box-shadows anywhere. Depth comes from surface alternation between stages and benches, 1px hairlines in paper or ink at low opacity, and physical overlap: hangtags hang rotated over product images, the care label swings from its eyelet, the thread runs above content at its own layer. Translucency appears only where content sits over moving media: the solid nav (indigo at 92% with a 10px blur) and the inquiry form over the warp canvas (6px blur). Gradients are functional only: the legibility scrim over the hero video and the indigo-to-gold track of the compare slider.

### Named Rules
**The Flat Cloth Rule.** Nothing casts a shadow. If an element needs to come forward, it changes surface, gains a 1px rule, or overlaps physically.

## Shapes

Square-cut throughout (0px radius), including inputs, the range thumb, the language toggle and browser scrollbar. Even round-in-life details are squared: the needle head, the hangtag hole, the care-label eyelet, location pins and the origin chip dot are all squares. Borders are 1px (1.5px for markers and tag holes, 2px for eyelets and slider thumbs). The care label carries an inset dashed 1px border as its stitched hem. Circles appear only inside the care symbols.

### Named Rules
**The Square Cut Rule.** No radius, no circles in UI chrome. A hole, a pin or a needle is a square.

## Components

### Buttons
Tactile and fluid, like fabric soaking up water.
- **Shape:** square (0px), 1px border in the current colour, label in body type at 600, optional 18px SVG arrow that nudges 4px right on hover.
- **Primary:** seam gold fill, indigo-950 text. On hover or focus a paper fill rises from below with a moving wave crest (0.7s, ease-out); the label colour transitions over 0.45s.
- **Ghost:** transparent with paper text and a 45% paper border, for dark stages; paper fill rises, text turns indigo-950. On mobile over video it gets an indigo-900 base for legibility.
- **Ink:** transparent with ink text and border, for light surfaces; indigo fill rises, text turns paper.
- **Magnetic:** on fine pointers, calls to action drift toward the cursor (28% x, 38% y, 0.6s power3.out) and spring back on leave.
- **Disabled:** 50% opacity, not-allowed cursor.

### Navigation
Fixed, transparent over the hero with paper text; turns solid indigo with blur once scrolled and hides on scroll down. Links in body type 500 with a gold 1px underline that draws in from the left. A square bordered DE / EN / TR toggle sits beside a compact primary button. Below 1080px a two-bar burger opens a full-screen indigo menu revealed by a clip from the top, links in display type.

### Chips (origin)
- **Style:** linen ground, 1px linen-200 border, ink label type, a 6px deep-gold square before the text.
- **State:** static; one per station naming where the step happens.

### Inputs / Fields
- **Style:** transparent, no box, a single 1px paper underline at 35%; uppercase tracked label above; gold caret; 44px minimum height.
- **Focus:** underline turns seam gold, no outline ring.
- **Error:** amber text below and amber underline.

### The Thread (signature)
A double-needle seam drawn as two parallel dashed gold strokes (1.7px, 11/7 dash, 5px apart) over a faint dotted ghost path (1px, 2/16, 35%), revealed by a scroll-driven mask with a 6px square needle at its tip. It routes through anchor points in content order (CTA, statement, each station marker, care-label eyelet, product head, places, form) in two segments split around the pinned Knot Washed stage. Static fully drawn under reduced motion.

### Station Marker
A 22px paper square with a 1.5px ink border on the thread lane. When the thread reaches it, the border turns deep gold and an X cross-stitch draws itself in two strokes (0.5s, second delayed 0.18s). Paired with a deep-gold two-digit station number above the station title.

### Hangtag and Care Label
- **Hangtag:** 132px paper tag with 1px ink border hung from a deep-gold string, rotated 3deg, swinging to -2deg on hover over a product; display-type name and a tiny field / value list.
- **Care label:** 300px paper label with ink hairline frame and inset dashed hem, square eyelet the thread passes through, display title, a value table of figures, line-drawn SVG care symbols and an uppercase origin line. It swings from the eyelet on scroll.

### Spec Strip
A full-width row of four figure / label pairs at the hero foot, divided by 1px paper rules at 16–22%; two-by-two on small screens.

### Knot Washed Drum
A pinned WebGL particle stage on indigo-900: pumice particles tumble, morph into gold knots and the water particles halve as the user scrolls. Three meters (6px bars, washed indigo at full, seam gold when lowered) and a range slider whose position is bound to scroll. Reduced motion renders the halved end state as one still frame.

### Warp Canvas
Behind the contact form, vertical warp threads (every 11–14px, washed indigo at low opacity, every seventh in gold) sway slowly and part around the pointer.

## Do's and Don'ts

### Do:
- **Do** keep seam gold as the single accent: thread, primary action, focus outline, selection, pins and the "good" data state.
- **Do** switch to deep seam gold for small gold marks on linen or paper.
- **Do** set every headline in Big Shoulders Display uppercase at 800–900 with leading under 1.
- **Do** carry facts on garment objects (hangtag, care label, origin chip, spec strip, numbered stations) divided by 1px hairlines.
- **Do** alternate dark stages and light working surfaces from section to section.
- **Do** ease every transition with the house ease-out and give every motion a static reduced-motion state.

### Don't:
- **Don't** round any corner or draw a circle in UI chrome; holes, pins and needles are squares.
- **Don't** add box-shadows; depth is surface change, hairline or physical overlap.
- **Don't** use gradients as decoration; the only gradients are the video legibility scrim and the data slider track.
- **Don't** draw the thread in indigo; it disappears on the indigo stages (confirmed amendment, 12.10.2026).
- **Don't** let earth tones (moss) act as a second accent beside the gold.
- **Don't** set running text or labels in the display face.
