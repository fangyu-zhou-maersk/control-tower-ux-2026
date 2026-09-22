# Screen Specification

> Complete this file for each screen before implementation. Replace all `TBD` values that can be determined. Do not delete unresolved entries. Move them to `Assumptions`.

## 1. Reference

- Screen name: TBD
- Reference image or Figma frame: TBD
- Reference viewport width: TBD
- Reference viewport height: TBD
- Device pixel ratio: TBD
- Required implementation route: TBD
- Required application state: TBD

## 2. Scope

### In scope

- TBD

### Out of scope

- TBD

## 3. Existing implementation to reuse

- Nearest existing page or route: TBD
- Existing components to reuse: TBD
- Existing layout shell to reuse: TBD
- Existing data or fixtures to reuse: TBD

## 4. Page regions

Describe the hierarchy from outermost to innermost.

```text
Application shell
├── Top bar
├── Side navigation
└── Page
    ├── Breadcrumb
    ├── Page header
    ├── Filter area
    ├── Main content
    └── Supporting panel
```

Replace the example with the actual screen structure.

## 5. Geometry

| Element | Width | Height | Min/Max | Position or alignment | Behavior |
|---|---:|---:|---|---|---|
| Viewport | TBD | TBD | TBD | TBD | Fixed reference |
| Page container | TBD | TBD | TBD | TBD | TBD |
| Main column | TBD | TBD | TBD | TBD | TBD |
| Supporting panel | TBD | TBD | TBD | TBD | TBD |
| Header | TBD | TBD | TBD | TBD | TBD |
| Filter area | TBD | TBD | TBD | TBD | TBD |
| Table or content area | TBD | TBD | TBD | TBD | TBD |

## 6. Spacing and alignment

| Relationship | Required value or visible rule |
|---|---|
| Page outer padding | TBD |
| Header to content | TBD |
| Gap between primary regions | TBD |
| Internal panel padding | TBD |
| Form control gap | TBD |
| Table cell padding or density | TBD |
| Primary alignment anchors | TBD |

## 7. Component map

| Reference element | Existing or MDS component | Variant / fit / state | Notes |
|---|---|---|---|
| Primary action | TBD | TBD | TBD |
| Search | TBD | TBD | TBD |
| Filters | TBD | TBD | TBD |
| Table | TBD | TBD | TBD |
| Status | TBD | TBD | TBD |
| Drawer, panel, modal, or dialog | TBD | TBD | TBD |
| Feedback | TBD | TBD | TBD |
| Icons | TBD | TBD | TBD |

## 8. Typography

| Text role | Font/token | Size | Weight | Line height | Colour | Wrapping rule |
|---|---|---:|---:|---:|---|---|
| Page title | TBD | TBD | TBD | TBD | TBD | TBD |
| Section title | TBD | TBD | TBD | TBD | TBD | TBD |
| Body | TBD | TBD | TBD | TBD | TBD | TBD |
| Label | TBD | TBD | TBD | TBD | TBD | TBD |
| Table header | TBD | TBD | TBD | TBD | TBD | TBD |
| Table cell | TBD | TBD | TBD | TBD | TBD | TBD |
| Supporting text | TBD | TBD | TBD | TBD | TBD | TBD |

## 9. Content

- Exact visible copy: TBD
- Column names and order: TBD
- Visible row count at reference viewport: TBD
- Truncation behavior: TBD
- Empty state copy: TBD
- Error state copy: TBD
- Loading state: TBD

## 10. Interaction specification

| Trigger | User action | System response | State change | Keyboard behavior |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

Do not infer interactions from a static image. Only specify behavior supported by the task, prototype, or existing implementation.

## 11. Responsive behavior

| Viewport or container range | Layout change | Component change | Content priority |
|---|---|---|---|
| Small | TBD | TBD | TBD |
| Medium | TBD | TBD | TBD |
| Large | TBD | TBD | TBD |

If only one viewport is in scope, state that explicitly.

## 12. Required states

- Default: TBD
- Hover: TBD
- Focus: TBD
- Selected: TBD
- Expanded or open: TBD
- Disabled: TBD
- Loading: TBD
- Empty: TBD
- Error: TBD
- Success: TBD

## 13. Assumptions

Record every decision that is not directly supported by the reference, task description, existing implementation, or MDS API.

| Assumption | Reason | Risk | How to verify |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 14. Known MDS deviations or gaps

| Reference requirement | MDS constraint or gap | Chosen resolution | Visual impact |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 15. Acceptance criteria

- [ ] Target route renders without errors.
- [ ] Reference viewport is reproduced exactly for comparison.
- [ ] Page regions and proportions match the reference.
- [ ] Alignment anchors match the reference.
- [ ] Component choice, variant, fit, and state are correct.
- [ ] Typography hierarchy and text wrapping match.
- [ ] Visible data density matches.
- [ ] Required interactions work.
- [ ] Required responsive states work.
- [ ] MDS and accessibility constraints are respected.
- [ ] All assumptions and deviations are documented.
- [ ] `UI_REVIEW.md` has been completed.

