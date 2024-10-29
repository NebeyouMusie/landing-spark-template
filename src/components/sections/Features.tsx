import {
  Zap,
  Shield,
  Smartphone,
  Layout,
  RefreshCw,
  Gauge,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized for speed and performance right out of the box.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Built with security best practices and regular updates.",
    icon: Shield,
  },
  {
    title: "Mobile Responsive",
    description: "Looks great on any device, from mobile to desktop.",
    icon: Smartphone,
  },
  {
    title: "Modern Design",
    description: "Clean, professional, and customizable design system.",
    icon: Layout,
  },
  {
    title: "Regular Updates",
    description: "Constant improvements and new features added regularly.",
    icon: RefreshCw,
  },
  {
    title: "High Performance",
    description: "Optimized for the best possible user experience.",
    icon: Gauge,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our template comes packed with all the features you need to launch your landing page quickly and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}