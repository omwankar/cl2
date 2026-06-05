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
];

export function getProjectCaseStudy(slug: string) {
  return PROJECT_CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECT_CASE_STUDIES.map((study) => study.slug);
}
