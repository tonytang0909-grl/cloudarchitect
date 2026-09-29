# Tony Tang — personal portfolio

A responsive experimental portfolio with five interactive engineering exhibits, informed by the supplied project specifications.

## Development

```sh
npm ci
npm run dev -- --port 3003
```

## Validation

```sh
npm run lint
npm run build
```

The page is in app/page.tsx. Project content and simulations are in components/studio. Styles are in app/globals.css and app/studio.css. Freelance application copy is in FREELANCE-PROJECTS.md.

Project demos use synthetic data and make no service calls. Delivered capabilities and future architecture are distinguished. Reduced motion freezes sequenced demos and enables manual stepping. FlexVal supports dragging a check across the Map boundary or using the accessible move button. Compiled output is a simplified ASL fragment.

Historical components outside components/studio are retained but no longer rendered.
