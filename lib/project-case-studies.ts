export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type TransportModeSection = {
  title: string;
  summary: string;
  activities: string[];
  challenges: string[];
  execution: string[];
  image?: ProjectGalleryImage;
};

export type ProjectStat = {
  value: string;
  label: string;
  /** Numeric portion used for count-up animation when present */
  countTo?: number;
  prefix?: string;
  suffix?: string;
};

export type ProjectScopeIcon =
  | 'container'
  | 'unloading'
  | 'customs'
  | 'inspection'
  | 'truck'
  | 'return'
  | 'warehouse'
  | 'ship'
  | 'plane'
  | 'check';

export type ProjectScopeItem = {
  label: string;
  icon?: ProjectScopeIcon;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  client: string;
  subheading: string;
  excerpt: string;
  result: string;
  heroImage: string;
  publishedAt: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  background: string[];
  objective: string[];
  transportModes: TransportModeSection[];
  coordinationOutcomes: string[];
  keyOutcomes: string[];
  conclusion: string[];
  objectiveImage?: ProjectGalleryImage;
  outcomesImage?: ProjectGalleryImage;
  conclusionImage?: ProjectGalleryImage;
  coordinationHeading?: string;
  outcomesHeading?: string;
  /** Optional ordered gallery: [0] hero, [1] background, [2] challenge, [3] outcomes, [4+] gallery */
  images?: ProjectGalleryImage[];
  /** Optional hero stats strip; falls back to result + location when omitted */
  stats?: ProjectStat[];
  /** Optional scope-of-work chips; falls back to activities / objectives */
  scopeItems?: ProjectScopeItem[];
  /** Small badge overlaid on the background image */
  locationBadge?: string;
};

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    slug: 'behu-customs-clearance-trucking-riyadh',
    title: 'Customs Clearance and Trucking Delivery for Behu Ltd',
    category: 'Customs · Inland Trucking Saudi Arabia',
    client: 'Behu Ltd., Riyadh',
    subheading:
      'Compliant Saudi customs clearance and coordinated trucking delivery for industrial equipment and consumer goods imports into Riyadh.',
    excerpt:
      'Clarusto supported Behu Ltd. with documentation control, SASO/Fasah compliance, and tracked trucking delivery to reduce demurrage risk and strengthen import reliability in Saudi Arabia.',
    result: 'Faster clearance · Lower demurrage risk',
    heroImage: '/projects/behu-customs-riyadh-hero.png',
    publishedAt: '2026-07-20',
    location: 'Saudi Arabia · Riyadh',
    metaTitle: 'Behu Ltd Customs Clearance & Trucking Delivery | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics managed Saudi customs clearance and trucking delivery for Behu Ltd in Riyadh with SASO compliance, Fasah integration, and reduced demurrage risk.',
    ogImage: '/projects/behu-customs-riyadh-hero.png',
    background: [
      'Behu Ltd., a growing company based in Riyadh, specialises in industrial equipment and consumer goods imports. Rising shipment volumes and increasingly complex Saudi import regulations created documentation discrepancies and clearance delays that put cost and schedule performance at risk.',
      'Clarusto Logistics was engaged to design and execute a more controlled customs clearance and delivery workflow, giving Behu a single operational partner for compliant import handling and inland movement.',
    ],
    objective: [
      'Deliver duly compliant customs clearance with accurate documentation and HS-code control.',
      'Track consignments closely to avoid demurrage, storage charges, and avoidable delays.',
      'Improve supply-chain predictability through proactive compliance checks and local regulatory expertise.',
    ],
    objectiveImage: {
      src: '/projects/behu-customs-riyadh-overview.png',
      alt: "Customs documentation overview for Behu imports",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Higher volumes and incomplete documentation created clearance risk under Saudi import rules, including SASO and conformity requirements.',
        activities: [],
        challenges: [
          'SASO certification and quality-standard checks for products entering Saudi Arabia.',
          'Conformity assessment and import documentation readiness before arrival.',
          'Accurate HS-code classification, labelling, and origin/destination detail.',
          'Commercial invoice discrepancies and incomplete paperwork.',
          'Limited real-time monitoring increasing demurrage and storage exposure.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto standardised documentation, integrated with Saudi customs platforms, and monitored clearance through to trucking delivery.',
        activities: [
          'Pre-arrival document verification against Saudi customs requirements.',
          'Integration with Saudi customs platforms such as Fasah via electronic data exchange.',
          'Accurate product classification and duty evaluation.',
          'Process redesign and documentation standardisation for repeat shipments.',
          'Continuous monitoring through clearance and inland trucking delivery.',
        ],
        challenges: [],
        execution: [
          'Completed an initial audit of Behu’s import documentation and compliance gaps.',
          'Standardised paperwork and clearance workflows before vessel/truck arrival.',
          'Submitted declarations through connected customs systems for faster approvals.',
          'Coordinated release and inland trucking with tracked handovers to Riyadh.',
        ],
        image: {
          src: '/projects/behu-customs-riyadh-execution.png',
          alt: "Execution of Fasah-linked clearance and trucking",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Lower demurrage and storage exposure through earlier document readiness.',
      'Avoided penalties linked to compliance and classification errors.',
      'Improved documentation accuracy and Saudi import adherence.',
      'Faster delivery timelines and stronger supply-chain predictability.',
      'Clearer importer–logistics communication across the clearance cycle.',
    ],
    outcomesImage: {
      src: '/projects/behu-customs-riyadh-outcomes.png',
      alt: "Cleared Behu cargo ready for Riyadh delivery",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The Behu Ltd. engagement shows how Clarusto Logistics turns complex Saudi clearance requirements into a controlled, repeatable process. By combining compliance expertise, digital customs integration, and proactive delivery coordination, Clarusto helped convert clearance risk into a more reliable import operation.',
    ],
  },
  {
    slug: 'customs-clearance-king-abdullah-port-mixed-cargo',
    title: 'Customs Clearance and Riyadh Delivery from Saudi Ports',
    category: 'Customs · Multi-Commodity Container Logistics Saudi Arabia',
    client: 'Commercial importer, Riyadh',
    subheading:
      'Customs clearance and inland delivery for multi-commodity container shipments arriving through Jeddah Islamic Port and King Abdullah Port.',
    excerpt:
      'Clarusto coordinated clearance and 40-foot container transport to Riyadh for optical fibre, copper, security equipment, and HVAC materials arriving through two Saudi ports.',
    result: 'Two port entries · Coordinated Riyadh delivery',
    heroImage: '/projects/king-abdullah-port-customs-hero.jpg',
    publishedAt: '2026-10-26',
    location: 'Jeddah & King Abdullah Ports → Riyadh',
    metaTitle: 'Saudi Port Customs Clearance and Riyadh Container Delivery | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics coordinated multi-commodity container customs clearance at Jeddah Islamic Port and King Abdullah Port, with inland delivery to Riyadh.',
    ogImage: '/projects/king-abdullah-port-customs-hero.jpg',
    background: [
      'Clarusto managed customs clearance and inland transportation of imported containerized cargo arriving through Jeddah Islamic Port and King Abdullah Port for delivery to Riyadh, Saudi Arabia.',
      'The shipment comprised multiple 40HC containers carrying optical fibre cables, copper pipes, IP cameras, face recognition access controllers, barrier gates, horn loudspeakers, swirl air outlets, and hand volume dampers. The mixed commodity types required accurate documentation under different HS classifications.',
    ],
    objective: [
      'Coordinate customs clearance for multi-commodity containerized shipments across two port entry points.',
      'Arrange container pickup, inland transportation to Riyadh, storage management beyond free time, and empty container returns.',
    ],
    objectiveImage: {
      src: '/projects/king-abdullah-port-customs-overview.jpg',
      alt: "Open containers with multi-commodity cargo",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Multiple containers carrying diverse cargo had to be cleared and moved from two different ports to a single destination under different HS classifications.',
        activities: [],
        challenges: [
          'Multiple product categories within a single shipment.',
          'Separate HS-code classification for each product line.',
          'Accurate customs documentation for different commodity categories.',
          'Simultaneous coordination of port handling at Jeddah Islamic Port and King Abdullah Port.',
          'Container pickup, storage timelines, and return logistics.',
          'Inland delivery of 40-foot containers to Riyadh.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto coordinated customs clearance, port pickup, 40-foot container trucking to Riyadh, storage management, and empty container returns.',
        activities: [
          'Customs clearance support and documentation handling across the commodity types.',
          'Port handling and container pickup coordination at both ports.',
          'Inland transportation by 40-foot container trucks from the ports to Riyadh.',
          'Pull-out and container movement arrangements.',
          'Storage management support beyond the free storage period.',
          'Empty container return coordination to designated depots.',
        ],
        challenges: [],
        execution: [
          'Processed containers arriving at Jeddah Islamic Port and King Abdullah Port based on shipment documents and commodity-specific requirements.',
          'Dispatched cleared containers to Riyadh on suitable 40-foot container trucks.',
          'Coordinated port pickup, delivery, container return, and storage timelines.',
          'Maintained coordination between port teams, customs agents, and transport partners through final delivery.',
        ],
        image: {
          src: '/projects/king-abdullah-port-customs-execution.jpg',
          alt: "Customs clearance execution at Saudi ports",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful customs clearance and delivery of all containers to Riyadh.',
      'Coordinated operations across two separate port entry points under one logistics process.',
      'Multiple commodity types handled under different HS classifications without clearance delays.',
      'Reliable container movement, storage management, and empty return coordination.',
      'Timely final delivery to the Riyadh destination within operational requirements.',
    ],
    outcomesImage: {
      src: '/projects/king-abdullah-port-customs-outcomes.jpg',
      alt: "Cleared containers ready for Riyadh delivery",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The Riyadh container delivery operation demonstrates Clarusto Logistics’ capability in managing end-to-end import logistics across Saudi Arabian ports. Structured customs clearance, coordinated port handling, and reliable inland transportation supported the movement of a complex multi-commodity shipment from arrival through final delivery.',
    ],
  },
  {
    slug: 'empty-plastic-bottle-supply-netherlands-uk',
    title: 'Empty Plastic Bottle Supply from the Netherlands to the UK',
    category: 'Road Freight · Recycling Supply Chain',
    client: 'Plastic recycling operator, Worcester (UK)',
    subheading:
      'Palletised empty plastic bottle supply from the EU to Worcester with Brexit-aware customs, FTL planning, and damage-free stacking.',
    excerpt:
      'Clarusto moved 70 pallets of recycled empty plastic bottles (3,500–3,800 kg) from the Netherlands to Worcester within a 3–5 day window using optimised FTL road freight and controlled palletisation.',
    result: '70 pallets delivered · No freight damage',
    heroImage: '/projects/empty-plastic-bottles-nl-uk-hero.png',
    publishedAt: '2026-07-15',
    location: 'Netherlands → Worcester, UK',
    metaTitle: 'Empty Plastic Bottle Supply Netherlands to UK | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics supplied palletised empty plastic bottles from the Netherlands to Worcester, UK with FTL road freight, Brexit customs planning, and damage-free stacking.',
    ogImage: '/projects/empty-plastic-bottles-nl-uk-hero.png',
    background: [
      'A Clarusto partner referral introduced a Worcester-based plastics recycling operator that needed a reliable supply of recycled empty plastic bottles from the EU. Each delivery covered about 70 pallets with a palletised weight of 3,500–3,800 kilograms.',
      'Clarusto surveyed UK and EU sourcing and transport options, then executed an end-to-end road logistics plan covering collection, border formalities, and timed delivery into the UK production schedule.',
    ],
    objective: [
      'Meet consented delivery windows within a 3–5 day duration.',
      'Optimise transport cost while protecting bottles from crush, shrink-wrap failure, and deformation.',
      'Complete effective EU–UK border and customs clearance for a repeatable supply pattern.',
    ],
    objectiveImage: {
      src: '/projects/empty-plastic-bottles-nl-uk-overview.jpg',
      alt: "Palletised bottle collection overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Lightweight bulk cargo needed dense stacking without damage, while Brexit customs and production deadlines left little margin for delay.',
        activities: [],
        challenges: [
          'Customs complexity following Brexit for EU–UK movements.',
          'Tight delivery deadlines tied to the client’s production line.',
          'Bulk-yet-lightweight load density and pallet utilisation risk.',
          'Stacking and shrink-wrap methods that can deform empty bottles.',
          'Correct commercial invoicing and product classification.',
          'Vehicle configuration for efficient loading and offloading.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto used FTL road freight, cubic palletisation, anti-shrink protection, and live tracking to protect quality and schedule.',
        activities: [
          'FTL combined-load planning for maximum space utilisation.',
          'Cubic palletisation and controlled vertical stacking.',
          'Anti-shrink wrapping to preserve bottle form in transit.',
          'Export/import declaration packs aligned to EU–UK requirements.',
          'Route survey, live tracking, and consignee follow-up to the delivery window.',
        ],
        challenges: [],
        execution: [
          'Selected FTL road freight to balance cost per pallet against transit reliability.',
          'Engineered stacking patterns that reduced crush risk while improving cube use.',
          'Completed border documentation ahead of movement to limit holds.',
          'Monitored transit in real time through to Worcester handover.',
        ],
        image: {
          src: '/projects/empty-plastic-bottles-nl-uk-execution.png',
          alt: "Cross-border road execution NL to UK",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Improved cost efficiency through planned FTL utilisation.',
      'Delivery aligned to the client’s production and inventory needs.',
      'Reduced transport cost via engineered stacking and cube planning.',
      'No freight damage and a clean customs-cleared EU–UK flow.',
      'A repeatable model for future recycling inbound supply.',
    ],
    outcomesImage: {
      src: '/projects/empty-plastic-bottles-nl-uk-outcomes.png',
      alt: "Delivered bottle supply into UK production",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This project shows how Clarusto Logistics combines border readiness, pallet engineering, and timed road freight to keep lightweight bulk recycling inputs moving reliably from the Netherlands into the UK. The same controlled model now supports ongoing partnered supply-chain growth.',
    ],
  },
  {
    slug: 'dammam-riyadh-container-delivery',
    title: 'Same-Day Container Delivery from Dammam to Riyadh',
    category: 'Inland Trucking · Saudi Container Delivery',
    client: 'Behu Ltd.',
    subheading:
      'Single-day inland delivery plan for 4 × 40FT FL and 3 × 40HC containers from Dammam to Riyadh with coordinated port release and trucking.',
    excerpt:
      'Clarusto planned and executed a same-day Dammam–Riyadh container delivery for Behu Ltd.—seven containers moved by road across an ~400 km corridor with customs, port, and fleet coordination.',
    result: '7 containers · Same-day road delivery plan',
    heroImage: '/projects/dammam-riyadh-container-delivery-hero.jpg',
    publishedAt: '2026-07-12',
    location: 'Dammam → Riyadh, Saudi Arabia',
    metaTitle: 'Dammam to Riyadh Same-Day Container Delivery | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics delivered 4 × 40FT and 3 × 40HC containers from Dammam to Riyadh in a same-day inland trucking plan for Behu Ltd.',
    ogImage: '/projects/dammam-riyadh-container-delivery-hero.jpg',
    background: [
      'Following earlier successful work with Behu Ltd., Clarusto Logistics was asked to plan inland delivery of 4 × 40FT FL and 3 × 40HC containers into Riyadh. Dammam and Jeddah were both considered; the agreed plan focused on Dammam–Riyadh for operational fit.',
      'The client required delivery in a single day across an estimated 400 km corridor, with port handling, customs release, and trailer capacity tightly sequenced.',
    ],
    objective: [
      'Provide safe, cost-efficient, time-bound delivery within a one-day window.',
      'Coordinate port discharge, customs release, and road fleet so containers move without avoidable demurrage or detention.',
      'Maintain live visibility and compliant handling across GCC port and highway conditions.',
    ],
    objectiveImage: {
      src: '/projects/dammam-riyadh-container-delivery-overview.jpg',
      alt: "Container staging for inland haulage",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Port occupancy, paperwork gaps, traffic peaks, and trailer availability all threatened a same-day multi-container handover into Riyadh.',
        activities: [],
        challenges: [
          'Port occupancy and inspection timing delaying container release.',
          'Documentation gaps creating clearance inefficiency.',
          'Peak-hour congestion and weather events such as sandstorms on highway corridors.',
          'Strict GCC and dry-port operating rules affecting timelines.',
          'Potential shortage of trailers/machinery for simultaneous lift and dispatch.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto combined 40HC and 40FL movements in one fleet plan, staged trailers for shuttle flexibility, and controlled cost exposure across port and trucking charges.',
        activities: [
          'Combined transit plan for 40HC and 40FL containers without unnecessary segregation.',
          'Fleet plan of up to 20 trailers / shuttle model based on route and congestion.',
          'Avoidance of peak congestion and seasonal surge windows where possible.',
          'Monitoring for extreme weather and highway closures.',
          'Clear cost control across port handling, trucking, fuel surcharge, and customs.',
        ],
        challenges: [],
        execution: [
          'Pre-booked trailer capacity against the release window to protect the same-day plan.',
          'Assigned customs specialists to accelerate discharge and gate-out.',
          'Dispatched a hybrid trucking model to absorb traffic variability into Riyadh.',
          'Tracked movements live through to consignee handover.',
        ],
        image: {
          src: '/projects/dammam-riyadh-container-delivery-execution.png',
          alt: "Same-day road execution Dammam to Riyadh",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Result-oriented same-day delivery plan for seven containers.',
      'Optimised resource use through a hybrid trucking model.',
      'Route survey reduced obstruction risk on the Dammam–Riyadh corridor.',
      'Specialist customs coordination supported faster discharge and end delivery.',
      'Controlled exposure to detention and demurrage through timed release.',
    ],
    outcomesImage: {
      src: '/projects/dammam-riyadh-container-delivery-outcomes.png',
      alt: "Completed inland container delivery to Riyadh",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'Clarusto Logistics turned a demanding same-day inland brief into a controlled Dammam–Riyadh operation. Route planning, customs specialists, and flexible trailer capacity kept Behu Ltd.’s containers moving with clear cost control and minimal disruption.',
    ],
  },
  {
    slug: 'vehicle-import-handling-aqaba-amman-jordan',
    title: 'Vehicle Import Handling and Inland Delivery from Aqaba to Amman',
    category: 'Automotive · EV Import Logistics',
    client: 'Leading automotive importer in Jordan',
    subheading:
      'Import handling, customs coordination, and inland delivery of electric vehicles from the Port of Aqaba to Amman through Clarusto’s Jordan logistics partner.',
    excerpt:
      'Clarusto managed 8 × 40FT EV containers from Aqaba port to Amman — covering destuffing, customs inspection support, inland transport, and empty container return within one week.',
    result: 'Completed within one week · Zero damage',
    heroImage: '/projects/aqaba-amman-ev-import-hero.jpg',
    publishedAt: '2026-06-20',
    location: 'Aqaba → Amman, Jordan',
    locationBadge: 'Port of Aqaba',
    stats: [
      { value: '8 × 40FT', label: 'Containers', countTo: 8, suffix: ' × 40FT' },
      { value: '1 week', label: 'Delivery', countTo: 1, suffix: ' week' },
      { value: 'Zero', label: 'Damage' },
      { value: 'Aqaba → Amman', label: 'Route' },
    ],
    images: [
      {
        src: '/projects/aqaba-amman-ev-import-hero.jpg',
        alt: 'EV import handling at Aqaba port',
        caption: 'Aqaba port operations',
      },
      {
        src: '/projects/aqaba-amman-overview.jpg',
        alt: 'Vehicle destuffing and port handling overview',
        caption: 'Port of Aqaba',
      },
      {
        src: '/projects/aqaba-amman-execution.jpg',
        alt: 'Inland EV transport execution to Amman',
        caption: 'Inland delivery',
      },
      {
        src: '/projects/aqaba-amman-outcomes.jpg',
        alt: 'Completed Aqaba to Amman vehicle delivery',
        caption: 'Project outcomes',
      },
      {
        src: '/projects/aqaba-amman-results.jpg',
        alt: 'Successful EV import logistics outcomes from Aqaba to Amman',
        caption: 'On-time inland delivery',
      },
      {
        src: '/projects/aqaba-amman-p1-img1.jpeg',
        alt: 'Container handling supporting Aqaba EV import',
        caption: 'Container operations',
      },
    ],
    metaTitle: 'EV Vehicle Import Aqaba to Amman Case Study | Clarusto',
    metaDescription:
      'How Clarusto Logistics managed electric vehicle import handling, customs coordination, and inland delivery from Aqaba to Amman for 8 × 40FT containers in Jordan.',
    ogImage: '/projects/aqaba-amman-ev-import-hero.jpg',
    background: [
      'Clarusto Logistics, through its trusted Jordan logistics partner, successfully managed the import handling, customs coordination, and inland transportation of electric vehicle (EV) shipments for a leading automotive importer in Jordan. The project involved 8 × 40FT containers arriving at the Port of Aqaba for final delivery to Amman.',
      'The scope of work included container collection from the port, vehicle destuffing, customs coordination, inspection support, inland transportation, and the return of empty containers to the designated shipping line depot. Through efficient planning and seamless coordination, Clarusto ensured the safe and timely movement of the shipment from arrival to final delivery.',
    ],
    objective: [
      'Importing containerized EVs requires precise coordination between port operations, customs authorities, transport providers, and handling teams. Delays in cargo release, inspections, documentation, or inland transportation can result in additional storage costs and operational disruptions.',
      'The project required a structured execution plan to ensure uninterrupted cargo movement while maintaining compliance with Jordanian customs and transport regulations.',
    ],
    objectiveImage: {
      src: '/projects/aqaba-amman-overview.jpg',
      alt: "Vehicle destuffing and port handling overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Safe EV handling, customs inspections, and inland delivery from Aqaba to Amman — with tight coordination across port, customs, and transport teams.',
        activities: [],
        challenges: [
          'Safe unloading and handling of electric vehicles without damage.',
          'Coordinating customs inspections and import formalities.',
          'Managing container collection and release from the Port of Aqaba.',
          'Planning efficient inland transportation to Amman.',
          'Ensuring timely return of empty containers to avoid unnecessary operational costs.',
          'Maintaining smooth coordination between multiple stakeholders throughout the logistics process.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'An end-to-end automotive logistics solution covering port handling, customs coordination, inland transportation, and empty container management.',
        activities: [
          'Collection of 8 × 40FT containers from the Port of Aqaba.',
          'Safe vehicle destuffing and controlled unloading procedures.',
          'Customs inspection coordination and documentation support.',
          'Inland transportation planning from Aqaba to Amman.',
          'Delivery scheduling with the consignee.',
          'Empty container return management.',
          'Continuous operational monitoring and communication throughout the shipment.',
        ],
        challenges: [],
        execution: [
          'Upon vessel arrival, all containers were collected and transferred for controlled vehicle unloading.',
          'Customs inspections and documentation were coordinated efficiently, enabling smooth cargo release.',
          'Following customs clearance, vehicles were transported to Amman on the planned delivery schedule.',
          'Close coordination with port operators, customs authorities, transport providers, and the consignee throughout.',
          'The entire operation was completed within one week according to the agreed plan.',
        ],
        image: {
          src: '/projects/aqaba-amman-execution.jpg',
          alt: "Inland EV transport execution to Amman",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationHeading: "Clarusto Logistics' Approach",
    coordinationOutcomes: [
      'Collection of 8 × 40FT containers from the Port of Aqaba.',
      'Safe vehicle destuffing and controlled unloading procedures.',
      'Customs inspection coordination and documentation support.',
      'Inland transportation planning from Aqaba to Amman.',
      'Delivery scheduling with the consignee.',
      'Empty container return management.',
      'Continuous operational monitoring and communication throughout the shipment.',
    ],
    keyOutcomes: [
      'Successful handling of 8 × 40FT containers carrying electric vehicles.',
      'Safe vehicle destuffing and damage-free handling throughout the operation.',
      'Efficient customs coordination and inspection management.',
      'Completion of inland transportation from Aqaba to Amman within one week.',
      'No operational or customs-related delays during execution.',
      'Timely return of empty containers in accordance with operational requirements.',
      'Smooth coordination between port operations, customs authorities, transport providers, and the consignee.',
    ],
    outcomesImage: {
      src: '/projects/aqaba-amman-outcomes.jpg',
      alt: "Completed Aqaba to Amman vehicle delivery",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This project demonstrates Clarusto Logistics\' expertise in automotive import logistics, customs coordination, and inland transportation management for electric vehicle shipments.',
      'Working through its trusted Jordan logistics partner, Clarusto successfully managed the movement of 8 × 40FT containers from the Port of Aqaba to Amman through structured planning, efficient customs coordination, and reliable transport execution. By completing the operation within the planned timeline, avoiding operational delays, and ensuring the safe handling of all vehicles, Clarusto delivered a dependable and efficient logistics solution that reinforced its capability in managing complex automotive supply chain operations across the Middle East.',
    ],
  },
  {
    slug: 'gas-ngl-facility-supply-land-sea',
    title: 'Gas & NGL Facility Supply (Land & Sea)',
    category: 'Oil & Gas · Multimodal Project Cargo',
    client: 'Dragados Gulf Construction Co.',
    subheading:
      'Synchronized land and sea transport for Gas and NGL supply to a major EPC contractor operating across Saudi Arabia and the wider Middle East.',
    excerpt:
      'Clarusto executed a critical sub-contract for Gas and NGL export — coordinating specialized road haulage, heavy-lift handling, and sea transport with strict Saudi compliance and zero-error delivery.',
    result: 'Completed within desired duration with no errors',
    heroImage: '/projects/wuhan-office-hero.png',
    publishedAt: '2026-01-15',
    location: 'Saudi Arabia · Middle East',
    metaTitle: 'Gas & NGL Facility Supply Case Study | Clarusto Logistics',
    metaDescription:
      'How Clarusto Logistics delivered Gas and NGL supply for Dragados Gulf Construction through synchronized land and sea multimodal transport across Saudi Arabia.',
    ogImage: '/projects/wuhan-office-hero.png',
    background: [
      'This case study covers the consignment of Gas and NGL supply to our client Dragados Gulf Construction Co. — a construction, infrastructure, and engineering company operating in the Middle East, particularly in Saudi Arabia.',
      'They typically handle large-scale projects from design through construction and delivery, with a strong focus on offshore industrial and energy projects in remote areas and harsh environments. Their EPC services are backed by a Spanish group active in energy, oil, and industrial mega-projects.',
      'Clarusto’s accredited profile provided a decisive advantage in securing this supply project for Gas and NGL movement through combined land and sea transport.',
    ],
    objective: [
      'Clarusto undertook this project as a prime and significant challenge requiring deep knowledge, exact planning, and disciplined execution. It demonstrates how complex logistics are delivered with available resources and operational efficiency.',
      'As a sub-contract assignment, transporting Gas & NGL alongside heavy machinery was considered one of the most critical tasks. The core requirement was synchronizing dual transport modes for safe and timely delivery.',
      'Land transport initialized shipment of heavy machinery using specialized capability, while sea transport completed the movement safely to destination.',
    ],
    transportModes: [
      {
        title: 'Land Transport',
        summary:
          'The foremost mode used to initialize shipment of heavy machinery and oversized project cargo.',
        activities: [
          'Specialized trailers and support vehicles for uploading and offloading oversized loads.',
          'Route surveys conducted ahead of movement.',
          'Planned routing to reduce traffic disruption during peak hours.',
          'Advanced projection technology to avoid delays linked to radius turnings.',
        ],
        challenges: [
          'Assessing and avoiding corridors, sharp cuts, and narrow connectivity.',
          'Confirming favorable road conditions and bridge clearances.',
          'Identifying bottleneck routing and re-routing in advance where required.',
        ],
        execution: [
          'Deployed cranes and lifters capable of handling oversized goods and project modules.',
          'Completed documentation and permits to meet regulatory compliance and avoid haulage delays.',
          'Executed planned transit on a sub-contracted basis to minimize operational risk.',
          'Coordinated experienced workforce to manage critical situations on route.',
        ],
        image: {
          src: '/projects/wuhan-office-oversize-road.png',
          alt: 'Oversize load on specialized road transport',
          caption:
            'Land transport phase — oversize load movement with route-survey planning.',
        },
      },
      {
        title: 'Sea Transport',
        summary:
          'The second and final mode used to complete the entire shipment safely to destination.',
        activities: [
          'Transfer and shift of cargo using relevant lifters, handlers, and support vehicles.',
          'Vessel selection with capacity for oversized loadings and voyage balance.',
          'Full documentation completed for mode-of-transport transfer.',
        ],
        challenges: [
          'Ensuring safe and secured stowage for the full voyage.',
          'Deploying qualified personnel across assessment, evaluation, and execution phases.',
          'Maintaining inventory accuracy at inbound and outbound ports.',
          'Regulating voyage security in line with assessed compliance requirements.',
        ],
        execution: [
          'Seamless handover between transport modes while maintaining security standards.',
          'Checklist-controlled documentation during each mode change.',
          'Early positioning of equipment and vehicles for smooth transition.',
          'Minimized port haulage to avoid extra charges or penalties.',
          'Partner staff briefed on the full shipment procedure end to end.',
        ],
        image: {
          src: '/projects/wuhan-office-heavy-lift-vessel.png',
          alt: 'Heavy-lift vessel carrying industrial module',
          caption:
            'Sea transport phase — heavy-lift vessel for project cargo stowage.',
        },
      },
    ],
    objectiveImage: {
      src: '/projects/wuhan-office-hero.png',
      alt: 'Inland port heavy-lift operation for oversized industrial cargo',
      caption:
        'Inland port transfer and heavy-lift handling at the land–sea interface.',
    },
    outcomesImage: {
      src: '/projects/wuhan-office-warehouse-ops.png',
      alt: 'Logistics team coordinating shipment operations',
      caption:
        'Operations coordination and documentation control across the supply chain.',
    },
    coordinationOutcomes: [
      'Multimodal coordination with seamless transition between inland port handling and sea voyage.',
      'Strict compliance with permits for heavy haulage across all mode changes.',
      'Pre-aligned compliance with Saudi transport laws for each transport leg.',
      'Planned mitigation of safety risk across land and marine interfaces.',
      'Close coordination with port and marine authorities throughout execution.',
    ],
    keyOutcomes: [
      'Faster distribution across all modes of conveyance and process stages.',
      'Well-equipped, planned partnership effort across subcontractors and port teams.',
      'Achieved reduction in fuel costing through optimized routing.',
      'Assessed identification of route planning and corridors for heavy loading.',
      'Detailed route surveys conducted and implemented successfully.',
    ],
    conclusion: [
      'A planned work plan played a vital combined role in achieving target-based deliverance. Teamwork at all levels and coordination-driven execution gave Clarusto a clear edge in global logistics capability.',
      'In-depth planning of machinery and vehicle placements was essential for smooth functionality across break-up routes and mode transitions. The entire shipment was accomplished with no errors and within the desired duration.',
    ],
  },
  {
    slug: 'axial-metal-expansion-joint-logistics',
    title: 'Heavy Industrial Cargo Transportation from China to Saudi Arabia',
    category: 'Heavy Industry · FCL Project Cargo',
    client: 'Leading construction sector client',
    subheading:
      'End-to-end transportation of 130 Axial Metal Expansion Joints from China to Riyadh in 20FT and 40FT FCL containers with full customs and inland delivery coordination.',
    excerpt:
      'Clarusto delivered 130 axial metal expansion joints (Model P3200 & P1200) in ~22-tonne FCL containers from China to Riyadh with SOLAS VGM compliance and zero-damage execution.',
    result: '130 units delivered · Zero operational disruptions',
    heroImage: '/projects/expansion-joints-china-saudi-hero.jpg',
    publishedAt: '2026-06-18',
    location: 'China → Riyadh, Saudi Arabia',
    metaTitle: 'Industrial Expansion Joints China to Saudi Arabia | Clarusto',
    metaDescription:
      'Case study: end-to-end FCL transportation of 130 axial metal expansion joints from China to Riyadh with customs clearance, port handling, and inland delivery.',
    ogImage: '/projects/expansion-joints-china-saudi-hero.jpg',
    background: [
      'Clarusto Logistics successfully managed the end-to-end transportation of 130 Axial Metal Expansion Joints from China to Riyadh, Saudi Arabia, for a leading construction sector client. Following the successful execution of previous shipments, the client once again entrusted Clarusto with the transportation of this critical industrial cargo.',
      'The shipment comprised 124 units of Model P3200 and 6 units of Model P1200, transported in 20FT and 40FT Full Container Load (FCL) containers, with each container weighing approximately 22 tonnes. The scope of work included export coordination, ocean freight, customs clearance, port handling, documentation management, and final inland transportation to the project site in Riyadh.',
      'Through meticulous planning and seamless coordination, Clarusto ensured the cargo was delivered safely, efficiently, and within the required project timeline.',
    ],
    objective: [
      'Transporting heavy industrial components across international borders required careful planning, strict regulatory compliance, and close coordination between multiple stakeholders. The weight and dimensions of the cargo demanded optimized container planning while ensuring compliance with shipping line and port restrictions.',
    ],
    objectiveImage: {
      src: '/projects/expansion-joints-overview.jpg',
      alt: "Oversized expansion joint cargo overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Heavy FCL industrial cargo from China to Riyadh with strict weight, documentation, and port coordination requirements.',
        activities: [],
        challenges: [
          'Managing containers weighing approximately 22 tonnes while complying with shipping line payload restrictions.',
          'Selecting the appropriate 20FT and 40FT FCL containers for heavy cargo transportation.',
          'Ensuring compliance with SOLAS Verified Gross Mass (VGM) regulations.',
          'Coordinating export documentation, customs formalities, and port operations.',
          'Managing potential congestion at the origin port without affecting vessel schedules.',
          'Preventing overweight penalties, storage charges, demurrage, detention, and operational delays.',
          'Maintaining seamless coordination between ocean freight and inland transportation to Riyadh.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'A comprehensive logistics strategy ensuring efficient movement from origin to Riyadh while maintaining full compliance with international shipping and Saudi import regulations.',
        activities: [
          'Detailed assessment of cargo dimensions, weight, and handling requirements.',
          'Selection of the most suitable 20FT and 40FT FCL container configurations.',
          'Optimized container loading to maximize space utilization within permissible weight limits.',
          'Compliance with SOLAS Verified Gross Mass (VGM) requirements.',
          'Preparation and verification of all export, shipping, and customs documentation.',
          'Coordination with shipping lines, port authorities, customs officials, and inland transport providers.',
          'Continuous shipment monitoring and proactive communication throughout the transport cycle.',
          'Planned inland transportation from the Saudi arrival port to the final project location in Riyadh.',
        ],
        challenges: [],
        execution: [
          'Conducted detailed cargo assessment and developed an optimized container loading plan before shipment.',
          'Prepared and verified all export documentation, customs declarations, and shipping documents before vessel departure.',
          'Maintained continuous coordination with shipping lines and port authorities for timely bookings and cargo handling.',
          'Completed customs clearance and port handling efficiently upon arrival in Saudi Arabia.',
          'Deployed dedicated transport resources with continuous monitoring for delivery to the Riyadh project site.',
          'Ensured complete shipment visibility through close coordination between partners and the client.',
        ],
        image: {
          src: '/projects/expansion-joints-execution.jpg',
          alt: "Multimodal heavy cargo execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationHeading: "Clarusto Logistics' Approach",
    coordinationOutcomes: [
      'Detailed assessment of cargo dimensions, weight, and handling requirements.',
      'Selection of the most suitable 20FT and 40FT FCL container configurations.',
      'Optimized container loading within permissible weight limits.',
      'Compliance with SOLAS Verified Gross Mass (VGM) requirements.',
      'Preparation and verification of all export, shipping, and customs documentation.',
      'Coordination with shipping lines, port authorities, customs officials, and inland transport providers.',
      'Continuous shipment monitoring and proactive communication throughout the transport cycle.',
      'Planned inland transportation from the Saudi arrival port to Riyadh.',
    ],
    keyOutcomes: [
      'Successful transportation of 130 industrial expansion joints without cargo damage.',
      'Efficient utilization of 20FT and 40FT FCL containers, each carrying approximately 22 tonnes of cargo.',
      'Full compliance with international shipping regulations, SOLAS VGM requirements, and Saudi customs procedures.',
      'Seamless coordination of ocean freight, customs clearance, and inland transportation.',
      'Rapid delivery to the project site in Riyadh, supporting the client\'s construction schedule without delays.',
      'Elimination of unnecessary storage, demurrage, detention, and overweight-related charges.',
      'Smooth execution of the shipment with zero operational disruptions.',
    ],
    outcomesImage: {
      src: '/projects/expansion-joints-outcomes.jpg',
      alt: "Delivered industrial cargo in Saudi Arabia",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This project demonstrates Clarusto Logistics\' expertise in managing complex heavy industrial cargo through integrated international logistics solutions. By combining strategic cargo planning, regulatory compliance, documentation management, ocean freight coordination, customs clearance, and efficient inland transportation, Clarusto successfully delivered the shipment from China to Riyadh safely and on schedule.',
      'The successful execution highlights Clarusto\'s ability to manage large-scale industrial logistics projects with precision, reliability, and operational excellence, reinforcing its position as a trusted logistics partner for heavy cargo transportation across international supply chains.',
    ],
  },
  {
    slug: 'linde-heavy-lift-delivery-saudi-arabia',
    title: 'End-to-End Delivery of Heavy Lift Cargo to Saudi Arabia',
    category: 'Heavy Lift · Multimodal Project Cargo',
    client: 'LINDE',
    subheading:
      'Sea and SPMT inland movement of oversized European equipment to Dammam Industrial City 2 for LINDE.',
    excerpt:
      'Clarusto moved heavy-lift equipment from Europe to Dammam Industrial City 2 for LINDE — heavy-lift vessel stowage, route surveys, and multi-axle hydraulic trailers with full shipment visibility.',
    result: '23-day sea transit · On-time site delivery',
    heroImage: '/projects/linde-saudi-hero.png',
    publishedAt: '2026-11-10',
    location: 'Europe → Dammam Industrial City 2, Saudi Arabia',
    metaTitle: 'LINDE Heavy Lift Delivery to Saudi Arabia | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics delivered heavy-lift cargo for LINDE from Europe to Dammam Industrial City 2 using heavy-lift vessels and SPMT inland haulage.',
    ogImage: '/projects/linde-saudi-hero.png',
    background: [
      'Clarusto successfully managed the transportation of heavy lift cargo for LINDE, a global leader in industrial gases and engineering solutions. The project involved moving oversized equipment from Europe to Dammam Industrial City 2, Saudi Arabia, using a combination of sea and land transportation.',
      'Due to the size and weight of the cargo, the project required detailed planning, specialized equipment, and close coordination across multiple transportation stages to ensure safe, timely delivery with complete visibility.',
    ],
    objective: [
      'Deliver oversized industrial equipment safely from Europe to Dammam Industrial City 2.',
      'Integrate sea freight, heavy haulage, route planning, and cargo monitoring into one coordinated operation.',
      'Maintain regulatory compliance and uninterrupted movement through port, customs, and inland stages.',
    ],
    objectiveImage: {
      src: '/projects/linde-saudi-overview.png',
      alt: "Heavy-lift equipment preparation overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Heavy-lift cargo needed specialized lifting, secure stowage, multimodal handovers, and Saudi industrial-corridor access under extreme weather conditions.',
        activities: [],
        challenges: [
          'Specialized lifting equipment and secure stowage for oversized, high-tonnage cargo.',
          'Coordinating sea freight, port operations, customs, and on-site delivery without schedule slip.',
          'Navigating industrial corridors and road maneuverability constraints in Saudi Arabia.',
          'Operating under high temperatures and sand exposure during inland haulage.',
          'Detailed planning at every stage to protect project timelines at destination.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto combined heavy-lift vessel loading, route surveys, SPMT inland haulage, and continuous stakeholder coordination.',
        activities: [
          'Origin-port loading with specialized heavy-lift systems onto vessels with onboard cranes.',
          'Secure sea fastening and stowage for the ocean voyage.',
          'Detailed inland route surveys and infrastructure assessments.',
          'Multi-axle hydraulic trailer (SPMT) deployment for final delivery.',
          'Coordination with shipping lines, transport providers, port authorities, and customs.',
        ],
        challenges: [],
        execution: [
          'After manufacturing completion in Europe, cargo was loaded onto a heavy-lift vessel using specialized lifting equipment.',
          'Sea freight completed with arrival in Saudi Arabia within 23 days; cargo was unloaded with heavy-duty handling systems.',
          'SPMTs moved the load to Dammam Industrial City 2 on pre-approved routes with continuous monitoring.',
          'Documentation and shipment tracking supported visibility and compliance at every stage.',
        ],
        image: {
          src: '/projects/linde-saudi-execution.png',
          alt: "SPMT inland heavy-lift execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'On-time delivery of heavy lift cargo to the project site.',
      'Successful coordination of sea and land transportation activities.',
      'Safe handling of oversized cargo throughout the logistics process.',
      'Accurate shipment tracking and improved operational visibility.',
      'Reduced transportation delays through detailed planning and route assessments.',
      'Efficient cargo movement from origin to final destination.',
      'Strong collaboration between logistics partners, transport providers, and project stakeholders.',
    ],
    outcomesImage: {
      src: '/projects/linde-saudi-outcomes.png',
      alt: "Heavy-lift cargo delivered to Dammam site",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The LINDE project highlights Clarusto’s capability in large-scale heavy-lift logistics that require specialized equipment, multimodal transportation, and detailed planning.',
      'Through effective coordination, route engineering, specialized transport solutions, and close management of every stage, Clarusto delivered the cargo to Dammam Industrial City 2 safely, efficiently, and within schedule.',
    ],
  },
  {
    slug: 'al-masana-warehousing-dammam',
    title: 'Warehousing and Logistics Management for Al Masana Water & Sewage Project',
    category: 'Warehousing · Industrial Project Support',
    client: 'ABB Contracting Co.',
    subheading:
      'Packing, storage, inventory control, and dispatch support for ABB on the Al Masana Water & Sewage scope in Dammam Industrial City 2.',
    excerpt:
      'Clarusto established structured warehousing for ABB Contracting Co. on the Al Masana Water & Sewage project — SOPs, packing stations, WMS visibility, and faster dispatch in Dammam Industrial City 2.',
    result: 'Improved inventory visibility · On-timeline completion',
    heroImage: '/projects/reine-masana-hero.png',
    publishedAt: '2026-11-08',
    location: 'Dammam Industrial City 2, Saudi Arabia',
    metaTitle: 'Al Masana Warehousing Case Study | Clarusto Logistics',
    metaDescription:
      'Case study: Clarusto Logistics managed warehousing, packing, inventory, and dispatch for ABB Contracting Co. on the Al Masana Water & Sewage project in Dammam.',
    ogImage: '/projects/reine-masana-hero.png',
    background: [
      'Clarusto managed warehousing operations for the Al Masana Water & Sewage infrastructure scope in Dammam Industrial City 2, Saudi Arabia. The scope included packing, storage, inventory management, and dispatch support for ABB Contracting Co.',
      'The requirement was to establish an efficient warehouse system capable of supporting material handling while ensuring proper storage, accurate inventory control, and timely dispatch within the project timeline.',
    ],
    objective: [
      'Improve storage utilization and packing consistency for infrastructure materials.',
      'Introduce SOPs and technology-backed inventory visibility for material control.',
      'Support timely dispatch with structured warehouse workflows for ABB Contracting Co.',
    ],
    objectiveImage: {
      src: '/projects/reine-masana-overview.png',
      alt: "Project materials warehouse overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Large-scale water and sewage materials needed organized warehousing to replace manual, inefficient storage and packing workflows.',
        activities: [],
        challenges: [
          'Dependence on manual handling processes impacting operational efficiency.',
          'Limited storage optimization and space utilization.',
          'Inefficient packing procedures causing delays and inconsistencies.',
          'Dispatch risk from unstructured warehouse workflows.',
          'Need for improved inventory visibility and material control.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto introduced organized storage, dedicated packing stations, SOPs, WMS tracking, and coordinated dispatch with ABB.',
        activities: [
          'Organized storage practices to maximize warehouse space.',
          'Standardized packing procedures and dedicated packing stations.',
          'SOPs for consistent warehouse operations.',
          'Technology-based inventory tracking and material movement management.',
          'Improved coordination between warehouse teams and project stakeholders.',
        ],
        challenges: [],
        execution: [
          'Implemented ASRS-supported storage efficiency and reduced manual process dependency.',
          'Introduced a Warehouse Management System for real-time inventory tracking and visibility.',
          'Used conveyor systems and dedicated packing stations to standardize preparation and dispatch.',
          'Managed operations through defined procedures and continuous communication with ABB Contracting Co.',
        ],
        image: {
          src: '/projects/reine-masana-execution.png',
          alt: "Packing and dispatch warehouse execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Improved warehouse organization and storage utilization.',
      'Enhanced inventory visibility and tracking accuracy.',
      'Faster packing and dispatch processes.',
      'Reduced manual handling inefficiencies.',
      'Improved material flow through optimized warehouse operations.',
      'Better coordination between warehouse teams and stakeholders.',
      'Successful completion within the required timeline.',
    ],
    outcomesImage: {
      src: '/projects/reine-masana-outcomes.png',
      alt: "Organized inventory outcomes for ABB",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The Al Masana Water & Sewage project highlights Clarusto’s capability in efficient warehousing and logistics for large-scale industrial operations.',
      'Through process improvement, warehouse technology, standardized procedures, and effective coordination, Clarusto enhanced storage, packing, and inventory management while supporting ABB Contracting Co.’s operational requirements.',
    ],
  },
  {
    slug: 'vehicle-logistics-jeddah-gcc-distribution',
    title: 'End-to-End Vehicle Logistics Management for Automotive Distribution',
    category: 'Automotive · GCC Vehicle Distribution',
    client: 'Automotive distribution partner, Jeddah',
    subheading:
      'RORO and container vehicle handling through Jeddah Islamic Port with bonded storage, PDI, and GCC regional distribution.',
    excerpt:
      'Clarusto ran Jeddah hub vehicle logistics for 400–500 units per month — RORO and 40’ HQ unstuffing, bonded yard storage, PDI, and car-carrier delivery across GCC and neighboring markets.',
    result: '400–500 vehicles/month · Multi-market distribution',
    heroImage: '/projects/gcc-vehicles-jeddah-hero.png',
    publishedAt: '2026-11-06',
    location: 'Jeddah → GCC & neighboring markets',
    metaTitle: 'Jeddah GCC Vehicle Logistics Case Study | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics managed RORO and container vehicle handling, bonded storage, PDI, and GCC distribution from Jeddah Islamic Port.',
    ogImage: '/projects/gcc-vehicles-jeddah-hero.png',
    background: [
      'Clarusto managed vehicle logistics for an automotive distribution requirement in Jeddah, Saudi Arabia. Imported vehicles arrived through both RORO vessels and container shipments via Jeddah Islamic Port.',
      'The scope covered terminal pickup, container unstuffing, bonded storage, Pre-Delivery Inspection (PDI), inventory management, and final transportation to GCC and neighboring markets including Riyadh, Muscat, Doha, Kuwait City, Baghdad, and Amman, averaging 400–500 vehicles per month.',
    ],
    objective: [
      'Establish a reliable Jeddah hub for high-volume RORO and containerized vehicle handling.',
      'Protect vehicle condition through bonded storage, inventory control, and PDI before dispatch.',
      'Support cross-border delivery across GCC and neighboring markets with specialized car carriers.',
    ],
    objectiveImage: {
      src: '/projects/gcc-vehicles-jeddah-overview.png',
      alt: "Bonded vehicle yard overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'High-volume automotive logistics needed one controlled process for RORO, container unstuffing, bonded storage, and cross-border delivery.',
        activities: [],
        challenges: [
          'Handling vehicles through both RORO and containerized shipments.',
          'Managing container unstuffing for multiple vehicles inside 40’ HQ containers.',
          'Providing secure bonded storage for imported vehicles.',
          'Maintaining vehicle condition during handling, storage, and transportation.',
          'Managing cross-border delivery requirements across different countries.',
          'Coordinating port operations, storage facilities, inspection teams, and transport partners.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto ran an integrated Jeddah hub covering port collection, unstuffing, bonded yard, PDI, and regional car-carrier distribution.',
        activities: [
          'Vehicle collection from RORO and container terminals.',
          'Container unstuffing and vehicle handling operations.',
          'Bonded yard storage and inventory management.',
          'Pre-Delivery Inspection (PDI) before dispatch.',
          'Transportation through specialized vehicle carrier trucks.',
          'Cross-border delivery support across GCC and neighboring markets.',
        ],
        challenges: [],
        execution: [
          'Vehicles arriving by RORO and container were collected from Jeddah Islamic Port and transferred to bonded storage.',
          'Containerized shipments were unstuffed from 40’ HQ multi-vehicle configurations under controlled handling.',
          'PDI was completed before dispatch; car carriers handled regional distribution with flexible options for smaller lots.',
          'Continuous coordination between port, warehouse, inspection, and transport teams kept the flow uninterrupted.',
        ],
        image: {
          src: '/projects/gcc-vehicles-jeddah-execution.jpg',
          alt: "Car-carrier distribution execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful handling of RORO and containerized vehicle shipments.',
      'Efficient container unstuffing and vehicle transfer operations.',
      'Improved vehicle visibility through organized inventory management.',
      'Smooth coordination between port, storage, and transportation activities.',
      'Reliable distribution support across GCC and neighboring markets.',
      'Capability to manage high-volume automotive logistics operations.',
    ],
    outcomesImage: {
      src: '/projects/gcc-vehicles-jeddah-outcomes.png',
      alt: "GCC multi-market vehicle delivery outcomes",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The Jeddah vehicle distribution operation highlights Clarusto’s capability in end-to-end automotive logistics.',
      'Through port handling, bonded storage, vehicle inspection, and regional transportation coordination, Clarusto delivered a structured solution for efficient multi-market vehicle distribution.',
    ],
  },
  {
    slug: 'air-freight-destination-chicago-stirling',
    title: 'Air Freight Destination Handling and Final Delivery — Chicago to Stirling',
    category: 'Air Freight · Final-Mile Delivery',
    client: 'DAP consignee, Stirling (Scotland)',
    subheading:
      'Glasgow Airport collection and dedicated final delivery to Stirling for a DAP air freight shipment from Chicago.',
    excerpt:
      'Clarusto handled destination air freight for a ~112 kg palletized shipment from Chicago O’Hare to Stirling via Glasgow Airport under DAP terms with minimal airport dwell.',
    result: 'On-time Stirling delivery · No cargo damage',
    heroImage: '/projects/chicago-stirling-air-hero.png',
    publishedAt: '2026-11-04',
    location: 'Chicago, USA → Stirling, Scotland',
    metaTitle: 'Chicago to Stirling Air Freight Delivery | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics managed DAP destination handling from Chicago to Stirling via Glasgow Airport with dedicated final-mile delivery.',
    ogImage: '/projects/chicago-stirling-air-hero.png',
    background: [
      'Clarusto managed destination handling and final delivery of an air freight shipment from Chicago, United States, to Stirling, Scotland under DAP (Delivered at Place) terms.',
      'The cargo was a palletized shipment of approximately 112 kilograms requiring timely collection from Glasgow Airport and delivery to the consignee’s address in Stirling.',
    ],
    objective: [
      'Collect cargo promptly on arrival at Glasgow Airport under DAP terms.',
      'Schedule dedicated final-mile transport to Stirling with full shipment visibility.',
      'Minimize airport dwell and communication gaps between origin, destination, and consignee.',
    ],
    objectiveImage: {
      src: '/projects/chicago-stirling-air-overview.png',
      alt: "Aircraft cargo loading overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'A small but time-sensitive DAP air shipment needed precise airport release, communication, and final-mile scheduling.',
        activities: [],
        challenges: [
          'Coordinating cargo collection upon arrival at Glasgow Airport.',
          'Managing destination handling procedures under DAP shipment terms.',
          'Ensuring timely communication between origin, destination, and consignee.',
          'Scheduling final delivery within the required timeframe.',
          'Maintaining shipment visibility throughout transportation.',
          'Avoiding delays from cargo release and airport handling procedures.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto prepared destination handling in advance, collected promptly at Glasgow, and ran dedicated transport to Stirling.',
        activities: [
          'Airport cargo collection at Glasgow Airport.',
          'Coordination of destination handling activities.',
          'Delivery planning and scheduling with the consignee.',
          'Dedicated transportation from Glasgow to Stirling.',
          'Continuous shipment monitoring and communication.',
          'Efficient documentation and operational coordination.',
        ],
        challenges: [],
        execution: [
          'After departure from Chicago O’Hare, Clarusto coordinated with origin and destination stakeholders ahead of Glasgow arrival.',
          'On release, collection minimized airport dwell; transport was pre-arranged for immediate movement to Stirling.',
          'Continuous communication kept scheduling accurate through final delivery with no handling issues.',
        ],
        image: {
          src: '/projects/chicago-stirling-air-execution.png',
          alt: "Airport handling and final-mile execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful airport collection and final delivery execution.',
      'Smooth coordination between origin and destination teams.',
      'Efficient handling under DAP shipment terms.',
      'Timely delivery to the consignee in Stirling.',
      'Reliable shipment visibility and communication throughout the process.',
      'Safe transportation with no cargo damage or handling issues.',
    ],
    outcomesImage: {
      src: '/projects/chicago-stirling-air-outcomes.png',
      alt: "Warehouse handover outcomes in Scotland",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This air freight shipment highlights Clarusto’s capability in destination logistics and final-mile delivery across international supply chains.',
      'Proactive coordination, efficient handling, and reliable transportation ensured seamless cargo movement from the United States to Scotland.',
    ],
  },
  {
    slug: 'pharma-ddp-customs-clearance-france',
    title: 'Import Customs Clearance and DDP Distribution of Pharmaceutical Cargo — France',
    category: 'Pharmaceuticals · Customs & DDP Delivery',
    client: 'Pharmaceutical consignee, France',
    subheading:
      'Le Havre customs clearance and DDP final-mile delivery for non-hazardous medicine cargo with empty container return.',
    excerpt:
      'Clarusto cleared and delivered 216 cases / 18 pallets (4,579.2 kg) of pharmaceutical cargo at Le Havre under DDP — documentation control, final delivery, and empty container return.',
    result: 'Compliant clearance · Timely DDP delivery',
    heroImage: '/projects/pharma-france-ddp-hero.png',
    publishedAt: '2026-11-02',
    location: 'Le Havre → France consignee',
    metaTitle: 'France Pharma DDP Customs Clearance Case Study | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics managed pharmaceutical import clearance at Le Havre and DDP distribution with empty container return in France.',
    ogImage: '/projects/pharma-france-ddp-hero.png',
    background: [
      'Clarusto managed import clearance and final distribution of a pharmaceutical shipment received at Le Havre, France — non-hazardous medicine cargo of 216 cases on 18 pallets totaling 4,579.2 KGS.',
      'The scope included customs clearance, DDP delivery coordination, final-mile transportation, and timely empty container return to the shipping line depot under strict pharmaceutical import controls.',
    ],
    objective: [
      'Clear pharmaceutical cargo compliantly under French import regulations.',
      'Execute DDP delivery with full visibility and protected shipment integrity.',
      'Avoid storage, demurrage, and detention through fast release and empty return.',
    ],
    objectiveImage: {
      src: '/projects/pharma-france-ddp-overview.png',
      alt: "Pharmaceutical cargo overview at Le Havre",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Pharmaceutical imports demanded accurate documentation, duty handling, and tightly timed release to protect schedule and cost.',
        activities: [],
        challenges: [
          'Customs clearance for pharmaceutical cargo under French import regulations.',
          'Complete and accurate documentation to prevent customs delays.',
          'DDP delivery coordination with full supply-chain visibility.',
          'Managing duties, taxes, and import processing requirements.',
          'Avoiding storage, detention, and demurrage through efficient cargo release.',
          'Timely empty container return to prevent shipping line penalties.',
          'Maintaining shipment integrity throughout transportation and delivery.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto ran pre-arrival document checks, Le Havre clearance, DDP transport, and empty container return as one cycle.',
        activities: [
          'Pre-arrival review and verification of import documentation.',
          'Customs clearance management at Le Havre Port.',
          'Coordination with customs and terminal authorities for cargo release.',
          'DDP delivery planning and transportation management.',
          'Continuous milestone tracking and final delivery scheduling.',
          'Empty container return coordination with shipping line requirements.',
        ],
        challenges: [],
        execution: [
          'On arrival at Le Havre, Clarusto initiated clearance and verified pharmaceutical import documentation.',
          'After approval, DDP transport moved cargo from port to consignee with continuous monitoring.',
          'Empty container was returned promptly to the designated depot to close the logistics cycle without detention risk.',
        ],
        image: {
          src: '/projects/pharma-france-ddp-execution.png',
          alt: "Customs and DDP delivery execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful customs clearance of pharmaceutical cargo.',
      'Timely DDP delivery to the final consignee.',
      'Full compliance with French import and customs regulations.',
      'Accurate management of import documentation and cargo release.',
      'Reduced risk of storage, demurrage, and detention charges.',
      'Efficient coordination between all logistics stakeholders.',
      'Timely return of the empty container to the shipping line.',
      'Secure handling and transportation of pharmaceutical products.',
    ],
    outcomesImage: {
      src: '/projects/pharma-france-ddp-outcomes.png',
      alt: "Final pharma delivery outcomes in France",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This pharmaceutical import project demonstrates Clarusto’s expertise in regulated cargo and end-to-end international logistics.',
      'Effective customs coordination, proactive shipment management, and compliant documentation ensured safe, timely movement from Le Havre Port to final destination.',
    ],
  },
  {
    slug: 'methanol-dangerous-goods-chemanol-jubail',
    title: 'Specialized Dangerous Goods Transportation: Methanol for Chemanol Jubail',
    category: 'Dangerous Goods · Chemical Logistics',
    client: 'Methanol chemicals manufacturer (via Deugro)',
    subheading:
      'UN1230 methanol packaging and multimodal DG transport for the Chemanol Jubail Project in Saudi Arabia.',
    excerpt:
      'Clarusto packaged and moved methanol (UN1230) for Chemanol Jubail via Deugro — UN-approved IBCs, hazard labeling, land and air DG compliance, and GPS-tracked transit with zero leakage.',
    result: 'Zero leakage · Full DG compliance',
    heroImage: '/projects/methanol-chemanol-hero.png',
    publishedAt: '2026-10-30',
    location: 'To Jubail, Saudi Arabia',
    metaTitle: 'Methanol DG Transport Chemanol Jubail | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics handled UN1230 methanol packaging and dangerous goods transport for the Chemanol Jubail Project with zero leakage.',
    ogImage: '/projects/methanol-chemanol-hero.png',
    background: [
      'Clarusto managed packaging and transportation of methanol chemicals for the Chemanol Jubail Project in Jubail, Saudi Arabia, through Deugro for a leading methanol chemicals manufacturer.',
      'Methanol is highly flammable and toxic (UN1230). The shipment required strict dangerous goods compliance, approved packaging, and continuous monitoring across land transport and air freight.',
    ],
    objective: [
      'Move methanol safely under UN1230 with approved packaging and complete DG documentation.',
      'Prevent leakage, evaporation, contamination, and product loss across multimodal legs.',
      'Maintain hazard communication, route risk controls, and partner compliance throughout transit.',
    ],
    objectiveImage: {
      src: '/projects/methanol-chemanol-overview.png',
      alt: "UN-approved methanol packaging overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'UN1230 methanol required secure containment, full DG documentation, and multimodal safety controls.',
        activities: [],
        challenges: [
          'Safe movement of bulk methanol classified as a dangerous good under UN1230.',
          'Minimizing leakage, evaporation, contamination, and product loss.',
          'Complete documentation for international hazardous materials regulations.',
          'Secure packaging able to withstand long-distance multimodal transport.',
          'Proper hazard identification and environmental/safety adherence.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto used UN-approved IBCs, leak-proof containment, certified partners, inspections, and GPS tracking.',
        activities: [
          'Correct UN1230 classification with required dangerous goods documentation.',
          'Approved packaging systems matched to hazardous characteristics.',
          'Clear hazard labeling and stakeholder handling briefings.',
          'Route assessments and preventive safety measures.',
          'GPS-enabled tracking for visibility and cargo security.',
        ],
        challenges: [],
        execution: [
          'Shipped in UN-approved packaging and Intermediate Bulk Containers designed for hazardous chemicals.',
          'Applied corrosion-resistant, leak-proof systems with additional containment layers.',
          'Performed regular inspections and pressure checks with certified logistics partners.',
          'Evaluated routes before each stage to avoid densely populated and environmentally sensitive areas where possible.',
        ],
        image: {
          src: '/projects/methanol-chemanol-execution.png',
          alt: "Dangerous goods multimodal execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Full compliance with environmental, safety, and dangerous goods regulations.',
      'Smooth customs and port clearances throughout transportation.',
      'Zero leakage, emissions, or product loss during transit.',
      'Safe handling of cargo across all transportation stages.',
      'Improved shipment visibility and security through GPS tracking.',
      'Increased confidence among clients and logistics partners on a high-risk shipment.',
    ],
    outcomesImage: {
      src: '/projects/methanol-chemanol-outcomes.png',
      alt: "Safe methanol delivery outcomes Jubail",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The Chemanol Jubail Project demonstrates Clarusto’s capability in hazardous chemical shipments that demand strict regulatory compliance and specialized planning.',
      'Approved packaging, risk management, continuous monitoring, and partner coordination delivered methanol safely and efficiently to Jubail, Saudi Arabia.',
    ],
  },
  {
    slug: 'stockton-export-container-haulage-uk',
    title: 'Transportation of Export Containers from Stockton-on-Tees to UK Ports',
    category: 'Inland Haulage · UK Export Logistics',
    client: 'UK export shipper, Stockton-on-Tees',
    subheading:
      'Inland container collection and timed delivery from Stockton-on-Tees to Felixstowe and Southampton for vessel cut-offs.',
    excerpt:
      'Clarusto hauled export containers from Stockton-on-Tees to Felixstowe and Southampton — dedicated trucking, port booking coordination, and cut-off-aligned scheduling.',
    result: 'On-schedule port delivery · Reduced cut-off risk',
    heroImage: '/projects/stockton-uk-export-hero.png',
    publishedAt: '2026-10-28',
    location: 'Stockton-on-Tees → Felixstowe & Southampton',
    metaTitle: 'Stockton to UK Ports Export Haulage | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics managed inland export container transportation from Stockton-on-Tees to Felixstowe and Southampton ports.',
    ogImage: '/projects/stockton-uk-export-hero.png',
    background: [
      'Clarusto managed inland transportation of export containers from Stockton-on-Tees, United Kingdom, to major export gateways including Felixstowe Port and Southampton Port.',
      'The scope covered container collection from the client’s facility, inland haulage, port delivery coordination, and movement monitoring against vessel cut-off and terminal booking requirements.',
    ],
    objective: [
      'Collect and deliver export containers in line with vessel cut-off schedules.',
      'Coordinate multi-port deliveries while controlling haulage cost and resource use.',
      'Maintain visibility and flexibility across container sizes and booking constraints.',
    ],
    objectiveImage: {
      src: '/projects/stockton-uk-export-overview.png',
      alt: "Export container staging overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Long-distance inland export moves had to hit multiple port bookings without missing vessel cut-offs.',
        activities: [],
        challenges: [
          'Coordinating container collection within planned shipping timelines.',
          'Managing deliveries to multiple export ports based on vessel schedules.',
          'Ensuring compliance with port booking and terminal requirements.',
          'Minimizing delays from loading schedules, traffic, and operational constraints.',
          'Flexibility for different container sizes and shipment requirements.',
          'Efficient utilization of transportation resources while controlling costs.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto assigned dedicated haulage, optimized routes, and aligned deliveries to terminal acceptance windows.',
        activities: [
          'Collection of containers from the client’s facility in Stockton-on-Tees.',
          'Dedicated trucking arrangements for inland transportation.',
          'Route planning to optimize transit efficiency.',
          'Coordination with port terminals and booking systems.',
          'Monitoring of container movement throughout transit.',
          'Scheduling deliveries in line with vessel cut-off requirements.',
        ],
        challenges: [],
        execution: [
          'After cargo readiness, containers were collected and schedules aligned to export and port operating procedures.',
          'Dedicated haulage and route planning minimized transit delay risk.',
          'Port and terminal coordination enabled timely acceptance while progress was monitored against export deadlines.',
        ],
        image: {
          src: '/projects/stockton-uk-export-execution.png',
          alt: "Inland haulage to UK ports execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful transportation of export containers from Stockton-on-Tees to UK export ports.',
      'Timely port deliveries aligned with vessel schedules.',
      'Efficient coordination between transportation and port operations.',
      'Improved visibility throughout the inland transportation process.',
      'Reduced risk of export delays and missed vessel cut-offs.',
      'Reliable execution of container haulage activities.',
    ],
    outcomesImage: {
      src: '/projects/stockton-uk-export-outcomes.png',
      alt: "On-time port delivery outcomes",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This inland container project highlights Clarusto’s expertise in UK export logistics and domestic haulage.',
      'Detailed planning, coordinated execution, and continuous monitoring moved containers efficiently from facility to major UK export ports.',
    ],
  },
  {
    slug: 'oog-bogie-transport-india-netherlands',
    title: 'Transportation of Out-of-Gauge Bogie from India to the Netherlands',
    category: 'Project Cargo · OOG Sea Freight',
    client: 'OOG project cargo shipper',
    subheading:
      '20FT flat-rack sea freight for an out-of-gauge bogie from Nhava Sheva (JNPT) to Rotterdam.',
    excerpt:
      'Clarusto moved an OOG bogie from Nhava Sheva to Rotterdam on a 20FT flat rack — carrier approval, specialized lashing, and coordinated port handling at both ends.',
    result: 'Damage-free OOG delivery · Carrier-compliant stowage',
    heroImage: '/projects/oog-bogie-india-nl-hero.png',
    publishedAt: '2026-10-24',
    location: 'Nhava Sheva, India → Rotterdam, Netherlands',
    metaTitle: 'OOG Bogie Transport India to Netherlands | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics transported an out-of-gauge bogie from Nhava Sheva to Rotterdam on a 20FT flat rack with specialized securing.',
    ogImage: '/projects/oog-bogie-india-nl-hero.png',
    background: [
      'Clarusto managed international transportation of an Out-of-Gauge (OOG) bogie from Nhava Sheva (JNPT), India, to Rotterdam, Netherlands. Cargo dimensions exceeded standard container width limitations.',
      'The bogie was loaded onto a 20FT flat-rack container and moved by sea freight, requiring specialized planning, equipment selection, and cargo securing throughout.',
    ],
    objective: [
      'Secure carrier approval and suitable flat-rack equipment for OOG dimensions.',
      'Apply compliant lashing and handling at origin and destination ports.',
      'Complete sea freight to Rotterdam without damage or stowage disruption.',
    ],
    objectiveImage: {
      src: '/projects/oog-bogie-india-nl-overview.png',
      alt: "Out-of-gauge cargo overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Oversized bogie dimensions required non-standard equipment, carrier approval, and specialized securing.',
        activities: [],
        challenges: [
          'Managing cargo dimensions exceeding standard container width limitations.',
          'Securing carrier approval for Out-of-Gauge cargo transportation.',
          'Selecting suitable equipment for safe loading and transportation.',
          'Ensuring proper lashing to prevent cargo movement during transit.',
          'Coordinating specialized handling at origin and destination ports.',
          'Managing port operations and vessel stowage for oversized cargo.',
          'Minimizing risks associated with non-standard freight handling.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto selected a 20FT flat rack, verified dimensions, secured OOG booking approval, and executed specialized lashing.',
        activities: [
          'Selection of a 20FT Flat Rack container suitable for oversized cargo.',
          'Detailed cargo assessment and dimensional verification.',
          'Planning of loading and securing arrangements.',
          'Coordination with shipping lines for OOG booking approval.',
          'Arrangement of export handling and port operations.',
          'Specialized lashing and continuous shipment monitoring.',
        ],
        challenges: [],
        execution: [
          'Cargo dimensions and handling needs were evaluated; a 20FT flat rack was selected to accommodate width.',
          'The bogie was secured with specialized lashing inspected against shipping-line and international safety standards.',
          'Export handling at Nhava Sheva and discharge coordination in Rotterdam kept the specialized move on track.',
        ],
        image: {
          src: '/projects/oog-bogie-india-nl-execution.png',
          alt: "Specialized OOG sea freight execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful transportation of Out-of-Gauge cargo without damage.',
      'Safe loading and securing of the bogie unit on a Flat Rack container.',
      'Compliance with carrier, port, and transportation requirements.',
      'Smooth coordination between origin and destination operations.',
      'Efficient management of specialized cargo handling procedures.',
      'Successful execution of international sea freight for oversized cargo.',
    ],
    outcomesImage: {
      src: '/projects/oog-bogie-india-nl-outcomes.png',
      alt: "Bogie delivery outcomes in the Netherlands",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'The OOG bogie shipment from India to the Netherlands highlights Clarusto’s expertise in oversized and specialized project cargo.',
      'Detailed planning, coordination, and strict securing standards delivered a reliable solution tailored to non-standard freight requirements.',
    ],
  },
  {
    slug: 'food-import-customs-clearance-india-uk',
    title: 'Food Import Customs Clearance and Final Delivery: India to the United Kingdom',
    category: 'Food Logistics · UK Import Customs',
    client: 'Food importer, Wembley (London)',
    subheading:
      'FCL ambient food import from Nhava Sheva to Wembley via Southampton — multi-HS clearance and inland delivery.',
    excerpt:
      'Clarusto cleared and delivered an FCL of rice, pulses, spices, dry fruits, and packaged foods from India to Wembley via Southampton with pre-arrival document control.',
    result: 'Compliant multi-HS clearance · On-time Wembley delivery',
    heroImage: '/projects/food-import-india-uk-hero.png',
    publishedAt: '2026-10-22',
    location: 'Nhava Sheva, India → Wembley, London (via Southampton)',
    metaTitle: 'India to UK Food Import Customs Case Study | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics managed FCL food import customs clearance at Southampton and final delivery to Wembley from India.',
    ogImage: '/projects/food-import-india-uk-hero.png',
    background: [
      'Clarusto managed import clearance and final distribution of a full container load (FCL) from Nhava Sheva, India, to Wembley, London, United Kingdom.',
      'The shipment covered mixed ambient food products — rice, pulses, spices, dry fruits, and packaged foods — requiring strict UK customs and regulatory control. Scope included Southampton clearance, terminal handling, and inland delivery to Wembley.',
    ],
    objective: [
      'Clear multiple food commodities under correct HS classifications without avoidable holds.',
      'Meet UK food import compliance and potential port health inspection requirements.',
      'Release and deliver the container from Southampton to Wembley on schedule.',
    ],
    objectiveImage: {
      src: '/projects/food-import-india-uk-overview.png',
      alt: "Dry food cargo overview",
      caption: "Overview — project cargo and handling context.",
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Mixed food products needed multi-HS documentation readiness and tightly managed UK import compliance.',
        activities: [],
        challenges: [
          'Customs clearance for multiple food products under different HS classifications.',
          'Complete and accurate documentation prior to cargo arrival.',
          'Meeting UK import compliance requirements for food products.',
          'Managing potential port health inspections and regulatory checks.',
          'Coordinating terminal handling and container release procedures.',
          'Maintaining delivery schedules while minimizing port-related delays.',
          'Preventing extra costs from inspections, storage, or customs holds.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto ran pre-arrival document review, Southampton clearance, terminal release, and dedicated inland delivery to Wembley.',
        activities: [
          'Pre-arrival review of shipping documents.',
          'Customs clearance management at Southampton Port.',
          'Accurate commodity classification and declaration procedures.',
          'Coordination with authorities for import compliance requirements.',
          'Terminal handling and container release management.',
          'Inland transportation planning from Southampton to Wembley.',
          'Continuous shipment monitoring and status updates.',
        ],
        challenges: [],
        execution: [
          'Before arrival, Clarusto reviewed the commercial invoice, packing list, bill of lading, and supporting import documents.',
          'At Southampton, clearance and commodity declarations were coordinated for efficient processing and release.',
          'After terminal release, dedicated transport delivered the container to the consignee’s facility in Wembley.',
        ],
        image: {
          src: '/projects/food-import-india-uk-execution.png',
          alt: "UK customs clearance and delivery execution",
          caption:
            "Execution — operational handling and movement.",
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful customs clearance of mixed food products.',
      'Compliance with applicable UK import regulations and documentation requirements.',
      'Efficient terminal handling and container release.',
      'Smooth transportation from Southampton Port to Wembley.',
      'Timely delivery to the consignee’s facility.',
      'Reduced risk of customs delays and operational disruptions.',
      'Effective coordination across customs, port, and transportation activities.',
    ],
    outcomesImage: {
      src: '/projects/food-import-india-uk-outcomes.png',
      alt: "Food import delivery outcomes to Wembley",
      caption: "Results — completed delivery and project outcomes.",
    },
    conclusion: [
      'This India–UK food import demonstrates Clarusto’s expertise in international food logistics and customs clearance.',
      'Detailed planning, regulatory compliance, and coordinated execution moved the cargo efficiently from origin to final destination.',
    ],
  },
];

export function getProjectCaseStudy(slug: string) {
  return PROJECT_CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECT_CASE_STUDIES.map((study) => study.slug);
}

function dedupeImages(images: ProjectGalleryImage[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (!image?.src || seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

/**
 * Resolves ordered case-study imagery for the detail layout.
 * Prefer explicit `images`; otherwise derive from hero / section images.
 */
export function resolveCaseStudyImages(
  study: ProjectCaseStudy
): ProjectGalleryImage[] {
  if (study.images && study.images.length > 0) {
    return dedupeImages(study.images);
  }

  const challengeImage =
    study.transportModes.find(
      (mode) => mode.challenges.length > 0 && mode.image
    )?.image ??
    study.transportModes.find((mode) => mode.image)?.image;

  return dedupeImages([
    {
      src: study.heroImage,
      alt: `${study.title} — project hero`,
      caption: study.location,
    },
    ...(study.objectiveImage ? [study.objectiveImage] : []),
    ...(challengeImage ? [challengeImage] : []),
    ...(study.outcomesImage ? [study.outcomesImage] : []),
    ...(study.conclusionImage ? [study.conclusionImage] : []),
  ]);
}

function guessScopeIcon(label: string): ProjectScopeIcon {
  const t = label.toLowerCase();
  if (/container|fcl|flat.?rack|pallet/.test(t)) return 'container';
  if (/destuff|unload|unstuff|loading|pack/.test(t)) return 'unloading';
  if (/custom|clearance|fasah|saso|hs.?code|document/.test(t)) return 'customs';
  if (/inspect|pdi|survey|audit/.test(t)) return 'inspection';
  if (/truck|inland|haul|road|carrier|delivery/.test(t)) return 'truck';
  if (/empty|return|depot/.test(t)) return 'return';
  if (/warehouse|storage|inventory|bonded/.test(t)) return 'warehouse';
  if (/sea|vessel|port|ocean|roro/.test(t)) return 'ship';
  if (/air|airport|flight/.test(t)) return 'plane';
  return 'check';
}

export function resolveCaseStudyScope(
  study: ProjectCaseStudy
): ProjectScopeItem[] {
  if (study.scopeItems && study.scopeItems.length > 0) {
    return study.scopeItems.slice(0, 6);
  }

  const fromActivities = study.transportModes
    .flatMap((mode) => mode.activities)
    .filter(Boolean);
  const fromCoordination = study.coordinationOutcomes.filter(Boolean);
  const fromObjective = study.objective.filter(Boolean);
  const source =
    fromActivities.length > 0
      ? fromActivities
      : fromCoordination.length > 0
        ? fromCoordination
        : fromObjective;

  return source.slice(0, 6).map((label) => {
    const short =
      label.length > 72 ? `${label.slice(0, 69).trimEnd()}…` : label;
    return { label: short, icon: guessScopeIcon(label) };
  });
}

function parseLeadingNumber(token: string): ProjectStat {
  const trimmed = token.trim();
  const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    const [, num, rest] = match;
    return {
      value: trimmed,
      label: rest || 'Highlight',
      countTo: Number(num),
      suffix: rest ? ` ${rest}` : undefined,
    };
  }
  // Patterns like "8 × 40FT" or "Zero damage"
  const multi = trimmed.match(/^(\d+)\s*[x×]\s*(.+)$/i);
  if (multi) {
    return {
      value: trimmed,
      label: multi[2],
      countTo: Number(multi[1]),
      suffix: ` × ${multi[2]}`,
    };
  }
  return { value: trimmed, label: 'Highlight' };
}

export function resolveCaseStudyStats(study: ProjectCaseStudy): ProjectStat[] {
  if (study.stats && study.stats.length > 0) {
    return study.stats.slice(0, 4);
  }

  const fromResult = study.result
    .split(/[·•|]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 3)
    .map(parseLeadingNumber);

  return [
    ...fromResult,
    {
      value: study.location,
      label: 'Route',
    },
  ].slice(0, 4);
}

export function getRelatedProjectCaseStudies(
  slug: string,
  limit = 3
): ProjectCaseStudy[] {
  const others = PROJECT_CASE_STUDIES.filter((study) => study.slug !== slug);
  const current = getProjectCaseStudy(slug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((study) =>
    study.category
      .split(/[·,]/)
      .some((part) =>
        current.category.toLowerCase().includes(part.trim().toLowerCase())
      )
  );
  const rest = others.filter((study) => !sameCategory.includes(study));
  return [...sameCategory, ...rest].slice(0, limit);
}
