---
name: Anthony Gonzalez Portfolio
description: An atmospheric portfolio for an AI full-stack engineer who joins product thinking with expressive craft.
colors:
  ink: "#08070d"
  paper: "#f0ecf5"
  muted: "#a8a1b4"
  violet: "#7047ff"
  violet-light: "#a88cff"
  plum: "#25121f"
  signal-green: "#7ee2ab"
typography:
  display:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(3.1rem, 6.8vw, 7.2rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  body:
    fontFamily: "TASA Orbiter Variable, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "TASA Orbiter Variable, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  cta:
    fontFamily: "Momo Trust Display, Fraunces Variable, Georgia, serif"
    fontSize: "clamp(1.05rem, 1.45vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
rounded:
  social: "7px"
  pill: "9999px"
spacing:
  compact: "8px"
  inset: "16px"
  gutter: "32px"
  desktop-gutter: "48px"
  section: "clamp(7rem, 12vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "0"
    padding: "8px clamp(1.2rem, 2vw, 1.75rem)"
  social-link:
    backgroundColor: "rgba(255, 255, 255, 0.035)"
    textColor: "#d5d1d9"
    rounded: "{rounded.social}"
    size: "36px"
  availability-badge:
    backgroundColor: "rgba(126, 226, 171, 0.055)"
    textColor: "#d8f8e7"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
---

# Design System: Anthony Gonzalez Portfolio

## Overview

**Creative North Star: "The Violet Observatory"**

This is a portfolio observed through a dark, celestial instrument: a near-black field, a deep-ultraviolet haze, and sharply composed evidence of human craft. It is atmospheric rather than glossy; the scene holds a sense of distance and depth without relying on stacked, elevated UI surfaces.

Celestial precision gives the system its discipline. Editorial display typography sets the rhythm, while technical labels, orbital diagrams, fine rules, grain, and subtle signal states make the work feel investigated rather than packaged. Expressive experimental details are welcome when they clarify the portfolio's authorship or make a transition feel discovered. The UI should use an explicit geometric scaffold: large rectangular modules, visible grid cells, hard line divisions, and sparse circles or arcs acting as measured counterpoints.

**Key Characteristics:**

- Deep ultraviolet illumination against near-black space.
- Large editorial type paired with compact technical annotation.
- Flat, rule-led layouts with atmospheric gradients in place of SaaS-style card stacks.
- Geometric modular composition: rectangles, grid cells, and measured linework lead; circles signal orbit, status, or action.
- Portraits and project art treated as artifacts within an observatory-like composition.

## Colors

The palette is a controlled ultraviolet spectrum: violet acts as distant illumination, while pale paper text keeps the work legible in the dark.

### Primary

- **Deep Ultraviolet Haze:** Carries focal words, active navigation lines, orbital motifs, and localized glows. It should feel like light traveling through the scene, not a default fill.
- **Violet Signal:** A brighter companion for key emphasis, selection, and accessible focus treatment.

### Secondary

- **Plum Nebula:** Introduces warm, low-saturation contrast in selected project artwork and contact atmospheres; it must remain subordinate to violet.
- **Availability Signal:** Reserves green for the live availability badge and its pulse only.

### Neutral

- **Observatory Ink:** The continuous page field and primary panel surface.
- **Lunar Paper:** Main text, prominent rules, and interactive states needing maximum contrast.
- **Distant Matter:** Secondary body copy, labels, and quiet metadata.

### Named Rules

**The One Light Source Rule.** On a given view, violet is the active light source. Do not introduce competing bright accents or full-surface violet fills.

## Typography

**Display Font:** Fraunces Variable (with Georgia fallback)

**Body Font:** TASA Orbiter Variable (with Arial fallback)

**Label/CTA Font:** TASA Orbiter Variable for labels; Momo Trust Display for calls to action.

**Character:** Fraunces brings an editorial, human counterweight to the technical subject matter. Orbiter makes labels and body copy feel measured and instrument-like; Momo Trust Display turns a call to action into a small authored artifact rather than a standard product control.

### Hierarchy

- **Display:** Used for hero propositions, section headlines, project titles, and case-study headlines; tight tracking and compact leading give it decisive mass.
- **Headline:** The hero role reaches from large desktop statements down to compact mobile display sizes without losing its editorial silhouette.
- **Body:** Conversational supporting copy is set with generous leading and restrained measure, generally capped between 540px and 650px.
- **Label:** Uppercase, bold, widely tracked metadata identifies sections, categories, dates, and system signals.
- **CTA:** A compact display treatment that lets the action label remain expressive without competing with the main headline.

### Named Rules

**The Type Contrast Rule.** Pair a single expansive editorial statement with small, quiet technical labels. Never make both compete at display scale.

## Layout

The site uses a broad centered shell that scales from a 48px desktop gutter to a 32px compact gutter, capped around 1240px. Homepage sections breathe at a large responsive interval, then use grid structures, border lines, and deliberate empty space to organize content.

Desktop headings commonly follow an asymmetrical label-to-content grid, with a narrow annotation column and a wider reading column. The grid should remain visibly structural: use rectangular spans, intentional column splits, and hairline boundaries to compose a page as an instrument panel rather than a sequence of detached cards. At the medium breakpoint, grids collapse into one readable flow; on small screens, cards and three-column systems become vertical while the oversized type remains intentionally prominent. Page depth comes from full-bleed atmospheric backgrounds, absolute orbital layers, and crop-aware imagery—not from nested panels.

### Named Rules

**The Geometric Scaffold Rule.** Start every new composition with a visible rectangular grid or division. Use circles, arcs, and dots only as purposeful celestial instruments within that framework.

## Elevation & Depth

The system is flat and atmospheric. Depth is created through radial and linear gradients, field grain, transparent rules, and isolated soft shadows beneath physically meaningful objects such as the portrait or availability signal. Ordinary content containers stay flush with the ink field.

### Shadow Vocabulary

- **Artifact Lift:** A diffuse, dark shadow supports the portrait and makes it read as a physical specimen rather than a card.
- **Signal Glow:** A tight green glow is reserved for the availability indicator; violet glow remains localized to CTA interaction and orbital atmosphere.

### Named Rules

**The Flat Field Rule.** Do not elevate routine sections, project copy, or navigation into floating cards. Use lines, tonal shifts, and imagery to establish hierarchy.

## Shapes

Geometry is primarily rectilinear, ruled, and open. Large rectangular modules, sharp grid intersections, and hairline boundaries establish the visual grammar, echoing the supplied reference's measured panel composition. Circular forms are meaningful: portraits, orbital rings, status dots, and arrow actions reference instruments and celestial bodies. Corners are either square for structural surfaces, gently rounded for social controls, or fully pill-shaped for live status; rounded rectangles are never the default container language.

**The Meaningful Circle Rule.** A circle must indicate orbit, identity, status, or an action. It is never generic decoration.

## Components

### Buttons

**Character:** An expressive, experimental action artifact.

- **Shape:** Square-edged inner surface framed by a fine luminous border, with a small offset plus sign.
- **Primary:** Ink interior with white display type; pointer position reveals a restrained violet radial glow.
- **Hover / Focus:** Pointer glow and small typographic particles animate on hover; keyboard focus uses the bright-violet outline with a generous offset.

### Availability Badge

**Character:** A quiet live instrument signal, not a marketing pill.

- **Shape:** Fully pill-shaped with a low-opacity green field and a fine green border.
- **State:** The status dot emits a contained pulse and a periodic diagonal shimmer; respect reduced-motion preferences.

### Social Links

**Character:** Compact glass-dark icon controls.

- **Shape:** Gently curved square controls.
- **State:** Hover produces a slight upward shift, a subtle white border, and a brighter paper icon; focus uses the violet system ring.

### Cards / Containers

**Character:** Structured editorial rows, never a corporate SaaS card deck.

- **Corner Style:** Square for project rows and sections; circular only for project-art orbit motifs and arrow actions.
- **Background:** The ink field, with artwork receiving controlled violet or plum atmospheric gradients.
- **Border:** Fine, low-opacity paper rules establish the grid and section divisions.
- **Internal Padding:** Expansive responsive padding on project stories; section content aligns to the shared page shell.

### Navigation

**Character:** A quiet instrument panel that recedes until needed.

- **Style:** Fixed transparent-to-ink gradient header, compact uppercase links, and a violet animated underline.
- **Mobile:** A full-viewport ink field replaces the desktop row; links become large Fraunces display words.

### Signature Components

**Orbit Artwork:** Project and hero visuals combine circular masks, dashed rings, fine borders, and slow orbital rotation. Use this vocabulary for authored visual evidence; do not substitute stock AI motifs.

**Geometric Modules:** Feature statements, project entries, and capability groups can occupy crisp rectangular cells divided by low-opacity rules. Let their proportions, alignment, and controlled asymmetry create the composition before adding atmospheric decoration.

## Do's and Don'ts

### Do:

- **Do** use violet as a measured illumination layer behind or beside content, not as an all-purpose surface color.
- **Do** use fine translucent rules, orbital geometry, and technical labels to provide structure before adding a panel.
- **Do** compose sections from explicit rectangular grid cells and use linework to make their alignment legible.
- **Do** keep editorial headlines large, tight, and paired with quiet supporting copy.
- **Do** preserve motion as slow signal, orbit, or reveal behavior, and honor reduced-motion settings.
- **Do** use the portrait and bespoke project art as tangible evidence of authorship.

### Don't:

- **Don't** use corporate SaaS cards, generic dashboard modules, or stacked white panels.
- **Don't** use generic AI imagery, robot heads, glowing brain illustrations, or interchangeable technological stock art.
- **Don't** add bright accents that compete with the violet light source.
- **Don't** round every container; circular and rounded forms must carry semantic or visual purpose.
- **Don't** scatter arbitrary geometric decoration or turn the grid into a background texture; geometry must carry hierarchy, grouping, or motion.
