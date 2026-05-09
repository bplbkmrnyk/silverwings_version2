"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Get the closest clickable element
      const clickable = target?.closest("a, button, [role='button'], input, select, textarea");
      
      if (clickable) {
        setHoveredElement(clickable as HTMLElement);
      } else {
        setHoveredElement(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, true);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove, true);
    };
  }, []);

  if (!isClient) return null;

  const isHovering = hoveredElement !== null;
  
  // Default: Small 32x32 box centered on mouse
  let cursorProps = {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
    width: 32,
    height: 32,
  };

  if (isHovering && hoveredElement) {
    const rect = hoveredElement.getBoundingClientRect();
    // Expand box slightly around the element (simulating padding)
    cursorProps = {
      x: rect.left - 8,
      y: rect.top - 8,
      width: rect.width + 16,
      height: rect.height + 16,
    };
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={cursorProps}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 28, 
        mass: 0.2 
      }}
    >
      <div className={cn(
        "absolute inset-0 transition-colors duration-300 mix-blend-screen backdrop-blur-[2px]",
        isHovering ? "border border-[#eac349]/20 bg-[#eac349]/10" : "bg-transparent"
      )}>
        
        {/* State 1: Crosshair (Not Hovering) */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
          isHovering ? "opacity-0" : "opacity-100"
        )}>
          {/* Tactical + Crosshair */}
          <div className="w-4 h-px bg-[#eac349]/80 absolute"></div>
          <div className="h-4 w-px bg-[#eac349]/80 absolute"></div>
          <div className="w-1 h-1 border border-[#eac349] absolute rounded-none"></div>
        </div>

        {/* State 2: Locked Box (Hovering) */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}>
          {/* Tactical Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#eac349]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#eac349]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#eac349]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#eac349]"></div>
          
          {/* Lock indicator */}
          <div className="absolute -top-6 right-0 font-mono text-[10px] text-[#eac349] tracking-widest animate-pulse">
            SYS.LOCKED
          </div>
        </div>
      </div>
    </motion.div>
  );
}
