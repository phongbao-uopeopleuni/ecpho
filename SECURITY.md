# EC Phở — Security notes

**Updated:** 2026-10-25

**Scope:** React/Vite static website deployed on Vercel

**Status:** Current architecture; dated verification is linked below.

The website presents restaurant information, a menu and food articles. Online ordering links to DoorDash. The current application does not implement customer accounts, payment processing, a database, booking/review submissions or a Gemini API integration. Earlier versions of this document described validators and services that are absent from the current source; those claims have been removed.

## Browser protections

`vercel.json` defines the deployed response headers. `public/_headers` carries the same CSP for hosts that support that file; its presence alone does not mean a host enforces it.

- `script-src 'self'` permits same-origin JavaScript files; inline script and `eval` are not permitted.
- `script-src-attr 'none'` blocks inline event attributes such as `onclick`.
- `object-src 'none'`, `base-uri 'self'`, `form-action 'self'` and `frame-ancestors 'none'` constrain plugins, base URLs, form destinations and framing.
- Google Fonts, the existing image origins and Google Maps frames have explicit allowances. Same-origin connections support Vercel Analytics.
- Inline **styles** remain allowed for the existing animation/rendering code. This does not allow inline JavaScript.
- X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy remain configured. Vercel also supplies HSTS; inspect the live response when verifying deployment.

This is an origin allowlist CSP, not a nonce/hash-based strict CSP. It is a supplementary defense: a compromised same-origin script or hosting account can still affect the site. React text escaping does not make arbitrary HTML injection safe. Do not introduce untrusted HTML rendering, `eval`, script-bearing URLs or client-side secrets.

JSON-LD uses non-executable `application/ld+json` script elements. Verify that Restaurant, Blog and BlogPosting schemas remain present when changing the policy.

## Dependency maintenance and verification

Use the committed lockfile with `npm ci`. Review compatible security updates and run TypeScript checks, a production build, the package audit and browser checks before publishing. Test CSP using production headers: Vite development refresh code has different inline-script requirements.

The 2026-10-25 update reduced the audit from 13 affected packages to zero known findings at that time. An audit result is limited to the advisories known to the registry and is not a penetration test or a guarantee of future safety.

Local `npm run build` replaces `dist/`; preserve it or choose a separate verified output directory when needed. Stop temporary servers after testing and record changes to ignored build/cache files.

## Accounts and repository controls

The owner reports two-factor authentication enabled on GitHub and Vercel. This was not independently verified. The dependency/CSP update does not change account access, repository rules, workflow permissions or Dependabot settings. Open recommendations from the dated audit remain tracked in the reports.

## Dated evidence

- [Baseline security review](docs/security-review-2026-10-25.md)
- [Dependency and CSP remediation](docs/security-fix-2026-10-25.md)
- [Documentation index](docs/README.md)
