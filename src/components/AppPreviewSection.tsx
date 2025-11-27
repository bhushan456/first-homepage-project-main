import { Card } from "@/components/ui/card";
import appHome from "@/assets/app-home.jpg";
import appRoute from "@/assets/app-route.jpg";
import appNavigation from "@/assets/app-navigation.jpg";
import appStats from "@/assets/app-stats.jpg";

const screens = [
  { 
    title: "Home", 
    image: appHome,
    description: "View your cycling dashboard with recent rides, quick stats, and easy access to all features"
  },
  { 
    title: "Route Planning", 
    image: appRoute,
    description: "Plan your perfect cycling route with distance, elevation, and bike-friendly path options"
  },
  { 
    title: "Live Navigation", 
    image: appNavigation,
    description: "Get turn-by-turn directions with real-time updates optimized for cyclists"
  },
  { 
    title: "Statistics", 
    image: appStats,
    description: "Track your progress with detailed analytics on distance, calories, and ride history"
  },
];

const AppPreviewSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beautiful & Intuitive Design</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience a seamless interface designed for cyclists, by cyclists.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {screens.map((screen, index) => (
            <Card 
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-strong transition-all duration-300"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img 
                  src={screen.image} 
                  alt={screen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-sm font-semibold mb-2">{screen.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{screen.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
