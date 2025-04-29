
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

  const skills = ["AI/ML", "Python", "Web Development", "Java", "C++", "HTML", "CSS", "MySQL"];
  
  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-grid">
      {/* Background blobs */}
      <div className="blob top-0 left-0 opacity-30"></div>
      <div className="blob bottom-0 right-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-8">
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
                  "text-lg text-muted-foreground max-w-2xl",
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
                "flex flex-wrap gap-2 md:gap-4",
                mounted ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '300ms' }}
            >
              <Button 
                className="bg-theme-500 hover:bg-theme-600 text-white"
                size="lg"
                asChild
              >
                <Link to="/projects">View My Projects</Link>
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
              <div className="flex flex-wrap gap-2">
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
          
          <div className="md:col-span-5 flex justify-center">
            <div
              className={cn(
                "relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]",
                mounted ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '500ms' }}
            >
              {/* Space for profile image */}
              <div 
                className="absolute inset-0 rounded-3xl overflow-hidden border border-theme-500/30 glassmorphism shadow-xl animate-float flex items-center justify-center"
                style={{
                  transform: `translate3d(${position.x * -2}px, ${position.y * -2}px, 0)`,
                }}
              >
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full border-2 border-theme-500/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">📷</span>
                  </div>
                  <p className="text-theme-500">Add your photo here</p>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div 
                className="absolute -bottom-6 -right-6 w-[200px] h-[200px] rounded-full bg-theme-500/20 z-[-1] animate-pulse"
                style={{
                  animationDuration: '6s',
                  transform: `translate3d(${position.x * 1.5}px, ${position.y * 1.5}px, 0)`,
                }}
              ></div>
              <div 
                className="absolute -top-8 -left-8 w-[150px] h-[150px] rounded-full bg-theme-500/10 z-[-1] animate-pulse"
                style={{
                  animationDuration: '8s',
                  transform: `translate3d(${position.x * 1}px, ${position.y * 1}px, 0)`,
                }}
              ></div>
              
              {/* Tech icons floating around */}
              <div 
                className="absolute top-10 -left-10 glassmorphism p-2 rounded-lg shadow-lg animate-bounce-subtle"
                style={{
                  animationDelay: '0.5s',
                  transform: `translate3d(${position.x * 3}px, ${position.y * 3}px, 0)`,
                }}
              >
                <span className="text-xl">🤖</span>
              </div>
              <div 
                className="absolute bottom-10 -right-5 glassmorphism p-2 rounded-lg shadow-lg animate-bounce-subtle"
                style={{
                  animationDelay: '1s',
                  transform: `translate3d(${position.x * 4}px, ${position.y * 4}px, 0)`,
                }}
              >
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
