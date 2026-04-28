'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { logoDevUrl } from '@/lib/logo-dev';

interface Partner {
  name: string;
  logo: string;
  scale?: number;
}

const partners: Partner[] = [
  { name: 'Saudi Aramco', logo: logoDevUrl('aramco.com') },
  { name: 'Samsung', logo: logoDevUrl('samsung.com'), scale: 1.15 },
  { name: 'ISCO (A Siemens Company)', logo: logoDevUrl('siemens.com') },
  { name: 'GWC', logo: logoDevUrl('gwclogistics.com'), scale: 1.2 },
  { name: 'SABIC', logo: logoDevUrl('sabic.com') },
  { name: 'Al Khodari (AK)', logo: logoDevUrl('alkhodari.com') },
  { name: 'Nas Air', logo: logoDevUrl('flynas.com'), scale: 1.15 },
  { name: 'Petro RABIGH', logo: logoDevUrl('petrorabigh.com') },
  { name: 'Panalpina', logo: logoDevUrl('panalpina.com'), scale: 1.2 },
  { name: 'Centrepoint', logo: logoDevUrl('centrepointstores.com'), scale: 1.15 },
  { name: 'GAC', logo: logoDevUrl('gac.com'), scale: 1.3 },
  { name: 'MMG', logo: logoDevUrl('mmg.com') },
  { name: 'Schlumberger', logo: logoDevUrl('slb.com'), scale: 1.2 },
  { name: 'ABB', logo: logoDevUrl('abb.com'), scale: 1.3 },
  { name: "Ma'aden", logo: logoDevUrl('maaden.com.sa') },
];

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate partners for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to work with industry leaders and innovative companies across various sectors.
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div 
            ref={trackRef}
            className={`flex gap-6 ${isPaused ? 'animation-paused' : ''}`}
            style={{
              animation: `marquee 40s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 relative group"
                style={{ width: '160px', height: '80px' }}
              >
                <div
                  className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-md group-hover:border-gray-300 group-hover:brightness-110"
                  title={partner.name}
                >
                  <PartnerLogo partner={partner} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function PartnerLogo({ partner }: { partner: Partner }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <span 
        className="text-sm font-medium text-gray-700 text-center"
        style={{ 
          transform: `scale(${partner.scale ?? 1})`,
          maxWidth: '100%',
        }}
      >
        {partner.name}
      </span>
    );
  }

  return (
    <div 
      className="relative w-full h-full"
      style={{ transform: `scale(${partner.scale ?? 1})` }}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        unoptimized
        className="object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
