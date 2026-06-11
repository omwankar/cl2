import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BatteryCharging,
  Boxes,
  Car,
  ClipboardCheck,
  Clock,
  Container,
  Cpu,
  Globe2,
  Layers,
  Package,
  PackageCheck,
  Plane,
  Radar,
  RefreshCw,
  Ship,
  ShieldCheck,
  Truck,
  Warehouse,
} from 'lucide-react';

export type IndustryServiceBlock = {
  title: string;
  intro: string;
  items: string[];
  Icon: LucideIcon;
  image?: { src: string; alt: string };
};

export type IndustryFreightMode = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

export type IndustryWhyCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

export type IndustryCaseStudySection = {
  title: string;
  content: string[];
  bullets?: string[];
  image?: { src: string; alt: string };
};

export type IndustrySolutionPage = {
  slug: string;
  pageKind: 'service' | 'case-study';
  title: string;
  subheading: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  secondaryCtaLabel?: string;
  location?: string;
  client?: string;
  result?: string;
  introHeading: string;
  introParagraphs: string[];
  expertiseList?: string[];
  expertiseNote?: string;
  introImage?: { src: string; alt: string };
  serviceBlocksHeading?: string;
  serviceBlocks?: IndustryServiceBlock[];
  freightHeading?: string;
  freightModes?: IndustryFreightMode[];
  freightImage?: { src: string; alt: string };
  customsHeading?: string;
  customsIntro?: string;
  customsItems?: string[];
  customsNote?: string;
  customsImage?: { src: string; alt: string };
  whyHeading?: string;
  whyCards?: IndustryWhyCard[];
  whyImage?: { src: string; alt: string };
  industriesHeading?: string;
  industriesSupported?: string[];
  industriesImage?: { src: string; alt: string };
  closingHeading?: string;
  closingParagraphs?: string[];
  caseStudySections?: IndustryCaseStudySection[];
  ctaHeading: string;
  ctaBody: string;
};

export const INDUSTRY_SOLUTION_PAGES: IndustrySolutionPage[] = [
  {
    slug: 'automotive-logistics-solutions-uk',
    pageKind: 'service',
    title: 'Automotive Logistics Solutions',
    secondaryCtaLabel: 'Contact Our Automotive Specialists',
    serviceBlocksHeading: 'End-to-End Automotive Logistics Services',
    subheading: 'Driving Automotive Supply Chains Forward',
    tagline: 'Global Automotive Logistics. Precision at Every Mile.',
    heroImage: '/automotive/automotive-logistics-hero.png',
    cardImage: '/automotive/automotive-logistics-hero.png',
    metaTitle: 'Automotive Logistics UK | Vehicle Transport & Supply Chain',
    metaDescription:
      'Automotive logistics UK services including vehicle transport, parts distribution, warehousing, customs clearance and global freight solutions.',
    excerpt:
      'Vehicle transport, parts distribution, EV battery handling, warehousing, and customs clearance for the automotive sector across the UK and global markets.',
    introHeading: 'Automotive Logistics Built for a Fast-Moving Industry',
    introParagraphs: [
      'From vehicle components and aftermarket parts to EV batteries and finished vehicles, Clarusto Logistics delivers seamless automotive logistics solutions across the UK, Europe, the Middle East, Asia, and beyond.',
      "Whether you're managing just-in-time manufacturing schedules, dealership distribution networks, fleet operations, or international vehicle movements, our specialist teams ensure every shipment arrives safely, compliantly, and on time.",
      'The automotive sector operates on precision, speed, and reliability. Delays in transportation can impact production schedules, dealership inventories, and customer commitments. At Clarusto Logistics, we provide integrated automotive supply chain solutions designed to keep manufacturers, suppliers, distributors, and fleet operators moving without disruption.',
    ],
    expertiseList: [
      'Automotive parts logistics',
      'Finished vehicle transportation',
      'EV battery and hazardous cargo handling',
      'OEM and Tier 1 supplier logistics',
      'Dealership distribution networks',
      'Fleet and leasing company logistics',
      'Spare parts warehousing and fulfillment',
      'Customs clearance and international freight forwarding',
    ],
    expertiseNote:
      'Through our global logistics network, we coordinate road, sea, air, and multimodal transportation solutions tailored to your operational requirements.',
    introImage: {
      src: '/automotive/automotive-overview.png',
      alt: 'Integrated automotive supply chain operations across road, sea, and air',
    },
    serviceBlocks: [
      {
        title: 'Vehicle Transportation',
        intro:
          'We provide secure transportation solutions for new and used vehicles across domestic and international markets. Whether transporting a single vehicle or managing large fleet movements, we ensure complete visibility throughout the journey.',
        items: [
          'UK vehicle transport',
          'European vehicle distribution',
          'International vehicle shipping',
          'Port-to-dealer deliveries',
          'Fleet relocation services',
          'Dealer stock movements',
          'Roll-on/Roll-off (RoRo) coordination',
          'Containerized vehicle transport',
        ],
        Icon: Car,
        image: {
          src: '/automotive/vehicle-transportation.png',
          alt: 'Finished vehicle transportation and car carrier logistics',
        },
      },
      {
        title: 'Automotive Parts Logistics',
        intro:
          'Manufacturers and suppliers depend on uninterrupted component flows to maintain production efficiency. Our automotive logistics specialists help minimize inventory costs while ensuring uninterrupted supply chain performance.',
        items: [
          'Just-in-time (JIT) deliveries',
          'Just-in-sequence (JIS) logistics',
          'Supplier consolidation',
          'Cross-border transportation',
          'Time-critical shipments',
          'Emergency freight solutions',
          'Production line replenishment',
        ],
        Icon: Boxes,
        image: {
          src: '/automotive/automotive-parts-logistics.png',
          alt: 'Automotive parts logistics and just-in-time component delivery',
        },
      },
      {
        title: 'EV & Battery Logistics',
        intro:
          'As electric mobility accelerates worldwide, specialist logistics support becomes increasingly important. Our teams manage complex regulatory requirements while maintaining safety throughout the transportation process.',
        items: [
          'Lithium-ion battery transportation',
          'Dangerous goods handling',
          'Regulatory compliance management',
          'Specialized packaging solutions',
          'Temperature-sensitive cargo transport',
          'International documentation support',
        ],
        Icon: BatteryCharging,
        image: {
          src: '/automotive/ev-battery-logistics.png',
          alt: 'EV lithium-ion battery transportation and dangerous goods handling',
        },
      },
      {
        title: 'Warehousing & Distribution',
        intro:
          'Strategically positioned storage and distribution solutions help automotive businesses improve inventory control and responsiveness. Our warehousing solutions integrate seamlessly with transportation operations to create efficient supply chains.',
        items: [
          'Automotive parts warehousing',
          'Inventory management',
          'Pick-and-pack fulfillment',
          'Dealer replenishment programs',
          'Cross-docking operations',
          'Spare parts distribution',
          'Reverse logistics',
        ],
        Icon: Warehouse,
        image: {
          src: '/automotive/automotive-warehousing.png',
          alt: 'Automotive parts warehousing and distribution operations',
        },
      },
    ],
    freightHeading: 'Global Freight Solutions for Automotive Businesses',
    freightModes: [
      {
        title: 'Road Freight',
        body: 'Reliable domestic and international road transport for components, spare parts, and vehicles.',
        Icon: Truck,
      },
      {
        title: 'Sea Freight',
        body: 'Cost-effective global shipping solutions for large-volume automotive cargo, including FCL, LCL, project cargo, and vehicle exports.',
        Icon: Ship,
      },
      {
        title: 'Air Freight',
        body: 'Fast-track transportation for urgent automotive components and production-critical shipments.',
        Icon: Plane,
      },
      {
        title: 'Multimodal Transport',
        body: 'Integrated logistics solutions combining road, sea, and air freight for maximum efficiency and cost control.',
        Icon: Layers,
      },
    ],
    freightImage: {
      src: '/automotive/global-freight-solutions.png',
      alt: 'Global automotive freight across road, sea, and air transport modes',
    },
    customsHeading: 'Customs Clearance & Trade Compliance',
    customsIntro:
      'Cross-border automotive logistics requires precision documentation and regulatory expertise. Our specialists manage:',
    customsItems: [
      'Import and export documentation',
      'Customs brokerage',
      'Duty optimization',
      'Regulatory compliance',
      'Trade documentation',
      'International shipping requirements',
    ],
    customsNote:
      'This ensures smooth cargo movement and reduces the risk of costly delays.',
    customsImage: {
      src: '/automotive/customs-trade-compliance.png',
      alt: 'Customs clearance and trade compliance documentation for automotive cargo',
    },
    whyHeading: 'Why Automotive Companies Choose Clarusto Logistics',
    whyCards: [
      {
        title: 'Industry Expertise',
        body: 'Deep understanding of automotive manufacturing, aftermarket distribution, fleet operations, and international trade.',
        Icon: Award,
      },
      {
        title: 'Global Network',
        body: 'Access to trusted carrier partnerships and transportation solutions across major global markets.',
        Icon: Globe2,
      },
      {
        title: 'Supply Chain Visibility',
        body: 'Real-time tracking and proactive communication throughout every shipment.',
        Icon: Radar,
      },
      {
        title: 'Time-Critical Solutions',
        body: 'Rapid response capabilities for urgent production and distribution requirements.',
        Icon: Clock,
      },
      {
        title: 'Compliance & Security',
        body: 'Strict adherence to transportation regulations, customs requirements, and cargo security standards.',
        Icon: ShieldCheck,
      },
      {
        title: 'Tailored Solutions',
        body: 'Flexible logistics strategies designed around your operational goals and growth plans.',
        Icon: ClipboardCheck,
      },
    ],
    whyImage: {
      src: '/automotive/why-clarusto-automotive.png',
      alt: 'Clarusto Logistics automotive supply chain expertise and global network',
    },
    industriesHeading: 'Industries We Support',
    industriesSupported: [
      'Automotive Manufacturers (OEMs)',
      'Tier 1 & Tier 2 Suppliers',
      'Electric Vehicle Manufacturers',
      'Fleet Operators',
      'Leasing Companies',
      'Dealership Networks',
      'Automotive Aftermarket Distributors',
      'Parts Manufacturers',
      'Vehicle Importers & Exporters',
    ],
    closingHeading: 'Supporting Automotive Supply Chains Worldwide',
    closingParagraphs: [
      'The automotive industry demands reliability, flexibility, and operational excellence. Clarusto Logistics combines global freight forwarding expertise, transportation management, warehousing, customs support, and supply chain solutions to help automotive businesses maintain continuity, improve efficiency, and deliver exceptional customer experiences.',
      'From critical production components to finished vehicles, we keep automotive supply chains moving.',
    ],
    ctaHeading: 'Ready to Accelerate Your Automotive Logistics?',
    ctaBody:
      'Partner with Clarusto Logistics for reliable automotive transportation, warehousing, customs clearance, and supply chain solutions. Contact our team today to discuss your automotive logistics requirements.',
  },
  {
    slug: 'contract-logistics-uk',
    pageKind: 'service',
    title: 'Contract Logistics Solutions',
    subheading: 'Integrated Contract Logistics Designed Around Your Business',
    tagline: 'Transforming Supply Chains Through Tailored Logistics Solutions',
    heroImage: '/contract/hero.png',
    cardImage: '/contract/hero.png',
    metaTitle: 'Contract Logistics UK | Tailored Supply Chain Solutions',
    metaDescription:
      'Contract logistics UK solutions covering warehousing, fulfilment, inventory management, transportation and integrated supply chain services.',
    excerpt:
      'Tailored contract logistics covering inbound procurement, warehousing, fulfilment, transportation, reverse logistics, and technology-driven supply chain control.',
    secondaryCtaLabel: 'Speak with Our Contract Logistics Specialists',
    introHeading: 'Contract Logistics Built Around Your Operations',
    introParagraphs: [
      'In an increasingly competitive and interconnected marketplace, logistics is no longer simply a support function—it is a critical driver of operational performance, customer satisfaction, and business growth.',
      'At Clarusto Logistics, we design and manage contract logistics solutions that align with the unique requirements of each customer, creating efficient, scalable, and resilient supply chains that deliver measurable value across every stage of the logistics journey.',
      'No two supply chains are identical. Clarusto Logistics works closely with organisations to develop bespoke contract logistics solutions that support both current business needs and future growth ambitions—analysing processes, identifying opportunities for optimisation, and designing solutions that integrate seamlessly into existing operations.',
    ],
    expertiseList: [
      'Inbound logistics and procurement support',
      'Warehousing and inventory management',
      'Order fulfilment and distribution',
      'Transportation management',
      'Reverse logistics',
      'Technology-driven operations',
      'Value-added logistics services',
      'Industry-specific supply chain expertise',
    ],
    expertiseNote:
      'From inbound procurement and inventory management to warehousing, fulfilment, transportation, and reverse logistics, our integrated solutions help businesses streamline operations, improve visibility, and focus on their core objectives.',
    introImage: {
      src: '/contract/intro.png',
      alt: 'Contract logistics operations tailored around business requirements',
    },
    serviceBlocksHeading: 'End-to-End Contract Logistics Services',
    serviceBlocks: [
      {
        title: 'Inbound Logistics & Procurement Support',
        intro:
          'Efficient inbound logistics lays the foundation for supply chain performance. We coordinate supplier collections, freight management, customs processes, inventory planning, and inbound transportation.',
        items: [
          'Supplier collections',
          'Freight management',
          'Customs processes',
          'Inventory planning',
          'Inbound transportation',
        ],
        Icon: Package,
        image: {
          src: '/contract/inbound.png',
          alt: 'Inbound logistics and procurement support operations',
        },
      },
      {
        title: 'Warehousing & Inventory Management',
        intro:
          'Our warehousing solutions are designed to provide visibility, accuracy, and operational flexibility through strategically managed storage operations and efficient stock handling processes.',
        items: [
          'Inventory control systems',
          'Stock handling processes',
          'Optimal inventory levels',
          'Market demand responsiveness',
          'Operational flexibility',
        ],
        Icon: Warehouse,
      },
      {
        title: 'Order Fulfilment & Distribution',
        intro:
          'Our fulfilment and distribution services support efficient order processing, inventory allocation, picking, packing, and final-mile coordination across domestic and international markets.',
        items: [
          'Order processing',
          'Inventory allocation',
          'Picking and packing',
          'Final-mile coordination',
          'High service standards',
        ],
        Icon: PackageCheck,
        image: {
          src: '/contract/fulfilment.png',
          alt: 'Order fulfilment and distribution centre operations',
        },
      },
      {
        title: 'Transportation Management',
        intro:
          'Through our global freight network, we coordinate road, sea, air, and multimodal transportation solutions that support seamless cargo movement between suppliers, facilities, and customers.',
        items: [
          'Road freight',
          'Sea freight',
          'Air freight',
          'Multimodal transport',
          'Global freight network',
        ],
        Icon: Truck,
      },
      {
        title: 'Reverse Logistics',
        intro:
          'Managing returns efficiently has become an essential component of modern supply chains, supporting product returns, inspections, refurbishment, and inventory recovery.',
        items: [
          'Product returns',
          'Inspections',
          'Refurbishment programmes',
          'Recycling initiatives',
          'Inventory recovery',
        ],
        Icon: RefreshCw,
      },
      {
        title: 'Technology-Driven Logistics Operations',
        intro:
          'Clarusto Logistics leverages advanced logistics technologies and integrated management systems to provide greater transparency, operational insight, and performance monitoring capabilities.',
        items: [
          'Digital reporting',
          'Inventory visibility',
          'Shipment tracking',
          'Supply chain analytics',
          'Proactive management',
        ],
        Icon: Cpu,
        image: {
          src: '/contract/technology.png',
          alt: 'Technology-driven contract logistics and supply chain visibility',
        },
      },
    ],
    freightHeading: 'Engineering Smarter Supply Chains',
    freightModes: [
      {
        title: 'Strategic Planning',
        body: 'Operational expertise, logistics planning, and process optimisation combined into a single operational framework.',
        Icon: ClipboardCheck,
      },
      {
        title: 'Scalable Models',
        body: 'Contract logistics models capable of supporting both regional operations and global supply chain networks.',
        Icon: Layers,
      },
      {
        title: 'Flexible Capacity',
        body: 'Expand capacity, enter new markets, and respond to changing demand without compromising service quality.',
        Icon: Globe2,
      },
      {
        title: 'Resilient Frameworks',
        body: 'Supply chains that reduce complexity, improve service levels, and enhance long-term resilience.',
        Icon: ShieldCheck,
      },
    ],
    freightImage: {
      src: '/contract/engineering.png',
      alt: 'Engineering smarter contract logistics supply chains',
    },
    customsHeading: 'Value-Added Logistics Services',
    customsIntro:
      'Supply chain efficiency often depends on the activities that take place beyond transportation and storage. Clarusto Logistics provides value-added services including:',
    customsItems: [
      'Inventory optimisation',
      'Product inspection and quality control',
      'Packaging and repackaging',
      'Labelling and compliance support',
      'Kitting and assembly services',
      'Cross-docking operations',
      'Consolidation and deconsolidation',
      'Returns management',
      'Customs and trade support',
    ],
    customsNote:
      'These services help create more agile and efficient supply chains while reducing operational complexity.',
    customsImage: {
      src: '/contract/value-added.png',
      alt: 'Value-added contract logistics services and supply chain support',
    },
    whyHeading: 'Why Businesses Choose Clarusto Logistics',
    whyCards: [
      {
        title: 'Tailored Solutions',
        body: 'Bespoke contract logistics strategies designed around your operational goals—not one-size-fits-all models.',
        Icon: ClipboardCheck,
      },
      {
        title: 'Global Freight Expertise',
        body: 'Freight forwarding, transportation management, and international trade experience across major markets.',
        Icon: Globe2,
      },
      {
        title: 'Technology-Enabled Control',
        body: 'Real-time visibility, inventory insight, and performance monitoring across logistics operations.',
        Icon: Radar,
      },
      {
        title: 'Scalable Infrastructure',
        body: 'Flexible logistics infrastructure that grows with your business and adapts to market change.',
        Icon: Layers,
      },
      {
        title: 'Industry Knowledge',
        body: 'Deep understanding of sector-specific operational requirements, regulations, and customer expectations.',
        Icon: Award,
      },
      {
        title: 'Long-Term Partnership',
        body: 'Dedicated customer support and a consultative approach aligned with sustainable competitive advantage.',
        Icon: ShieldCheck,
      },
    ],
    industriesHeading: 'Industry Expertise That Creates Competitive Advantage',
    industriesSupported: [
      'Automotive',
      'Consumer Goods & Retail',
      'Industrial & Manufacturing',
      'Energy & Infrastructure',
      'Healthcare & Technology',
    ],
    closingHeading: 'Contract Logistics That Powers Business Growth',
    closingParagraphs: [
      'Effective logistics is about more than moving products—it is about creating supply chains that support performance, profitability, and customer satisfaction. Clarusto Logistics delivers integrated contract logistics solutions that connect procurement, warehousing, transportation, fulfilment, and distribution into a seamless operational framework.',
      'By optimising transport networks, reducing unnecessary handling, and supporting smarter logistics practices, we help businesses strengthen supply chain performance while advancing sustainability objectives.',
    ],
    ctaHeading: 'Ready to Optimise Your Supply Chain?',
    ctaBody:
      'Partner with Clarusto Logistics to build smarter, more resilient contract logistics solutions designed around your business. Contact our specialists today to discuss your contract logistics requirements.',
  },
  {
    slug: 'container-logistics-uk',
    pageKind: 'service',
    title: 'Container Logistics Solutions',
    subheading: 'Connecting Global Trade Through Intelligent Container Logistics',
    tagline: 'Global Container Logistics That Keeps Trade Moving',
    heroImage: '/container/hero.png',
    cardImage: '/container/hero.png',
    metaTitle: 'Container Logistics UK | Global Freight & Supply Chain',
    metaDescription:
      'Container logistics UK solutions connecting global trade through ocean freight, customs clearance, multimodal transport and supply chain expertise.',
    excerpt:
      'Integrated container logistics across FCL, LCL, ocean freight, customs clearance, multimodal transport, and warehousing for global trade corridors.',
    secondaryCtaLabel: 'Speak with Our Container Logistics Team',
    introHeading: 'A Strategic Approach to Container Logistics',
    introParagraphs: [
      'Container logistics sits at the centre of modern global commerce. Every day, businesses depend on the seamless movement of goods between manufacturers, suppliers, ports, warehouses, distribution centres, and end customers.',
      'At Clarusto Logistics, we bring these moving parts together through integrated container logistics solutions designed to support international trade with efficiency, reliability, and control.',
      'Global supply chains require greater visibility, flexibility, compliance, and resilience than ever before. Clarusto Logistics works as an extension of your supply chain, helping you navigate these challenges through intelligent freight planning, multimodal transport solutions, customs expertise, and proactive operational management.',
    ],
    expertiseList: [
      'Full Container Load (FCL) transportation',
      'Less than Container Load (LCL) consolidation',
      'Import and export logistics management',
      'Multimodal transportation solutions',
      'Customs brokerage and trade compliance',
      'Warehousing and distribution',
      'Project cargo coordination',
      'Supply chain consulting and optimisation',
    ],
    expertiseNote:
      'Whether you are importing goods into the UK, managing procurement from Asia, supplying customers across Europe, or expanding into the Middle East, our team develops tailored logistics strategies that ensure cargo moves smoothly across borders.',
    introImage: {
      src: '/container/intro.png',
      alt: 'Strategic container logistics approach for global supply chains',
    },
    serviceBlocksHeading: 'End-to-End Container Logistics Solutions',
    serviceBlocks: [
      {
        title: 'Complete Supply Chain Oversight',
        intro:
          'From initial freight planning and carrier selection through customs clearance, inland transportation, warehousing, and final delivery, we provide complete oversight across the entire supply chain.',
        items: [
          'Freight planning',
          'Carrier selection',
          'Customs clearance',
          'Inland transportation',
          'Final delivery',
        ],
        Icon: Container,
        image: {
          src: '/container/end-to-end.png',
          alt: 'End-to-end container logistics from origin to destination',
        },
      },
      {
        title: 'Ocean Freight Expertise',
        intro:
          'Ocean freight remains the backbone of international container transportation. Clarusto works closely with leading global carriers to secure capacity, optimise routing, and minimise disruptions across critical shipping lanes.',
        items: [
          'Vessel bookings',
          'Capacity securing',
          'Route optimisation',
          'Market monitoring',
          'Project shipping programmes',
        ],
        Icon: Ship,
        image: {
          src: '/container/ocean-freight.png',
          alt: 'Ocean freight container transportation across major trade lanes',
        },
      },
      {
        title: 'Integrated Multimodal Transport',
        intro:
          'Effective container logistics extends beyond the port. Clarusto coordinates road, rail, and air freight solutions where required, creating integrated transport chains that maximise efficiency.',
        items: [
          'Road freight coordination',
          'Rail connections',
          'Air freight integration',
          'Port-to-door delivery',
          'Transit risk reduction',
        ],
        Icon: Layers,
        image: {
          src: '/container/multimodal.png',
          alt: 'Multimodal container transport connecting sea, road, and air',
        },
      },
      {
        title: 'Warehousing & Supply Chain Support',
        intro:
          'Clarusto provides warehousing and distribution solutions that complement transportation operations, enabling customers to improve inventory management and maintain service continuity.',
        items: [
          'Strategic storage',
          'Consolidation',
          'Fulfilment activities',
          'Distribution coordination',
          'Supply chain agility',
        ],
        Icon: Warehouse,
        image: {
          src: '/container/warehousing.png',
          alt: 'Container logistics warehousing and distribution support',
        },
      },
    ],
    freightHeading: 'Connecting Global Markets Through an Extensive Logistics Network',
    freightModes: [
      {
        title: 'United Kingdom',
        body: 'Gateway logistics for imports, exports, and European distribution networks.',
        Icon: Globe2,
      },
      {
        title: 'Asia & Middle East',
        body: 'Trade corridors linking China, India, UAE, Saudi Arabia, and Southeast Asia.',
        Icon: Ship,
      },
      {
        title: 'Europe & Americas',
        body: 'Connections across Germany, European markets, and North America.',
        Icon: Truck,
      },
      {
        title: 'Emerging Markets',
        body: 'Scalable solutions that adapt to changing market conditions with operational consistency.',
        Icon: Radar,
      },
    ],
    freightImage: {
      src: '/container/network.png',
      alt: 'Global container logistics network across major international trade corridors',
    },
    customsHeading: 'Customs Clearance and Trade Compliance',
    customsIntro:
      'Cross-border logistics requires precise execution and a thorough understanding of international trade regulations. Our customs specialists support customers through every stage of the import and export process:',
    customsItems: [
      'Documentation accuracy',
      'Regulatory compliance',
      'Efficient cargo clearance',
      'Import and export procedures',
      'Trade requirements management',
      'Administrative burden reduction',
    ],
    customsNote:
      'By proactively managing customs procedures, we help reduce delays and support uninterrupted cargo movement through international gateways.',
    whyHeading: 'Why Businesses Partner with Clarusto Logistics',
    whyCards: [
      {
        title: 'Global Freight Expertise',
        body: 'Freight forwarding experience across major international trade lanes and carrier networks.',
        Icon: Ship,
      },
      {
        title: 'End-to-End Visibility',
        body: 'Complete oversight from origin to destination with proactive operational management.',
        Icon: Radar,
      },
      {
        title: 'Multimodal Capability',
        body: 'Integrated road, rail, sea, and air solutions for seamless cargo flow beyond the port.',
        Icon: Layers,
      },
      {
        title: 'Customs Knowledge',
        body: 'Specialist support for import/export documentation, compliance, and efficient clearance.',
        Icon: ShieldCheck,
      },
      {
        title: 'Flexible Solutions',
        body: 'Customer-focused logistics strategies that adapt to changing supply chain requirements.',
        Icon: ClipboardCheck,
      },
      {
        title: 'Reliable Execution',
        body: 'Consistent performance across global markets with dedicated operational support.',
        Icon: Award,
      },
    ],
    whyImage: {
      src: '/container/why-partner.png',
      alt: 'Why businesses partner with Clarusto for container logistics',
    },
    industriesHeading: 'Industries We Support',
    industriesSupported: [
      'Manufacturing',
      'Automotive',
      'Retail & E-commerce',
      'Consumer Goods',
      'Industrial Equipment',
      'Technology',
      'Healthcare',
      'Construction',
      'Energy & Infrastructure',
      'Food & Beverage',
    ],
    closingHeading: 'Your Trusted Partner for Global Container Logistics',
    closingParagraphs: [
      'As international trade continues to evolve, businesses need logistics solutions that are agile, connected, and built for the future. Clarusto Logistics delivers integrated container logistics services that connect suppliers, markets, and customers across the world.',
      'Through strategic freight management, customs expertise, multimodal transportation, and supply chain coordination, we help organisations navigate complexity and keep cargo moving—wherever your business operates.',
    ],
    industriesImage: {
      src: '/container/industries.png',
      alt: 'Industries supported by Clarusto container logistics solutions',
    },
    ctaHeading: 'Ready to Strengthen Your Supply Chain?',
    ctaBody:
      'Partner with Clarusto Logistics for intelligent container logistics solutions that deliver reliability, visibility, and performance across global trade networks. Contact our team today to discuss your container logistics requirements.',
  },
];

export function getIndustrySolutionPage(slug: string) {
  return INDUSTRY_SOLUTION_PAGES.find((page) => page.slug === slug);
}

export function getAllIndustrySolutionSlugs() {
  return INDUSTRY_SOLUTION_PAGES.map((page) => page.slug);
}
