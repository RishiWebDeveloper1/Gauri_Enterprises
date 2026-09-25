"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Ruler,
  Layers,
  Sparkles,
  Share2,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function ProductModal({ product, isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customNotes, setCustomNotes] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOriginalPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(product.originalPrice);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Gauri Enterprises, I would like to place an inquiry / order for:
*Product:* ${product.name}
*Price:* ${formattedPrice} (MRP: ${formattedOriginalPrice})
*Customer Name:* ${customerName || "Customer"}
*Phone:* ${customerPhone || "Not provided"}
*City/Address:* ${customerCity || "Not provided"}
${customNotes ? `*Customization Request:* ${customNotes}` : ""}
*Reference Link:* https://${companyInfo.domain}/products?id=${product.id}`;

    window.open(companyInfo.whatsapp.createUrl(message), "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} from Gauri Enterprises`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#06152B]/75 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-200/50 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-[#0B2545] text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-300">
              Gauri Enterprises Showroom
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs text-slate-300 capitalize">{product.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs flex items-center gap-1"
              title="Share"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Images & Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={selectedImage || product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
                {product.discount && (
                  <div className="font-numeric absolute top-3 right-3 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold shadow-md tracking-tight">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Mini Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        selectedImage === img
                          ? "border-[#D4AF37] ring-2 ring-amber-300/40 scale-105"
                          : "border-slate-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Guarantees Box */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Genuine Teak / Hardwood</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B88E1F] shrink-0" />
                  <span>Safe In-Home Installation</span>
                </div>
              </div>
            </div>

            {/* Right: Specifications & Direct Order Form */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] leading-tight">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-price text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
                    {formattedPrice}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="font-numeric text-base text-slate-400 line-through">
                      MRP {formattedOriginalPrice}
                    </span>
                  )}
                  <span className="font-numeric px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                    Save {(product.originalPrice - product.price).toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications Grid */}
                <div className="mt-5 space-y-2 border-y border-slate-100 py-4 text-xs sm:text-sm">
                  {product.specs?.dimensions && (
                    <div className="flex items-start gap-2">
                      <Ruler className="w-4 h-4 text-[#B88E1F] shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">Dimensions:</span>
                      <span className="font-numeric font-medium text-slate-700">{product.specs.dimensions}</span>
                    </div>
                  )}
                  {product.specs?.woodType && (
                    <div className="flex items-start gap-2">
                      <Layers className="w-4 h-4 text-[#B88E1F] shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">Material & Frame:</span>
                      <span className="text-slate-600">{product.specs.woodType}</span>
                    </div>
                  )}
                  {product.specs?.warranty && (
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">Warranty:</span>
                      <span className="font-numeric font-medium text-slate-700">{product.specs.warranty}</span>
                    </div>
                  )}
                  {product.specs?.delivery && (
                    <div className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">Delivery:</span>
                      <span className="text-slate-600">{product.specs.delivery}</span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                {product.highlights && (
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {product.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Order via WhatsApp Form */}
              <form
                onSubmit={handleWhatsAppSubmit}
                className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B88E1F]" /> Quick Order & Customization
                  </span>
                  <span className="text-[11px] text-slate-500">Fast 1-on-1 Response</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Phone Number *"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Delivery City / Pincode"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="text"
                    placeholder="Custom size, color or notes"
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" /> Order / Inquire via WhatsApp
                  </button>

                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#0B2545] hover:bg-[#07172B] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                    <span>Call Us</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
