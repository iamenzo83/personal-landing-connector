
import { Mail, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactButtonProps = {
  type: 'mail' | 'telegram' | 'whatsapp';
  href: string;
  className?: string;
};

const ContactButton = ({ type, href, className }: ContactButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case 'mail':
        return <Mail className="h-5 w-5" />;
      case 'telegram':
        return <Send className="h-5 w-5" />;
      case 'whatsapp':
        return <MessageCircle className="h-5 w-5" />;
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
    }
  };
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-5 py-3 rounded-full border transition-apple",
        getStyles(),
        className
      )}
    >
      {getIcon()}
      <span className="font-medium">{getLabel()}</span>
    </a>
  );
};

export default ContactButton;
