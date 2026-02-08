import { getGeneratedAssetUrl } from './assets';

// Helper to map system size (kW) to representative solar installation images

interface KwImageRange {
  minKw: number;
  maxKw: number;
  imagePath: string;
  description: string;
}

const KW_IMAGE_RANGES: KwImageRange[] = [
  {
    minKw: 0,
    maxKw: 2,
    imagePath: getGeneratedAssetUrl('solar-kw-02.dim_1200x600.png'),
    description: 'Small residential solar system (up to 2 kW)',
  },
  {
    minKw: 2.01,
    maxKw: 5,
    imagePath: getGeneratedAssetUrl('solar-kw-05.dim_1200x600.png'),
    description: 'Medium-small residential solar system (3-5 kW)',
  },
  {
    minKw: 5.01,
    maxKw: 10,
    imagePath: getGeneratedAssetUrl('solar-kw-10.dim_1200x600.png'),
    description: 'Medium residential solar system (6-10 kW)',
  },
  {
    minKw: 10.01,
    maxKw: 20,
    imagePath: getGeneratedAssetUrl('solar-kw-20.dim_1200x600.png'),
    description: 'Large commercial solar system (11-20 kW)',
  },
  {
    minKw: 20.01,
    maxKw: Infinity,
    imagePath: getGeneratedAssetUrl('solar-kw-50.dim_1200x600.png'),
    description: 'Very large commercial solar system (>20 kW)',
  },
];

// Fallback image if no range matches or image fails to load
const FALLBACK_IMAGE = getGeneratedAssetUrl('gkv-project-01.dim_1200x800.png');

export function getKwMatchedImage(systemSizeKw: number): { imagePath: string; description: string } {
  const range = KW_IMAGE_RANGES.find(
    (range) => systemSizeKw >= range.minKw && systemSizeKw <= range.maxKw
  );

  if (range) {
    return {
      imagePath: range.imagePath,
      description: range.description,
    };
  }

  // Fallback for edge cases
  return {
    imagePath: FALLBACK_IMAGE,
    description: 'Solar installation example',
  };
}

export function getFallbackImage(): string {
  return FALLBACK_IMAGE;
}
