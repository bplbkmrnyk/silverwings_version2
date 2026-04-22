import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#191c1f] text-[#afc8f0] font-['Inter'] text-sm tracking-widest uppercase rounded-none w-full border-t border-[#43474e]/15 grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16">
      <div className="flex flex-col justify-between h-full gap-8">
        <div className="text-xl font-bold text-[#e1e2e7] font-headline">
          SILVER WINGS DEFENCE
        </div>
        <div className="text-[#e1e2e7]/60 text-xs mt-auto">
          © 2024 SILVER WINGS DEFENCE. TACTICAL PRECISION SECURED.
        </div>
      </div>
      <div className="flex flex-col md:items-end gap-4">
        <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Privacy Policy</Link>
        <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Terms of Service</Link>
        <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Careers</Link>
        <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Download Brochures</Link>
        <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Partner Portal</Link>
      </div>
    </footer>
  );
}
