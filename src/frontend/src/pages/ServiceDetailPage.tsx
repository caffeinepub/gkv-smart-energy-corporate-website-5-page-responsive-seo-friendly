import { useEffect } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft, Home, Battery, Zap, Wind, Building2, Store } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import BookFreeConsultationCTA from '@/components/BookFreeConsultationCTA';
import { getServiceBySlug } from '@/data/serviceDetails';

const serviceIcons: Record<string, any> = {
  'rooftop-residential': Home,
  'off-grid': Battery,
  'hybrid': Zap,
  'aata-chakki': Wind,
  'hospital': Building2,
  'college-hotel-petrol-pump': Store,
};

export default function ServiceDetailPage() {
  const params = useParams({ strict: false }) as { serviceSlug?: string };
  const service = getServiceBySlug(params.serviceSlug || '');

  useEffect(() => {
    if (service) {
      setSEO(service.seoTitle, service.seoDescription);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = serviceIcons[service.slug] || Home;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 inline-flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10">
                <IconComponent className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ideal For */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Ideal For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
              title={`Get Started with ${service.title}`}
              description="Contact our experts for a free consultation and customized quote"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
