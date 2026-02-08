import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Zap, Activity, Home, IndianRupee, Calendar, Coins } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import BookFreeConsultationCTA from '@/components/BookFreeConsultationCTA';
import { getGeneratedAssetUrl } from '@/lib/assets';

const processSteps = [
  {
    icon: Sun,
    title: 'Solar Panels Capture Sunlight',
    description: 'High-efficiency solar panels installed on your rooftop convert sunlight into DC (Direct Current) electricity throughout the day.',
  },
  {
    icon: Zap,
    title: 'Inverter Converts Power',
    description: 'The solar inverter converts DC electricity from panels into AC (Alternating Current) electricity that can be used by your home appliances.',
  },
  {
    icon: Activity,
    title: 'Net Meter Tracks Usage',
    description: 'A bi-directional net meter tracks both the electricity you consume from the grid and the excess power you send back to the grid.',
  },
  {
    icon: Home,
    title: 'Power Your Home & Grid',
    description: 'Use solar power for your home during the day. Excess power is automatically sent to the grid, earning you credits on your electricity bill.',
  },
];

export default function HowItWorksPage() {
  useEffect(() => {
    setSEO(
      'How Solar Energy Works - Grid Connected Solar System | GKV Smart Energy',
      'Learn how grid-connected rooftop solar systems work. Understand the process from solar panels to net metering and how you can save on electricity bills.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              How Solar Energy Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding grid-connected rooftop solar systems
            </p>
          </div>
        </div>
      </section>

      {/* Working Diagram Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Grid Connected Solar System
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how solar panels, inverter, meter, and grid work together to power your home
              </p>
            </div>

            {/* Infographic */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <img
                  src={getGeneratedAssetUrl('grid-connected-working-diagram-hindi.dim_1400x900.png')}
                  alt="Grid connected solar system working diagram showing the flow from solar panels to inverter to meter to grid with Hindi labels"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Benefits Callouts */}
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <IndianRupee className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">60% Subsidy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get up to 60% government subsidy on installation cost under PM Surya Ghar Yojana
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">25 Years Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Solar panels come with 25+ year warranty and generate clean electricity for decades
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Big Savings on Bills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Reduce your electricity bills by 80-90% and protect against rising tariffs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                The Solar Energy Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Four simple steps to understand how your solar system generates power
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                          <step.icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-1">Step {index + 1}</div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Card className="border-2 bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Why Choose Grid-Connected Solar?</CardTitle>
                <CardDescription className="text-base text-center">
                  The most popular and cost-effective solar solution for homes and businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">No Battery Required</div>
                      <p className="text-sm text-muted-foreground">
                        Lower installation cost as batteries are not needed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Net Metering Benefits</div>
                      <p className="text-sm text-muted-foreground">
                        Earn credits by selling excess power to the grid
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">24/7 Power Availability</div>
                      <p className="text-sm text-muted-foreground">
                        Use grid power at night, solar during the day
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Government Subsidy Eligible</div>
                      <p className="text-sm text-muted-foreground">
                        Get up to 60% subsidy on installation cost
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Low Maintenance</div>
                      <p className="text-sm text-muted-foreground">
                        Minimal maintenance required, just periodic cleaning
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Increase Property Value</div>
                      <p className="text-sm text-muted-foreground">
                        Solar installations increase your property's market value
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <BookFreeConsultationCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
