import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Home, Building2, Wrench, HeadphonesIcon, Zap, Shield, Users, Award } from 'lucide-react';
import { setSEO } from '@/lib/seo';

const services = [
  {
    icon: Home,
    title: 'Residential Solar Solutions',
    description: 'Customized solar power systems for homes, reducing electricity bills and carbon footprint.',
  },
  {
    icon: Building2,
    title: 'Commercial & Industrial Solar',
    description: 'Large-scale solar installations for businesses and industries with maximum ROI.',
  },
  {
    icon: Wrench,
    title: 'Rooftop Solar Installation',
    description: 'Professional installation services ensuring optimal performance and safety.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Maintenance & Support',
    description: 'Comprehensive AMC services to keep your solar systems running efficiently.',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified professionals with years of experience in solar energy solutions.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Premium components and rigorous quality checks for long-lasting performance.',
  },
  {
    icon: Zap,
    title: 'Maximum Efficiency',
    description: 'Advanced technology ensuring optimal energy generation and savings.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated support and personalized solutions for every client.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    text: 'GKV Smart Energy installed a 5kW system at my home. My electricity bills have reduced by 80%. Excellent service and professional team!',
  },
  {
    name: 'Priya Sharma',
    location: 'Pune',
    text: 'We installed a 50kW commercial solar plant for our factory. The ROI has been fantastic, and the maintenance support is outstanding.',
  },
  {
    name: 'Amit Patel',
    location: 'Ahmedabad',
    text: 'From consultation to installation, everything was smooth. The team helped us get government subsidies too. Highly recommended!',
  },
];

export default function HomePage() {
  useEffect(() => {
    setSEO(
      'GKV Smart Energy - Leading Solar Energy Company in India',
      'GKV Smart Energy provides smart, reliable and affordable solar energy solutions. Expert rooftop solar installation for residential, commercial and industrial customers across India.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                GKV Smart Energy – Powering a Sustainable Future
              </h1>
              <p className="text-xl text-muted-foreground">
                Smart, reliable and affordable solar energy solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/gkv-hero-solar.dim_1600x900.png"
                alt="Solar panels on rooftop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Transform Your Energy Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rooftop solar energy is the future of sustainable power generation. At GKV Smart Energy, we help homes, businesses, and industries harness clean, renewable energy from the sun. Reduce your electricity bills, increase energy independence, and contribute to a greener planet with our cutting-edge solar solutions designed specifically for Indian conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Our Solar Energy Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solar power services tailored to your needs
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Why Choose GKV Smart Energy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for solar energy solutions in India
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied solar energy customers
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Verified Customer</span>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Go Solar?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get a free consultation and discover how much you can save with solar energy
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
