"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function SiteStarfield() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <StarsBackground starDensity={0.00012} allStarsTwinkle />
      <ShootingStars
        minSpeed={12}
        maxSpeed={28}
        minDelay={2000}
        maxDelay={5000}
        starColor="#ceff1c"
        trailColor="#3748bf"
      />
    </div>
  );
}
