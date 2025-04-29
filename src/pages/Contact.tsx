
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
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold font-display mb-4",
              mounted ? "animate-fade-in" : "opacity-0"
            )}>
              Get In <span className="text-theme-500">Touch</span>
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
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className={cn(
              "bg-secondary/50 rounded-xl p-6 md:p-8",
              mounted ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl font-bold font-display mb-4">Find Me On Map</h2>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5843048341644!2d73.87671897603028!3d18.453251782626874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf47d15ce33%3A0x8098f87e96a4dbd5!2sMIT%20Academy%20of%20Engineering!5e0!3m2!1sen!2sin!4v1682859520025!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MIT Academy of Engineering Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
