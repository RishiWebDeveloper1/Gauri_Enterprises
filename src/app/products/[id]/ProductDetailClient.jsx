"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Truck,
  Ruler,
  Layers,
  Sparkles,
  Share2,
  CheckCircle2,
  Star,
  Info,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function ProductDetailClient({ product }) {
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || "/images/furnitur_sample.jpg"
  );
  const [selectedFinish, setSelectedFinish] = useState("Natural Teak");
  const [customNote, setCustomNote] = useState("");
  const [copied, setCopied] = useState(false);

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

  const woodFinishes = ["Natural Teak", "Warm Honey Walnut", "Charcoal Matte PU"];

  const handleWhatsAppOrder = () => {
    const url = typeof window !== "undefined" ? window.location.href : `https://${companyInfo.domain}/products/${product.id}`;
    const message = `Hello Gauri Enterprises, I would like to inquire about this piece:
*Product:* ${product.name}
*Price:* ${formattedPrice}
*Preferred Finish:* ${selectedFinish}
${customNote ? `*Custom Requirements:* ${customNote}\n` : ""}*Link:* ${url}

Please share the fabric shade catalog and delivery schedule.`;

    window.open(companyInfo.whatsapp.createUrl(message), "_blank");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: `Explore ${product.name} from Gauri Enterprises`,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* ================= LEFT: GALLERY ================= */}
      <div className="lg:col-span-7 space-y-4">
        {/* Large Stage Image */}
        <div className="relative aspect-4/3 sm:aspect-16/11 rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#E8E6E0] shadow-sm">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            priority
            className="object-cover object-center transition-all duration-300"
          />

          {product.tag && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#09172E]/90 text-[#D8B75F] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm border border-amber-300/30">
              {product.tag}
            </div>
          )}

          <button
            onClick={handleShare}
            aria-label="Share product"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-sm border border-slate-200 backdrop-blur-sm transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail Carousel */}
        {product.images && product.images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden shrink-0 border transition-all ${
                  selectedImage === img
                    ? "border-[#C29B38] ring-2 ring-[#C29B38]/30 scale-102"
                    : "border-[#E8E6E0] opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Angle view ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Subtle Workshop Guarantee */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8E6E0] flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
            <span>100% Solid Seasoned Hardwood</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#C29B38]" />
            <span>Pan-India Direct Dispatch</span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT: SPECIFICATIONS & INQUIRY ================= */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29B38]">
            {product.category}
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#09172E] mt-1.5 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2.5 text-xs text-slate-600">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-slate-800">{product.rating}</span>
            <span className="text-slate-400">({product.reviewCount} verified homeowners)</span>
          </div>

          {/* Pricing */}
          <div className="mt-4 pt-4 border-t border-[#E8E6E0] flex items-baseline gap-3">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#09172E]">
              {formattedPrice}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-slate-400 line-through">
                MRP {formattedOriginalPrice}
              </span>
            )}
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-50 text-[#9E7D2B] font-semibold border border-amber-200">
              Workshop Direct Price
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Inclusive of all taxes. Custom sizes available on request.
          </p>
        </div>

        {/* Narrative Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {product.description}
        </p>

        {/* Wood Finish Selector */}
        <div className="space-y-2 pt-2 border-t border-[#E8E6E0]">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
            <span>Wood Polish Finish:</span>
            <span className="font-semibold text-[#09172E] normal-case">{selectedFinish}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {woodFinishes.map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`py-2 px-2.5 rounded-xl text-xs font-medium text-center border transition-all ${
                  selectedFinish === finish
                    ? "bg-[#09172E] text-white border-[#09172E] shadow-xs"
                    : "bg-white text-slate-700 border-[#E8E6E0] hover:border-slate-400"
                }`}
              >
                {finish}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="space-y-2 pt-2 border-t border-[#E8E6E0] text-xs">
          <p className="font-bold uppercase tracking-wider text-slate-700 text-[11px]">
            Specifications:
          </p>
          <div className="bg-white rounded-xl border border-[#E8E6E0] divide-y divide-[#F0EEEA]">
            {product.specs?.dimensions && (
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500">Dimensions</span>
                <span className="font-semibold text-slate-800 text-right">{product.specs.dimensions}</span>
              </div>
            )}
            {product.specs?.woodType && (
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500">Frame & Timber</span>
                <span className="font-semibold text-slate-800 text-right">{product.specs.woodType}</span>
              </div>
            )}
            {product.specs?.fabric && (
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500">Upholstery</span>
                <span className="font-semibold text-slate-800 text-right">{product.specs.fabric}</span>
              </div>
            )}
            {product.specs?.warranty && (
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500">Warranty</span>
                <span className="font-semibold text-emerald-700 text-right">{product.specs.warranty}</span>
              </div>
            )}
            {product.specs?.delivery && (
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500">Assembly</span>
                <span className="font-semibold text-slate-800 text-right">{product.specs.delivery}</span>
              </div>
            )}
          </div>
        </div>

        {/* Custom Measurement / Note Box */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Custom room dimensions or requests:
          </label>
          <input
            type="text"
            placeholder="e.g. Need 78x60 mattress size or beige fabric..."
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E6E0] focus:outline-none focus:border-[#C29B38]"
          />
        </div>

        {/* Action Buttons: Clean, Sophisticated, Professional */}
        <div className="space-y-2.5 pt-2">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full py-3.5 px-6 rounded-xl bg-[#09172E] hover:bg-[#050E1C] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-md border border-[#C29B38]/40 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Order on WhatsApp</span>
          </button>

          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="w-full py-3 px-6 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 border border-[#E8E6E0] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Call Us: {companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
