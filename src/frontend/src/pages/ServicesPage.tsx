import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Building2, Wrench, Settings, FileText, CheckCircle } from 'lucide-react';
import { setSEO } from '@/lib/seo';

const services = [
  {
    icon: Home,
    title: 'Residential Rooftop Solar Systems',
    description: 'Transform your home into a clean energy powerhouse with our customized residential solar solutions.',
    features: [
      'Complete site assessment and energy audit',
      'Customized system design based on your consumption',
      'High-efficiency solar panels with 25+ year warranty',
      'Net metering setup for maximum savings',
      'Government subsidy assistance and documentation',
      'Professional installation by certified technicians',
      'Monitoring system for real-time performance tracking',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial & Industrial Solar Power Plants',
    description: 'Reduce operational costs and achieve energy independence with large-scale solar installations for businesses and industries.',
    features: [
      'Detailed feasibility study and ROI analysis',
      'Scalable solutions from 10kW to multi-MW capacity',
      'Premium industrial-grade components',
      'Minimal downtime during installation',
      'Power purchase agreements (PPA) available',
      'Comprehensive performance guarantees',
      'Dedicated project management and support',
    ],
  },
  {
    icon: Wrench,
    title: 'Solar Panel Installation & Commissioning',
    description: 'Expert installation services ensuring optimal performance, safety, and compliance with all regulations.',
    features: [
      'Structural assessment and roof analysis',
      'Professional mounting and panel installation',
      'Electrical wiring and inverter setup',
      'Grid connection and net metering installation',
      'Safety testing and quality checks',
      'Government approvals and permissions',
      'Complete documentation and handover',
    ],
  },
  {
    icon: Settings,
    title: 'Solar System Maintenance & AMC',
    description: 'Keep your solar investment performing at peak efficiency with our comprehensive maintenance services.',
    features: [
      'Regular cleaning and inspection',
      'Performance monitoring and optimization',
      'Inverter servicing and repairs',
      'Panel health checks and diagnostics',
      'Electrical connection maintenance',
      'Annual maintenance contracts (AMC)',
      '24/7 customer support and emergency service',
    ],
  },
  {
    icon: FileText,
    title: 'Government Solar Scheme Assistance (Subsidy Support)',
    description: 'Navigate government solar schemes effortlessly with our expert guidance and complete documentation support.',
    features: [
      'Eligibility assessment for subsidies',
      'Complete application documentation',
      'Liaison with government departments',
      'MNRE subsidy claim processing',
      'State-specific scheme guidance',
      'Timely follow-up and approvals',
      'Maximum subsidy benefit realization',
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    setSEO(
      'Solar Energy Services - Residential, Commercial & Industrial Solutions',
      'GKV Smart Energy offers comprehensive solar services including residential rooftop solar, commercial solar plants, installation, maintenance, and government subsidy assistance across India.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              Our Solar Energy Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solar solutions for homes, businesses, and industries across India
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today for a free consultation and discover the perfect solar solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 text-base font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
