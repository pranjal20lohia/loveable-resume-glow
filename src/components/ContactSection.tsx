
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-grid" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold font-display",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Get In <span className="purple-gradient">Touch</span>
          </h2>
          <div className={cn(
            "h-1 w-20 bg-theme-500 mx-auto mt-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '100ms' }}></div>
          <p className={cn(
            "mt-4 text-muted-foreground max-w-2xl mx-auto",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '200ms' }}>
            Have a question or want to work together? Feel free to contact me anytime!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={cn(
            "lg:col-span-1 space-y-6",
            isVisible ? "animate-fade-in-right" : "opacity-0"
          )}>
            <div className="flex items-start gap-4 glassmorphism rounded-lg p-4">
              <div className="bg-theme-500/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-theme-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:pranjal.lohia@mitaoe.ac.in" className="text-muted-foreground hover:text-theme-500 transition-colors">
                  pranjal.lohia@mitaoe.ac.in
                </a>
                <br />
                <a href="mailto:pranjallohia20@gmail.com" className="text-muted-foreground hover:text-theme-500 transition-colors">
                  pranjallohia20@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 glassmorphism rounded-lg p-4">
              <div className="bg-theme-500/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-theme-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a href="tel:+919644474946" className="text-muted-foreground hover:text-theme-500 transition-colors">
                  +91 9644474946
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 glassmorphism rounded-lg p-4">
              <div className="bg-theme-500/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-theme-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <address className="text-muted-foreground not-italic">
                  <p>Pune, Maharashtra, India - 412105</p>
                </address>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "lg:col-span-2 glassmorphism rounded-xl p-6 shadow-lg border border-theme-500/20",
            isVisible ? "animate-fade-in-left" : "opacity-0"
          )} style={{ animationDelay: '300ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-theme-500/20 focus:border-theme-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-theme-500/20 focus:border-theme-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-theme-500/20 focus:border-theme-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-theme-500 hover:bg-theme-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
