"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorOpen, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const linkStyles =
  "relative inline-flex items-center justify-center py-1 text-base font-medium whitespace-nowrap transition-all text-white/90 hover:text-white after:absolute after:inset-x-0 after:bottom-[-5px] after:h-0.5 after:bg-white after:opacity-0 after:transition-opacity";

const activeLinkStyles = "text-white after:opacity-100";

const mobileLinkStyles =
  "block px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors";

const mobileActiveLinkStyles = "text-white bg-white/10";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex flex-wrap items-center justify-between px-6 py-4">
      <Link href="/" className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-white font-[family-name:var(--font-inter)]">
        <DoorOpen className="size-5" />
        Make it Accessible
      </Link>

      {/* Hamburger button — visible on mobile only */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded p-2 text-white md:hidden"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Desktop links */}
      <ul className="hidden items-center gap-4 md:flex" role="list">
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
          <Link
            href="/team"
            className={cn(linkStyles, pathname === "/team" && activeLinkStyles)}
            aria-current={pathname === "/team" ? "page" : undefined}
          >
            Team
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

      {/* Mobile menu */}
      {menuOpen && (
        <ul
          id="nav-menu"
          className="mt-2 w-full rounded-lg bg-[#5524B5]/70 backdrop-blur-md py-2 md:hidden"
          role="list"
        >
          <li>
            <Link
              href="/"
              className={cn(mobileLinkStyles, pathname === "/" && mobileActiveLinkStyles)}
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/process"
              className={cn(mobileLinkStyles, pathname === "/process" && mobileActiveLinkStyles)}
              aria-current={pathname === "/process" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className={cn(mobileLinkStyles, pathname === "/team" && mobileActiveLinkStyles)}
              aria-current={pathname === "/team" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>
          </li>
          <li>
            <a
              href="https://laima-mazeikyte.github.io/Demo-Form/"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileLinkStyles}
              onClick={() => setMenuOpen(false)}
            >
              Demo
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
