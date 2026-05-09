"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import HorizontalScroll from "@/components/HorizontalScroll";
import ParallaxImage from "@/components/ParallaxImage";
import CircularCardsSection from "@/components/CircularCardsSection";
import DroneSequence from "@/components/DroneSequence";
import DroneAssemblySection from "@/components/DroneAssemblySection";

// Reusable reveal animation component
function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "none";
}) {
  const initial = direction === "none" ? { opacity: 0 } : { opacity: 0, y: 60 };
  const animate = direction === "none" ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


// Text that reveals word by word
function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap gap-x-[0.25em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: 40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: delay + i * 0.06,
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Home() {
  const [loadingState, setLoadingState] = useState<"startup" | "launching" | "locked">("startup");

  useEffect(() => {
    // Phase 1: Startup -> Launching
    const timer1 = setTimeout(() => {
      setLoadingState("launching");
    }, 2500);

    // Phase 2: Launching -> Locked
    const timer2 = setTimeout(() => {
      setLoadingState("locked");
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08]);

  return (
    <main className="pt-0">
      {/* ─── Hero Section ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[921px] flex items-center bg-black overflow-hidden"
      >
        {/* Loading Overlay Mask */}
        <AnimatePresence>
          {loadingState !== "locked" && (
            <motion.div
              className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-24 md:pb-32 pointer-events-none"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <style>{`
                #main-navbar { opacity: 0 !important; pointer-events: none !important; }
                body { overflow: hidden !important; }
              `}</style>
              <div className="flex flex-col items-center gap-6 z-[70]">
                <div className="font-mono text-primary text-xs md:text-sm tracking-[0.4em] animate-pulse">
                  {loadingState === "startup" ? "SYSTEM INITIALIZING..." : "LAUNCHING SEQUENCE..."}
                </div>
                <div className="w-48 md:w-64 h-px bg-outline-variant/30 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: loadingState === "startup" ? "75%" : "100%" }}
                    transition={{ duration: loadingState === "startup" ? 2.5 : 0.5, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 z-0 bg-black overflow-hidden"
          style={{ y: heroBgY, scale: heroScale }}
        >
          {/* Drone Animation Wrapper */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none"
            style={{ zIndex: loadingState === "locked" ? 10 : 65 }}
            initial={{ scale: 0.3, y: "50vh" }}
            animate={{
              scale: loadingState === "startup" ? 0.3 : 1,
              y: loadingState === "startup" ? "50vh" : "0vh",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Jitter Wrapper for Startup */}
            <motion.div
              animate={loadingState === "startup" ? { x: [-1, 1, -1], y: [-0.5, 0.5, -0.5] } : { x: 0, y: 0 }}
              transition={{ duration: 0.1, repeat: Infinity }}
              className="absolute top-0 left-0 w-0 h-0"
            >
              {/* Animated Flame */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-80 bg-gradient-to-b from-blue-300 via-orange-500 to-transparent rounded-full blur-3xl mix-blend-screen"
                animate={loadingState === "startup" ? { height: ["100px", "150px"], opacity: [0.4, 0.6] } : { height: ["400px", "550px", "450px", "600px"], opacity: [0.8, 1, 0.9, 1] }}
                transition={loadingState === "startup" ? { duration: 0.05, repeat: Infinity, repeatType: "mirror" } : { duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
                style={{ transformOrigin: "top center" }}
              />
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-40 bg-gradient-to-b from-white via-yellow-200 to-transparent rounded-full blur-xl mix-blend-screen"
                animate={loadingState === "startup" ? { height: ["80px", "120px"] } : { height: ["300px", "400px", "320px", "420px"] }}
                transition={{ duration: 0.05, repeat: Infinity, repeatType: "mirror" }}
                style={{ transformOrigin: "top center" }}
              />
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-16 bg-gradient-to-b from-white to-transparent rounded-full blur-md mix-blend-screen"
                animate={loadingState === "startup" ? { height: ["50px", "80px"] } : { height: ["200px", "280px", "220px", "300px"] }}
                transition={{ duration: 0.03, repeat: Infinity, repeatType: "mirror" }}
                style={{ transformOrigin: "top center" }}
              />

              {/* Vector Kamikaze Drone */}
              <svg
                viewBox="0 0 400 400"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[95%] w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] drop-shadow-[0_40px_100px_rgba(96,165,250,0.4)] pointer-events-none"
              >
                <defs>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0f1115" />
                    <stop offset="50%" stopColor="#1a1d24" />
                    <stop offset="100%" stopColor="#0f1115" />
                  </linearGradient>
                  <linearGradient id="wingGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#15171e" />
                    <stop offset="100%" stopColor="#08090b" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Right Wing */}
                <polygon points="220,150 380,280 380,320 230,320" fill="url(#wingGrad)" stroke="#2d3748" strokeWidth="1.5" />
                {/* Right Winglet */}
                <polygon points="380,280 390,240 380,320" fill="#000" />

                {/* Left Wing */}
                <polygon points="180,150 20,280 20,320 170,320" fill="url(#wingGrad)" stroke="#2d3748" strokeWidth="1.5" />
                {/* Left Winglet */}
                <polygon points="20,280 10,240 20,320" fill="#000" />

                {/* Main Chassis */}
                <polygon points="200,20 230,120 240,340 200,360 160,340 170,120" fill="url(#bodyGrad)" stroke="#4a5568" strokeWidth="1" />

                {/* Center Panel Lines */}
                <line x1="200" y1="20" x2="200" y2="360" stroke="#000" strokeWidth="2" opacity="0.5" />

                {/* Cockpit / Sensor Array */}
                <polygon points="200,60 215,130 200,160 185,130" fill="#000" stroke="#60a5fa" strokeWidth="1" filter="url(#glow)" />

                {/* Center Engine block */}
                <polygon points="180,340 220,340 230,380 170,380" fill="#050505" stroke="#718096" strokeWidth="1" />
                {/* Nozzle Inner Glow */}
                <ellipse cx="200" cy="380" rx="22" ry="8" fill="#fff" filter="url(#glow)" />
                <ellipse cx="200" cy="380" rx="28" ry="12" fill="#60a5fa" opacity="0.6" filter="url(#glow)" />

                {/* Neon Accents */}
                <line x1="240" y1="300" x2="360" y2="300" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" />
                <line x1="160" y1="300" x2="40" y2="300" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Dark vignette — left side heavier so text is readable, right side lets image breathe */}
          <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/40 to-transparent z-[5]" />
          {/* Subtle bottom fade to next section */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-[5]" />
        </motion.div>

        {/* Hero content fades + scales out as you scroll away */}
        {loadingState === "locked" && (
          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 pt-12 md:pt-28"
          >
            <div className="flex flex-col gap-6 md:gap-8 justify-center">
              <div className="flex flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                  className="text-tertiary font-label text-sm tracking-[0.2em] uppercase font-bold"
                >
                  Classified Systems / Tier 1
                </motion.span>
                <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-extrabold text-on-surface leading-none tracking-[-0.02em] uppercase">
                  <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    className="block"
                  >
                    Precision.
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                    className="block text-primary"
                  >
                    Protection.
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                    className="block"
                  >
                    Power.
                  </motion.span>
                </h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-on-surface-variant text-base md:text-xl font-body max-w-lg leading-relaxed border-l-2 border-outline-variant pl-4 md:pl-6"
              >
                Next-generation aerospace defense solutions engineered for zero-tolerance operational environments.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
              >
                <Link href="/contact" className="bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-headline font-bold uppercase tracking-widest px-6 md:px-8 py-4 hover:text-[#eac349] transition-all flex items-center justify-between group">
                  <span>Request Proposal</span>
                  <span className="material-symbols-outlined ml-4 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link href="/contact" className="border border-tertiary text-tertiary font-headline font-bold uppercase tracking-widest px-6 md:px-8 py-4 hover:bg-tertiary/10 transition-colors flex items-center justify-between">
                  <span>Explore Solutions</span>
                  <span className="material-symbols-outlined ml-4">radar</span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="hidden md:flex justify-end items-end pb-12"
            >
              <div className="bg-surface-container-highest/60 backdrop-blur-xl p-6 w-72 border-t-2 border-primary ghost-border">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-primary">my_location</span>
                  <span className="text-[10px] text-tertiary font-mono tracking-widest">SYS.ONL.994</span>
                </div>
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-on-surface-variant">AIRSPACE</span>
                    <span className="text-military-green font-bold">SECURE</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-on-surface-variant">ASSETS</span>
                    <span className="text-on-surface">14 ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">THREAT LVL</span>
                    <span className="text-on-surface">NOMINAL</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* ─── Sovereign Guard — Sticky Parallax ─── */}
      <section className="py-16 md:py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Text column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Reveal>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface uppercase mb-6">
                  The Sovereign Guard
                </h2>
                <div className="w-12 h-1 bg-tertiary mb-8" />
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-6">
                  Silver Wings Defence operates at the nexus of artificial intelligence, advanced robotics, and traditional armaments. We do not just build hardware; we engineer sovereign deterrence architectures designed to outpace emerging threats across all domains.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                  Our proprietary systems are currently deployed protecting critical infrastructure and strategic assets in high-risk zones globally, demonstrating unmatched reliability when failure is not an option.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.35}>
              <div className="mt-12 bg-surface-container p-6 border-l-4 border-military-green">
                <p className="font-mono text-sm text-military-green font-bold tracking-widest uppercase mb-2">Operational Status</p>
                <p className="text-on-surface text-xl font-headline tracking-tight">Systems functioning at 99.999% uptime across active deployments.</p>
              </div>
            </Reveal>
          </div>

          {/* Parallax image column */}
          <Reveal delay={0.2} className="md:col-span-7">
            <div className="relative h-[500px] bg-surface-container-high ghost-border overflow-hidden group">
              <ParallaxImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNdWZQiAdhuliays9BQ7AScTxzFgYFkOXwIixbGau4Jg9I0PR-F1DrCoXt1LRQfRggkdnq5mMjfs_7_fy7R4eVCq_jRAQ7FuqvJUtRCfl7sDJT93E6qOlcPh_YnPt1GJlyUXI_a4KgqtVMsPUlXUgZFmO7Nojn6lVxHUv0Tn8zuY1rIPUUxFQaqj2rWRJLFoAjnrd_vLndhpdcv9-S9q3e9j4YVAQ6zMNYWzUQtmKzNA5uTHMdcIGuJsfWS8dK661gIvrJDSh0_yQ"
                alt="Advanced Hardware"
                className="absolute inset-0 w-full h-full opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-highest via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-primary font-mono tracking-widest mb-1 block">MANUFACTURING FACILITY / SECTOR 4</span>
                  <h3 className="text-on-surface font-headline text-2xl font-bold uppercase">Precision Assembly</h3>
                </div>
                <button className="w-12 h-12 bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Core Solutions — Horizontal Scroll ─── */}
      <section className="bg-surface relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Section header (normal scroll) */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-8">
          <Reveal>
            <span className="text-tertiary font-label text-sm tracking-[0.2em] uppercase font-bold block mb-4">Tactical Portfolio</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface uppercase">
              Core Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a className="text-primary font-label text-sm tracking-widest uppercase hover:text-tertiary transition-colors flex items-center gap-2 border-b border-outline-variant pb-1" href="#">
              View All Specs <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </Reveal>
        </div>

        {/* Horizontal scrolling cards */}
        <HorizontalScroll>
          {/* Spacer so the first card starts flush left */}
          <div className="shrink-0 w-[calc((100vw-80rem)/2+2.5rem)] hidden xl:block" />

          {/* Card 1 */}
          <div className="shrink-0 w-[min(85vw,420px)] bg-surface-container-high ghost-border relative group h-[460px] flex flex-col justify-end p-8 overflow-hidden tactical-shadow">
            <div className="absolute top-6 right-6 z-20">
              <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
            </div>
            <div className="absolute inset-0 z-0">
              <img alt="UAV Systems" className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWQYkKdjK3Y7G0l4FGGJIAYZB_Yk-FBSNi0Ef_8DzTO4F34bsVdzdrRugk9qIugJrbSGmHHpRn5CX2osECwJtZOW-jT8vXmoXjkdFXMPY4-SZJJOoapl24QJWTirFdq0hGTtYZzlkHZnhBVXN-gI6AWfENzVbVCEJLqv5zO_SmT5ewzjt2U-qGQHqvkhq5YcXcK3yoOB9b_W_5rEVsY7rkP9oX7GnI73VoRy3ZSrTXXUCHB4XfleJGcTyxBg7HSaIjr00yO9VDN4" />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-highest via-surface-container-highest/80 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-tertiary font-mono tracking-widest mb-2 block">AEROSPACE DIV.</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-3">Unmanned Systems</h3>
              <p className="text-sm text-on-surface-variant font-body mb-6">Autonomous aerial platforms designed for persistent ISR and precision kinetic strikes in denied airspace.</p>
              <div className="w-full h-px bg-outline-variant mb-6" />
              <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant">
                <span>ENDURANCE: 48H</span>
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="shrink-0 w-[min(85vw,420px)] bg-surface-container-high ghost-border relative group h-[460px] flex flex-col justify-end p-8 overflow-hidden tactical-shadow mt-16">
            <div className="absolute top-6 right-6 z-20">
              <span className="material-symbols-outlined text-primary text-3xl">satellite_alt</span>
            </div>
            <div className="absolute inset-0 z-0">
              <img alt="Surveillance" className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW0fpMimENV0_rPlLRlGF_sXP_9L1lM383Rbqbt-TibSxmznWhCezK72IxrnXozHQ8vHEKZSPjc6F-oSbbZHt-WcEVWk_Gr31YO1EqOYANGqQdFhHWOB4Ux6dmOF3Hf_IT8SWyksxK-tZCeUfhE9RZcsIBaeWy8yTu3Z-xzkyVLgyZdbWHPosWqHl_MfhnIlwqLBrpRfZnR71wX67YVQNn2KqyIBtw4cWKQd7pwaEPnPImG4bIhDCk-GYftvewLl7h3J480CGTVCc" />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-highest via-surface-container-highest/80 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-tertiary font-mono tracking-widest mb-2 block">INTELLIGENCE DIV.</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-3">Global Surveillance</h3>
              <p className="text-sm text-on-surface-variant font-body mb-6">Multi-spectral satellite imaging and continuous monitoring networks for actionable strategic intelligence.</p>
              <div className="w-full h-px bg-outline-variant mb-6" />
              <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant">
                <span>COVERAGE: LEO</span>
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="shrink-0 w-[min(85vw,420px)] bg-surface-container-high ghost-border relative group h-[460px] flex flex-col justify-end p-8 overflow-hidden tactical-shadow">
            <div className="absolute top-6 right-6 z-20">
              <span className="material-symbols-outlined text-primary text-3xl">gpp_bad</span>
            </div>
            <div className="absolute inset-0 z-0">
              <img alt="Cyber Warfare" className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqj_gpLrV2iFNHxA96OovpNNq_upDW4Mik6ZwEDg09SWF4wfwrD6V5lMA05IaT_4EnWMgWAFURztDt5rmylctzsDtzaF-xYgYneFiFKDTPgNIGvxtoQSZcKd8cijya-vCXrcnPfBAfAjP_4JykPPJZC6zh0NeV2pAS__zLUlaqFOHVwsVQXqKa4cr89cMjwO1JU_Xo8Z2lZ6rvLnM_7A0_9wYZJkXipOVrVpWY8OSBq5C6XJ-RbsqCamImVQCvNigvKVsxJydnhxk" />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-highest via-surface-container-highest/80 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-tertiary font-mono tracking-widest mb-2 block">CYBERCOM DIV.</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-3">Cyber Security</h3>
              <p className="text-sm text-on-surface-variant font-body mb-6">Hardened cryptographic networks and offensive cyber capabilities to protect digital infrastructure.</p>
              <div className="w-full h-px bg-outline-variant mb-6" />
              <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant">
                <span>ENCRYPTION: AES-256</span>
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Trailing spacer */}
          <div className="shrink-0 w-[calc((100vw-80rem)/2+2.5rem)] hidden xl:block" />
        </HorizontalScroll>
      </section>

      {/* ─── Circular Cards Section ─── */}
      <CircularCardsSection />

      {/* ─── Drone Sequence Animation ─── */}
      <DroneSequence />

      {/* ─── Drone Assembly Section ─── */}
      <DroneAssemblySection />

      {/* ─── Partner Logos ─── */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/20">
        <Reveal direction="none" className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale">
          <span className="text-xs font-mono tracking-widest uppercase text-on-surface-variant whitespace-nowrap">Authorized Supplier To:</span>
          <div className="flex w-full flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 overflow-hidden">
            <h4 className="font-headline font-bold text-lg md:text-xl tracking-tighter uppercase">Aegis Defense</h4>
            <h4 className="font-headline font-bold text-lg md:text-xl tracking-tighter uppercase">StratCom</h4>
            <h4 className="font-headline font-bold text-lg md:text-xl tracking-tighter uppercase">Titan Dynamics</h4>
            <h4 className="font-headline font-bold text-lg md:text-xl tracking-tighter uppercase">Vanguard Intl</h4>
            <h4 className="font-headline font-bold text-lg md:text-xl tracking-tighter uppercase">Apex Systems</h4>
          </div>
        </Reveal>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-16 md:py-24 bg-surface-container-low relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <Reveal>
            <span className="material-symbols-outlined text-tertiary text-4xl md:text-5xl mb-6 block">library_books</span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface uppercase mb-6">
              <WordReveal text="Access Technical Specifications" />
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-on-surface-variant font-body text-lg mb-10 max-w-2xl mx-auto">
              Review our comprehensive unclassified capabilities matrix. Understand the tactical advantage Silver Wings Defence provides across land, air, and cyber domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?intent=brochure" className="bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-headline font-bold uppercase tracking-widest px-8 py-4 hover:text-[#eac349] transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">download</span>
                <span>Download 2026 Brochure</span>
              </Link>
            </div>
            <p className="text-[10px] text-outline font-mono mt-6 tracking-widest uppercase">Document is subject to export control regulations.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
