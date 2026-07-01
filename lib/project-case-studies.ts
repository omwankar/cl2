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
