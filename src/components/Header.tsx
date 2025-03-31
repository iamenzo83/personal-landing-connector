
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    navigate('/#contact');
    window.scrollTo(0, document.getElementById('contact')?.offsetTop || 0);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-apple",
        scrolled ? "blur-backdrop shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="animate-fade-in-down">
          <a 
            href="/"
            onClick={handleHomeClick}
            className="text-lg font-medium tracking-tight opacity-90 hover:opacity-100 transition-apple"
          >
            Enzo Carlettini
          </a>
        </div>
        
        <div className="flex items-center space-x-4 animate-fade-in-down">
          <ThemeToggle />
          
          <button 
            onClick={handleContactClick}
            className="text-sm font-medium py-2 px-4 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-apple"
          >
            Contattami
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
