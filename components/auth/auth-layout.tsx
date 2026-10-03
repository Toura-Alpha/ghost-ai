import { FileText, Ghost, Share2, Sparkles } from "lucide-react";

interface AuthFeature {
  icon: typeof Sparkles;
  title: string;
  description: string;
}

const FEATURES: AuthFeature[] = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen bg-base text-copy-primary">
      <section className="hidden w-1/2 flex-col border-r border-border bg-surface px-12 py-8 lg:flex xl:px-16">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand">
            <Ghost className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Ghost AI
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-12">
          <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-4 max-w-md leading-7 text-copy-muted">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="mt-10 space-y-7">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-subtle">
                  <feature.icon className="h-4 w-4 text-brand" />
                </span>
                <span>
                  <span className="block font-medium">{feature.title}</span>
                  <span className="mt-1 block max-w-md text-sm leading-6 text-copy-muted">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-copy-faint">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </section>

      <section className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-border bg-surface">
          <div className="px-8 pt-8 text-center">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 text-sm text-copy-muted">{subtitle}</p>
          </div>
          <div className="px-8 py-6">{children}</div>
        </div>
      </section>
    </main>
  );
}
