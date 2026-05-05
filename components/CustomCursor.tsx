"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Get the closest clickable element
      const clickable = target?.closest("a, button, [role='button'], input, select, textarea");
      
      if (clickable) {
        setHoveredElement(clickable as HTMLElement);
      } else {
        setHoveredElement(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Use capture phase for some cases where propagation is stopped
    window.addEventListener("mouseover", handleMouseMove, true);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseMove, true);
    };
  }, []);

  if (!isClient) return null;

  const isHovering = hoveredElement !== null;
  let cursorProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    opacity: 0,
  };

  if (isHovering && hoveredElement) {
    const rect = hoveredElement.getBoundingClientRect();
    cursorProps = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      opacity: 1,
    };
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={cursorProps}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30, 
        mass: 0.5 
      }}
    >
      <div className={`absolute -inset-2 border border-primary/20 bg-primary/10 transition-all duration-300 mix-blend-screen backdrop-blur-[2px] ${isHovering ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}>
        {/* Tactical Corner Brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary"></div>
        
        {/* Lock indicator */}
        <div className="absolute -top-6 right-0 font-mono text-[10px] text-primary tracking-widest animate-pulse">
          SYS.LOCKED
        </div>
      </div>
    </motion.div>
  );
}
