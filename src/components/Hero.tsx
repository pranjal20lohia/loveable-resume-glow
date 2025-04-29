
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  // Parallax effect
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ["AI/ML", "Python", "Web Development", "Java", "C++", "HTML", "CSS", "ReactJs", "MySQL"];
  
  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-grid">
      {/* Background blobs */}
      <div className="blob top-0 left-0 opacity-30"></div>
      <div className="blob bottom-0 right-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-5">
            <div
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-theme-500/10 text-theme-500 border border-theme-500/20 transition-all",
                mounted ? "animate-fade-in" : "opacity-0"
              )}
            >
              <span className="flex h-2 w-2 rounded-full bg-theme-500 mr-2"></span>
              B.Tech in Electronics & Telecommunication
            </div>
            
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight text-balance",
                mounted ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '100ms' }}
            >
              Hi, I'm <span className="purple-gradient">Pranjal Lohia</span>
              <br />
              <span className="relative">
                Passionate about 
                <span className="sm:block"> AI & Web Development</span>
              </span>
            </h1>
            
            <p
              className={cn(
                "text-lg text-muted-foreground max-w-2xl mx-auto",
                mounted ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '200ms' }}
            >
              I'm a third-year B.Tech student with a creative mindset for innovation and problem-solving. 
              Passionate about Artificial Intelligence, Machine Learning, and crafting seamless user experiences on the web.
            </p>
          </div>
          
          <div
            className={cn(
              "flex flex-wrap justify-center gap-2 md:gap-4",
              mounted ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '300ms' }}
          >
            <Button 
              className="bg-theme-500 hover:bg-theme-600 text-white"
              size="lg"
              asChild
            >
              <Link to="/#projects">View My Projects</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-theme-500/30 hover:bg-theme-500/10"
              asChild
            >
              <Link to="/resume">My Resume</Link>
            </Button>
          </div>
          
          <div
            className={cn(
              "mt-10",
              mounted ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '400ms' }}
          >
            <p className="text-sm text-muted-foreground mb-3">My Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="px-3 py-1 glass-card text-theme-50 rounded-full text-sm animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
