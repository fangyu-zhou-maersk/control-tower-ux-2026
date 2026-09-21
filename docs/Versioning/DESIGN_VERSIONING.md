# Design Draft Versioning Workflow

## Purpose

This repository uses Git as a versioning system for code-first design drafts created through VS Code and Copilot.

The workflow is designed to support two needs:

1. Keep `main` as the current selected design and single source of truth.
2. Preserve every meaningful design draft as a complete, traceable version with screenshots, code, prompts, decisions, and optional research.

> Important: Git branches are not folders inside `main`. They are parallel versions of the repository. The `concept-index` folder on `main` provides the visual index for browsing and comparing those versions.

---

## Core Model

- **`main`** = the currently selected design version.
- **Branch** = one complete design version or direction.
- **Commit** = one meaningful iteration within a branch.
- **Version record** = a visual and written record of a committed iteration, stored in `main/concept-index/`.
- **Tag** = optional named milestone, such as a user test, stakeholder review, or demo.

In short:

```text
Branch = a complete design version
Commit = an iteration of that version
Version record = a browsable snapshot of that commit
Tag = an important milestone
main = the selected design
```

---

## Repository Structure on `main`

```text
repository-root/
├── src/                              # Code for the currently selected design
├── design-decisions/                 # Decisions for the selected design
├── prompts/                          # Prompt history for the selected design
├── user-research/                    # Optional research supporting the selected design
├── concept-index/                    # Visual index of all recorded versions
│   ├── README.md                     # Master comparison page
│   ├── 1.0/
│   │   ├── screenshots/
│   │   │   ├── 01-overview.png
│   │   │   └── 02-detail.png
│   │   ├── summary.md
│   │   └── branch-link.md
│   ├── 1.1/
│   │   ├── screenshots/
│   │   ├── summary.md
│   │   └── branch-link.md
│   └── 2.0/
│       ├── screenshots/
│       ├── summary.md
│       └── branch-link.md
├── README.md                         # Project overview and current status
└── DESIGN_VERSIONING.md              # This workflow
```

### What belongs on `main`

`main` contains:

- The code for the currently selected design.
- The decisions, prompts, and research associated with that selected design.
- The complete `concept-index`, including records of both selected and non-selected versions.
- This workflow document.

`main` does not contain every branch's complete working files. Those remain in their respective branches unless that branch is selected and merged into `main`.

---

## Structure of Every Design Branch

Each design branch should be self-contained.

```text
repository-root/
├── src/                              # Code for this version
├── design-decisions/                 # Design rationale for this version
├── prompts/                          # Prompt history for this version
├── user-research/                    # Optional research relevant to this version
├── design-snapshots/                 # Working screenshots from this branch
└── README.md                         # Version overview and usage instructions
```

Recommended branch names:

```text
version/1.0-human-review
version/1.1-human-review-refined
version/2.0-agent-led
version/3.0-supervisor-view
```

Use lowercase words separated by hyphens. Include the version number and a short description of the design direction.

---

## Version Numbering

Use a simple decimal format:

```text
1.0 = first meaningful design direction
1.1 = meaningful iteration of version 1
1.2 = another meaningful iteration of version 1
2.0 = a substantially different design direction
2.1 = meaningful iteration of version 2
```

Suggested interpretation:

- Increase the first number for a new concept, workflow model, or major design direction.
- Increase the second number for a meaningful refinement that keeps the same overall concept.

Do not use version numbers for tiny visual adjustments unless the change is intentionally being preserved as a reviewable design state.

---

## What Counts as a Version

Every commit with a meaningful commit message is treated as a versioning event.

A versioning event must include:

1. A committed design change.
2. A meaningful commit message explaining the change.
3. A matching folder under `main/concept-index/`.
4. One or more screenshots showing that committed state.
5. A `summary.md` containing the commit message and design summary.
6. A `branch-link.md` pointing to the relevant branch and commit.

Avoid incomplete commit messages such as:

```text
update
change UI
fix stuff
new version
```

Prefer comments that explain the design intent:

```text
Add human approval before high-risk vendor changes
Simplify the exception review flow after user feedback
Move automated recommendations into the comparison table
Separate suggested and confirmed vendor responses
```

---

## Required Workflow for Every Versioning Commit

### Step 1: Work in a Version Branch

Create or switch to the relevant branch.

```bash
git switch -c version/1.0-human-review
```

For an existing branch:

```bash
git switch version/1.0-human-review
```

### Step 2: Update the Branch Assets

Update the relevant content:

```text
src/
design-decisions/
prompts/
user-research/       optional
design-snapshots/
README.md
```

### Step 3: Commit the Iteration

```bash
git add .
git commit -m "Add human approval before high-risk vendor changes"
```

The commit message becomes the primary entry in the matching version summary.

### Step 4: Capture Screenshots

Capture the important screens from the committed version.

Recommended naming:

```text
01-overview.png
02-main-flow.png
03-exception-state.png
04-detail-view.png
```

Keep the screenshot order intentional so the version can be understood without opening the code.

### Step 5: Add the Version Record to `main`

Switch to `main`:

```bash
git switch main
```

Create the matching folder:

```text
concept-index/1.0/
├── screenshots/
├── summary.md
└── branch-link.md
```

Copy the selected screenshots into the version record and complete the two Markdown files using the templates below.

### Step 6: Update the Master Concept Index

Add the version to:

```text
concept-index/README.md
```

The master index should show:

- Version number.
- Concept name.
- Cover screenshot.
- One-line summary.
- Status.
- Branch link.
- Commit link.

### Step 7: Commit the Index Update on `main`

```bash
git add concept-index
git commit -m "Add concept index record for version 1.0"
```

This commit updates the visual catalog only. It does not make version 1.0 the selected design.

---

## `summary.md` Template

Create this file inside every version folder:

```markdown
# Version 1.0: Human Review

## Status

Exploring

## Commit Message

Add human approval before high-risk vendor changes

## Summary

This version introduces a human approval step for vendor changes that exceed the defined risk threshold. Low-risk changes remain automated, while high-risk changes are routed to the operator for review.

## What Changed

- Added a review queue for high-risk changes.
- Added before-and-after comparison.
- Added approve and reject actions.
- Clarified the system recommendation and operator responsibility.

## Why

The design explores how to preserve operator control while reducing manual work for routine vendor updates.

## Design Decisions

- High-risk changes require explicit approval.
- Low-risk changes can continue automatically.
- The interface must explain why a change was flagged.

## Evidence

- Add links or references to relevant research, feedback, or meeting notes.
- Write `Not available` if this version is not based on research.

## Open Questions

- How should the risk threshold be configured?
- What information is required before approval?
- What happens after rejection?

## Screenshots

1. `screenshots/01-overview.png`
2. `screenshots/02-main-flow.png`
3. `screenshots/03-exception-state.png`

## Related Git Reference

See `branch-link.md`.
```

The `Commit Message` section must reproduce the actual commit message exactly. The remaining sections explain its design significance.

---

## `branch-link.md` Template

```markdown
# Git Reference

- **Version:** 1.0
- **Branch:** `version/1.0-human-review`
- **Commit:** `<full-or-short-commit-hash>`
- **Branch link:** [Open branch](ADD_BRANCH_URL_HERE)
- **Commit link:** [Open exact commit](ADD_COMMIT_URL_HERE)
- **Status:** Exploring
```

Use the commit link when you need to restore the exact state shown in the screenshots. A branch can continue changing after the version record is created, while the commit remains fixed.

---

## `concept-index/README.md` Template

```markdown
# Concept Index

This page provides a visual overview of all recorded design versions. Each item links to the exact branch and commit where the version was created.

## Current Selected Design

- **Version:** 1.1
- **Status:** Selected on `main`
- **Summary:** Refined human-review flow with clearer exception handling.

---

## Version 1.0: Human Review

![Version 1.0 overview](1.0/screenshots/01-overview.png)

**Summary:** Introduces operator approval for high-risk vendor changes.

**Status:** Superseded by 1.1

[Read version summary](1.0/summary.md) | [Open Git reference](1.0/branch-link.md)

---

## Version 1.1: Refined Human Review

![Version 1.1 overview](1.1/screenshots/01-overview.png)

**Summary:** Simplifies exception handling based on review feedback.

**Status:** Selected on `main`

[Read version summary](1.1/summary.md) | [Open Git reference](1.1/branch-link.md)

---

## Version 2.0: Agent-Led Flow

![Version 2.0 overview](2.0/screenshots/01-overview.png)

**Summary:** Explores an agent-led workflow with operator supervision.

**Status:** Exploring

[Read version summary](2.0/summary.md) | [Open Git reference](2.0/branch-link.md)
```

---

## Version Status Values

Use one of these consistently:

```text
Exploring     = active design exploration
In review     = ready for user or stakeholder review
Selected      = current chosen version on main
Superseded    = replaced by a newer version
Rejected      = intentionally not selected
Archived      = preserved for reference but no longer active
```

A non-selected version should not be deleted. Update its status and preserve its branch, commit, summary, and screenshots.

---

## Selecting a Version for `main`

When a design version is selected:

1. Confirm that the branch contains the complete code, decisions, prompts, and relevant research.
2. Merge the selected branch into `main` through the repository's normal review process.
3. Resolve conflicts carefully so the selected branch's design context remains consistent.
4. Update `main/README.md` with the selected version number and summary.
5. Update `concept-index/README.md` and the version's `summary.md` status to `Selected`.
6. Mark the previously selected version as `Superseded` if applicable.
7. Optionally tag the selected commit.

Example tag:

```bash
git tag -a design-selected-v1.1 -m "Selected design version 1.1"
git push origin design-selected-v1.1
```

---

## Optional Milestone Tags

Tags are optional and should mark important review moments rather than every commit.

Examples:

```text
user-test-v1.0
stakeholder-review-v1.1
executive-demo-v2.0
design-selected-v1.1
```

Create an annotated tag:

```bash
git tag -a user-test-v1.0 -m "Version used for first user test"
git push origin user-test-v1.0
```

---

## Prompt History Guidance

Store prompts within the branch that produced the design.

Recommended structure:

```text
prompts/
├── 001-initial-concept.md
├── 002-refine-review-flow.md
└── 003-improve-exception-state.md
```

Recommended prompt record:

```markdown
# Prompt 002: Refine Review Flow

## Context

Briefly describe the design state before this prompt.

## Prompt

Copy the meaningful prompt used with Copilot.

## Result

Describe what changed in the prototype.

## Evaluation

What worked, what did not work, and what should happen next.

## Related Commit

`<commit-hash>`
```

Do not copy every conversational message automatically. Preserve prompts that materially influenced the design.

---

## Design Decision Guidance

Recommended structure:

```text
design-decisions/
├── 001-human-approval-threshold.md
├── 002-before-after-comparison.md
└── 003-rejection-behavior.md
```

Recommended decision record:

```markdown
# Decision: Human Approval Threshold

## Status

Accepted

## Decision

High-risk vendor changes require explicit operator approval.

## Reason

Explain the rationale and available evidence.

## Alternatives Considered

- Fully automatic processing.
- Review of every change.

## Consequences

Explain the UX, operational, and technical implications.

## Related Version and Commit

- Version: 1.0
- Commit: `<commit-hash>`
```

---

## Research Guidance

The `user-research/` folder is optional for each branch.

Include research only when it informs that design version. Link to approved enterprise sources rather than duplicating confidential material unnecessarily.

Recommended structure:

```text
user-research/
├── research-summary.md
├── findings.md
└── feedback-round-01.md
```

Clearly distinguish:

- Direct user evidence.
- Stakeholder input.
- Design assumptions.
- Open questions.

---

## Rules for Copilot

When Copilot is asked to create or modify a design version, use the following instruction:

```text
Follow DESIGN_VERSIONING.md.
Work only in the current version branch.
Keep src, design-decisions, prompts, optional user-research, design-snapshots, and README consistent with this version.
Before committing, summarize the design change and propose a meaningful commit message.
After the commit, create or update the matching concept-index version record on main with screenshots, the exact commit message, a version summary, and links to the branch and exact commit.
Do not merge a design branch into main unless that version has been selected.
```

> Copilot should not invent user evidence, research findings, branch URLs, commit hashes, or version status. These must come from the actual repository and project context.

---

## Versioning Checklist

### Before committing in a design branch

- [ ] The branch represents one coherent design version.
- [ ] The code runs and reflects the intended draft.
- [ ] Relevant design decisions are recorded.
- [ ] Meaningful prompts are recorded.
- [ ] Research is included if applicable.
- [ ] Working screenshots are current.
- [ ] The branch README explains the version.
- [ ] The commit message describes the design intent.

### After committing

- [ ] Record the commit hash.
- [ ] Capture screenshots from the committed state.
- [ ] Create the matching numbered folder in `main/concept-index/`.
- [ ] Copy the exact commit message into `summary.md`.
- [ ] Add branch and exact commit links to `branch-link.md`.
- [ ] Update `concept-index/README.md`.
- [ ] Commit the concept-index update on `main`.
- [ ] Add a tag only if this is an important milestone.

### When selecting a design

- [ ] Merge the selected design branch into `main`.
- [ ] Confirm `main` contains the selected code and context.
- [ ] Mark the selected version as `Selected`.
- [ ] Mark the previous selection as `Superseded`, if applicable.
- [ ] Update both README files.
- [ ] Optionally create a `design-selected` tag.

---

## Final Principle

The branch preserves the complete design world.

The commit preserves an exact iteration.

The `concept-index` makes iterations visually browsable.

The tag marks an important milestone.

`main` represents the currently selected design.
