
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { School, Briefcase, Code } from "lucide-react";

const techStack = [
  { name: "AI/ML", icon: "🤖" },
  { name: "Python", icon: "🐍" },
  { name: "Web Development", icon: "🌐" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "⚙️" },
  { name: "HTML", icon: "📄" },
  { name: "CSS", icon: "🎨" },
  { name: "ReactJs", icon: "⚛️" },
  { name: "MySQL", icon: "🗄️" }
];

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
            
            <div className="pt-4">
              <h4 className="font-bold text-lg mb-3">My Tech Stack</h4>
              <div className="grid grid-cols-3 gap-3">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 bg-secondary/60 p-2 rounded-lg">
                    <span className="text-xl" role="img" aria-label={tech.name}>{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
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
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">B.Tech. - Electronics and Telecommunication Engineering</h4>
                        <div className="flex justify-between text-sm">
                          <span className="text-theme-500">MIT Academy of Engineering, Pune</span>
                          <span className="text-muted-foreground">2022 - 2026</span>
                        </div>
                        <p className="text-sm text-muted-foreground">CGPA: 8.83/10</p>
                        <p className="text-sm text-muted-foreground">Relevant coursework: Computer Networks, Data Structures, Digital Signal Processing, Microprocessors & Microcontrollers</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">12th (CBSE)</h4>
                        <div className="flex justify-between text-sm">
                          <span className="text-theme-500">St. Francis Senior Secondary School, Bilaspur</span>
                          <span className="text-muted-foreground">2021</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Percentage: 93.40/100</p>
                        <p className="text-sm text-muted-foreground">Science with Computer Science</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">10th (CBSE)</h4>
                        <div className="flex justify-between text-sm">
                          <span className="text-theme-500">St. Francis School, Bilaspur</span>
                          <span className="text-muted-foreground">2019</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Percentage: 83.45/100</p>
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
                    <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Packet Tracer</li>
                      <li>• Introduction to Cybersecurity</li>
                      <li>• Cybersecurity Essentials</li>
                      <li>• C/C++</li>
                      <li>• PCAP-Programming Essentials in Python</li>
                    </ul>
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
                    <h3 className="text-lg font-semibold mb-2">Activities</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">College Activities</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Participated and selected in Internal College Hackathon (SIH)</li>
                          <li>Participated in CODEQUEST competition organised by MIT AOE College</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Personal Interests</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="px-3 py-1 bg-secondary rounded-lg text-sm">Dancing</span>
                          <span className="px-3 py-1 bg-secondary rounded-lg text-sm">Anchoring</span>
                        </div>
                      </div>
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
