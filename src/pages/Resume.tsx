
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ResumeItem from "@/components/ResumeItem";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { 
  School, 
  Briefcase, 
  Code, 
  Award,
  FileText,
  Download
} from "lucide-react";

const Resume = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className={cn(
                "text-4xl md:text-5xl font-bold font-display mb-4",
                mounted ? "animate-fade-in" : "opacity-0"
              )}>
                My <span className="text-theme-500">Resume</span>
              </h1>
              <p className={cn(
                "text-muted-foreground text-lg max-w-2xl mx-auto",
                mounted ? "animate-fade-in" : "opacity-0"
              )} style={{ animationDelay: '100ms' }}>
                My education, experience, and skills that have shaped my professional journey.
              </p>
              
              <div className={cn(
                "mt-6",
                mounted ? "animate-fade-in" : "opacity-0"
              )} style={{ animationDelay: '200ms' }}>
                <Button 
                  size="lg" 
                  className="bg-theme-500 hover:bg-theme-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
            
            <div className={cn(
              "bg-background border rounded-xl shadow-sm p-6 md:p-8",
              mounted ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '300ms' }}>
              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid grid-cols-4 w-full mb-8">
                  <TabsTrigger value="education" className="flex flex-col items-center gap-1 py-3">
                    <School className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="experience" className="flex flex-col items-center gap-1 py-3">
                    <Briefcase className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Experience</span>
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="flex flex-col items-center gap-1 py-3">
                    <Code className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Skills</span>
                  </TabsTrigger>
                  <TabsTrigger value="certifications" className="flex flex-col items-center gap-1 py-3">
                    <Award className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Certifications</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="education">
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                      <School className="h-6 w-6 text-theme-500" />
                      Education
                    </h2>
                    
                    <ResumeItem
                      title="MIT Academy of Engineering, Pune"
                      subtitle="B.Tech. - Electronics and Telecommunication Engineering"
                      date="2022 - 2026"
                      description="CGPA: 8.83 / 10"
                    />
                    
                    <ResumeItem
                      title="St. Francis Senior Secondary School, Bilaspur"
                      subtitle="12th (CBSC)"
                      date="2021"
                      description="Percentage: 93.40 / 100"
                    />
                    
                    <ResumeItem
                      title="St. Francis School, Bilaspur"
                      subtitle="10th (CBSE)"
                      date="2019"
                      description="Percentage: 83.45 / 100"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="experience">
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-theme-500" />
                      Internship Experience
                    </h2>
                    
                    <ResumeItem
                      title="AICTE Eduskills"
                      subtitle="AI/ML Internship"
                      date="01 Jul, 2024 - 11 Sep, 2024"
                      description="Completed AICTE's Cohort 9 AI/ML internship, gaining hands-on experience in artificial intelligence and machine learning techniques."
                      skills={["AI/ML", "Python", "Data Analysis"]}
                    />
                    
                    <ResumeItem
                      title="Cisco"
                      subtitle="Cybersecurity Internship"
                      date="05 May, 2024 - 28 Jul, 2024"
                      description="Completed a 3-month internship in Cybersecurity, where I gained hands-on experience in network security protocols and designed secure network simulations using Cisco Packet Tracer, configuring routers and switches to protect against vulnerabilities."
                      skills={["Cisco Packet Tracer", "Networking", "Security Protocols"]}
                    />
                    
                    <h2 className="text-2xl font-bold font-display mb-6 mt-10 flex items-center gap-2">
                      <FileText className="h-6 w-6 text-theme-500" />
                      Projects
                    </h2>
                    
                    <ResumeItem
                      title="Grocery Ordering and Recipe Website"
                      subtitle="Mentor: Dr. Kalpana Pawase"
                      description="Developed a web-based platform that combines grocery shopping and recipe browsing for a seamless user experience. Users can explore recipes, add missing ingredients directly to their cart, and place orders effortlessly."
                      skills={["Web Development", "HTML", "CSS", "JavaScript"]}
                    />
                    
                    <ResumeItem
                      title="Crop-Disease Detection and Recommendation System"
                      description="Developed an AI/ML-based model that accurately identifies crop diseases and provides effective treatment recommendations. The system analyzes images of affected crops using computer vision and deep learning techniques."
                      skills={["AI/ML", "Deep Learning", "Computer Vision"]}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="skills">
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                      <Code className="h-6 w-6 text-theme-500" />
                      Technical Skills
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Python</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Java</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">C++</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">HTML</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">CSS</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Technologies & Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">AI/ML</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">MySQL</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Computer Vision</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Deep Learning</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Networking & Security</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Cisco Packet Tracer</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Networking</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Cybersecurity</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Leadership</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Teamwork</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Problem Solving</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Communication</span>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold font-display mb-6 mt-12 flex items-center gap-2">
                      <Award className="h-6 w-6 text-theme-500" />
                      Extra Curricular Activities
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">College Activities</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Participated and selected in Internal College Hackathon (SIH)</li>
                          <li>Participated in CODEQUEST competition organised by MIT AOE College</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Personal Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Dancing</span>
                          <span className="px-3 py-2 bg-secondary rounded-lg text-sm">Anchoring</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="certifications">
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                      <Award className="h-6 w-6 text-theme-500" />
                      Certifications
                    </h2>
                    
                    <ResumeItem
                      title="Packet Tracer"
                      skills={["Cisco Packet Tracer"]}
                    />
                    
                    <ResumeItem
                      title="Introduction to Cybersecurity"
                      skills={["Cybersecurity"]}
                    />
                    
                    <ResumeItem
                      title="Cybersecurity Essentials"
                      skills={["Cybersecurity"]}
                    />
                    
                    <ResumeItem
                      title="C/C++"
                      skills={["C", "CPP"]}
                    />
                    
                    <ResumeItem
                      title="PCAP-Programming Essentials in Python"
                      skills={["Python"]}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Resume;
