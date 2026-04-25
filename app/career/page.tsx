"use client";

import { motion } from "framer-motion";

export default function Career() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto flex flex-col gap-32 overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center py-20 border border-outline-variant/10 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/backgrounds/career_bg.png"
            alt="Drone Fleet"
            className="w-full h-full object-cover filter brightness-50 mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-surface-container-highest/90 via-surface-container-highest/70 to-transparent"></div>
          <div className="absolute inset-0 grid-overlay opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 flex flex-col items-start max-w-5xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-tertiary"></div>
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-tertiary">
              Restricted Recruitment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none uppercase mb-8"
          >
            Build the Apex <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container">Predators of the Sky.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-gray-300 text-xl leading-relaxed max-w-2xl mb-12 border-l-2 border-primary/50 pl-6"
          >
            We don&apos;t build toys. We engineer the most lethal, autonomous, and resilient drone defense networks on the planet. We need elite operatives who thrive on solving impossible aerospace challenges.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary text-on-primary font-headline font-bold uppercase tracking-widest px-10 py-5 hover:bg-primary-container hover:text-white transition-all ambient-shadow flex items-center gap-3"
          >
            View Active Directives <span className="material-symbols-outlined">arrow_downward</span>
          </motion.button>
        </div>

        {/* Tactical decorative elements */}
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-tertiary tracking-widest text-right z-10 opacity-70">
          CLEARANCE: TIER 1<br />
          SECTOR: R&D
        </div>
      </section>

      {/* Why Silver Wings - Environment */}
      <section className="flex flex-col gap-16 relative">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4">[ THE ENVIRONMENT ]</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">Unrivaled Infrastructure</h2>
          <p className="font-body text-on-surface-variant text-lg">
            When you join Silver Wings, you gain access to classified testing grounds, unlimited compute clusters for swarm simulation, and the most advanced rapid-prototyping labs in the defense sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-high p-8 flex flex-col items-center text-center border-t border-outline-variant/20 hover:border-primary/50 transition-colors group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors mb-6">science</span>
            <h3 className="font-headline text-xl font-bold text-white uppercase mb-3">Classified R&D Labs</h3>
            <p className="font-body text-sm text-on-surface-variant">Work with unreleased composite materials, advanced stealth coatings, and next-gen propellants before the rest of the world.</p>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col items-center text-center border-t border-outline-variant/20 hover:border-tertiary/50 transition-colors group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-tertiary transition-colors mb-6">hub</span>
            <h3 className="font-headline text-xl font-bold text-white uppercase mb-3">Swarm Compute Clusters</h3>
            <p className="font-body text-sm text-on-surface-variant">Train autonomous neural networks on petabytes of real-world combat data using our dedicated supercomputer array.</p>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col items-center text-center border-t border-outline-variant/20 hover:border-military-green/50 transition-colors group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-military-green transition-colors mb-6">satellite_alt</span>
            <h3 className="font-headline text-xl font-bold text-white uppercase mb-3">Live-Fire Testing Grounds</h3>
            <p className="font-body text-sm text-on-surface-variant">Validate your engineering daily. We maintain private restricted airspace for immediate beyond-visual-line-of-sight (BVLOS) testing.</p>
          </div>
        </div>
      </section>

      {/* Core Divisions */}
      <section className="bg-surface-container-low p-12 md:p-20 relative overflow-hidden border border-outline-variant/10">
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-white leading-tight">Tactical <br />Divisions</h2>
            <div className="w-16 h-1 bg-tertiary"></div>
            <p className="font-body text-on-surface-variant">
              We operate in highly specialized cells. Find the division that aligns with your destructive creativity.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 border border-outline-variant/20 bg-surface/50 backdrop-blur-sm group hover:bg-surface transition-colors">
              <h3 className="font-headline text-xl font-bold text-primary uppercase mb-2">Aeronautical & Propulsion</h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">Design the physical chassis. Focus on thrust-to-weight ratios, radar cross-section reduction, and heavy payload capacity.</p>
              <div className="font-mono text-[10px] text-tertiary tracking-widest">[ HIRING ACTIVE ]</div>
            </div>
            <div className="p-8 border border-outline-variant/20 bg-surface/50 backdrop-blur-sm group hover:bg-surface transition-colors">
              <h3 className="font-headline text-xl font-bold text-primary uppercase mb-2">Autonomous AI Systems</h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">Write the &quot;brains&quot; of the fleet. Develop object recognition, autonomous target acquisition, and complex swarm coordination.</p>
              <div className="font-mono text-[10px] text-tertiary tracking-widest">[ HIGH PRIORITY ]</div>
            </div>
            <div className="p-8 border border-outline-variant/20 bg-surface/50 backdrop-blur-sm group hover:bg-surface transition-colors">
              <h3 className="font-headline text-xl font-bold text-primary uppercase mb-2">Cyber Warfare & Comms</h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">Ensure data links cannot be jammed or intercepted. Implement quantum encryption and zero-day threat neutralization.</p>
              <div className="font-mono text-[10px] text-tertiary tracking-widest">[ HIRING ACTIVE ]</div>
            </div>
            <div className="p-8 border border-outline-variant/20 bg-surface/50 backdrop-blur-sm group hover:bg-surface transition-colors">
              <h3 className="font-headline text-xl font-bold text-primary uppercase mb-2">Field Integration</h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">Deploy with our military partners globally. Train operators, gather field intelligence, and perform on-site technical diagnostics.</p>
              <div className="font-mono text-[10px] text-outline-variant tracking-widest">[ NO VACANCIES ]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal - Active Directives */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 border-b ghost-border pb-6">
          <h2 className="font-headline text-4xl font-bold text-white uppercase tracking-tight">Active Directives</h2>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Select a requisition to apply</span>
        </div>

        <div className="bg-[#050505] p-1 border border-outline-variant/30 rounded-md shadow-2xl overflow-hidden relative">
          {/* Terminal Header */}
          <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">RECRUITMENT_DB_v2.4</span>
          </div>

          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm flex flex-col gap-6 relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%] pointer-events-none z-10"></div>

            <div className="text-primary mb-4">
              &gt; INITIALIZING RECRUITMENT PROTOCOL...<br />
              &gt; SCANNING FOR ELITE CANDIDATES...<br />
              &gt; 4 DIRECTIVES FOUND.
            </div>

            {/* Job List */}
            <div className="flex flex-col gap-4 relative z-20">
              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest/50 p-4 border-l-2 border-transparent hover:border-tertiary transition-all cursor-pointer">
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-tertiary uppercase">Senior Flight Control Engineer</h4>
                  <div className="text-on-surface-variant text-xs mt-1">REQ_ID: #8892 | DIVISION: AERONAUTICS | LOC: WASHINGTON, DC</div>
                </div>
                <div className="mt-4 md:mt-0 text-tertiary uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  [ INITIATE UPLOAD ]
                </div>
              </div>

              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest/50 p-4 border-l-2 border-transparent hover:border-primary transition-all cursor-pointer">
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-primary uppercase">Machine Learning Lead (Swarm Logic)</h4>
                  <div className="text-on-surface-variant text-xs mt-1">REQ_ID: #9041 | DIVISION: AI SYSTEMS | LOC: SEATTLE, WA</div>
                </div>
                <div className="mt-4 md:mt-0 text-primary uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  [ INITIATE UPLOAD ]
                </div>
              </div>

              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest/50 p-4 border-l-2 border-transparent hover:border-military-green transition-all cursor-pointer">
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-military-green uppercase">Embedded Systems Security Architect</h4>
                  <div className="text-on-surface-variant text-xs mt-1">REQ_ID: #9102 | DIVISION: CYBER WARFARE | LOC: AUSTIN, TX</div>
                </div>
                <div className="mt-4 md:mt-0 text-military-green uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  [ INITIATE UPLOAD ]
                </div>
              </div>

              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest/50 p-4 border-l-2 border-transparent hover:border-tertiary transition-all cursor-pointer">
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-tertiary uppercase">Propulsion Engineer (Heavy Lift)</h4>
                  <div className="text-on-surface-variant text-xs mt-1">REQ_ID: #9115 | DIVISION: AERONAUTICS | LOC: REMOTE</div>
                </div>
                <div className="mt-4 md:mt-0 text-tertiary uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  [ INITIATE UPLOAD ]
                </div>
              </div>
            </div>

            <div className="text-on-surface-variant mt-4 flex items-center gap-2">
              <span className="text-primary animate-pulse">_</span> AWAITING INPUT
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
