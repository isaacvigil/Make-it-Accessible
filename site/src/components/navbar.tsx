import Link from "next/link";
import { DoorOpen } from "lucide-react";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
      <Link href="/" className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-white font-[family-name:var(--font-inter)]">
        <DoorOpen className="size-5" />
        Make it Accessible
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Resources
        </Link>
        <Link
          href="/process"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Process
        </Link>
      </div>
    </nav>
  );
}
