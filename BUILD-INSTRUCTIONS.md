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
- Five project exhibits: Kazilo, lamb, NexusMF, FlexVal and Notification Service
- Tenant execution animation, selected-state debugger, supplier review, Map compilation and event lifecycle scenarios
- Explicit delivered-versus-planned scope notes
- Keyboard-accessible controls, project detail dialogs and responsive layouts

No API keys or backend connections are required. Every demonstration uses synthetic data. Compiler output is an explanatory fragment, not a deployable AWS definition.

The source archive excludes private specs, extracted research, installed dependencies, Git history and caches. Run npm ci to restore dependencies.
