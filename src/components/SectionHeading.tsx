"use client";

import { CanvasText } from "@/components/ui/canvas-text";
import { cn } from "@/lib/utils";

const limeShimmerColors = ["#b8e619", "#e8ff5c", "#ffffff", "#9ed916"];

type SectionHeadingProps = {
  prefix: string;
  accent: string;
  className?: string;
  backgroundClassName?: string;
  variant?: "dark" | "light";
  breakBeforeAccent?: boolean;
};

export function SectionHeading({
  prefix,
  accent,
  className,
  backgroundClassName = "bg-midnight",
  variant = "dark",
  breakBeforeAccent = false,
}: SectionHeadingProps) {
  const styles = cn("font-display uppercase tracking-tight", className);
  const prefixColor =
    variant === "light" ? "text-midnight/65" : "text-ice/80";

  return (
    <h2 className={styles}>
      <span className={prefixColor}>{prefix}</span>
      {breakBeforeAccent ? <br /> : " "}
      <CanvasText
        text={accent}
        className={styles}
        backgroundClassName={backgroundClassName}
        fillColor="#ceff1c"
        colors={limeShimmerColors}
        animationDuration={10}
        lineWidth={1}
        lineGap={5}
        curveIntensity={12}
        lineOpacity={0.35}
      />
    </h2>
  );
}
