"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Sparkles,
  ShoppingBag,
  ArrowUpDown,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CategoryBar from "@/components/CategoryBar";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialId = searchParams.get("id");

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(() => {
    if (initialId) {
      return products.find((p) => p.id === initialId) || null;
    }
    return null;
  });

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.tag && p.tag.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-16">
      {/* Top Banner */}
      <div className="bg-[#0B2545] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <ShoppingBag className="w-3.5 h-3.5" /> Complete Furniture Catalog
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Our Handcrafted Collections
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Discover custom teakwood beds, luxury sofas, dining sets, modular wardrobes, and pooja
            mandirs crafted with precision.
          </p>
        </div>
      </div>

      {/* Sticky Category Bar */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => setSelectedCategory(id)}
      />

      {/* Filter and Search Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sofas, beds, mandir, wardrobes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
            />
          </div>

          {/* Sort Dropdown & Product Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong className="text-slate-800">{filteredAndSortedProducts.length}</strong>{" "}
              products
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-medium focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="default">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-2xl border border-slate-200">
              <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-slate-700">No furniture matched</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with a different term or reset your category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Lightbox Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0B2545]" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
