# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Authentication & Route Protection

## Current Goal

- Implement the Clerk auth flow, auth pages, and route guards described in `feature-specs/03-auth.md`.

## Completed

- **Design System & UI Primitives** (`feature-specs/01-design-system.md`): Installed and configured shadcn/ui components (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), added `lucide-react`, created `lib/utils.ts` with `cn()`, and confirmed the dark theme tokens are in place.
- **Editor Chrome & Sidebar** (`feature-specs/02-editor-chrome.md`): Added the reusable `EditorNavbar` with fixed top bar, left toggle behavior, empty right section, and dark border treatment; added the floating `ProjectSidebar` with slide-in behavior, `Projects` header, close action, empty tabs, and bottom `New Project` action; kept the dialog pattern ready for future use without building actual dialogs yet.
- **Authentication & Route Protection** (`feature-specs/03-auth.md`): Wrapped the app in `ClerkProvider` using Clerk’s `dark` theme, created sign-in and sign-up pages using Clerk components with a minimal dark two-panel layout, added the root `proxy.ts` file to protect all routes except auth pages, redirected `/` to `/editor` for signed-in users and to `/sign-in` for signed-out users, and added the built-in `UserButton` to the editor navbar for profile settings and logout.

## In Progress

- None currently — auth reference design implemented and verified (`tsc`, `next build`, browser checks on `/sign-in` and `/sign-up`).

## Next Up

- Add the next planned feature unit here.

## Open Questions

- None currently.

## Architecture Decisions

- Clerk auth is handled through `@clerk/nextjs` and `proxy.ts` for route-level protection in this Next.js 16 app, while the app-specific routing decisions remain in the App Router pages.
- Project-specific `AGENTS.md` context lives outside the managed `BEGIN/END:nextjs-agent-rules` block so `next dev` upserts do not strip it.

## Session Notes

- This milestone is scoped to the exact auth flow and route protection described in `03-auth.md`; it keeps Clerk internals intact and does not introduce custom auth or profile UX beyond the built-in `UserButton`.
- 2026-10-02 run-and-fix: repaired broken catch-all routes (`app/sign-in/[[...sign-in]]`, `app/sign-up/[[...sign-up]]` were nested as `[[...x]/]]`), renamed `ProjectSidebar` `isClose` prop to `onClose`, removed obsolete `fix_auth_route_names.py` / `repair-route.bat` workarounds and stale `tsconfig.tsbuildinfo` / `.next` cache. Verified with `npx tsc --noEmit` (clean), `npm run build` (5 routes, proxy recognized), and dev server: `/` → 307 `/sign-in`, `/editor` → 307 `/sign-in` when signed out, `/sign-in` → 200 with Clerk JS.
- 2026-10-02 auth reference design: rebuilt sign-in/sign-up around the product mock — shared `components/auth/auth-layout.tsx` (logo, "Design systems at the speed of thought.", three lucide-accompanied features, copyright footer; form-only below `lg`) plus `components/auth/auth-appearance.ts` styling Clerk internals through appearance elements only. Documented in `feature-specs/03-auth.md`.
- 2026-10-02 OAuth buttons: refined `auth-appearance.ts` social buttons to the mock — `h-12` transparent bordered buttons with centered icon+text (`socialButtonsProviderIcon h-5 w-5`), pill "Last used" badge, hairline `or` divider, matching `h-12` email input/Continue with sized arrow icon. Button labels left as Clerk defaults ("Continue with Google/GitHub").
