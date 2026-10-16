# Code Knowledge Graph Overview

## Deliverables

- JSON graph: `docs/code-knowledge-graph/ecpho.code-knowledge-graph.json`
- Embedded data for standalone viewer: `docs/code-knowledge-graph/ecpho.code-knowledge-graph.data.js`
- Viewer: `docs/code-knowledge-graph/viewer.html`
- Regenerate command: `node scripts/generate-code-knowledge-graph.mjs`

## 1. Stack And Entry Points

- Stack: React 19, React Router 7, Vite 6, TypeScript, Tailwind CSS 4, Express 5 static/dev host.
- Entry points: `index.html`, `server.ts`, `src/main.tsx`, `GET /` (declared in `src/App.tsx`).
- Architecture shape: client-side SPA with static content/data modules; no active database access detected in the scanned codebase.

## 2. Graph Schema

- Node shape: `{ id, label, type, path, parentId, language, extension, description, tags, technicalKinds, riskLevel, isEntryPoint, isSecurityRelated, isDatabaseRelated, hasManyDependencies, isOrphan, dependencyCount, dependentCount, learningNotes, suggestedTests, securityNotes, routePath?, httpMethod?, functionRole? }`
- Edge shape: `{ source, target, type, label, description, confidence }`
- Meta shape: `{ generatedAt, scannedRoot, graphVersion, totalFiles, totalFunctions, totalRoutes, highRiskNodeCount, orphanNodeCount, topFileDependencies, topNodeCalledMost, reviewAreas }`

## 3. Scan Heuristics

- Parse TS/JS/TSX/JSX with the TypeScript compiler API instead of regex for imports, definitions, call sites, JSX render edges, React Router routes, and Express routes.
- Scan HTML, CSS, and common config files (`package.json`, `vite.config.ts`, `tsconfig.json`, `vercel.json`, `_headers`, `robots.txt`, `sitemap.xml`, `.env.example`).
- Ignore build/vendor/cache directories including `dist`, `node_modules`, `.git`, and `.venv`.
- Infer `route -> handler -> helper/component/data` traces from `route_to_handler`, `calls`, `renders`, and `uses` edges.
- Mark likely dead code as orphan only when disconnected from non-`defines` edges and not marked as an entry point.
- Risk heuristic: high for security-header config and server-authoritative nodes; medium for routes, security-related nodes, or dependency hubs; low for simple UI/style nodes.

## 4. Architecture Snapshot

- Router hub: `src/App.tsx` owns the full client route table and most URL-level behavior.
- Shared chrome: `src/layouts/BaseLayout.tsx` wraps nearly every page and renders header/footer/floating actions.
- SEO hub: `src/layouts/shared/SEOHead.tsx` plus `src/utils/schema.ts` and `src/data/business.ts` drive canonical/meta/schema output.
- Richest client logic: `src/pages/Menu.tsx` and `src/pages/BlogPostDetail.tsx` contain the most meaningful interactive or parsing behavior.
- Runtime/deploy entry: `server.ts`, `index.html`, and `vercel.json` define how the SPA boots and is served.

## 5. Route Map

- `GET *` -> `GET * handler`
- `GET *` -> `NotFoundPatch`
- `GET /` -> `Home`
- `GET /appetizers` -> `CompatibilityPage`
- `GET /blog` -> `Blog`
- `GET /blog/:slug` -> `BlogPostDetail`
- `GET /blogs` -> redirect or inline behavior
- `GET /bun` -> `CompatibilityPage`
- `GET /contact` -> `Contact`
- `GET /drinks` -> `CompatibilityPage`
- `GET /fried-rice` -> `CompatibilityPage`
- `GET /gallery` -> `Gallery`
- `GET /home-page` -> redirect or inline behavior
- `GET /menu` -> `Menu`
- `GET /pho` -> `CompatibilityPage`
- `GET /privacy` -> `Privacy`
- `GET /rice-plates` -> `CompatibilityPage`
- `GET /salads` -> `CompatibilityPage`
- `GET /specials` -> `CompatibilityPage`
- `GET /terms` -> `Terms`

## 6. Risk And Dead-Code Signals

- High-risk node count: 2
- Orphan node count: 2
- Top dependency hubs: `src/App.tsx` (31), `src/pages/Menu.tsx` (11), `src/pages/Home.tsx` (8), `src/components/sections/FeaturedDishes.tsx` (7), `src/layouts/shared/Header.tsx` (7)
- Top called/rendered nodes: `Container` (13), `CompatibilityPage` (9), `SEOHead` (8), `assetUrl` (6), `cn` (6)

- High-risk nodes to read first: `public/_headers`, `vercel.json`
- Likely orphan/dead-code candidates: `src/data/urlMigration.ts`, `handleScroll` (function in `src/layouts/shared/Header.tsx`)

## 7. How To Read This Project Fast

1. Start at `index.html`, `src/main.tsx`, and `src/App.tsx` to understand bootstrapping and the route table.
2. Read `src/layouts/BaseLayout.tsx` and shared layout components to learn the site-wide frame every route inherits.
3. Pick one simple route (`src/pages/Home.tsx`) and one richer route (`src/pages/Menu.tsx` or `src/pages/BlogPostDetail.tsx`) to see the normal page composition pattern.
4. Read `src/layouts/shared/SEOHead.tsx`, `src/utils/schema.ts`, and `src/data/business.ts` before touching SEO, metadata, business info, or social previews.
5. Review `server.ts`, `vercel.json`, and `public/_headers` before changing deployment, rewrites, or browser security policy.
6. Check `src/data/urlMigration.ts` last as a cleanup candidate because it is currently disconnected from runtime flow.

## 8. Review Areas

- Read src/main.tsx -> src/App.tsx first to map the SPA bootstrap and full client route table.
- Read BaseLayout next because shared header, footer, floating actions, and route transitions are centralized there.
- Review Menu.tsx early for non-trivial client behavior: hash routing, intersection observers, and sticky navigation.
- Review BlogPostDetail.tsx to understand route params, content parsing, and related-story rendering.
- Include SEOHead.tsx, utils/schema.ts, and data/business.ts in any SEO or security review because canonical/meta/schema generation converges there.
- Inspect src/data/urlMigration.ts as likely dead or planned migration data because it is currently disconnected from runtime flow.
- Review server.ts with vercel.json/public/_headers for runtime entry, SPA rewrite behavior, and browser security headers.
