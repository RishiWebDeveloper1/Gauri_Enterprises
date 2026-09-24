"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Layers,
  PhoneCall,
  MessageCircle,
  Star,
  ChevronRight,
  Building2,
  SlidersHorizontal,
} from "lucide-react";
import CategoryBar from "@/components/CategoryBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { companyInfo } from "@/data/companyInfo";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#09172E] text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Subtle architectural ambient gradient */}
        <div className="absolute inset-0 bg-radial from-[#143566]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Refined Headline & Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-amber-300/30 text-[#D8B75F] text-[11px] font-semibold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Teakwood Furniture & Interiors</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Solid Wood Craftsmanship,{" "}
                <span className="text-champagne-gradient font-normal italic">
                  Made for Your Home.
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Tailored teakwood beds, luxury sofas, wooden mandirs, and custom wardrobes made in our
                own workshop and delivered directly to your doorstep.
              </p>

              {/* Clean CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#09172E] font-medium text-xs tracking-wider uppercase shadow-md hover:bg-slate-100 transition-all active:scale-98"
                >
                  <span>Explore Furniture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={companyInfo.whatsapp.createUrl(
                    "Hello Gauri Enterprises, I would like to ask about furniture and home interiors."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs tracking-wider uppercase border border-white/20 transition-all active:scale-98"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Quiet Social Proof */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D8B75F]">25+</p>
                  <p className="text-[11px] text-slate-400 tracking-wide uppercase mt-0.5">Years of Joinery</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D8B75F]">3,500+</p>
                  <p className="text-[11px] text-slate-400 tracking-wide uppercase mt-0.5">Homes Furnished</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D8B75F]">10-Year</p>
                  <p className="text-[11px] text-slate-400 tracking-wide uppercase mt-0.5">Wood Warranty</p>
                </div>
              </div>
            </div>

            {/* Right: Featured Piece Showcase */}
            <div className="lg:col-span-5">
              <Link
                href="/products/sofa-royal-chesterfield"
                className="group relative block rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0E2445] aspect-4/3 sm:aspect-16/11"
              >
                <Image
                  src="/images/furnitur_sample.jpg"
                  alt="Royal Chesterfield Sofa"
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09172E] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#09172E]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8B75F]">
                      Featured Masterpiece
                    </span>
                    <h3 className="text-sm font-serif font-bold text-white">
                      Royal Chesterfield Velvet Sofa
                    </h3>
                    <p className="text-xs text-slate-300">₹38,000</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium flex items-center gap-1 group-hover:bg-white group-hover:text-[#09172E] transition-colors">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY BROWSER BAR ================= */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => setSelectedCategory(id)}
      />

      {/* ================= EDITORIAL CATALOG GRID ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8E6E0]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
                Curated Collection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
                Handcrafted Living & Bedroom Pieces
              </h2>
            </div>

            <Link
              href="/products"
              className="text-xs font-semibold text-[#09172E] hover:text-[#9E7D2B] transition-colors inline-flex items-center gap-1"
            >
              <span>Explore All {products.length} Designs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKSHOP EXCELLENCE ================= */}
      <section className="py-16 bg-white border-y border-[#E8E6E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
              The Gauri Heritage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
              Craftsmanship Built Without Compromise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E0]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9E7D2B] flex items-center justify-center border border-[#E8E6E0]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#09172E]">
                Kiln-Seasoned Teak Timber
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chemically treated against borer insects and kiln-dried to less than 12% moisture
                content for zero warping.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E0]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9E7D2B] flex items-center justify-center border border-[#E8E6E0]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#09172E]">
                Workshop Direct Transparency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct manufacturing prices without showroom distributor markups. Homeowners are
                welcome to inspect production in person.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E0]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#9E7D2B] flex items-center justify-center border border-[#E8E6E0]">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#09172E]">
                Made-to-Measure Customization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every bed frame, sofa length, and wardrobe depth is crafted specifically for your room
                dimensions.
              </p>
            </div>
          </div>
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
                Call Us: {companyInfo.phone}
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
