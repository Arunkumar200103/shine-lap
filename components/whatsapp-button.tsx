'use client';

import { MessageCircle } from 'lucide-react';
import { businessInfo } from '@/lib/constants';

export function WhatsAppButton() {
  const whatsappNumber = businessInfo.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Shine%2C%20I%20have%20a%20query`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 group animate-pulse-soft"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
}
