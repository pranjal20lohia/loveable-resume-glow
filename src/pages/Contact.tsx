
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactSection from "@/components/ContactSection";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-grid">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold font-display mb-4",
              mounted ? "animate-fade-in" : "opacity-0"
            )}>
              Get In <span className="purple-gradient">Touch</span>
            </h1>
            <p className={cn(
              "text-muted-foreground text-lg",
              mounted ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '100ms' }}>
              Have a question or want to work together? Feel free to contact me using the form below.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Contact;
