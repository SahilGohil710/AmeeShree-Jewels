
'use client';

import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent(message || 'Hello, I am interested in AmeeShree Jewels. Please share details.');
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className={cn(
        'fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform',
        'bg-green-500 hover:bg-green-600 text-white',
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-7 w-7" />
    </Button>
  );
}
