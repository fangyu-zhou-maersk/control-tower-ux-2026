# Visual Fidelity Guidelines

## Objective

Reproduce the supplied reference as faithfully as possible while respecting the existing project architecture and the actual MDS implementation available in the repository.

This is a replication task, not a design-generation task.

## Source of truth

Use the following hierarchy by responsibility:

1. **Reference image or approved Figma frame** — visual source of truth
2. **Actual MDS component source code and installed packages** — component implementation source of truth
3. **Official/project MDS documentation such as `MDS.md`** — design-system rules and intent
4. **Existing project code** — project architecture, reuse, business logic, and established patterns
5. **`SCREEN_SPEC.md`** — structured interpretation of the reference, not a higher authority
6. **Generic AI knowledge** — fallback only

Do not use generic UI conventions or another UI library to approximate the reference when an equivalent MDS implementation exists.

## Before implementation

Inspect:

- repository structure
- actual installed MDS packages
- MDS component source code where relevant
- existing MDS component usage
- existing project patterns
- `MDS.md`
- `SCREEN_SPEC.md`, if available
- all supplied reference images or Figma frames

Do not infer an MDS component's API or visual behavior from its name alone. Inspect the actual implementation and supported API.

## Reference interpretation

Use the reference to determine:

- page structure
- layout and proportions
- component placement
- dimensions
- spacing
- alignment
- density
- typography hierarchy
- colors
- borders
- radius
- icons
- visible states
- responsive behavior when supported by the supplied references

Do not redesign, modernize, simplify, or add visual patterns that are not supported by the reference.

The reference determines **where a component appears and how it is configured visually**.

The actual MDS implementation determines **how that component is implemented**.

## Component mapping

Map each visible UI element to one of:

1. Existing project component
2. Actual MDS component
3. Semantic layout using MDS tokens
4. Documented MDS/design-system gap

When an MDS component exists, use it rather than recreating it with:

- native HTML
- custom CSS
- generic Tailwind styles
- shadcn/ui
- another UI library

Use the actual import path, component API, variants, properties, states, and styling conventions available in the repository.

## MDS fidelity

Using the correct MDS component does not automatically guarantee visual fidelity.

After selecting the component, reproduce the reference through:

- correct MDS variant
- correct supported properties
- correct MDS tokens
- correct dimensions
- correct spacing
- correct layout
- correct component state
- correct content and density

Do not modify MDS component internals merely to approximate the reference. Prefer supported MDS APIs and tokens.

## Multiple reference images

When multiple images are supplied, analyze them together.

Use differences between images as evidence for:

- component states
- expanded/collapsed states
- responsive behavior
- content changes
- layout changes

Do not treat each image as an unrelated screen when they clearly represent the same screen or flow.

## SCREEN_SPEC.md

`SCREEN_SPEC.md` is an optional structured intermediate artifact.

The designer provides the template structure; the AI should generate or update its contents from the supplied reference images, Figma frames, repository, existing implementation, and explicit task requirements.

The designer does not need to manually complete the specification.

For simple screens, implementation may proceed directly from the reference.

For complex screens, multiple states, multiple breakpoints, or multiple reference images, generate or update `SCREEN_SPEC.md` before implementation.

Record only evidence-supported information. Put unresolved decisions in `Assumptions`.

`SCREEN_SPEC.md` documents the AI's interpretation; it does not override the reference, actual MDS implementation, or existing project behavior.

## No-guessing protocol

When a visual or implementation detail is uncertain:

1. Check the reference image or Figma frame.
2. Check existing project implementations.
3. Check `SCREEN_SPEC.md`, if available.
4. Inspect the actual MDS component source and supported tokens/API.
5. Choose the closest supported implementation.
6. Record unresolved assumptions or MDS gaps.

Do not silently invent visual values, component APIs, interactions, or responsive behavior.

## Static image limitations

Do not infer from a static image alone:

- hover behavior
- focus behavior
- interaction logic
- hidden states
- loading behavior
- error behavior
- responsive behavior not shown in the references

Only implement these when supported by the task, multiple reference images, existing implementation, or `SCREEN_SPEC.md`.

## Preserve existing functionality

When implementing a visual reference in an existing application:

- preserve business logic
- preserve state
- preserve data structures
- preserve routing
- preserve existing required interactions
- change UI implementation unless the task explicitly requires functional changes

Visual fidelity should not be achieved by breaking working product behavior.

## Fidelity priority

Correct mismatches in this order:

1. Canvas and viewport
2. Major page regions
3. Widths, heights, and proportions
4. Alignment and spacing
5. Typography and text wrapping
6. Component fit and density
7. Color, borders, radius, elevation, and icons
8. Micro-details

A screen with correct colors but incorrect geometry is not high fidelity.

## Implementation passes

### Pass 1 — Structure
Implement regions, containers, and major layout behavior.

### Pass 2 — Component mapping
Insert the correct existing or MDS components and confirm variants, properties, fit, states, and content hierarchy.

### Pass 3 — Geometry
Match widths, heights, padding, gaps, alignment, overflow, and visible density.

### Pass 4 — Typography and surfaces
Match typography, text wrapping, backgrounds, borders, radius, icons, and elevation using supported MDS rules.

### Pass 5 — Interaction
Implement only interactions supported by the task or reference materials.

### Pass 6 — Visual correction
Render, capture, compare, record concrete discrepancies, and correct them by severity using `UI_REVIEW.md`.

## Visual validation

After implementation:

1. Run the application.
2. Render the page at the reference viewport size.
3. Capture the rendered result.
4. Compare it with the reference.
5. Identify the largest observable discrepancies.
6. Fix them using existing project components and supported MDS APIs.
7. Render again.
8. Repeat as needed.

Do not consider the implementation complete simply because it uses MDS components.

## Completion rule

Do not claim pixel-perfect completion.

Stop when remaining differences are:

- visually minor and documented
- caused by an explicit MDS or accessibility constraint
- caused by missing source information and recorded as an assumption
