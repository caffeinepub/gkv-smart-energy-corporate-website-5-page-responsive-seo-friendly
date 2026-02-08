# Specification

## Summary
**Goal:** Fix the current deployment/build failure so the website can be successfully published, and document the exact deploy steps.

**Planned changes:**
- Investigate and resolve the production build/deploy errors (TypeScript/bundler and/or Motoko compile issues) so the app builds and deploys without failures.
- Add an English, project-local publish/deploy guide with prerequisites, exact commands, and a verification checklist.
- Ensure production deployment correctly serves static assets so the site header/footer render without broken images and key routes load reliably.

**User-visible outcome:** The site can be built and deployed successfully to a live URL, with working navigation for /, /about, /services, /projects, /contact, /calculator, /subsidies, and /how-it-works, and no broken header/footer assets in production.
