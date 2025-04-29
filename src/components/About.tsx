
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { School, Briefcase, Code } from "lucide-react";

export default function About() {
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
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold font-display",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            About <span className="text-theme-500">Me</span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-theme-500 mx-auto mt-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '100ms' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className={cn(
            "space-y-6",
            isVisible ? "animate-fade-in-right" : "opacity-0"
          )}>
            <h3 className="text-2xl font-bold font-display">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a third-year B.Tech student in Electronics and Telecommunication Engineering at MIT Academy of Engineering, Pune, with a passion for Artificial Intelligence, Machine Learning, and Data Analytics.
            </p>
            <p className="text-muted-foreground">
              My technical journey has equipped me with strong skills in Python, AI/ML, Java, and Web Development. I'm driven by innovation and problem-solving, always eager to apply my knowledge to create practical solutions.
            </p>
            <p className="text-muted-foreground">
              Beyond academics, I engage in hackathons and competitions, demonstrating my leadership and teamwork qualities. My interests in dancing and anchoring showcase my creative side.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">Pranjal Lohia</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">pranjal.lohia@mitaoe.ac.in</p>
              </div>
              <div>
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">Pune, Maharashtra, India</p>
              </div>
              <div>
                <h4 className="font-bold">Study:</h4>
                <p className="text-muted-foreground">MIT Academy of Engineering</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "grid grid-cols-1 gap-6",
            isVisible ? "animate-fade-in-left" : "opacity-0"
          )} style={{ animationDelay: '200ms' }}>
            <Card className="card-hover gradient-border">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-theme-500/10 p-3 rounded-lg">
                    <School className="h-6 w-6 text-theme-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground mb-4">
                      Currently pursuing B.Tech in Electronics and Telecommunication Engineering at MIT Academy with CGPA of 8.83/10
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex justify-between mb-1">
                        <span>MIT Academy of Engineering</span>
                        <span>2022 - 2026</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>St. Francis Senior Secondary School</span>
                        <span>2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover gradient-border">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-theme-500/10 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-theme-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Internships</h3>
                    <p className="text-muted-foreground mb-4">
                      Gained practical experience in AI/ML and Cybersecurity through focused internships
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex justify-between mb-1">
                        <span>AICTE Eduskills (AI/ML)</span>
                        <span>Jul - Sep, 2024</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Cisco (Cybersecurity)</span>
                        <span>May - Jul, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover gradient-border">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-theme-500/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-theme-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-secondary px-3 py-1 rounded-full text-sm text-center">Python</div>
                      <div className="bg-secondary px-3 py-1 rounded-full text-sm text-center">AI/ML</div>
                      <div className="bg-secondary px-3 py-1 rounded-full text-sm text-center">Java</div>
                      <div className="bg-secondary px-3 py-1 rounded-full text-sm text-center">C++</div>
                      <div className="bg-secondary px-3 py-1 rounded-full text-sm text-center">HTML</div>
                      <div className="bg-secondary px-3 py-1 rounded-full text-sm text-center">CSS</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
