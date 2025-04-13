
import { motion } from 'framer-motion';

type Skill = {
  category: string;
  items: string[];
};

const skills: Skill[] = [
  {
    category: "IT Management",
    items: ["Gestione Sistemi Informativi", "Project Management", "Cyber Security", "Budget Planning", "Networking", "Team Leadership"]
  },
  {
    category: "Tecnologie",
    items: ["Windows Server", "Linux Server", "Active Directory", "VPN", "Firewall", "Cloud Services"]
  },
  {
    category: "Sistemi Industriali",
    items: ["Sistemi di Visione", "Troubleshooting", "Revamping", "Automazione", "Visual Inspection", "Monitoraggio Sistemi"]
  },
  {
    category: "Altri Skills",
    items: ["Gestione Fornitori", "Formazione Tecnica", "Documentazione", "Analisi Requisiti", "Ottimizzazione Processi", "Consulenza IT"]
  }
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-secondary/50">
      <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            Competenze
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Le mie specializzazioni
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto"
          >
            Combinando competenze tecniche e una mentalità orientata alla risoluzione dei problemi, 
            sviluppo soluzioni robuste e scalabili.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-secondary/20 rounded-2xl shadow-sm border border-border/40 overflow-hidden hover:shadow-md transition-apple"
            >
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      <span className="text-foreground/80 text-base lg:text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
