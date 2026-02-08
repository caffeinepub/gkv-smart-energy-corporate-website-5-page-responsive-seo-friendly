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
import { getKwMatchedImage, getFallbackImage } from '@/lib/solarKwImages';

export default function CalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [results, setResults] = useState(calculateSolarSystem(3000));
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setSEO(
      'Solar Calculator - Calculate Your Solar Savings | GKV Smart Energy',
      'Use our solar calculator to estimate your potential savings with solar energy. Calculate system size, costs, and annual savings for your home or business.'
    );
  }, []);

  useEffect(() => {
    if (monthlyBill > 0) {
      setResults(calculateSolarSystem(monthlyBill));
      setImageError(false); // Reset image error when results change
    }
  }, [monthlyBill]);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setMonthlyBill(value);
  };

  const kwImage = getKwMatchedImage(results.systemSizeKW);
  const displayImagePath = imageError ? getFallbackImage() : kwImage.imagePath;

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

            {/* System Size Image - kW Matched */}
            <Card className="border-2 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">Your Recommended Solar System</CardTitle>
                <CardDescription>
                  Based on your {results.systemSizeKW} kW system requirement
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full aspect-[2/1] bg-muted">
                  <img
                    src={displayImagePath}
                    alt={kwImage.description}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{kwImage.description}</p>
                  </div>
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
                    <CardTitle className="text-lg">Subsidy Amount</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(results.subsidy)}</p>
                  <p className="text-sm text-muted-foreground mt-1">Government support</p>
                </CardContent>
              </Card>
            </div>

            {/* Final Cost Highlight */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Your Final Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-2">
                  <IndianRupee className="h-8 w-8 text-primary" />
                  <p className="text-5xl font-bold text-primary">{formatCurrency(results.finalCost)}</p>
                </div>
                <p className="text-lg text-muted-foreground">After Government Subsidy</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Save {formatCurrency(results.annualSavings)} per year • Payback in ~{Math.ceil(results.finalCost / results.annualSavings)} years
                </p>
              </CardContent>
            </Card>

            {/* Calculation Assumptions */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Calculation Assumptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Base cost per kW</span>
                    <span className="font-semibold">{formatCurrency(CALCULATOR_ASSUMPTIONS.baseCostPerKW)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Electricity tariff</span>
                    <span className="font-semibold">₹{CALCULATOR_ASSUMPTIONS.electricityTariff}/unit</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Annual generation per kW</span>
                    <span className="font-semibold">{formatNumber(CALCULATOR_ASSUMPTIONS.annualGenerationPerKW)} units</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Space per kW</span>
                    <span className="font-semibold">{CALCULATOR_ASSUMPTIONS.spacePerKW} sq ft</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  * These are conservative estimates. Actual values may vary based on location, panel quality, and installation conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <BookFreeConsultationCTA variant="default" />
          </div>
        </div>
      </section>
    </div>
  );
}
