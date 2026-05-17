/** Resolve a /public asset path with the Vite base URL (e.g. /ecpho/ on GitHub Pages). */
export function assetUrl(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:)/.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

/** Absolute URL for meta tags (og:image, etc.). */
export function absoluteAssetUrl(path: string): string {
  if (/^https?:/.test(path)) return path;

  if (typeof window !== 'undefined') {
    return new URL(assetUrl(path), window.location.origin).href;
  }

  const origin =
    import.meta.env.BASE_URL === '/ecpho/'
      ? 'https://phongbao-uopeopleuni.github.io'
      : 'https://www.ecphonoodlehousenc.com';

  return `${origin}${assetUrl(path)}`;
}
