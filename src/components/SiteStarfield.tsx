"use client";

import { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function SiteStarfield() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate [transform:translateZ(0)] [backface-visibility:hidden]"
      aria-hidden
    >
      <StarsBackground
        starDensity={isMobile ? 0.00009 : 0.00012}
        allStarsTwinkle={!isMobile}
      />
      {!isMobile && (
        <ShootingStars
          minSpeed={12}
          maxSpeed={28}
          minDelay={2000}
          maxDelay={5000}
          starColor="#ceff1c"
          trailColor="#3748bf"
        />
      )}
    </div>
  );
}
