"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40">
      <a
        href={companyInfo.whatsapp.createUrl(
          "Hello Gauri Enterprises, I would like to ask about your furniture."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gauri Enterprises on WhatsApp"
        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#09172E] text-white hover:bg-[#050E1C] shadow-lg border border-[#C29B38]/50 transition-all duration-300 hover:scale-102 active:scale-95 group"
      >
        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
          <MessageCircle className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs font-semibold pr-1 hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
