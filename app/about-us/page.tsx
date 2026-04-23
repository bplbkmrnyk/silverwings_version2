"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto flex flex-col gap-32 overflow-hidden">
      {/* Hero Section: Origins & Philosophy */}
      <section className="relative min-h-[70vh] flex items-center py-20 mt-4 md:mt-10">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          
          {/* Left: Content Box */}
          <div className="flex-1 flex flex-col gap-8 bg-surface-container-low/80 backdrop-blur-xl p-10 md:p-16 border-l-4 border-primary shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40"></div>

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
              className="font-headline text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] uppercase"
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
              We don't just build hardware; we engineer sovereign deterrence architectures. From our elite origins in a small research lab to a global pillar in defense, we exist to redefine autonomous flight.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 mt-4"
            >
              <div className="bg-surface-container-highest p-6 border-t border-outline-variant/10 flex flex-col items-center text-center">
                <span className="font-headline text-4xl font-bold text-white mb-2">2010</span>
                <span className="font-mono text-[10px] uppercase text-tertiary tracking-widest">Year Founded</span>
              </div>
              <div className="bg-surface-container-highest p-6 border-t border-outline-variant/10 flex flex-col items-center text-center">
                <span className="font-headline text-4xl font-bold text-white mb-2">40+</span>
                <span className="font-mono text-[10px] uppercase text-primary tracking-widest">Global Patents</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Drone Display */}
          <div className="flex-1 relative h-[400px] md:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0">
            {/* Circular rings behind drone */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
               <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-primary/30 rounded-full animate-[spin_40s_linear_infinite]"></div>
               <div className="absolute w-[200px] md:w-[350px] h-[200px] md:h-[350px] border border-dashed border-tertiary/30 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
            </div>

            <motion.div 
              className="relative z-10 w-full flex justify-center"
              initial={{ x: 100, y: 50, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk" 
                alt="Flying Drone"
                className="w-[90%] max-w-[600px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-125"
              />
            </motion.div>
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
            <button className="mt-8 self-start border border-tertiary text-tertiary font-headline font-bold uppercase tracking-widest px-8 py-3 hover:bg-tertiary/10 transition-colors">
              View Technical Specs
            </button>
          </div>
          <div className="relative h-[400px] w-full bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-4 flex flex-col justify-between">
            <img alt="Technology Interface" className="absolute inset-0 w-full h-full object-cover opacity-30" data-alt="Abstract macro shot of a complex circuit board with glowing blue and silver traces, conveying high-tech processing power" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyr-vunu6g6_zGpxg1tw9l1w4_KXS72fzL0O-fnZGOE0od4K3Ck1pOPMau4tzY3jFdz5HX8tWrri6z9JZgegenB2m8v84VO3r2EInerH8C3txch_G51ahizQL2CtqBX7DPsMAazywno8clvY3JFKoNa_yuku_cKE3IzHtDleK9hwgf2Dj6KSopbz4Slgmz9onKG-NVg4jk6lZGjI-yc4uryc-9pGS7SyvueTFfkTc76cJyzpgQoayyqWnxw7Z0hUaOVHTs5UmIgZw" />
            <div className="flex justify-between items-center z-10 border-b border-outline-variant/30 pb-2">
              <span className="font-label text-xs text-on-surface-variant font-mono">SYS_STATUS: OPTIMAL</span>
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
  );
}
