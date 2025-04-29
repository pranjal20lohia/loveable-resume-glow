
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center px-4 max-w-md">
        <div className="inline-block relative">
          <span className="text-9xl font-bold text-theme-100">404</span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-theme-500">404</span>
        </div>
        <h1 className="text-3xl font-bold mt-8 mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button className="bg-theme-500 hover:bg-theme-600" size="lg" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
