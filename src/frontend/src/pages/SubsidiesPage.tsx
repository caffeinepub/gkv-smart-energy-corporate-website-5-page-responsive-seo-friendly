import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BadgeIndianRupee, CheckCircle, Info } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import BookFreeConsultationCTA from '@/components/BookFreeConsultationCTA';

export default function SubsidiesPage() {
  useEffect(() => {
    setSEO(
      'Government Solar Subsidies - Financial Support for Solar Energy | GKV Smart Energy',
      'Learn about government solar subsidies and financial incentives available for residential and commercial solar installations. Get expert assistance with subsidy applications.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <BadgeIndianRupee className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              Government Solar Subsidies
            </h1>
            <p className="text-xl text-muted-foreground">
              Get up to 60% subsidy on rooftop solar installations under PM Surya Ghar Yojana
            </p>
          </div>
        </div>
      </section>

      {/* Total Subsidy Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Total Subsidy Available
              </h2>
              <p className="text-lg text-muted-foreground">
                Combined Central and State Government subsidies for residential rooftop solar
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold text-primary">₹45,000</CardTitle>
                  <CardDescription className="text-base font-semibold">For 1 kW System</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">Up to 60% subsidy</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold text-primary">₹90,000</CardTitle>
                  <CardDescription className="text-base font-semibold">For 2 kW System</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">Up to 60% subsidy</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold text-primary">₹1,08,000</CardTitle>
                  <CardDescription className="text-base font-semibold">For 3 kW+ System</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">Maximum subsidy cap</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy Table */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Central vs State Subsidy Breakdown
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed subsidy structure for rooftop solar installations
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">System Size</TableHead>
                        <TableHead className="font-bold">Central Subsidy</TableHead>
                        <TableHead className="font-bold">State Subsidy</TableHead>
                        <TableHead className="font-bold">Total Subsidy</TableHead>
                        <TableHead className="font-bold">% of Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">1 kW</TableCell>
                        <TableCell>₹30,000</TableCell>
                        <TableCell>₹15,000</TableCell>
                        <TableCell className="font-bold text-primary">₹45,000</TableCell>
                        <TableCell>~60%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2 kW</TableCell>
                        <TableCell>₹60,000</TableCell>
                        <TableCell>₹30,000</TableCell>
                        <TableCell className="font-bold text-primary">₹90,000</TableCell>
                        <TableCell>~60%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">3 kW</TableCell>
                        <TableCell>₹78,000</TableCell>
                        <TableCell>₹30,000</TableCell>
                        <TableCell className="font-bold text-primary">₹1,08,000</TableCell>
                        <TableCell>~50%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Above 3 kW</TableCell>
                        <TableCell>₹78,000</TableCell>
                        <TableCell>₹30,000</TableCell>
                        <TableCell className="font-bold text-primary">₹1,08,000 (Max)</TableCell>
                        <TableCell>Varies</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <CardTitle className="text-lg">Important Note</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Subsidy amounts may vary by state. The above figures are indicative and based on current PM Surya Ghar Yojana guidelines. Contact us for exact subsidy applicable in your area.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Explanation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">PM Surya Ghar: Muft Bijli Yojana</CardTitle>
                <CardDescription className="text-base">
                  Government of India's flagship program to promote rooftop solar adoption
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The PM Surya Ghar: Muft Bijli Yojana is a central government initiative aimed at making solar energy accessible and affordable for every household in India. Under this scheme, the government provides substantial financial support to install rooftop solar systems, helping families generate their own clean electricity and significantly reduce their monthly electricity bills.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Up to 60% subsidy on installation cost</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Direct benefit transfer to beneficiaries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Simplified application process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Net metering facility included</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">State Policy Benefits</CardTitle>
                <CardDescription className="text-base">
                  Additional incentives from state governments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In addition to central government subsidies, many state governments offer additional benefits and incentives to promote solar energy adoption. These include capital subsidies, generation-based incentives, accelerated depreciation benefits, and priority grid connectivity. State policies also facilitate net metering, allowing you to sell excess power back to the grid and further reduce your electricity costs.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Additional state-level capital subsidy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Net metering and grid connectivity support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Expedited approval process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Tax benefits and exemptions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                How We Help You Get Maximum Subsidy
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete end-to-end assistance with subsidy applications and documentation
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Eligibility assessment and guidance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Complete documentation support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Application submission and tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Liaison with government departments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Timely follow-up for approvals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Maximum subsidy benefit realization</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <BookFreeConsultationCTA
              title="Need Help with Subsidy Applications?"
              description="Our experts will guide you through the entire subsidy application process and help you get maximum benefits"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
