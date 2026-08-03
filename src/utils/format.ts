import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string) {
  return `$${parseFloat(price).toFixed(2)}`;
}

/**
 * URL-safe anchor slug. Vietnamese diacritics are folded to ASCII so
 * "Noodle Soups (Phở)" becomes "noodle-soups-pho".
 */
export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * The slug shape used before diacritics were folded ("noodle-soups--ph--").
 * Kept so anchors shared from the old build still resolve.
 */
export function legacySlugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '-');
}
