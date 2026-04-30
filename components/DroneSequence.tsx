"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

export default function DroneSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const frameCount = 226;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits: 001, 002, etc.
      const numStr = i.toString().padStart(3, "0");
      img.src = `/images/droneSequence-jpg/droneAssemble-jpg/ezgif-frame-${numStr}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndexRaw = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);
  const frameIndex = useSpring(frameIndexRaw, { damping: 50, stiffness: 200, restDelta: 0.001 });

  // Text that appears after assembly
  const postAssemblyOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const postAssemblyY = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      const img = images[Math.round(index)];
      if (img) {
        // Only set canvas dimensions once or if they change to avoid flickering
        if (canvas.width !== img.width || canvas.height !== img.height) {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // Render initial frame
    render(0);

    // Subscribe to frame changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    return () => unsubscribe();
  }, [imagesLoaded, images, frameIndex]);

  return (
    <section ref={containerRef} className="relative h-[800vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
            <span className="text-[#a3d900] font-mono text-sm tracking-widest uppercase animate-pulse">
              Loading Sequence...
            </span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradients to blend smoothly into adjacent sections */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent to-[#050505] pointer-events-none z-10" />
        
        {/* Attractive HUD overlay elements */}
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          <svg viewBox="0 0 800 800" className="w-full h-full max-w-[1200px] opacity-20">
            {/* Concentric dashed rings */}
            <circle cx="400" cy="400" r="300" fill="none" stroke="#a3d900" strokeWidth="1" strokeDasharray="4 12" className="animate-[spin_60s_linear_infinite]" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="#a3d900" strokeWidth="0.5" strokeDasharray="2 6" className="animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* Target reticle lines */}
            <line x1="400" y1="50" x2="400" y2="150" stroke="#a3d900" strokeWidth="1" opacity="0.5" />
            <line x1="400" y1="650" x2="400" y2="750" stroke="#a3d900" strokeWidth="1" opacity="0.5" />
            <line x1="50" y1="400" x2="150" y2="400" stroke="#a3d900" strokeWidth="1" opacity="0.5" />
            <line x1="650" y1="400" x2="750" y2="400" stroke="#a3d900" strokeWidth="1" opacity="0.5" />
            
            {/* Corner brackets */}
            <path d="M 150 150 L 100 150 L 100 200" fill="none" stroke="#a3d900" strokeWidth="2" opacity="0.5" />
            <path d="M 650 150 L 700 150 L 700 200" fill="none" stroke="#a3d900" strokeWidth="2" opacity="0.5" />
            <path d="M 150 650 L 100 650 L 100 600" fill="none" stroke="#a3d900" strokeWidth="2" opacity="0.5" />
            <path d="M 650 650 L 700 650 L 700 600" fill="none" stroke="#a3d900" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>

        {/* Textual overlay at top left */}
        <div className="absolute top-10 left-6 md:left-10 z-30 pointer-events-none">
          <span className="text-[10px] text-tertiary font-mono tracking-widest mb-2 block text-[#a3d900]">
            SYS.SEQ.INIT
          </span>
          <h3 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase opacity-80 mix-blend-overlay drop-shadow-md">
            Tactical Overview
          </h3>
        </div>
        
        {/* Data points HUD */}
        <div className="absolute bottom-10 right-6 md:right-10 z-30 pointer-events-none text-right hidden md:block">
          <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-[#a3d900] opacity-60">
            <div className="flex justify-between gap-8 border-b border-[#a3d900]/30 pb-1">
              <span>SCAN</span> <span>ACTIVE</span>
            </div>
            <div className="flex justify-between gap-8 border-b border-[#a3d900]/30 pb-1">
              <span>ASSEMBLY</span> <span>OPTIMAL</span>
            </div>
            <div className="flex justify-between gap-8">
              <span>LATENCY</span> <span>0.02ms</span>
            </div>
          </div>
        </div>

        {/* Post-assembly Data Block */}
        <motion.div 
          style={{ opacity: postAssemblyOpacity, y: postAssemblyY }}
          className="absolute top-1/2 -translate-y-1/2 right-6 md:right-20 w-72 md:w-80 z-30 pointer-events-none"
        >
          <div className="bg-[#050505]/80 backdrop-blur-md border border-[#a3d900]/30 p-6 shadow-[0_0_30px_rgba(163,217,0,0.15)] relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#a3d900]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#a3d900]" />
            
            <h4 className="text-[#a3d900] font-mono text-sm tracking-widest mb-4 border-b border-[#a3d900]/30 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a3d900] rounded-full animate-pulse" />
              SYSTEM CONFIGURED
            </h4>
            <p className="text-gray-300 font-body text-sm leading-relaxed mb-4">
              All tactical components have been seamlessly integrated. Propulsion, avionics, and ordnance systems are online and fully operational for immediate deployment.
            </p>
            <ul className="text-gray-400 font-mono text-xs space-y-2">
              <li className="flex justify-between border-b border-gray-800 pb-1"><span>POWER:</span> <span className="text-white">100%</span></li>
              <li className="flex justify-between border-b border-gray-800 pb-1"><span>UPLINK:</span> <span className="text-white">SECURE (AES-256)</span></li>
              <li className="flex justify-between"><span>WEAPONS:</span> <span className="text-[#ff3333] animate-pulse">HOT</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
