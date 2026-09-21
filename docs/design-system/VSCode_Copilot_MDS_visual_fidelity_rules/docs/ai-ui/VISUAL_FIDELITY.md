# Visual Fidelity Mode

## Objective

Reproduce the supplied reference as faithfully as possible while using approved MDS components and the existing project architecture.

This is a replication task, not a design-generation task.

## Core instruction

The reference image or approved Figma frame is the visual source of truth. Do not improve it. Do not apply generic dashboard conventions. Do not fill missing information with decorative choices.

## Before writing code

Create a brief visual inventory:

- viewport size and device scale, if known
- global page regions
- navigation and page chrome
- content container width and outer margins
- grid or flex structure
- fixed and fluid dimensions
- repeated spacing intervals
- alignment anchors
- visible MDS components
- typography hierarchy
- table density and row height
- borders, dividers, radius, backgrounds, and elevation
- default, selected, expanded, disabled, loading, empty, and error states visible in the reference

Then map each visible element to one of these categories:

1. Existing project component
2. Official MDS component
3. Layout composition using semantic HTML and MDS tokens
4. Design-system gap requiring an explicitly documented exception

## Fidelity hierarchy

Correct mismatches in this order:

1. Overall canvas and viewport
2. Major page regions
3. Widths, heights, and proportions
4. Alignment and spacing
5. Typography size, weight, and line height
6. Component fit and density
7. Colour, border, radius, elevation, and icons
8. Micro-details

A page with correct colours but incorrect geometry is not high fidelity.

## No-guessing protocol

For every uncertain visual value:

1. Look for an equivalent screen or component in the existing repository.
2. Look for a relevant value in `SCREEN_SPEC.md`.
3. Use the nearest visible measurement from the reference.
4. Select the closest supported MDS token or component property.
5. Record the decision in the `Assumptions` section of `SCREEN_SPEC.md`.

Do not silently invent values.

## Image interpretation rules

When working from a screenshot:

- Match the implementation viewport to the screenshot viewport before comparing.
- Preserve the relative proportions of columns and panels.
- Use repeated edges as alignment anchors.
- Infer spacing from repeated gaps rather than from a single isolated gap.
- Treat text wrapping as a layout signal. Incorrect wrapping often indicates incorrect width, typography, or padding.
- Treat row count and visible content density as evidence of component fit and vertical spacing.
- Do not infer hover, focus, expanded, responsive, or error behavior from a static image unless it is specified elsewhere.

## MDS rules during replication

- Use MDS components for controls and patterns that visibly correspond to an MDS component.
- Use the component's supported API instead of reproducing its internal styling.
- Prefer MDS tokens to literal values when a matching token exists.
- If exact visual matching requires a non-token layout dimension, document the exception. Layout-specific widths may be necessary, but colour, typography, component styling, and interaction states should remain tokenized.
- Do not globally override MDS component internals to force a match.
- If the reference conflicts with MDS accessibility or component constraints, preserve accessibility and document the visual deviation.

## Controlled implementation passes

### Pass 1: Structure

Implement only regions, containers, and major layout behavior. Use temporary outlines only while debugging, and remove them before review.

### Pass 2: Component mapping

Insert the correct existing or MDS components. Confirm variants, fit, states, and content hierarchy.

### Pass 3: Geometry

Match widths, heights, padding, gaps, alignment, overflow, and visible density.

### Pass 4: Typography and surface

Match type hierarchy, text wrapping, backgrounds, borders, radius, icon size, and elevation.

### Pass 5: Interaction

Implement only the specified interactions and states. Do not invent additional product behavior.

### Pass 6: Visual correction

Render, capture, compare, list concrete discrepancies, and correct them by severity.

## Required comparison language

Do not say:

- "looks close"
- "generally matches"
- "pixel perfect"
- "done"

Instead report observable differences, for example:

- right panel is approximately 24 px too wide
- page title baseline is lower than the reference
- table displays one fewer row at the target viewport
- filter controls use medium fit but the reference appears denser
- secondary text wraps to two lines instead of one

## Completion rule

Stop only when remaining differences are either:

- visually minor and documented
- caused by an explicit MDS or accessibility constraint
- caused by missing source information and recorded as an assumption

