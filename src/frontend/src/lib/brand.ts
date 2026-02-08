import { getGeneratedAssetUrl } from './assets';

// Shared brand constants for consistent branding across the application
export const BRAND = {
  name: 'GKV Smart Energy',
  logoPath: getGeneratedAssetUrl('gkv-logo.dim_512x512.png'),
  tagline: 'Powering a sustainable future with smart, reliable, and affordable solar energy solutions.',
} as const;
