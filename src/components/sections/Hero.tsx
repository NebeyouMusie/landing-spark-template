import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 animate-gradient bg-300%" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 -z-10 animate-pulse" />
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight md:leading-tight lg:leading-tight">
              Build Your Next
              <span className="block mt-2 gradient-text whitespace-pre-line animate-gradient-text">Landing Page</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-poppins font-light animate-fade-in-up animation-delay-200">
            Create stunning, high-converting landing pages in minutes with our modern template. Perfect for SaaS, startups, and digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-poppins font-medium hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl hover:shadow-purple-500/20 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 font-poppins font-medium hover:scale-105 transition-all duration-300 border-2 hover:bg-background/50 hover:shadow-lg backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}