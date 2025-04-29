
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const allProjects = [
  {
    id: 1,
    title: "Grocery Ordering and Recipe Website",
    description: "Developed a web-based platform that combines grocery shopping and recipe browsing for a seamless user experience. Users can explore recipes, add missing ingredients directly to their cart, and place orders effortlessly. The platform features an intuitive interface, personalized recommendations, and a responsive design, making meal planning and grocery shopping more convenient and efficient.",
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    mentor: "Dr. Kalpana Pawase",
  },
  {
    id: 2,
    title: "Crop-Disease Detection System",
    description: "Developed an AI/ML-based model that accurately identifies crop diseases and provides effective treatment recommendations. The system analyzes images of affected crops using computer vision and deep learning techniques to detect diseases with high accuracy. Upon diagnosis, it suggests personalized solutions, including organic treatments, chemical remedies, and preventive measures to help farmers protect their yield. This intelligent model enhances agricultural efficiency, reduces crop loss, and promotes sustainable farming practices.",
    category: "AI/ML",
    skills: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "Image Processing"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Network Security Analysis Tool",
    description: "Created a comprehensive network security analysis tool during my Cisco internship. This tool helps identify vulnerabilities, monitor network traffic, and implement security protocols to protect against potential cyber threats.",
    category: "Cybersecurity",
    skills: ["Network Security", "Cisco Packet Tracer", "Vulnerability Assessment"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80",
  },
  {
    id: 4,
    title: "College Hackathon Project",
    description: "Participated in the Internal College Hackathon (SIH) where I collaborated with a team to develop an innovative solution for a real-world problem under time constraints.",
    category: "Hackathon",
    skills: ["Rapid Prototyping", "Problem Solving", "Team Collaboration", "Python"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  }
];

const categories = ["All", "Web Development", "AI/ML", "Cybersecurity", "Hackathon"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(allProjects);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    filterProjects("All");
  }, []);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setVisibleProjects(allProjects);
    } else {
      setVisibleProjects(allProjects.filter(project => project.category === category));
    }
  };
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold font-display mb-4",
              mounted ? "animate-fade-in" : "opacity-0"
            )}>
              My <span className="text-theme-500">Projects</span>
            </h1>
            <p className={cn(
              "text-muted-foreground text-lg",
              mounted ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '100ms' }}>
              Explore my latest work and projects across various technologies and domains.
            </p>
            
            <div className={cn(
              "flex flex-wrap justify-center gap-2 mt-8",
              mounted ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '200ms' }}>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category ? "bg-theme-500 hover:bg-theme-600" : ""}
                  onClick={() => filterProjects(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={cn(
                  "overflow-hidden card-hover border-0 shadow-md h-full flex flex-col",
                  mounted ? "animate-fade-in" : "opacity-0"
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
                  <div className="bg-theme-100 text-theme-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-4 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="bg-secondary text-foreground text-xs px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="bg-secondary text-foreground text-xs px-2 py-1 rounded-md">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {visibleProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">No projects matching the selected category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Projects;
