import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "This template helped us launch our landing page in record time. The design is modern and professional.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Chen",
    role: "Founder at DesignCo",
    content: "The attention to detail and customization options are incredible. Highly recommend for any SaaS company.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    content: "Our conversion rates improved significantly after switching to this template. The design just works.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    content: "Clean code, great documentation, and excellent support. Everything you need in a landing page template.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with our template.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full gap-4">
                      <p className="text-muted-foreground flex-grow">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}