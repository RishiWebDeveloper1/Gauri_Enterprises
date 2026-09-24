"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  PhoneCall,
  MessageCircle,
  ShoppingBag,
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
    { name: "Collections", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Help & Reviews", href: "/help" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Quiet Utility Bar */}
      <div className="bg-[#050E1C] text-slate-300 text-[11px] py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D8B75F] font-semibold uppercase tracking-widest text-[10px]">
              Bespoke Workshop
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">
              Custom teakwood furniture & architectural interiors
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#D8B75F]" />
              <span>{companyInfo.phone}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline text-slate-300 font-light">
              Pan-India In-Home Setup
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8E6E0] py-3"
            : "bg-white border-b border-[#E8E6E0] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors py-1 ${
                    isActive
                      ? "text-[#09172E] border-b-2 border-[#C29B38]"
                      : "text-slate-600 hover:text-[#09172E]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#09172E] transition-colors"
              title="Catalog"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Catalog</span>
            </Link>

            {/* WhatsApp Quick Action */}
            <a
              href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I want to ask about furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#09172E] hover:bg-[#050E1C] text-white text-xs font-semibold uppercase tracking-wider shadow-xs border border-[#C29B38]/40 transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
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
