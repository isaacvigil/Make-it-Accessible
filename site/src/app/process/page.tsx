import { Goal, Route, Boxes, Keyboard, Eye, Speech, Expand, Box, Figma } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="relative flex flex-col items-center gap-4 bg-cover bg-center px-6 pt-24 pb-24 text-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
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

          <div className="mt-12 grid grid-cols-2 gap-6">
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
            <Route className="size-6" />
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We tested multiple ways to achieve this goal, focusing on
            benchmarking and validating different approaches.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">
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
          </div>
        </section>
      </div>
    </div>
  );
}
