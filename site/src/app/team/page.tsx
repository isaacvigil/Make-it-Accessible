"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Isaac Vigil",
    title: "Experience Design & Strategy",
    image: "/team/isaac.jpg",
    linkedin: "https://www.linkedin.com/in/isaacvigil",
    portfolio: "https://www.isaacvigil.com/",
  },
  {
    name: "Turgut Hatipoglu",
    title: "Product Designer",
    image: "/team/turgut.jpg",
    linkedin: "https://www.linkedin.com/in/turguthatipoglu/",
    portfolio: "https://www.hatipa.com/",
  },
  {
    name: "Kitty Huang",
    title: "UX/UI Designer · Accessibility & Inclusive Design",
    image: "/team/kitty.jpg",
    linkedin: "https://www.linkedin.com/in/kitty-huang723/",
    portfolio: "https://kittydesign.myportfolio.com/",
  },
  {
    name: "Laima Mazeikyte",
    title: "Product Designer · Certified Master of UX in E-commerce",
    image: "/team/laima.jpg",
    linkedin: "https://www.linkedin.com/in/laimamazeikyte/",
    portfolio: "https://laima.design/",
  },
  {
    name: "Ingrid Morancho",
    title: "Product Designer (UX/UI) · Design Systems & Accessibility",
    image: "/team/ingrid.jpg",
    linkedin: "https://www.linkedin.com/in/ingridmorancho/",
    portfolio: "https://ingridmorancho.framer.website/",
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

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {shuffledTeam.map((member) => (
              <Card key={member.name} className="flex flex-col overflow-hidden py-0 gap-0 h-full">
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
                  <div className="mt-auto pt-2 flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Globe className="size-3" />
                      Portfolio
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
