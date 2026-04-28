const LOGO_DEV_BASE = 'https://img.logo.dev';

export function logoDevUrl(domain: string, options?: { size?: number }) {
  const token = process.env.NEXT_PUBLIC_LOGO_DEV_API_KEY;
  const size = options?.size ?? 256;
  const url = new URL(`${LOGO_DEV_BASE}/${domain}`);
  url.searchParams.set('token', token ?? '');
  url.searchParams.set('size', String(size));
  url.searchParams.set('format', 'webp');
  url.searchParams.set('retina', 'true');
  return url.toString();
}
