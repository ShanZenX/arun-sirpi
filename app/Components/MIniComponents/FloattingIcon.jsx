// components/FloatingIcons.js
import React from 'react';
import Image from 'next/image';
import call from "@/public/call.png"
import { PhoneCall, MessageCircle, MessageSquare } from 'lucide-react';

const FloatingIcon = () => {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-3">
      <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer" title="Call us">
        <div className="w-12 h-12  shadow-lg flex items-center justify-center rounded-full bg-yellow-950 transition-transform transform hover:scale-110">
        <PhoneCall className="w-8 h-8 text-[#FFDB58]" />
            </div>
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp us">
        <div className="w-12 h-12 rounded-full flex bg-yellow-950    items-center justify-center shadow-lg transition-transform transform hover:scale-110">
        <MessageCircle className="w-8 h-8 text-[#FFDB58]" />
        </div>
      </a>
    </div>
  );
};

export default FloatingIcon;
