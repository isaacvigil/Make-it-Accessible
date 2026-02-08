"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const linkStyles =
  "relative inline-flex items-center justify-center px-2 py-1 text-sm font-medium whitespace-nowrap transition-all text-white/90 hover:text-white after:absolute after:inset-x-0 after:bottom-[-5px] after:h-0.5 after:bg-white after:opacity-0 after:transition-opacity";

const activeLinkStyles = "text-white after:opacity-100";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
      <Link href="/" className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-white font-[family-name:var(--font-inter)]">
        <DoorOpen className="size-5" />
        Make it Accessible
      </Link>
      <ul className="flex items-center gap-1" role="list">
        <li>
          <Link
            href="/"
            className={cn(linkStyles, pathname === "/" && activeLinkStyles)}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            href="/process"
            className={cn(linkStyles, pathname === "/process" && activeLinkStyles)}
            aria-current={pathname === "/process" ? "page" : undefined}
          >
            Process
          </Link>
        </li>
        <li>
          <a
            href="https://laima-mazeikyte.github.io/Demo-Form/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Demo
          </a>
        </li>
      </ul>
    </nav>
  );
}
