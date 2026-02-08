"use client";

import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, Figma, Heart } from "lucide-react";
import { CursorContent } from "@/components/cursor-content";
import { FigmaContent } from "@/components/figma-content";
import { useSearchParams } from "next/navigation";

function HomeContent() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") === "figma" ? "figma" : "cursor";
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="relative flex flex-col items-center gap-4 bg-cover bg-center px-6 pt-24 pb-24 text-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 max-w-md text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-playfair)] italic">
          Make your vibe code more accessible
        </h1>
        <p className="relative z-10 max-w-md text-lg text-white/80">
          Make accessible websites when vibecoding without having to explicitly
          describe accessibility rules in the prompt
        </p>
      </header>

      <div className="relative -mt-6 flex flex-1 flex-col items-center rounded-t-3xl bg-background">
        <Tabs defaultValue={defaultTab} key={defaultTab} className="w-full max-w-3xl px-6 pt-6">
          <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2">
            <TabsTrigger value="cursor">
              <Box className="size-4" />
              For Cursor
            </TabsTrigger>
            <TabsTrigger value="figma">
              <Figma className="size-4" />
              For Figma Make
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cursor">
            <CursorContent />
          </TabsContent>

          <TabsContent value="figma">
            <FigmaContent />
          </TabsContent>
        </Tabs>

        <footer className="mt-auto w-full border-t py-8 text-center text-sm text-muted-foreground">
          <p className="inline-flex items-center gap-1">
            Built with <Heart className="size-4 fill-red-500 text-red-500" aria-label="love" /> by the A11y Team at the{" "}
            <a
              href="https://www.intodesignsystems.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              IDS Hackathon
            </a>{" "}
            · Feb 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
