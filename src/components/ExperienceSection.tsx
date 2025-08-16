
import { motion } from 'framer-motion';

type Experience = {
  period: string;
  company: string;
  position: string;
  improvements: string[];
  impact: string;
};

const experiences: Experience[] = [
  {
    period: "2014 - Presente",
    company: "Texol Srl, Alanno Scalo",
    position: "IT Manager",
    improvements: [
      "Digitalizzazione completa dei processi aziendali",
      "Implementazione sistema ERP personalizzato",
      "Riduzione del 60% dei tempi di elaborazione documenti",
      "Creazione team IT multidisciplinare"
    ],
    impact: "Ottimizzazione operativa e crescita produttività del 40%"
  },
  {
    period: "2010 - 2014",
    company: "Mecnova Srl, Alanno Scalo",
    position: "System Manager",
    improvements: [
      "Migrazione da sistemi legacy a infrastruttura moderna",
      "Implementazione backup automatizzati e disaster recovery",
      "Configurazione VPN sicure per accesso remoto",
      "Centralizzazione autenticazione utenti"
    ],
    impact: "Zero downtime e sicurezza dati garantita al 99.9%"
  },
  {
    period: "2008 - 2009",
    company: "Comitato Organizzatore XVI Giochi del Mediterraneo - Pescara2009, Pescara",
    position: "System Manager",
    improvements: [
      "Progettazione rete per evento internazionale",
      "Coordinamento installazione su 15 sedi sportive",
      "Supporto real-time per 2000+ utenti simultanei",
      "Sistemi di sicurezza multi-livello"
    ],
    impact: "Evento senza interruzioni tecniche, 100% uptime"
  },
  {
    period: "2005 - 2008",
    company: "Cyborg Srl, Chieti Scalo",
    position: "System Manager",
    improvements: [
      "Gestione firewall enterprise per 30+ sedi",
      "Ottimizzazione connessioni VPN site-to-site",
      "Configurazione hosting e servizi email",
      "Monitoraggio proattivo infrastrutture"
    ],
    impact: "Riduzione del 70% degli incidenti di sicurezza"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            Percorso professionale
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
             Risultati e miglioramenti
           </motion.h2>
           
           <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
             className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto"
           >
             I risultati concreti e le ottimizzazioni ottenute in ogni esperienza professionale.
           </motion.p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-primary shadow-md absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-0 md:pl-8 text-left' : 'md:pl-0 md:pr-8 md:text-right'} ml-12 md:ml-0`}>
                  <div className="bg-white dark:bg-secondary/20 rounded-2xl shadow-sm border border-border/40 p-6 lg:p-8 hover:shadow-md transition-apple">
                    <span className="inline-block text-sm font-medium text-primary/80 mb-2">{exp.period}</span>
                    <h3 className="text-xl lg:text-2xl font-semibold">{exp.company}</h3>
                    <h4 className="text-foreground/70 text-lg mb-4">{exp.position}</h4>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-primary mb-3">Miglioramenti implementati:</h5>
                      <ul className="space-y-2">
                        {exp.improvements.map((improvement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/80 text-sm lg:text-base">
                            <span className="text-primary text-xs mt-1.5">▶</span>
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg border-l-3 border-primary">
                      <p className="text-sm font-medium text-primary/90">
                        <span className="text-xs uppercase tracking-wide">Impatto:</span>
                      </p>
                      <p className="text-foreground/80 text-sm lg:text-base mt-1">{exp.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
