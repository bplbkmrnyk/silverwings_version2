"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 → 1) to x-translation (0 → -66.66vw for 3 cards)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-66vw"]);

  return (
    <div ref={containerRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-8 will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
