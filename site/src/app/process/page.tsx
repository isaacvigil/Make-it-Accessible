import { Goal, Boxes, Keyboard, Eye, Speech, Expand, Box, Figma, Blend, ListChecks, Check, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="relative flex flex-col items-center gap-4 bg-cover bg-center px-6 pt-24 pb-24 text-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-playfair)] italic">
          Process
        </h1>
      </header>

      <div className="relative -mt-6 flex flex-1 flex-col rounded-t-3xl bg-background">
        <section className="mx-auto w-full max-w-3xl px-6 py-16">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Goal className="size-6" />
            Goal
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Enable vibe coding without having to manually describe accessibility
            rules in every prompt. Making accessibility automatic, not an
            afterthought.
          </p>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 pb-16">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Boxes className="size-6" />
            Accessibility foundation, the Fantastic 4
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The following principles catch 80% of accessibility issues in
            interfaces. By focusing on these, we can create significantly more
            accessible experiences.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-blue-500 text-white">
                  <Keyboard className="size-6" />
                </div>
                <CardTitle className="pt-2">Keyboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every interactive element must be accessible via keyboard
                  navigation. Users who cannot use a mouse rely entirely on this.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    Tab navigation through all interactive elements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    Visible focus indicators
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    Logical tab order
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500 text-white">
                  <Eye className="size-6" />
                </div>
                <CardTitle className="pt-2">Contrast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Text and UI components must meet WCAG contrast ratios to be
                  readable by users with visual impairments.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Normal text: 4.5:1 minimum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Large text: 3:1 minimum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    UI components: 3:1 minimum
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-orange-500 text-white">
                  <Speech className="size-6" />
                </div>
                <CardTitle className="pt-2">Alternative (Alt Text)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Images and visual content need descriptive alternatives for
                  screen readers.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                    Descriptive alt text for informative images
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                    Empty alt for decorative images
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                    Accessible labels for all inputs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-pink-500 text-white">
                  <Expand className="size-6" />
                </div>
                <CardTitle className="pt-2">Sizing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive elements must be large enough to tap/click easily
                  for users with motor impairments.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-500" />
                    Minimum 44×44px touch targets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-500" />
                    Adequate spacing between elements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-500" />
                    Readable text sizes (16px minimum)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 pb-16">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Blend className="size-6" />
            Testing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We tested multiple different approaches and assessed accessibility
          </p>

          <div className="mt-4 grid grid-cols-3 gap-6">
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center w-full">
                <div className="flex size-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <Speech className="size-6" />
                </div>
                <CardTitle className="pt-2 font-normal">VoiceOver screen reader testing</CardTitle>
              </CardHeader>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center w-full">
                <div className="flex size-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <Keyboard className="size-6" />
                </div>
                <CardTitle className="pt-2 font-normal">Keyboard interaction validation</CardTitle>
              </CardHeader>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center w-full">
                <div className="flex size-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <ListChecks className="size-6" />
                </div>
                <CardTitle className="pt-2 font-normal">Automated accessibility checkers</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 pb-16">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Check className="size-6" />
            Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We generated a set of rules to be used both in Cursor and Figma Make
          </p>

          <div className="mt-4 grid grid-cols-2 gap-6">
            <Link href="/?tab=cursor">
              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                    <Box className="size-6" />
                  </div>
                  <CardTitle className="pt-2">Skills for Cursor</CardTitle>
                  <CardDescription>
                    Automated accessibility integration for code generation
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/?tab=figma">
              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                    <Figma className="size-6" />
                  </div>
                  <CardTitle className="pt-2">Guidelines for Figma Make</CardTitle>
                  <CardDescription>
                    Comprehensive WCAG 2.2 AA reference for prompts
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>

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
