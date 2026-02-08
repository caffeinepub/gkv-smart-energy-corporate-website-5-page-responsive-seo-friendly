import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Shield, Wrench, Zap, HeadphonesIcon } from 'lucide-react';

const trustPoints = [
  {
    icon: Award,
    title: 'Govt Approved Vendor',
    description: 'Authorized vendor under PM Surya Ghar Yojana with all necessary certifications',
  },
  {
    icon: Shield,
    title: 'High Quality Panels',
    description: 'Premium Tier-1 solar panels with 25+ years performance warranty',
  },
  {
    icon: Wrench,
    title: 'Complete EPC Solution',
    description: 'End-to-end Engineering, Procurement, and Construction services',
  },
  {
    icon: Zap,
    title: 'Net Metering Support',
    description: 'Complete assistance with net metering application and grid connection',
  },
  {
    icon: HeadphonesIcon,
    title: 'Maintenance Support',
    description: 'Comprehensive AMC and 24/7 technical support for your solar system',
  },
];

export default function WhyChooseTrustSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-green-50 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why Choose GKV Smart Energy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for reliable solar energy solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {trustPoints.map((point, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <point.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
