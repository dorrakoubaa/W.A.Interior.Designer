import { Home, Building2, Palette, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Complete home makeovers, from concept to completion, creating spaces that reflect your personality.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Designing functional and inspiring environments for offices, restaurants, and retail locations.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert guidance on color palettes to create the perfect mood and atmosphere for any space.",
  },
  {
    icon: Lightbulb,
    title: "Space Planning",
    description: "Optimizing layouts for maximum functionality while maintaining aesthetic appeal.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Services
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
