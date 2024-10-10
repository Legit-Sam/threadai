import React from "react";
import { Clock, Reply, Forward, Star } from "lucide-react";

interface WhatsAppMockProps {
  content: string;
  sender: string; // Name of the sender
  timestamp: string; // Timestamp of the message
}

export const WhatsappMock: React.FC<WhatsAppMockProps> = ({ content, sender, timestamp }) => {
  return (
    <div className="bg-white text-black rounded-lg p-4 max-w-md mx-auto shadow-md">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <div>
          <p className="font-bold">{sender}</p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-3 mb-3">
        <p>{content}</p>
      </div>
      <div className="flex justify-between text-gray-500">
        <Reply size={20} className="cursor-pointer" />
        <Forward size={20} className="cursor-pointer" />
        <Star size={20} className="cursor-pointer" />
        <Clock size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};
