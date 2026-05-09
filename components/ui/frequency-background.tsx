"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FrequencyBackground = React.memo(
  ({ className }: { className?: string }) => {
    
    // Abstract, intersecting curves that look like dynamic communication vectors
    const paths = useMemo(() => [
      "M-100 500 C 200 100, 800 900, 1100 500",
      "M-100 500 C 200 900, 800 100, 1100 500",
      "M-100 200 C 400 800, 600 200, 1100 800",
      "M-100 800 C 400 200, 600 800, 1100 200",
      "M-100 400 Q 500 100, 1100 600",
      "M-100 600 Q 500 900, 1100 400",
      "M 200 -100 C 300 400, 700 600, 800 1100",
      "M 800 -100 C 700 400, 300 600, 200 1100",
    ], []);

    // Generate floating heavenly data stars
    const stars = useMemo(() => {
      return Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }));
    }, []);

    return (
      <div
        className={cn(
          "fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none flex items-center justify-center",
          className
        )}
      >
        <svg
          className="absolute z-0 h-full w-full opacity-90"
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Intense Heavenly Glow Filter */}
            <filter id="heavenly-bloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur1" />
              <feGaussianBlur stdDeviation="4" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            <linearGradient id="vector-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="vector-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#18CCFC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Heavenly Floating Stars */}
          <g filter="url(#heavenly-bloom)">
            {stars.map((star) => (
              <motion.circle
                key={`star-${star.id}`}
                cx={star.x}
                cy={star.y}
                r={star.size}
                fill="#ffffff"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                  cy: [star.y, star.y - 50],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>

          {/* Dynamic Frequency Vectors with Bloom */}
          <g filter="url(#heavenly-bloom)">
            {/* Primary energetic flowing paths */}
            {paths.map((path, i) => (
              <motion.path
                key={`flow-${i}`}
                d={path}
                stroke={i % 2 === 0 ? "url(#vector-grad-1)" : "url(#vector-grad-2)"}
                strokeWidth={i % 3 === 0 ? "3" : "1.5"}
                strokeOpacity="0.8"
                strokeDasharray="200 400"
                initial={{ strokeDashoffset: 1200 }}
                animate={{ 
                  strokeDashoffset: [1200, 0] // Lively data flow
                }}
                transition={{
                  duration: 8 + (i % 4) * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Reverse flowing faint secondary paths for complex network feeling */}
            {paths.map((path, i) => (
              <motion.path
                key={`flow-rev-${i}`}
                d={path}
                stroke={i % 2 === 0 ? "url(#vector-grad-2)" : "url(#vector-grad-1)"}
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="50 800"
                initial={{ strokeDashoffset: -1200 }}
                animate={{ 
                  strokeDashoffset: [-1200, 0] 
                }}
                transition={{
                  duration: 6 + (i % 3) * 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </g>
        </svg>

        {/* Ethereal heavenly core overlay behind the forms */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[50vh] bg-[#18CCFC]/15 blur-[120px] rounded-[100%] pointer-events-none" />

        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_85%)] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>
    );
  }
);
FrequencyBackground.displayName = "FrequencyBackground";
