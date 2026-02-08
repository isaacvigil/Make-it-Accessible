"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Isaac Vigil",
    title: "Experience Design & Strategy",
    image: "/team/isaac.jpg",
    linkedin: "https://www.linkedin.com/in/isaacvigil",
  },
  {
    name: "Turgut Hatipoglu",
    title: "Product Designer",
    image: "/team/turgut.jpg",
    linkedin: "https://www.linkedin.com/in/turguthatipoglu/",
  },
  {
    name: "Kitty Huang",
    title: "UX/UI Designer · Accessibility & Inclusive Design",
    image: "/team/kitty.jpg",
    linkedin: "https://www.linkedin.com/in/kitty-huang723/",
  },
  {
    name: "Laima Mazeikyte",
    title: "Product Designer · Certified Master of UX in E-commerce",
    image: "/team/laima.jpg",
    linkedin: "https://www.linkedin.com/in/laimamazeikyte/",
  },
  {
    name: "Ingrid Morancho",
    title: "Product Designer (UX/UI) · Design Systems & Accessibility",
    image: "/team/ingrid.jpg",
    linkedin: "https://www.linkedin.com/in/ingridmorancho/",
  },
];

export default function TeamPage() {
  const shuffledTeam = useMemo(() => {
    const arr = [...team];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="relative flex flex-col items-center gap-4 bg-cover bg-center px-6 pt-24 pb-24 text-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-playfair)] italic">
          Team
        </h1>
      </header>

      <div className="relative -mt-6 flex flex-1 flex-col rounded-t-3xl bg-background">
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Users className="size-6" />
            Meet the A11y Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The people behind Make it Accessible, built during the{" "}
            <a
              href="https://www.intodesignsystems.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              IDS Hackathon (Feb 2026)
            </a>
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {shuffledTeam.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-44"
              >
                <Card className="flex flex-col overflow-hidden transition-colors group-hover:bg-muted/50 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 h-full py-0 gap-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3 flex flex-col flex-1">
                    <p className="font-semibold text-foreground text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{member.title}</p>
                    <p className="mt-auto pt-2 text-xs underline underline-offset-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      LinkedIn
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-auto w-full border-t py-8 text-center text-sm text-muted-foreground">
          <p className="inline-flex items-center gap-1">
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
      </div>
    </div>
  );
}
