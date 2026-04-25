"use client";

import { useState } from "react";

type Category = "company" | "country" | "world";

const NEWS_DATA = {
  company: [
    {
      id: 1,
      date: "24.10.2023",
      tag: "AERONAUTICS",
      title: "Project Obsidian: Next-Gen Stealth Capabilities Unveiled",
      excerpt: "Silver Wings Defence successfully demonstrated advanced radar-evasion technologies for future production lines, setting a new paradigm for contested airspace operations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1v1334Nsbl0VyrGQNg8oh3fyh9UJowUzC7WAuQPppEog0hdbaW18VXDDkMqooPreehoreheK8AvVh-DnMvfkvU041JuBnjppP0nepGg2r3zYqwg_gUAuLdMf_7ybiUaoMm1CManR79c5k7EfpaoF0WWTs28G4lCZGsujrYzeIg0DaOPx_RHDCz9d6eENCMQC85iRQqHMBpH6GK4ye-_bpTDGdIaBx9bm2T5kR8HfHUlmmWjhRFya6jugAPwVxCKLh1TOhPK9aSjw"
    },
    {
      id: 2,
      date: "12.09.2023",
      tag: "INNOVATION",
      title: "New Automated Assembly Lines Increase Production Output by 300%",
      excerpt: "Our recent investment in AI-driven robotic manufacturing has drastically improved turnaround times for autonomous combat drones, ensuring we meet our future production goals ahead of schedule.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbsxZFoNH20xSLvEM2BzoMjQuN4-ms4YY2YLQIJzYhyMlw4TBavoTzOwQ-YgCG812NmXzQsWM4hffWOjwxTWVl6Wv1D211NMxHAS_11uUmBPmhQ9c5taW52_CKhq9dZl_6fxYyWfi6-Pg9hNYrUJtYhAOgmBkfWGll76HAU199UMkwykg71K7YSCaQxtxKr3FmWugl6K9ypKemNAhf1vo3jLnecschyLll2-rIdkzOUTEkjnWNZUCZJNZaP4C7dO10pxRtFmqbwL8"
    }
  ],
  country: [
    {
      id: 3,
      date: "05.11.2023",
      tag: "NATIONAL DEFENSE",
      title: "Silver Wings Secures Major Border Surveillance Contract",
      excerpt: "The Department of Defense has selected our advanced UAV fleet for continuous border monitoring and threat assessment across all national perimeters.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW0fpMimENV0_rPlLRlGF_sXP_9L1lM383Rbqbt-TibSxmznWhCezK72IxrnXozHQ8vHEKZSPjc6F-oSbbZHt-WcEVWk_Gr31YO1EqOYANGqQdFhHWOB4Ux6dmOF3Hf_IT8SWyksxK-tZCeUfhE9RZcsIBaeWy8yTu3Z-xzkyVLgyZdbWHPosWqHl_MfhnIlwqLBrpRfZnR71wX67YVQNn2KqyIBtw4cWKQd7pwaEPnPImG4bIhDCk-GYftvewLl7h3J480CGTVCc"
    },
    {
      id: 4,
      date: "18.10.2023",
      tag: "LOGISTICS",
      title: "Strategic Supply Chain Hardening Complete",
      excerpt: "Implementing decentralized manufacturing nodes across the country to ensure 100% operational readiness despite logistical friction and global supply shortages.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqj_gpLrV2iFNHxA96OovpNNq_upDW4Mik6ZwEDg09SWF4wfwrD6V5lMA05IaT_4EnWMgWAFURztDt5rmylctzsDtzaF-xYgYneFiFKDTPgNIGvxtoQSZcKd8cijya-vCXrcnPfBAfAjP_4JykPPJZC6zh0NeV2pAS__zLUlaqFOHVwsVQXqKa4cr89cMjwO1JU_Xo8Z2lZ6rvLnM_7A0_9wYZJkXipOVrVpWY8OSBq5C6XJ-RbsqCamImVQCvNigvKVsxJydnhxk"
    }
  ],
  world: [
    {
      id: 5,
      date: "01.12.2023",
      tag: "GLOBAL IMPACT",
      title: "Humanitarian Aid Delivered via Silver Wings Logistic Drones",
      excerpt: "In a joint operation with global NGOs, our heavy-lift drones successfully delivered critical medical supplies to inaccessible disaster zones, proving the humanitarian impact of defense technology.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk"
    },
    {
      id: 6,
      date: "22.10.2023",
      tag: "CYBER",
      title: "Zero-Day Threat Neutralization Protocol Activated Worldwide",
      excerpt: "Our cybersecurity division intercepted a highly sophisticated state-sponsored intrusion attempt, protecting critical allied infrastructure networks globally.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbWQYkKdjK3Y7G0l4FGGJIAYZB_Yk-FBSNi0Ef_8DzTO4F34bsVdzdrRugk9qIugJrbSGmHHpRn5CX2osECwJtZOW-jT8vXmoXjkdFXMPY4-SZJJOoapl24QJWTirFdq0hGTtYZzlkHZnhBVXN-gI6AWfENzVbVCEJLqv5zO_SmT5ewzjt2U-qGQHqvkhq5YcXcK3yoOB9b_W_5rEVsY7rkP9oX7GnI73VoRy3ZSrTXXUCHB4XfleJGcTyxBg7HSaIjr00yO9VDN4"
    }
  ]
};

import PageBackground from "@/components/PageBackground";

export default function News() {
  const [activeTab, setActiveTab] = useState<Category>("company");

  return (
    <main className="grow pt-32 pb-24 relative overflow-hidden">
      <PageBackground src="/images/backgrounds/news_bg.png" alt="News Background" opacity={0.4} />
      {/* Hero Section */}
      <section className="px-6 md:px-10 max-w-[1600px] mx-auto mb-16 relative">
        <div className="absolute top-0 right-10 text-on-surface-variant font-mono text-[10px] tracking-widest opacity-40 text-right leading-tight hidden md:block">
          SYS.DIR // INSIGHTS_PROTOCOL<br/>
          GEO.COORD: 45.4215° N, 75.6972° W<br/>
          SEC_LVL: UNCLASSIFIED
        </div>
        <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-on-surface mb-6 uppercase">
          Tactical <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-on-primary-container">Intelligence</span>
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-lg leading-relaxed border-l-2 border-primary/50 pl-6">
          Unfiltered strategic updates, global security analysis, and critical milestones from the forefront of modern defense engineering.
        </p>
      </section>

      {/* Tabs Interface */}
      <section className="px-6 md:px-10 max-w-[1600px] mx-auto mb-20">
        <div className="flex flex-col sm:flex-row gap-2 border-b ghost-border pb-4 mb-12">
          {(['company', 'country', 'world'] as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === tab 
                  ? "text-primary font-bold bg-primary/10" 
                  : "text-on-surface-variant hover:text-white hover:bg-surface-container-high"
              }`}
            >
              {tab} News
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-primary animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content (News Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500" key={activeTab}>
          {NEWS_DATA[activeTab].map((article) => (
            <article key={article.id} className="bg-surface-container-high ambient-shadow relative overflow-hidden group cursor-pointer tactical-grid flex flex-col">
              <div className="h-[300px] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-surface-container-highest mix-blend-overlay z-10 transition-opacity group-hover:opacity-30"></div>
                <img 
                  alt={article.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125" 
                  src={article.image}
                />
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 z-20 bg-surface/90 backdrop-blur-md px-4 py-2 border border-outline-variant/30">
                  <span className="font-mono text-[10px] text-primary tracking-widest uppercase">{article.tag}</span>
                </div>
              </div>
              <div className="p-8 relative z-20 grow flex flex-col justify-between border-t border-primary/20">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-on-surface-variant tracking-widest">{article.date}</span>
                    <span className="w-1 h-1 bg-tertiary rounded-none"></span>
                    <span className="font-label text-[10px] text-tertiary font-bold uppercase tracking-wider">DECRYPTED</span>
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="text-primary font-mono text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Read Full Briefing <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tactical Intelligence Feed (Newsletter) */}
      <section className="px-6 md:px-10 max-w-[1600px] mx-auto mt-20 mb-12">
        <div className="bg-surface-container-high ambient-shadow relative overflow-hidden flex flex-col md:flex-row items-center p-0 border border-outline-variant/10">
          {/* Graphic Side */}
          <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-surface-container-lowest self-stretch">
            <img alt="Server Room" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsxZFoNH20xSLvEM2BzoMjQuN4-ms4YY2YLQIJzYhyMlw4TBavoTzOwQ-YgCG812NmXzQsWM4hffWOjwxTWVl6Wv1D211NMxHAS_11uUmBPmhQ9c5taW52_CKhq9dZl_6fxYyWfi6-Pg9hNYrUJtYhAOgmBkfWGll76HAU199UMkwykg71K7YSCaQxtxKr3FmWugl6K9ypKemNAhf1vo3jLnecschyLll2-rIdkzOUTEkjnWNZUCZJNZaP4C7dO10pxRtFmqbwL8"/>
            <div className="absolute inset-0 bg-linear-to-r from-surface-container-high/10 to-surface-container-high"></div>
            <div className="absolute bottom-8 left-8 text-tertiary flex items-center gap-2">
              <span className="material-symbols-outlined icon-fill">radar</span>
              <span className="font-mono text-xs tracking-widest uppercase">Secure Channel</span>
            </div>
          </div>
          {/* Form Side */}
          <div className="w-full md:w-7/12 p-8 md:p-16 relative z-10 bg-surface-container-high/90 backdrop-blur-md">
            <h3 className="font-headline text-3xl font-bold uppercase text-on-surface mb-4">Tactical Intelligence Feed</h3>
            <p className="font-body text-on-surface-variant mb-8 max-w-md">
              Subscribe to receive unclassified briefings, technological whitepapers, and operational insights directly to your terminal.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative grow">
                <input className="tactical-input w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface font-mono text-sm px-4 py-4 placeholder:text-outline-variant/60 focus:ring-0 transition-all focus:bg-primary/5 focus:outline-none" placeholder="ENTER OPERATIVE DESIGNATION (EMAIL)" type="email"/>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant text-sm">mail</span>
              </div>
              <button className="bg-linear-to-br from-primary to-on-primary-container text-on-primary uppercase font-bold tracking-widest text-sm px-8 py-4 hover:brightness-110 transition-all ambient-shadow flex items-center justify-center gap-2 whitespace-nowrap" type="button">
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
