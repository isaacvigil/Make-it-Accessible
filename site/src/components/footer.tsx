import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t py-8 text-center text-sm text-muted-foreground">
      <p className="inline-flex items-center gap-1 flex-wrap justify-center">
        Built with <Heart className="size-3 animate-pulse fill-[#7739F3] text-[#7739F3]" aria-label="love" /> by the <Link href="/team" className="underline underline-offset-4 hover:text-foreground transition-colors">A11y Team</Link> at the{" "}
        <a
          href="https://www.intodesignsystems.com/hackathon"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          IDS Hackathon (Feb 2026)
        </a>
      </p>
    </footer>
  );
}
