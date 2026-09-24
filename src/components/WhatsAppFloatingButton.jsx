"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0B2545] text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-amber-400/40 animate-bounce duration-1000">
          <span>Need custom furniture? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={companyInfo.whatsapp.createUrl(
          "Hello Gauri Enterprises, I would like to get a quote and inquire about your furniture designs."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Gauri Enterprises on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-300 ring-4 ring-[#25D366]/20 active:scale-95 group"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-200" />
      </a>
    </div>
  );
}
