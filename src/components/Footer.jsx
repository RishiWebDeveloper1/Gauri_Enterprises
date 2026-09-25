"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "./SocialIcons";
import BrandLogo from "./BrandLogo";
import { companyInfo } from "@/data/companyInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051329] text-slate-300 relative border-t-2 border-amber-500/30 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-4">
              Gauri Enterprises is your trusted workshop & showroom for handcrafted teakwood
              furniture, luxury bedroom suites, ergonomic sofas, pooja mandirs, and bespoke interior
              architectural installations.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Follow Us:
              </span>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-serif">
              Categories
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/products?category=bed"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Designer Beds
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sofa"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Luxury Sofas
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=wardrobe"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Modular Wardrobes
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=safety-doors"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Teak Wood Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=safety-doors"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Safety Grill Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=mandir"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Pooja Mandirs
                </Link>
              </li>
            </ul>
          </div>

          {/* Tables & Units Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-serif">
              Tables & Media
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/products?category=dining"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Dining Tables (Marble & Teak)
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=dining"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Dressing Tables
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=dining"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Executive Study Desks
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=tv-unit"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Fluted TV Wall Units
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=storage"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Shoe Racks & Benches
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=storage"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" /> Designer Bookshelves
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-serif">
              Workshop Contact
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="hover:text-amber-300 font-numeric font-semibold"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-amber-300 truncate"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-400">{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4 text-center text-xs text-slate-400 bg-[#030c1a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© <span className="font-numeric">{currentYear}</span> Gauri Enterprises. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/about" className="hover:text-amber-300 transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/help" className="hover:text-amber-300 transition-colors">
              Help & FAQ
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-amber-300 transition-colors">
              Contact
            </Link>
            <span>•</span>
            <a
              href={`https://${companyInfo.domain}`}
              className="text-amber-400/80 hover:text-amber-300"
            >
              {companyInfo.domain}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
