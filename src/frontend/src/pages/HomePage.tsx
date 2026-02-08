import { useEffect } from 'react';
import { setSEO } from '@/lib/seo';
import HeroSlider from '@/components/home/HeroSlider';
import GovernmentSubsidySection from '@/components/home/GovernmentSubsidySection';
import HomeSolarCalculatorSection from '@/components/home/HomeSolarCalculatorSection';
import WhyChooseTrustSection from '@/components/home/WhyChooseTrustSection';
import OurSolarServicesSection from '@/components/home/OurSolarServicesSection';
import HowSolarWorksSection from '@/components/home/HowSolarWorksSection';
import HomeFooterCTASection from '@/components/home/HomeFooterCTASection';

export default function HomePage() {
  useEffect(() => {
    setSEO(
      'GKV Smart Energy - PM Surya Ghar Subsidy | Solar Rooftop Solutions',
      'Get up to ₹1,08,000 subsidy under PM Surya Ghar Muft Bijli Yojana. 25 years free electricity with GKV Smart Energy solar solutions for residential and commercial needs.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section - Scrolling Slider */}
      <HeroSlider />

      {/* 2. Government Subsidy Section */}
      <GovernmentSubsidySection />

      {/* 3. Solar Calculator Section */}
      <HomeSolarCalculatorSection />

      {/* 4. Why Choose GKV Smart Energy */}
      <WhyChooseTrustSection />

      {/* 5. Our Solar Services */}
      <OurSolarServicesSection />

      {/* 6. How Solar Works */}
      <HowSolarWorksSection />

      {/* 7. Footer CTA */}
      <HomeFooterCTASection />
    </div>
  );
}
