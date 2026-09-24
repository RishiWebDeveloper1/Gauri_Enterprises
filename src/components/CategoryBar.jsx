"use client";

import React from "react";
import {
  LayoutGrid,
  Armchair,
  Bed,
  DoorClosed,
  Sparkles,
  UtensilsCrossed,
  Tv,
  ShieldCheck,
  Package,
} from "lucide-react";
import { categories } from "@/data/categories";

const iconMap = {
  LayoutGrid,
  Armchair,
  Bed,
  DoorClosed,
  Sparkles,
  UtensilsCrossed,
  Tv,
  ShieldCheck,
  Package,
};

export default function CategoryBar({ selectedCategory, onSelectCategory }) {
  return (
    <div className="w-full bg-white/95 border-y border-[#E8E6E0] sticky top-[65px] sm:top-[73px] z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || LayoutGrid;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0 ${
                  isSelected
                    ? "bg-[#09172E] text-white border border-[#09172E] shadow-xs"
                    : "bg-[#FAFAF8] text-slate-600 hover:bg-slate-100 hover:text-[#09172E] border border-[#E8E6E0]"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-[#D8B75F]" : "text-[#9E7D2B]"
                  }`}
                />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
