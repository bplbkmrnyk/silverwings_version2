"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  // ROW 1
  {
    id: "01",
    title: "Enter a thriving ecosystem of defense technologies.",
    description: "Become one of the strategic partners seamlessly integrating into our classified networks, tactical platforms, and aerospace systems.",
    type: "text",
    col: 1, // Left column
  },
  {
    id: "img1",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVILf8rqEoLMbS16e7N8SxWFZRXxrQhsiuXs_AgYbj5lTuVTKtoWM75RUsMDW7QKZ1b4OI0DkmIrzxwcuX15PIWl94eV4exkkywpTVGoDSdapljBrrtXxto9oeSnBLlkl6coghopAnrfbYtoN4ipqTC7sb9GRB8qS8eesMkgVuM2umwIN1e1ajeY4MW1aVlA7_hYV8wYCh-9o9X1zJ89rkhHUWRg78TL7S0RlK2aJzKUXuvNceTD-VMktfuqI3GdX9yoiM7eN8-Qw",
    type: "image",
    col: 2, // Center column
  },
  {
    id: "02",
    title: "Receive strategic support for rapid deployment.",
    description: "Early-stage projects can apply for clearance. Building something big? We provide the infrastructure and grants.",
    type: "text",
    col: 3, // Right column
  },
  
  // ROW 2
  {
    id: "03",
    title: "Participate in numerous strategic initiatives.",
    description: "Access our permissionless developer platform and start launching your tactical applications right away.",
    type: "text",
    col: 1, // Left column
  },
  {
    id: "img2",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop", 
    type: "image",
    col: 2, // Center column
  },
  {
    id: "04",
    title: "Engage in our secure events & community.",
    description: "Connect with industry leaders, defense contractors, and specialized engineering teams globally.",
    type: "text",
    col: 3, // Right column
  },
];

function CircularCard({ card }: { card: typeof cards[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scrubbed animation tied exactly to the window scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start animation when the top of the grid cell enters the bottom 10% of the screen.
    // End animation when the center of the grid cell reaches the exact center (50%) of the screen.
    offset: ["start 95%", "center 50%"]
  });

  // Calculate the "Fanning" offsets based on exactly how rly.serious.business does it:
  // ALL cards translate up from the bottom (yOffset).
  // Left column rotates counter-clockwise and translates left.
  // Center column has NO rotation, but scales up heavily from 0.5.
  // Right column rotates clockwise and translates right.
  
  let xOffset = 0;
  let yOffset = 250; // Every card starts physically 250px lower
  let rotateOffset = 0;
  let initialScale = 0.8;

  if (card.col === 1) {
    xOffset = -150; // Slides in from left
    rotateOffset = -25; // Tilted counter-clockwise
  } else if (card.col === 2) {
    xOffset = 0; // Centers slide straight up
    rotateOffset = 0; // Centers NEVER rotate
    initialScale = 0.5; // Centers have a dramatic zoom-in effect
  } else if (card.col === 3) {
    xOffset = 150; // Slides in from right
    rotateOffset = 25; // Tilted clockwise
  }

  // Maps 0-1 scroll progress to physical CSS transforms
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [initialScale, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [rotateOffset, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x, y, rotate }}
      className="relative w-[380px] h-[380px] shrink-0"
    >
      <div 
        className="w-full h-full border border-white/10 bg-[#111111] overflow-visible flex flex-col justify-center items-center p-10 text-center relative group rounded-full hover:border-white/30 transition-colors duration-500 tactical-shadow"
      >
        
        {card.type === "image" ? (
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img src={card.image} alt="Defense Technology" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <h3 className="text-[22px] font-headline font-bold text-white mb-4 leading-snug max-w-[90%]">
              {card.title}
            </h3>
            <p className="text-[14px] text-gray-400 font-body leading-relaxed max-w-[85%]">
              {card.description}
            </p>
          </div>
        )}

        {!card.id.startsWith('img') && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-[#a3d900] flex items-center justify-center bg-[#0a0a0a] z-20 rounded-full">
            <span className="text-[11px] font-mono text-[#a3d900] font-bold tracking-wider">{card.id}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function CircularCardsSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="relative w-full max-w-[1250px] mx-auto px-6">
        
        {/* Horizontal connecting lines */}
        <div className="absolute top-[380px] left-0 right-0 h-[1px] bg-white/10 z-0 hidden md:block"></div>
        <div className="absolute top-[810px] left-0 right-0 h-[1px] bg-white/10 z-0 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 justify-items-center items-center relative z-10">
          {cards.map((card) => (
            <CircularCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
