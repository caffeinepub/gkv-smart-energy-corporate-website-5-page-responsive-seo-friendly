import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Battery, Zap, Wind, Building2, Factory } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Rooftop',
    description: 'Complete solar solutions for homes with subsidy benefits and net metering',
  },
  {
    icon: Battery,
    title: 'Off-Grid',
    description: 'Independent solar power systems with battery backup for remote locations',
  },
  {
    icon: Zap,
    title: 'Hybrid',
    description: 'Best of both worlds - grid-connected with battery backup for 24/7 power',
  },
  {
    icon: Wind,
    title: 'Aata Chakki',
    description: 'Specialized solar solutions for flour mills and agricultural processing',
  },
  {
    icon: Building2,
    title: 'Hospital',
    description: 'Reliable solar power for healthcare facilities with uninterrupted supply',
  },
  {
    icon: Factory,
    title: 'College / Hotel / Petrol Pump',
    description: 'Commercial solar installations for educational, hospitality & fuel sectors',
  },
];

export default function OurSolarServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Solar Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solar energy solutions for every need
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
