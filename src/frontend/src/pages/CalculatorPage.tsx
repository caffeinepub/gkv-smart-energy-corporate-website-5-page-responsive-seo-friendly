import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Zap, Home, IndianRupee, TrendingUp } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import BookFreeConsultationCTA from '@/components/BookFreeConsultationCTA';
import {
  calculateSolarSystem,
  formatCurrency,
  formatNumber,
  CALCULATOR_ASSUMPTIONS,
} from '@/lib/solarCalculator';

export default function CalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [results, setResults] = useState(calculateSolarSystem(3000));

  useEffect(() => {
    setSEO(
      'Solar Calculator - Calculate Your Solar Savings | GKV Smart Energy',
      'Use our solar calculator to estimate your potential savings with solar energy. Calculate system size, costs, and annual savings for your home or business.'
    );
  }, []);

  useEffect(() => {
    if (monthlyBill > 0) {
      setResults(calculateSolarSystem(monthlyBill));
    }
  }, [monthlyBill]);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setMonthlyBill(value);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              Solar Savings Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate your potential savings and system requirements instantly
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Input Card */}
            <Card className="border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Enter Your Monthly Electricity Bill</CardTitle>
                <CardDescription className="text-base">
                  We'll calculate the perfect solar system size and your potential savings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyBill" className="text-base">
                      Monthly Electricity Bill (₹)
                    </Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      min="0"
                      step="100"
                      value={monthlyBill}
                      onChange={handleBillChange}
                      className="text-lg h-12"
                      placeholder="Enter your monthly bill amount"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enter your average monthly electricity bill to get accurate calculations
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Results Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">System Size</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{results.systemSizeKW} kW</p>
                  <p className="text-sm text-muted-foreground mt-1">Recommended capacity</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Annual Savings</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(results.annualSavings)}</p>
                  <p className="text-sm text-muted-foreground mt-1">Per year</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Units Generated</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{formatNumber(results.unitsGenerated)}</p>
                  <p className="text-sm text-muted-foreground mt-1">Units per year</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Space Required</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{formatNumber(results.spaceRequired)}</p>
                  <p className="text-sm text-muted-foreground mt-1">Square feet</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <IndianRupee className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Project Cost</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(results.projectCost)}</p>
                  <p className="text-sm text-muted-foreground mt-1">Before subsidy</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <IndianRupee className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">After Subsidy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(results.finalCost)}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Subsidy: {formatCurrency(results.subsidy)}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Assumptions Card */}
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-xl">Calculation Assumptions</CardTitle>
                <CardDescription className="text-base">
                  These calculations are based on the following conservative estimates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="text-sm">
                    <span className="font-medium">Electricity Tariff:</span>{' '}
                    <span className="text-muted-foreground">
                      ₹{CALCULATOR_ASSUMPTIONS.electricityTariff}/unit
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Annual Generation:</span>{' '}
                    <span className="text-muted-foreground">
                      {formatNumber(CALCULATOR_ASSUMPTIONS.annualGenerationPerKW)} units/kW/year
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Space Required:</span>{' '}
                    <span className="text-muted-foreground">
                      {CALCULATOR_ASSUMPTIONS.spacePerKW} sq ft/kW
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">System Efficiency:</span>{' '}
                    <span className="text-muted-foreground">
                      {CALCULATOR_ASSUMPTIONS.systemEfficiency * 100}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Actual values may vary based on location, roof orientation, shading, and other factors. Contact us for a detailed site assessment and accurate quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <BookFreeConsultationCTA
              title="Get a Detailed Quote"
              description="Contact us for a free site assessment and customized solar solution with accurate pricing"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
