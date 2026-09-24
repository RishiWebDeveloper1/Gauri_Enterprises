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
    <div className="w-full bg-white border-y border-slate-200/80 sticky top-[65px] sm:top-[73px] z-30 shadow-xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || LayoutGrid;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0 ${
                  isSelected
                    ? "bg-[#0B2545] text-amber-300 shadow-sm border border-amber-400/40"
                    : "bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-[#0B2545] border border-transparent"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-amber-300" : "text-[#B88E1F]"
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
