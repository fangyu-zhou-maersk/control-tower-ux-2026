# CLAUDE.md — Maersk Design System (MDS)
# AI Code Generation Instructions for Claude Code

> This file is the single source of truth for all UI code generation at Maersk.
> Claude Code must read and follow every rule in this file before writing any HTML, CSS, or component code.
> When in doubt, always check https://designsystem.maersk.com before inventing patterns.

---

## 1. WHAT IS MDS?

The **Maersk Design System (MDS)** is the official design language of Maersk Technology.
It provides styles, tokens, layouts, themes, UI components, icons, and guidelines for
creating consistent, accessible, and beautiful customer experiences.

- Adopted by **95%+ of Maersk design teams**
- Used in **75%+ of UX-focused code repositories**
- Covers all Maersk brands: Maersk, Hamburg Süd, Sealand, APM Terminals, Aliança, Captain Peter, Stillstrom

🔗 Home: https://designsystem.maersk.com
🔗 Storybook (Dev Docs): https://mds.maersk.io

---

## 2. NPM PACKAGES — ALWAYS INSTALL THESE

```bash
npm install @maersk-global/mds-components-core
npm install @maersk-global/mds-components-community
npm install @maersk-global/mds-design-tokens
npm install @maersk-global/mds-foundations
npm install @maersk-global/fonts
```

### Standard imports (Maersk brand, light theme)
```js
import "@maersk-global/fonts/maeu/fonts.css";
import "@maersk-global/mds-design-tokens/maersk/light/web/css/design-tokens.css";
import "@maersk-global/mds-foundations/foundations.css";
import "@maersk-global/mds-components-core/index.es6.js";
import "@maersk-global/mds-components-community/index.es6.js";
```

### For dark theme
```js
import "@maersk-global/mds-design-tokens/maersk/dark/web/css/design-tokens.css";
```

### Token path pattern
```
@maersk-global/mds-design-tokens/<brand>/<theme>/web/css/design-tokens.css
```
Brands: `maersk` | `hamburgsud` | `sealand`
Themes: `light` | `dark`
Font brands: `maeu` | `hamburgsud` | `safm`

---

## 3. GLOBAL TOKENS

Apply to ALL themes. Always include.

| CSS Variable | Value |
|---|---|
| `--mds_global_border_width` | `1px` |
| `--mds_global_border_style` | `solid` |

🔗 https://designsystem.maersk.com/foundations/themes/global-tokens/

---

## 4. TYPOGRAPHY — EXACT TOKEN VALUES

### Typefaces
| Font | Usage |
|---|---|
| **Maersk Headline** | All titles, headlines, short attention-grabbing messages |
| **Maersk Text** | Labels, captions, table content, long-form body text, articles |
| **Arial** | Fallback font only — use when Maersk fonts are unavailable; default for email |

### CSS Variables — Font Families
```css
font-family: var(--mds_brand_typography_headline_font-family); /* Maersk Headline */
font-family: var(--mds_brand_typography_headline_font-family-fallback); /* Arial + system stack */
```

### Headline Type Scale (Desktop / Mobile)

| Style | Desktop Size | Desktop Line Height | Mobile Size | Mobile Line Height | Weight |
|---|---|---|---|---|---|
| Headline x-large | 80px | 80px | 56px | 56px | 300 |
| Headline large | 50px | 56px | 38px | 38px | 300 |
| Headline medium | 40px | 40px | 26px | 32px | 300 |
| Headline small | 26px | 32px | 22px | 26px | 400 |
| Headline x-small | (see tokens) | (see tokens) | (see tokens) | (see tokens) | 400 |

### CSS Variables — Headline Tokens
```css
/* x-large */
--mds_brand_typography_headline_x-large_desktop_font-size: 80px;
--mds_brand_typography_headline_x-large_desktop_line-height: 80px;
--mds_brand_typography_headline_x-large_mobile_font-size: 56px;
--mds_brand_typography_headline_x-large_mobile_line-height: 56px;
--mds_brand_typography_headline_x-large_font-weight: 300;

/* large */
--mds_brand_typography_headline_large_desktop_font-size: 50px;
--mds_brand_typography_headline_large_desktop_line-height: 56px;
--mds_brand_typography_headline_large_mobile_font-size: 38px;
--mds_brand_typography_headline_large_mobile_line-height: 38px;
--mds_brand_typography_headline_large_font-weight: 300;

/* medium */
--mds_brand_typography_headline_medium_desktop_font-size: 40px;
--mds_brand_typography_headline_medium_desktop_line-height: 40px;
--mds_brand_typography_headline_medium_mobile_font-size: 26px;
--mds_brand_typography_headline_medium_mobile_line-height: 32px;
--mds_brand_typography_headline_medium_font-weight: 300;

/* small */
--mds_brand_typography_headline_small_desktop_font-size: 26px;
--mds_brand_typography_headline_small_desktop_line-height: 32px;
--mds_brand_typography_headline_small_mobile_font-size: 22px;
--mds_brand_typography_headline_small_mobile_line-height: 26px;
--mds_brand_typography_headline_small_font-weight: 400;
```

### Typography Rules
- All headline styles → **Maersk Headline** font
- All body/label/caption styles → **Maersk Text** font
- **Sentence case only** — NEVER use ALL CAPS (except product names)
- Do NOT mix weights and font sizes in the same headline
- Do NOT mix more than two colours in a headline or body text
- Use headings by semantic hierarchy, not for visual appearance
- Use monospaced tabular numbers only for data comparison
- Always use colour tokens for text to ensure WCAG accessibility

🔗 https://designsystem.maersk.com/foundations/typography/
🔗 https://designsystem.maersk.com/foundations/themes/maersk/brand/

---

## 5. COLOUR TOKENS — LIGHT THEME (Default)

**RULE: NEVER hardcode hex values. Always use CSS variable tokens.**

### Primary UI
```css
--mds_brand_appearance_primary_default_background-color: #141414;
--mds_brand_appearance_primary_default_on-background-color: #FFFFFF;
--mds_brand_appearance_primary_default_text-color: #141414;
--mds_brand_appearance_primary_default_border-color: #141414;
--mds_brand_appearance_primary_default_link-color: #0077B2;
--mds_brand_appearance_primary_weak_background-color: #F0F0F0;
--mds_brand_appearance_primary_weak_border-color: #D4D4D4;

/* States */
--mds_brand_appearance_state_primary_default_hover_background-color: #363636;
--mds_brand_appearance_state_primary_default_active_background-color: #4C4C4C;
```

### Secondary UI (Brand — Maersk Blue)
```css
--mds_brand_appearance_secondary_default_text-color: #0077B2;
--mds_brand_appearance_secondary_default_background-color: #42B0D5;
--mds_brand_appearance_secondary_default_on-background-color: #141414;
--mds_brand_appearance_secondary_default_border-color: #42B0D5;
--mds_brand_appearance_secondary_weak_background-color: #E2F3F9;
--mds_brand_appearance_secondary_weak_border-color: #9ED7EA;

/* States */
--mds_brand_appearance_state_secondary_default_hover_background-color: #60BDDC;
--mds_brand_appearance_state_secondary_default_active_background-color: #78C8E2;
```

### Neutral
```css
--mds_brand_appearance_neutral_default_background-color: #FFFFFF;
--mds_brand_appearance_neutral_default_text-color: #141414;
--mds_brand_appearance_neutral_default_border-color: #D4D4D4;
--mds_brand_appearance_neutral_weakest_text-color: #6A6A6A;
--mds_brand_appearance_neutral_weakest_background-color: #F7F7F7;
--mds_brand_appearance_neutral_weak_text-color: #4C4C4C;
--mds_brand_appearance_neutral_weak_background-color: #F0F0F0;
--mds_brand_appearance_neutral_weak_border-color: #E2E2E2;
--mds_brand_appearance_neutral_strong_background-color: #E2E2E2;
--mds_brand_appearance_neutral_strongest_background-color: #B3B3B3;
--mds_brand_appearance_neutral_inverse_background-color: #141414;
--mds_brand_appearance_neutral_inverse_text-color: #FFFFFF;
```

### Colour Role Summary
| Role | Purpose |
|---|---|
| **Primary** | Main UI colour — primary buttons, checkboxes, radios, switches |
| **Secondary (Brand)** | Highlights Maersk brand — secondary buttons, "big primary" search; do NOT overuse |
| **Neutral** | Foundation for all UI — backgrounds, borders, text |
| **Info** | Informational feedback states |
| **Error** | Error and destructive states |
| **Warning** | Warning and caution states |
| **Success** | Success and confirmation states |

🔗 https://designsystem.maersk.com/foundations/colour-roles/
🔗 https://designsystem.maersk.com/foundations/themes/maersk/light/
🔗 https://designsystem.maersk.com/foundations/themes/maersk/dark/

---

## 6. SPACING — 4PX GRID SYSTEM

**Base unit: 4px. All spacing must be multiples of 4.**

| Multiplier | Value |
|---|---|
| 1× | 4px |
| 2× | 8px |
| 3× | 12px |
| 4× | 16px |
| 5× | 20px |
| 6× | 24px |
| 8× | 32px |
| 10× | 40px |
| 12× | 48px |
| 16× | 64px |

### Exceptions (component-level fine control only)
- 2px, 6px, and 10px are the only acceptable non-4x values

### Rules
- Apply to ALL: padding, margin, gap, gutter, line-height, layout
- Never use values not divisible by 4 (except the 3 exceptions)
- Responsive elements may have fluid dimensions, but sibling spacing must stay on the 4px grid
- Use spacing intentionally to control information density

🔗 https://designsystem.maersk.com/foundations/spacing/

---

## 7. CORNER RADIUS — EXACT VALUES

| Token | Value | Use case |
|---|---|---|
| `radius-xs` | 2px | Small nested components |
| `radius-sm` | 4px | Checkboxes, small elements |
| `radius-md` | 6px | Buttons, input fields |
| `radius-lg` | 8px | Notifications, toasts, popovers, tables |
| `radius-xl` | 12px | Cards (containing nested components) |
| `radius-2xl` | 16px | Large images, dialogs, modals |
| `radius-full` | 9999px | Pills, fully rounded elements |

### Rules
- Always use MDS radius tokens — never hardcode `border-radius`
- Outer components must have a **larger** radius than nested components
- All components come with default border-radius; only override when necessary

🔗 https://designsystem.maersk.com/foundations/corner-radius/

---

## 8. COMPONENT FIT (SIZE)

MDS core components come in 3 sizes controlled by the `fit` property.

| Fit | Use case |
|---|---|
| **Small** | Dense, data-heavy apps; compact desktop views; warehouse/logistics tools |
| **Medium** | Default — use for standard customer-facing products (maersk.com) |
| **Large** | Spacious marketing/brand pages; touch devices needing larger tap targets |

```html
<mc-button fit="small">Submit</mc-button>
<mc-button fit="medium">Submit</mc-button>
<mc-button fit="large">Submit</mc-button>
```

**Keep it consistent:** Stick to one fit per application. Only mix with a very clear purpose.

🔗 https://designsystem.maersk.com/foundations/component-fit/

---

## 9. BREAKPOINTS — RESPONSIVE LAYOUT

| Breakpoint | Width | Real-world context |
|---|---|---|
| `xs` – extra small | 0–640px | Mobile: delivery driver marking delivery |
| `sm` – small | 641–1024px | Tablet: warehouse or terminal use |
| `md` – medium | 1025–1440px | Laptop: non-fullscreen browser window |
| `lg` – large | 1441–1920px | Desktop: standard office external screen |
| `xl` – extra large | 1920px+ | Widescreen / high-resolution screens |

### Container-based breakpoints
Use container breakpoints for modular layouts where sections must stay visually consistent regardless of viewport width. Components adapt based on their immediate container, not the full viewport.

### Rules
- Always design and test across relevant breakpoints
- Design for the breakpoints your actual users need
- Use the MDS column grid to enhance responsiveness
- Test rich media (images, video) across all breakpoints

🔗 https://designsystem.maersk.com/foundations/breakpoints/
🔗 Storybook: https://mds.maersk.io/?path=/story/layout-navigation-breakpoints

---

## 10. LAYOUT REGIONS

MDS layout is divided into three distinct regions:

| Region | Description |
|---|---|
| **Top Bar** | Global navigation bar at the top |
| **Side Bar** | Side navigation — contains Tree Navigation component |
| **Page** | Main content area — contains Breadcrumb navigation |

🔗 https://designsystem.maersk.com/foundations/layout/
🔗 Top Bar: https://designsystem.maersk.com/foundations/layout/top-bar/
🔗 Side Bar: https://designsystem.maersk.com/foundations/layout/side-bar/
🔗 Page: https://designsystem.maersk.com/foundations/layout/page/
🔗 Grid: https://designsystem.maersk.com/foundations/layout/grid/

---

## 11. COMPONENT LIBRARY — FULL LIST

**All MDS components use the `mc-` prefix. Never build custom alternatives when an MDS component exists.**

### Navigation & Structure
| Component | Tag | Docs |
|---|---|---|
| Breadcrumb | `<mc-breadcrumb>` | https://designsystem.maersk.com/components/breadcrumb/ |
| Tree Navigation | `<mc-tree-navigation>` | https://designsystem.maersk.com/components/tree-navigation/ |
| Tabs | `<mc-tabs>` | https://designsystem.maersk.com/components/tabs/ |
| Toolbar | `<mc-toolbar>` | https://designsystem.maersk.com/components/toolbar/ |
| Pagination | `<mc-pagination>` | https://designsystem.maersk.com/components/pagination/ |
| Menu | `<mc-menu>` | https://designsystem.maersk.com/components/menu/ |

### Actions
| Component | Tag | Docs |
|---|---|---|
| Button | `<mc-button>` | https://designsystem.maersk.com/components/button/ |
| Button Group | `<mc-button-group>` | https://designsystem.maersk.com/components/button-group/ |
| Split Button | `<mc-split-button>` | https://designsystem.maersk.com/components/split-button/ |
| Link | `<mc-link>` | https://designsystem.maersk.com/components/link/ |
| Link Button | `<mc-link-button>` | https://designsystem.maersk.com/components/link-button/ |

### Forms & Inputs
| Component | Tag | Docs |
|---|---|---|
| Input | `<mc-input>` | https://designsystem.maersk.com/components/input/ |
| Input Group | `<mc-input-group>` | https://designsystem.maersk.com/components/input-group/ |
| Input Date | `<mc-input-date>` | https://designsystem.maersk.com/components/input-date/ |
| Input Time | `<mc-input-time>` | https://designsystem.maersk.com/components/input-time/ |
| Textarea | `<mc-textarea>` | https://designsystem.maersk.com/components/textarea/ |
| Select | `<mc-select>` | https://designsystem.maersk.com/components/select/ |
| Multi Select | `<mc-multi-select>` | https://designsystem.maersk.com/components/multi-select/ |
| Typeahead | `<mc-typeahead>` | https://designsystem.maersk.com/components/typeahead/ |
| Typeahead Multi Select | `<mc-typeahead-multi-select>` | https://designsystem.maersk.com/components/typeahead-multi-select/ |
| Checkbox | `<mc-checkbox>` | https://designsystem.maersk.com/components/checkbox/ |
| Radio | `<mc-radio>` | https://designsystem.maersk.com/components/radio/ |
| Switch | `<mc-switch>` | https://designsystem.maersk.com/components/switch/ |
| Number Stepper | `<mc-number-stepper>` | https://designsystem.maersk.com/components/number-stepper/ |
| Segmented Control | `<mc-segmented-control>` | https://designsystem.maersk.com/components/segmented-control/ |
| File Upload | `<mc-file-upload>` | https://designsystem.maersk.com/components/file-upload/ |
| Date Range | `<mc-date-range>` | https://designsystem.maersk.com/components/date-range/ |
| Calendar | `<mc-calendar>` | https://designsystem.maersk.com/components/calendar/ |
| Time Picker | `<mc-time-picker>` | https://designsystem.maersk.com/components/time-picker/ |
| Picker | `<mc-picker>` | https://designsystem.maersk.com/components/picker/ |

### Feedback & Status
| Component | Tag | Docs |
|---|---|---|
| Notification | `<mc-notification>` | https://designsystem.maersk.com/components/notification/ |
| Toast | `<mc-toast>` | https://designsystem.maersk.com/components/toast/ |
| Loading Indicator | `<mc-loading-indicator>` | https://designsystem.maersk.com/components/loading-indicator/ |
| Progress Indicator | `<mc-progress-indicator>` | https://designsystem.maersk.com/components/progress-indicator/ |
| Step Indicator | `<mc-step-indicator>` | https://designsystem.maersk.com/components/step-indicator/ |
| Badge | `<mc-badge>` | https://designsystem.maersk.com/components/badge/ |
| Tag | `<mc-tag>` | https://designsystem.maersk.com/components/tag/ |
| Tooltip | `<mc-tooltip>` | https://designsystem.maersk.com/components/tooltip/ |
| Popover | `<mc-popover>` | https://designsystem.maersk.com/components/popover/ |

### Layout & Containers
| Component | Tag | Docs |
|---|---|---|
| Card | `<mc-card>` | https://designsystem.maersk.com/components/card/ |
| Accordion | `<mc-accordion>` | https://designsystem.maersk.com/components/accordion/ |
| Modal | `<mc-modal>` | https://designsystem.maersk.com/components/modal/ |
| Dialog | `<mc-dialog>` | https://designsystem.maersk.com/components/dialog/ |
| Drawer | `<mc-drawer>` | https://designsystem.maersk.com/components/drawer/ |
| List | `<mc-list>` | https://designsystem.maersk.com/components/list/ |
| Table | `<mc-table>` | https://designsystem.maersk.com/components/table/ |

### Media & Display
| Component | Tag | Docs |
|---|---|---|
| Avatar | `<mc-avatar>` | https://designsystem.maersk.com/components/avatar/ |
| Icon | `<mc-icon>` | https://designsystem.maersk.com/components/icon/ |
| Theme Switch | `<mc-theme-switch>` | https://designsystem.maersk.com/components/theme-switch/ |

🔗 All components: https://designsystem.maersk.com/components/

---

## 12. ICONS

- Use the official MDS icon library — 200+ icons
- Always use `<mc-icon>` component
- Never use third-party icon libraries unless explicitly instructed
- 🔗 https://designsystem.maersk.com/icons/

---

## 13. THEMES

| Theme | Import path |
|---|---|
| Light (default) | `@maersk-global/mds-design-tokens/maersk/light/web/css/design-tokens.css` |
| Dark | `@maersk-global/mds-design-tokens/maersk/dark/web/css/design-tokens.css` |

- Default is always **light theme**
- Use `<mc-theme-switch>` to support theme toggling
- Light preview: https://designsystem.maersk.com/index.html?theme=maersk-light
- 🔗 Dark tokens: https://designsystem.maersk.com/foundations/themes/maersk/dark/

---

## 14. AI GUIDELINES (MDS-NATIVE)

MDS has an official AI section for designing AI product experiences within Maersk.

- **AI Colour Role**: Dedicated UI colour for highlighting AI functionality and AI-generated content — developed with Maersk Corporate Branding
- **MDS MCP Server**: Maersk's own MCP server — delivers rich MDS metadata, components, events, examples, and guidelines in structured format for AI integration
- **AI Brand Guidelines**: When using AI to produce images, illustrations, text, or video — consult Brand Central AI Brand Guidelines first

🔗 AI Overview: https://designsystem.maersk.com/ai/
🔗 AI Colour Role: https://designsystem.maersk.com/ai/colour-role/
🔗 MDS MCP Server: https://designsystem.maersk.com/ai/mcp-server/
🔗 AI Guidelines: https://designsystem.maersk.com/ai/guidelines/

---

## 15. FIGMA INTEGRATION

- Official Figma UI libraries and guidance are part of MDS
- When reading Figma files, map every component name to its MDS `mc-` equivalent
- Use Figma design tokens to generate correct CSS variable names
- Code Connect (Enterprise): Links code components back to Figma — developers see real code in Dev Mode
- 🔗 https://designsystem.maersk.com/design/

---

## 16. CONTENT & WRITING STYLE

- **Sentence case** for all UI text — Never ALL CAPS
- Brand-aligned, clear, concise copy
- Follow Maersk content guidelines for all digital product copy
- 🔗 https://designsystem.maersk.com/content/

---

## 17. ACCESSIBILITY

- Always use colour tokens to ensure WCAG-compliant text contrast
- Use semantic HTML — headings ordered by hierarchy, not visual preference
- Ensure all interactive components have visible focus states
- Validate keyboard navigation on all interactive elements
- Test colour contrast on both light and dark themes
- MDS accessibility is built into every component — don't override it

---

## 18. CODE GENERATION RULES FOR CLAUDE

Follow these rules without exception on every single output:

1. **Use `mc-` web components** from `@maersk-global/mds-components-core` always
2. **Never hardcode** colours, spacing, typography, or radius — always use `--mds_` CSS tokens
3. **Match Figma names exactly** to MDS component names (e.g. "Button" → `<mc-button>`)
4. **Import design tokens** at the root level of every new file
5. **Use 4px spacing grid** for all layout and spacing decisions
6. **Use Maersk Headline** for all headings; **Maersk Text** for all body/label text
7. **Light theme is default** — use dark theme only when explicitly specified
8. **Never invent custom components** when an MDS equivalent exists — flag the gap and suggest closest MDS alternative
9. **Use `fit` property** (small/medium/large) on all components — default to `medium`
10. **Respect breakpoints** — design mobile-first using MDS xs → xl scale
11. **Use `radius-md`** (6px) for buttons and inputs; `radius-xl` (12px) for cards; `radius-2xl` (16px) for modals
12. **Outer components must have larger radius** than nested components
13. **Use `mc-icon`** only — never third-party icon libraries
14. **Use `<mc-notification>` or `<mc-toast>`** for all feedback — never custom alerts
15. **Use semantic HTML** — headings for hierarchy, not aesthetics
16. **Check https://designsystem.maersk.com** before building anything not covered in this file

---

## 19. QUICK REFERENCE — ALL DOCUMENTATION LINKS

| Topic | URL |
|---|---|
| 🏠 MDS Home | https://designsystem.maersk.com |
| 📦 All Components | https://designsystem.maersk.com/components/ |
| 🎨 Colour Roles | https://designsystem.maersk.com/foundations/colour-roles/ |
| 🔤 Typography | https://designsystem.maersk.com/foundations/typography/ |
| 📐 Spacing | https://designsystem.maersk.com/foundations/spacing/ |
| 🔘 Corner Radius | https://designsystem.maersk.com/foundations/corner-radius/ |
| 📏 Component Fit | https://designsystem.maersk.com/foundations/component-fit/ |
| 📱 Breakpoints | https://designsystem.maersk.com/foundations/breakpoints/ |
| 🖥️ Layout Overview | https://designsystem.maersk.com/foundations/layout/ |
| 🔷 Layout — Top Bar | https://designsystem.maersk.com/foundations/layout/top-bar/ |
| 🔷 Layout — Side Bar | https://designsystem.maersk.com/foundations/layout/side-bar/ |
| 🔷 Layout — Page | https://designsystem.maersk.com/foundations/layout/page/ |
| 🔷 Layout — Grid | https://designsystem.maersk.com/foundations/layout/grid/ |
| 🎛️ Global Tokens | https://designsystem.maersk.com/foundations/themes/global-tokens/ |
| 🏷️ Brand Tokens (Typography) | https://designsystem.maersk.com/foundations/themes/maersk/brand/ |
| ☀️ Light Tokens | https://designsystem.maersk.com/foundations/themes/maersk/light/ |
| 🌙 Dark Tokens | https://designsystem.maersk.com/foundations/themes/maersk/dark/ |
| 🔣 Icons | https://designsystem.maersk.com/icons/ |
| ✍️ Content Guidelines | https://designsystem.maersk.com/content/ |
| 🤖 AI Overview | https://designsystem.maersk.com/ai/ |
| 🤖 AI Colour Role | https://designsystem.maersk.com/ai/colour-role/ |
| 🤖 MDS MCP Server | https://designsystem.maersk.com/ai/mcp-server/ |
| 🤖 AI Design Guidelines | https://designsystem.maersk.com/ai/guidelines/ |
| 🎨 Figma UI Libraries | https://designsystem.maersk.com/design/ |
| 💻 Developer Docs | https://designsystem.maersk.com/develop/ |
| 📖 Storybook | https://mds.maersk.io |
| 🤝 Contribute | https://designsystem.maersk.com/contribute/ |
| 📢 About MDS | https://designsystem.maersk.com/about/ |
| 🆘 MDS Support | https://designsystem.maersk.com/support/ |
