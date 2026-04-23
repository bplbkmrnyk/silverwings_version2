import ProductGrid from '@/components/ProductGrid';
import { getProducts } from '@/lib/products';

export default async function Products() {
  const products = await getProducts();

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end border-b ghost-border pb-8">
          <div className="max-w-2xl">
            <p className="font-label text-tertiary uppercase tracking-widest text-sm mb-4">Tactical Inventory</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">ADVANCED<br/>SYSTEMS</h1>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm text-right">
            <p className="text-on-surface-variant font-body text-sm">Deployment-ready hardware engineered for asymmetric dominance. All systems meet or exceed MIL-SPEC-810G protocols.</p>
          </div>
        </div>
      </header>
      
      {/* Dynamic Product Grid */}
      <ProductGrid products={products} />
    </main>
  );
}
