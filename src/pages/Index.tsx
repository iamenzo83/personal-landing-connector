
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactButton from "@/components/ContactButton";
import { Link } from "react-router-dom";

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
        
        {/* ERPNext Italia Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background/50 to-primary/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                Open Source ERP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                ERPNext Italia
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Dal 2013 mi occupo dell'implementazione di ERPNext per il mercato italiano, 
                con particolare attenzione agli aspetti fiscali e normativi specifici.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <Link
                to="/erp/erpnext-italia"
                className="px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-apple inline-flex items-center gap-2"
              >
                Scopri di più su ERPNext Italia
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
        
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
                Hai bisogno di supporto IT, consulenza per l'implementazione di soluzioni tecnologiche o assistenza con sistemi di sicurezza informatica? 
                Contattami per discutere del tuo progetto e scoprire come posso aiutarti a ottimizzare i tuoi sistemi informativi.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <div className="px-4 py-2 bg-secondary/50 rounded-full text-sm">IT Management</div>
                <div className="px-4 py-2 bg-secondary/50 rounded-full text-sm">Sistemi Informativi</div>
                <div className="px-4 py-2 bg-secondary/50 rounded-full text-sm">Cyber Security</div>
                <div className="px-4 py-2 bg-secondary/50 rounded-full text-sm">Automazione Industriale</div>
                <div className="px-4 py-2 bg-secondary/50 rounded-full text-sm">Sistemi di Visione</div>
                <div className="px-4 py-2 bg-secondary/50 rounded-full text-sm">Troubleshooting</div>
              </motion.div>
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
