import type { BlogBlock, ParsedBlogFAQ } from '@/lib/blog-parser';
import { InlineRichText } from '@/components/blog/inline-rich-text';

type BlogArticleBodyProps = {
  blocks: BlogBlock[];
  faqs: ParsedBlogFAQ[];
};

function NumberedHeading({ text }: { text: string }) {
  const match = text.match(/^(\d+[\).]?)\s*(.+)$/);
  if (!match) {
    return <>{text}</>;
  }
  return (
    <>
      <span className="text-[#FF5C00]">{match[1]}</span>{' '}
      <span>{match[2]}</span>
    </>
  );
}

function ArticleFaqs({ faqs }: { faqs: ParsedBlogFAQ[] }) {
  if (faqs.length === 0) return null;

  return (
    <section id="frequently-asked-questions" className="mt-12 pt-2">
      <h2 className="text-[1.75rem] md:text-[2rem] font-bold text-[#0A1628] leading-tight mt-12 mb-5 border-b-2 border-[#FF5C00] pb-2">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={`${faq.question}-${index}`}>
            <h3 className="text-[1.25rem] font-bold text-[#0A1628] leading-snug">
              {faq.question}
            </h3>
            <p className="mt-2 text-[1.125rem] leading-[1.75] text-[#1A1A2E]/90">
              <InlineRichText text={faq.answer} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BlogArticleBody({ blocks, faqs }: BlogArticleBodyProps) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 md:p-10">
      <div className="mx-auto max-w-[760px]">
        {blocks.map((block, index) => {
          const key = `${block.type}-${index}`;

          switch (block.type) {
            case 'standfirst':
              return (
                <p
                  key={key}
                  className="text-[1.2rem] md:text-[1.3rem] font-semibold leading-[1.7] text-[#0A1628] mb-5"
                >
                  <InlineRichText text={block.text} />
                </p>
              );

            case 'p':
              return (
                <p
                  key={key}
                  className="text-[1.125rem] leading-[1.75] text-[#1A1A2E]/90 mb-5"
                >
                  <InlineRichText text={block.text} />
                </p>
              );

            case 'h2':
              return (
                <h2
                  key={key}
                  id={block.id}
                  className="scroll-mt-28 text-[1.75rem] md:text-[2rem] font-bold text-[#0A1628] leading-tight mt-12 mb-5 border-b-2 border-[#FF5C00] pb-2 first:mt-0"
                >
                  {block.text.replace(/:$/, '')}
                </h2>
              );

            case 'h3':
              return (
                <h3
                  key={key}
                  id={block.id}
                  className="scroll-mt-28 text-[1.375rem] md:text-[1.5rem] font-bold text-[#0A1628] leading-snug mt-8 mb-3"
                >
                  <NumberedHeading text={block.text} />
                </h3>
              );

            case 'lead':
              return (
                <p
                  key={key}
                  className="text-[1.2rem] font-semibold text-[#0A1628] leading-snug mb-3"
                >
                  <InlineRichText text={block.text} />
                </p>
              );

            case 'measure':
              return (
                <div
                  key={key}
                  className="my-5 rounded-xl border-l-[3px] border-[#FF5C00] bg-[#FFF7F2] px-4 py-3"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF5C00] mb-2">
                    {block.label.replace(/:$/, '')}
                  </p>
                  <ul className="list-none space-y-2 pl-0">
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={`${key}-li-${itemIndex}`}
                        className="relative pl-5 text-[1.125rem] leading-[1.6] text-[#1A1A2E]/90 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FF5C00]"
                      >
                        <InlineRichText text={item} />
                      </li>
                    ))}
                  </ul>
                  {block.takeaway ? (
                    <p className="mt-4 border-l-[3px] border-[#FF5C00] pl-3 text-[1.125rem] italic leading-[1.75] text-[#1A1A2E]/85">
                      <InlineRichText text={block.takeaway} />
                    </p>
                  ) : null}
                </div>
              );

            case 'ul':
              return (
                <ul key={key} className="my-4 list-none space-y-2 pl-0">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={`${key}-li-${itemIndex}`}
                      className="relative pl-5 text-[1.125rem] leading-[1.6] text-[#1A1A2E]/90 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FF5C00]"
                    >
                      <InlineRichText text={item} />
                    </li>
                  ))}
                </ul>
              );

            case 'takeaway':
              return (
                <p
                  key={key}
                  className="my-4 border-l-[3px] border-[#FF5C00] pl-3 text-[1.125rem] italic leading-[1.75] text-[#1A1A2E]/85"
                >
                  <InlineRichText text={block.text} />
                </p>
              );

            case 'pullquote':
              return (
                <blockquote
                  key={key}
                  className="my-8 border-l-4 border-[#FF5C00] bg-[#FFF7F2] px-5 py-4 text-[1.25rem] font-semibold italic leading-snug text-[#0A1628]"
                >
                  <InlineRichText text={block.text} />
                </blockquote>
              );

            case 'toc':
              return (
                <nav
                  key={key}
                  aria-label="Table of contents"
                  className="my-8 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 md:p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                    In this article
                  </p>
                  <ol className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-[0.95rem] font-medium text-[#0A1628] hover:text-[#FF5C00] transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              );

            default:
              return null;
          }
        })}

        <ArticleFaqs faqs={faqs} />
      </div>
    </div>
  );
}
