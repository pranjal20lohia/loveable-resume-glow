
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "AICTE Eduskills",
    role: "AI/ML Internship",
    period: "01 Jul, 2024 - 11 Sep, 2024",
    description: "Completed AICTE's Cohort 9 AI/ML internship, gaining hands-on experience in artificial intelligence and machine learning techniques. Worked on various projects including data analysis, model training, and implementation of machine learning algorithms.",
    skills: ["AI/ML", "Python", "Data Analysis", "Deep Learning"],
    projects: [
      "Implemented a sentiment analysis model for customer reviews",
      "Developed a prediction model for stock price forecasting",
      "Created a recommendation system using collaborative filtering"
    ]
  },
  {
    title: "Cisco",
    role: "Cybersecurity Internship",
    period: "05 May, 2024 - 28 Jul, 2024",
    description: "Completed a 3-month internship in Cybersecurity, where I gained hands-on experience in network security protocols and designed secure network simulations using Cisco Packet Tracer, configuring routers and switches to protect against vulnerabilities.",
    skills: ["Cisco Packet Tracer", "Networking", "Security Protocols", "Vulnerability Assessment"],
    projects: [
      "Designed and implemented secure network architectures",
      "Performed vulnerability assessments on simulated networks",
      "Created documentation on security best practices"
    ]
  }
];

export default function InternshipSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/40" id="internship">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold font-display",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            My <span className="text-theme-500">Internships</span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-theme-500 mx-auto mt-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '100ms' }}></div>
          <p className={cn(
            "mt-4 text-muted-foreground max-w-2xl mx-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '200ms' }}>
            Professional experiences that have shaped my skills and knowledge
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <Card 
              key={internship.title} 
              className={cn(
                "overflow-hidden border-0 shadow-md glassmorphism",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-theme-500/10 p-4 rounded-full">
                      <Briefcase className="h-8 w-8 text-theme-500" />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{internship.title}</h3>
                      <p className="text-theme-500 font-medium">{internship.role}</p>
                      <p className="text-sm text-muted-foreground">{internship.period}</p>
                    </div>
                    
                    <p className="text-muted-foreground">{internship.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Projects:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                        {internship.projects.map((project, idx) => (
                          <li key={idx}>{project}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {internship.skills.map((skill) => (
                        <span key={skill} className="bg-theme-100 text-theme-700 px-2 py-0.5 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
