
import { motion } from 'framer-motion';

const ProfileSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 section-spacing">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="md:w-1/2 md:pr-12 mb-12 md:mb-0 text-center md:text-left"
      >
        <div className="inline-block mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
          Enzo Carlettini
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mb-8">
          Sviluppatore a tutto tondo con passione per l'innovazione e il design. 
          Trasformo le idee complesse in soluzioni digitali eleganti e funzionali.
        </p>
        
        <div className="inline-flex gap-5 mt-2">
          <a 
            href="#skills" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-apple"
          >
            Le mie competenze
          </a>
          <a 
            href="#experience" 
            className="px-6 py-3 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/80 transition-apple"
          >
            Esperienze
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="/lovable-uploads/f79fbadc-e1b7-4238-8399-6c72efedd5cb.png" 
              alt="Enzo Carlettini" 
              className="w-full h-full object-cover avatar-clip-path"
              loading="lazy"
            />
          </div>
          <div className="absolute -z-10 inset-0 blur-2xl bg-primary/20 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;
