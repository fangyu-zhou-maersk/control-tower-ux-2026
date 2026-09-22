# Maersk Design System (MDS) — UI Rules

This project uses the **Maersk Design System (MDS)** for all UI code. Follow every rule below
for any HTML, CSS, or component work. Reference: https://designsystem.maersk.com (Storybook: https://mds.maersk.io)

## Packages (install once you have registry access — see Environment note)

```bash
npm install @maersk-global/mds-components-core
npm install @maersk-global/mds-components-community
npm install @maersk-global/mds-design-tokens
npm install @maersk-global/mds-foundations
npm install @maersk-global/fonts
```

### Standard imports (Maersk brand, light theme — the default)

```js
import "@maersk-global/fonts/maeu/fonts.css";
import "@maersk-global/mds-design-tokens/maersk/light/web/css/design-tokens.css";
import "@maersk-global/mds-foundations/foundations.css";
import "@maersk-global/mds-components-core/index.es6.js";
import "@maersk-global/mds-components-community/index.es6.js";
```

Dark theme: swap the tokens import for `@maersk-global/mds-design-tokens/maersk/dark/web/css/design-tokens.css`.
Other brands: `hamburgsud`, `sealand` (swap `maersk` in the token path).

### No registry access yet? Use the CDN instead

```html
<link rel="stylesheet" href="https://assets.maerskline.com/mds/fonts/fonts-cdn.css" />
<link rel="stylesheet" href="https://assets.maerskline.com/mds/latest/design-tokens/maersk/light/css/design-tokens-px.min.css" />
<link rel="stylesheet" href="https://assets.maerskline.com/mds/latest/foundations/foundations.min.css" />
<script type="module" src="https://assets.maerskline.com/mds/latest/components-core/index.bundle.esm.min.js"></script>
```
Note: this CDN host is Maersk-internal — it may need the Maersk network/VPN to resolve.

## Typography — Maersk fonts

MDS ships two typefaces as `.woff2` files (see `@maersk-global/fonts`, imported above). Every
headline/body element must resolve to one of these via the `--mds_brand_typography_*` tokens —
never a hardcoded `font-family`.

| Typeface | Use for | Weights available |
|---|---|---|
| **Maersk Headline** | Page/section titles, headings, short attention-grabbing messages | 300 (Light), 400 (Regular), 700 (Bold) |
| **Maersk Text** | Body copy, labels, captions, table content, form fields | 400 (Regular + Italic), 500 (Medium + Italic), 700 (Bold + Italic) |
| Fallback stack | Used automatically if the Maersk fonts fail to load | `Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` (locale-specific CJK fallbacks also defined) |

### CSS variables (verified against the live token bundle — `design-tokens-rem.css`)

```css
/* Font family — use these, never a literal font name */
font-family: var(--mds_brand_typography_headline_font-family);          /* "Maersk Headline" */
font-family: var(--mds_brand_typography_text_font-family);              /* "Maersk Text" */

/* Automatic fallback if a Maersk font file fails to load */
font-family: var(--mds_brand_typography_headline_font-family-fallback);
font-family: var(--mds_brand_typography_text_font-family-fallback);

/* Practical pattern (matches this project's index.css): declare the token first,
   then a literal fallback chain, so unstyled text never flashes before tokens load */
font-family: var(--mds_brand_typography_headline_font-family), "Maersk Headline", Arial, sans-serif;
font-family: var(--mds_brand_typography_text_font-family), "Maersk Text", Arial, sans-serif;
```

Size/line-height/weight per scale step (`x-small` … `x-large` for headline; equivalent scale for
text) are their own tokens, e.g. `--mds_brand_typography_headline_medium_desktop_font-size` — use
those instead of hardcoding `px`/`rem` sizes. Full scale: https://designsystem.maersk.com/foundations/typography/

### Rules
- Headings → **Maersk Headline** only. Body/label/caption/table/form text → **Maersk Text** only. Never mix the two within the same text role.
- Sentence case only — never ALL CAPS (except product names).
- Don't mix more than one weight or two colours within a single headline/body block.
- Loading the font: npm → `@maersk-global/fonts/maeu/fonts.css` (Maersk brand); CDN → `https://assets.maerskline.com/mds/fonts/fonts-cdn.css`. Other brands swap `maeu` for `hamburgsud`/`safm`.

## Non-negotiable rules

1. Use `mc-` web components from `@maersk-global/mds-components-core` / `-community` — never build a custom alternative when an MDS component exists. If no MDS equivalent exists, flag the gap and suggest the closest one.
2. Never hardcode colors, spacing, typography, or radius — always use `--mds_*` CSS tokens.
3. Match Figma component names to MDS names exactly (e.g. "Button" → `<mc-button>`).
4. Import design tokens at the root of every new file/entry point.
5. Spacing: 4px grid only (4, 8, 12, 16, 20, 24, 32, 40, 48, 64px). Only 2px, 6px, 10px are allowed exceptions, and only for component-level fine control.
6. Typography: **Maersk Headline** font for all headings, **Maersk Text** font for body/label/caption text, via the `--mds_brand_typography_*_font-family` tokens (see Typography section above) — never a hardcoded font name. Sentence case only — never ALL CAPS (except product names).
7. Light theme is default — use dark only when explicitly requested.
8. Use the `fit` property (`small` | `medium` | `large`) on components; default to `medium`; keep one fit consistent per app.
9. Corner radius: `radius-md` (6px) for buttons/inputs, `radius-xl` (12px) for cards, `radius-2xl` (16px) for modals/dialogs. Outer components must have a larger radius than nested components.
10. Icons: `<mc-icon>` only — never a third-party icon library.
11. Feedback/alerts: `<mc-notification>` or `<mc-toast>` only — never custom alert UI.
12. Semantic HTML — heading levels follow document hierarchy, not visual size preference.
13. Accessibility is built into MDS components — don't override focus states or contrast; verify keyboard nav on anything interactive.
14. Breakpoints: `xs` 0–640, `sm` 641–1024, `md` 1025–1440, `lg` 1441–1920, `xl` 1920+. Design mobile-first.
15. Before inventing any pattern not covered here, check https://designsystem.maersk.com.
16. Before presenting any MDS UI work as done, render it live (browser pane) and read the console for `mc-*` warnings (e.g. invalid icon names, bad props) — the written rules can be followed exactly and still reference a component/icon name that doesn't exist in the live library. Also check the `xs` (mobile) breakpoint, not just desktop.

## Component reference (all use `mc-` prefix)

Navigation: `mc-breadcrumb`, `mc-tree-navigation`, `mc-tabs`, `mc-toolbar`, `mc-pagination`, `mc-menu`
Actions: `mc-button`, `mc-button-group`, `mc-split-button`, `mc-link`, `mc-link-button`
Forms: `mc-input`, `mc-input-group`, `mc-input-date`, `mc-input-time`, `mc-textarea`, `mc-select`, `mc-multi-select`, `mc-typeahead`, `mc-typeahead-multi-select`, `mc-checkbox`, `mc-radio`, `mc-switch`, `mc-number-stepper`, `mc-segmented-control`, `mc-file-upload`, `mc-date-range`, `mc-calendar`, `mc-time-picker`, `mc-picker`
Feedback: `mc-notification`, `mc-toast`, `mc-loading-indicator`, `mc-progress-indicator`, `mc-step-indicator`, `mc-badge`, `mc-tag`, `mc-tooltip`, `mc-popover`
Layout: `mc-card`, `mc-accordion`, `mc-modal`, `mc-dialog`, `mc-drawer`, `mc-list`, `mc-table`
Media: `mc-avatar`, `mc-icon`, `mc-theme-switch`

Full list + docs: https://designsystem.maersk.com/components/

## Known-good example

`mds-air-lcl-landing.html` in this project is a working, browser-verified example built from
this exact ruleset (CDN-based, no npm auth required) — use it as a copy-paste starting point
for new prototypes rather than generating a page from scratch each time.

## Environment note (verify per machine/project when reusing this file elsewhere)

As of 2026-07-29, Node.js (v24.18.0) and npm are installed on the machine this file was
authored on. The packages above still need authenticated access to Maersk's private registry
(GitHub Packages or Nexus) before `npm install` will work — see the design system's "Local
Environment Setup" docs. Until that's set up, use the CDN-based imports above.
