"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, ArrowUpDown, ShoppingBag } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import CategoryBar from "@/components/CategoryBar";
import { getAllProducts } from "@/services/productService";

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Scalable async data fetch (ready for future backend API)
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await getAllProducts({
        category: selectedCategory,
        search: searchQuery,
        sort: sortBy,
      });
      setProductsList(data);
      setIsLoading(false);
    }
    loadData();
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Editorial Header */}
      <div className="bg-[#09172E] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D8B75F]">
            Workshop Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Handcrafted Furniture Collection
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-light">
            Every piece is built to order using solid teakwood and architectural joinery.
          </p>
        </div>
      </div>

      {/* Category Bar */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => setSelectedCategory(id)}
      />

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-4 rounded-2xl border border-[#E8E6E0] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search beds, sofas, mandir, wardrobes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E0] text-xs focus:outline-none focus:border-[#C29B38] transition-colors"
            />
          </div>

          {/* Product Count & Sort */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <span className="text-xs text-slate-500">
              Showing <strong className="text-slate-800">{productsList.length}</strong> items
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E6E0] text-slate-700 font-medium focus:outline-none focus:border-[#C29B38]"
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
          {isLoading ? (
            <div className="py-20 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-[#09172E]" />
            </div>
          ) : productsList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productsList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-2xl border border-[#E8E6E0]">
              <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-slate-700">No furniture matched</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with another keyword or resetting the filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#09172E] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-[#09172E]" />
        </div>
      }
    >
      <ProductsCatalogContent />
    </Suspense>
  );
}
