
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-24 h-24 border-4 border-t-theme-500 border-theme-200 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-display font-bold">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
