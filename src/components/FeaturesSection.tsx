import { Card } from "@/components/ui/card";
import { Sparkles, Route, CloudRain, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart Ride Suggestions",
    description: "AI-powered recommendations based on your preferences, traffic patterns, and popular routes in your area.",
  },
  {
    icon: Route,
    title: "Route Planning",
    description: "Discover the safest and most scenic cycling routes. Avoid traffic, find bike lanes, and explore new paths.",
  },
  {
    icon: CloudRain,
    title: "Weather & Safety Alerts",
    description: "Real-time weather updates and safety notifications to keep your ride smooth and secure.",
  },
  {
    icon: BarChart3,
    title: "Ride Stats & History",
    description: "Track your distance, speed, calories burned, and CO₂ saved. Celebrate your eco-friendly journey.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Smart Cycling</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your cycling experience safer, smarter, and more enjoyable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-hero p-3 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
