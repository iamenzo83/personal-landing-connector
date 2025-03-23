
import { motion } from 'framer-motion';

type Experience = {
  period: string;
  company: string;
  position: string;
  description: string;
};

const experiences: Experience[] = [
  {
    period: "2014 - Presente",
    company: "Texol Srl, Alanno Scalo",
    position: "IT Manager",
    description: "Responsabile servizi IT, manutenzione e gestione sistemi informativi, consulenza soluzioni software, gestione team, coordinamento fornitori, sviluppo progetti IT, cyber security e collaborazione con il management."
  },
  {
    period: "2010 - 2014",
    company: "Mecnova Srl, Alanno Scalo",
    position: "System Manager",
    description: "Gestione Windows Server, Linux Server, configurazione Proxy, firewall, VPN, gestione infrastruttura di rete e sistemi di autenticazione centralizzati."
  },
  {
    period: "2008 - 2009",
    company: "Comitato Organizzatore XVI Giochi del Mediterraneo - Pescara2009, Pescara",
    position: "System Manager",
    description: "Gestione di server Windows, coordinamento installazione di reti, supporto tecnico per eventi sportivi e configurazione di sistemi di sicurezza."
  },
  {
    period: "2005 - 2008",
    company: "Cyborg Srl, Chieti Scalo",
    position: "System Manager",
    description: "Amministrazione firewall Checkpoint R60, gestione connessioni VPN site-to-site su oltre 30 siti, configurazione NAT per hosting e posta, monitoraggio servizi e gestione CED per clienti istituzionali e aziende."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
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
            className="text-3xl md:text-4xl font-bold mt-4 mb-6"
          >
            Esperienza lavorativa
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Un percorso di crescita attraverso diversi ruoli nel campo dell'IT management e dell'automazione industriale.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
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
                  <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-6 hover:shadow-md transition-apple">
                    <span className="inline-block text-sm font-medium text-primary/80 mb-2">{exp.period}</span>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <h4 className="text-foreground/70 mb-3">{exp.position}</h4>
                    <p className="text-foreground/80">{exp.description}</p>
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
