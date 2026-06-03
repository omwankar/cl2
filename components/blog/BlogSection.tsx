import Image from 'next/image';
import type { ParsedBlogSection } from '@/lib/blog-parser';
import { InlineRichText } from '@/components/blog/inline-rich-text';

type BlogSectionProps = {
  section: ParsedBlogSection;
};

export function BlogSection({ section }: BlogSectionProps) {
  return (
    <section className="bg-white rounded-2xl border border-border p-6 md:p-8">
      <h2 className="text-2xl font-bold text-[#0A1628] mb-4">{section.heading}</h2>

      {section.image && (
        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={section.image}
            alt={section.heading}
            fill
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      {section.content?.map((paragraph, index) => (
        <p
          key={`${section.heading}-p-${index}`}
          className="text-base md:text-lg text-foreground/90 leading-loose mb-4 last:mb-0"
        >
          <InlineRichText text={paragraph} />
        </p>
      ))}

      {section.list && section.list.length > 0 && (
        <ul className="mt-3 list-disc pl-6 space-y-2 text-base md:text-lg text-foreground/90">
          {section.list.map((item, index) => (
            <li key={`${section.heading}-li-${index}`}>
              <InlineRichText text={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
