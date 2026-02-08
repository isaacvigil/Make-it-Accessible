"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GUIDELINES_MARKDOWN = `# Web Accessibility Reference (WCAG 2.2 AA)

A comprehensive guide for building accessible HTML interfaces. This document is organized for quick lookup and decision-making.

---

## Table of Contents

1. [Core Principles](#1-core-principles)
2. [Semantic HTML](#2-semantic-html)
3. [Forms](#3-forms)
4. [ARIA](#4-aria)
5. [Keyboard Navigation](#5-keyboard-navigation)
6. [Color and Contrast](#6-color-and-contrast)
7. [Common Patterns](#7-common-patterns)
8. [Validation Checklist](#8-validation-checklist)

---

## 1. Core Principles

**Priority order when building accessible UI:**

1. Use semantic HTML elements (they have built-in accessibility)
2. Ensure keyboard accessibility for all interactive elements
3. Provide visible focus indicators
4. Label all form controls
5. Meet contrast requirements (4.5:1 for text, 3:1 for UI components)

**Golden rule:** Native HTML > ARIA. Only use ARIA when HTML cannot express the needed semantics.

---

## 2. Semantic HTML

### 2.1 Page Landmarks

Screen readers can jump between landmarks. Use these to structure pages:

| Element | Implicit Role | Purpose | Usage Note |
|---------|---------------|---------|------------|
| \`<header>\` | banner | Site header | Only when direct child of \`<body>\` |
| \`<nav>\` | navigation | Navigation links | Label if multiple: \`aria-label="Main"\` |
| \`<main>\` | main | Primary content | One per page |
| \`<aside>\` | complementary | Related sidebar content | |
| \`<footer>\` | contentinfo | Site footer | Only when direct child of \`<body>\` |
| \`<section>\` | region | Thematic grouping | Requires accessible name |
| \`<article>\` | article | Self-contained content | |

**Example: Basic page structure**

\`\`\`html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header>
    <nav aria-label="Main">...</nav>
  </header>
  <main id="main">...</main>
  <footer>...</footer>
</body>
\`\`\`

### 2.2 Headings

Create document outline. **Never skip levels.**

\`\`\`html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>
\`\`\`

**Rules:**
- One \`<h1>\` per page
- Don't skip levels (h1 → h3 is wrong)
- Don't choose heading level for styling—use CSS

### 2.3 Lists

| List Type | Use When |
|-----------|----------|
| \`<ul>\` | Items have no sequence |
| \`<ol>\` | Order matters |
| \`<dl>\` | Term/definition pairs |

### 2.4 Tables

Use for tabular data only, never for layout.

\`\`\`html
<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>
\`\`\`

**Required:** \`<caption>\` for description, \`<th scope="col|row">\` for headers.

### 2.5 Interactive Elements

**Always use native elements—they have built-in accessibility:**

| Need | Use | Never |
|------|-----|-------|
| Navigate to URL | \`<a href="...">\` | \`<span onclick>\` |
| Trigger action | \`<button>\` | \`<div onclick>\` |
| Form input | \`<input>\`, \`<select>\`, \`<textarea>\` | \`<div contenteditable>\` |

**Links vs Buttons:**
- \`<a>\`: Navigate to a URL
- \`<button>\`: Trigger an action

\`\`\`html
<!-- Correct -->
<a href="/about">About Us</a>
<button type="button" onclick="save()">Save</button>

<!-- Incorrect -->
<a href="#" onclick="save()">Save</a>
<button onclick="location='/about'">About Us</button>
\`\`\`

### 2.6 Images

| Image Type | Alt Text | Example |
|------------|----------|---------|
| Informative | Describe content | \`alt="Sales increased 20% in Q4"\` |
| Decorative | Empty alt | \`alt=""\` |
| Complex | Brief alt + figcaption | See below |

\`\`\`html
<figure>
  <img src="diagram.png" alt="System architecture diagram">
  <figcaption>
    The system consists of three layers: presentation,
    business logic, and data access.
  </figcaption>
</figure>
\`\`\`

### 2.7 Language

\`\`\`html
<html lang="en">
  <body>
    <p>The French word for hello is <span lang="fr">bonjour</span>.</p>
  </body>
</html>
\`\`\`

---

## 3. Forms

### 3.1 Labels

**Every form control needs a label.** Never rely solely on placeholder text.

\`\`\`html
<label for="username">Username</label>
<input type="text" id="username" name="username">
\`\`\`

### 3.2 Text Inputs

\`\`\`html
<!-- Basic -->
<div class="field">
  <label for="name">Full name</label>
  <input type="text" id="name" name="name" autocomplete="name">
</div>

<!-- With hint text -->
<div class="field">
  <label for="password">Password</label>
  <input type="password" id="password" name="password"
         aria-describedby="password-hint" autocomplete="new-password">
  <span id="password-hint">Minimum 8 characters</span>
</div>

<!-- Required field -->
<div class="field">
  <label for="email">Email <span aria-hidden="true">*</span></label>
  <input type="email" id="email" name="email" required autocomplete="email">
</div>
\`\`\`

**Input types for validation and mobile keyboards:**

| Type | Use For |
|------|---------|
| \`text\` | General text |
| \`email\` | Email addresses |
| \`tel\` | Phone numbers |
| \`url\` | URLs |
| \`number\` | Numeric values |
| \`password\` | Passwords |
| \`search\` | Search queries |

### 3.3 Textarea

\`\`\`html
<div class="field">
  <label for="bio">Bio</label>
  <textarea id="bio" name="bio" maxlength="200"
            aria-describedby="bio-count"></textarea>
  <span id="bio-count">200 characters remaining</span>
</div>
\`\`\`

### 3.4 Radio Buttons

Group with \`<fieldset>\` and \`<legend>\`:

\`\`\`html
<fieldset>
  <legend>Preferred contact method</legend>
  <div>
    <input type="radio" id="contact-email" name="contact" value="email">
    <label for="contact-email">Email</label>
  </div>
  <div>
    <input type="radio" id="contact-phone" name="contact" value="phone">
    <label for="contact-phone">Phone</label>
  </div>
</fieldset>
\`\`\`

### 3.5 Checkboxes

**Single:**
\`\`\`html
<div>
  <input type="checkbox" id="terms" name="terms" required>
  <label for="terms">I agree to the terms and conditions</label>
</div>
\`\`\`

**Group:** Use \`<fieldset>\` and \`<legend>\` (same pattern as radio buttons).

### 3.6 Select (Dropdown)

\`\`\`html
<div class="field">
  <label for="country">Country</label>
  <select id="country" name="country" autocomplete="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>
</div>
\`\`\`

Use \`<optgroup label="...">\` for grouped options.

### 3.7 Buttons

\`\`\`html
<button type="submit">Submit</button>
<button type="button" onclick="save()">Save draft</button>

<!-- Icon-only needs accessible name -->
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>
\`\`\`

### 3.8 Error Handling

**Inline errors:**
\`\`\`html
<div class="field field--error">
  <label for="email">Email</label>
  <input type="email" id="email" required
         aria-invalid="true" aria-describedby="email-error">
  <span id="email-error" class="error">Please enter a valid email address</span>
</div>
\`\`\`

**Error summary (at top of form):**
\`\`\`html
<div role="alert" aria-labelledby="error-heading">
  <h2 id="error-heading">There are 2 errors in this form</h2>
  <ul>
    <li><a href="#email">Enter a valid email address</a></li>
    <li><a href="#password">Password must be at least 8 characters</a></li>
  </ul>
</div>
\`\`\`

### 3.9 Autocomplete Values

| Field | Value |
|-------|-------|
| Full name | \`name\` |
| Email | \`email\` |
| Phone | \`tel\` |
| Street address | \`street-address\` |
| City | \`address-level2\` |
| Postal code | \`postal-code\` |
| Country | \`country\` |
| Username | \`username\` |
| New password | \`new-password\` |
| Current password | \`current-password\` |

### 3.10 Disabled vs Read-only

\`\`\`html
<!-- Disabled: not submitted, not focusable -->
<input type="text" value="ABC123" disabled>

<!-- Read-only: submitted, focusable, not editable -->
<input type="text" value="ABC123" readonly>
\`\`\`

Use \`disabled\` sparingly—screen reader users may not discover disabled controls.

---

## 4. ARIA

### 4.1 First Rule of ARIA

**Don't use ARIA if you can use native HTML.**

\`\`\`html
<!-- Bad -->
<div role="button" tabindex="0" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
\`\`\`

### 4.2 When ARIA Is Needed

1. Custom widgets not available in HTML (tabs, tree views)
2. Dynamic content updates (live regions)
3. Relationships not expressible in HTML
4. States not available in HTML

### 4.3 Accessible Names

Every interactive element needs an accessible name. **Priority order:**

1. \`aria-labelledby\` (references another element)
2. \`aria-label\` (string value)
3. Native HTML (label, alt, content)

\`\`\`html
<!-- aria-labelledby: references visible text -->
<h2 id="billing">Billing address</h2>
<form aria-labelledby="billing">...</form>

<!-- aria-label: when no visible label -->
<button aria-label="Close">×</button>

<!-- Native: preferred when possible -->
<label for="name">Name</label>
<input id="name">
\`\`\`

### 4.4 ARIA States

| Attribute | Purpose | Values |
|-----------|---------|--------|
| \`aria-expanded\` | Expandable element | \`true\`, \`false\` |
| \`aria-selected\` | Selection state | \`true\`, \`false\` |
| \`aria-checked\` | Checkbox/toggle | \`true\`, \`false\`, \`mixed\` |
| \`aria-pressed\` | Toggle button | \`true\`, \`false\` |
| \`aria-disabled\` | Disabled state | \`true\`, \`false\` |
| \`aria-hidden\` | Hidden from AT | \`true\`, \`false\` |
| \`aria-invalid\` | Validation state | \`true\`, \`false\` |
| \`aria-busy\` | Loading state | \`true\`, \`false\` |

### 4.5 ARIA Properties

| Attribute | Purpose |
|-----------|---------|
| \`aria-describedby\` | Additional description (hints, errors) |
| \`aria-labelledby\` | Accessible name from another element |
| \`aria-label\` | Accessible name as string |
| \`aria-controls\` | Element this one controls |
| \`aria-owns\` | Parent/child relationship |
| \`aria-live\` | Announce changes |
| \`aria-current\` | Current item in set |
| \`aria-haspopup\` | Has popup menu/dialog |

### 4.6 Live Regions

Announce dynamic content to screen readers:

\`\`\`html
<!-- Polite: announced when user is idle -->
<div aria-live="polite">Your changes have been saved.</div>

<!-- Assertive: announced immediately -->
<div aria-live="assertive">Session expires in 1 minute.</div>

<!-- Status: implicit polite live region -->
<div role="status">3 results found.</div>

<!-- Alert: implicit assertive live region -->
<div role="alert">Error: Payment failed.</div>
\`\`\`

### 4.7 aria-hidden

Hides content from assistive technology but keeps it visible:

\`\`\`html
<button>
  <svg aria-hidden="true">...</svg>
  Save
</button>
\`\`\`

**Never** use \`aria-hidden="true"\` on focusable elements.

### 4.8 Visually Hidden (Screen Reader Only)

\`\`\`css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
\`\`\`

\`\`\`html
<button>
  <svg aria-hidden="true">...</svg>
  <span class="visually-hidden">Close dialog</span>
</button>
\`\`\`

---

## 5. Keyboard Navigation

### 5.1 Core Principles

1. All functionality available via keyboard
2. Focus visible on all interactive elements
3. Logical tab order matching visual layout
4. No keyboard traps (except modals)

### 5.2 Focusable Elements

**Natively focusable (no \`tabindex\` needed):**
- \`<a href="...">\`
- \`<button>\`
- \`<input>\`, \`<select>\`, \`<textarea>\`
- \`<details>\`, \`<summary>\`

**Make elements focusable:**
\`\`\`html
<!-- Add to tab order -->
<div tabindex="0">Custom widget</div>

<!-- Programmatically focusable only -->
<div tabindex="-1">Focus target for JavaScript</div>
\`\`\`

**Never** use \`tabindex\` greater than 0.

### 5.3 Tab Order

Tab order should match visual order. Fix with CSS, not tabindex:

\`\`\`html
<!-- Bad -->
<button tabindex="2">Second</button>
<button tabindex="1">First</button>

<!-- Good: CSS flexbox order -->
<div style="display: flex; flex-direction: row-reverse;">
  <button>First visually</button>
  <button>Second visually</button>
</div>
\`\`\`

### 5.4 Skip Links

\`\`\`html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header>...</header>
  <main id="main" tabindex="-1">...</main>
</body>
\`\`\`

\`\`\`css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background: #000;
  color: #fff;
  z-index: 100;
}
.skip-link:focus { top: 0; }
\`\`\`

### 5.5 Focus Styles

**Never remove focus outlines without replacement:**

\`\`\`css
/* Bad */
*:focus { outline: none; }

/* Good */
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Hide focus for mouse, show for keyboard */
:focus:not(:focus-visible) { outline: none; }
\`\`\`

### 5.6 Standard Keyboard Interactions

| Key | Action |
|-----|--------|
| Tab | Move to next focusable element |
| Shift+Tab | Move to previous |
| Enter | Activate links and buttons |
| Space | Activate buttons, toggle checkboxes |
| Arrow keys | Navigate within widgets |
| Escape | Close dialogs, cancel actions |

### 5.7 Roving Tabindex

For composite widgets (tabs, menus), use one tab stop with arrow navigation:

\`\`\`html
<div role="tablist">
  <button role="tab" tabindex="0" aria-selected="true">Tab 1</button>
  <button role="tab" tabindex="-1">Tab 2</button>
  <button role="tab" tabindex="-1">Tab 3</button>
</div>
\`\`\`

Move \`tabindex="0"\` between items with JavaScript on arrow key press.

### 5.8 Focus Trapping (Modals)

\`\`\`javascript
function trapFocus(element) {
  const focusable = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
  first.focus();
}
\`\`\`

### 5.9 Focus on Page Changes

**SPA route changes:**
\`\`\`javascript
function onRouteChange() {
  const main = document.querySelector('main');
  main.tabIndex = -1;
  main.focus();
}
\`\`\`

**After deleting item:**
\`\`\`javascript
const nextItem = deletedItem.nextElementSibling || deletedItem.previousElementSibling;
nextItem?.focus();
\`\`\`

---

## 6. Color and Contrast

### 6.1 WCAG 2.2 AA Requirements

| Content Type | Minimum Ratio |
|--------------|---------------|
| Normal text (<18pt / <14pt bold) | 4.5:1 |
| Large text (≥18pt / ≥14pt bold) | 3:1 |
| UI components & graphics | 3:1 |

### 6.2 Safe Color Combinations

**On white (#FFFFFF):**
- Black (#000000): 21:1 ✓
- Dark gray (#595959): 7:1 ✓
- Gray (#767676): 4.5:1 ✓ (AA minimum)
- Light gray (#949494): 3:1 ✓ (large text only)

**On black (#000000):**
- White (#FFFFFF): 21:1 ✓
- Light gray (#A6A6A6): 7:1 ✓
- Gray (#898989): 4.5:1 ✓ (AA minimum)

### 6.3 Common Failures

**Placeholder text:**
\`\`\`css
/* Bad: 2.3:1 */
::placeholder { color: #c0c0c0; }

/* Good: 4.5:1 */
::placeholder { color: #767676; }
\`\`\`

**Focus indicators:** Need 3:1 contrast against adjacent colors.

**Disabled states:** Exempt from requirements, but should still be readable.

### 6.4 Color Independence

**Never use color as the only way to convey information:**

\`\`\`html
<!-- Bad: relies on color only -->
<span style="color: red;">Error</span>

<!-- Good: icon + text + color -->
<span class="error">
  <svg aria-hidden="true">⚠</svg>
  Error: Invalid email
</span>
\`\`\`

**Links in text** must be distinguishable. Preferred: underline. Alternative: 3:1 contrast vs surrounding text + non-color indicator on hover/focus.

### 6.5 Testing Tools

- **Browser extensions:** WAVE, axe DevTools, Accessibility Insights
- **DevTools:** Chrome/Edge Elements → Computed → Contrast ratio
- **Online:** WebAIM Contrast Checker, Coolors Contrast Checker
- **Automated:** axe-core, Pa11y, Lighthouse

### 6.6 Dark Mode

1. Test contrast in both modes
2. Don't just invert colors—verify ratios remain valid
3. Use \`prefers-color-scheme\` media query

---

## 7. Common Patterns

### 7.1 Disclosure (Show/Hide)

\`\`\`html
<button aria-expanded="false" aria-controls="content">More details</button>
<div id="content" hidden>Additional content here.</div>
\`\`\`

Update \`aria-expanded\` and \`hidden\` with JavaScript.

### 7.2 Tabs

\`\`\`html
<div role="tablist" aria-label="Product information">
  <button role="tab" id="tab-1" aria-selected="true" aria-controls="panel-1">
    Description
  </button>
  <button role="tab" id="tab-2" aria-selected="false" aria-controls="panel-2" tabindex="-1">
    Reviews
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  Description content...
</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
  Reviews content...
</div>
\`\`\`

### 7.3 Modal Dialog

\`\`\`html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm deletion</h2>
  <p>Are you sure you want to delete this item?</p>
  <button type="button">Cancel</button>
  <button type="button">Delete</button>
</div>
\`\`\`

Requires focus trapping (see Section 5.8).

### 7.4 Tooltip

\`\`\`html
<button aria-describedby="tooltip">Settings</button>
<div role="tooltip" id="tooltip">Configure application preferences</div>
\`\`\`

### 7.5 Progress

\`\`\`html
<!-- Determinate -->
<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
     aria-label="Upload progress">75%</div>

<!-- Indeterminate -->
<div role="progressbar" aria-label="Loading">Loading...</div>
\`\`\`

### 7.6 Loading States

\`\`\`html
<button onclick="loadData()">
  <span class="button-text">Load more</span>
</button>
<div aria-live="polite" class="visually-hidden" id="status"></div>
\`\`\`

\`\`\`javascript
async function loadData() {
  document.getElementById('status').textContent = 'Loading...';
  await fetch(...);
  document.getElementById('status').textContent = 'Content loaded.';
}
\`\`\`

---

## 8. Validation Checklist

Before completing any UI work, verify:

### Structure
- [ ] Page has proper landmark regions
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] Skip link provided for main content
- [ ] Language declared on \`<html>\` element

### Forms
- [ ] All form controls have associated labels
- [ ] Required fields marked with \`required\` attribute and visual indicator
- [ ] Error messages linked via \`aria-describedby\`
- [ ] Appropriate \`autocomplete\` values used

### Images & Media
- [ ] All images have appropriate alt text (or \`alt=""\` for decorative)
- [ ] Icons hidden from AT with \`aria-hidden="true"\`

### Keyboard
- [ ] All interactive elements reachable via keyboard
- [ ] Focus order matches visual order
- [ ] Visible focus styles on all interactive elements
- [ ] No keyboard traps (except intentional modal trapping)

### Color
- [ ] Text meets 4.5:1 contrast (3:1 for large text)
- [ ] UI components meet 3:1 contrast
- [ ] Color is not the only means of conveying information

### Dynamic Content
- [ ] Live regions announce important updates
- [ ] Focus managed appropriately after content changes`;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-3 right-3 size-8 bg-background"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="size-4 text-green-500" />
      ) : (
        <Copy className="size-4 text-muted-foreground" />
      )}
    </Button>
  );
}

export function FigmaContent() {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10 px-6 py-12">
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            1
          </span>
          <h2 className="text-lg font-semibold">Copy this</h2>
        </div>
        <div className="relative">
          <textarea
            readOnly
            value={GUIDELINES_MARKDOWN}
            className="h-80 w-full resize-y rounded-md border bg-muted p-4 pr-12 font-mono text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="WCAG 2.2 AA accessibility guidelines markdown"
          />
          <CopyButton text={GUIDELINES_MARKDOWN} />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            2
          </span>
          <h2 className="text-lg font-semibold">
            Add it to Figma Make guidelines
          </h2>
        </div>
        <a
          href="https://help.figma.com/hc/en-us/articles/33665861260823-Add-guidelines-to-Figma-Make"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Learn how to add guidelines
          <ExternalLink className="size-3.5" />
        </a>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            3
          </span>
          <h2 className="text-lg font-semibold">Done!</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Guidelines will be referenced at all times.
        </p>
      </section>
    </article>
  );
}
