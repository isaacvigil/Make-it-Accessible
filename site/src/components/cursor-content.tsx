"use client";

import { useState } from "react";
import { Check, Copy, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative">
      <pre
        className="overflow-x-auto rounded-md border bg-muted p-4 pr-12 text-sm focus:outline-2 focus:outline-ring focus:outline-offset-2"
        tabIndex={0}
        role="region"
        aria-label="Installation command"
      >
        <code>{children}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-2 -translate-y-1/2 size-8 bg-background"
        onClick={handleCopy}
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className="size-4 text-green-500" />
        ) : (
          <Copy className="size-4 text-muted-foreground" />
        )}
      </Button>
    </div>
  );
}

export function CursorContent() {
  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto w-full max-w-3xl space-y-8 px-6 py-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Accessible UI · Cursor Skill
        </h2>
        <p className="text-lg text-muted-foreground">
          A Cursor IDE skill that provides accessibility guidelines and patterns
          for building WCAG 2.2 AA compliant HTML.
        </p>
      </div>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold">What This Skill Does</h3>
        <p className="text-muted-foreground">
          When activated, this skill guides you to build accessible UI
          components with:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Semantic HTML structure</li>
          <li>Proper ARIA labels and attributes</li>
          <li>Keyboard navigation support</li>
          <li>Form accessibility patterns</li>
          <li>Color contrast guidance</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Installation</h3>

        <div className="space-y-2">
          <h4 className="font-medium">
            Option 1: Project-Level (Single Project)
          </h4>
          <p className="text-sm text-muted-foreground">
            Copy to your project&apos;s <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.cursor/skills/</code> folder:
          </p>
          <CodeBlock>
            {`git clone https://github.com/Laima-Mazeikyte/make-it-accessible-skill.git .cursor/skills/make-it-accessible`}
          </CodeBlock>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">
            Option 2: User-Level (All Projects)
          </h4>
          <p className="text-sm text-muted-foreground">
            Copy to your global Cursor skills folder:
          </p>
          <CodeBlock>
            {`git clone https://github.com/Laima-Mazeikyte/make-it-accessible-skill.git ~/.cursor/skills/make-it-accessible`}
          </CodeBlock>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Contents</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[240px]">File</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-sm">SKILL.md</TableCell>
                <TableCell>
                  Main skill file with core principles and quick reference
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">
                  references/semantic-html.md
                </TableCell>
                <TableCell>
                  Page structure, landmarks, headings
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">
                  references/forms.md
                </TableCell>
                <TableCell>
                  Inputs, textareas, radios, checkboxes, selects, buttons
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">
                  references/aria.md
                </TableCell>
                <TableCell>
                  Custom widgets, dynamic content, complex interactions
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">
                  references/keyboard.md
                </TableCell>
                <TableCell>
                  Focus management, tab order, keyboard handlers
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">
                  references/contrast.md
                </TableCell>
                <TableCell>
                  Color selection, testing, visual design
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Usage</h3>
        <p className="text-muted-foreground">
          The skill automatically activates when you ask Cursor to:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>Create accessible forms</li>
          <li>Build page layouts</li>
          <li>Implement navigation</li>
          <li>Create UI components that need accessibility support</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">License</h3>
        <p className="text-muted-foreground">MIT</p>
      </section>

      <hr className="border-border" />

      <a
        href="https://github.com/Laima-Mazeikyte/accessible-ui-skill"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github className="size-4" />
        View on GitHub
      </a>
    </article>
  );
}
