import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderò il prima possibile.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-secondary/20 rounded-2xl shadow-lg border border-border/40 p-6 lg:p-8 max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2">Contattami</h3>
        <p className="text-foreground/70">
          Invia un messaggio per discutere del tuo progetto
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nome *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="la-tua-email@esempio.com"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Oggetto *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Oggetto del messaggio"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Messaggio *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Descrivi il tuo progetto o la tua richiesta..."
            rows={5}
            className="w-full resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-border/20 text-center">
        <p className="text-sm text-foreground/60 mb-3">
          Oppure contattami direttamente:
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a 
            href="mailto:enzo@carlettini.org" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            enzo@carlettini.org
          </a>
          <a 
            href="https://t.me/sharpec" 
            className="text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a 
            href="https://wa.me/393272408379" 
            className="text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;