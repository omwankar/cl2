import type { PressRelease } from './press-release-types';

/** Manual company press releases — edit here to publish announcements. */
export const COMPANY_PRESS_RELEASES: PressRelease[] = [
  {
    id: 'company-global-startup-award-2026',
    featured: true,
    title:
      'Clarusto Logistics wins Global Startup of the Year at Scotland StartUp Awards 2026',
    excerpt:
      'Clarusto Logistics has been named Global Startup of the Year at the Scotland StartUp Awards 2026 in Edinburgh. The award recognises the Glasgow-based company\'s rapid growth and commitment to reliable international freight, road transport, customs coordination, and end-to-end logistics.',
    publishedAt: '2026-06-23T09:00:00.000Z',
    category: 'Awards',
    source: 'Clarusto Logistics',
    sourceType: 'company',
    url: '/clarusto-logistics-wins-global-startup-of-the-year-scotland-startup-awards-2026',
    image: '/clarusto-global-startup-award-2026-hero.jpg',
    author: 'Corporate Communications',
  },
  {
    id: 'company-wuhan-office-2026',
    title: 'Clarusto Logistics Announces the Opening of Its New Office in Wuhan, China',
    excerpt:
      'Clarusto Logistics opens its new China office at Room 2210, No. 83 Yanjiang Avenue, Wuhan, Hubei Province — strengthening freight, logistics, and supply chain support for clients across central China and global markets.',
    publishedAt: '2026-05-27T09:00:00.000Z',
    category: 'Company News',
    source: 'Clarusto Logistics',
    sourceType: 'company',
    url: '/clarusto-logistics-new-office-wuhan-china',
    image: '/clarusto-logistics-wuhan-china-reception.png',
    author: 'Corporate Communications',
  },
];
