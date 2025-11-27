import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-cycling-new.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="City cycling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smart Rides,{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Made for Your Day
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Navigate your city with intelligent route planning, real-time weather alerts, 
              and eco-friendly ride tracking. Your perfect cycling companion.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button variant="hero" size="lg" className="text-lg h-14 px-8">
              <Download className="w-5 h-5" />
              Download App
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="bg-card p-6 rounded-2xl shadow-strong border border-border">
          <div className="text-3xl font-bold text-primary">2.5M+</div>
          <div className="text-muted-foreground">Eco-Friendly Rides</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
