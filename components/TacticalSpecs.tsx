"use client";

import { useState } from 'react';

const specsList = [
  { label: 'Standard take-off weight', value: '8 KG' },
  { label: 'Max Payload weight', value: '1 KG' },
  { label: 'Cruise Speed', value: '12 m/s' },
  { label: 'Max Flight Speed', value: '20 m/s' },
  { label: 'Control radius', value: '2 KM' },
  { label: 'Max climb speed', value: '10 m/s' },
  { label: 'Max Descend Speed', value: '10 m/s' },
  { label: 'Max Altitude AMSL', value: '15000 m' },
  { label: 'Max Wind Resistance', value: 'level 2' },
  { label: 'Operating Temperature', value: '10 ~ 60°C' },
  { label: 'Flight Time', value: '30 minutes' },
  { label: 'Flight Distance', value: '7 km /15 km' },
  { label: 'Aircraft dimensions', value: '32 inch : 16 inch' },
  { label: 'Camera', value: 'HD Video 1920x1080 pxl' },
];

export default function TacticalSpecs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleSpecs = isExpanded ? specsList : specsList.slice(0, 4);

  return (
    <section>
      <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b ghost-border border-primary/30 pb-2 mb-6">Tactical Specifications</h3>
      <ul className="font-mono text-sm text-on-surface-variant space-y-4 mb-6 transition-all duration-300">
        {visibleSpecs.map((spec, index) => (
          <li key={index} className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
            <span>{spec.label}:</span>
            <span className="text-white text-right">{spec.value}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="font-mono text-xs uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 hover:bg-primary/10 transition-colors w-full flex justify-center items-center gap-2"
      >
        {isExpanded ? '[-] VIEW LESS' : '[+] VIEW ALL'}
      </button>
    </section>
  );
}
