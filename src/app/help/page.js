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
    a: "Yes. Every piece crafted at Gauri Enterprises can be adjusted to your exact room measurements. You can select between genuine Burma Teak, CP Teak, or Sheesham wood, choose from over 150+ stain-resistant fabric and velvet swatches, and choose between natural matte, satin, or high-gloss PU finishes.",
  },
  {
    q: "How does the ordering and WhatsApp confirmation process work?",
    a: "When you browse our collections and click 'Order / Inquire via WhatsApp', a direct chat opens with our workshop coordinators. We confirm the dimensions, share video samples of wood grains and fabric swatches, finalize your quote, and provide an official workshop invoice.",
  },
  {
    q: "What is the typical crafting and delivery timeline?",
    a: "Standard custom woodwork takes between 7 to 14 business days to craft from seasoned timber. All furniture pieces are crated in protective packaging to prevent transit abrasions. Our carpenter team accompanies the shipment for in-home assembly.",
  },
  {
    q: "What warranty is provided on solid wood and hardware?",
    a: "All Gauri Enterprises solid wood furniture includes a 10-Year Termite & Structural Warranty. Moving hardware such as German hydraulic gas-lifts, soft-close hinges, and drawer channels include a 5-year replacement guarantee.",
  },
  {
    q: "Do you design complete home interiors (Wardrobes, Mandirs, Modular Units)?",
    a: "Yes, we specialize in complete residential interior woodwork packages for 1BHK, 2BHK, 3BHK flats, penthouses, and independent houses. You can share your architectural floor plan to receive a customized 3D design and quotation.",
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
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Editorial Hero Header */}
      <section className="bg-[#09172E] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8B75F]">
            Client Support & Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            How May We Assist You?
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-light">
            Answers regarding custom woodwork dimensions, teak maintenance, delivery schedules, and
            genuine homeowner reviews.
          </p>

          {/* Search Box */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search customization, delivery, warranty, maintenance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white text-slate-800 text-xs shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C29B38]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8E6E0] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-800 hover:text-[#09172E]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#9E7D2B]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-[#F0EEEA] pt-3 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
            Community Trust
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
            Verified Homeowner Reviews
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#E8E6E0] shadow-xs space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] text-slate-400 ml-1">({rev.date})</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#09172E] mb-1">{rev.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed italic font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EEEA] flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Buyer • {rev.location}</span>
                <span className="text-emerald-700 font-medium">✓ Installed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Assistance Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="p-8 rounded-3xl bg-[#09172E] text-white text-center space-y-4 border border-white/10">
          <h3 className="text-2xl font-bold">Have Questions or Need Help?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-light">
            Our carpenters and team are available on WhatsApp and phone to help you choose the best
            furniture for your home.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I need help.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#09172E] font-medium text-xs uppercase tracking-wider shadow-xs hover:bg-slate-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D8B75F]" />
              <span>Call Us: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
