import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { getGeneratedAssetUrl } from '@/lib/assets';

const slides = [
  {
    image: getGeneratedAssetUrl('gkv-hero-banner-1.dim_1600x900.png'),
    title: 'PM Surya Ghar Subsidy',
    subtitle: 'Get up to ₹1,08,000 Government Subsidy on Solar Rooftop',
    highlight: 'Solar Rooftop Installation',
  },
  {
    image: getGeneratedAssetUrl('gkv-hero-banner-2.dim_1600x900.png'),
    title: '25 Saal Free Bijli',
    subtitle: 'Save Lakhs on Electricity Bills with Solar Power',
    highlight: 'Bill Bachat Guarantee',
  },
  {
    image: getGeneratedAssetUrl('gkv-hero-banner-3.dim_1600x900.png'),
    title: 'Complete Solar Solutions',
    subtitle: 'Residential & Commercial Solar Installations',
    highlight: 'Trusted by 1000+ Customers',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const phoneNumber = '+917718053222';
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in solar energy solutions from GKV Smart Energy. Please provide more information.'
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-green-900 to-blue-900">
      {/* Slides */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative h-full flex items-center">
              <div className="max-w-2xl space-y-6 text-white">
                <div className="inline-block px-4 py-2 bg-primary/90 rounded-full text-sm font-semibold">
                  {slide.highlight}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="text-base gap-2">
                    <Link to="/contact">
                      Book Free Consultation
                    </Link>
                  </Button>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="lg" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <a href={`tel:${phoneNumber}`}>
                        <Phone className="h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <a
                        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
