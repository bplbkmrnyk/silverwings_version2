"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const rows = [
  {
    id: "01",
    title: (
      <>
        Stage 1: <br /> Core & Propulsion
      </>
    ),
    description:
      "Deploying the central aerodynamic chassis and primary thrust engine. Housing main avionics, encrypted datalinks, and tactical payload compartments.",
  },
  {
    id: "02",
    title: (
      <>
        Stage 2: <br /> Wings & Optics
      </>
    ),
    description:
      "Attaching high-lift swept wings with radar-absorbent hex carbon fiber. Nose cone optical sensor array locks into the forward chassis.",
  },
  {
    id: "03",
    title: (
      <>
        Stage 3: <br /> Ordnance & Flaps
      </>
    ),
    description:
      "Locking independent ailerons, V-tail stabilizers, and loading twin AGM-114 stealth munitions onto the under-wing hardpoints.",
  },
];

// Highly precise SVG Paths for the 10-piece Swept-Wing Drone
const PATHS = {

  FUSELAGE: "M 200 60 Q 220 80, 225 150 L 230 260 Q 200 290, 170 260 L 175 150 Q 180 80, 200 60 Z",
  ENGINE: "M 180 255 L 220 255 L 215 310 L 185 310 Z",
  LEFT_WING: "M 175 150 L 165 250 L 20 310 L 50 180 Z",
  LEFT_FLAP: "M 155 255 L 40 305 L 45 320 L 155 275 Z",
  RIGHT_WING: "M 225 150 L 235 250 L 380 310 L 350 180 Z",
  RIGHT_FLAP: "M 245 255 L 360 305 L 355 320 L 245 275 Z",
  LEFT_TAIL: "M 185 290 L 170 360 L 110 390 L 130 320 Z",
  RIGHT_TAIL: "M 215 290 L 230 360 L 290 390 L 270 320 Z",
  LEFT_MISSILE: "M 95 240 L 105 240 L 105 290 L 100 300 L 95 290 Z",
  RIGHT_MISSILE: "M 295 240 L 305 240 L 305 290 L 300 300 L 295 290 Z",
};

export default function DroneAssemblySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Keep the drone alive with a tiny 2D float, absolutely NO zooming.
  const globalRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  // ─── 10-PART PHYSICAL ASSEMBLY TRANSFORMS ───

  // STAGE 1: Fuselage & Engine
  const fuseY = useTransform(scrollYProgress, [0, 0.25], [-800, 0]);
  const engineY = useTransform(scrollYProgress, [0.05, 0.3], [800, 0]);

  // STAGE 2: Wings & Nose
  const noseY = useTransform(scrollYProgress, [0.25, 0.5], [-800, 0]);
  const lWingX = useTransform(scrollYProgress, [0.3, 0.55], [-800, 0]);
  const rWingX = useTransform(scrollYProgress, [0.3, 0.55], [800, 0]);

  // STAGE 3: Flaps, Missiles, & Tails
  const lFlapX = useTransform(scrollYProgress, [0.55, 0.8], [-800, 0]);
  const lFlapY = useTransform(scrollYProgress, [0.55, 0.8], [400, 0]);
  const rFlapX = useTransform(scrollYProgress, [0.55, 0.8], [800, 0]);
  const rFlapY = useTransform(scrollYProgress, [0.55, 0.8], [400, 0]);

  const missileY = useTransform(scrollYProgress, [0.6, 0.85], [800, 0]);
  const tailY = useTransform(scrollYProgress, [0.65, 0.85], [800, 0]);

  // Lock Flash
  const lockFlashOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 0.8, 0]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[#050505]">
      {/* STICKY CENTER DISPLAY */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        <motion.div
          style={{ rotate: globalRotate }}
          className="relative w-[600px] h-[600px] flex items-center justify-center"
        >
          {/* Main SVG Container */}
          <svg viewBox="0 0 400 400" className="w-[500px] h-[500px] overflow-visible">
            <defs>
              {/* Tactical Hex Pattern */}
              <pattern id="hex" width="8" height="14" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                <path d="M 4 0 L 8 4 L 8 10 L 4 14 L 0 10 L 0 4 Z" fill="none" stroke="#222" strokeWidth="1" />
              </pattern>

              {/* Ultra-realistic Metallic Gradients */}
              <linearGradient id="fuseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="25%" stopColor="#222" />
                <stop offset="50%" stopColor="#3a3a3a" />
                <stop offset="75%" stopColor="#222" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="wingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#222" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="missileGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000" />
                <stop offset="50%" stopColor="#555" />
                <stop offset="100%" stopColor="#000" />
              </linearGradient>
              <radialGradient id="exhaustGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a3d900" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#a3d900" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a3d900" stopOpacity="0" />
              </radialGradient>

              {/* Depth Filters */}
              <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="25" stdDeviation="15" floodColor="#000" floodOpacity="0.8" />
              </filter>
              <filter id="partShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="5" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* BASE HUD RINGS (Always visible) */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="#a3d900" strokeWidth="1" strokeDasharray="2 12" opacity="0.15" className="animate-[spin_60s_linear_infinite]" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#a3d900" strokeWidth="1" strokeDasharray="40 20" opacity="0.1" className="animate-[spin_30s_linear_infinite_reverse]" />

            {/* ======================================= */}
            {/* STAGE 3 PARTS (Bottom layer rendering) */}
            {/* ======================================= */}

            {/* TAIL SECTION */}
            <motion.g style={{ y: tailY }} filter="url(#dropShadow)">
              <path d={PATHS.LEFT_TAIL} fill="#111" stroke="#333" strokeWidth="1.5" />
              <path d={PATHS.LEFT_TAIL} fill="url(#hex)" opacity="0.4" />
              <path d={PATHS.RIGHT_TAIL} fill="#111" stroke="#333" strokeWidth="1.5" />
              <path d={PATHS.RIGHT_TAIL} fill="url(#hex)" opacity="0.4" />

              {/* Tail Details */}
              <line x1="185" y1="290" x2="130" y2="320" stroke="#000" strokeWidth="2" />
              <line x1="215" y1="290" x2="270" y2="320" stroke="#000" strokeWidth="2" />
            </motion.g>

            {/* FLAPS */}
            <motion.g style={{ x: lFlapX, y: lFlapY }} filter="url(#partShadow)">
              <path d={PATHS.LEFT_FLAP} fill="#050505" stroke="#222" strokeWidth="1.5" />
              <line x1="140" y1="265" x2="50" y2="310" stroke="#ff3333" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
            </motion.g>
            <motion.g style={{ x: rFlapX, y: rFlapY }} filter="url(#partShadow)">
              <path d={PATHS.RIGHT_FLAP} fill="#050505" stroke="#222" strokeWidth="1.5" />
              <line x1="260" y1="265" x2="350" y2="310" stroke="#ff3333" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
            </motion.g>

            {/* MISSILES */}
            <motion.g style={{ y: missileY }} filter="url(#partShadow)">
              <path d={PATHS.LEFT_MISSILE} fill="url(#missileGrad)" />
              <polygon points="95,240 105,240 100,230" fill="#ff3333" />
              <text x="100" y="260" fill="#a3d900" fontSize="5" fontWeight="bold" transform="rotate(-90 100 260)">AGM-114</text>

              <path d={PATHS.RIGHT_MISSILE} fill="url(#missileGrad)" />
              <polygon points="295,240 305,240 300,230" fill="#ff3333" />
              <text x="300" y="260" fill="#a3d900" fontSize="5" fontWeight="bold" transform="rotate(-90 300 260)">AGM-114</text>
            </motion.g>

            {/* ======================================= */}
            {/* STAGE 2 PARTS */}
            {/* ======================================= */}

            {/* LEFT WING */}
            <motion.g style={{ x: lWingX }} filter="url(#dropShadow)">
              <path d={PATHS.LEFT_WING} fill="url(#wingGrad)" />
              <path d={PATHS.LEFT_WING} fill="url(#hex)" opacity="0.4" />
              <path d={PATHS.LEFT_WING} fill="none" stroke="#444" strokeWidth="1.5" />
              {/* Decals & Lines */}
              <text x="80" y="230" fill="#333" fontSize="14" fontWeight="bold" fontFamily="monospace" transform="rotate(-30 80 230)">SWD-9</text>
              <circle cx="100" cy="220" r="12" fill="none" stroke="#ff3333" strokeWidth="1" opacity="0.6" />
              <circle cx="100" cy="220" r="3" fill="#ff3333" opacity="0.6" />
              <line x1="170" y1="180" x2="60" y2="230" stroke="#000" strokeWidth="2" opacity="0.4" />
            </motion.g>

            {/* RIGHT WING */}
            <motion.g style={{ x: rWingX }} filter="url(#dropShadow)">
              <path d={PATHS.RIGHT_WING} fill="url(#wingGrad)" />
              <path d={PATHS.RIGHT_WING} fill="url(#hex)" opacity="0.4" />
              <path d={PATHS.RIGHT_WING} fill="none" stroke="#444" strokeWidth="1.5" />
              {/* Decals & Lines */}
              <text x="320" y="230" fill="#333" fontSize="14" fontWeight="bold" fontFamily="monospace" transform="rotate(30 320 230)">SWD-9</text>
              <circle cx="300" cy="220" r="12" fill="none" stroke="#ff3333" strokeWidth="1" opacity="0.6" />
              <circle cx="300" cy="220" r="3" fill="#ff3333" opacity="0.6" />
              <line x1="230" y1="180" x2="340" y2="230" stroke="#000" strokeWidth="2" opacity="0.4" />
            </motion.g>

            {/* NOSE CONE */}
            <motion.g style={{ y: noseY }} filter="url(#partShadow)">
              <circle cx="200" cy="40" r="5" fill="#000" />
              <circle cx="200" cy="40" r="3" fill="#a3d900" className="animate-pulse" />
              <circle cx="200" cy="40" r="10" fill="none" stroke="#a3d900" opacity="0.5" strokeDasharray="2 2" className="animate-[spin_5s_linear_infinite]" />
            </motion.g>

            {/* ======================================= */}
            {/* STAGE 1 PARTS (Top layer rendering) */}
            {/* ======================================= */}

            {/* ENGINE CORE */}
            <motion.g style={{ y: engineY }} filter="url(#partShadow)">
              <path d={PATHS.ENGINE} fill="#111" stroke="#222" />
              {/* Engine Ribs */}
              <line x1="185" y1="265" x2="215" y2="265" stroke="#333" strokeWidth="2" />
              <line x1="185" y1="275" x2="215" y2="275" stroke="#333" strokeWidth="2" />
              <line x1="185" y1="285" x2="215" y2="285" stroke="#333" strokeWidth="2" />
              <line x1="185" y1="295" x2="215" y2="295" stroke="#333" strokeWidth="2" />
              <line x1="185" y1="305" x2="215" y2="305" stroke="#333" strokeWidth="2" />
              {/* Thruster Exhaust */}
              <ellipse cx="200" cy="310" rx="14" ry="5" fill="#000" stroke="#444" strokeWidth="1" />
              {/* Active Burn Glow */}
              <circle cx="200" cy="320" r="25" fill="url(#exhaustGlow)" />
            </motion.g>

            {/* FUSELAGE */}
            <motion.g style={{ y: fuseY }} filter="url(#dropShadow)">
              <path d={PATHS.FUSELAGE} fill="url(#fuseGrad)" />
              <path d={PATHS.FUSELAGE} fill="none" stroke="#555" strokeWidth="1.5" />

              {/* Cockpit / Avionics Hatch */}
              <path d="M 200 65 L 210 90 L 200 120 L 190 90 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
              <path d="M 200 70 L 205 90 L 200 115 L 195 90 Z" fill="#222" />

              {/* Center Panel Lines */}
              <line x1="200" y1="120" x2="200" y2="260" stroke="#000" strokeWidth="2" opacity="0.4" />
              <line x1="185" y1="190" x2="215" y2="190" stroke="#000" strokeWidth="2" opacity="0.4" />

              {/* Energy Conduit */}
              <line x1="200" y1="130" x2="200" y2="250" stroke="#a3d900" strokeWidth="1" opacity="0.6" className="animate-pulse" />
              <text x="195" y="210" fill="#666" fontSize="5" fontFamily="monospace" transform="rotate(-90 195 210)">DANGER: HIGH VOLTAGE</text>
            </motion.g>

          </svg>

          {/* Flash Effect on Lock */}
          <motion.div
            style={{ opacity: lockFlashOpacity }}
            className="absolute inset-0 bg-[#a3d900] mix-blend-overlay rounded-full blur-3xl pointer-events-none"
          />
        </motion.div>
      </div>

      {/* SCROLLING TEXT LAYERS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-40">
        <div className="max-w-[1300px] mx-auto w-full h-full flex flex-col justify-center px-6">
          <div className="h-[50vh]" />

          {rows.map((row) => (
            <div key={row.id} className="relative w-full border-t border-white/10 py-32 flex items-center bg-transparent">
              <div className="w-1/2 md:w-[35%] flex gap-6 md:gap-8 items-start">
                <div className="w-10 h-10 shrink-0 rounded-full border border-[#a3d900] flex items-center justify-center text-[#a3d900] text-xs font-mono font-bold mt-1 shadow-[0_0_10px_rgba(163,217,0,0.2)] bg-black/50 backdrop-blur-md">
                  {row.id}
                </div>
                <h3 className="text-xl md:text-3xl font-headline text-white font-bold leading-tight tracking-wide drop-shadow-lg bg-black/40 p-2 rounded-xl backdrop-blur-sm">
                  {row.title}
                </h3>
              </div>
              <div className="hidden md:block w-[30%]" />
              <div className="w-1/2 md:w-[35%] flex justify-end">
                <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed pr-0 md:pr-12 text-left bg-black/40 p-4 rounded-xl backdrop-blur-sm">
                  {row.description}
                </p>
              </div>
            </div>
          ))}

          <div className="h-[50vh]" />
        </div>
      </div>
    </section>
  );
}
