# Version 1.0: Control Tower Exception Queue

## Status

In review

## Commit Message

98% UI fidelity

## Summary

This version establishes the first reference-driven Control Tower design for Air Exceptions. It focuses on dense exception triage, severity scanning, filter controls, shipment inspection, and configurable table columns within a Maersk Design System visual language.

## What Changed

- Added the Air Exceptions landing page structure.
- Added summary tiles, threshold controls, filters, and exception queue behavior.
- Added tag-based milestone and ATC states.
- Added Shipment Details and Column View side panels.
- Added responsive table scrolling and MDS-aligned typography, spacing, colors, and source icons.

## Why

The version creates a complete, reviewable control-tower workflow from the supplied reference rather than treating the page as a collection of isolated components.

## Design Decisions

- Keep exception triage on one dense landing page.
- Use side panels to preserve queue context during detail review and column configuration.
- Represent milestone and ATC states with tags or plain text according to their semantics.
- Follow MDS tokens and source assets wherever available.

## Evidence

- Supplied Control Tower reference image and iterative visual review feedback.
- Repository MDS and visual-fidelity guidance.
- No formal user research was provided.

## Open Questions

- Which final screenshot set should be approved as the review baseline?
- Should this branch be renamed to the recommended `version/1.0-...` convention?
- Which remaining visual differences should become Version 1.1 refinements?

## Screenshots

1. `screenshots/01-overview.png` — pending capture
2. `screenshots/02-shipment-details.png` — pending capture
3. `screenshots/03-column-view.png` — pending capture

## Related Git Reference

See `branch-link.md`.
