# GitHub Copilot Repository Instructions

## Scope

These instructions apply to GitHub Copilot Chat and Agent workflows in this VS Code workspace, regardless of which underlying model is assigned or available.

Do not assume that the user can select a model. Do not require Claude Code, a `CLAUDE.md` file, model-specific commands, plugins, MCP servers, browser automation, or capabilities that are not available in the current VS Code Copilot session.

If a requested step requires a capability that is unavailable, continue with the strongest workflow possible using the repository, attached images, user-provided measurements, terminal tools, and rendered screenshots.

## Priority order

For UI implementation, prioritize:

1. Visual fidelity to the supplied approved reference
2. Correct use of the Maersk Design System (MDS)
3. Functional accuracy of the described interactions
4. Consistency with the existing repository
5. Accessibility and maintainability
6. Implementation speed

A technically valid page that does not visually match the reference is not complete.

## Required companion files

For image-to-code, Figma-to-code, design replication, or UI refinement tasks, read and follow:

- [Visual fidelity rules](../docs/ai-ui/VISUAL_FIDELITY.md)
- [Screen specification](../docs/ai-ui/SCREEN_SPEC.md)
- [UI review process](../docs/ai-ui/UI_REVIEW.md)

Treat this file as the always-on repository rule. Treat the companion files as task context. If Copilot has not loaded them, inspect them before editing UI code.

## Source-of-truth order

When sources conflict, use this order:

1. Approved reference image or Figma frame for appearance
2. The screen-specific specification for measurable layout and interaction details
3. Existing codebase conventions and working components
4. Installed MDS component APIs, tokens, examples, and accessibility behavior
5. Written task description
6. Copilot assumptions

Never replace a visible design decision with a generic AI preference.

## Before editing UI code

1. Inspect the repository structure, framework, package manifest, application entry point, styling approach, and nearby screens.
2. Locate the actual installed MDS packages and existing MDS usage. Do not rely only on remembered APIs.
3. Identify the nearest existing implementation that can be reused.
4. Inspect the reference image and the relevant screen specification.
5. Produce a short implementation plan covering structure, component mapping, measurable assumptions, and files to change.
6. Do not generate the whole page until the structure and assumptions are established.

If dimensions cannot be reliably inferred, do not block the task. Record the assumption in the screen specification and implement the closest supported result.

## MDS implementation rules

- Reuse existing project wrappers and patterns before introducing a new abstraction.
- Use official `mc-*` components from the MDS packages installed in this repository when an appropriate component exists.
- Do not add Material UI, Ant Design, Bootstrap, another design system, or a third-party icon library.
- Use official MDS tokens and foundations already configured in the application.
- Do not recreate an available MDS component with custom HTML and CSS.
- Do not override built-in accessibility, keyboard, focus, or semantic behavior.
- Do not install or upgrade packages unless the user explicitly requests it or the task cannot compile without the missing dependency.
- Keep global fonts, tokens, foundations, and component registration at the repository's established application entry point. Do not repeat global imports in every component.
- Verify component names, properties, events, variants, and slots against code or documentation available in the repository. Do not invent an API.

## Visual decision restrictions

Copilot is implementing an approved design, not creating a new design.

Do not:

- redesign, modernize, beautify, simplify, or reinterpret the reference
- add visual elements, states, content, or interactions that are not shown or specified
- choose arbitrary dimensions without recording the assumption
- change copy, capitalization, data order, column order, or information hierarchy
- replace an unusual layout with a conventional dashboard pattern
- make unrelated refactors during visual matching
- claim pixel-perfect completion without comparing a rendered screenshot at the same viewport

## Controlled implementation sequence

Work in passes:

1. Page regions and layout geometry
2. Major widths, heights, and overflow behavior
3. Existing and MDS component mapping
4. Spacing and alignment
5. Typography and text wrapping
6. Colour, border, radius, elevation, and icons
7. Content density and states
8. Interactions
9. Responsive behavior
10. Rendered screenshot comparison and correction

Do not spend time on micro-details while major geometry is still wrong.

## Copilot interaction rules

- Prefer small, reviewable edits over one large rewrite.
- Keep the project runnable after each pass.
- Use the terminal, tests, type checks, and existing preview commands when available.
- Distinguish facts found in the repository from assumptions inferred from an image.
- When the user provides a new screenshot of the implementation, compare it with the approved reference before editing again.
- Report observable discrepancies such as width, alignment, wrapping, row density, and spacing. Avoid vague statements such as "looks close" or "feels better."
- If Copilot cannot capture or inspect the rendered output itself, request or use a user-provided screenshot in the current chat rather than pretending the comparison occurred.

## Definition of done

UI work is complete only when:

- the target route renders without errors
- the required viewport and application state have been tested
- major regions, proportions, alignment, spacing, typography, and density match the reference
- correct existing or MDS components are used
- specified interactions and visible states work
- no unrequested visual invention remains
- the UI review process has been completed with a rendered screenshot
- assumptions and unavoidable deviations are documented

