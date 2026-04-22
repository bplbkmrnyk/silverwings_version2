"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollAnimationProps) {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const whileInView = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for a smooth, premium feel
      delay: delay,
    },
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
