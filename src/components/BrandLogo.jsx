"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({ variant = "default", className = "" }) {
  const [imageError, setImageError] = useState(false);
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group transition-transform duration-200 active:scale-95 ${className}`}
    >
      {/* Logo Emblem */}
      <div className="relative flex items-center justify-center">
        {!imageError ? (
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-sm bg-white p-1 border border-amber-200/40">
            <Image
              src="/images/logo.png"
              alt="Gauri Enterprises Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0B2545] to-[#14498C] text-white flex items-center justify-center font-serif font-black text-2xl tracking-tighter shadow-md border border-amber-400/40">
            <span className="text-white">G</span>
            <span className="text-[#D4AF37]">E</span>
          </div>
        )}
      </div>

      {/* Brand Title & Tagline */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif text-lg sm:text-xl font-bold tracking-wider uppercase transition-colors ${
            isLight
              ? "text-white group-hover:text-amber-300"
              : "text-[#0B2545] group-hover:text-[#14498C]"
          }`}
        >
          Gauri Enterprises
        </span>
        <span
          className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase ${
            isLight ? "text-amber-300/90" : "text-[#B88E1F]"
          }`}
        >
          Premium Furniture & Interiors
        </span>
      </div>
    </Link>
  );
}
