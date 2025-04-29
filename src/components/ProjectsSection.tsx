
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const projects = [
  {
    title: "Grocery Ordering and Recipe Website",
    description: "Web platform combining grocery shopping with recipe browsing for a seamless user experience. Features intuitive interface, personalized recommendations, and responsive design.",
    skills: ["Web Development", "UI/UX", "JavaScript"],
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
  },
  {
    title: "Crop-Disease Detection System",
    description: "AI/ML model that accurately identifies crop diseases and provides effective treatment recommendations, enhancing agricultural efficiency and sustainability.",
    skills: ["AI/ML", "Deep Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/50" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold font-display",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Featured <span className="text-theme-500">Projects</span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-theme-500 mx-auto mt-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '100ms' }}></div>
          <p className={cn(
            "mt-4 text-muted-foreground max-w-2xl mx-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '200ms' }}>
            Explore some of my recent projects showcasing my technical skills and problem-solving approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={cn(
                "overflow-hidden card-hover border-0 shadow-md",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="bg-theme-100 text-theme-700 px-2 py-0.5 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className={cn(
              "bg-theme-500 hover:bg-theme-600 text-white",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '500ms' }}
            size="lg"
            asChild
          >
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
