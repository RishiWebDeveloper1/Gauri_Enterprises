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
  CheckCircle,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  Building2,
  Award,
  Users,
} from "lucide-react";
import CategoryBar from "@/components/CategoryBar";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { reviews } from "@/data/reviews";
import { companyInfo } from "@/data/companyInfo";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#051329] via-[#0B2545] to-[#081B33] text-white overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Premium Furniture & Bespoke Interiors</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Where Master Craftsmanship Meets{" "}
                <span className="text-gold-gradient font-extrabold">
                  Timeless Luxury.
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                Elevate your home with custom-crafted teakwood beds, designer sofas, sacred pooja
                mandirs, and modular interiors — delivered straight from our artisan workshop at direct
                prices.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C566] text-[#0B2545] font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-102 active:scale-95"
                >
                  <span>Explore Furniture Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={companyInfo.whatsapp.createUrl(
                    "Hello Gauri Enterprises, I would like to consult with an interior expert about custom furniture."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>

              {/* Social Proof Highlights */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-300">
                    25+
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300">Years of Woodcraft</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-300">
                    3,500+
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300">Homes Transformed</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-300">
                    100%
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300">Genuine Solid Wood</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-[#0F284B] aspect-4/3 sm:aspect-16/11">
                  <Image
                    src="/images/furnitur_sample.jpg"
                    alt="Luxury Sofa Collection by Gauri Enterprises"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-transparent to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#06152B]/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                        Featured Piece
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white">
                        Royal Chesterfield Velvet Sofa
                      </h4>
                      <p className="text-xs text-slate-300">Starting from ₹38,000</p>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(products[0])}
                      className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#0B2545] font-bold text-xs flex items-center gap-1 shadow-sm"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Floating Trust Pill */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-[#0B2545] p-3.5 rounded-2xl shadow-xl border border-amber-200 hidden sm:flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                      10-Year Warranty
                    </p>
                    <p className="text-[11px] text-slate-500">Termite & Borer Proof</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY BROWSER BAR ================= */}
      <section id="catalog" className="scroll-mt-24">
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => setSelectedCategory(id)}
        />
      </section>

      {/* ================= FEATURED CATALOG GRID ================= */}
      <section className="py-12 sm:py-16 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B88E1F]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Showroom Collection</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B2545] mt-1">
                Handcrafted Furniture & Interiors
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Showing {filteredProducts.length} premium design(s). Select any item to view custom
                measurements, fabric choices, or order directly via WhatsApp.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2545] hover:text-[#B88E1F] transition-colors"
            >
              <span>View Complete 2026 Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-base font-semibold text-slate-700">
                No products found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-3 px-4 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-semibold"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= BESPOKE WOODWORK PROMISE ================= */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88E1F]">
              The Gauri Enterprises Distinction
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B2545] mt-1">
              Why Discerning Homeowners Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Unlike mass-manufactured flatpack furniture, every piece at Gauri Enterprises is built
              using real wood joinery and customized to the exact millimeter of your room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-amber-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-amber-300 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0B2545]">
                Kiln-Seasoned Teakwood
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Treated chemically to resist termites, borer infestation, and expansion due to humid
                monsoons.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-amber-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-amber-300 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0B2545]">
                Direct Workshop Pricing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Order directly from our manufacturing unit without retail markups or distributor
                margins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-amber-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-amber-300 flex items-center justify-center">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0B2545]">
                100% Bespoke Customization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modify dimensions, headboard heights, fabric textures, and polish tones to match your
                interior decor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-amber-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-amber-300 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#0B2545]">
                White Glove Delivery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safely delivered in protective wooden crates and assembled inside your home by expert
                technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUSTOM INTERIOR BANNER ================= */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#0B2545] to-[#14498C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                End-to-End Residential & Commercial Interiors
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
                Planning a 1BHK, 2BHK, 3BHK or Villa Interior?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Send us your floor plan or room dimensions. Our master designers will craft complete 3D
                visualizations and custom woodwork packages tailored to your budget.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={companyInfo.whatsapp.createUrl(
                  "Hello Gauri Enterprises, I would like to get a quote for complete home interior and custom woodwork."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" /> Share Floor Plan on WhatsApp
              </a>

              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center border border-white/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" /> Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88E1F]">
              Client Stories & Trust
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B2545] mt-1">
              What Our Happy Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Authentic feedback from homeowners who decorated their living rooms and bedrooms with
              Gauri Enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{rev.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-800">{rev.name}</p>
                    <p className="text-[11px] text-slate-400">{rev.location}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL LIGHTBOX ================= */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
