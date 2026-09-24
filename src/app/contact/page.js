"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
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
    const msg = `*New Contact Request from Gauri Enterprises Website:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Interested In:* ${formData.furnitureInterest}
*Address / City:* ${formData.address}`;

    window.open(companyInfo.whatsapp.createUrl(msg), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-16">
      {/* Hero Header */}
      <section className="bg-[#0B2545] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Direct Workshop Inquiry
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact Gauri Enterprises
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl mx-auto">
            Have a custom furniture design in mind or want to visit our workshop? Connect directly
            with our master craftsmen.
          </p>
        </div>
      </section>

      {/* Main Content Form & Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88E1F]">
                  Get In Touch
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] mt-1">
                  Send Us Your Requirements
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below to instantly connect with our workshop team via WhatsApp
                  or direct callback.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-serif font-bold text-base text-emerald-900">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-xs text-emerald-700">
                    Your inquiry has been prepared for WhatsApp chat. Our team will assist you with
                    wood options, quotations, and 3D interior plans.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Furniture or Interior Requirement
                    </label>
                    <select
                      value={formData.furnitureInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, furnitureInterest: e.target.value })
                      }
                      className="w-full text-xs px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D4AF37] focus:bg-white font-medium text-slate-700"
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
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Current City or Delivery Address
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter your address, room dimensions, or any specific wood/fabric preferences..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#14498C] hover:from-[#07172B] hover:to-[#0B2545] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Details & Showcase Image */}
            <div className="lg:col-span-5 bg-[#0B2545] text-white p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Background preview image from .bin */}
              <div className="absolute inset-0 opacity-15">
                <Image
                  src="/images/conntact_bgImage.jpeg"
                  alt="Contact Gauri Enterprises"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Workshop & Office
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
                    Gauri Enterprises
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Premium Furniture & Bespoke Interiors
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/10 text-amber-300 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Address</p>
                      <p className="text-slate-300 leading-relaxed mt-0.5">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/10 text-amber-300 shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Direct Phone</p>
                      <a
                        href={`tel:${companyInfo.phoneRaw}`}
                        className="text-amber-300 hover:underline font-semibold block mt-0.5"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/10 text-amber-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Email Address</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-slate-300 hover:text-white truncate block mt-0.5"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/10 text-amber-300 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Visiting Hours</p>
                      <p className="text-slate-300 mt-0.5">{companyInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Card */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/15">
                <a
                  href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I am outside your showroom / looking for directions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
