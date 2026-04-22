import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111417]/90 backdrop-blur-md flex justify-between items-center px-10 py-6 max-w-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <Link href="/" className="text-2xl font-black tracking-tighter text-[#afc8f0] font-headline uppercase">
        SILVER WINGS DEFENCE
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Home</Link>
        <Link href="/about-us" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">About</Link>
        <Link href="/services" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Services</Link>
        <Link href="/products" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Products</Link>
        <Link href="/news" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">News</Link>
        <Link href="/contact" className="text-[#e1e2e7] font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#afc8f0] transition-all duration-300">Contact</Link>
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-gradient-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-6 py-2 hover:opacity-90 transition-opacity">
          CLIENT LOGIN
        </button>
        <span className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary transition-colors">shield_locked</span>
      </div>
    </nav>
  );
}
