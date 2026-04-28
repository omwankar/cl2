'use client';

import { useMemo } from 'react';

const generateBoxShadows = (n: number) => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  }
  return value;
};

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { EnhancedHero } from '@/components/enhanced-hero';
import dynamic from 'next/dynamic';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { BLOG_POSTS, type BlogPost } from '@/lib/blogs';
import Link from 'next/link';
import Image from 'next/image';
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';
import { Truck, Globe, Shield, Package, Clock, BadgeCheck, ArrowRight } from 'lucide-react';

const LightRays = dynamic(() =>
  import('@/components/light-rays').then(m => m.LightRays),
  { ssr: false }
);

const EnhancedServices = dynamic(() =>
  import('@/components/enhanced-services').then((m) => m.EnhancedServices),
  { ssr: false }
);
const AboutSection = dynamic(() =>
  import('@/components/about-section').then((m) => m.AboutSection),
  { ssr: false }
);
const PromiseSection = dynamic(() =>
  import('@/components/promise-section').then((m) => m.PromiseSection),
  { ssr: false }
);
const StatsSection = dynamic(() =>
  import('@/components/stats-section').then((m) => m.StatsSection),
  { ssr: false }
);
const ServicePartners = dynamic(() =>
  import('@/components/service-partners').then((m) => m.ServicePartners),
  { ssr: false }
);


function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.08);
  return (
    <div ref={ref} data-visible={isVisible ? 'true' : 'false'} className={`hp-reveal ${className}`}>
      {children}
    </div>
  );
}

function parseStatTarget(raw: string): { end: number; suffix: string } {
  const s = raw.trim();
  if (s.includes('%')) return { end: parseFloat(s) || 0, suffix: '%' };
  if (/k/i.test(s)) return { end: (parseFloat(s) || 0) * 1000, suffix: s.includes('+') ? 'k+' : 'k' };
  return { end: parseFloat(s.replace(/[+,]/g, '')) || 0, suffix: s.includes('+') ? '+' : '' };
}

function formatStatDisplay(value: number, suffix: string, template: string): string {
  if (template.includes('%')) return `${Math.round(value)}%`;
  if (/k/i.test(template)) {
    const k = value >= 1000 ? value / 1000 : value;
    return `${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}k${suffix.includes('+') ? '+' : ''}`;
  }
  return `${Math.round(value).toLocaleString('en-US')}${suffix}`;
}

function ExpertiseStatBlock({ stat, index, active }: { stat: { number: string; label: string; features: string[] }; index: number; active: boolean }) {
  const { end, suffix } = parseStatTarget(stat.number);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(end * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [active, end]);

  const progress = active ? Math.min(100, (display / (end || 1)) * 100) : 0;
  const shown = active ? formatStatDisplay(display, suffix, stat.number) : stat.number;
  const Icon = index === 0 ? Package : index === 1 ? Clock : BadgeCheck;

  return (
    <div className="hp-exp-block">
      <div className="hp-exp-icon"><Icon size={20} /></div>
      <div className="hp-exp-number">{shown}<span className="sr-only">{stat.number}</span></div>
      <div className="hp-exp-bar-wrap">
        <div className="hp-exp-bar" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <div className="hp-exp-label">{stat.label}</div>
      {stat.features.map((f) => (
        <div key={f} className="hp-exp-feature">{f}</div>
      ))}
    </div>
  );
}

function StarsBackground({ speed = 0.3 }: { speed?: number }) {
  const [isClient, setIsClient] = useState(false);
  const shadowsSmall  = useMemo(() => isClient ? generateBoxShadows(700) : '', [isClient]);
  const shadowsMedium = useMemo(() => isClient ? generateBoxShadows(200) : '', [isClient]);
  const shadowsBig    = useMemo(() => isClient ? generateBoxShadows(100) : '', [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes animStarClarusto {
          from { transform: translateY(0px); }
          to   { transform: translateY(-2000px); }
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Small stars */}
        <div
          className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent opacity-40"
          style={{
            boxShadow: shadowsSmall,
            animation: `animStarClarusto ${50 / speed}s linear infinite` 
          }}
        >
          <div className="absolute top-[2000px] w-[1px] h-[1px] bg-transparent"
            style={{ boxShadow: shadowsSmall }} />
        </div>

        {/* Medium stars */}
        <div
          className="absolute left-0 top-0 w-[2px] h-[2px] bg-transparent opacity-30"
          style={{
            boxShadow: shadowsMedium,
            animation: `animStarClarusto ${100 / speed}s linear infinite` 
          }}
        >
          <div className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent"
            style={{ boxShadow: shadowsMedium }} />
        </div>

        {/* Big stars */}
        <div
          className="absolute left-0 top-0 w-[3px] h-[3px] bg-transparent opacity-20"
          style={{
            boxShadow: shadowsBig,
            animation: `animStarClarusto ${150 / speed}s linear infinite` 
          }}
        >
          <div className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent"
            style={{ boxShadow: shadowsBig }} />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const { ref: trustSectionRef, isVisible: isTrustSectionVisible } = useScrollAnimation(0.1);
  const expertiseRef = useRef<HTMLElement>(null);
  const [expertiseActive, setExpertiseActive] = useState(false);
  const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>(() =>
    [...BLOG_POSTS].sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0, 3)
  );

  useEffect(() => {
    const el = expertiseRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setExpertiseActive(true);
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    fetch('/api/blogs?limit=3')
      .then((r) => (r.ok ? r.json() : null))
      .then((posts) => {
        if (active && Array.isArray(posts) && posts.length > 0) {
          setFeaturedArticles(posts);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const partners = [
    { name: 'Saudi Aramco', logo: '/placeholder-logo.png' },
    { name: 'Samsung', logo: '/placeholder-logo.png', scale: 1.15 },
    { name: 'ISCO (A Siemens Company)', logo: '/placeholder-logo.png' },
    { name: 'GWC', logo: '/placeholder-logo.png', scale: 1.2 },
    { name: 'SABIC', logo: '/placeholder-logo.png' },
    { name: 'Al Khodari (AK)', logo: '/placeholder-logo.png' },
    { name: 'Nas Air', logo: '/placeholder-logo.png', scale: 1.15 },
    { name: 'Petro RABIGH', logo: '/placeholder-logo.png' },
    { name: 'Panalpina', logo: '/placeholder-logo.png', scale: 1.2 },
    { name: 'Centrepoint', logo: '/placeholder-logo.png', scale: 1.15 },
    { name: 'GAC', logo: '/placeholder-logo.png', scale: 1.3 },
    { name: 'MMG', logo: '/placeholder-logo.png' },
    { name: 'Schlumberger', logo: '/placeholder-logo.png', scale: 1.2 },
    { name: 'ABB', logo: '/placeholder-logo.png', scale: 1.3 },
    { name: "Ma'aden", logo: '/placeholder-logo.png' },
  ];

  const marqueeRow = [...partners, ...partners];
  const marqueeRowB = [...[...partners].reverse(), ...[...partners].reverse()];

  const expertise = [
    { number: '2,000+', label: 'Integrated Supply Chain Expertise', features: ['Customized supply chain management', 'Freight forwarding solutions', 'Warehousing & distribution'] },
    { number: '98%', label: 'Timely Delivery to Destination', features: ['Skilled logistics team', 'Safe goods handling', 'On-time pickup and delivery'] },
    { number: '1k', label: 'Specialized Handling & Compliance', features: ['Transportation management', 'Customs brokerage', 'Heavy goods handling'] },
  ];

  const showcase = [
    { src: '/landing/air-freight.png', label: 'Air Freight' },
    { src: '/landing/sea-freight.png', label: 'Sea Freight' },
    { src: '/landing/land-transport.png', label: 'Land Transport' },
  ];

  const trustCards = [
    { badge: 'Scale · Speed · Choice', title: 'Flexible Fleet', body: 'From small parcels to bulk cargo, we adapt with the right transport mode.', Icon: Truck },
    { badge: 'Reach · Routes · Regions', title: 'Wider Coverage', body: 'Reach more destinations with dependable regional and cross-border operations.', Icon: Globe },
    { badge: 'Safety · Standards · Trust', title: 'Trusted Delivery', body: 'Operational standards and secure handling keep your business reputation strong.', Icon: Shield },
  ];

  return (
    <main className="hp-root">
      <Navbar />
      <EnhancedHero />

      <section className="hp-showcase">
        <div className="hp-showcase-inner">
          <div className="hp-showcase-header">
            <Reveal>
              <div className="hp-kicker">Capabilities</div>
              <h2 className="hp-display hp-showcase-title">
                FREIGHT FORWARDING<br />AND LOGISTICS<br /><em>CAPABILITIES WE DELIVER</em>
              </h2>
            </Reveal>
            <Reveal>
              <p className="hp-body hp-body-small">
                We move logistics forward with speed, safety, and complete visibility. From pickup to delivery,
                we create dependable transportation workflows that help your business grow.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="hp-bento">
              {showcase.map((item, idx) => (
                <div key={item.src} className="hp-bento-item">
                  <Image src={item.src} alt={item.label} fill sizes="(max-width: 1024px) 100vw, 66vw" priority={idx === 0} loading={idx === 0 ? undefined : 'lazy'} />
                  <div className="hp-bento-label">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <EnhancedServices />
      <AboutSection />
      <PromiseSection />
      <StatsSection />
      <ServicePartners />

      <section className="relative border-t border-[rgba(240,235,225,0.12)] bg-[#0b1320] py-16 md:py-24 overflow-hidden">
      
      {/* Stars layer — behind everything */}
      <StarsBackground speed={0.3} />

      {/* Content — must be z-10 or above so it renders over stars */}
      <div className="app-container max-w-5xl relative z-10">
        <h2 className="hp-display text-[clamp(34px,4.8vw,58px)]">
          WHY CLARUSTO<br /><em>FREIGHT LOGISTICS SOLUTIONS WORK</em>
        </h2>
        <div className="mt-8 space-y-5 text-[15px] leading-8 text-[rgba(240,235,225,0.78)]">
          <p>
            Clarusto is built for businesses that need reliable forwarding, predictable transport, and resilient operations across changing markets. Our teams combine route knowledge, customs expertise, and carrier relationships to keep cargo moving — even when conditions shift. We coordinate air, ocean, and road transport through one model. This reduces handoff delays and improves delivery confidence on every trade lane.
          </p>
          <p>
            We support manufacturers, distributors, retailers, and project operators with practical design from origin to final-mile. Instead of isolated shipping transactions, we build end-to-end programs with clear targets, live milestone tracking, and exception-response plans. Operations teams can forecast better, control landed costs, and protect customer commitments during peak cycles and cross-border delays.
          </p>
          <p>
            Our specialists focus on clear outcomes: stronger on-time performance, reduced dwell time, clean compliance records, and faster communication. Organizations gain both execution capacity and strategic guidance — from customs workflows to multimodal planning. The result is a transport partner that supports growth, improves stability, and creates lasting advantage in global trade.
          </p>
        </div>
      </div>

    </section>

      <section className="hp-partners">
        <div className="hp-partners-inner">
          <Reveal className="hp-partners-header">
            <div className="hp-kicker hp-kicker-center">Partners</div>
            <h2 className="hp-display hp-partners-title" data-scramble-heading="Trusted by Industry Leaders">
              TRUSTED FREIGHT AND<br /><em>LOGISTICS PARTNERS</em>
            </h2>
            <p className="hp-body hp-body-center">
              Proud to work with industry leaders and innovative companies across various sectors.
            </p>
          </Reveal>

          <div className="hp-partner-row hp-partner-row-margin">
            <div className="hp-partner-track hp-marquee-l">
              {marqueeRow.map((p, i) => (
                <div key={`${p.name}-a-${i}`} className="hp-partner-card">
                  <div className={`hp-partner-logo-container ${p.scale ? `scale-[${p.scale}]` : ''}`}>
                    <Image src={p.logo} alt={p.name} fill className="hp-partner-logo" sizes="100px" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hp-partner-row">
            <div className="hp-partner-track hp-marquee-r">
              {marqueeRowB.map((p, i) => (
                <div key={`${p.name}-b-${i}`} className="hp-partner-card">
                  <div className={`hp-partner-logo-container ${p.scale ? `scale-[${p.scale}]` : ''}`}>
                    <Image src={p.logo} alt={p.name} fill className="hp-partner-logo" sizes="100px" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={expertiseRef} className="hp-expertise relative overflow-hidden">
          
          <LightRays
            raysOrigin="top-center"
            raysColor="#F5B800"
            raysSpeed={0.6}
            lightSpread={1.4}
            rayLength={1.6}
            followMouse={true}
            mouseInfluence={0.06}
            noiseAmount={0.02}
            distortion={0.03}
            pulsating={true}
          />

          <div className="hp-expertise-inner relative z-10">
          <Reveal className="hp-expertise-header">
            <div className="hp-kicker">Expertise</div>
            <h2 className="hp-display hp-expertise-title">
              EXPERTISE IN GLOBAL<br /><em>TRANSPORTATION SERVICES</em>
            </h2>
            <p className="hp-body hp-body-medium">
              Measurable outcomes across network, delivery performance, and compliance-led execution.
            </p>
          </Reveal>
          <div className="hp-exp-grid">
            {expertise.map((stat, idx) => (
              <ExpertiseStatBlock key={stat.label} stat={stat} index={idx} active={expertiseActive} />
            ))}
          </div>
        </div>
      </section>

      <section className="hp-blog" id="blogs">
        <div className="hp-blog-inner">
          <Reveal>
            <div className="hp-section-rule">
              <div>
                <div className="hp-kicker">Insights</div>
                <h2 className="hp-display hp-display-small">
                  LATEST ARTICLES<br /><em>FROM OUR COMPANY</em>
                </h2>
              </div>
              <span className="hp-articles-count">
                {featuredArticles.length} Articles
              </span>
            </div>
          </Reveal>

          <div className="hp-blog-grid">
            {featuredArticles.map((article) => (
              <Reveal key={article.id}>
                <article className="hp-blog-card">
                  <Link href={`/blog/${article.slug}`} className="hp-blog-link">
                    <div className="hp-blog-img">
                      <Image src={article.image} alt={article.title} fill sizes="(max-width: 1024px) 100vw, 33vw" loading="lazy" />
                    </div>
                  </Link>
                  <div className="hp-blog-body">
                    <div><span className="hp-blog-cat">{article.category}</span></div>
                    <Link href={`/blog/${article.slug}`} className="hp-blog-title-link">
                      <div className="hp-blog-title">{article.title}</div>
                    </Link>
                    <p className="hp-blog-excerpt">{article.excerpt}</p>
                    <div className="hp-blog-meta">
                      <time dateTime={article.date}>{article.date}</time>
                      <span className="hp-blog-meta-separator">·</span>
                      <span>{article.readTime}</span>
                      <Link href={`/blog/${article.slug}`} className="hp-blog-read">
                        Read <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link href="/blog" className="hp-view-all">
              View All Articles <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="hp-cta">
        <div className="hp-cta-inner">
          <div className="hp-cta-bg">
            <Image
              src="/landing/supply-chain-network.png"
              alt="Supply chain network"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <Reveal>
            <div className="hp-kicker hp-kicker-center">
              Next Step
            </div>
            <h2 className="hp-display hp-cta-title">
              READY TO TRANSFORM<br />YOUR LOGISTICS?
            </h2>
            <p className="hp-cta-sub">
              Let&apos;s work together to create efficient, reliable solutions for your supply chain needs.
            </p>
            <Link href="/contact" className="hp-cta-btn hp-cta-btn-custom">
              Get Started Today <ArrowRight size={14} />
            </Link>
          </Reveal>
          <svg width="280" height="180" viewBox="0 0 280 180" className="hp-cta-svg flex-shrink-0" aria-hidden>
            <circle cx="30" cy="90" r="6" fill="#080B10" />
            <circle cx="250" cy="90" r="6" fill="#080B10" />
            <path d="M36,90 C80,30 200,150 244,90" fill="none" stroke="#080B10" strokeWidth="2" strokeDasharray="8 10" />
            <circle cx="140" cy="56" r="4" fill="#080B10" opacity="0.5" />
          </svg>
        </div>
      </section>

      <section ref={trustSectionRef} className="hp-trust">
        <div className="hp-trust-inner">
          <div className="hp-trust-layout">
            <Reveal>
              <div className="hp-kicker">Trust</div>
              <h2 className="hp-display hp-trust-title">
                EVERY SHIPMENT<br />CARRIES MORE<br /><em>THAN CARGO</em>
              </h2>
              <p className="hp-body mb-5">
                Every package we deliver holds more than just goods - it carries someone&apos;s trust and hope.
                Behind each shipment is the belief that we&apos;ll be there when it matters most.
              </p>
              <p className="hp-body">
                We&apos;re not just moving products; we&apos;re fulfilling promises, connecting lives, and making moments happen.
              </p>
              <p className="font-serif text-lg font-bold text-cream mt-8 leading-snug">
                Your Trusted Logistics Partner -<br />Delivering Reliability Every Mile
              </p>
            </Reveal>

            <div
              data-visible={isTrustSectionVisible ? 'true' : 'false'}
              className="hp-reveal hp-trust-mosaic"
            >
              {[
                { src: '/landing/customs-clearance.png', alt: 'Customs clearance operations' },
                { src: '/landing/warehousing-distribution.png', alt: 'Warehouse distribution operations' },
                { src: '/landing/supply-chain-analytics.png', alt: 'Supply chain analytics operations' },
              ].map((img) => (
                <div key={img.src} className="hp-mosaic-item">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 100vw, 25vw" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="hp-trust-cards">
            {trustCards.map((card, idx) => (
              <Reveal key={card.title}>
                <div className="hp-trust-card" style={{ '--home-stagger': `${idx * 100}ms` } as CSSProperties}>
                  <span className="hp-trust-badge">{card.badge}</span>
                  <div className="hp-trust-icon"><card.Icon size={26} /></div>
                  <div className="hp-trust-card-title">{card.title}</div>
                  <p className="hp-trust-card-body">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

