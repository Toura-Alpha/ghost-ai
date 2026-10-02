"use client";

import { Button } from "@/components/ui/button";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorNavbarProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen = false,
  onToggleSidebar,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-16 border-b border-border bg-background/95 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex h-full items-center justify-between px-4 lg:px-5">
        <div className="flex w-1/3 items-center justify-start">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={
              isSidebarOpen ? "Close project sidebar" : "Open project sidebar"
            }
            className="h-9 w-9 rounded-xl border border-border bg-card/60 text-foreground hover:bg-accent"
            onClick={onToggleSidebar}
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <div className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Workspace
          </div>
        </div>

        <div
          className="flex w-1/3 items-center justify-end"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
