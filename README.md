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

Includes draggable playground pieces, reset and signal controls, three illustrative project simulations, keyboard-accessible project dialogs, email copying, and reduced-motion support. Simulations do not call production services. Professional details and project metrics are carried over from the source portfolio.
