export interface Product {
  id: string;
  name: string;
  type: string;
  specs: string;
  image?: string;
}

// Temporary static data simulating a backend CMS database
const staticProducts: Product[] = [
  { id: '01', name: 'Sourya 1000 Hexa', type: 'Hexacopter' },
  { id: '02', name: 'Sourya Logistic 10', type: 'Logistic Drone' },
  { id: '03', name: 'CP 15', type: 'UAV' },
  { id: '04', name: 'Sourya 550 Hexacopter', type: 'Hexacopter' },
  { id: '05', name: 'Sourya 1718 fixed wings', type: 'Fixed Wing' },
  { id: '06', name: 'CP 25', type: 'UAV' },
  { id: '07', name: 'Sourya 680 Quad', type: 'Quadcopter' },
  { id: '08', name: 'Sourya 500 Quad', type: 'Quadcopter' },
  { id: '09', name: 'CP7 VTOL fixed wings', type: 'VTOL Fixed Wing' },
  { id: '10', name: 'CP 50E', type: 'UAV' },
  { id: '11', name: 'CP 50H', type: 'UAV' },
].map(p => ({
  ...p,
  specs: `CLASSIFICATION: RESTRICTED\nTYPE: ${p.type}\n\n> PAYLOAD CAPACITY : TBD\n> OPERATIONAL RANGE: TBD\n> MAX ENDURANCE    : TBD\n\n[ AWAITING DATAPACK UPLOAD... ]`,
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk"
}));

/**
 * Fetches all products.
 * Future integration: Replace this implementation with your CMS fetch logic.
 * Example:
 * const res = await fetch('https://your-cms-api.com/products');
 * return res.json();
 */
export async function getProducts(): Promise<Product[]> {
  // Simulating network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticProducts);
    }, 100);
  });
}

/**
 * Fetches a single product by its ID.
 * Future integration: Replace with CMS fetch logic.
 * Example:
 * const res = await fetch(`https://your-cms-api.com/products/${id}`);
 * return res.json();
 */
export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulating network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticProducts.find(p => p.id === id));
    }, 100);
  });
}
