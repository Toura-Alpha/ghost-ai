Clerk is already installed and connected. Wire it into the Next.js app: provider, auth pages, redirects, route protection, and user menu.

## Design

Use Clerk’s `dark` theme from `@clerk/ui/themes` as the base.

Override Clerk appearance variables using the app’s existing CSS variables. Do not hardcode colors.

Sign-in and sign-up pages (reference: product mock, dark only):

- large screens: two-panel layout, left marketing panel / right centered Clerk form card
- left: Ghost logo mark (cyan rounded square) + "Ghost AI", headline "Design systems at the speed of thought.", supporting paragraph, three icon-accompanied features (AI Architecture Generation, Real-time Collaboration, Instant Spec Generation), copyright footer
- right: `rounded-3xl` surface card with page title, subtitle, and Clerk form styled through appearance elements (dark social buttons, subtle email input, cyan Continue button); keep Clerk's default footer, "Secured by Clerk" badge, and dev badge intact
- small screens: form only (marketing panel hidden below `lg`)
- no gradients
- no oversized hero sections
- no feature cards
- no scroll-heavy layouts

Keep the layout minimal and professional.

## Implementation

Wrap the root layout with `ClerkProvider` using Clerk’s `dark` theme.

Create sign-in and sign-up pages using Clerk components.

Use `proxy.ts` at the project root, not `middleware.ts`.

Define public routes using the existing sign-in and sign-up env vars. Protect everything else by default.

Update `/`:

- authenticated users redirect to `/editor`
- unauthenticated users redirect to `/sign-in`

Add Clerk’s built-in `UserButton` to the editor navbar right section for profile settings and logout.

Keep Clerk’s default user menu and profile flows intact. Do not rebuild or heavily customize Clerk internals.

Use existing Clerk env vars. Do not rename or invent new ones.

## Dependencies

install: @clerk/ui.

## Check When Done

- `proxy.ts` exists at the root
- all routes are protected except public auth paths
- auth pages use CSS variables with no hardcoded colors
- `ClerkProvider` wraps the root layout
- `npm run build` passes
