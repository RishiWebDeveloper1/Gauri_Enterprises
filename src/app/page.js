"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Star,
} from "lucide-react";
import HorizontalCategoryRow from "@/components/HorizontalCategoryRow";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { companyInfo } from "@/data/companyInfo";

// Smooth Animated Number Counter Component
function AnimatedCounter({ value, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return (
    <span className="font-numeric">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#09172E] text-white min-h-[calc(100dvh-73px)] flex items-center py-12 sm:py-16 lg:py-10 border-b border-[#E8E6E0]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
            {/* Left: Refined Headline & Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div>
                <p className="animate-hero-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-[#C29B38] mb-3">
                  Direct Workshop Craftsmanship • Mumbai
                </p>
                <h1 className="animate-hero-fade-up-1 font-serif text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold text-white tracking-tight leading-[1.14]">
                  Solid Wood Furniture, <br className="hidden sm:inline" />
                  <span className="font-normal italic text-[#D8B75F]">Crafted for Your Home.</span>
                </h1>
              </div>

              <p className="animate-hero-fade-up-2 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Tailored teakwood beds, luxury sofas, wooden mandirs, and custom home interior carpentry — built to your room dimensions directly in our workshop with zero retail markups.
              </p>

              {/* Standard Furniture CTA Buttons with Micro-Animations */}
              <div className="animate-hero-fade-up-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl btn-gold-shimmer text-[#09172E] font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <a
                  href={companyInfo.whatsapp.createUrl(
                    "Hello Gauri Enterprises, I would like to ask about custom furniture and home interiors."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider border border-white/20 hover:border-emerald-400/40 transition-all active:scale-95 group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-115 transition-transform duration-200" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Animated Numbers Social Proof Row */}
              <div className="animate-hero-fade-up-4 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6 text-center lg:text-left">
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    <AnimatedCounter value={25} suffix="+" />
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">Years Joinery</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    <AnimatedCounter value={3500} suffix="+" />
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">Homes Furnished</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    <AnimatedCounter value={10} suffix="-Year" />
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">Wood Warranty</p>
                </div>
              </div>
            </div>

            {/* Right: Flagship Furniture Presentation & Placement */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end animate-hero-image">
              <Link
                href="/products/sofa-royal-chesterfield"
                className="group relative block w-full max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0E2445] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] transition-all"
              >
                <Image
                  src="/images/furnitur_sample.jpg"
                  alt="Royal Chesterfield Sofa in Teak Wood"
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09172E]/95 via-[#09172E]/25 to-transparent opacity-90" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#09172E]/90 backdrop-blur-md border border-white/15 text-white shadow-lg flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-numeric font-bold text-xs sm:text-sm text-white">4.9</span>
                  <span className="text-white/30">•</span>
                  <span className="text-[11px] text-slate-300 font-medium hidden xs:inline">3,500+ Homes</span>
                </div>

                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>100% Solid Teak</span>
                </div>

                {/* Floating Product Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#09172E]/92 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3 shadow-xl group-hover:border-[#C29B38]/50 transition-all">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C29B38] block truncate">
                      Featured Masterpiece
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-base font-serif font-bold text-white truncate mt-0.5">
                      Royal Chesterfield Velvet Sofa
                    </h3>
                    <p className="font-price text-xs sm:text-sm font-bold text-slate-200 mt-0.5">
                      ₹38,000 <span className="font-numeric font-normal text-slate-400 line-through ml-1.5 text-[11px] sm:text-xs">MRP ₹48,000</span>
                    </p>
                  </div>

                  <span className="px-3.5 py-2 rounded-xl bg-white text-[#09172E] text-xs font-bold flex items-center gap-1 shrink-0 group-hover:bg-[#C29B38] transition-colors shadow-sm">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURATED HORIZONTAL PRODUCT SHOWCASE ================= */}
      <section className="py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Horizontal Category Rows */}
          {selectedCategory === "all" ? (
            <>
              {/* Featured Showcase Categories */}
              {["sofa", "bed", "mandir", "dining"].map((catId) => {
                const catObj = categories.find((c) => c.id === catId);
                const catProducts = products.filter((p) => p.category === catId);
                if (!catObj || catProducts.length === 0) return null;

                return (
                  <HorizontalCategoryRow
                    key={catId}
                    category={catObj}
                    products={catProducts}
                    totalCount={catProducts.length}
                  />
                );
              })}
            </>
          ) : (
            <>
              {(() => {
                const catObj =
                  categories.find((c) => c.id === selectedCategory) || {
                    id: selectedCategory,
                    name: selectedCategory.toUpperCase(),
                    description: "Handcrafted direct workshop pieces.",
                  };
                const catProducts = products.filter(
                  (p) => p.category === selectedCategory
                );

                return (
                  <HorizontalCategoryRow
                    key={selectedCategory}
                    category={catObj}
                    products={catProducts}
                    totalCount={catProducts.length}
                  />
                );
              })()}
            </>
          )}
        </div>
      </section>

      {/* ================= BESPOKE INTERIOR INVITATION ================= */}
      <section className="py-16 bg-[#09172E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D8B75F]">
                Architectural Joinery & Interiors
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Furnishing an Entire Apartment or Residence?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
                Consult with our master craftsmen on floor layouts, material selections, and turnkey
                interiors.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={companyInfo.whatsapp.createUrl(
                  "Hello Gauri Enterprises, I would like to discuss a complete home interior project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-white text-[#09172E] font-medium text-xs tracking-wider uppercase text-center shadow-sm hover:bg-slate-100 transition-colors"
              >
                Inquire on WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs tracking-wider uppercase text-center border border-white/20 transition-colors"
              >
                Call Us: <span className="font-numeric font-semibold">{companyInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
              Verified Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8E6E0] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-serif text-xs font-bold text-slate-800">{p.name}</h4>
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    &ldquo;Remarkable woodwork precision. The teak finish and delivery service exceeded
                    expectations.&rdquo;
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F0EEEA] flex items-center justify-between text-[11px] text-slate-400">
                  <span>Homeowner in Mumbai</span>
                  <span className="text-emerald-700 font-medium">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
