"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Eye,
  Star,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function ProductCard({ product, onQuickView }) {
  const [activeImage, setActiveImage] = useState(product.images[0] || "/images/furnitur_sample.jpg");
  const [imgError, setImgError] = useState(false);

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

  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const msg = `Hello Gauri Enterprises, I am interested in ordering:
Product: ${product.name}
Price: ${formattedPrice}
Image: https://${companyInfo.domain}${product.images[0]}

Please share the fabric/customization options and delivery timeline.`;
    window.open(companyInfo.whatsapp.createUrl(msg), "_blank");
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(product)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-4/3 sm:aspect-16/11 bg-slate-100 overflow-hidden">
        <Image
          src={imgError ? "/images/no-image-available.jpg" : activeImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => setImgError(true)}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.tag && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#0B2545]/90 text-amber-300 backdrop-blur-xs shadow-xs border border-amber-400/30">
              {product.tag}
            </span>
          )}
          {product.discount && (
            <span className="ml-auto px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider bg-rose-600 text-white shadow-xs">
              {product.discount}
            </span>
          )}
        </div>

        {/* Quick View Hover Pill */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-md backdrop-blur-xs">
            <Eye className="w-3.5 h-3.5 text-[#B88E1F]" /> Quick View & Specs
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Category */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B88E1F]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-slate-700 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-[#0E356A] transition-colors">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-black text-[#0B2545]">
                {formattedPrice}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-600 font-medium block">
              Direct Workshop Price
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <button
            onClick={handleWhatsAppOrder}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] font-medium text-xs shadow-xs transition-transform active:scale-95 shrink-0"
            title="Order this product via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
