import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <Bike className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            CityCycle
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#features" 
            className={`transition-colors ${
              activeSection === "features" 
                ? "text-primary font-semibold" 
                : "text-foreground hover:text-primary"
            }`}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className={`transition-colors ${
              activeSection === "how-it-works" 
                ? "text-primary font-semibold" 
                : "text-foreground hover:text-primary"
            }`}
          >
            How It Works
          </a>
          <a 
            href="#impact" 
            className={`transition-colors ${
              activeSection === "impact" 
                ? "text-primary font-semibold" 
                : "text-foreground hover:text-primary"
            }`}
          >
            Impact
          </a>
        </nav>
        
        <Button variant="hero" size="lg">
          Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;
