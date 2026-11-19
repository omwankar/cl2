'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type NavLink = { name: string; href: string };
type NavItem = NavLink & { submenu?: NavLink[] };

const primaryNav: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Air Freight', href: '/services/air-freight' },
      { name: 'Sea Freight', href: '/services/sea-freight' },
      { name: 'Land Transport', href: '/services/land-transport' },
      { name: 'Warehousing & Distribution', href: '/services/warehousing' },
      { name: 'Freight Forwarding', href: '/services/freight-forwarding' },
      { name: 'Transportation Management', href: '/services/transportation-management' },
      { name: 'Supply Chain Management', href: '/services/supply-chain' },
      { name: 'Last Mile Delivery', href: '/services/last-mile-delivery' },
      { name: 'E-Commerce Logistics', href: '/services/ecommerce-logistics' },
      { name: 'Reverse Logistics', href: '/services/reverse-logistics' },
      { name: 'Heavy Goods Handling', href: '/services/heavy-goods-handling' },
      { name: 'Customs Brokerage', href: '/services/customs-brokerage' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

const moreNav: NavItem[] = [
  { name: 'Press Releases', href: '/press-releases' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const mobileNav: NavItem[] = [...primaryNav, ...moreNav];

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const moreActive = moreNav.some((item) => isActivePath(pathname, item.href));
  const onTrack = pathname.startsWith('/track');

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      data-app-nav
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(15, 25, 35, 0.88)' : 'rgba(15, 25, 35, 0.98)',
        borderBottomColor: isScrolled
          ? 'rgba(245, 184, 0, 0.18)'
          : 'rgba(255, 255, 255, 0.08)',
      }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        isScrolled && 'backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
      )}
    >
      <div
        className={cn(
          'mx-auto grid w-full max-w-[1280px] grid-cols-[auto_1fr_auto] items-center px-4 transition-all duration-300 sm:px-6 lg:px-8',
          isScrolled ? 'h-16' : 'h-[4.5rem]'
        )}
      >
        {/* Left: logo */}
        <Link
          href="/"
          className="relative z-10 flex shrink-0 touch-manipulation items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/clarusto-logo-light.png"
            alt="Clarusto Logistics"
            width={220}
            height={60}
            className="h-10 w-auto md:h-11"
            priority
          />
        </Link>

        {/* Center: links */}
        <div className="hidden items-center justify-center xl:flex">
          <nav className="flex items-center rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1">
            {primaryNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    data-cursor="nav"
                    className={cn(
                      'inline-flex h-10 cursor-pointer touch-manipulation items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[15px] font-medium transition-colors',
                      active
                        ? 'bg-amber-400 text-[#0F1923]'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {item.name}
                    {'submenu' in item && (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5',
                          active ? 'text-[#0F1923]/70' : 'opacity-60'
                        )}
                      />
                    )}
                  </Link>

                  {'submenu' in item && item.submenu && (
                    <div className="invisible absolute left-1/2 top-[calc(100%+0.4rem)] z-50 w-64 -translate-x-1/2 rounded-2xl border border-border bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          data-cursor="nav"
                          className="block cursor-pointer px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-amber-50 hover:text-amber-900"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="relative group">
              <button
                type="button"
                className={cn(
                  'inline-flex h-10 cursor-pointer touch-manipulation items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[15px] font-medium transition-colors',
                  moreActive
                    ? 'bg-amber-400 text-[#0F1923]'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                )}
              >
                More
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5',
                    moreActive ? 'text-[#0F1923]/70' : 'opacity-60'
                  )}
                />
              </button>
              <div className="invisible absolute left-1/2 top-[calc(100%+0.4rem)] z-50 w-52 -translate-x-1/2 rounded-2xl border border-border bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {moreNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    data-cursor="nav"
                    className={cn(
                      'block cursor-pointer px-4 py-2.5 text-sm transition-colors hover:bg-amber-50 hover:text-amber-900',
                      isActivePath(pathname, item.href)
                        ? 'font-semibold text-amber-800'
                        : 'text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Right: actions */}
        <div className="relative z-10 hidden items-center justify-end gap-3 xl:flex">
          <Link
            href="/blog#blog-search"
            data-cursor="nav"
            aria-label="Search blog posts"
            className="inline-flex h-10 w-10 cursor-pointer touch-manipulation items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-amber-400"
          >
            <Search className="h-4 w-4" />
          </Link>

          <Link
            href="/track"
            data-cursor="nav"
            className={cn(
              'inline-flex h-10 cursor-pointer touch-manipulation items-center justify-center whitespace-nowrap rounded-full border-2 px-4 text-[15px] font-semibold transition-colors',
              onTrack
                ? 'border-amber-400 bg-amber-400/15 text-amber-300'
                : 'border-amber-400 text-amber-400 hover:bg-amber-400/10'
            )}
          >
            Track
          </Link>

          <Link
            href="/contact"
            data-cursor="nav"
            className="inline-flex h-10 cursor-pointer touch-manipulation items-center justify-center whitespace-nowrap rounded-full bg-amber-400 px-5 text-[15px] font-semibold text-[#0F1923] transition-colors hover:bg-amber-300"
          >
            Book a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="col-start-3 inline-flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center justify-self-end rounded-full border border-white/15 text-white hover:bg-white/10 xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-pointer bg-black/55 touch-manipulation xl:hidden"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="fixed left-0 right-0 top-[4.5rem] z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain touch-scroll border-t border-white/10 bg-[#0F1923] pb-[max(1rem,env(safe-area-inset-bottom))] xl:hidden"
          >
            <div className="flex flex-col px-3 py-3">
              {mobileNav.map((item) => (
                <div key={item.name} className="border-b border-white/10 last:border-b-0">
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                        }
                        className="flex min-h-12 w-full touch-manipulation items-center justify-between px-3 py-3 text-left text-base font-medium text-[#f0f0f0]"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 shrink-0 transition-transform',
                            openSubmenu === item.name && 'rotate-180'
                          )}
                        />
                      </button>
                      {openSubmenu === item.name && (
                        <div className="border-t border-white/5 bg-black/20">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block min-h-12 cursor-pointer px-5 py-3 text-sm text-[#f0f0f0] active:bg-white/10"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex min-h-12 cursor-pointer items-center px-3 py-3 text-base font-medium active:bg-white/10',
                        isActivePath(pathname, item.href)
                          ? 'text-amber-400'
                          : 'text-[#f0f0f0]'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 grid gap-2.5 px-1 pb-2 sm:grid-cols-2">
                <Link
                  href="/track"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 w-full cursor-pointer items-center justify-center rounded-full border-2 border-amber-400 text-base font-semibold text-amber-400 transition-colors hover:bg-amber-400/10"
                >
                  Track Shipment
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-amber-400 text-base font-semibold text-[#0F1923] transition-colors hover:bg-amber-300"
                >
                  Book a Quote
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.nav>
  );
}
