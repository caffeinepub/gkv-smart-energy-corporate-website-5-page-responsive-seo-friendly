import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Battery, Zap, Wind, Building2, Store, ArrowRight } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import BookFreeConsultationCTA from '@/components/BookFreeConsultationCTA';
import { serviceDetails } from '@/data/serviceDetails';

const serviceIcons: Record<string, any> = {
  'rooftop-residential': Home,
  'off-grid': Battery,
  'hybrid': Zap,
  'aata-chakki': Wind,
  'hospital': Building2,
  'college-hotel-petrol-pump': Store,
};

export default function ServicesPage() {
  useEffect(() => {
    setSEO(
      'Solar Energy Services - Residential, Commercial & Industrial Solutions',
      'GKV Smart Energy offers comprehensive solar services including residential rooftop solar, off-grid, hybrid, Aata Chakki, hospital, and commercial solar solutions across India.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              Solar Services by GKV Smart Energy
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solar solutions for every need - from homes to industries
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service) => {
              const IconComponent = serviceIcons[service.slug] || Home;
              return (
                <Card key={service.slug} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full gap-2">
                      <Link to="/services/$serviceSlug" params={{ serviceSlug: service.slug }}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <BookFreeConsultationCTA
              title="Ready to Start Your Solar Journey?"
              description="Contact us today for a free consultation and discover the perfect solar solution for your needs"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
