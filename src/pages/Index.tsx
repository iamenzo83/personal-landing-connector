
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactButton from "@/components/ContactButton";

const Index = () => {
  useEffect(() => {
    // Apply smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Account for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      <Header />
      
      <main>
        <ProfileSection />
        <SkillsSection />
        <ExperienceSection />
        
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                Contatti
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mt-4 mb-6"
              >
                Parliamo del tuo progetto
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10"
              >
                Hai un'idea o un progetto in mente? Contattami attraverso uno dei canali qui sotto.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <ContactButton 
                type="mail" 
                href="mailto:enzo@carlettini.org" 
                className="w-full sm:w-auto"
              />
              <ContactButton 
                type="telegram" 
                href="https://t.me/sharpec" 
                className="w-full sm:w-auto"
              />
              <ContactButton 
                type="whatsapp" 
                href="https://wa.me/393272408379" 
                className="w-full sm:w-auto"
              />
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Enzo Carlettini. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
