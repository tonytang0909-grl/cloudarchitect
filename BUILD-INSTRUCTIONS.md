# Tony Tang portfolio — build files

## Complete source archive

Requires Node.js 22.13+ (Node 22 LTS recommended) and npm.

```sh
npm ci
npm run dev -- --port 3003
```

Open http://localhost:3003. To create a fresh production build:

```sh
npm run build
```

For standalone output, copy `.next/static` into `.next/standalone/.next/static`, then run:

```sh
HOSTNAME=127.0.0.1 PORT=3003 node .next/standalone/server.js
```

If you add a `public` folder later, also copy it into `.next/standalone/public`.

## Prebuilt production archive

Extract the archive, enter `TonyPortofolio-production`, and run:

```sh
HOSTNAME=127.0.0.1 PORT=3003 node server.js
```

This standalone bundle includes the runtime dependencies and static assets. It was built on macOS ARM64; for a different operating system or architecture, rebuild using the source archive so native dependencies match your deployment environment.

## Included functionality

- Interactive hero playground and motion controls
- lamb and integration platform simulations
- Orkest animated branching workflow
- Micro PIM three-way diff and conflict-resolution simulation
- Project detail dialogs, contact links, and responsive layouts

No environment variables, API keys, or connected backend services are required for the portfolio. All project demonstrations run locally in the browser with illustrative data.

Source archive includes application code, configuration, dependency lockfile, context notes, and preview images. Installed dependencies, Git history, and generated caches are excluded; `npm ci` restores dependencies.
