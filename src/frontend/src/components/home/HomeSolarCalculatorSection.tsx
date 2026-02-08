import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Calculator, Zap, TrendingDown, Home, IndianRupee, ArrowRight } from 'lucide-react';
import { calculateSolarSystem, formatCurrency, formatNumber } from '@/lib/solarCalculator';

export default function HomeSolarCalculatorSection() {
  const [monthlyBill, setMonthlyBill] = useState<string>('3000');
  const result = calculateSolarSystem(Number(monthlyBill) || 0);

  const handleBillChange = (value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    setMonthlyBill(numericValue);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-2">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Solar Savings Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Calculate Your Solar Savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find out how much you can save with solar energy
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Card */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Enter Your Monthly Bill</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="monthlyBill" className="text-base">
                    Monthly Electricity Bill (₹)
                  </Label>
                  <Input
                    id="monthlyBill"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter amount"
                    value={monthlyBill}
                    onChange={(e) => handleBillChange(e.target.value)}
                    className="text-2xl h-14 text-center font-semibold"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Enter your average monthly electricity bill
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <Button asChild size="lg" className="w-full gap-2">
                    <Link to="/contact">
                      <ArrowRight className="h-5 w-5" />
                      Book Free Site Survey
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl">Your Solar System Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">System Size</div>
                      <div className="text-2xl font-bold text-primary">
                        {result.systemSizeKW} kW
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TrendingDown className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                      <div className="text-2xl font-bold text-green-600">
                        {formatCurrency(result.annualSavings)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Units Generated (Yearly)</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {formatNumber(result.unitsGenerated)} kWh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Home className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Roof Area Required</div>
                      <div className="text-2xl font-bold text-orange-600">
                        {formatNumber(result.spaceRequired)} sq ft
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border-2 border-primary/30">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IndianRupee className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Project Cost (After Subsidy)</div>
                      <div className="text-2xl font-bold text-primary">
                        {formatCurrency(result.finalCost)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Subsidy: {formatCurrency(result.subsidy)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
