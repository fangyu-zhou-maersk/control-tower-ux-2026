# AI UI Fidelity Workflow for MDS Projects

This package provides reusable instructions for reference-based UI implementation in projects that use the Maersk Design System (MDS).

It is designed for AI coding agents and does not depend on a specific model.

## Files

- `MDS.md` — official/project MDS rules. Keep this file unchanged when it is maintained as the official source.
- `VISUAL_FIDELITY.md` — how the AI should interpret and reproduce reference visuals using the actual MDS implementation.
- `SCREEN_SPEC.md` — reusable screen-specific specification template. The AI fills this from the reference; the designer does not need to manually complete it.
- `UI_REVIEW.md` — screenshot comparison and correction process.

## Recommended repository structure

```text
project-root/
├── .github/
│   └── copilot-instructions.md
├── MDS.md
└── docs/
    └── ai-ui/
        ├── VISUAL_FIDELITY.md
        ├── SCREEN_SPEC.md
        └── UI_REVIEW.md
```

Adapt the instruction-file location to the coding agent used by the project.

## Recommended workflow

### 1. Inspect

The AI should inspect:

- repository structure
- actual installed MDS packages
- actual MDS component source code where relevant
- existing MDS component usage
- existing project patterns
- `MDS.md`
- supplied reference images or Figma frames

### 2. Analyze the reference

Provide one or more reference images or Figma frames.

For simple screens, the AI can analyze the references directly.

For complex screens, multiple states, multiple breakpoints, or multiple reference images, ask the AI to generate or update `SCREEN_SPEC.md` before implementation.

The designer provides the structure of `SCREEN_SPEC.md`; the AI fills it using evidence from the references and repository.

### 3. Implement

Use this order:

1. structure
2. component mapping
3. geometry
4. typography and surfaces
5. specified interactions
6. visual correction

### 4. Review

Render the implementation at the same viewport as the reference.

Use `UI_REVIEW.md` to:

- identify observable discrepancies
- assign severity
- fix the highest-severity issues
- render again
- repeat

## Source-of-truth hierarchy

Use each source for the responsibility it is authoritative for:

```text
Reference image / Figma
        ↓
visual appearance

Actual MDS code / installed packages
        ↓
component implementation

MDS.md
        ↓
design-system rules and intent

Existing project code
        ↓
architecture, reuse, and functionality

SCREEN_SPEC.md
        ↓
structured interpretation of the reference

Generic AI knowledge
        ↓
fallback only
```

`SCREEN_SPEC.md` is not a higher authority than the reference or actual MDS implementation. It records the AI's interpretation and assumptions.

## If SCREEN_SPEC.md is not provided

The AI may implement directly from the reference image using:

- `VISUAL_FIDELITY.md`
- the actual MDS implementation
- `MDS.md`
- existing project code

`SCREEN_SPEC.md` is an optional intermediate artifact, not a mandatory manual form.

It is most useful when:

- multiple images describe the same screen
- several states must be reconciled
- responsive behavior is shown
- the screen has complex geometry
- assumptions need to be preserved across implementation passes

## Important

These files do not guarantee pixel-perfect output.

Fidelity depends on:

- quality and completeness of the reference
- viewport consistency
- actual MDS components available in the repository
- existing project architecture
- quality of visual comparison and correction
- information available in the source material
