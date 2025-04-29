
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", level: 90 },
  { name: "AI/ML", level: 85 },
  { name: "Java", level: 80 },
  { name: "Web Development", level: 75 },
  { name: "C++", level: 70 },
  { name: "Networking", level: 65 },
  { name: "Cybersecurity", level: 60 },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const timers = skills.map((skill, index) => {
        return setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = skill.level;
            return newValues;
          });
        }, 400 + index * 100);
      });
      
      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold font-display",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            My <span className="text-theme-500">Skills</span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-theme-500 mx-auto mt-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '100ms' }}></div>
          <p className={cn(
            "mt-4 text-muted-foreground max-w-2xl mx-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '200ms' }}>
            Below are my core technical competencies and expertise levels.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={cn(
                  "space-y-2",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{progressValues[index]}%</span>
                </div>
                <Progress 
                  value={progressValues[index]} 
                  className="h-2 bg-secondary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
