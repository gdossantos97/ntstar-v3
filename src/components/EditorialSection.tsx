"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function EditorialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 600, height: 700 });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const update = () => {
      setSize({
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-[80vh] overflow-hidden bg-ice text-midnight">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div
          ref={containerRef}
          className="relative min-h-[45vh] lg:min-h-[80vh]"
        >
          <PixelatedCanvas
            src="/images/editorial-hand.png"
            width={size.width}
            height={size.height}
            cellSize={4}
            dotScale={0.85}
            shape="square"
            backgroundColor="#F5F6FC"
            grayscale
            interactive
            distortionMode="swirl"
            distortionStrength={5}
            distortionRadius={100}
            dropoutStrength={0.25}
            objectFit="cover"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="relative flex min-h-[35vh] flex-col justify-center px-5 py-12 sm:px-8 lg:min-h-[80vh] lg:px-16 lg:py-16">
          <p
            className="pointer-events-none absolute right-4 bottom-0 hidden font-brand text-[10rem] leading-none text-midnight/[0.05] lg:block xl:text-[12rem]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            aria-hidden
          >
            ntstar
          </p>

          <p className="label-caps text-[#7a7b86]">Release 01</p>
          <SectionHeading
            prefix="Built with operators,"
            accent="not for procurement"
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl"
            backgroundClassName="bg-ice"
            variant="light"
            breakBeforeAccent
          />
          <p className="mt-8 max-w-lg text-base leading-relaxed text-[#3d3e4a] lg:max-w-xl">
            We started ntstar because we watched good companies get quoted $80k
            for tools their teams could have been using months ago. We build
            fast, we build loud, and we hand you the keys when we are done.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#3d3e4a] lg:max-w-xl">
            Ops tools your people actually open. No seats and no renewals.
          </p>
        </div>
      </div>
    </section>
  );
}
