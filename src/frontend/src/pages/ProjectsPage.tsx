import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap } from 'lucide-react';
import { setSEO } from '@/lib/seo';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  useEffect(() => {
    setSEO(
      'Solar Projects Portfolio - Completed Installations Across India',
      'View our portfolio of completed solar rooftop projects across India. GKV Smart Energy has successfully installed residential, commercial and industrial solar power systems.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
              Our Solar Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing successful solar installations across residential, commercial, and industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+ MW</div>
              <div className="text-muted-foreground">Total Capacity Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent solar installations demonstrating quality, efficiency, and customer satisfaction
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {project.capacity}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{project.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Client Benefits:</h4>
                    <ul className="space-y-2">
                      {project.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied customers who have made the switch to clean solar energy
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Start Your Solar Project
          </a>
        </div>
      </section>
    </div>
  );
}
