import PageBackground from "@/components/PageBackground";

export default function Services() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto relative overflow-hidden">
      <PageBackground src="/images/backgrounds/services_bg.png" alt="Services Background" opacity={0.4} />
      {/* Header */}
      <header className="mb-20">
        <p className="text-tertiary font-label text-sm tracking-widest uppercase mb-4 pl-4 border-l-2 border-tertiary">Operational Capabilities</p>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-6">TACTICAL SERVICES</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed border-l border-outline-variant/30 pl-6 py-2">
          Precision-engineered solutions for modern defense scenarios. Deploying advanced intelligence, autonomous systems, and strategic training to secure critical infrastructure and battlefield supremacy.
        </p>
      </header>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {/* Service 1: Defence Solutions */}
        <article className="bg-surface-container-low group hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden flex flex-col h-full ring-1 ring-outline-variant/15">
          <div className="absolute inset-0 grid-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute top-0 right-0 p-4 opacity-50 text-xs font-mono text-on-surface-variant z-10">SRV-01 // UAV_SYS</div>
          <div className="h-64 relative bg-surface-container-lowest overflow-hidden border-b border-surface-container">
            <img alt="Military drone flying against a moody sky" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 opacity-80 mix-blend-luminosity" data-alt="high contrast low angle shot of military reconnaissance drone in flight against dark stormy sky, technical aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3ziaS9025brJf73yS-4xAUTttOuY8gjCGwNTqv9jTy60ekk5L40YMOdiOJcbZaPlmfOerju9ujQouWXZouZyj_sES_drOO2RUfeWTX6AmbKWKvacynfYaISsWgpeF7ovnNzlINf1ilGusOf94mzuENog0PbJMg-CoEwH2-sh4zpK9wAktU4SqUgayy6kScU281SOBl1tdO5l5aeXpGF3rsW99dQYa15D6YjhV1RB-Tmlew8P3UTc1fgyG-6Yu2AGWEhl2TUr0yJ0"/>
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 lg:p-10 grow flex flex-col relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center ring-1 ring-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-2xl">flight_takeoff</span>
              </div>
              <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight uppercase">Defence Solutions</h2>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 grow">
              Deployment of advanced Unmanned Aerial Vehicles (UAVs) and autonomous tactical systems. Engineered for high-threat environments, providing real-time battlefield reconnaissance and precision strike capabilities.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest hover:text-tertiary transition-colors w-max group/link mt-auto" href="#">
              Learn More 
              <span className="material-symbols-outlined text-lg transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="h-1 w-full bg-surface-container group-hover:bg-tertiary transition-colors duration-500"></div>
        </article>
        
        {/* Service 2: Security Systems */}
        <article className="bg-surface-container-low group hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden flex flex-col h-full ring-1 ring-outline-variant/15">
          <div className="absolute inset-0 grid-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute top-0 right-0 p-4 opacity-50 text-xs font-mono text-on-surface-variant z-10">SRV-02 // BRD_MON</div>
          <div className="h-64 relative bg-surface-container-lowest overflow-hidden border-b border-surface-container">
            <img alt="Server room with green lights" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 opacity-80 mix-blend-luminosity" data-alt="dark server room illuminated by sterile green LEDs, high tech surveillance data center, sharp metallic textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnF4Ib0AS_2N-Z7J9KmufBdkxFI3fJ8fcTGKNCCQPwbyvnd40rfObocsQTk97DaFoFsjRypn5HxaTR2Ix4s9L3kA89ngL5p-bn5eNvinwuTWGlCzSjzzCbptwQZ_eGpiHkY3IFK8022T0uXvcNIQPQJvd-7TO5hd7U2OJg_RkfWFpJ8GzqPtUjNeZYZRh0McqKE0bAb3VXLUiPEoSSi2gWSvb8pTplDQvZCr4BjzbVFqmCgzB-4TPlEguTCHsG636q3h_swKPcuiU"/>
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 lg:p-10 grow flex flex-col relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center ring-1 ring-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-2xl">radar</span>
              </div>
              <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight uppercase">Security Systems</h2>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 grow">
              Comprehensive border monitoring and persistent aerial surveillance networks. Integrating multi-spectral sensors and AI-driven anomaly detection for impenetrable perimeter defense.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest hover:text-tertiary transition-colors w-max group/link mt-auto" href="#">
              Learn More 
              <span className="material-symbols-outlined text-lg transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="h-1 w-full bg-surface-container group-hover:bg-tertiary transition-colors duration-500"></div>
        </article>
        
        {/* Service 3: Cybersecurity */}
        <article className="bg-surface-container-low group hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden flex flex-col h-full ring-1 ring-outline-variant/15 mt-8 md:mt-0">
          <div className="absolute inset-0 grid-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute top-0 right-0 p-4 opacity-50 text-xs font-mono text-on-surface-variant z-10">SRV-03 // CYB_INT</div>
          <div className="h-64 relative bg-surface-container-lowest overflow-hidden border-b border-surface-container">
            <img alt="Matrix style code on a screen" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 opacity-80 mix-blend-luminosity" data-alt="abstract digital code cascading on black screen, cyber warfare aesthetic, cool blue and green tones, sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCViZ5qM-Dbp5zCuw3dDuc9sA4AWqyQjIdDgTqvKcOEOXUzWtot8pV7HrF2Lovlp50nKs_hxFgGhVM9766z04ybclcDJj7ty1DSGI8WaiWwKE0zIF-aF8Qhuqb-zEko7n4CKZ_pRDFkU3us8m8H9pBNyZ7ARjZVJODFWc53mxi_2E4N9J97f6dTPnfUgRRWg3iP6j-PMbltu4qjCfQvHklUNmb3SrWDn9oZ5M_2evVbswBJc4xyezFK01lVacu8DC172OUTKvtEkAM"/>
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 lg:p-10 grow flex flex-col relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center ring-1 ring-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-2xl">security</span>
              </div>
              <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight uppercase">Cybersecurity &amp; Intelligence</h2>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 grow">
              Hardened protection for strategic digital assets. Offensive and defensive cyber operations, threat hunting, and encrypted communications infrastructure designed to withstand state-sponsored attacks.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest hover:text-tertiary transition-colors w-max group/link mt-auto" href="#">
              Learn More 
              <span className="material-symbols-outlined text-lg transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="h-1 w-full bg-surface-container group-hover:bg-tertiary transition-colors duration-500"></div>
        </article>
        
        {/* Service 4: Training */}
        <article className="bg-surface-container-low group hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden flex flex-col h-full ring-1 ring-outline-variant/15 mt-8 md:mt-0">
          <div className="absolute inset-0 grid-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute top-0 right-0 p-4 opacity-50 text-xs font-mono text-on-surface-variant z-10">SRV-04 // STR_TRN</div>
          <div className="h-64 relative bg-surface-container-lowest overflow-hidden border-b border-surface-container">
            <img alt="Military personnel looking at a tactical map" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 opacity-80 mix-blend-luminosity" data-alt="silhouette of military personnel reviewing glowing tactical holographic map in dark command center, dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4lxysW_srFUa6hCWWqO2V7aGIHpgvq8AitWYkB55PBgcF3ohRnWZie9tn4qMa-QrBqBdS0N3h1YRJDLyxClkLsHM-6EYucm09xEeubJIixISm6Nra39FwxSvbuqQzWAD7LOsvmxFkBTXdJ8l9y_HHYQ1Ku1Fw1-hTZJStUUlZwOzzUYBsHU6qA9xEhSFKcSame_AxrZpgkZ8j6PrBKelfB9_0-Hnb8yJB7QvBxjIDxEHoYc3BBMAhfuaUOzrrD0T80hgTI_GDgQ"/>
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 lg:p-10 grow flex flex-col relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center ring-1 ring-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-2xl">strategy</span>
              </div>
              <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight uppercase">Training &amp; Consulting</h2>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 grow">
              Elite battlefield strategy and advanced system operation training. Equipping personnel with the tactical acumen required to leverage next-generation defense hardware effectively in combat scenarios.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest hover:text-tertiary transition-colors w-max group/link mt-auto" href="#">
              Learn More 
              <span className="material-symbols-outlined text-lg transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="h-1 w-full bg-surface-container group-hover:bg-tertiary transition-colors duration-500"></div>
        </article>
      </div>
      
      {/* Ambient Data Overlay */}
      <div className="fixed bottom-8 right-8 pointer-events-none opacity-30 md:flex flex-col items-end gap-1 font-mono text-[10px] text-primary hidden">
        <div>SYS.STATUS: ONLINE</div>
        <div>NET.SEC: VERIFIED</div>
        <div>OP.MODE: TACTICAL</div>
      </div>
    </main>
  );
}
