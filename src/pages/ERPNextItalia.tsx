
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";

const ERPNextItalia = () => {
  return (
    <div className="bg-background min-h-screen overflow-hidden">
      <Helmet>
        <title>ERPNext Italia - Implementazione e Consulenza | Enzo Carlettini</title>
        <meta name="description" content="Dal 2013 mi occupo dell'implementazione di ERPNext per il mercato italiano, con particolare attenzione agli aspetti fiscali e normativi specifici. Consulenza e supporto per ERPNext in Italia." />
        <meta name="keywords" content="ERPNext, ERPNext Italia, Consulenza ERPNext, ERP Open Source, Gestionale Open Source, Fatturazione Elettronica, ERPNext Italiano" />
        <link rel="canonical" href="https://carlettini.org/erp/erpnext-italia" />
        <meta property="og:title" content="ERPNext Italia - Implementazione e Consulenza | Enzo Carlettini" />
        <meta property="og:description" content="Dal 2013 mi occupo dell'implementazione di ERPNext per il mercato italiano, con particolare attenzione agli aspetti fiscali e normativi specifici." />
        <meta property="og:url" content="https://carlettini.org/erp/erpnext-italia" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERPNext Italia - Implementazione e Consulenza | Enzo Carlettini" />
        <meta name="twitter:description" content="Dal 2013 mi occupo dell'implementazione di ERPNext per il mercato italiano, con particolare attenzione agli aspetti fiscali e normativi specifici." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 px-6">
        <section className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/50 dark:bg-secondary/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary/20"
          >
            <div className="mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                Open Source ERP
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">ERPNext Italia</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-6">
                ERPNext è una piattaforma ERP open source completa che offre una gestione integrata per aziende di ogni dimensione.
                Dal 2013 mi occupo dell'implementazione di ERPNext per il mercato italiano, con particolare attenzione agli aspetti
                fiscali e normativi specifici del nostro paese.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Caratteristiche principali di ERPNext</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Contabilità e finanza completamente integrata</li>
                <li>Gestione vendite e acquisti</li>
                <li>Gestione inventario e magazzino</li>
                <li>Produzione e pianificazione risorse</li>
                <li>CRM e gestione progetti</li>
                <li>Risorse umane e buste paga</li>
                <li>Interfaccia web moderna e responsive</li>
                <li>API aperte per integrazioni personalizzate</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Adattamento al contesto italiano</h2>
              <p className="text-foreground/80 mb-6">
                L'implementazione italiana di ERPNext include numerosi adattamenti specifici per la normativa fiscale
                e contabile italiana:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Piano dei conti conforme alla normativa italiana</li>
                <li>Gestione IVA e aliquote multiple</li>
                <li>Fatturazione elettronica compatibile con SDI</li>
                <li>Registri IVA e liquidazioni periodiche</li>
                <li>Gestione ritenute d'acconto e contributi</li>
                <li>Integrazione con i principali sistemi di pagamento italiani</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Servizi di consulenza</h2>
              <p className="text-foreground/80 mb-6">
                Offro servizi di consulenza per l'implementazione di ERPNext nelle aziende italiane, inclusi:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Analisi dei requisiti e valutazione di fattibilità</li>
                <li>Installazione e configurazione del sistema</li>
                <li>Personalizzazione e sviluppo di moduli aggiuntivi</li>
                <li>Migrazione dati da sistemi preesistenti</li>
                <li>Formazione del personale</li>
                <li>Supporto tecnico continuativo</li>
              </ul>
              
              <div className="mt-10 pt-6 border-t border-secondary/20">
                <p className="italic text-foreground/70">
                  Questo articolo è stato originariamente pubblicato nell'agosto 2013 ed è stato aggiornato per riflettere 
                  gli sviluppi più recenti della piattaforma ERPNext e delle sue implementazioni in Italia.
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-secondary/20">
              <a 
                href="/"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                ← Torna alla home page
              </a>
            </div>
          </motion.div>
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

export default ERPNextItalia;
