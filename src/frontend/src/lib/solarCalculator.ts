// Solar calculator utility functions and constants

// Assumptions for calculations
export const CALCULATOR_ASSUMPTIONS = {
  // Average electricity tariff in India (₹/unit)
  electricityTariff: 7.5,
  
  // Annual solar generation per kW (units/year) - conservative estimate for India
  annualGenerationPerKW: 1400,
  
  // Space required per kW (square feet)
  spacePerKW: 100,
  
  // Base cost per kW before subsidy (₹)
  baseCostPerKW: 60000,
  
  // System efficiency factor
  systemEfficiency: 0.85,
  
  // Average daily consumption factor
  dailyConsumptionFactor: 30,
};

// Subsidy structure based on PM Surya Ghar Yojana
export const SUBSIDY_STRUCTURE = [
  { minKW: 0, maxKW: 1, subsidyPerKW: 45000, totalSubsidy: 45000 },
  { minKW: 1, maxKW: 2, subsidyPerKW: 22500, totalSubsidy: 90000 },
  { minKW: 2, maxKW: 3, subsidyPerKW: 18000, totalSubsidy: 108000 },
  { minKW: 3, maxKW: 10, subsidyPerKW: 18000, totalSubsidy: 108000 },
];

export interface CalculatorResult {
  systemSizeKW: number;
  annualSavings: number;
  unitsGenerated: number;
  spaceRequired: number;
  projectCost: number;
  subsidy: number;
  finalCost: number;
  monthlyBill: number;
}

export function calculateSolarSystem(monthlyBill: number): CalculatorResult {
  // Calculate monthly units consumed
  const monthlyUnits = monthlyBill / CALCULATOR_ASSUMPTIONS.electricityTariff;
  
  // Calculate annual units
  const annualUnits = monthlyUnits * 12;
  
  // Calculate required system size (kW)
  // Adding 10% buffer for losses
  const systemSizeKW = Math.ceil(
    (annualUnits / CALCULATOR_ASSUMPTIONS.annualGenerationPerKW) * 1.1 * 10
  ) / 10; // Round to 1 decimal
  
  // Calculate actual units generated
  const unitsGenerated = Math.round(
    systemSizeKW * CALCULATOR_ASSUMPTIONS.annualGenerationPerKW * CALCULATOR_ASSUMPTIONS.systemEfficiency
  );
  
  // Calculate annual savings (assuming 90% of generated units offset consumption)
  const annualSavings = Math.round(
    unitsGenerated * 0.9 * CALCULATOR_ASSUMPTIONS.electricityTariff
  );
  
  // Calculate space required (square feet)
  const spaceRequired = Math.round(systemSizeKW * CALCULATOR_ASSUMPTIONS.spacePerKW);
  
  // Calculate project cost
  const projectCost = Math.round(systemSizeKW * CALCULATOR_ASSUMPTIONS.baseCostPerKW);
  
  // Calculate subsidy
  const subsidy = calculateSubsidy(systemSizeKW);
  
  // Calculate final cost after subsidy
  const finalCost = projectCost - subsidy;
  
  return {
    systemSizeKW,
    annualSavings,
    unitsGenerated,
    spaceRequired,
    projectCost,
    subsidy,
    finalCost,
    monthlyBill,
  };
}

export function calculateSubsidy(systemSizeKW: number): number {
  // Find applicable subsidy tier
  for (const tier of SUBSIDY_STRUCTURE) {
    if (systemSizeKW >= tier.minKW && systemSizeKW <= tier.maxKW) {
      return tier.totalSubsidy;
    }
  }
  
  // For systems above 3kW, subsidy is capped at ₹1,08,000
  if (systemSizeKW > 3) {
    return 108000;
  }
  
  // For systems below 1kW
  if (systemSizeKW < 1) {
    return Math.round(systemSizeKW * 45000);
  }
  
  return 0;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}
