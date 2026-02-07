# Vibrant* Flower Shop - Design System & Product Page

Implementation of the Figma design from the Domestika Final Project course.

## Project Structure

```
vibrant-flower-shop/
├── design-system.json   # Design tokens from Figma (colors, typography, spacing, components)
├── index.html           # Product detail page
├── components.html      # Design system components showcase
├── styles.css           # Base styles using design system CSS variables
├── components.css       # Component-specific styles
├── script.js            # Carousel & quantity selector interactions
└── README.md
```

## Design System

The `design-system.json` file contains all design tokens extracted from the Figma file:

- **Spacing**: 4, 8, 12, 16, 24, 32, 48px
- **Colors**: Grey scale (100–900), Yellow 400, semantic mappings
- **Typography**: IBM Plex Sans & Serif — Headline Large/Medium/Small, Body Medium, Label Medium
- **Components**: Button styles, input, accordion, product card, navigation

Use this file as the single source of truth for future designs to maintain consistency.

## Pages

- **index.html** — Product detail page (Rainbow Galaxy bouquet)
- **components.html** — Design system components showcase (links, buttons, inputs, header, footer)

## Running the Project

Open `index.html` or `components.html` in a web browser. No build step required.

```bash
# Using a local server (optional)
npx serve .
# or
python -m http.server 8000
```

## Figma Variables Used

| Variable | Value |
|----------|-------|
| Grey 100 | #fafafa |
| Grey 200 | #e9e8e8 |
| Grey 300 | #d4d1c6 |
| Grey 500 | #9f987f |
| Grey 700 | #494537 |
| Grey 900 | #242424 |
| Yellow 300 | #fcf3cf |
| Yellow 400 | #fae699 |
| Yellow 500 | #f5d142 |
| Yellow 600 | #d5ad0b |
| Red 500 | #c35533 |
| Headline Large | IBM Plex Sans, 48px, Bold |
| Headline Medium | IBM Plex Sans, 24px, Bold |
| Headline Small | IBM Plex Sans, 16px, Bold |
| Body Medium | IBM Plex Serif, 14px, Regular |
| Label Medium | IBM Plex Sans, 14px, Medium |
| Label Small | IBM Plex Sans, 11px, Medium |
