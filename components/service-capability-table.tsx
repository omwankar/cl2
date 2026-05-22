import Link from 'next/link';

const CAPABILITIES = [
  {
    service: 'Air Freight',
    bestFor: 'Urgent & high-value cargo',
    transit: '1–5 days',
    coverage: 'Global airports',
    href: '/services/air-freight',
  },
  {
    service: 'Sea Freight',
    bestFor: 'Bulk & cost-efficient volume',
    transit: '14–35 days',
    coverage: 'Global ports (FCL/LCL)',
    href: '/services/sea-freight',
  },
  {
    service: 'Customs Brokerage',
    bestFor: 'UK/EU import compliance',
    transit: '24–48 hr clearance',
    coverage: 'UK, EU, GCC',
    href: '/services/customs-brokerage',
  },
  {
    service: 'Last Mile Delivery',
    bestFor: 'Final-leg UK distribution',
    transit: '1–2 business days',
    coverage: 'UK & regional',
    href: '/services/last-mile-delivery',
  },
  {
    service: 'Supply Chain Management',
    bestFor: 'End-to-end programme control',
    transit: 'Lane-specific',
    coverage: '5 continents',
    href: '/services/supply-chain',
  },
  {
    service: 'Warehousing',
    bestFor: 'Storage & fulfilment',
    transit: 'Same-day dispatch',
    coverage: 'UK, Middle East, EU',
    href: '/services/warehousing',
  },
] as const;

export function ServiceCapabilityTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-white">
      <table className="w-full min-w-[640px] text-sm">
        <caption className="sr-only">
          Clarusto Logistics service capability comparison
        </caption>
        <thead>
          <tr className="border-b border-border bg-secondary/20 text-left">
            <th scope="col" className="px-4 py-3 font-semibold">
              Service
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Best for
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Typical transit
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Coverage
            </th>
          </tr>
        </thead>
        <tbody>
          {CAPABILITIES.map((row) => (
            <tr key={row.service} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-medium">
                <Link href={row.href} className="text-amber-600 hover:underline">
                  {row.service}
                </Link>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.transit}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.coverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
