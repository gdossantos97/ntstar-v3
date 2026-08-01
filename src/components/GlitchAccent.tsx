"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const matrixCharset =
  "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ";

function scrambleText(value: string) {
  return value
    .split("")
    .map((char) =>
      char === " "
        ? " "
        : matrixCharset[Math.floor(Math.random() * matrixCharset.length)],
    )
    .join("");
}

type GlitchAccentProps = {
  text: string;
  children: React.ReactNode;
  className?: string;
};

export function GlitchAccent({ text, children, className }: GlitchAccentProps) {
  const [active, setActive] = useState(false);
  const [matrixText, setMatrixText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearGlitch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setMatrixText(text);
    setActive(false);
  };

  const handleMouseEnter = () => {
    setActive(true);
    let ticks = 0;

    intervalRef.current = setInterval(() => {
      ticks += 1;
      setMatrixText(scrambleText(text));

      if (ticks >= 10) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setMatrixText(text);
      }
    }, 45);
  };

  useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    [],
  );

  return (
    <span
      className={cn(
        "glitch-accent group relative inline-block max-w-full cursor-default overflow-hidden",
        active && "is-active",
        className,
      )}
      data-text={text}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={clearGlitch}
    >
      <span
        className={cn(
          "relative z-[2] inline-block transition-opacity duration-75",
          active && "opacity-0",
        )}
      >
        {children}
      </span>

      <span
        className={cn(
          "glitch-accent__matrix pointer-events-none absolute inset-0 z-[3] text-lime opacity-0",
          active && "opacity-100",
        )}
        aria-hidden
      >
        {matrixText}
      </span>

      <span className="glitch-accent__slice glitch-accent__slice--a" aria-hidden>
        {text}
      </span>
      <span className="glitch-accent__slice glitch-accent__slice--b" aria-hidden>
        {text}
      </span>
    </span>
  );
}
