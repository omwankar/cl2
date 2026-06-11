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
    title: 'AXIAL Metal Expansion Joint Logistics',
    category: 'Heavy Industry · FCL Project Cargo',
    client: 'Construction sector client',
    subheading:
      'Heavy-duty FCL container transport of 130 metal expansion joints from China to Saudi Arabia with customs clearance and zero-damage delivery.',
    excerpt:
      'Clarusto delivered 130 metal expansion joints (Model-P3200 & P1200) in 22-ton FCL containers from China to Riyadh with compliant documentation and on-time execution.',
    result: 'Zero damage · On-time delivery',
    heroImage: '/axial/hero.png',
    publishedAt: '2026-03-01',
    location: 'China → Saudi Arabia',
    metaTitle: 'AXIAL Metal Expansion Joint Logistics Case Study | Clarusto',
    metaDescription:
      'How Clarusto Logistics delivered 130 metal expansion joints in 22-ton FCL containers from China to Saudi Arabia with compliant documentation and on-time delivery.',
    ogImage: '/axial/hero.png',
    background: [
      'The consignee in this case study is one of our existing clients who reconnected with Clarusto Logistics for the transition of heavy construction material back to Riyadh. The project consisted of containers weighing around 22 tons per container with lengths of either 20ft or 40ft, based on the quotation provided by Clarusto Logistics from China to Saudi Arabia.',
      'The product is a metal expansion joint measured at 130 units in total—124 units of Model-P3200 and 6 units of Model-P1200—to be delivered with a complete logistics approach including customs clearance, port duties, and coordinated land and sea transit.',
    ],
    objective: [
      'As the appointed primary logistics service provider, Clarusto’s objective remained delivering with prestige and avoiding any issues that could impact the project timeline or compliance standing.',
      'Precise planned shipment, correct use of heavy machinery, complete documentation, regulatory compliance for heavy liftings, efficient sea voyage handovers, and coordinated land and sea transportation were all critical to success.',
    ],
    transportModes: [
      {
        title: 'Challenges & Compliance',
        summary:
          'High-load FCL containers presented weight and routing constraints that required careful planning at every stage of the journey.',
        activities: [
          'Precise planned shipment for fully loaded containers avoiding traffic manoeuvres',
          'Correct use of heavy machinery for loading and offloading at all times',
          'Complete documentation and paperwork to avoid last-minute hassle',
          'Compliance of all regulations for heavy liftings and pre-route surveys',
          'Efficient sea voyage compliance with documentation for mode change-overs',
          'Coordinated land and sea transportation avoiding delays at ports',
          'Permitted shipping-line weight restrictions to avoid extra levied duties',
        ],
        challenges: [
          'High load containers with maximum FCL for 20ft as a constraint',
          'Weight restrictions for voyage could turn into high payload for the weighing limit',
          'Inaccurate allocation could lead to limit violations and increased freight cost per ton',
          'Assumed port congestion at Nansha port as a busiest port hub',
          'Deviations could lead to heavy penalties, port charges, or even refusal',
        ],
        execution: [
          'Pre-route surveys completed to avoid blocked traffic on land transits',
          'SOLAS gross mass verification compliance maintained throughout',
          'Carrier selection and bookings assessed at all stages',
        ],
      },
      {
        title: 'Scope of Execution',
        summary:
          'Clarusto’s experienced professionals revised and evaluated plans to minimise the risk of over-pricing at both transportation modes.',
        activities: [
          'Container utilisation planned for cost efficiency',
          'Diversified containment variation assessed for heavy and dense cargo',
          'Larger containers utilised for volumetric sea voyage',
        ],
        challenges: [
          'Reducing constraints for port space availability',
          'Managing vessel cut-off timelines',
          'Strict cargo density evaluation to avoid inspection hauls',
        ],
        execution: [
          'Flow process according to SOLAS gross mass verification regulations',
          'Dense and bulk materials allotted appropriately',
          'Continuous revision for balancing transit and freight costs',
          'Coordinated planned shipment release at Saudi Arabia',
          'Correct documentation handover at each level to avoid port storage and demurrage',
        ],
        image: {
          src: '/axial/scope.png',
          alt: 'Scope of execution for AXIAL metal expansion joint container logistics',
          caption:
            'Scope of execution — FCL planning, dense cargo allocation, and port coordination.',
        },
      },
    ],
    coordinationHeading: 'Execution Advantages',
    coordinationOutcomes: [
      'Selection of ongoing operation shipping lines between ports for secure handling',
      'Identifying optimised routing for direct and trans-shipment',
      'Assessment of carrier selection and bookings at all stages',
      'Continuous revision for balancing transit and freight costs',
      'Coordinated planned shipment release at Saudi Arabia',
      'Correct documentation handover at each level to avoid port storage and demurrage',
      'Coordinated customs clearance with local and regional partners',
    ],
    keyOutcomes: [
      'Zero damage and on-time delivery according to proposals',
      'Smart utilisation of containers with no port haul',
      'Early bookings at Nansha avoided expected delays',
      'Smart monitoring and continuous tracking throughout',
      'Full compliance with weight regulations across all legs',
    ],
    outcomesImage: {
      src: '/axial/conclusion.png',
      alt: 'Successful conclusion of AXIAL metal expansion joint logistics project',
      caption:
        'Project conclusion — compliant, on-time delivery with zero damage.',
    },
    conclusion: [
      'Clarusto gained another successful delivery through intelligent coordination. Well-experienced and trusted partners consistently achieved all compliance with regards to weight regulations. With zero damage and on-time delivery according to proposals, the entire project deadline was supported.',
      'Smart utilisation of containers and well-filed documentation resulted in no port haul and strong time-keeping. Early bookings at Nansha avoided expected delays and time change-overs. Smart monitoring and continuous tracking resulted in overall success of the planned consignment.',
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
