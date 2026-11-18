'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type TouchEvent as ReactTouchEvent,
} from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectGalleryImage } from '@/lib/project-case-studies';
import { Reveal } from '@/components/projects/reveal';
import { SectionEyebrow } from '@/components/projects/section-eyebrow';

type GalleryProps = {
  images: ProjectGalleryImage[];
};

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: ProjectGalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const titleId = useId();
  const image = images[index];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.dataset.lightboxOpen = 'true';
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      delete document.body.dataset.lightboxOpen;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const onTouchStart = (event: ReactTouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: ReactTouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(delta) > 48) {
      if (delta > 0) onPrev();
      else onNext();
    }
    touchStartX.current = null;
  };

  if (!image) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0A0F1C]/92 p-4 backdrop-blur-sm outline-none"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p id={titleId} className="sr-only">
        Project gallery image {index + 1} of {images.length}
      </p>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#F5B800]/50 hover:text-[#F5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
        aria-label="Close gallery"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#F5B800]/50 hover:text-[#F5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] sm:inline-flex"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#F5B800]/50 hover:text-[#F5B800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] sm:inline-flex"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <figure
        className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#111620]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
          />
        </div>
        {(image.caption || image.alt) && (
          <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-[#94A3B8]">
            {image.caption || image.alt}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export function Gallery({ images }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onPrev = useCallback(() => {
    setOpenIndex((current) =>
      current == null ? current : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  const onNext = useCallback(() => {
    setOpenIndex((current) =>
      current == null ? current : (current + 1) % images.length
    );
  }, [images.length]);

  if (images.length < 2) return null;

  const onTileKey = (event: ReactKeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpenIndex(index);
    }
  };

  return (
    <section
      className="border-b border-white/10 bg-[#0F1629] py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="app-container">
        <Reveal>
          <SectionEyebrow>Visuals</SectionEyebrow>
          <h2
            id="gallery-heading"
            className="mt-4 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-white md:text-5xl"
          >
            PROJECT GALLERY
          </h2>
        </Reveal>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {images.map((image, index) => {
            const isLarge = index === 0;
            return (
              <Reveal
                key={`${image.src}-${index}`}
                delay={index * 0.06}
                className={
                  isLarge
                    ? 'col-span-2 row-span-2 md:col-span-2'
                    : 'col-span-1 row-span-1'
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  onKeyDown={(event) => onTileKey(event, index)}
                  className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
                  aria-label={`Open gallery image: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes={
                      isLarge
                        ? '(max-width: 768px) 100vw, 50vw'
                        : '(max-width: 768px) 50vw, 25vw'
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 via-transparent to-transparent opacity-80" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {openIndex != null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
}
