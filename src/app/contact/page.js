"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    furnitureInterest: "Bespoke Sofa",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Inquiry for Gauri Enterprises:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Requirement:* ${formData.furnitureInterest}
*Address / City:* ${formData.address}`;

    window.open(companyInfo.whatsapp.createUrl(msg), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Hero Header */}
      <section className="bg-[#09172E] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8B75F]">
            Workshop & Showroom Inquiry
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Connect With Our Artisans
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
            Whether you have custom room blueprints, specific wood preferences, or wish to schedule a
            workshop visit, our master carpenters are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content Form & Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl border border-[#E8E6E0] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
                  Bespoke Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
                  Share Your Furniture Vision
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  Fill in your details below for an immediate 1-on-1 WhatsApp consultation with our
                  workshop team.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-amber-50/60 border border-[#E8E6E0] text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-base text-[#09172E]">
                    Thank you, {formData.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal">
                    Your inquiry has been formatted for WhatsApp chat. Our craftsmen will provide
                    fabric catalogs, timber options, and 3D interior plans.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-[#09172E] text-white text-xs font-medium uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E8E6E0] focus:outline-none focus:border-[#C29B38] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E8E6E0] focus:outline-none focus:border-[#C29B38] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Furniture or Interior Requirement
                    </label>
                    <select
                      value={formData.furnitureInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, furnitureInterest: e.target.value })
                      }
                      className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E8E6E0] focus:outline-none focus:border-[#C29B38] font-medium text-slate-700"
                    >
                      <option value="Bespoke Sofa">Custom Sofa / Couches</option>
                      <option value="Hydraulic Bed">Hydraulic Storage Bed</option>
                      <option value="Pooja Mandir">Teakwood Pooja Mandir</option>
                      <option value="Modular Wardrobe">Modular Sliding Wardrobe</option>
                      <option value="Dining Table">Marble / Teak Dining Table</option>
                      <option value="Safety Door">Teak Wood & Laser Cut Safety Door</option>
                      <option value="Complete Home Interior">Complete Home Interior (1/2/3 BHK)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Delivery City or Custom Measurements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter room dimensions, specific wood finishes, or questions..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E8E6E0] focus:outline-none focus:border-[#C29B38] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#09172E] hover:bg-[#050E1C] text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs border border-[#C29B38]/40 transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Workshop Showroom Details */}
            <div className="lg:col-span-5 bg-[#09172E] text-white p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D8B75F]">
                    Showroom & Workshop
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                    Gauri Enterprises
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-0.5">
                    Premium Furniture & Bespoke Interiors
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-[#D8B75F] shrink-0 border border-white/10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Workshop Address</p>
                      <p className="text-slate-300 leading-relaxed mt-0.5 font-light">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-[#D8B75F] shrink-0 border border-white/10">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Direct Line</p>
                      <a
                        href={`tel:${companyInfo.phoneRaw}`}
                        className="text-[#D8B75F] hover:underline font-numeric font-medium block mt-0.5"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-[#D8B75F] shrink-0 border border-white/10">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-slate-300 hover:text-white truncate block mt-0.5 font-light"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-[#D8B75F] shrink-0 border border-white/10">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Visiting Hours</p>
                      <p className="text-slate-300 mt-0.5 font-light">{companyInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Card */}
              <div className="pt-6 border-t border-white/10">
                <a
                  href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I would like to visit your workshop.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-white/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
