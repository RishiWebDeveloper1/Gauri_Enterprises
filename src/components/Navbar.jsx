"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  PhoneCall,
  MessageCircle,
  Search,
  Sparkles,
  ShoppingBag,
  Info,
  HelpCircle,
  Clock,
  MapPin,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import Sidebar from "./Sidebar";
import { companyInfo } from "@/data/companyInfo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Furniture", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Help & Reviews", href: "/help" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#051329] text-white/90 text-xs py-2 px-4 sm:px-8 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-medium text-[11px]">
              <Sparkles className="w-3 h-3" /> Factory Direct
            </span>
            <span className="text-slate-300 hidden md:inline">
              Custom-built luxury furniture & 3D interior design consultations.
            </span>
            <span className="text-slate-300 md:hidden">
              Bespoke furniture at workshop prices.
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] text-slate-300">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>{companyInfo.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-amber-200/90 font-medium">
              Pan-India Delivery & Assembly
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5"
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#0B2545] font-semibold bg-amber-50/80 text-amber-900 border-b-2 border-[#D4AF37]"
                      : "text-slate-600 hover:text-[#0B2545] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Catalog quick link */}
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#0B2545] rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
              title="Browse Catalog"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#B88E1F]" />
              <span>Browse Catalog</span>
            </Link>

            {/* WhatsApp CTA Button */}
            <a
              href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I would like to inquire about your furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#14498C] text-white hover:from-[#07172B] hover:to-[#0B2545] text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md border border-amber-400/30 group active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden font-semibold">Order</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Mobile Menu"
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#0B2545] transition-colors border border-slate-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Slide-out Sidebar Drawer */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
