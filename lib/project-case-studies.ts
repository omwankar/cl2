export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TransportModeSection = {
  title: string;
  summary: string;
  activities: string[];
  challenges: string[];
  execution: string[];
  image?: ProjectGalleryImage;
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
          alt: 'Customs documentation and trucking coordination for Behu Ltd imports in Saudi Arabia',
          caption:
            'Execution — document control, Fasah-linked clearance, and coordinated inland delivery.',
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
    conclusion: [
      'The Behu Ltd. engagement shows how Clarusto Logistics turns complex Saudi clearance requirements into a controlled, repeatable process. By combining compliance expertise, digital customs integration, and proactive delivery coordination, Clarusto helped convert clearance risk into a more reliable import operation.',
    ],
  },
  {
    slug: 'customs-clearance-king-abdullah-port-mixed-cargo',
    title: 'Customs Clearance for Mixed Infrastructure Cargo at King Abdullah Port',
    category: 'Customs · Mixed Project Cargo Saudi Arabia',
    client: 'Commercial development project importer',
    subheading:
      'Time-sensitive customs clearance for mixed telecom, electrical, and HVAC cargo through King Abdullah Port with SABER, SASO, and ZATCA coordination.',
    excerpt:
      'Clarusto cleared a multi-category infrastructure shipment—IP cameras, copper pipes, HVAC components, and optical fibre—through King Abdullah Port without avoidable storage penalties or transit disruption.',
    result: 'Multi-category clearance · No storage penalties',
    heroImage: '/projects/king-abdullah-port-customs-hero.jpg',
    publishedAt: '2026-07-18',
    location: 'King Abdullah Port → Saudi Arabia',
    metaTitle: 'King Abdullah Port Mixed Cargo Customs Clearance | Clarusto',
    metaDescription:
      'Case study: Clarusto Logistics cleared mixed telecom, electrical, and HVAC infrastructure cargo at King Abdullah Port with SABER, SASO, Fasah, and ZATCA compliance.',
    ogImage: '/projects/king-abdullah-port-customs-hero.jpg',
    background: [
      'Clarusto Logistics supported customs clearance and onward movement of a time-sensitive infrastructure shipment into Saudi Arabia. The consignment included telecom, electrical, and HVAC components such as IP cameras, copper pipes, horn loudspeakers, swirl air outlets, hand volume dampers, and optical fibre cables.',
      'The cargo formed part of a commercial development project and required careful handling because regulated and non-regulated items sat in the same shipment, each with different compliance pathways.',
    ],
    objective: [
      'Clear a mixed-category shipment in one controlled cycle while meeting ZATCA, SASO/SABER, and Fasah requirements.',
      'Protect the project timeline by avoiding inspection delays, storage charges, and partial-release disruption within limited free-time windows.',
    ],
    objectiveImage: {
      src: '/projects/king-abdullah-port-customs-cargo.jpg',
      alt: 'Open containers with mixed infrastructure cargo at King Abdullah Port',
      caption:
        'Mixed cargo — telecom, HVAC, and industrial components prepared for clearance.',
    },
    transportModes: [
      {
        title: 'The Challenge',
        summary:
          'Multiple product categories in one consignment increased HS-code complexity, certificate requirements, and the risk of partial clearance delays.',
        activities: [],
        challenges: [
          'Multiple product categories within a single shipment.',
          'Separate HS-code classification for each product line.',
          'SABER and SASO-related compliance requirements.',
          'ZATCA customs coordination and Fasah declaration accuracy.',
          'Limited free time for loading/offloading with penalty exposure after free hours.',
          'Heavy 40′ container movements constrained by inland routing and weight limits.',
        ],
        execution: [],
      },
      {
        title: 'Approach & Execution',
        summary:
          'Clarusto used pre-shipment compliance planning, product-level documentation, and local customs coordination to clear the mixed cargo in one cycle.',
        activities: [
          'Pre-shipment compliance planning and SABER pathway assessment.',
          'Importer-of-Record / local registration alignment where required.',
          'Product-wise HS-code classification and segmented documentation packs.',
          'Preparation of commercial invoice, certificate of origin, SABER certificates, and technical datasheets.',
          'Fasah declaration filing and coordinated inspection with ZATCA.',
        ],
        challenges: [],
        execution: [
          'Built a product-level document pack before arrival to reduce mismatch risk at the border.',
          'Filed Fasah declarations with supporting technical and compliance documents.',
          'Managed duty structure and VAT obligations while coordinating inspection and release.',
          'Supported onward transit toward the project destination without avoidable dwell.',
        ],
        image: {
          src: '/projects/king-abdullah-port-customs-execution.jpg',
          alt: 'Customs clearance execution for mixed cargo at King Abdullah Port',
          caption:
            'Execution — product-level documentation, Fasah filing, and inspection coordination.',
        },
      },
    ],
    coordinationOutcomes: [],
    keyOutcomes: [
      'Successful clearance of a multi-category shipment in a single cycle.',
      'Compliance with applicable Saudi import and quality requirements.',
      'Reduced risk of inspection-related delay.',
      'No disruption to planned onward transit.',
      'No avoidable storage penalties.',
    ],
    outcomesImage: {
      src: '/projects/king-abdullah-port-customs-results.jpg',
      alt: 'Cleared mixed infrastructure cargo ready for onward Saudi delivery',
      caption:
        'Results — mixed cargo cleared and released for project delivery.',
    },
    conclusion: [
      'This project demonstrates Clarusto Logistics’ ability to manage complex customs clearance in a demanding Saudi regulatory environment. Pre-shipment planning, product-level documentation, and local execution support helped move a time-sensitive infrastructure shipment through King Abdullah Port with minimal disruption.',
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
      alt: 'Warehouse overview of palletised empty plastic bottle supply',
      caption:
        'Overview — high-volume palletised empty bottle inventory prepared for dispatch.',
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
          alt: 'Forklift handling palletised empty plastic bottles for UK delivery',
          caption:
            'Execution — controlled warehouse handling and FTL dispatch planning.',
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
      src: '/projects/empty-plastic-bottles-nl-uk-results.png',
      alt: 'Successful empty plastic bottle supply delivery into the UK',
      caption:
        'Results — damage-free palletised bottles delivered into Worcester.',
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
      alt: 'Overview of Dammam to Riyadh inland container delivery planning',
      caption:
        'Overview — corridor planning for a same-day multi-container road move.',
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
          alt: 'Inland trucking execution for Dammam to Riyadh container delivery',
          caption:
            'Execution — staged trailer fleet and live corridor monitoring.',
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
      src: '/projects/dammam-riyadh-container-delivery-results.png',
      alt: 'Completed inland container delivery from Dammam into Riyadh',
      caption:
        'Results — multi-container road delivery completed under the planned window.',
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
          alt: 'Electric vehicle import handling and inland delivery operation in Jordan',
          caption:
            'Execution — port collection, EV destuffing, and inland delivery from Aqaba to Amman.',
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
      src: '/projects/aqaba-amman-results.jpg',
      alt: 'Successful EV import logistics outcomes from Aqaba to Amman',
      caption:
        'Results — on-time inland delivery and compliant empty container return.',
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
          alt: 'Execution of heavy industrial expansion joint FCL shipment from China to Saudi Arabia',
          caption:
            'Execution — container planning, documentation control, and coordinated port-to-site delivery.',
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
      src: '/projects/expansion-joints-results.jpg',
      alt: 'Successful delivery of axial metal expansion joints to Riyadh project site',
      caption:
        'Results — 130 expansion joints delivered safely and on schedule to Riyadh.',
    },
    conclusion: [
      'This project demonstrates Clarusto Logistics\' expertise in managing complex heavy industrial cargo through integrated international logistics solutions. By combining strategic cargo planning, regulatory compliance, documentation management, ocean freight coordination, customs clearance, and efficient inland transportation, Clarusto successfully delivered the shipment from China to Riyadh safely and on schedule.',
      'The successful execution highlights Clarusto\'s ability to manage large-scale industrial logistics projects with precision, reliability, and operational excellence, reinforcing its position as a trusted logistics partner for heavy cargo transportation across international supply chains.',
    ],
  },
  {
    slug: 'live-apple-plants-shipment-italy-india',
    title: 'Live Apple Plants Shipment',
    category: 'Agriculture · Cold Chain Perishables',
    client: 'Orchard supply client',
    subheading:
      'Temperature-controlled live apple sapling transport from Italian nurseries to Delhi with phytosanitary compliance and door delivery.',
    excerpt:
      'Clarusto shipped live apple saplings from Italy to Delhi with +2°C temperature control, phytosanitary documentation, and coordinated land and air freight.',
    result: 'Temperature-compliant · On-time door delivery',
    heroImage: '/apple/hero.png',
    publishedAt: '2026-03-01',
    location: 'Italy → Delhi, India',
    metaTitle: 'Live Apple Plants Shipment Italy to India | Clarusto Case Study',
    metaDescription:
      'How Clarusto Logistics shipped live apple saplings from Italy to Delhi with temperature-controlled land and air freight, phytosanitary compliance, and door delivery.',
    ogImage: '/apple/hero.png',
    background: [
      'This project is entirely based on the live deliverance of apple saplings for a client operating a well-equipped orchard supplying customers in India and abroad. Clarusto undertook the requirement to supply live apple saplings from Europe (Italy) to India (Delhi) with all mandatory air freight compliance, documentation, and temperature regulations for the entire consignment.',
      'Few consignments are meant to check image building, and that is how Clarusto undertook and proceeded with this sensitive perishable movement.',
    ],
    objective: [
      'The primary focus is the prevention and secured transportation of the entire consignment with appropriate paperwork and measured temperatures (required +2 degrees) adhered to throughout land and air transit, including final door delivery.',
      'Maintaining coalition of workforce coordination across inbound and outbound ports—with regulatory compliance across two strictly governed nations—was the most significant operational requirement.',
    ],
    objectiveImage: {
      src: '/apple/challenges.png',
      alt: 'Temperature and regulatory challenges for live apple plant shipment',
      caption:
        'Regulatory and temperature challenges for live perishable sapling logistics.',
    },
    transportModes: [
      {
        title: 'Land Transport',
        summary:
          'Inbound port compliance and transit from pick-up to Milan airport, with nursery coordination and temperature maintenance throughout.',
        activities: [
          'Coordination with Italian nurseries for time-effective logistics',
          'Moist wrapping including gel and peat to stay within measured temperature',
          'In-hand documentation and availability of ventilated cartons',
          'Minor adjusted costing including dual port services for perishable logistics',
          'Reefer trucking particularly for higher temperature zones in India',
        ],
        challenges: [
          'Strictly temperature-controlled transportation for land modes',
          'Forklift accessibility for pallets must be short-sided (105cms) for fragile handling',
          'Duly maintained temperature-controlled transit (+2 to +8 degrees) with minimal deviations',
        ],
        execution: [
          'Compulsory regulatory shipment procedures shared across workforce and partners',
          'Hierarchy-controlled project management for cost-effective perishable logistics',
          'Monitored shipment until final client delivery',
        ],
        image: {
          src: '/apple/land-transport.png',
          alt: 'Land transport of live apple saplings with temperature-controlled trucking',
          caption:
            'Land transport — nursery pick-up to Milan airport with reefer coordination.',
        },
      },
      {
        title: 'Air Freight',
        summary:
          'Direct air transit with reefer handling, phytosanitary compliance, and cold storage handover across the Italy–India corridor.',
        activities: [
          'Cargo handling in accordance with reefer trucking conditions and temperature monitoring',
          'Confirmation of handling experience for phytosanitary compliance measures',
          'Entire cargo for perishable plants maintained at no more than +8 degrees',
          'Consolidated cargo with updated documentation and customs clearance',
          'Origin cold storage handling and live temperature reports at transit handover',
        ],
        challenges: [
          'Availability of direct air transit is highly significant for viability',
          'Compliance of air transport regulations for perishable products at all times',
          'Indian airports have long-awaited clearance schedules for sensitive import products',
        ],
        execution: [
          'Colligation and consolidated cargo including updated documentation',
          'Custom clearance to maintain desired time-keeping and cold storage transit',
          'Origin handling of cold storage with recorded temperature handover',
        ],
        image: {
          src: '/apple/air-freight.png',
          alt: 'Air freight of live apple plants with cold chain compliance',
          caption:
            'Air freight — temperature-monitored cargo with phytosanitary compliance.',
        },
      },
    ],
    coordinationHeading: 'Execution',
    coordinationOutcomes: [
      'All certifications from the nursery including phytosanitary and pest-free requirements at ports',
      'Updated records of temperature checks (+2 to +8) at all checkpoints',
      'Availability of desired lifting equipment in accordance with fragile product norms',
      'Maintained wrapping and cooling agents for stress-sensitive plants in volatile temperature zones',
      'Cost-efficient transport and cargo handling to incur minimal cost variation',
    ],
    outcomesHeading: 'Key Outcomes',
    keyOutcomes: [
      'Temperature-bound supply delivered with promised time-keeping',
      'Coordinated workforce across all transit levels',
      'On-managerial customer satisfaction achieved',
      'Sensitive perishable bondage handled through to final door',
      'Rare consignment successfully completed in Clarusto records',
    ],
    outcomesImage: {
      src: '/apple/execution.png',
      alt: 'Execution of live apple plant shipment with coordinated cold chain handovers',
      caption:
        'Execution — organised change-over of transit at all transportation segments.',
    },
    conclusion: [
      'Clarusto Logistics considers this consignment among the rarest in its record books. The primary reason is the coordination of a well-informed workforce at different levels of transit, which builds confidence and strengthens Clarusto’s profile in perishable logistics.',
      'Deliverance of temperature-bound supply is critical for promised time-keeping and customer satisfaction. Perishable products play an emotionally esteemed role in desirable demand and supply chains—and these apple plants represent a sensitive bondage that Clarusto took care to deliver to the final door.',
    ],
    conclusionImage: {
      src: '/apple/conclusion.png',
      alt: 'Successful delivery of live apple plants from Italy to Delhi',
      caption:
        'Conclusion — live apple saplings delivered to final door in Delhi.',
    },
  },
];

export function getProjectCaseStudy(slug: string) {
  return PROJECT_CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECT_CASE_STUDIES.map((study) => study.slug);
}
