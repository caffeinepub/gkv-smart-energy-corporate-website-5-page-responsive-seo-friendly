import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BookFreeConsultationCTAProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'compact';
}

export default function BookFreeConsultationCTA({
  title = 'Book Free Consultation',
  description = 'Get expert advice and customized solar solutions for your needs',
  variant = 'default',
}: BookFreeConsultationCTAProps) {
  const phoneNumber = '+917718053222';
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in solar energy solutions from GKV Smart Energy. Please provide more information.'
  );

  if (variant === 'compact') {
    return (
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="gap-2">
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <a href={`tel:${phoneNumber}`}>
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link to="/contact">
            <FileText className="h-5 w-5" />
            Contact Form
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-green-50 to-blue-50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          <Button asChild size="lg" className="h-auto flex-col gap-2 py-4">
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-base font-semibold">WhatsApp</span>
              <span className="text-xs opacity-90">Instant Response</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto flex-col gap-2 py-4">
            <a href={`tel:${phoneNumber}`}>
              <Phone className="h-6 w-6" />
              <span className="text-base font-semibold">Call Now</span>
              <span className="text-xs">+91 77180 53222</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-auto flex-col gap-2 py-4">
            <Link to="/contact">
              <FileText className="h-6 w-6" />
              <span className="text-base font-semibold">Contact Form</span>
              <span className="text-xs">Detailed Inquiry</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
