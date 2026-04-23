"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111417]/90 backdrop-blur-md px-6 md:px-10 py-4 md:py-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center max-w-[1600px] mx-auto">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-[#afc8f0] font-headline uppercase relative z-50">
          SILVER WINGS<span className="hidden sm:inline"> DEFENCE</span>
        </Link>
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Home</Link>
          <Link href="/about-us" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">About</Link>
          <Link href="/services" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Services</Link>
          <Link href="/products" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Products</Link>
          <Link href="/news" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">News</Link>
          <Link href="/career" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Career</Link>
          <Link href="/contact" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Contact</Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6 relative z-50">
          <button className="hidden sm:block bg-gradient-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-4 md:px-6 py-2 text-xs md:text-sm hover:opacity-90 transition-opacity">
            CLIENT LOGIN
          </button>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary transition-colors">shield_locked</span>
          <button 
            className="lg:hidden text-primary ml-2 flex items-center" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#111417] z-40 flex flex-col items-center justify-center gap-8 lg:hidden animate-in fade-in duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Home</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Services</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Products</Link>
          <Link href="/news" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">News</Link>
          <Link href="/career" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Career</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Contact</Link>
          <button className="mt-8 bg-gradient-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-8 py-4 text-sm hover:opacity-90 transition-opacity w-3/4 max-w-sm">
            CLIENT LOGIN
          </button>
        </div>
      )}
    </nav>
  );
}
