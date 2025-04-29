
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-theme-500 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center text-xl">
                PL
              </div>
              <span className="font-display text-xl font-bold">
                Pranjal <span className="text-theme-500">Lohia</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Electronics and Telecommunication Engineer passionate about AI, Machine Learning, and Web Development.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-theme-500 transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-theme-500 transition-colors">
                Projects
              </Link>
              <Link to="/resume" className="text-muted-foreground hover:text-theme-500 transition-colors">
                Resume
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-theme-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:pranjal.lohia@mitaoe.ac.in"
                className="text-muted-foreground hover:text-theme-500 transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                pranjal.lohia@mitaoe.ac.in
              </a>
              <a
                href="tel:+919644474946"
                className="text-muted-foreground hover:text-theme-500 transition-colors flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                +91 9644474946
              </a>
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="#"
                  className="bg-secondary hover:bg-theme-500 hover:text-white transition-colors p-2 rounded-full"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-secondary hover:bg-theme-500 hover:text-white transition-colors p-2 rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pranjal Lohia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
