export interface Product {
  id: string;
  name: string;
  type: string;
  specs: string;
  image?: string;
}

// Temporary static data simulating a backend CMS database
const staticProducts: Product[] = [
  { id: '01', name: 'Sourya 1000 Hexa', type: 'Hexacopter', image: '/images/SILVERWINGSIMAGES/SOURYA 1000 HEXA.jpeg' },
  { id: '03', name: 'CP 15', type: 'UAV', image: '/images/SILVERWINGSIMAGES/CP15.jpeg' },
  { id: '07', name: 'Sourya 680 Quad', type: 'Quadcopter', image: '/images/SILVERWINGSIMAGES/SOURYA 680 QUAD.jpeg' },
  { id: '05', name: 'Sourya 1718 fixed wings', type: 'Fixed Wing', image: '/images/SILVERWINGSIMAGES/SOURYA 1718.jpeg' },
  { id: '10', name: 'CP 50E', type: 'UAV', image: '/images/SILVERWINGSIMAGES/CP50E.jpeg' },
  { id: '04', name: 'Sourya 550 Hexacopter', type: 'Hexacopter', image: '/images/SILVERWINGSIMAGES/SOURYA 550 HEXACOPTER.jpeg' },
  { id: '02', name: 'Sourya Logistic 10', type: 'Logistic Drone', image: '/images/SILVERWINGSIMAGES/SOURYA LOGISTIC 10 KG.jpeg' },
  { id: '11', name: 'CP 50H', type: 'UAV', image: '/images/SILVERWINGSIMAGES/CP50 H.jpeg' },
  { id: '08', name: 'Sourya 500 Quad', type: 'Quadcopter', image: '/images/SILVERWINGSIMAGES/SOURYA 500 QUAD.jpeg' },
  { id: '09', name: 'CP7 VTOL fixed wings', type: 'VTOL Fixed Wing', image: '/images/SILVERWINGSIMAGES/CP7.jpeg' },
  { id: '06', name: 'CP 25', type: 'UAV', image: '/images/SILVERWINGSIMAGES/CP25.jpeg' },
].map(p => ({
  ...p,
  specs: `CLASSIFICATION: RESTRICTED\nTYPE: ${p.type}\n\n> Standard take-off weight: 8 KG\n> Max Payload weight: 1 KG\n> Cruise Speed: 12 m/s\n\n[ AWAITING DATAPACK UPLOAD... ]`,
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
