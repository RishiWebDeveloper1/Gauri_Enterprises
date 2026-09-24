"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HelpCircle,
  Search,
  MessageCircle,
  Star,
  ChevronDown,
  ShieldCheck,
  Truck,
  Sparkles,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
import { reviews } from "@/data/reviews";
import { companyInfo } from "@/data/companyInfo";

const faqs = [
  {
    q: "Can I customize the dimensions, fabric, and wood polish of the furniture?",
    a: "Absolutely! At Gauri Enterprises, 100% of our products can be tailored to your room dimensions. You can choose from pure Burma Teak, CP Teak, or Sheesham, pick from over 150+ stain-resistant fabric and velvet swatches, and choose between natural matte, satin, or high-gloss PU finishes.",
  },
  {
    q: "How does the ordering and WhatsApp confirmation process work?",
    a: "Simply browse our catalog and click 'Order' on any product. This opens a direct WhatsApp chat with our workshop coordinators. We confirm the dimensions, share fabric swatches via photo/video, finalize the quote, and provide an official workshop invoice.",
  },
  {
    q: "What is the delivery timeline and installation procedure?",
    a: "Standard bespoke furniture takes between 7 to 14 business days to craft from seasoned wood. All deliveries are packaged in protective wooden crates to prevent transit scratches. Our carpenter team arrives with the shipment to handle complete in-room installation.",
  },
  {
    q: "What warranty do you provide on solid wood and hardware?",
    a: "All Gauri Enterprises solid wood furniture carries an industry-leading 10-Year Termite and Structural Warranty. Moving hardware such as German hydraulic bed lifts, soft-close hinges, and sliding channels include a 5-year replacement warranty.",
  },
  {
    q: "Can you design complete home interiors (Wardrobes, Modular Kitchen, TV Units)?",
    a: "Yes! We specialize in end-to-end turnkey residential interiors for 1BHK, 2BHK, 3BHK flats, penthouses, and bungalows. You can send us your architectural blueprint or CAD layout to receive a customized 3D design and package quote.",
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-16">
      {/* Hero with Help Background */}
      <section className="relative bg-[#0B2545] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image Overlay from .bin */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/helpBgImg - Copy.jpg"
            alt="Customer Help & Support"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" /> Customer Assistance & Help Center
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Hello, How Can We Help You?
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Find immediate answers regarding customized dimensions, teakwood maintenance, delivery
            schedules, and read genuine client reviews.
          </p>

          {/* Search Box */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Ask a question (e.g. customization, warranty, delivery)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 text-xs sm:text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B88E1F]">
            Common Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-800 hover:text-[#0B2545]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#B88E1F]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Reviews Section (from .bin/html/help.html) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B88E1F]">
            Community Feedback
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] mt-1">
            Verified Customer Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{rev.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] text-slate-400 ml-1">({rev.date})</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#0B2545] mb-1">{rev.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Buyer: {rev.location}</span>
                <span className="text-emerald-700 font-medium">✓ Purchased & Installed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Assistance Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0B2545] to-[#14498C] text-white text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">Have a specific question not covered here?</h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto">
            Our master carpenters and showroom managers are available 7 days a week on WhatsApp and
            phone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I need help with an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> Message on WhatsApp
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" /> Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
