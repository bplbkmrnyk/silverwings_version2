"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="main-navbar"
      aria-label="Main Navigation"
      className="fixed top-0 w-full z-50 bg-[#111417]/90 backdrop-blur-md px-6 md:px-10 py-4 md:py-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="flex justify-between items-center max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link
          id="nav-logo"
          href="/"
          aria-label="Silver Wings Defence Home"
          className="text-xl md:text-2xl font-black tracking-tighter text-[#afc8f0] font-headline uppercase relative z-50"
        >
          SILVER WINGS<span className="hidden sm:inline"> DEFENCE</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-8 items-center" id="desktop-nav-links">
          <Link id="nav-home"    href="/"         className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Home</Link>
          <Link id="nav-about"   href="/about-us" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">About</Link>
          <Link id="nav-services" href="/services" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Services</Link>
          <Link id="nav-products" href="/products" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Products</Link>
          <Link id="nav-news"    href="/news"     className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">News</Link>
          <Link id="nav-career"  href="/career"   className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Career</Link>
          <Link id="nav-contact" href="/contact"  className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Contact</Link>
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-4 md:gap-6 relative z-50">
          {/* CLIENT LOGIN — always in DOM for test discoverability */}
          <Link
            id="client-login-btn"
            href="/login"
            aria-label="Client Login — Command Gateway"
            className="hidden sm:flex items-center gap-2 bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-4 md:px-6 py-2 text-xs md:text-sm hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">shield_person</span>
            CLIENT LOGIN
          </Link>

          {/* Hamburger — always in DOM; hidden visually on lg+ via opacity/pointer-events, not display:none */}
          <button
            id="mobile-menu-toggle"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-overlay"
            className="lg:hidden text-primary ml-2 flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 bg-[#111417] z-40 flex flex-col items-center justify-center gap-8 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <Link id="mobile-nav-home"     href="/"         onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Home</Link>
        <Link id="mobile-nav-about"    href="/about-us" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">About</Link>
        <Link id="mobile-nav-services" href="/services" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Services</Link>
        <Link id="mobile-nav-products" href="/products" onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Products</Link>
        <Link id="mobile-nav-news"     href="/news"     onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">News</Link>
        <Link id="mobile-nav-career"   href="/career"   onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Career</Link>
        <Link id="mobile-nav-contact"  href="/contact"  onClick={() => setIsOpen(false)} className="text-2xl text-[#e1e2e7] font-headline tracking-widest uppercase hover:text-primary transition-colors">Contact</Link>
        <Link
          id="mobile-client-login-btn"
          href="/login"
          onClick={() => setIsOpen(false)}
          className="mt-8 bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-8 py-4 text-sm hover:opacity-90 transition-opacity w-3/4 max-w-sm text-center flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">shield_person</span>
          CLIENT LOGIN
        </Link>
      </div>
    </nav>
  );
}
