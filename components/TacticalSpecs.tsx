"use client";

import { useState } from 'react';

type Spec = { label: string; value: string };

// Keyed by product ID — each product has its own accurate spec sheet
const specsById: Record<string, Spec[]> = {
  // Sourya 1000 Hexa
  '01': [
    { label: 'Standard take-off weight', value: '8 KG' },
    { label: 'Max Payload weight', value: '1 KG' },
    { label: 'Cruise Speed', value: '12 m/s' },
    { label: 'Max Flight Speed', value: '20 m/s' },
    { label: 'Control radius', value: '2 KM' },
    { label: 'Max climb speed', value: '10 m/s' },
    { label: 'Max Descend Speed', value: '10 m/s' },
    { label: 'Max Altitude AMSL', value: '15000 m' },
    { label: 'Max Wind Resistance', value: 'Level 2' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '30 minutes' },
    { label: 'Flight Distance', value: '7 km / 15 km' },
    { label: 'Aircraft dimensions', value: '32 inch : 16 inch' },
    { label: 'Camera', value: 'HD Video 1920×1080 px' },
  ],

  // Sourya Logistic 10
  '02': [
    { label: 'Stator size', value: '62×15 mm' },
    { label: 'KV Rating', value: '180 rpm/V' },
    { label: 'Motor size', value: '69.4 mm' },
    { label: 'Propeller Size', value: '23×8.8 inch' },
    { label: 'Total Weight', value: '107 gm (for 6 props)' },
    { label: 'ESC', value: '80A FOC' },
    { label: 'Supply Voltage', value: '12 V' },
    { label: 'Max Take-off Weight', value: '25 KG' },
    { label: 'Wheelbase', value: '1404 mm' },
    { label: 'Opening Size', value: '1495×1308×500 mm' },
    { label: 'Size after Folding', value: '945×1308×500 mm' },
    { label: 'Shipping Weight', value: '9.5 KG' },
    { label: 'Shipping Dimensions', value: '72×50×50 cm' },
    { label: 'Motor Model', value: 'Hobbywing Xrotor X6 Plus 2388 / 2480 180 KV' },
  ],

  // CP 15
  '03': [
    { label: 'Standard take-off weight', value: '15 KG' },
    { label: 'Max Payload weight', value: '5 KG' },
    { label: 'Cruise Speed', value: '70 Km/H' },
    { label: 'Max Flight Speed', value: '110 Km/H' },
    { label: 'Control radius', value: '30 KM' },
    { label: 'Max climb speed', value: '4 m/s' },
    { label: 'Max Descend Speed', value: '5 m/s' },
    { label: 'Max Altitude AMSL', value: '4500 m' },
    { label: 'Max Wind Resistance', value: 'Level 6' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '210 minutes' },
    { label: 'Flight Distance', value: '245 km' },
    { label: 'Aircraft dimensions', value: '3378×1500×500 mm' },
    { label: 'Package dimensions', value: '1350×600×450 mm' },
  ],

  // Sourya 550 Hexacopter
  '04': [
    { label: 'Standard take-off weight', value: '1.5 KG' },
    { label: 'Max Payload weight', value: '800 gm' },
    { label: 'Cruise Speed', value: '20 m/s' },
    { label: 'Max Flight Speed', value: '20 m/s' },
    { label: 'Control radius', value: '2 KM' },
    { label: 'Max climb speed', value: '10 m/s' },
    { label: 'Max Descend Speed', value: '10 m/s' },
    { label: 'Max Altitude AMSL', value: '15000 m' },
    { label: 'Max Wind Resistance', value: 'Level 2' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '30 minutes' },
    { label: 'Flight Distance', value: '3 km / 5 km' },
    { label: 'Aircraft dimensions', value: '32 inch : 16 inch' },
    { label: 'Camera', value: 'Nil' },
  ],

  // Sourya 1718 Fixed Wings
  '05': [
    { label: 'Max Payload weight', value: '2500–3500 gms' },
    { label: 'Cruise Speed', value: '70 km/h' },
    { label: 'Max Flight Speed', value: '110 km/h' },
    { label: 'Control radius', value: '10 KM' },
    { label: 'Max climb speed', value: '4 m/s' },
    { label: 'Max Descend Speed', value: '5 m/s' },
    { label: 'Max Altitude AMSL', value: '4000 m' },
    { label: 'Max Wind Resistance', value: 'Level 6' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '50 minutes' },
    { label: 'Flight Distance', value: '30 km' },
    { label: 'Aircraft dimensions', value: 'Wingspan 1718mm / 1100mm' },
    { label: 'Camera', value: 'Nil' },
  ],

  // CP 25
  '06': [
    { label: 'Standard take-off weight', value: '30 KG' },
    { label: 'Max Payload weight', value: '10 KG' },
    { label: 'Cruise Speed', value: '72 Km/H' },
    { label: 'Max Flight Speed', value: '130 Km/H' },
    { label: 'Control radius', value: '30 KM' },
    { label: 'Max climb speed', value: '4 m/s' },
    { label: 'Max Descend Speed', value: '5 m/s' },
    { label: 'Max Altitude AMSL', value: '4200 m' },
    { label: 'Max Wind Resistance', value: 'Level 6' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '240 min (120 min @6.5 kg / 90 min @10 kg)' },
    { label: 'Flight Distance', value: '280 KM' },
    { label: 'Aircraft dimensions', value: '4128×1927×749 mm' },
    { label: 'Package Dimensions', value: '1580×660×760 mm' },
  ],

  // Sourya 680 Quad
  '07': [
    { label: 'Standard take-off weight', value: '5 KG' },
    { label: 'Max Payload weight', value: '500 gms' },
    { label: 'Cruise Speed', value: '20 m/s' },
    { label: 'Max Flight Speed', value: '20 m/s' },
    { label: 'Control radius', value: '2 KM' },
    { label: 'Max climb speed', value: '10 m/s' },
    { label: 'Max Descend Speed', value: '10 m/s' },
    { label: 'Max Altitude AMSL', value: '15000 m' },
    { label: 'Max Wind Resistance', value: 'Level 2' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '30 minutes' },
    { label: 'Flight Distance', value: '3 km / 5 km' },
    { label: 'Aircraft dimensions', value: '32 inch : 16 inch' },
    { label: 'Camera', value: 'Nil' },
  ],

  // Sourya 500 Quad
  '08': [
    { label: 'Standard take-off weight', value: '500 gms' },
    { label: 'Max Payload weight', value: '500 gms' },
    { label: 'Cruise Speed', value: '20 m/s' },
    { label: 'Max Flight Speed', value: '20 m/s' },
    { label: 'Control radius', value: '2 KM' },
    { label: 'Max climb speed', value: '10 m/s' },
    { label: 'Max Descend Speed', value: '10 m/s' },
    { label: 'Max Altitude AMSL', value: '15000 m' },
    { label: 'Max Wind Resistance', value: 'Level 2' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '30 minutes' },
    { label: 'Flight Distance', value: '3 km / 5 km' },
    { label: 'Aircraft dimensions', value: '32 inch : 16 inch' },
    { label: 'Camera', value: 'Nil' },
  ],

  // CP7 VTOL Fixed Wings
  '09': [
    { label: 'Standard take-off weight', value: '8 KG' },
    { label: 'Max Payload weight', value: '1.3 KG' },
    { label: 'Cruise Speed', value: '70 Km/h' },
    { label: 'Max Flight Speed', value: '110 Km/H' },
    { label: 'Control radius', value: '10 KM' },
    { label: 'Max climb speed', value: '4 m/s' },
    { label: 'Max Descend Speed', value: '5 m/s' },
    { label: 'Max Altitude AMSL', value: '4000 m' },
    { label: 'Max Wind Resistance', value: 'Level 6' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '180 minutes' },
    { label: 'Flight Distance', value: '210 km' },
    { label: 'Aircraft dimensions', value: '2400×1150×370 mm' },
    { label: 'Package Dimensions', value: '1350×550×480 mm' },
  ],

  // CP 50E
  '10': [
    { label: 'Standard take-off weight', value: '50 KG' },
    { label: 'Max Payload weight', value: '15 KG' },
    { label: 'Cruise Speed', value: '82 Km/H' },
    { label: 'Max Flight Speed', value: '120 Km/H' },
    { label: 'Control radius', value: '50 KM' },
    { label: 'Max climb speed', value: '6 m/s' },
    { label: 'Max Descend Speed', value: '5 m/s' },
    { label: 'Max Altitude AMSL', value: '4200 m' },
    { label: 'Max Wind Resistance', value: 'Level 7' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '270 minutes' },
    { label: 'Flight Distance', value: '350 km' },
    { label: 'Aircraft dimensions', value: '4800×2580×850 mm' },
    { label: 'Package Dimension', value: '1810×980×720 mm / 1800×460×1100 mm' },
  ],

  // CP 50H VTOL
  '11': [
    { label: 'Standard take-off weight', value: '50 KG' },
    { label: 'Max Payload weight', value: '15 KG' },
    { label: 'Cruise Speed', value: '80 Km/H' },
    { label: 'Max Flight Speed', value: '130 Km/H' },
    { label: 'Control radius', value: '50–100 KM' },
    { label: 'Max climb speed', value: '4 m/s' },
    { label: 'Max Descend Speed', value: '5 m/s' },
    { label: 'Max Altitude AMSL', value: '4000 m' },
    { label: 'Max Wind Resistance', value: 'Level 7' },
    { label: 'Operating Temperature', value: '10 ~ 60°C' },
    { label: 'Flight Time', value: '600 minutes' },
    { label: 'Flight Distance', value: '850 km' },
    { label: 'Aircraft dimensions', value: '4800×2580×850 mm' },
    { label: 'Package Dimensions', value: '1810×980×720 mm / 1800×460×1100 mm' },
  ],
};

interface TacticalSpecsProps {
  productId: string;
}

export default function TacticalSpecs({ productId }: TacticalSpecsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const specsList = specsById[productId] ?? [];
  const visibleSpecs = isExpanded ? specsList : specsList.slice(0, 4);

  return (
    <section>
      <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b ghost-border border-primary/30 pb-2 mb-6">
        Tactical Specifications
      </h3>
      <ul className="font-mono text-sm text-on-surface-variant space-y-4 mb-6 transition-all duration-300">
        {visibleSpecs.map((spec, index) => (
          <li key={index} className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
            <span>{spec.label}:</span>
            <span className="text-white text-right ml-4">{spec.value}</span>
          </li>
        ))}
      </ul>
      {specsList.length > 4 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-mono text-xs uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 hover:bg-primary/10 transition-colors w-full flex justify-center items-center gap-2"
        >
          {isExpanded ? '[-] VIEW LESS' : `[+] VIEW ALL ${specsList.length} SPECS`}
        </button>
      )}
    </section>
  );
}
