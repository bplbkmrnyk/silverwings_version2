"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* Fixed Full Page Background */}
      <div className="fixed inset-0 z-[-1] bg-black pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <main className="pt-24 pb-24 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto flex flex-col gap-32">
        {/* Hero Section: Origins & Philosophy */}
        <section className="relative min-h-[70vh] flex items-center py-10 md:py-16">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

            {/* Left: Content Box */}
            <div className="flex-1 flex flex-col gap-6 backdrop-blur-xs p-8 md:p-12 border border-white/10 rounded-[20px] relative overflow-hidden">
              {/* Corner accents */}


              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-12 bg-tertiary"></div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">Our Origin Story</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase"
              >
                Architects <br />
                <span className="text-primary">of the Sky.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-body text-on-surface-variant text-lg leading-relaxed"
              >
                We don&apos;t just build hardware; we engineer sovereign deterrence architectures. From our elite origins in a small research lab to a global pillar in defense, we exist to redefine autonomous flight.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 gap-4 mt-2"
              >
                <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-[12px] p-4 md:p-6 border border-white/5 flex flex-col items-center text-center">
                  <span className="font-headline text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">2010</span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase text-tertiary tracking-widest">Year Founded</span>
                </div>
                <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-[12px] p-4 md:p-6 border border-white/5 flex flex-col items-center text-center">
                  <span className="font-headline text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">40+</span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase text-primary tracking-widest">Global Patents</span>
                </div>
              </motion.div>
            </div>
            {/* Right: Holographic Vector Drone Display */}
            <div className="flex-1 relative h-[450px] md:h-[550px] w-full flex items-center justify-center -mt-10 md:-mt-18 lg:-mt-28">
              <div className="relative w-[400px] h-[400px]" style={{ perspective: "300px" }}>
                {/* 3D Scene Wrapper - Tilted down to give isometric view */}
                <div className="absolute inset-0 w-full h-full" style={{ transformStyle: "preserve-3d", transform: "rotateX(65deg)" }}>

                  {/* 1. Rotating Base */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(-160px)" }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full border-[2px] border-primary/30 shadow-[0_0_40px_rgba(96,165,250,0.4)]"></div>
                    <div className="absolute inset-[15%] rounded-full border border-dashed border-tertiary/50"></div>
                    <div className="absolute inset-[30%] rounded-full border-2 border-primary/20 shadow-[inset_0_0_20px_rgba(96,165,250,0.3)]"></div>

                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <polygon points="50,2 93,25 93,75 50,98 7,75 7,25" fill="rgba(96,165,250,0.05)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.5" />
                      <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="0.5" strokeDasharray="2 2" />
                      <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(96,165,250,0.2)" strokeWidth="0.5" />
                      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(96,165,250,0.2)" strokeWidth="0.5" />
                    </svg>
                  </motion.div>

                  {/* 2. 3D Hologram Drone */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateZ: -360, z: [10, 30, 10] }}
                    transition={{
                      rotateZ: { duration: 24, repeat: Infinity, ease: "linear" },
                      z: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {/* Top-Down View (Horizontal Plane) */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(0px)" }}>
                      <svg viewBox="-200 -200 400 400" className="w-[350px] h-[350px] overflow-visible drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]">
                        <polygon points="0,-150 180,100 100,150 0,120 -100,150 -180,100" fill="rgba(10,15,25,0.7)" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
                        <polygon points="0,-80 50,50 0,80 -50,50" fill="none" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
                        <circle cx="0" cy="0" r="4" fill="#fff" className="animate-pulse" />
                      </svg>
                    </div>

                    {/* Vertical Longitudinal Plane (Side View) */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotateY(90deg)" }}>
                      <svg viewBox="-200 -200 400 400" className="w-[350px] h-[350px] overflow-visible">
                        <polygon points="0,-150 -40,50 -10,150 10,150 20,50 0,-150" fill="rgba(96,165,250,0.15)" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="-20,-50 -40,0 -20,50" fill="none" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
                      </svg>
                    </div>

                    {/* Vertical Transverse Planes (Front/Back Cross Sections) */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotateX(90deg) translateZ(50px)" }}>
                      <svg viewBox="-200 -200 400 400" className="w-[350px] h-[350px] overflow-visible">
                        <polygon points="-70,0 0,-20 70,0 0,10" fill="rgba(96,165,250,0.15)" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotateX(90deg) translateZ(-50px)" }}>
                      <svg viewBox="-200 -200 400 400" className="w-[350px] h-[350px] overflow-visible">
                        <polygon points="-140,0 0,-35 140,0 0,15" fill="rgba(96,165,250,0.1)" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotateX(90deg) translateZ(-120px)" }}>
                      <svg viewBox="-200 -200 400 400" className="w-[350px] h-[350px] overflow-visible">
                        <polygon points="-90,0 0,-25 90,0 0,15" fill="rgba(96,165,250,0.1)" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="-40,0 -60,-40 -20,-40" fill="none" stroke="#60A5FA" strokeWidth="1" />
                        <polygon points="40,0 60,-40 20,-40" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Floating particles/HUD around it */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-tertiary rounded-full shadow-[0_0_10px_#afc8f0]" style={{ transform: "translateZ(50px)" }}></div>
                    <div className="absolute bottom-[30%] right-[20%] w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#60A5FA]" style={{ transform: "translateZ(80px)" }}></div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values (Bento Grid) */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">CORE DOCTRINE</h2>
            <div className="h-1 w-16 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-surface-container-high p-10 flex flex-col gap-6 relative overflow-hidden group hover:bg-surface-container-highest transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">my_location</span>
              </div>
              <span className="material-symbols-outlined text-tertiary text-4xl" data-weight="fill">track_changes</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface uppercase tracking-wide">Mission</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed z-10">
                To engineer unyielding tactical advantages through precision aerospace technology, ensuring total domain awareness for our partners in theaters of high consequence.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-surface-container-low border border-outline-variant/15 p-10 flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">visibility</span>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">satellite_alt</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface uppercase tracking-wide">Vision</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed z-10">
                A future where asymmetrical threats are neutralized autonomously, utilizing decentralized intelligence networks and zero-latency decision matrices.
              </p>
            </div>
            {/* Values Stack */}
            <div className="flex flex-col gap-6">
              {/* Value 1: Innovation */}
              <div className="bg-surface-container-highest p-6 flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface">memory</span>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface uppercase">Relentless Innovation</h4>
                  <p className="font-body text-on-surface-variant text-xs mt-1">Pushing the boundary of autonomous flight algorithms.</p>
                </div>
              </div>
              {/* Value 2: Security */}
              <div className="bg-surface-container-highest p-6 flex items-start gap-4 border-l-4 border-military-green">
                <span className="material-symbols-outlined text-military-green" data-weight="fill">gpp_good</span>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface uppercase">Ironclad Security</h4>
                  <p className="font-body text-on-surface-variant text-xs mt-1">Quantum-resistant encryption on all data uplinks.</p>
                </div>
              </div>
              {/* Value 3: Trust */}
              <div className="bg-surface-container-highest p-6 flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface">handshake</span>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface uppercase">Operational Trust</h4>
                  <p className="font-body text-on-surface-variant text-xs mt-1">Reliability guaranteed in extreme environmental conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership in Technology */}
        <section className="bg-surface-container-low p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-label text-sm uppercase tracking-[0.2em] text-primary">Strategic Advantage</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                LEADERSHIP IN<br />DEFENSE TECHNOLOGY
              </h2>
              <p className="font-body text-on-surface-variant text-base leading-relaxed">
                We do not merely supply equipment; we integrate seamlessly into national defense architectures. Our systems are designed to operate independently or as part of a swarm, providing scalable responses to escalating kinetic threats.
              </p>
              <ul className="flex flex-col gap-4 mt-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm" data-weight="fill">check_circle</span>
                  <span className="font-body text-sm text-on-surface">AI-Driven Target Acquisition</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm" data-weight="fill">check_circle</span>
                  <span className="font-body text-sm text-on-surface">Beyond Visual Line of Sight (BVLOS) Capable</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm" data-weight="fill">check_circle</span>
                  <span className="font-body text-sm text-on-surface">EMP Hardened Infrastructure</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-8 self-start border border-tertiary text-tertiary font-headline font-bold uppercase tracking-widest px-8 py-3 hover:bg-tertiary/10 transition-colors inline-block text-center">
                View Technical Specs
              </Link>
            </div>
            <div className="relative h-[400px] w-full bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-4 flex flex-col justify-between">
              <img alt="Technology Interface" className="absolute inset-0 w-full h-full object-cover opacity-30" data-alt="Abstract macro shot of a complex circuit board with glowing blue and silver traces, conveying high-tech processing power" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyr-vunu6g6_zGpxg1tw9l1w4_KXS72fzL0O-fnZGOE0od4K3Ck1pOPMau4tzY3jFdz5HX8tWrri6z9JZgegenB2m8v84VO3r2EInerH8C3txch_G51ahizQL2CtqBX7DPsMAazywno8clvY3JFKoNa_yuku_cKE3IzHtDleK9hwgf2Dj6KSopbz4Slgmz9onKG-NVg4jk6lZGjI-yc4uryc-9pGS7SyvueTFfkTc76cJyzpgQoayyqWnxw7Z0hUaOVHTs5UmIgZw" />
              <div className="flex justify-between items-center z-10 border-b border-outline-variant/30 pb-2">
                <span className="font-mono text-xs text-on-surface-variant">SYS_STATUS: OPTIMAL</span>
                <div className="h-2 w-2 bg-military-green rounded-full shadow-[0_0_10px_#4B5320]"></div>
              </div>
              <div className="z-10 font-mono text-sm text-primary/70 leading-relaxed max-w-[80%]">
                &gt; INITIATING HANDSHAKE PROTOCOL<br />
                &gt; SECURING UPLINK... [OK]<br />
                &gt; DEPLOYING SENSOR MATRIX... [OK]<br />
                &gt; AWAITING COMMAND DIRECTIVE...
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
