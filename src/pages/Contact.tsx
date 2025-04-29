
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
        <ContactSection standalone={true} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Contact;
