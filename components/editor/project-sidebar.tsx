"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Project sidebar"
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-[320px] border-r border-border bg-background/95 transition-transform duration-200 ease-out backdrop-blur-sm",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className,
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        <h2 className="text-lg font-semibold text-foreground">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close project sidebar"
          className="h-8 w-8 rounded-xl text-foreground hover:bg-accent"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex h-[calc(100%-4rem)] flex-col px-3 pb-3 pt-3">
        <Tabs
          defaultValue="my-projects"
          className="flex min-h-0 flex-1 flex-col gap-3"
        >
          <TabsList className="grid w-full grid-cols-2 bg-muted p-1">
            <TabsTrigger value="my-projects" className="rounded-md">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="rounded-md">
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="my-projects"
            className="flex min-h-0 flex-1 items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
              <div className="text-sm font-medium text-foreground">
                No projects yet
              </div>
              <p className="max-w-[180px] text-xs leading-5 text-muted-foreground">
                Create your first project to get started.
              </p>
            </div>
          </TabsContent>

          <TabsContent
            value="shared"
            className="flex min-h-0 flex-1 items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
              <div className="text-sm font-medium text-foreground">
                Nothing shared
              </div>
              <p className="max-w-[180px] text-xs leading-5 text-muted-foreground">
                Shared projects will appear here.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <Button
          type="button"
          className="mt-auto h-11 w-full justify-center gap-2 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
