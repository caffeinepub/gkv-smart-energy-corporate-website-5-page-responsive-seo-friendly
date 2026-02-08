import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

export default function SiteFooter() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {!logoError ? (
                <img
                  src="/assets/generated/gkv-logo.dim_512x512.png"
                  alt="GKV Smart Energy"
                  className="h-8 w-8 object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">GKV</span>
                </div>
              )}
              <span className="text-lg font-bold text-primary">GKV Smart Energy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Powering a sustainable future with smart, reliable, and affordable solar energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About GKV Smart Energy
                </Link>
              </li>
              <li>
                <Link to="/subsidies" className="text-muted-foreground hover:text-primary transition-colors">
                  Government Subsidy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Solar Services
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-muted-foreground hover:text-primary transition-colors">
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects / Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rooftop Residential</li>
              <li>Off-Grid Systems</li>
              <li>Hybrid Solar</li>
              <li>Aata Chakki Solar</li>
              <li>Hospital Solar</li>
              <li>College / Hotel / Petrol Pump</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Village + Post – Saurath, Rahika, Madhubani – 847213, Bihar, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+917718053222" className="hover:text-primary transition-colors">
                  +91 77180 53222
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:gkvsmartenergy@gmail.com" className="hover:text-primary transition-colors">
                  gkvsmartenergy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with ❤️ using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
