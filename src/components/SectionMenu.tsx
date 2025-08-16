import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';

type ActiveSection = 'skills' | 'experience';

const SectionMenu = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('skills');

  const menuItems = [
    {
      id: 'skills' as ActiveSection,
      label: 'Competenze',
      description: 'Tecnologie e skills tecniche'
    },
    {
      id: 'experience' as ActiveSection,
      label: 'Esperienze',
      description: 'Risultati e miglioramenti ottenuti'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Menu di navigazione */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            Il mio profilo professionale
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Skills & Esperienza
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "outline"}
                onClick={() => setActiveSection(item.id)}
                className={`px-6 py-3 min-w-[160px] transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'hover:bg-primary/5'
                }`}
              >
                <div className="text-center">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs opacity-80 mt-1">{item.description}</div>
                </div>
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Contenuto delle sezioni */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {activeSection === 'skills' && (
              <div className="skills-content">
                <SkillsSection />
              </div>
            )}
            {activeSection === 'experience' && (
              <div className="experience-content">
                <ExperienceSection />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SectionMenu;