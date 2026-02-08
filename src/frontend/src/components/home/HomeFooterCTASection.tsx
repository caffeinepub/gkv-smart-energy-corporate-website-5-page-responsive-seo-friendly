import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import ContactForm from '@/components/ContactForm';

export default function HomeFooterCTASection() {
  const phoneNumber = '+917718053222';
  const email = 'gkvsmartenergy@gmail.com';
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in solar energy solutions from GKV Smart Energy. Please provide more information.'
  );

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-green-50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for a free consultation and site survey
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Our Office</div>
                    <p className="text-sm text-muted-foreground">
                      Village + Post – Saurath, Rahika<br />
                      Madhubani – 847213<br />
                      Bihar, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-sm text-primary hover:underline"
                    >
                      +91 77180 53222
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild size="lg" className="w-full gap-2">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full gap-2">
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <SiX className="h-5 w-5 text-primary" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Note: Social media links are placeholders
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Send Us an Enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
