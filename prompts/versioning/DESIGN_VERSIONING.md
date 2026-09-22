# DESIGN_VERSIONING

Definitions

- Branch = design concept
- Commit = meaningful design iteration
- Version Record = documented design state
- Tag = optional milestone

Repository Structure

repository-root/
├── src/
├── prompts/
├── concept-index/
│   ├── preview.md
│   ├── 1.0/
│   ├── 1.1/
│   └── 2.0/

The `concept-index` directory is the single source of truth for recorded design
versions. Each version directory contains its summary, Git reference, and
review screenshots. Design decisions and snapshot checklists should be recorded
in that version's `summary.md` rather than maintained in separate directories.

Rules

1. Work in a dedicated branch for each design concept.
2. Use commits for meaningful design iterations.
3. Capture screenshots of the final html preview for versions worth reviewing.
4. Record each version under concept-index.
5. Update preview.md whenever a version is recorded (any commit it triggered with a message).
6. Never merge into main unless explicitly instructed.

Versioning

- X.0 = new concept
- X.1 = refinement of the same concept

Status

- Exploring
- Review
- Selected
- Superseded
- Archived