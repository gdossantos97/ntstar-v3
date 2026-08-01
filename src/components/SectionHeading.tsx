"use client";

import { GlitchAccent } from "@/components/GlitchAccent";
import { RevealText } from "@/components/RevealText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  prefix: string;
  accent: string;
  className?: string;
  variant?: "dark" | "light";
  breakBeforeAccent?: boolean;
};

export function SectionHeading({
  prefix,
  accent,
  className,
  variant = "dark",
  breakBeforeAccent = false,
}: SectionHeadingProps) {
  const styles = cn("font-display uppercase tracking-tight", className);
  const prefixVariant =
    variant === "light" ? "heading-prefix-light" : "heading-prefix";

  return (
    <h2 className={styles}>
      <RevealText text={prefix} variant={prefixVariant} className="inline" />
      {breakBeforeAccent ? <br /> : " "}
      <GlitchAccent text={accent} className="inline">
        <RevealText text={accent} variant="heading-accent" className="inline" />
      </GlitchAccent>
    </h2>
  );
}
