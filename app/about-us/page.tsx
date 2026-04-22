export default function AboutUs() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto flex flex-col gap-32">
      {/* Hero Section: Securing the Future */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 flex flex-col gap-8 z-10">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-tertiary">Initiative Overview</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
            SECURING THE FUTURE<br />
            <span className="text-primary-fixed-dim">THROUGH AERIAL SUPERIORITY.</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Silver Wings Defence was forged in the crucible of modern geopolitical complexity. We engineer autonomous Unmanned Aerial Vehicles (UAVs) and advanced surveillance matrices that provide uncompromised situational awareness for mission-critical operations.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-surface-container-high px-6 py-4 flex flex-col gap-1 border-l-2 border-tertiary">
              <span className="font-headline text-3xl font-bold text-on-surface">2010</span>
              <span className="font-label text-xs uppercase text-on-surface-variant tracking-wider">Foundation Year</span>
            </div>
            <div className="bg-surface-container-high px-6 py-4 flex flex-col gap-1 border-l-2 border-primary">
              <span className="font-headline text-3xl font-bold text-on-surface">Mk-VII</span>
              <span className="font-label text-xs uppercase text-on-surface-variant tracking-wider">Current Gen Platform</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative h-[500px] w-full bg-surface-container-low overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 grid-overlay z-10 opacity-20"></div>
          <img alt="Tactical drone silhouette" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" data-alt="High-contrast silhouette of an advanced military drone against a dark, cloudy sky, cold blue cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkAuqBBI9XR1dXIBcybzR2fytTQYE-Iv4bqYJLDUgcrdqDnNixgHzHvZZNZ7IoGHYpEVt0oXEX4BmPySwidDia0lxUgUNaw_Vy635cM2AE9_cuMVXWFW8wSHRoTe__lhtEtUL7lwJs0c6syZVQw0BcqdNG_OKzuJPkiCVXYJsr-HsWzhwcjSW6iaimit5ifDRCrrc-f58ah8MP1EzRF-qGXHUZoqeEIiYQtT46qlM1-stA2ww5p0Ru8_FzaUJ4CjpOFkg9lCp5V70" />
          <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
            <span className="font-headline text-sm text-tertiary tracking-widest uppercase">Asset Confirmed</span>
            <span className="font-label text-xs text-on-surface-variant font-mono">LAT: 45.4215 N | LON: 75.6972 W</span>
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
