"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function HomeProductCard({ product }) {
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

  return (
    <Link
      href={`/products/${product.id}`}
      className="editorial-card group rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between block cursor-pointer h-full bg-white hover:border-[#C29B38] transition-all duration-300"
    >
      {/* Compact Product Image */}
      <div className="relative aspect-4/3 bg-[#F4F3EF] overflow-hidden">
        <Image
          src={imgError ? "/images/no-image-available.jpg" : product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 210px, (max-width: 1024px) 240px, 260px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => setImgError(true)}
        />

        {/* Minimal Tag */}
        {product.tag && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#09172E]/85 text-[#D8B75F] text-[9px] font-semibold tracking-wider uppercase backdrop-blur-xs">
            {product.tag}
          </div>
        )}
      </div>

      {/* Minimal Product Info */}
      <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between gap-2.5">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-[11px] text-slate-600 mb-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-numeric font-semibold text-slate-800 text-xs">
              {product.rating}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-xs sm:text-sm font-bold text-[#09172E] line-clamp-1 group-hover:text-[#9E7D2B] transition-colors leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-[#F0EEEA] flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-price text-xs sm:text-sm font-bold text-[#09172E]">
              {formattedPrice}
            </span>
            {product.originalPrice > product.price && (
              <span className="font-numeric text-[10px] text-slate-400 line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#09172E] group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
