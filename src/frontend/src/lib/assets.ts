// Helper to generate production-safe static asset URLs
// Respects configured base path for deployments under different prefixes

/**
 * Generates a production-safe URL for static assets.
 * In development, returns the path as-is.
 * In production, respects any configured base path.
 * 
 * @param path - Asset path relative to public directory (e.g., '/assets/generated/logo.png')
 * @returns Production-safe asset URL
 */
export function getAssetUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In production, respect the base path if configured
  // Vite automatically handles this via import.meta.env.BASE_URL
  if (import.meta.env.PROD && import.meta.env.BASE_URL !== '/') {
    return `${import.meta.env.BASE_URL}${normalizedPath}`.replace(/\/+/g, '/');
  }
  
  return normalizedPath;
}

/**
 * Generates a production-safe URL for generated assets.
 * Convenience wrapper for assets in the /assets/generated/ directory.
 * 
 * @param filename - Filename in the generated directory (e.g., 'logo.png')
 * @returns Production-safe asset URL
 */
export function getGeneratedAssetUrl(filename: string): string {
  return getAssetUrl(`/assets/generated/${filename}`);
}
