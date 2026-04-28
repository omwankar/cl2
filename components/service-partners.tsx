'use client';

import Image from 'next/image';
import { logoDevUrl } from '@/lib/logo-dev';

export function ServicePartners() {
  const servicePartners = [
    { name: 'Amazon', logo: logoDevUrl('amazon.com') },
    { name: 'DPD', logo: logoDevUrl('dpd.com') },
    { name: 'UPS', logo: logoDevUrl('ups.com') },
    { name: 'DHL', logo: logoDevUrl('dhl.com') },
    { name: 'DX Group', logo: logoDevUrl('dxdelivery.com') },
    { name: 'Yodel', logo: logoDevUrl('yodel.co.uk') },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 md:py-24">
      <div className="app-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Service Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePartners.map((partner, idx) => (
            <div
              key={partner.name}
              className="group animate-fadeInUp cursor-pointer rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="relative mx-auto h-16 w-[80%]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 80vw, 260px"
                  className="object-contain transition-all duration-300 group-hover:grayscale-0"
                  title={partner.name}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
