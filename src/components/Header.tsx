
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-apple",
        scrolled ? "blur-backdrop shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="animate-fade-in-down">
          <h1 className="text-lg font-medium tracking-tight opacity-90">
            Enzo Carlettini
          </h1>
        </div>
        
        <div className="animate-fade-in-down">
          <a 
            href="#contact" 
            className="text-sm font-medium py-2 px-4 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-apple"
          >
            Contattami
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
