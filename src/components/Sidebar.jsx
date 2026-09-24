"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Home,
  ShoppingBag,
  Info,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  ChevronRight,
  MapPin,
  Clock,
  Sparkles,
  Armchair,
  Bed,
  DoorClosed,
  UtensilsCrossed,
  Tv,
  ShieldCheck,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "./SocialIcons";
import BrandLogo from "./BrandLogo";
import { companyInfo } from "@/data/companyInfo";

const categoryShortcuts = [
  { label: "Luxury Sofas", href: "/products?category=sofa", icon: Armchair },
  { label: "Designer Beds", href: "/products?category=bed", icon: Bed },
  { label: "Wardrobes", href: "/products?category=wardrobe", icon: DoorClosed },
  { label: "Pooja Mandir", href: "/products?category=mandir", icon: Sparkles },
  { label: "Dining Tables", href: "/products?category=dining", icon: UtensilsCrossed },
  { label: "TV Units & Panels", href: "/products?category=tv-unit", icon: Tv },
  { label: "Safety Doors", href: "/products?category=safety-doors", icon: ShieldCheck },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  // Close on Escape key and prevent background scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "All Furniture", href: "/products", icon: ShoppingBag },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Help & Reviews", href: "/help", icon: HelpCircle },
    { name: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-[#06152B]/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        aria-label="Mobile Navigation Sidebar"
        className={`fixed top-0 left-0 bottom-0 z-50 w-[88vw] max-w-sm bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#09172E] text-white flex items-center justify-between">
          <BrandLogo variant="light" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {/* Main Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-3">
              Navigation
            </p>
            <nav className="space-y-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-[#09172E] text-white shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#09172E]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#D8B75F]" : "text-slate-400"}`} />
                    <span>{item.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto text-[#D8B75F]" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Popular Categories */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-3">
              Furniture Categories
            </p>
            <div className="grid grid-cols-1 gap-1">
              {categoryShortcuts.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 rounded-lg hover:bg-amber-50/70 hover:text-[#0B2545] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5 text-[#B88E1F]" />
                      {cat.label}
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-300" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{companyInfo.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{companyInfo.workingHours}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`tel:${companyInfo.phoneRaw}`} className="font-semibold text-slate-800 hover:underline">
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
          <a
            href={companyInfo.whatsapp.createUrl("Hello Gauri Enterprises, I'm reaching out from your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#09172E] text-white font-medium text-xs tracking-wider uppercase shadow-xs border border-[#C29B38]/40 hover:bg-[#050E1C] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white text-slate-600 hover:text-pink-600 shadow-xs border border-slate-200 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={companyInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-full bg-white text-slate-600 hover:text-red-600 shadow-xs border border-slate-200 transition-colors"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={companyInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white text-slate-600 hover:text-blue-600 shadow-xs border border-slate-200 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
