import { MapPin, Lightbulb, Shield } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "Plan",
    description: "Enter your destination and preferences. Choose between fastest, safest, or most scenic routes.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Get Suggestions",
    description: "Receive smart recommendations based on real-time data, weather conditions, and your riding style.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Ride Safely",
    description: "Follow turn-by-turn navigation with live updates. Track your progress and enjoy your eco-friendly ride.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and transform your cycling experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-hero p-6 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -left-2 bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-strong">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
