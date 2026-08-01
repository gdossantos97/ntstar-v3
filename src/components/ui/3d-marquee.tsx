"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "relative mx-auto h-[560px] w-full overflow-hidden sm:h-[620px] lg:h-[680px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-10 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]" />

      <div className="flex size-full items-center justify-center [perspective:1600px]">
        <div
          className="grid grid-cols-4 gap-5 [transform-style:preserve-3d] sm:gap-6"
          style={{
            transform:
              "translateY(8%) rotateX(52deg) rotateY(0deg) rotateZ(-42deg)",
          }}
        >
          {chunks.map((subarray, colIndex) => (
            <motion.div
              animate={{ y: colIndex % 2 === 0 ? 36 : -36 }}
              transition={{
                duration: colIndex % 2 === 0 ? 12 : 16,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              key={colIndex + "marquee"}
              className="flex flex-col gap-5 sm:gap-6"
            >
              {subarray.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex + image}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden rounded-xl ring-1 ring-white/10"
                >
                  <img
                    src={image}
                    alt="ntstar work"
                    className="aspect-[4/3] w-[148px] object-cover sm:w-[168px] md:w-[188px] lg:w-[210px]"
                    width={420}
                    height={315}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
