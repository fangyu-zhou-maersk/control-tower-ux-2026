# Screen Specification

> This is a reusable template for screen-specific visual requirements.
> The structure is provided by the designer; the AI should generate or update the content from supplied reference images, Figma frames, existing implementation, and explicit task requirements.
> Do not invent unresolved information. Move it to Assumptions.

## 1. Reference

- Screen name: TBD
- Reference image(s) or Figma frame(s): TBD
- Reference viewport width: TBD
- Reference viewport height: TBD
- Device pixel ratio: TBD
- Required route: TBD
- Required application state: TBD

## 2. Scope

### In scope
- TBD

### Out of scope
- TBD

## 3. Existing implementation

- Existing screen or route to reuse: TBD
- Existing components to reuse: TBD
- Existing layout to reuse: TBD
- Existing data or fixtures to reuse: TBD

## 4. Page structure

Describe the actual hierarchy visible across the reference materials.

```text
Screen
├── Region
│   ├── Region
│   └── Region
└── Region
```

Do not assume a predefined page structure.

## 5. Geometry

| Element | Width | Height | Position / alignment | Behavior |
|---|---:|---:|---|---|
| TBD | TBD | TBD | TBD | TBD |

## 6. Spacing and alignment

| Relationship | Required value or visible rule |
|---|---|
| TBD | TBD |

## 7. Component mapping

| Reference element | Existing / MDS component | Variant / fit / state | Notes |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 8. Typography

| Text role | MDS token / style | Size | Weight | Line height | Colour | Wrapping |
|---|---|---:|---:|---:|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## 9. Content

- Exact visible copy: TBD
- Visible data: TBD
- Visible row / item count: TBD
- Truncation behavior: TBD

## 10. Interaction

Only specify behavior supported by the task, prototype, existing implementation, or multiple reference states.

| Trigger | User action | System response | State change |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 11. Responsive behavior

Only specify behavior supported by the reference materials or task.

| Viewport / container | Layout change | Component change | Content priority |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 12. Required states

- Default: TBD
- Hover: TBD
- Focus: TBD
- Selected: TBD
- Expanded: TBD
- Disabled: TBD
- Loading: TBD
- Empty: TBD
- Error: TBD
- Success: TBD

## 13. Assumptions

| Assumption | Reason | Risk | Verification |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 14. MDS deviations or gaps

| Reference requirement | MDS constraint / gap | Resolution | Visual impact |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

## 15. Acceptance criteria

- [ ] Target route renders without errors.
- [ ] Reference viewport is reproduced.
- [ ] Page structure and proportions match.
- [ ] Alignment anchors match.
- [ ] Correct existing/MDS components are used.
- [ ] Typography and text wrapping match.
- [ ] Visual density matches.
- [ ] Required interactions work.
- [ ] Required responsive behavior works.
- [ ] MDS and accessibility requirements are respected.
- [ ] Assumptions and deviations are documented.
- [ ] UI_REVIEW.md has been completed.
