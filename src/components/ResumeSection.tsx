
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function ResumeSection() {
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
  
  const handleDownload = () => {
    // Create a link to download the resume file
    const link = document.createElement('a');
    link.href = '/resume-pranjal-lohia.pdf'; // Make sure to add this PDF to your public folder
    link.download = 'Pranjal-Lohia-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-grid" id="resume">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold font-display",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            My <span className="text-theme-500">Resume</span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-theme-500 mx-auto mt-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '100ms' }}></div>
          <p className={cn(
            "mt-6 text-muted-foreground max-w-2xl mx-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '200ms' }}>
            View my complete resume to learn more about my education, experience, skills, and certifications.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row justify-center gap-4 mt-10",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '300ms' }}>
            <Button 
              size="lg" 
              className="bg-theme-500 hover:bg-theme-600"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-theme-500/30 hover:bg-theme-500/10"
              asChild
            >
              <Link to="/resume">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Full Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
