import { Card, CardContent } from '@/components/ui/card';
import { Sun, Zap, Gauge, Grid3x3 } from 'lucide-react';

const steps = [
  {
    icon: Sun,
    title: 'Solar Panel',
    description: 'सोलर पैनल',
  },
  {
    icon: Zap,
    title: 'Inverter',
    description: 'इन्वर्टर',
  },
  {
    icon: Gauge,
    title: 'Meter',
    description: 'मीटर',
  },
  {
    icon: Grid3x3,
    title: 'Grid',
    description: 'ग्रिड',
  },
];

export default function HowSolarWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How Solar Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            सोलर सिस्टम कैसे काम करता है - Simple explanation
          </p>
        </div>

        {/* Infographic Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/assets/generated/home-how-solar-works-infographic-hindi.dim_1400x500.png"
                alt="Solar System Working Diagram - सोलर सिस्टम कार्य प्रणाली"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Flow Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 text-center">
                  <CardContent className="pt-6 pb-6">
                    <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-semibold text-primary">{step.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{step.description}</div>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 text-primary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hindi Explanation */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 bg-white">
            <CardContent className="pt-6">
              <p className="text-center text-lg leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary">सोलर पैनल</span> सूरज की रोशनी से बिजली बनाते हैं। 
                यह बिजली <span className="font-semibold text-primary">इन्वर्टर</span> में जाती है जो इसे घर में इस्तेमाल लायक बनाता है। 
                <span className="font-semibold text-primary"> नेट मीटर</span> आपकी बिजली को मापता है। 
                अतिरिक्त बिजली <span className="font-semibold text-primary">ग्रिड</span> में चली जाती है और आपको इसका पैसा मिलता है। 
                यह पूरी तरह से सुरक्षित और स्वचालित प्रक्रिया है।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
