"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
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
      className="editorial-card group rounded-2xl overflow-hidden flex flex-col justify-between block cursor-pointer"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-4/3 sm:aspect-16/11 bg-[#F4F3EF] overflow-hidden">
        <Image
          src={imgError ? "/images/no-image-available.jpg" : product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
          onError={() => setImgError(true)}
        />

        {/* Minimalist Architectural Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#09172E]/85 text-[#D8B75F] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs border border-amber-300/20">
            {product.tag}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span className="uppercase tracking-widest font-semibold text-[#9E7D2B]">
              {product.category.replace("-", " ")}
            </span>
            <div className="flex items-center gap-1 font-medium text-slate-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#09172E] line-clamp-1 group-hover:text-[#0E2445] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Subtle Link */}
        <div className="pt-3 border-t border-[#F0EEEA] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-base sm:text-lg font-bold text-[#09172E]">
              {formattedPrice}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#09172E] group-hover:text-[#9E7D2B] transition-colors">
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
