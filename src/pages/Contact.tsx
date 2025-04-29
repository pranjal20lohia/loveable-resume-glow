
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-grid">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Contact Page Removed</h1>
            <p className="text-lg text-muted-foreground">This page has been removed as requested.</p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Contact;
