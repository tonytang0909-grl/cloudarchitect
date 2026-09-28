# Tony Tang — personal portfolio

An experimental, responsive portfolio based on the content in `/Users/zhuang/Projects/cloudarchitect`. The original project is unchanged.

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

Main implementation: `app/page.tsx`; visual design and responsive breakpoints: `app/globals.css`.

Includes draggable playground pieces, reset and signal controls, interactive project simulations, keyboard-accessible project dialogs, email copying, and reduced-motion support. Simulations do not call production services. Professional details and project metrics come from the source portfolio and Tony’s project descriptions.

Order Validator demonstrates an AWS-based design-time workflow compiler: drag nodes between order scope and a Map area (or use keyboard-accessible move buttons), compile an illustrative JSON structure, then simulate deploying the same definition to configured sample clients. Editing the design invalidates its compiled preview. The sample checks and clients are illustrative; generated JSON is simplified for explanation and is not an AWS deployment artifact.
