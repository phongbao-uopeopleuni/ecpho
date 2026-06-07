/** Resolve a /public asset path with the Vite base URL (e.g. /ecpho/ on GitHub Pages). */
export function assetUrl(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:)/.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

export function optimizedImageUrl(path: string, width = 960): string {
  if (!path || /^(https?:|data:)/.test(path)) return assetUrl(path);
  if (!/^\/?images\//.test(path) || !/\.(jpe?g|png)$/i.test(path)) return assetUrl(path);

  const normalized = path.startsWith('/') ? path.slice('/images/'.length) : path.slice('images/'.length);
  return assetUrl(`/images/optimized/${width}/${normalized.replace(/\.(jpe?g|png)$/i, '.jpg')}`);
}

export function optimizedImageSrcSet(path: string): string | undefined {
  if (!path || /^(https?:|data:)/.test(path) || !/^\/?images\//.test(path) || !/\.(jpe?g|png)$/i.test(path)) {
    return undefined;
  }

  return `${optimizedImageUrl(path, 480)} 480w, ${optimizedImageUrl(path, 960)} 960w`;
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
