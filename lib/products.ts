export interface Product {
  id: string;
  name: string;
  type: string;
  specs: string;
  image?: string;
}

// Temporary static data simulating a backend CMS database
const staticProducts: Product[] = [
  {
    id: '01', name: 'Sourya 1000 Hexa', type: 'Hexacopter',
    image: '/images/SILVERWINGSIMAGES/SOURYA 1000 HEXA.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: Hexacopter

> Standard take-off weight: 8 KG
> Max Payload weight: 1 KG
> Cruise Speed: 12 m/s

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '02', name: 'Sourya Logistic 10', type: 'Logistic Drone',
    image: '/images/SILVERWINGSIMAGES/SOURYA LOGISTIC 10 KG.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: Logistic Drone

> Max Take-off Weight: 25 KG
> Wheelbase: 1404 mm
> Propeller Size: 23×8.8 inch

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '03', name: 'CP 15', type: 'UAV',
    image: '/images/SILVERWINGSIMAGES/CP15.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: UAV

> Standard take-off weight: 15 KG
> Max Payload weight: 5 KG
> Cruise Speed: 70 Km/H

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '04', name: 'Sourya 550 Hexacopter', type: 'Hexacopter',
    image: '/images/SILVERWINGSIMAGES/SOURYA 550 HEXACOPTER.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: Hexacopter

> Standard take-off weight: 1.5 KG
> Max Payload weight: 800 gm
> Cruise Speed: 20 m/s

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '05', name: 'Sourya 1718 fixed wings', type: 'Fixed Wing',
    image: '/images/SILVERWINGSIMAGES/SOURYA 1718.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: Fixed Wing

> Max Payload weight: 2500–3500 gms
> Cruise Speed: 70 km/h
> Flight Time: 50 minutes

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '06', name: 'CP 25', type: 'UAV',
    image: '/images/SILVERWINGSIMAGES/CP25.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: UAV

> Standard take-off weight: 30 KG
> Max Payload weight: 10 KG
> Cruise Speed: 72 Km/H

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '07', name: 'Sourya 680 Quad', type: 'Quadcopter',
    image: '/images/SILVERWINGSIMAGES/SOURYA 680 QUAD.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: Quadcopter

> Standard take-off weight: 5 KG
> Max Payload weight: 500 gms
> Cruise Speed: 20 m/s

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '08', name: 'Sourya 500 Quad', type: 'Quadcopter',
    image: '/images/SILVERWINGSIMAGES/SOURYA 500 QUAD.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: Quadcopter

> Standard take-off weight: 500 gms
> Max Payload weight: 500 gms
> Cruise Speed: 20 m/s

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '09', name: 'CP7 VTOL fixed wings', type: 'VTOL Fixed Wing',
    image: '/images/SILVERWINGSIMAGES/CP7.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: VTOL Fixed Wing

> Standard take-off weight: 8 KG
> Max Payload weight: 1.3 KG
> Cruise Speed: 70 Km/h

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '10', name: 'CP 50E', type: 'UAV',
    image: '/images/SILVERWINGSIMAGES/CP50E.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: UAV

> Standard take-off weight: 50 KG
> Max Payload weight: 15 KG
> Cruise Speed: 82 Km/H

[ VIEW ALL SPECS → ]`,
  },
  {
    id: '11', name: 'CP 50H', type: 'UAV',
    image: '/images/SILVERWINGSIMAGES/CP50 H.jpeg',
    specs: `CLASSIFICATION: RESTRICTED
TYPE: UAV

> Standard take-off weight: 50 KG
> Max Payload weight: 15 KG
> Cruise Speed: 80 Km/H

[ VIEW ALL SPECS → ]`,
  },
];

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
