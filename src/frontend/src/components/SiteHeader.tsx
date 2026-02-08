import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BRAND } from '@/lib/brand';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About GKV Smart Energy' },
  { path: '/subsidies', label: 'Government Subsidy' },
  { path: '/services', label: 'Solar Services' },
  { path: '/calculator', label: 'Solar Calculator' },
  { path: '/projects', label: 'Projects / Gallery' },
  { path: '/contact', label: 'Contact Us' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const phoneNumber = '+917718053222';
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in solar energy solutions from GKV Smart Energy. Please provide more information.'
  );

  // Reset logo error when logo path changes
  useEffect(() => {
    setLogoError(false);
  }, [BRAND.logoPath]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {!logoError ? (
            <img
              src={BRAND.logoPath}
              alt={BRAND.name}
              className="h-10 w-10 object-contain"
              onError={() => setLogoError(true)}
              onLoad={() => setLogoError(false)}
            />
          ) : (
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">GKV</span>
            </div>
          )}
          <span className="text-xl font-bold text-primary hidden sm:inline">{BRAND.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                currentPath === link.path ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Book Consultation
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 cursor-pointer">
                  <Phone className="h-4 w-4" />
                  Call: +91 77180 53222
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="flex items-center gap-2 cursor-pointer">
                  Contact Form
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold text-primary">Menu</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md ${
                      currentPath === link.path
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-4 pt-4 border-t space-y-2">
                <SheetClose asChild>
                  <Button asChild className="w-full gap-2" size="lg">
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="outline" className="w-full gap-2" size="lg">
                    <a href={`tel:${phoneNumber}`}>
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
