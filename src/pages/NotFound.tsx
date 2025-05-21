
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-aurora-gold mb-4">404</h1>
          <div className="w-16 h-1 bg-aurora-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-aurora-gold hover:bg-opacity-90 text-black font-bold py-3 px-8 rounded-md transition-all hover-glow">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
