export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  imageAlt: string;
  imageSrc: string;
};

const services: Service[] = [
  {
    id: 'defence-solutions',
    name: 'Defence Solutions',
    shortDescription: 'Deployment of advanced Unmanned Aerial Vehicles (UAVs) and autonomous tactical systems.',
    description: 'Engineered for high-threat environments, providing real-time battlefield reconnaissance and precision strike capabilities. Our defence solutions integrate seamlessly with modern command structures, offering unparalleled situational awareness and operational superiority.',
    features: ['Advanced UAV Deployment', 'Autonomous Tactical Systems', 'Real-time Battlefield Reconnaissance', 'Precision Strike Capabilities'],
    icon: 'flight_takeoff',
    imageAlt: 'Military drone flying against a moody sky',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ziaS9025brJf73yS-4xAUTttOuY8gjCGwNTqv9jTy60ekk5L40YMOdiOJcbZaPlmfOerju9ujQouWXZouZyj_sES_drOO2RUfeWTX6AmbKWKvacynfYaISsWgpeF7ovnNzlINf1ilGusOf94mzuENog0PbJMg-CoEwH2-sh4zpK9wAktU4SqUgayy6kScU281SOBl1tdO5l5aeXpGF3rsW99dQYa15D6YjhV1RB-Tmlew8P3UTc1fgyG-6Yu2AGWEhl2TUr0yJ0'
  },
  {
    id: 'security-systems',
    name: 'Security Systems',
    shortDescription: 'Comprehensive border monitoring and persistent aerial surveillance networks.',
    description: 'Integrating multi-spectral sensors and AI-driven anomaly detection for impenetrable perimeter defense. Our security systems ensure round-the-clock monitoring, providing early warnings and actionable intelligence to safeguard critical infrastructure and sensitive zones.',
    features: ['Comprehensive Border Monitoring', 'Persistent Aerial Surveillance Networks', 'Multi-spectral Sensors Integration', 'AI-driven Anomaly Detection'],
    icon: 'radar',
    imageAlt: 'Server room with green lights',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnF4Ib0AS_2N-Z7J9KmufBdkxFI3fJ8fcTGKNCCQPwbyvnd40rfObocsQTk97DaFoFsjRypn5HxaTR2Ix4s9L3kA89ngL5p-bn5eNvinwuTWGlCzSjzzCbptwQZ_eGpiHkY3IFK8022T0uXvcNIQPQJvd-7TO5hd7U2OJg_RkfWFpJ8GzqPtUjNeZYZRh0McqKE0bAb3VXLUiPEoSSi2gWSvb8pTplDQvZCr4BjzbVFqmCgzB-4TPlEguTCHsG636q3h_swKPcuiU'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Intelligence',
    shortDescription: 'Hardened protection for strategic digital assets.',
    description: 'Offensive and defensive cyber operations, threat hunting, and encrypted communications infrastructure designed to withstand state-sponsored attacks. Our intelligence operations provide the necessary countermeasures to neutralize cyber threats before they impact critical systems.',
    features: ['Hardened Asset Protection', 'Offensive & Defensive Operations', 'Proactive Threat Hunting', 'Encrypted Communications Infrastructure'],
    icon: 'security',
    imageAlt: 'Matrix style code on a screen',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCViZ5qM-Dbp5zCuw3dDuc9sA4AWqyQjIdDgTqvKcOEOXUzWtot8pV7HrF2Lovlp50nKs_hxFgGhVM9766z04ybclcDJj7ty1DSGI8WaiWwKE0zIF-aF8Qhuqb-zEko7n4CKZ_pRDFkU3us8m8H9pBNyZ7ARjZVJODFWc53mxi_2E4N9J97f6dTPnfUgRRWg3iP6j-PMbltu4qjCfQvHklUNmb3SrWDn9oZ5M_2evVbswBJc4xyezFK01lVacu8DC172OUTKvtEkAM'
  },
  {
    id: 'training',
    name: 'Training & Consulting',
    shortDescription: 'Elite battlefield strategy and advanced system operation training.',
    description: 'Equipping personnel with the tactical acumen required to leverage next-generation defense hardware effectively in combat scenarios. Our consulting services provide strategic insights and operational planning to optimize resource deployment and mission success.',
    features: ['Elite Battlefield Strategy', 'Advanced System Operation', 'Tactical Acumen Development', 'Strategic Operational Planning'],
    icon: 'strategy',
    imageAlt: 'Military personnel looking at a tactical map',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI4lxysW_srFUa6hCWWqO2V7aGIHpgvq8AitWYkB55PBgcF3ohRnWZie9tn4qMa-QrBqBdS0N3h1YRJDLyxClkLsHM-6EYucm09xEeubJIixISm6Nra39FwxSvbuqQzWAD7LOsvmxFkBTXdJ8l9y_HHYQ1Ku1Fw1-hTZJStUUlZwOzzUYBsHU6qA9xEhSFKcSame_AxrZpgkZ8j6PrBKelfB9_0-Hnb8yJB7QvBxjIDxEHoYc3BBMAhfuaUOzrrD0T80hgTI_GDgQ'
  }
];

export async function getServiceById(id: string): Promise<Service | undefined> {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 100));
  return services.find(service => service.id === id);
}

export async function getAllServices(): Promise<Service[]> {
  return services;
}
