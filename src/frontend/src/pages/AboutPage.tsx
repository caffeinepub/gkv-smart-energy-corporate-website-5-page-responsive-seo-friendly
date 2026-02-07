import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award, Users, Zap, Shield } from 'lucide-react';
import { setSEO } from '@/lib/seo';

export default function AboutPage() {
  useEffect(() => {
    setSEO(
      'About GKV Smart Energy - Leading Solar Company in India',
      'Learn about GKV Smart Energy, a trusted solar energy company in India. Our vision is to promote clean, renewable, and cost-effective energy solutions with exceptional customer service.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              About GKV Smart Energy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in solar energy solutions across India
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Company Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                GKV Smart Energy is a leading solar energy company in India, dedicated to transforming the way homes, businesses, and industries consume power. With years of experience in the renewable energy sector, we specialize in designing, installing, and maintaining high-quality solar power systems that deliver exceptional performance and long-term value.
              </p>
              <p>
                Our team of certified professionals brings deep expertise in rooftop solar installations, commercial solar plants, and industrial solar solutions. We understand the unique energy needs of Indian customers and provide customized solar systems that maximize efficiency, reduce costs, and contribute to a sustainable future.
              </p>
              <p>
                From initial consultation to post-installation support, we are committed to delivering excellence at every step. Our comprehensive services include site assessment, system design, government subsidy assistance, professional installation, and ongoing maintenance to ensure your solar investment continues to perform optimally for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be India's most trusted solar energy company, promoting clean, renewable, and cost-effective energy solutions that empower every home and business to achieve energy independence while protecting our environment for future generations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a future where solar power is accessible to all, reducing dependence on conventional energy sources and creating a sustainable, green India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver high-quality solar energy solutions with unwavering commitment to customer satisfaction. We strive to make solar power affordable, accessible, and hassle-free for residential, commercial, and industrial customers across India.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to provide end-to-end solar services—from consultation and design to installation and maintenance—ensuring every customer experiences the benefits of clean energy with maximum savings and minimal effort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience, Expertise & Reliability */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Why Trust GKV Smart Energy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on a foundation of experience, expertise, and reliability
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Years of proven track record in the solar energy industry with hundreds of successful installations across residential, commercial, and industrial sectors throughout India.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of certified solar engineers and technicians brings deep technical knowledge, ensuring optimal system design, efficient installation, and maximum energy generation for every project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We use only premium-quality solar panels and components from trusted manufacturers, backed by comprehensive warranties and dedicated after-sales support to ensure long-term performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Our Core Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                  <p className="text-muted-foreground">
                    Every decision we make prioritizes customer satisfaction, transparency, and long-term relationships built on trust.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality, using only certified components and following industry best practices in every installation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We are committed to environmental responsibility, helping reduce carbon emissions and promoting renewable energy adoption.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously adopt the latest solar technologies and techniques to deliver cutting-edge solutions to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
