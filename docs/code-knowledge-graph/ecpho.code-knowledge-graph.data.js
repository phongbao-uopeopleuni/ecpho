window.__GRAPH_DATA__ = {
  "nodes": [
    {
      "parentId": null,
      "description": "Configuration or deployment file .env.example.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "config:.env.example",
      "label": ".env.example",
      "type": "config",
      "path": ".env.example",
      "language": "text",
      "extension": ".example"
    },
    {
      "parentId": null,
      "description": "HTML shell or template index.html.",
      "tags": [
        "spa-shell"
      ],
      "technicalKinds": [
        "html-shell"
      ],
      "riskLevel": "low",
      "isEntryPoint": true,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Start here to understand runtime bootstrapping and request flow."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "template:index.html",
      "label": "index.html",
      "type": "template",
      "path": "index.html",
      "language": "html",
      "extension": ".html"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file metadata.json.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "config:metadata.json",
      "label": "metadata.json",
      "type": "config",
      "path": "metadata.json",
      "language": "json",
      "extension": ".json"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file package.json.",
      "tags": [
        "scripts"
      ],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "config:package.json",
      "label": "package.json",
      "type": "config",
      "path": "package.json",
      "language": "json",
      "extension": ".json"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file public/_headers.",
      "tags": [
        "security-headers"
      ],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "high",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [
        "Read this early during security review because it defines browser-facing headers and SPA rewrite behavior."
      ],
      "suggestedTests": [
        "Verify CSP, frame, and referrer headers are present in deployed responses.",
        "Add regression coverage before changing this node."
      ],
      "securityNotes": [
        "Changes here can silently relax CSP or clickjacking protections.",
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "config:public/_headers",
      "label": "_headers",
      "type": "config",
      "path": "public/_headers",
      "language": "text",
      "extension": ""
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file public/robots.txt.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "config:public/robots.txt",
      "label": "robots.txt",
      "type": "config",
      "path": "public/robots.txt",
      "language": "text",
      "extension": ".txt"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file public/sitemap.xml.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "config:public/sitemap.xml",
      "label": "sitemap.xml",
      "type": "config",
      "path": "public/sitemap.xml",
      "language": "xml",
      "extension": ".xml"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file run.cmd.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "config:run.cmd",
      "label": "run.cmd",
      "type": "config",
      "path": "run.cmd",
      "language": "batch",
      "extension": ".cmd"
    },
    {
      "parentId": null,
      "description": "Express runtime entry for local dev and production static serving.",
      "tags": [],
      "technicalKinds": [
        "server"
      ],
      "riskLevel": "medium",
      "isEntryPoint": true,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 1,
      "learningNotes": [
        "Start here to understand runtime bootstrapping and request flow.",
        "This is the runtime bridge between Vite dev middleware and production static serving.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Smoke test dev middleware mode and production catch-all serving of index.html."
      ],
      "securityNotes": [
        "Wildcard static serving is simple, but production headers rely on deployment config rather than Express middleware."
      ],
      "id": "file:server.ts",
      "label": "server.ts",
      "type": "file",
      "path": "server.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Source file src/App.tsx.",
      "tags": [],
      "technicalKinds": [
        "source"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 31,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "file:src/App.tsx",
      "label": "App.tsx",
      "type": "file",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Component module src/components/CompatibilityPage.tsx.",
      "tags": [],
      "technicalKinds": [
        "component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "file:src/components/CompatibilityPage.tsx",
      "label": "CompatibilityPage.tsx",
      "type": "file",
      "path": "src/components/CompatibilityPage.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Homepage or section component module src/components/sections/FeaturedDishes.tsx.",
      "tags": [],
      "technicalKinds": [
        "section"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 7,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/sections/FeaturedDishes.tsx",
      "label": "FeaturedDishes.tsx",
      "type": "file",
      "path": "src/components/sections/FeaturedDishes.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Homepage or section component module src/components/sections/Hero.tsx.",
      "tags": [],
      "technicalKinds": [
        "section"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 4,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/sections/Hero.tsx",
      "label": "Hero.tsx",
      "type": "file",
      "path": "src/components/sections/Hero.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Homepage or section component module src/components/sections/ReviewMarquee.tsx.",
      "tags": [],
      "technicalKinds": [
        "section"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/sections/ReviewMarquee.tsx",
      "label": "ReviewMarquee.tsx",
      "type": "file",
      "path": "src/components/sections/ReviewMarquee.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Reusable UI component module src/components/ui/Badge.tsx.",
      "tags": [],
      "technicalKinds": [
        "ui"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/ui/Badge.tsx",
      "label": "Badge.tsx",
      "type": "file",
      "path": "src/components/ui/Badge.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Reusable UI component module src/components/ui/Button.tsx.",
      "tags": [],
      "technicalKinds": [
        "ui"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 7,
      "learningNotes": [
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/ui/Button.tsx",
      "label": "Button.tsx",
      "type": "file",
      "path": "src/components/ui/Button.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Reusable UI component module src/components/ui/Card.tsx.",
      "tags": [],
      "technicalKinds": [
        "ui"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/ui/Card.tsx",
      "label": "Card.tsx",
      "type": "file",
      "path": "src/components/ui/Card.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Reusable UI component module src/components/ui/Container.tsx.",
      "tags": [],
      "technicalKinds": [
        "ui"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 13,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/components/ui/Container.tsx",
      "label": "Container.tsx",
      "type": "file",
      "path": "src/components/ui/Container.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Static data module src/data/blog.ts.",
      "tags": [],
      "technicalKinds": [
        "data"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 4,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/data/blog.ts",
      "label": "blog.ts",
      "type": "file",
      "path": "src/data/blog.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Static data module src/data/business.ts.",
      "tags": [],
      "technicalKinds": [
        "data"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 19,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/data/business.ts",
      "label": "business.ts",
      "type": "file",
      "path": "src/data/business.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Static data module src/data/gallery.ts.",
      "tags": [],
      "technicalKinds": [
        "data"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/data/gallery.ts",
      "label": "gallery.ts",
      "type": "file",
      "path": "src/data/gallery.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Static data module src/data/menu.ts.",
      "tags": [],
      "technicalKinds": [
        "data"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 6,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/data/menu.ts",
      "label": "menu.ts",
      "type": "file",
      "path": "src/data/menu.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Static data module src/data/seo.ts.",
      "tags": [],
      "technicalKinds": [
        "data"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/data/seo.ts",
      "label": "seo.ts",
      "type": "file",
      "path": "src/data/seo.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Static data module src/data/urlMigration.ts.",
      "tags": [],
      "technicalKinds": [
        "data"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": true,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [
        "This looks like legacy migration planning data. Check whether it should be wired into runtime redirects or removed.",
        "This node is currently detached from the main graph and is a candidate for cleanup or future wiring."
      ],
      "suggestedTests": [
        "Decide whether legacy URL mappings need coverage or cleanup as dead code."
      ],
      "securityNotes": [],
      "id": "file:src/data/urlMigration.ts",
      "label": "urlMigration.ts",
      "type": "file",
      "path": "src/data/urlMigration.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Style sheet src/index.css.",
      "tags": [],
      "technicalKinds": [
        "styles"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "style:src/index.css",
      "label": "index.css",
      "type": "style",
      "path": "src/index.css",
      "language": "css",
      "extension": ".css"
    },
    {
      "parentId": null,
      "description": "Layout module src/layouts/BaseLayout.tsx.",
      "tags": [],
      "technicalKinds": [
        "layout"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 4,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/layouts/BaseLayout.tsx",
      "label": "BaseLayout.tsx",
      "type": "file",
      "path": "src/layouts/BaseLayout.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Layout module src/layouts/shared/FloatingActions.tsx.",
      "tags": [],
      "technicalKinds": [
        "layout"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/layouts/shared/FloatingActions.tsx",
      "label": "FloatingActions.tsx",
      "type": "file",
      "path": "src/layouts/shared/FloatingActions.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Layout module src/layouts/shared/Footer.tsx.",
      "tags": [],
      "technicalKinds": [
        "layout"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/layouts/shared/Footer.tsx",
      "label": "Footer.tsx",
      "type": "file",
      "path": "src/layouts/shared/Footer.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Layout module src/layouts/shared/Header.tsx.",
      "tags": [],
      "technicalKinds": [
        "layout"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 7,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/layouts/shared/Header.tsx",
      "label": "Header.tsx",
      "type": "file",
      "path": "src/layouts/shared/Header.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Layout module src/layouts/shared/SEOHead.tsx.",
      "tags": [],
      "technicalKinds": [
        "layout"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 4,
      "dependentCount": 8,
      "learningNotes": [
        "This is the SEO hub. Canonical URL and schema issues usually funnel through here.",
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [
        "Assert canonical tags, Open Graph tags, and JSON-LD payloads for key routes."
      ],
      "securityNotes": [
        "Review injected schema payloads and ensure only trusted structured data reaches Helmet.",
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "file:src/layouts/shared/SEOHead.tsx",
      "label": "SEOHead.tsx",
      "type": "file",
      "path": "src/layouts/shared/SEOHead.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Source file src/main.tsx.",
      "tags": [],
      "technicalKinds": [
        "source"
      ],
      "riskLevel": "low",
      "isEntryPoint": true,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 1,
      "learningNotes": [
        "Start here to understand runtime bootstrapping and request flow."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/main.tsx",
      "label": "main.tsx",
      "type": "file",
      "path": "src/main.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Blog.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 6,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/pages/Blog.tsx",
      "label": "Blog.tsx",
      "type": "file",
      "path": "src/pages/Blog.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/BlogPostDetail.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 6,
      "dependentCount": 1,
      "learningNotes": [
        "This route shows route-param handling and content parsing in one place.",
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [
        "Verify missing slugs redirect safely and content blocks render expected quote/list/heading variants."
      ],
      "securityNotes": [],
      "id": "file:src/pages/BlogPostDetail.tsx",
      "label": "BlogPostDetail.tsx",
      "type": "file",
      "path": "src/pages/BlogPostDetail.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Contact.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 5,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/pages/Contact.tsx",
      "label": "Contact.tsx",
      "type": "file",
      "path": "src/pages/Contact.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Gallery.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 6,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/pages/Gallery.tsx",
      "label": "Gallery.tsx",
      "type": "file",
      "path": "src/pages/Gallery.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Home.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 8,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/pages/Home.tsx",
      "label": "Home.tsx",
      "type": "file",
      "path": "src/pages/Home.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Menu.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 11,
      "dependentCount": 1,
      "learningNotes": [
        "This page contains the richest client-side behavior: hash sync, scrolling, and category state.",
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [
        "Verify category navigation syncs scroll position and URL hash on mobile and desktop."
      ],
      "securityNotes": [],
      "id": "file:src/pages/Menu.tsx",
      "label": "Menu.tsx",
      "type": "file",
      "path": "src/pages/Menu.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Privacy.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/pages/Privacy.tsx",
      "label": "Privacy.tsx",
      "type": "file",
      "path": "src/pages/Privacy.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Page module src/pages/Terms.tsx.",
      "tags": [],
      "technicalKinds": [
        "page"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/pages/Terms.tsx",
      "label": "Terms.tsx",
      "type": "file",
      "path": "src/pages/Terms.tsx",
      "language": "typescript",
      "extension": ".tsx"
    },
    {
      "parentId": null,
      "description": "Utility module src/utils/assets.ts.",
      "tags": [],
      "technicalKinds": [
        "utility"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 6,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/utils/assets.ts",
      "label": "assets.ts",
      "type": "file",
      "path": "src/utils/assets.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Utility module src/utils/format.ts.",
      "tags": [],
      "technicalKinds": [
        "utility"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 7,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/utils/format.ts",
      "label": "format.ts",
      "type": "file",
      "path": "src/utils/format.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Utility module src/utils/schema.ts.",
      "tags": [],
      "technicalKinds": [
        "utility"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 5,
      "dependentCount": 1,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "file:src/utils/schema.ts",
      "label": "schema.ts",
      "type": "file",
      "path": "src/utils/schema.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file tsconfig.json.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "config:tsconfig.json",
      "label": "tsconfig.json",
      "type": "config",
      "path": "tsconfig.json",
      "language": "json",
      "extension": ".json"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file vercel.json.",
      "tags": [
        "security-headers"
      ],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "high",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 0,
      "learningNotes": [
        "Read this early during security review because it defines browser-facing headers and SPA rewrite behavior."
      ],
      "suggestedTests": [
        "Verify CSP, frame, and referrer headers are present in deployed responses.",
        "Add regression coverage before changing this node."
      ],
      "securityNotes": [
        "Changes here can silently relax CSP or clickjacking protections.",
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "config:vercel.json",
      "label": "vercel.json",
      "type": "config",
      "path": "vercel.json",
      "language": "json",
      "extension": ".json"
    },
    {
      "parentId": null,
      "description": "Configuration or deployment file vite.config.ts.",
      "tags": [],
      "technicalKinds": [
        "configuration"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 0,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "config:vite.config.ts",
      "label": "vite.config.ts",
      "type": "config",
      "path": "vite.config.ts",
      "language": "typescript",
      "extension": ".ts"
    },
    {
      "parentId": "file:server.ts",
      "description": "startServer is a local function in server.ts.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 1,
      "learningNotes": [
        "This is the runtime bridge between Vite dev middleware and production static serving."
      ],
      "suggestedTests": [
        "Smoke test dev middleware mode and production catch-all serving of index.html."
      ],
      "securityNotes": [
        "Wildcard static serving is simple, but production headers rely on deployment config rather than Express middleware."
      ],
      "id": "function:server.ts#startServer",
      "label": "startServer",
      "type": "function",
      "path": "server.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "helper"
    },
    {
      "parentId": "file:server.ts",
      "description": "Server route GET * declared in server.ts.",
      "tags": [],
      "technicalKinds": [
        "server-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler.",
        "This is the runtime bridge between Vite dev middleware and production static serving."
      ],
      "suggestedTests": [
        "Verify GET * reaches the expected handler.",
        "Smoke test dev middleware mode and production catch-all serving of index.html."
      ],
      "securityNotes": [
        "Wildcard static serving is simple, but production headers rely on deployment config rather than Express middleware."
      ],
      "id": "api_route:server.ts#GET:*",
      "label": "GET *",
      "type": "api_route",
      "path": "server.ts",
      "language": "typescript",
      "extension": ".ts",
      "routePath": "*",
      "httpMethod": "GET"
    },
    {
      "parentId": "function:server.ts#startServer",
      "description": "Inline handler for route GET *.",
      "tags": [
        "inline-handler"
      ],
      "technicalKinds": [
        "route-handler"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 2,
      "learningNotes": [
        "This is the runtime bridge between Vite dev middleware and production static serving.",
        "This handler sits directly behind a route, so route regressions will surface here first."
      ],
      "suggestedTests": [
        "Smoke test dev middleware mode and production catch-all serving of index.html."
      ],
      "securityNotes": [
        "Wildcard static serving is simple, but production headers rely on deployment config rather than Express middleware."
      ],
      "id": "function:server.ts#GET:*:handler",
      "label": "GET * handler",
      "type": "function",
      "path": "server.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "NotFoundPatch component renders part of the UI.",
      "tags": [],
      "technicalKinds": [
        "local",
        "component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 3,
      "learningNotes": [
        "This handler sits directly behind a route, so route regressions will surface here first."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/App.tsx#NotFoundPatch",
      "label": "NotFoundPatch",
      "type": "component",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "App component renders part of the UI.",
      "tags": [],
      "technicalKinds": [
        "local",
        "component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 11,
      "dependentCount": 2,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/App.tsx#App",
      "label": "App",
      "type": "component",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route / declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": true,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [
        "Start here to understand runtime bootstrapping and request flow.",
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET / reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/",
      "label": "GET /",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /home-page redirects to /.",
      "tags": [
        "redirect"
      ],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /home-page reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/home-page",
      "label": "GET /home-page",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/home-page",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /menu declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /menu reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/menu",
      "label": "GET /menu",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/menu",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /gallery declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /gallery reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/gallery",
      "label": "GET /gallery",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/gallery",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /blog declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /blog reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/blog",
      "label": "GET /blog",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/blog",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /blogs redirects to /blog.",
      "tags": [
        "redirect"
      ],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /blogs reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/blogs",
      "label": "GET /blogs",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/blogs",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /blog/:slug declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /blog/:slug reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/blog/:slug",
      "label": "GET /blog/:slug",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/blog/:slug",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /contact declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /contact reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/contact",
      "label": "GET /contact",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/contact",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /privacy declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /privacy reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/privacy",
      "label": "GET /privacy",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/privacy",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /terms declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /terms reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/terms",
      "label": "GET /terms",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/terms",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /appetizers declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /appetizers reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/appetizers",
      "label": "GET /appetizers",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/appetizers",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /salads declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /salads reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/salads",
      "label": "GET /salads",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/salads",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /pho declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /pho reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/pho",
      "label": "GET /pho",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/pho",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /bun declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /bun reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/bun",
      "label": "GET /bun",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/bun",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /rice-plates declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /rice-plates reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/rice-plates",
      "label": "GET /rice-plates",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/rice-plates",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /fried-rice declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /fried-rice reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/fried-rice",
      "label": "GET /fried-rice",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/fried-rice",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /drinks declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /drinks reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/drinks",
      "label": "GET /drinks",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/drinks",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route /specials declared in App.tsx.",
      "tags": [],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET /specials reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:/specials",
      "label": "GET /specials",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "/specials",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/App.tsx",
      "description": "Client route * declared in App.tsx.",
      "tags": [
        "not-found"
      ],
      "technicalKinds": [
        "client-route"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "Use this route as an anchor for tracing URL to component handler."
      ],
      "suggestedTests": [
        "Verify GET * reaches the expected handler."
      ],
      "securityNotes": [],
      "id": "api_route:src/App.tsx#GET:*",
      "label": "GET *",
      "type": "api_route",
      "path": "src/App.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "routePath": "*",
      "httpMethod": "GET"
    },
    {
      "parentId": "file:src/components/CompatibilityPage.tsx",
      "description": "CompatibilityPage component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 10,
      "learningNotes": [
        "This handler sits directly behind a route, so route regressions will surface here first."
      ],
      "suggestedTests": [],
      "securityNotes": [
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "label": "CompatibilityPage",
      "type": "component",
      "path": "src/components/CompatibilityPage.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/components/sections/FeaturedDishes.tsx",
      "description": "FeaturedDishes component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "section-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 4,
      "dependentCount": 2,
      "learningNotes": [
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "label": "FeaturedDishes",
      "type": "component",
      "path": "src/components/sections/FeaturedDishes.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/components/sections/Hero.tsx",
      "description": "Hero component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "section-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/components/sections/Hero.tsx#Hero",
      "label": "Hero",
      "type": "component",
      "path": "src/components/sections/Hero.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/components/sections/ReviewMarquee.tsx",
      "description": "ReviewMarquee component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "section-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/components/sections/ReviewMarquee.tsx#ReviewMarquee",
      "label": "ReviewMarquee",
      "type": "component",
      "path": "src/components/sections/ReviewMarquee.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/components/ui/Badge.tsx",
      "description": "Badge component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "ui-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/components/ui/Badge.tsx#Badge",
      "label": "Badge",
      "type": "component",
      "path": "src/components/ui/Badge.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/components/ui/Card.tsx",
      "description": "Card component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "ui-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/components/ui/Card.tsx#Card",
      "label": "Card",
      "type": "component",
      "path": "src/components/ui/Card.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/components/ui/Container.tsx",
      "description": "Container component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "ui-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 14,
      "learningNotes": [
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/components/ui/Container.tsx#Container",
      "label": "Container",
      "type": "component",
      "path": "src/components/ui/Container.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/layouts/BaseLayout.tsx",
      "description": "BaseLayout component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "layout-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 2,
      "learningNotes": [
        "This layout is cross-cutting and affects most routes through shared chrome or transitions."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/layouts/BaseLayout.tsx#BaseLayout",
      "label": "BaseLayout",
      "type": "component",
      "path": "src/layouts/BaseLayout.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/layouts/shared/FloatingActions.tsx",
      "description": "FloatingActions component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "layout-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [
        "This layout is cross-cutting and affects most routes through shared chrome or transitions."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/layouts/shared/FloatingActions.tsx#FloatingActions",
      "label": "FloatingActions",
      "type": "component",
      "path": "src/layouts/shared/FloatingActions.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/layouts/shared/Footer.tsx",
      "description": "Footer component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "layout-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 2,
      "learningNotes": [
        "This layout is cross-cutting and affects most routes through shared chrome or transitions."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/layouts/shared/Footer.tsx#Footer",
      "label": "Footer",
      "type": "component",
      "path": "src/layouts/shared/Footer.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/layouts/shared/Header.tsx",
      "description": "Header component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "layout-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 4,
      "dependentCount": 2,
      "learningNotes": [
        "This layout is cross-cutting and affects most routes through shared chrome or transitions.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "component:src/layouts/shared/Header.tsx#Header",
      "label": "Header",
      "type": "component",
      "path": "src/layouts/shared/Header.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "component:src/layouts/shared/Header.tsx#Header",
      "description": "handleScroll is a function assigned in Header.tsx.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": true,
      "dependencyCount": 0,
      "dependentCount": 1,
      "learningNotes": [
        "This node is currently detached from the main graph and is a candidate for cleanup or future wiring."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/layouts/shared/Header.tsx#handleScroll",
      "label": "handleScroll",
      "type": "function",
      "path": "src/layouts/shared/Header.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/layouts/shared/SEOHead.tsx",
      "description": "SEOHead component renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "layout-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": true,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 3,
      "dependentCount": 9,
      "learningNotes": [
        "This layout is cross-cutting and affects most routes through shared chrome or transitions.",
        "This is the SEO hub. Canonical URL and schema issues usually funnel through here.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Assert canonical tags, Open Graph tags, and JSON-LD payloads for key routes."
      ],
      "securityNotes": [
        "Review injected schema payloads and ensure only trusted structured data reaches Helmet.",
        "Review trust boundaries, external URLs, and header/canonical behavior before modifying this node."
      ],
      "id": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "label": "SEOHead",
      "type": "component",
      "path": "src/layouts/shared/SEOHead.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/pages/Blog.tsx",
      "description": "Blog page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 5,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "This handler sits directly behind a route, so route regressions will surface here first.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Blog.tsx#Blog",
      "label": "Blog",
      "type": "component",
      "path": "src/pages/Blog.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/pages/BlogPostDetail.tsx",
      "description": "parseContent is a function assigned in BlogPostDetail.tsx.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 2,
      "learningNotes": [
        "This route shows route-param handling and content parsing in one place."
      ],
      "suggestedTests": [
        "Verify missing slugs redirect safely and content blocks render expected quote/list/heading variants."
      ],
      "securityNotes": [],
      "id": "function:src/pages/BlogPostDetail.tsx#parseContent",
      "label": "parseContent",
      "type": "function",
      "path": "src/pages/BlogPostDetail.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/pages/BlogPostDetail.tsx",
      "description": "BlogPostDetail page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 5,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This route shows route-param handling and content parsing in one place.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "This handler sits directly behind a route, so route regressions will surface here first.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets.",
        "Verify missing slugs redirect safely and content blocks render expected quote/list/heading variants."
      ],
      "securityNotes": [],
      "id": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "label": "BlogPostDetail",
      "type": "component",
      "path": "src/pages/BlogPostDetail.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/pages/Contact.tsx",
      "description": "Contact page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 4,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "This handler sits directly behind a route, so route regressions will surface here first."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Contact.tsx#Contact",
      "label": "Contact",
      "type": "component",
      "path": "src/pages/Contact.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/pages/Gallery.tsx",
      "description": "Gallery page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 5,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "This handler sits directly behind a route, so route regressions will surface here first.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Gallery.tsx#Gallery",
      "label": "Gallery",
      "type": "component",
      "path": "src/pages/Gallery.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "component:src/pages/Gallery.tsx#Gallery",
      "description": "handleTabClick is a function assigned in Gallery.tsx.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/pages/Gallery.tsx#handleTabClick",
      "label": "handleTabClick",
      "type": "function",
      "path": "src/pages/Gallery.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/pages/Home.tsx",
      "description": "Home page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 7,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "This handler sits directly behind a route, so route regressions will surface here first.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Home.tsx#Home",
      "label": "Home",
      "type": "component",
      "path": "src/pages/Home.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/pages/Menu.tsx",
      "description": "Menu page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "medium",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": true,
      "isOrphan": false,
      "dependencyCount": 10,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This page contains the richest client-side behavior: hash sync, scrolling, and category state.",
        "This node is a hub. Small changes here likely have wide UI or routing impact.",
        "This handler sits directly behind a route, so route regressions will surface here first.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets.",
        "Verify category navigation syncs scroll position and URL hash on mobile and desktop."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Menu.tsx#Menu",
      "label": "Menu",
      "type": "component",
      "path": "src/pages/Menu.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "component:src/pages/Menu.tsx#Menu",
      "description": "scrollToCategory is a function assigned in Menu.tsx.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 3,
      "learningNotes": [
        "This page contains the richest client-side behavior: hash sync, scrolling, and category state."
      ],
      "suggestedTests": [
        "Verify category navigation syncs scroll position and URL hash on mobile and desktop."
      ],
      "securityNotes": [],
      "id": "function:src/pages/Menu.tsx#scrollToCategory",
      "label": "scrollToCategory",
      "type": "function",
      "path": "src/pages/Menu.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "component:src/pages/Menu.tsx#Menu",
      "description": "handleInitialHash is a function assigned in Menu.tsx.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 2,
      "learningNotes": [
        "This page contains the richest client-side behavior: hash sync, scrolling, and category state.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Verify category navigation syncs scroll position and URL hash on mobile and desktop."
      ],
      "securityNotes": [],
      "id": "function:src/pages/Menu.tsx#handleInitialHash",
      "label": "handleInitialHash",
      "type": "function",
      "path": "src/pages/Menu.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "helper"
    },
    {
      "parentId": "component:src/pages/Menu.tsx#Menu",
      "description": "handleIntersect is a function assigned in Menu.tsx.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [
        "This page contains the richest client-side behavior: hash sync, scrolling, and category state.",
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [
        "Verify category navigation syncs scroll position and URL hash on mobile and desktop."
      ],
      "securityNotes": [],
      "id": "function:src/pages/Menu.tsx#handleIntersect",
      "label": "handleIntersect",
      "type": "function",
      "path": "src/pages/Menu.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/pages/Privacy.tsx",
      "description": "Privacy page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This handler sits directly behind a route, so route regressions will surface here first."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Privacy.tsx#Privacy",
      "label": "Privacy",
      "type": "component",
      "path": "src/pages/Privacy.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/pages/Terms.tsx",
      "description": "Terms page renders part of the UI.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported",
        "page-component"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 3,
      "learningNotes": [
        "Read this page after App.tsx to understand a full user-facing route.",
        "This handler sits directly behind a route, so route regressions will surface here first."
      ],
      "suggestedTests": [
        "Render the page and verify SEO tags, content sections, and link targets."
      ],
      "securityNotes": [],
      "id": "component:src/pages/Terms.tsx#Terms",
      "label": "Terms",
      "type": "component",
      "path": "src/pages/Terms.tsx",
      "language": "typescript",
      "extension": ".tsx",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/utils/assets.ts",
      "description": "assetUrl is a local function in assets.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 7,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/assets.ts#assetUrl",
      "label": "assetUrl",
      "type": "function",
      "path": "src/utils/assets.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/utils/assets.ts",
      "description": "absoluteAssetUrl is a local function in assets.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/assets.ts#absoluteAssetUrl",
      "label": "absoluteAssetUrl",
      "type": "function",
      "path": "src/utils/assets.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/utils/format.ts",
      "description": "cn is a local function in format.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 7,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/format.ts#cn",
      "label": "cn",
      "type": "function",
      "path": "src/utils/format.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/utils/format.ts",
      "description": "formatPrice is a local function in format.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 3,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/format.ts#formatPrice",
      "label": "formatPrice",
      "type": "function",
      "path": "src/utils/format.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "helper"
    },
    {
      "parentId": "file:src/utils/schema.ts",
      "description": "to24h is a local function in schema.ts.",
      "tags": [],
      "technicalKinds": [
        "local"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 0,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/schema.ts#to24h",
      "label": "to24h",
      "type": "function",
      "path": "src/utils/schema.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/utils/schema.ts",
      "description": "generateRestaurantSchema is a function assigned in schema.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 2,
      "dependentCount": 2,
      "learningNotes": [
        "Trace outgoing helper calls here to understand downstream behavior quickly."
      ],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/schema.ts#generateRestaurantSchema",
      "label": "generateRestaurantSchema",
      "type": "function",
      "path": "src/utils/schema.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/utils/schema.ts",
      "description": "generateFAQSchema is a function assigned in schema.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 2,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/schema.ts#generateFAQSchema",
      "label": "generateFAQSchema",
      "type": "function",
      "path": "src/utils/schema.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "rendering"
    },
    {
      "parentId": "file:src/utils/schema.ts",
      "description": "generateBreadcrumbSchema is a function assigned in schema.ts.",
      "tags": [
        "exported"
      ],
      "technicalKinds": [
        "exported"
      ],
      "riskLevel": "low",
      "isEntryPoint": false,
      "isSecurityRelated": false,
      "isDatabaseRelated": false,
      "hasManyDependencies": false,
      "isOrphan": false,
      "dependencyCount": 1,
      "dependentCount": 1,
      "learningNotes": [],
      "suggestedTests": [],
      "securityNotes": [],
      "id": "function:src/utils/schema.ts#generateBreadcrumbSchema",
      "label": "generateBreadcrumbSchema",
      "type": "function",
      "path": "src/utils/schema.ts",
      "language": "typescript",
      "extension": ".ts",
      "functionRole": "rendering"
    }
  ],
  "edges": [
    {
      "confidence": "high",
      "source": "template:index.html",
      "target": "file:src/main.tsx",
      "type": "uses",
      "label": "uses",
      "description": "index.html bootstraps main.tsx."
    },
    {
      "confidence": "high",
      "source": "config:package.json",
      "target": "file:server.ts",
      "type": "configures",
      "label": "configures",
      "description": "package.json script references server.ts."
    },
    {
      "confidence": "high",
      "source": "file:server.ts",
      "target": "function:server.ts#startServer",
      "type": "defines",
      "label": "defines",
      "description": "server.ts defines startServer."
    },
    {
      "confidence": "high",
      "source": "file:server.ts",
      "target": "api_route:server.ts#GET:*",
      "type": "defines",
      "label": "defines",
      "description": "server.ts defines GET *."
    },
    {
      "confidence": "high",
      "source": "file:server.ts",
      "target": "function:server.ts#GET:*:handler",
      "type": "defines",
      "label": "defines",
      "description": "server.ts defines GET * handler."
    },
    {
      "confidence": "high",
      "source": "api_route:server.ts#GET:*",
      "target": "function:server.ts#GET:*:handler",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET * is handled by GET * handler."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/layouts/BaseLayout.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports BaseLayout.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Home.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Home.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Menu.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Menu.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Gallery.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Gallery.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Blog.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Blog.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/BlogPostDetail.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports BlogPostDetail.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Contact.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Contact.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Privacy.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Privacy.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/pages/Terms.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports Terms.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "file:src/components/CompatibilityPage.tsx",
      "type": "imports",
      "label": "imports",
      "description": "App.tsx imports CompatibilityPage.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "component:src/App.tsx#NotFoundPatch",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines NotFoundPatch."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "component:src/App.tsx#App",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines App."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/home-page",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /home-page."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/menu",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /menu."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/gallery",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /gallery."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/blog",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /blog."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/blogs",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /blogs."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/blog/:slug",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /blog/:slug."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/contact",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /contact."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/privacy",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /privacy."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/terms",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /terms."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/appetizers",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /appetizers."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/salads",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /salads."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/pho",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /pho."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/bun",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /bun."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/rice-plates",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /rice-plates."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/fried-rice",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /fried-rice."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/drinks",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /drinks."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:/specials",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET /specials."
    },
    {
      "confidence": "high",
      "source": "file:src/App.tsx",
      "target": "api_route:src/App.tsx#GET:*",
      "type": "defines",
      "label": "defines",
      "description": "App.tsx defines GET *."
    },
    {
      "confidence": "high",
      "source": "file:src/components/CompatibilityPage.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "CompatibilityPage.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/components/CompatibilityPage.tsx",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "defines",
      "label": "defines",
      "description": "CompatibilityPage.tsx defines CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "file:src/components/ui/Card.tsx",
      "type": "imports",
      "label": "imports",
      "description": "FeaturedDishes.tsx imports Card.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "FeaturedDishes.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "file:src/components/ui/Badge.tsx",
      "type": "imports",
      "label": "imports",
      "description": "FeaturedDishes.tsx imports Badge.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "file:src/data/menu.ts",
      "type": "imports",
      "label": "imports",
      "description": "FeaturedDishes.tsx imports menu.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "FeaturedDishes.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "file:src/utils/assets.ts",
      "type": "imports",
      "label": "imports",
      "description": "FeaturedDishes.tsx imports assets.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/FeaturedDishes.tsx",
      "target": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "type": "defines",
      "label": "defines",
      "description": "FeaturedDishes.tsx defines FeaturedDishes."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/Hero.tsx",
      "target": "file:src/components/ui/Button.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Hero.tsx imports Button.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/Hero.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Hero.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/Hero.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "Hero.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/Hero.tsx",
      "target": "component:src/components/sections/Hero.tsx#Hero",
      "type": "defines",
      "label": "defines",
      "description": "Hero.tsx defines Hero."
    },
    {
      "confidence": "high",
      "source": "file:src/components/sections/ReviewMarquee.tsx",
      "target": "component:src/components/sections/ReviewMarquee.tsx#ReviewMarquee",
      "type": "defines",
      "label": "defines",
      "description": "ReviewMarquee.tsx defines ReviewMarquee."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Badge.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "Badge.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Badge.tsx",
      "target": "component:src/components/ui/Badge.tsx#Badge",
      "type": "defines",
      "label": "defines",
      "description": "Badge.tsx defines Badge."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Button.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "Button.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Card.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "Card.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Card.tsx",
      "target": "component:src/components/ui/Card.tsx#Card",
      "type": "defines",
      "label": "defines",
      "description": "Card.tsx defines Card."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Container.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "Container.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/components/ui/Container.tsx",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "defines",
      "label": "defines",
      "description": "Container.tsx defines Container."
    },
    {
      "confidence": "high",
      "source": "file:src/data/seo.ts",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "seo.ts imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/BaseLayout.tsx",
      "target": "file:src/layouts/shared/Header.tsx",
      "type": "imports",
      "label": "imports",
      "description": "BaseLayout.tsx imports Header.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/BaseLayout.tsx",
      "target": "file:src/layouts/shared/Footer.tsx",
      "type": "imports",
      "label": "imports",
      "description": "BaseLayout.tsx imports Footer.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/BaseLayout.tsx",
      "target": "file:src/layouts/shared/FloatingActions.tsx",
      "type": "imports",
      "label": "imports",
      "description": "BaseLayout.tsx imports FloatingActions.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/BaseLayout.tsx",
      "target": "component:src/layouts/BaseLayout.tsx#BaseLayout",
      "type": "defines",
      "label": "defines",
      "description": "BaseLayout.tsx defines BaseLayout."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/FloatingActions.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "FloatingActions.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/FloatingActions.tsx",
      "target": "component:src/layouts/shared/FloatingActions.tsx#FloatingActions",
      "type": "defines",
      "label": "defines",
      "description": "FloatingActions.tsx defines FloatingActions."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Footer.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Footer.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Footer.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "Footer.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Footer.tsx",
      "target": "component:src/layouts/shared/Footer.tsx#Footer",
      "type": "defines",
      "label": "defines",
      "description": "Footer.tsx defines Footer."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "file:src/components/ui/Button.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Header.tsx imports Button.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Header.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "Header.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "Header.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "file:src/utils/assets.ts",
      "type": "imports",
      "label": "imports",
      "description": "Header.tsx imports assets.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "component:src/layouts/shared/Header.tsx#Header",
      "type": "defines",
      "label": "defines",
      "description": "Header.tsx defines Header."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/Header.tsx",
      "target": "function:src/layouts/shared/Header.tsx#handleScroll",
      "type": "defines",
      "label": "defines",
      "description": "Header.tsx defines handleScroll."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/SEOHead.tsx",
      "target": "file:src/data/seo.ts",
      "type": "imports",
      "label": "imports",
      "description": "SEOHead.tsx imports seo.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/SEOHead.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "SEOHead.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/SEOHead.tsx",
      "target": "file:src/utils/assets.ts",
      "type": "imports",
      "label": "imports",
      "description": "SEOHead.tsx imports assets.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/layouts/shared/SEOHead.tsx",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "defines",
      "label": "defines",
      "description": "SEOHead.tsx defines SEOHead."
    },
    {
      "confidence": "high",
      "source": "file:src/main.tsx",
      "target": "file:src/App.tsx",
      "type": "imports",
      "label": "imports",
      "description": "main.tsx imports App.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/main.tsx",
      "target": "style:src/index.css",
      "type": "imports",
      "label": "imports",
      "description": "main.tsx imports index.css."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Blog.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Blog.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Blog.tsx",
      "target": "file:src/components/ui/Card.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Blog.tsx imports Card.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Blog.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Blog.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Blog.tsx",
      "target": "file:src/data/blog.ts",
      "type": "imports",
      "label": "imports",
      "description": "Blog.tsx imports blog.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Blog.tsx",
      "target": "file:src/utils/assets.ts",
      "type": "imports",
      "label": "imports",
      "description": "Blog.tsx imports assets.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Blog.tsx",
      "target": "component:src/pages/Blog.tsx#Blog",
      "type": "defines",
      "label": "defines",
      "description": "Blog.tsx defines Blog."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/BlogPostDetail.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "BlogPostDetail.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/BlogPostDetail.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "BlogPostDetail.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/BlogPostDetail.tsx",
      "target": "file:src/data/blog.ts",
      "type": "imports",
      "label": "imports",
      "description": "BlogPostDetail.tsx imports blog.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/BlogPostDetail.tsx",
      "target": "file:src/utils/assets.ts",
      "type": "imports",
      "label": "imports",
      "description": "BlogPostDetail.tsx imports assets.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/BlogPostDetail.tsx",
      "target": "function:src/pages/BlogPostDetail.tsx#parseContent",
      "type": "defines",
      "label": "defines",
      "description": "BlogPostDetail.tsx defines parseContent."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/BlogPostDetail.tsx",
      "target": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "type": "defines",
      "label": "defines",
      "description": "BlogPostDetail.tsx defines BlogPostDetail."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Contact.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Contact.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Contact.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Contact.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Contact.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "Contact.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Contact.tsx",
      "target": "file:src/components/ui/Button.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Contact.tsx imports Button.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Contact.tsx",
      "target": "component:src/pages/Contact.tsx#Contact",
      "type": "defines",
      "label": "defines",
      "description": "Contact.tsx defines Contact."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Gallery.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Gallery.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Gallery.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Gallery.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Gallery.tsx",
      "target": "file:src/data/gallery.ts",
      "type": "imports",
      "label": "imports",
      "description": "Gallery.tsx imports gallery.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Gallery.tsx",
      "target": "file:src/utils/assets.ts",
      "type": "imports",
      "label": "imports",
      "description": "Gallery.tsx imports assets.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Gallery.tsx",
      "target": "component:src/pages/Gallery.tsx#Gallery",
      "type": "defines",
      "label": "defines",
      "description": "Gallery.tsx defines Gallery."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Gallery.tsx",
      "target": "function:src/pages/Gallery.tsx#handleTabClick",
      "type": "defines",
      "label": "defines",
      "description": "Gallery.tsx defines handleTabClick."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/components/sections/Hero.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports Hero.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/components/sections/FeaturedDishes.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports FeaturedDishes.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/components/sections/ReviewMarquee.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports ReviewMarquee.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "file:src/utils/schema.ts",
      "type": "imports",
      "label": "imports",
      "description": "Home.tsx imports schema.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Home.tsx",
      "target": "component:src/pages/Home.tsx#Home",
      "type": "defines",
      "label": "defines",
      "description": "Home.tsx defines Home."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/components/ui/Badge.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports Badge.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/components/ui/Button.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports Button.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/data/menu.ts",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports menu.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/utils/format.ts",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports format.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "Menu.tsx imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "component:src/pages/Menu.tsx#Menu",
      "type": "defines",
      "label": "defines",
      "description": "Menu.tsx defines Menu."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "function:src/pages/Menu.tsx#scrollToCategory",
      "type": "defines",
      "label": "defines",
      "description": "Menu.tsx defines scrollToCategory."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "function:src/pages/Menu.tsx#handleInitialHash",
      "type": "defines",
      "label": "defines",
      "description": "Menu.tsx defines handleInitialHash."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Menu.tsx",
      "target": "function:src/pages/Menu.tsx#handleIntersect",
      "type": "defines",
      "label": "defines",
      "description": "Menu.tsx defines handleIntersect."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Privacy.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Privacy.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Privacy.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Privacy.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Privacy.tsx",
      "target": "component:src/pages/Privacy.tsx#Privacy",
      "type": "defines",
      "label": "defines",
      "description": "Privacy.tsx defines Privacy."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Terms.tsx",
      "target": "file:src/layouts/shared/SEOHead.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Terms.tsx imports SEOHead.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Terms.tsx",
      "target": "file:src/components/ui/Container.tsx",
      "type": "imports",
      "label": "imports",
      "description": "Terms.tsx imports Container.tsx."
    },
    {
      "confidence": "high",
      "source": "file:src/pages/Terms.tsx",
      "target": "component:src/pages/Terms.tsx#Terms",
      "type": "defines",
      "label": "defines",
      "description": "Terms.tsx defines Terms."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/assets.ts",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "defines",
      "label": "defines",
      "description": "assets.ts defines assetUrl."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/assets.ts",
      "target": "function:src/utils/assets.ts#absoluteAssetUrl",
      "type": "defines",
      "label": "defines",
      "description": "assets.ts defines absoluteAssetUrl."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/format.ts",
      "target": "function:src/utils/format.ts#cn",
      "type": "defines",
      "label": "defines",
      "description": "format.ts defines cn."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/format.ts",
      "target": "function:src/utils/format.ts#formatPrice",
      "type": "defines",
      "label": "defines",
      "description": "format.ts defines formatPrice."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/schema.ts",
      "target": "file:src/data/business.ts",
      "type": "imports",
      "label": "imports",
      "description": "schema.ts imports business.ts."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/schema.ts",
      "target": "function:src/utils/schema.ts#to24h",
      "type": "defines",
      "label": "defines",
      "description": "schema.ts defines to24h."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/schema.ts",
      "target": "function:src/utils/schema.ts#generateRestaurantSchema",
      "type": "defines",
      "label": "defines",
      "description": "schema.ts defines generateRestaurantSchema."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/schema.ts",
      "target": "function:src/utils/schema.ts#generateFAQSchema",
      "type": "defines",
      "label": "defines",
      "description": "schema.ts defines generateFAQSchema."
    },
    {
      "confidence": "high",
      "source": "file:src/utils/schema.ts",
      "target": "function:src/utils/schema.ts#generateBreadcrumbSchema",
      "type": "defines",
      "label": "defines",
      "description": "schema.ts defines generateBreadcrumbSchema."
    },
    {
      "confidence": "high",
      "source": "config:vercel.json",
      "target": "template:index.html",
      "type": "configures",
      "label": "configures",
      "description": "vercel.json rewrites requests to index.html."
    },
    {
      "confidence": "medium",
      "source": "file:server.ts",
      "target": "function:server.ts#startServer",
      "type": "calls",
      "label": "calls",
      "description": "server.ts calls startServer."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/layouts/BaseLayout.tsx#BaseLayout",
      "type": "renders",
      "label": "renders",
      "description": "App renders BaseLayout."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/",
      "target": "component:src/pages/Home.tsx#Home",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET / is handled by Home."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Home.tsx#Home",
      "type": "renders",
      "label": "renders",
      "description": "App renders Home."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/menu",
      "target": "component:src/pages/Menu.tsx#Menu",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /menu is handled by Menu."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Menu.tsx#Menu",
      "type": "renders",
      "label": "renders",
      "description": "App renders Menu."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/gallery",
      "target": "component:src/pages/Gallery.tsx#Gallery",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /gallery is handled by Gallery."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Gallery.tsx#Gallery",
      "type": "renders",
      "label": "renders",
      "description": "App renders Gallery."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/blog",
      "target": "component:src/pages/Blog.tsx#Blog",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /blog is handled by Blog."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Blog.tsx#Blog",
      "type": "renders",
      "label": "renders",
      "description": "App renders Blog."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/blog/:slug",
      "target": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /blog/:slug is handled by BlogPostDetail."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "type": "renders",
      "label": "renders",
      "description": "App renders BlogPostDetail."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/contact",
      "target": "component:src/pages/Contact.tsx#Contact",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /contact is handled by Contact."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Contact.tsx#Contact",
      "type": "renders",
      "label": "renders",
      "description": "App renders Contact."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/privacy",
      "target": "component:src/pages/Privacy.tsx#Privacy",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /privacy is handled by Privacy."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Privacy.tsx#Privacy",
      "type": "renders",
      "label": "renders",
      "description": "App renders Privacy."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/terms",
      "target": "component:src/pages/Terms.tsx#Terms",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /terms is handled by Terms."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/pages/Terms.tsx#Terms",
      "type": "renders",
      "label": "renders",
      "description": "App renders Terms."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/appetizers",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /appetizers is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "renders",
      "label": "renders",
      "description": "App renders CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/salads",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /salads is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/pho",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /pho is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/bun",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /bun is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/rice-plates",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /rice-plates is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/fried-rice",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /fried-rice is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/drinks",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /drinks is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/specials",
      "target": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET /specials is handled by CompatibilityPage."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:*",
      "target": "component:src/App.tsx#NotFoundPatch",
      "type": "route_to_handler",
      "label": "route_to_handler",
      "description": "GET * is handled by NotFoundPatch."
    },
    {
      "confidence": "high",
      "source": "component:src/App.tsx#App",
      "target": "component:src/App.tsx#NotFoundPatch",
      "type": "renders",
      "label": "renders",
      "description": "App renders NotFoundPatch."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/home-page",
      "target": "api_route:src/App.tsx#GET:/",
      "type": "uses",
      "label": "redirects-to",
      "description": "GET /home-page redirects to GET /."
    },
    {
      "confidence": "high",
      "source": "api_route:src/App.tsx#GET:/blogs",
      "target": "api_route:src/App.tsx#GET:/blog",
      "type": "uses",
      "label": "redirects-to",
      "description": "GET /blogs redirects to GET /blog."
    },
    {
      "confidence": "high",
      "source": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "CompatibilityPage renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "target": "file:src/data/menu.ts",
      "type": "calls",
      "label": "calls",
      "description": "FeaturedDishes calls menu.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "target": "file:src/data/menu.ts",
      "type": "uses",
      "label": "uses",
      "description": "FeaturedDishes uses menu.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "FeaturedDishes renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "calls",
      "label": "calls",
      "description": "FeaturedDishes calls assetUrl."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "target": "function:src/utils/format.ts#formatPrice",
      "type": "calls",
      "label": "calls",
      "description": "FeaturedDishes calls formatPrice."
    },
    {
      "confidence": "high",
      "source": "component:src/components/sections/Hero.tsx#Hero",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Hero renders Container."
    },
    {
      "confidence": "high",
      "source": "component:src/components/sections/Hero.tsx#Hero",
      "target": "file:src/components/ui/Button.tsx",
      "type": "uses",
      "label": "uses",
      "description": "Hero uses Button.tsx."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/ui/Badge.tsx#Badge",
      "target": "function:src/utils/format.ts#cn",
      "type": "calls",
      "label": "calls",
      "description": "Badge calls cn."
    },
    {
      "confidence": "medium",
      "source": "file:src/components/ui/Button.tsx",
      "target": "function:src/utils/format.ts#cn",
      "type": "calls",
      "label": "calls",
      "description": "Button.tsx calls cn."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/ui/Card.tsx#Card",
      "target": "function:src/utils/format.ts#cn",
      "type": "calls",
      "label": "calls",
      "description": "Card calls cn."
    },
    {
      "confidence": "medium",
      "source": "component:src/components/ui/Container.tsx#Container",
      "target": "function:src/utils/format.ts#cn",
      "type": "calls",
      "label": "calls",
      "description": "Container calls cn."
    },
    {
      "confidence": "medium",
      "source": "file:src/data/seo.ts",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "seo.ts uses business.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/layouts/BaseLayout.tsx#BaseLayout",
      "target": "component:src/layouts/shared/Header.tsx#Header",
      "type": "renders",
      "label": "renders",
      "description": "BaseLayout renders Header."
    },
    {
      "confidence": "high",
      "source": "component:src/layouts/BaseLayout.tsx#BaseLayout",
      "target": "component:src/layouts/shared/Footer.tsx#Footer",
      "type": "renders",
      "label": "renders",
      "description": "BaseLayout renders Footer."
    },
    {
      "confidence": "high",
      "source": "component:src/layouts/BaseLayout.tsx#BaseLayout",
      "target": "component:src/layouts/shared/FloatingActions.tsx#FloatingActions",
      "type": "renders",
      "label": "renders",
      "description": "BaseLayout renders FloatingActions."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/FloatingActions.tsx#FloatingActions",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "FloatingActions uses business.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/layouts/shared/Footer.tsx#Footer",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Footer renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/Footer.tsx#Footer",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "Footer uses business.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/Header.tsx#Header",
      "target": "function:src/utils/format.ts#cn",
      "type": "calls",
      "label": "calls",
      "description": "Header calls cn."
    },
    {
      "confidence": "high",
      "source": "component:src/layouts/shared/Header.tsx#Header",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Header renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/Header.tsx#Header",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "calls",
      "label": "calls",
      "description": "Header calls assetUrl."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/Header.tsx#Header",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "Header uses business.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "SEOHead uses business.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "target": "file:src/data/seo.ts",
      "type": "uses",
      "label": "uses",
      "description": "SEOHead uses seo.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "target": "function:src/utils/assets.ts#absoluteAssetUrl",
      "type": "calls",
      "label": "calls",
      "description": "SEOHead calls absoluteAssetUrl."
    },
    {
      "confidence": "high",
      "source": "file:src/main.tsx",
      "target": "component:src/App.tsx#App",
      "type": "renders",
      "label": "renders",
      "description": "main.tsx renders App."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Blog.tsx#Blog",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Blog renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Blog.tsx#Blog",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Blog renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Blog.tsx#Blog",
      "target": "file:src/data/blog.ts",
      "type": "calls",
      "label": "calls",
      "description": "Blog calls blog.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Blog.tsx#Blog",
      "target": "file:src/data/blog.ts",
      "type": "uses",
      "label": "uses",
      "description": "Blog uses blog.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Blog.tsx#Blog",
      "target": "component:src/components/ui/Card.tsx#Card",
      "type": "renders",
      "label": "renders",
      "description": "Blog renders Card."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Blog.tsx#Blog",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "calls",
      "label": "calls",
      "description": "Blog calls assetUrl."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "target": "file:src/data/blog.ts",
      "type": "calls",
      "label": "calls",
      "description": "BlogPostDetail calls blog.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "target": "file:src/data/blog.ts",
      "type": "uses",
      "label": "uses",
      "description": "BlogPostDetail uses blog.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "target": "function:src/pages/BlogPostDetail.tsx#parseContent",
      "type": "calls",
      "label": "calls",
      "description": "BlogPostDetail calls parseContent."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "BlogPostDetail renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "BlogPostDetail renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/BlogPostDetail.tsx#BlogPostDetail",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "calls",
      "label": "calls",
      "description": "BlogPostDetail calls assetUrl."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Contact.tsx#Contact",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Contact renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Contact.tsx#Contact",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Contact renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Contact.tsx#Contact",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "Contact uses business.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Contact.tsx#Contact",
      "target": "file:src/components/ui/Button.tsx",
      "type": "uses",
      "label": "uses",
      "description": "Contact uses Button.tsx."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Gallery.tsx#Gallery",
      "target": "file:src/data/gallery.ts",
      "type": "uses",
      "label": "uses",
      "description": "Gallery uses gallery.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Gallery.tsx#Gallery",
      "target": "file:src/data/gallery.ts",
      "type": "calls",
      "label": "calls",
      "description": "Gallery calls gallery.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Gallery.tsx#Gallery",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Gallery renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Gallery.tsx#Gallery",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Gallery renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Gallery.tsx#Gallery",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "calls",
      "label": "calls",
      "description": "Gallery calls assetUrl."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Gallery.tsx#Gallery",
      "target": "function:src/pages/Gallery.tsx#handleTabClick",
      "type": "calls",
      "label": "calls",
      "description": "Gallery calls handleTabClick."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "function:src/utils/schema.ts#generateRestaurantSchema",
      "type": "calls",
      "label": "calls",
      "description": "Home calls generateRestaurantSchema."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "function:src/utils/schema.ts#generateFAQSchema",
      "type": "calls",
      "label": "calls",
      "description": "Home calls generateFAQSchema."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Home renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "component:src/components/sections/Hero.tsx#Hero",
      "type": "renders",
      "label": "renders",
      "description": "Home renders Hero."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Home renders Container."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "component:src/components/sections/FeaturedDishes.tsx#FeaturedDishes",
      "type": "renders",
      "label": "renders",
      "description": "Home renders FeaturedDishes."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Home.tsx#Home",
      "target": "component:src/components/sections/ReviewMarquee.tsx#ReviewMarquee",
      "type": "renders",
      "label": "renders",
      "description": "Home renders ReviewMarquee."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "file:src/data/menu.ts",
      "type": "uses",
      "label": "uses",
      "description": "Menu uses menu.ts."
    },
    {
      "confidence": "medium",
      "source": "function:src/pages/Menu.tsx#handleInitialHash",
      "target": "file:src/data/menu.ts",
      "type": "calls",
      "label": "calls",
      "description": "handleInitialHash calls menu.ts."
    },
    {
      "confidence": "medium",
      "source": "function:src/pages/Menu.tsx#handleInitialHash",
      "target": "file:src/data/menu.ts",
      "type": "uses",
      "label": "uses",
      "description": "handleInitialHash uses menu.ts."
    },
    {
      "confidence": "medium",
      "source": "function:src/pages/Menu.tsx#handleInitialHash",
      "target": "function:src/pages/Menu.tsx#scrollToCategory",
      "type": "calls",
      "label": "calls",
      "description": "handleInitialHash calls scrollToCategory."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "function:src/pages/Menu.tsx#handleInitialHash",
      "type": "calls",
      "label": "calls",
      "description": "Menu calls handleInitialHash."
    },
    {
      "confidence": "medium",
      "source": "function:src/pages/Menu.tsx#handleIntersect",
      "target": "file:src/data/menu.ts",
      "type": "calls",
      "label": "calls",
      "description": "handleIntersect calls menu.ts."
    },
    {
      "confidence": "medium",
      "source": "function:src/pages/Menu.tsx#handleIntersect",
      "target": "file:src/data/menu.ts",
      "type": "uses",
      "label": "uses",
      "description": "handleIntersect uses menu.ts."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "file:src/data/menu.ts",
      "type": "calls",
      "label": "calls",
      "description": "Menu calls menu.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Menu renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Menu renders Container."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "function:src/pages/Menu.tsx#scrollToCategory",
      "type": "calls",
      "label": "calls",
      "description": "Menu calls scrollToCategory."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "function:src/utils/format.ts#cn",
      "type": "calls",
      "label": "calls",
      "description": "Menu calls cn."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "function:src/utils/format.ts#formatPrice",
      "type": "calls",
      "label": "calls",
      "description": "Menu calls formatPrice."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "component:src/components/ui/Badge.tsx#Badge",
      "type": "renders",
      "label": "renders",
      "description": "Menu renders Badge."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "file:src/components/ui/Button.tsx",
      "type": "uses",
      "label": "uses",
      "description": "Menu uses Button.tsx."
    },
    {
      "confidence": "medium",
      "source": "component:src/pages/Menu.tsx#Menu",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "Menu uses business.ts."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Privacy.tsx#Privacy",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Privacy renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Privacy.tsx#Privacy",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Privacy renders Container."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Terms.tsx#Terms",
      "target": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
      "type": "renders",
      "label": "renders",
      "description": "Terms renders SEOHead."
    },
    {
      "confidence": "high",
      "source": "component:src/pages/Terms.tsx#Terms",
      "target": "component:src/components/ui/Container.tsx#Container",
      "type": "renders",
      "label": "renders",
      "description": "Terms renders Container."
    },
    {
      "confidence": "medium",
      "source": "function:src/utils/assets.ts#absoluteAssetUrl",
      "target": "function:src/utils/assets.ts#assetUrl",
      "type": "calls",
      "label": "calls",
      "description": "absoluteAssetUrl calls assetUrl."
    },
    {
      "confidence": "medium",
      "source": "function:src/utils/schema.ts#generateRestaurantSchema",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "generateRestaurantSchema uses business.ts."
    },
    {
      "confidence": "medium",
      "source": "function:src/utils/schema.ts#generateRestaurantSchema",
      "target": "function:src/utils/schema.ts#to24h",
      "type": "calls",
      "label": "calls",
      "description": "generateRestaurantSchema calls to24h."
    },
    {
      "confidence": "medium",
      "source": "function:src/utils/schema.ts#generateFAQSchema",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "generateFAQSchema uses business.ts."
    },
    {
      "confidence": "medium",
      "source": "function:src/utils/schema.ts#generateBreadcrumbSchema",
      "target": "file:src/data/business.ts",
      "type": "uses",
      "label": "uses",
      "description": "generateBreadcrumbSchema uses business.ts."
    }
  ],
  "meta": {
    "generatedAt": "2026-05-29T16:05:56.288Z",
    "scannedRoot": ".",
    "graphVersion": "1.0.0",
    "totalFiles": 45,
    "totalFunctions": 38,
    "totalRoutes": 20,
    "totalNodes": 103,
    "totalEdges": 251,
    "scannedFileCount": 45,
    "highRiskNodeCount": 2,
    "orphanNodeCount": 2,
    "topFileDependencies": [
      {
        "id": "file:src/App.tsx",
        "label": "App.tsx",
        "path": "src/App.tsx",
        "dependencyCount": 31,
        "dependentCount": 1,
        "riskLevel": "medium"
      },
      {
        "id": "file:src/pages/Menu.tsx",
        "label": "Menu.tsx",
        "path": "src/pages/Menu.tsx",
        "dependencyCount": 11,
        "dependentCount": 1,
        "riskLevel": "medium"
      },
      {
        "id": "file:src/pages/Home.tsx",
        "label": "Home.tsx",
        "path": "src/pages/Home.tsx",
        "dependencyCount": 8,
        "dependentCount": 1,
        "riskLevel": "medium"
      },
      {
        "id": "file:src/components/sections/FeaturedDishes.tsx",
        "label": "FeaturedDishes.tsx",
        "path": "src/components/sections/FeaturedDishes.tsx",
        "dependencyCount": 7,
        "dependentCount": 1,
        "riskLevel": "medium"
      },
      {
        "id": "file:src/layouts/shared/Header.tsx",
        "label": "Header.tsx",
        "path": "src/layouts/shared/Header.tsx",
        "dependencyCount": 7,
        "dependentCount": 1,
        "riskLevel": "medium"
      }
    ],
    "topNodeCalledMost": [
      {
        "id": "component:src/components/ui/Container.tsx#Container",
        "label": "Container",
        "path": "src/components/ui/Container.tsx",
        "callCount": 13
      },
      {
        "id": "component:src/components/CompatibilityPage.tsx#CompatibilityPage",
        "label": "CompatibilityPage",
        "path": "src/components/CompatibilityPage.tsx",
        "callCount": 9
      },
      {
        "id": "component:src/layouts/shared/SEOHead.tsx#SEOHead",
        "label": "SEOHead",
        "path": "src/layouts/shared/SEOHead.tsx",
        "callCount": 8
      },
      {
        "id": "function:src/utils/assets.ts#assetUrl",
        "label": "assetUrl",
        "path": "src/utils/assets.ts",
        "callCount": 6
      },
      {
        "id": "function:src/utils/format.ts#cn",
        "label": "cn",
        "path": "src/utils/format.ts",
        "callCount": 6
      }
    ],
    "reviewAreas": [
      "Read src/main.tsx -> src/App.tsx first to map the SPA bootstrap and full client route table.",
      "Read BaseLayout next because shared header, footer, floating actions, and route transitions are centralized there.",
      "Review Menu.tsx early for non-trivial client behavior: hash routing, intersection observers, and sticky navigation.",
      "Review BlogPostDetail.tsx to understand route params, content parsing, and related-story rendering.",
      "Include SEOHead.tsx, utils/schema.ts, and data/business.ts in any SEO or security review because canonical/meta/schema generation converges there.",
      "Inspect src/data/urlMigration.ts as likely dead or planned migration data because it is currently disconnected from runtime flow.",
      "Review server.ts with vercel.json/public/_headers for runtime entry, SPA rewrite behavior, and browser security headers."
    ],
    "noDatabaseAccessDetected": true
  }
};
