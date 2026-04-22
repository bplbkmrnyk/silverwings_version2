export default function News() {
  return (
    <main className="flex-grow pt-40 pb-24">
      {/* Hero Section */}
      <section className="px-10 max-w-[1600px] mx-auto mb-20 relative">
        {/* Data Overlay Graphic */}
        <div className="absolute top-0 right-10 text-on-surface-variant font-mono text-[10px] tracking-widest opacity-40 text-right leading-tight hidden md:block">
          SYS.DIR // INSIGHTS_PROTOCOL<br/>
          GEO.COORD: 45.4215° N, 75.6972° W<br/>
          SEC_LVL: UNCLASSIFIED
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-6 uppercase">
          Tactical <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-on-primary-container">Intelligence</span>
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-lg leading-relaxed border-l-2 border-outline-variant/30 pl-6">
          Unfiltered strategic updates, global security analysis, and critical milestones from the forefront of modern defense engineering.
        </p>
      </section>

      {/* Global Intelligence Updates */}
      <section className="px-10 max-w-[1600px] mx-auto mb-32">
        <div className="flex items-end justify-between mb-12 border-b border-outline-variant/15 pb-4">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-on-surface">Global Intelligence Updates</h2>
          <span className="font-mono text-xs text-tertiary tracking-widest uppercase">Live Feed // Active</span>
        </div>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Lead Article (Large Left) */}
          <article className="lg:col-span-8 bg-surface-container-high ambient-shadow relative overflow-hidden group cursor-pointer tactical-grid">
            <div className="h-[400px] w-full overflow-hidden relative">
              {/* Abstract/Ghost Image placeholder - replace with actual img tag but following data-alt constraints */}
              <div className="absolute inset-0 bg-surface-container-highest mix-blend-overlay z-10 transition-opacity group-hover:opacity-50"></div>
              <img alt="Lead Article Image" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1v1334Nsbl0VyrGQNg8oh3fyh9UJowUzC7WAuQPppEog0hdbaW18VXDDkMqooPreehoreheK8AvVh-DnMvfkvU041JuBnjppP0nepGg2r3zYqwg_gUAuLdMf_7ybiUaoMm1CManR79c5k7EfpaoF0WWTs28G4lCZGsujrYzeIg0DaOPx_RHDCz9d6eENCMQC85iRQqHMBpH6GK4ye-_bpTDGdIaBx9bm2T5kR8HfHUlmmWjhRFya6jugAPwVxCKLh1TOhPK9aSjw"/>
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 z-20 bg-surface/90 backdrop-blur-md px-4 py-2 border border-outline-variant/30">
                <span className="font-mono text-[10px] text-tertiary tracking-widest uppercase">Priority Brief</span>
              </div>
            </div>
            <div className="p-10 relative z-20 bg-gradient-to-t from-surface-container-high via-surface-container-high to-transparent -mt-20">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs text-on-surface-variant tracking-widest">24.10.2023</span>
                <span className="w-1 h-1 bg-tertiary rounded-none"></span>
                <span className="font-label text-xs text-primary font-bold uppercase tracking-wider">Aeronautics</span>
              </div>
              <h3 className="font-headline text-4xl font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                Next-Gen Stealth Capabilities Deployed in Operation Vanguard
              </h3>
              <p className="font-body text-on-surface-variant line-clamp-2">
                Silver Wings Defence successfully demonstrated advanced radar-evasion technologies during the latest allied joint exercises, setting a new paradigm for contested airspace operations.
              </p>
            </div>
          </article>
          {/* Sidebar Articles (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <article className="bg-surface-container flex-grow p-8 ambient-shadow hover:bg-surface-container-high transition-colors cursor-pointer border-t border-outline-variant/15 relative">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-outline-variant text-sm">open_in_new</span>
              </div>
              <span className="font-mono text-[10px] text-on-surface-variant tracking-widest mb-3 block">22.10.2023 // CYBER</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-3 leading-snug">
                Zero-Day Threat Neutralization Protocol Activated
              </h4>
              <p className="font-body text-sm text-on-surface-variant line-clamp-3">
                Our cybersecurity division intercepted a highly sophisticated state-sponsored intrusion attempt, securing critical grid infrastructure without operational downtime.
              </p>
            </article>
            <article className="bg-surface-container flex-grow p-8 ambient-shadow hover:bg-surface-container-high transition-colors cursor-pointer border-t border-outline-variant/15 relative">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-outline-variant text-sm">lock</span>
              </div>
              <span className="font-mono text-[10px] text-on-surface-variant tracking-widest mb-3 block">18.10.2023 // LOGISTICS</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-3 leading-snug">
                Strategic Supply Chain Hardening Complete
              </h4>
              <p className="font-body text-sm text-on-surface-variant line-clamp-3">
                Implementing decentralized manufacturing nodes to ensure 100% operational readiness despite global supply chain friction points.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Company Milestones (Tonal Shift) */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden border-t border-outline-variant/10">
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-headline font-black text-surface-container-highest/20 select-none pointer-events-none whitespace-nowrap overflow-hidden">
          MILESTONES
        </div>
        <div className="px-10 max-w-[1600px] mx-auto relative z-10">
          <div className="mb-16 max-w-xl">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface mb-4">Company Milestones</h2>
            <p className="font-body text-on-surface-variant text-lg">A chronicle of tactical dominance and engineering supremacy.</p>
          </div>
          {/* Staggered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-surface p-8 relative tactical-grid group mt-0 lg:mt-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="font-mono text-4xl font-bold text-surface-container-highest mb-4 group-hover:text-primary-container transition-colors">2023</div>
              <h5 className="font-headline text-xl font-bold text-on-surface mb-2">Project Obsidian Launch</h5>
              <p className="font-body text-sm text-on-surface-variant">Deployment of autonomous surveillance drones in extreme-weather environments.</p>
            </div>
            <div className="bg-surface p-8 relative tactical-grid group mt-0 lg:mt-24">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="font-mono text-4xl font-bold text-surface-container-highest mb-4 group-hover:text-primary-container transition-colors">2021</div>
              <h5 className="font-headline text-xl font-bold text-on-surface mb-2">Quantum Encryption Integration</h5>
              <p className="font-body text-sm text-on-surface-variant">First defense contractor to fully integrate quantum-resistant algorithms into standard comms arrays.</p>
            </div>
            <div className="bg-surface p-8 relative tactical-grid group mt-0">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-outline to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="font-mono text-4xl font-bold text-surface-container-highest mb-4 group-hover:text-primary-container transition-colors">2018</div>
              <h5 className="font-headline text-xl font-bold text-on-surface mb-2">Founding Directive</h5>
              <p className="font-body text-sm text-on-surface-variant">Silver Wings established with a singular mission: Uncompromising tactical superiority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Intelligence Feed (Newsletter) */}
      <section className="px-10 max-w-[1600px] mx-auto mt-32 mb-12">
        <div className="bg-surface-container-high ambient-shadow relative overflow-hidden flex flex-col md:flex-row items-center p-0">
          {/* Graphic Side */}
          <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-surface-container-lowest self-stretch">
            <img alt="Server Room" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsxZFoNH20xSLvEM2BzoMjQuN4-ms4YY2YLQIJzYhyMlw4TBavoTzOwQ-YgCG812NmXzQsWM4hffWOjwxTWVl6Wv1D211NMxHAS_11uUmBPmhQ9c5taW52_CKhq9dZl_6fxYyWfi6-Pg9hNYrUJtYhAOgmBkfWGll76HAU199UMkwykg71K7YSCaQxtxKr3FmWugl6K9ypKemNAhf1vo3jLnecschyLll2-rIdkzOUTEkjnWNZUCZJNZaP4C7dO10pxRtFmqbwL8"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high/10 to-surface-container-high"></div>
            <div className="absolute bottom-8 left-8 text-tertiary flex items-center gap-2">
              <span className="material-symbols-outlined icon-fill">radar</span>
              <span className="font-mono text-xs tracking-widest uppercase">Secure Channel</span>
            </div>
          </div>
          {/* Form Side */}
          <div className="w-full md:w-7/12 p-12 md:p-20 relative z-10 bg-surface-container-high/80 backdrop-blur-md">
            <h3 className="font-headline text-3xl font-bold uppercase text-on-surface mb-4">Tactical Intelligence Feed</h3>
            <p className="font-body text-on-surface-variant mb-8 max-w-md">
              Subscribe to receive unclassified briefings, technological whitepapers, and operational insights directly to your terminal.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input className="tactical-input w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface font-mono text-sm px-4 py-4 placeholder:text-outline-variant/60 focus:ring-0 transition-all focus:bg-primary/5 focus:outline-none" placeholder="ENTER OPERATIVE DESIGNATION (EMAIL)" type="email"/>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant text-sm">mail</span>
              </div>
              <button className="bg-gradient-to-br from-primary to-on-primary-container text-on-primary uppercase font-bold tracking-widest text-sm px-8 py-4 hover:brightness-110 transition-all ambient-shadow flex items-center justify-center gap-2 whitespace-nowrap" type="button">
                Initialize <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
            <p className="font-mono text-[10px] text-outline mt-4 tracking-widest uppercase">Transmission encrypted via 256-bit AES.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
