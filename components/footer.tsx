import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
} from 'react-icons/fa6';
import {
  CLARUSTO_GROUP,
  INDUSTRY_MEMBERSHIPS,
  PRIMARY_CONTACT_EMAIL,
  PRIMARY_CONTACT_EMAIL_HREF,
  UK_OFFICE_ADDRESS_DISPLAY,
} from '@/lib/constants';
import { MetaContactLink } from '@/components/meta-contact-link';

export function Footer() {
  return (
    <footer className="bg-[#0F1923] text-white">
      <div className="app-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Image
                src="/clarusto-logo-light.png"
                alt="Clarusto Logistics"
                width={210}
                height={58}
                className="h-12 w-auto max-w-[210px]"
              />
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted global logistics partner for seamless deliveries and comprehensive shipping solutions.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/clarusto-logistics" aria-label="Clarusto Logistics on LinkedIn" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/Clarustologistics" aria-label="Clarusto Logistics on Facebook" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/clarustologistics" aria-label="Clarusto Logistics on Instagram" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/ClarLogistics" aria-label="Clarusto Logistics on X (Twitter)" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link href="https://in.pinterest.com/clarustologistics/clarusto-logistics/" aria-label="Clarusto Logistics on Pinterest" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaPinterestP className="h-5 w-5" />
              </Link>
            </div>
            {/* Connect Antigua member badge — in HTML for directory/bot verification, not shown to visitors */}
            <a
              href="https://www.connectantigua.com/business-services/clarusto-logistics?from=badge"
              title="Find me on Connect Antigua"
              target="_blank"
              rel="noopener noreferrer"
              className="sr-only"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.connectantigua.com/images/CAN-member-Logo.png"
                alt="Connect Antigua member"
                className="border-0"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-amber-500 transition-colors">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="hover:text-amber-500 transition-colors">
                  Company Brochure
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/air-freight" className="hover:text-amber-500 transition-colors">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/sea-freight" className="hover:text-amber-500 transition-colors">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link href="/services/land-transport" className="hover:text-amber-500 transition-colors">
                  Land Transport
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="hover:text-amber-500 transition-colors">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services/supply-chain" className="hover:text-amber-500 transition-colors">
                  Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/services/customs-clearance" className="hover:text-amber-500 transition-colors">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <MetaContactLink
                  href={PRIMARY_CONTACT_EMAIL_HREF}
                  contactMethod="email"
                  className="underline-offset-2 hover:underline"
                >
                  {PRIMARY_CONTACT_EMAIL}
                </MetaContactLink>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{UK_OFFICE_ADDRESS_DISPLAY}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Memberships & affiliations */}
        <div className="mb-10 border-t border-white/10 pt-10">
          <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-amber-400">
            Memberships &amp; Affiliations
          </p>
          <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {INDUSTRY_MEMBERSHIPS.map((org) => (
              <li key={org.name} className="flex justify-center">
                <a
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={org.fullName}
                  aria-label={org.ariaLabel}
                  className="group flex h-36 w-full max-w-[240px] flex-col items-center justify-center gap-2 rounded-xl bg-white p-6 opacity-80 grayscale transition duration-300 hover:-translate-y-1 hover:opacity-100 hover:shadow-lg hover:grayscale-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <span className="flex min-h-0 w-full flex-1 items-center justify-center">
                    <Image
                      src={org.logo}
                      alt={org.ariaLabel}
                      width={org.logoWidth}
                      height={org.logoHeight}
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                  {'caption' in org && org.caption ? (
                    <span className="shrink-0 text-xs font-semibold tracking-wider text-slate-700">
                      {org.caption}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8 text-center text-sm opacity-75 space-y-2">
          <p>
            Part of{' '}
            <a
              href={CLARUSTO_GROUP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              {CLARUSTO_GROUP.name}
            </a>
            {' · '}
            A Clarusto Group Company
          </p>
          <p>
            &copy; 2025 Clarusto Logistics. All rights reserved. |{' '}
            <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms-of-service" className="hover:text-amber-500 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
