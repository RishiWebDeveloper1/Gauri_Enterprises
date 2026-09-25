"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import HomeProductCard from "@/components/HomeProductCard";

export default function HorizontalCategoryRow({
  category,
  products = [],
  totalCount,
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitor scroll state to toggle arrow button active states
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [products]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const countDisplay = totalCount || products.length;

  return (
    <div className="py-3 sm:py-5 border-b border-[#E8E6E0] last:border-b-0">
      {/* ================= SECTION HEADER ================= */}
      <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
        <div className="min-w-0">
          <h2 className="font-serif text-lg sm:text-2xl font-bold text-[#09172E] tracking-tight truncate">
            {category.name}
          </h2>
        </div>

        {/* Desktop Controls & View All Link */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href={`/products?category=${category.id}`}
            className="text-xs font-semibold text-[#09172E] hover:text-[#9E7D2B] transition-colors inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-100"
          >
            <span>View All ({countDisplay})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Navigation Arrows for Desktop */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-7 h-7 rounded-full border border-[#E8E6E0] flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white text-[#09172E] hover:bg-[#09172E] hover:text-white shadow-2xs cursor-pointer active:scale-95"
                  : "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed opacity-40"
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-7 h-7 rounded-full border border-[#E8E6E0] flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white text-[#09172E] hover:bg-[#09172E] hover:text-white shadow-2xs cursor-pointer active:scale-95"
                  : "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed opacity-40"
              }`}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= HORIZONTAL SCROLL CAROUSEL ================= */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex gap-2.5 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1.5 touch-pan-x"
        >
          {/* Curated Minimal Products */}
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[190px] xs:w-[210px] sm:w-[230px] md:w-[245px] shrink-0 snap-start flex flex-col"
            >
              <HomeProductCard product={product} />
            </div>
          ))}

          {/* Minimal "Show More" / "Explore All" Card */}
          <div className="w-[160px] xs:w-[180px] sm:w-[200px] shrink-0 snap-start flex flex-col">
            <Link
              href={`/products?category=${category.id}`}
              className="editorial-card group rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-center text-center border border-dashed border-[#E8E6E0] hover:border-[#C29B38] bg-white hover:bg-[#FDFCF9] transition-all cursor-pointer h-full shadow-2xs hover:shadow-xs"
            >
              <div className="w-10 h-10 rounded-full bg-[#09172E] text-[#D8B75F] group-hover:bg-[#C29B38] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105 my-auto">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>

              <div className="my-auto py-2 space-y-1">
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#09172E] group-hover:text-[#9E7D2B] transition-colors leading-snug">
                  Explore All {category.name}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {countDisplay}+ Designs Available
                </p>
              </div>

              <div className="w-full pt-2 border-t border-[#F0EEEA]">
                <span className="text-[11px] font-semibold text-[#09172E] group-hover:text-[#9E7D2B] inline-flex items-center gap-1">
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
