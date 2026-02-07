import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    setSEO(
      'Contact GKV Smart Energy - Get Free Solar Consultation',
      'Contact GKV Smart Energy for free solar consultation. Call us, email us, or visit our office. Expert solar energy solutions for residential, commercial and industrial customers.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our solar energy experts for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about solar energy? Our team is here to help you make the switch to clean, renewable power. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Office Address</CardTitle>
                        <CardDescription className="text-base">
                          123 Solar Street, Green City,<br />
                          Maharashtra, India - 400001
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Phone Number</CardTitle>
                        <CardDescription className="text-base">
                          <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                            +91 98765 43210
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Email Address</CardTitle>
                        <CardDescription className="text-base">
                          <a href="mailto:info@gkvsmartenergy.com" className="hover:text-primary transition-colors">
                            info@gkvsmartenergy.com
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Business Hours</CardTitle>
                        <CardDescription className="text-base">
                          Monday - Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              Find us on the map and plan your visit
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video rounded-lg overflow-hidden border-2 bg-muted flex items-center justify-center">
              <div className="text-center space-y-2 p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">Google Map Location</p>
                <p className="text-muted-foreground">
                  123 Solar Street, Green City, Maharashtra, India - 400001
                </p>
                <p className="text-sm text-muted-foreground">
                  (Map embed placeholder - integrate with Google Maps API)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
