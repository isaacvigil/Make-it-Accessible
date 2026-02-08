"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorOpen } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Navbar() {
  const pathname = usePathname();
  const activeTab = pathname === "/process" ? "process" : pathname === "/demo" ? "demo" : "resources";

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
      <Link href="/" className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-white font-[family-name:var(--font-inter)]">
        <DoorOpen className="size-5" />
        Make it Accessible
      </Link>
      <Tabs value={activeTab}>
        <TabsList variant="line" className="bg-transparent">
          <TabsTrigger value="resources" asChild className="text-white/80 hover:text-white data-[state=active]:text-white after:bg-white">
            <Link href="/">Resources</Link>
          </TabsTrigger>
          <TabsTrigger value="process" asChild className="text-white/80 hover:text-white data-[state=active]:text-white after:bg-white">
            <Link href="/process">Process</Link>
          </TabsTrigger>
          <TabsTrigger value="demo" asChild className="text-white/80 hover:text-white data-[state=active]:text-white after:bg-white">
            <a href="https://laima-mazeikyte.github.io/Demo-Form/" target="_blank" rel="noopener noreferrer">Demo</a>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
}
