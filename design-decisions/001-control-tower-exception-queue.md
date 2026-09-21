# Decision: Control Tower Exception Queue

## Status

Accepted for Version 1.0 review

## Decision

Use a dense Air Exceptions control-tower layout with summary tiles, a filterable exception queue, expandable table rows, and side panels for shipment details and column configuration.

## Reason

The primary workflow is operational triage: users need to scan exception severity, filter shipments, inspect milestone details, and configure the queue without leaving the page. The design follows the supplied reference and Maersk Design System guidance.

## Alternatives Considered

- A separate shipment-details page.
- A card-first layout with no dense table.
- A modal dialog instead of a side panel.

## Consequences

The landing page remains dense and desktop-first. Side panels preserve the queue context while allowing detailed shipment review and column selection. Responsive behavior must preserve table readability and isolate horizontal scrolling to tables.

## Related Version and Commit

- Version: 1.0
- Branch: `Filter-as-a-global-controller`
- Commit: `b44d371ce7029aef09cb1c4ddf83593162119de6`
