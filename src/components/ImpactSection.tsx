import { Card } from "@/components/ui/card";
import { Leaf, Heart, TreePine } from "lucide-react";

const impacts = [
  {
    icon: Leaf,
    value: "125K",
    unit: "tons",
    label: "CO₂ Saved",
    description: "Equivalent to planting 2M trees",
  },
  {
    icon: Heart,
    value: "500M",
    unit: "calories",
    label: "Health Benefits",
    description: "Burned by our community",
  },
  {
    icon: TreePine,
    value: "2.5M",
    unit: "rides",
    label: "Eco-Friendly Rides",
    description: "And counting every day",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Making a Real Impact</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Together, we're creating a healthier planet and healthier communities, one ride at a time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 text-primary-foreground"
            >
              <div className="bg-primary-foreground/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <impact.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-5xl font-bold mb-2 text-primary-foreground">
                {impact.value}
                <span className="text-2xl ml-1">{impact.unit}</span>
              </div>
              <div className="text-xl font-semibold mb-2 text-primary-foreground">{impact.label}</div>
              <div className="text-primary-foreground/70">{impact.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
