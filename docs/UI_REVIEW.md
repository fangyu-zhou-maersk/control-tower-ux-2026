# UI Review and Visual Acceptance

## Purpose

Use this process after every meaningful visual implementation pass.

The goal is to replace subjective approval with a repeatable comparison between the approved reference and the rendered implementation.

Do not redesign during review.

## Required inputs

- approved reference image(s) or Figma frame(s)
- rendered implementation screenshot(s)
- identical viewport dimensions for each comparison
- identical application state and representative data
- completed SCREEN_SPEC.md, when applicable

Do not compare images captured at different viewport sizes.

## Review cycle

1. Run the application in the required state.
2. Set the browser viewport to the reference dimensions.
3. Capture the implementation screenshot.
4. Compare reference and implementation side by side or with an overlay/diff tool.
5. Record discrepancies below.
6. Fix the highest-severity geometry issues first.
7. Capture a new screenshot.
8. Repeat until the exit criteria are met.

## Severity model

### Blocker
- wrong page structure
- missing major region
- incorrect component type
- broken required interaction
- unusable or inaccessible result

### High
- clearly incorrect region width or height
- major alignment drift
- wrong density
- wrong panel behavior
- incorrect typography hierarchy
- incorrect content hierarchy

### Medium
- local spacing mismatch
- text wrapping mismatch
- incorrect icon size
- wrong border, radius, or background treatment
- component-fit mismatch

### Low
- minor optical alignment
- subtle token difference
- micro-spacing that does not change hierarchy or density

## Discrepancy log

| ID | Area | Observed difference | Evidence or measurement | Severity | Proposed correction | Status |
|---|---|---|---|---|---|---|
| UI-001 | TBD | TBD | TBD | TBD | TBD | Open |

Use concrete descriptions. Avoid subjective phrases such as "feels off" or "make it nicer."

## Visual review checklist

### Canvas and structure
- [ ] Viewport matches the reference.
- [ ] Major regions are present and ordered correctly.
- [ ] Main and supporting regions have the correct proportions.
- [ ] Fixed, sticky, and scrolling regions behave correctly when specified.

### Alignment and spacing
- [ ] Left and right edges align with the same anchors as the reference.
- [ ] Vertical baselines align.
- [ ] Repeated gaps are consistent.
- [ ] Outer and internal padding match.
- [ ] No unintended browser or component margin remains.

### Typography and content
- [ ] Font families are loaded correctly.
- [ ] Type sizes, weights, and line heights match.
- [ ] Text wrapping and truncation match.
- [ ] Labels, column order, copy, and capitalization match.
- [ ] Visible content density matches.

### Components and surfaces
- [ ] Correct existing project or MDS component is used.
- [ ] Variant, fit, and visible state match.
- [ ] Icons match in meaning, size, and placement.
- [ ] Backgrounds, dividers, borders, radius, and elevation match.
- [ ] No unrequested decorative element has been added.

### Interaction and accessibility
- [ ] Required interactions work as specified.
- [ ] Focus is visible and keyboard navigation works.
- [ ] Component semantics are preserved.
- [ ] Required loading, empty, disabled, error, and success states match.
- [ ] Accessibility is not sacrificed for visual matching.

### Responsive behavior
- [ ] Required breakpoints or container states have been tested.
- [ ] Content reflows according to SCREEN_SPEC.md when applicable.
- [ ] No unintended overflow, clipping, or overlap occurs.
- [ ] Priority content remains available.

## Agent correction prompt

Use after attaching both the reference and implementation screenshots:

```text
Act as a visual implementation reviewer, not a designer.

Compare the approved reference image(s) with the current rendered implementation at the same viewport. Do not redesign, simplify, modernize, or add features.

First list observable discrepancies in this order:
1. page structure
2. region dimensions and proportions
3. alignment
4. spacing
5. typography and text wrapping
6. component fit and density
7. colour, border, radius, elevation, and icon details

For each discrepancy, name the affected element, describe the visible difference, assign Blocker/High/Medium/Low severity, and propose the smallest code correction.

Then implement only the Blocker and High corrections. Preserve working behavior, use existing project components and actual MDS APIs, and do not make unrelated changes.

After editing, summarize the exact corrections and list remaining uncertainties or MDS constraints. Do not claim pixel-perfect completion until a new rendered screenshot has been compared.
```

## Exit criteria

The screen can be accepted when:
- no Blocker or High discrepancies remain
- remaining Medium and Low discrepancies are documented
- major geometry, alignment, typography, and density match the approved reference
- required interactions and states work
- MDS and accessibility requirements are met
- every unavoidable deviation has a stated reason

## Final review summary

- Reference viewport: TBD
- Review screenshot: TBD
- Blocker issues remaining: TBD
- High issues remaining: TBD
- Medium issues remaining: TBD
- Low issues remaining: TBD
- MDS deviations: TBD
- Accessibility deviations: TBD
- Final status: Not reviewed / Changes required / Accepted with documented deviations / Accepted
