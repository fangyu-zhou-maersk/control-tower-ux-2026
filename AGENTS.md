# MDS UI rules

Before modifying UI, read `docs/design-system/MDS.md`.

- Use MDS `mc-*` components whenever an equivalent exists.
- Use MDS tokens; do not hardcode colours, spacing, typography, or radius.
- Use the Maersk light theme unless the task says otherwise.
- This dense logistics dashboard uses the `small` component fit by default.
- Do not add or upgrade MDS dependencies without explicit approval.
- Import MDS fonts, tokens, foundations, and component registrations once in `src/main.jsx`.
- Run `npm run build` after UI changes.
