# VS Code GitHub Copilot UI Fidelity Rules

This package is designed for GitHub Copilot in VS Code when the underlying model is managed by the product or organization and cannot be selected by the user.

## Repository structure

```text
project-root/
├── .github/
│   └── copilot-instructions.md
└── docs/
    └── ai-ui/
        ├── VISUAL_FIDELITY.md
        ├── SCREEN_SPEC.md
        └── UI_REVIEW.md
```

## Why this structure

- `.github/copilot-instructions.md` is the project-wide instruction file for GitHub Copilot in VS Code.
- The three files under `docs/ai-ui/` contain task-specific detail without overloading every Copilot request.
- The rules are model-agnostic and do not depend on Claude Code or manual model selection.

## Setup

1. Copy the `.github` and `docs` folders into the repository root.
2. Complete `docs/ai-ui/SCREEN_SPEC.md` for the current screen, or copy it into the relevant concept folder and update the link in `.github/copilot-instructions.md`.
3. Use Copilot Chat or Agent mode for the task. Repository custom instructions do not control ordinary inline code completions.
4. Attach the approved reference image in the same Copilot conversation.
5. Ask Copilot to inspect the repository and the linked instruction files before editing.

## Recommended first prompt

```text
Inspect this repository and read:
- .github/copilot-instructions.md
- docs/ai-ui/VISUAL_FIDELITY.md
- docs/ai-ui/SCREEN_SPEC.md
- docs/ai-ui/UI_REVIEW.md

Use the attached image as the approved visual reference.
Do not edit code yet.

First return:
1. the page structure you observe
2. the existing and MDS component mapping
3. measurable layout assumptions
4. the closest existing screen or implementation to reuse
5. the smallest set of files you would change
6. anything that cannot be determined from the image
```

## Recommended implementation prompt

```text
Implement only passes 1 to 3 from the repository instructions:
- page regions and geometry
- major dimensions and overflow
- existing and MDS component mapping

Do not polish typography, colour, or micro-spacing yet.
Keep the route runnable and list every assumption you used.
```

## Recommended review prompt

After running the page, attach a screenshot captured at the same viewport as the reference and use the correction prompt in `docs/ai-ui/UI_REVIEW.md`.

## Important limitations

- The instructions influence Copilot Chat and Agent requests, but they do not guarantee deterministic output.
- They do not make a static image contain measurements or interaction details that are absent from the source.
- High fidelity still requires a rendered screenshot comparison loop.
- The actual installed MDS code and repository patterns take precedence over component APIs remembered by the model.

