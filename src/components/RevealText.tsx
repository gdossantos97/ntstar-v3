"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

type RevealVariant =
  | "muted"
  | "ice"
  | "lime"
  | "label"
  | "label-lime"
  | "heading-prefix"
  | "heading-prefix-light"
  | "heading-accent"
  | "body"
  | "body-light"
  | "display"
  | "display-lime"
  | "small"
  | "label-light"
  | "midnight";

const variantStyles: Record<
  RevealVariant,
  {
    revealed: string;
    encrypted: string;
    revealDelayMs: number;
    flipDelayMs: number;
  }
> = {
  muted: {
    revealed: "text-muted-nt",
    encrypted: "text-white/20",
    revealDelayMs: 18,
    flipDelayMs: 40,
  },
  ice: {
    revealed: "text-ice",
    encrypted: "text-white/25",
    revealDelayMs: 20,
    flipDelayMs: 40,
  },
  lime: {
    revealed: "text-lime",
    encrypted: "text-lime/30",
    revealDelayMs: 25,
    flipDelayMs: 45,
  },
  label: {
    revealed: "text-muted-nt",
    encrypted: "text-white/15",
    revealDelayMs: 25,
    flipDelayMs: 45,
  },
  "label-lime": {
    revealed: "text-lime",
    encrypted: "text-lime/30",
    revealDelayMs: 25,
    flipDelayMs: 45,
  },
  "label-light": {
    revealed: "text-[#7a7b86]",
    encrypted: "text-midnight/15",
    revealDelayMs: 25,
    flipDelayMs: 45,
  },
  "heading-prefix": {
    revealed: "text-ice/80",
    encrypted: "text-white/20",
    revealDelayMs: 30,
    flipDelayMs: 45,
  },
  "heading-prefix-light": {
    revealed: "text-midnight/65",
    encrypted: "text-midnight/20",
    revealDelayMs: 30,
    flipDelayMs: 45,
  },
  "heading-accent": {
    revealed: "text-lime",
    encrypted: "text-lime/30",
    revealDelayMs: 30,
    flipDelayMs: 45,
  },
  body: {
    revealed: "text-muted-nt",
    encrypted: "text-white/20",
    revealDelayMs: 14,
    flipDelayMs: 38,
  },
  "body-light": {
    revealed: "text-[#3d3e4a]",
    encrypted: "text-midnight/20",
    revealDelayMs: 14,
    flipDelayMs: 38,
  },
  display: {
    revealed: "text-ice",
    encrypted: "text-white/25",
    revealDelayMs: 22,
    flipDelayMs: 42,
  },
  "display-lime": {
    revealed: "text-lime",
    encrypted: "text-lime/30",
    revealDelayMs: 22,
    flipDelayMs: 42,
  },
  small: {
    revealed: "text-muted-nt",
    encrypted: "text-white/15",
    revealDelayMs: 16,
    flipDelayMs: 38,
  },
  midnight: {
    revealed: "text-midnight",
    encrypted: "text-midnight/30",
    revealDelayMs: 12,
    flipDelayMs: 35,
  },
};

type RevealTextProps = {
  text: string;
  className?: string;
  variant?: RevealVariant;
  revealDelayMs?: number;
  as?: "span" | "p" | "h1" | "h2" | "h3";
};

export function RevealText({
  text,
  className,
  variant = "body",
  revealDelayMs,
  as: Tag = "span",
}: RevealTextProps) {
  const styles = variantStyles[variant];

  return (
    <Tag className={cn(className)}>
      <EncryptedText
        text={text}
        className="inline"
        revealDelayMs={revealDelayMs ?? styles.revealDelayMs}
        flipDelayMs={styles.flipDelayMs}
        revealedClassName={styles.revealed}
        encryptedClassName={styles.encrypted}
      />
    </Tag>
  );
}
