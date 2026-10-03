export const authFormAppearance = {
  elements: {
    rootBox: "w-full",
    cardBox: "w-full shadow-none",
    card: "w-full border-0 bg-transparent p-0 shadow-none",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    socialButtonsBlockButton:
      "h-12 gap-3 rounded-xl border border-border bg-transparent text-copy-primary hover:bg-elevated",
    socialButtonsBlockButtonText:
      "text-sm font-medium text-copy-secondary",
    socialButtonsProviderIcon: "h-5 w-5",
    lastAuthenticationStrategyBadge:
      "rounded-full border border-border bg-subtle px-2.5 py-0.5 text-[11px] font-medium text-copy-muted",
    dividerRow: "my-1",
    dividerLine: "h-px bg-border",
    dividerText: "px-3 text-xs text-copy-faint",
    formFieldLabel: "text-sm font-medium text-copy-primary",
    formFieldInput:
      "h-12 rounded-xl border-border bg-subtle text-copy-primary placeholder:text-copy-faint",
    formButtonPrimary:
      "h-12 rounded-xl bg-primary text-sm font-semibold text-primary-foreground hover:opacity-90",
    buttonArrowIcon: "h-4 w-4",
    footerAction: "text-sm text-copy-muted",
    footerActionLink: "font-medium text-brand hover:underline",
    identityPreviewText: "text-copy-primary",
    identityPreviewEditButtonIcon: "text-copy-muted",
  },
} as const;
