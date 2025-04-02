
import { Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type ContactButtonProps = {
  type: 'mail' | 'telegram' | 'whatsapp' | 'linkedin';
  href: string;
  className?: string;
};

const ContactButton = ({ type, href, className }: ContactButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const getIcon = () => {
    switch (type) {
      case 'mail':
        return <Mail className="h-5 w-5" />;
      case 'telegram':
        return <Send className="h-5 w-5" />;
      case 'whatsapp':
        return <MessageCircle className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
    }
  };
  
  const getLabel = () => {
    switch (type) {
      case 'mail':
        return 'Email';
      case 'telegram':
        return 'Telegram';
      case 'whatsapp':
        return 'WhatsApp';
      case 'linkedin':
        return 'LinkedIn';
    }
  };
  
  const getStyles = () => {
    switch (type) {
      case 'mail':
        return "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200";
      case 'telegram':
        return "bg-sky-50 text-sky-600 hover:bg-sky-100 border-sky-200";
      case 'whatsapp':
        return "bg-green-50 text-green-600 hover:bg-green-100 border-green-200";
      case 'linkedin':
        return "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-indigo-200";
    }
  };
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-3 rounded-full border transition-apple",
          getStyles(),
          className
        )}
      >
        {getIcon()}
        <span className="font-medium">{getLabel()}</span>
      </button>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-3 py-1 bg-foreground text-background text-xs rounded-md shadow-lg mb-1 whitespace-nowrap">
          Contatto aperto in una nuova finestra
        </div>
      )}
    </div>
  );
};

export default ContactButton;
