import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Hammer,
  HeartHandshake,
  CheckCircle2,
  TreePine,
  Factory,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export const metadata = {
  title: "About Us | Heritage & Leadership",
  description:
    "Learn about Gauri Enterprises, our inspirational leadership, decades of woodcraft experience, and commitment to custom luxury interiors.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Gauri Enterprises",
    description: "Learn about Gauri Enterprises, our master craftsmanship and heritage.",
    url: "https://gaurienterprises.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Editorial Hero Header */}
      <section className="bg-[#09172E] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8B75F]">
            Our Heritage & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            The Story of Gauri Enterprises
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            Founded with a vision to preserve timeless teakwood carpentry while delivering bespoke,
            architectural home interiors directly from our artisan workshop.
          </p>
        </div>
      </section>

      {/* Inspirational Leader Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl border border-[#E8E6E0] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            {/* Leader Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80 aspect-3/4 rounded-2xl overflow-hidden shadow-md border border-[#E8E6E0] bg-[#F4F3EF]">
                <Image
                  src="/images/boss_image.jpg"
                  alt="Ramchandra Vishwakarma - Founder & Master Craftsman"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09172E] to-transparent p-5 text-white text-center">
                  <p className="font-bold text-base tracking-wide">Ramchandra Vishwakarma</p>
                  <p className="text-xs text-[#D8B75F] font-medium mt-0.5">Founder & Master Craftsman</p>
                </div>
              </div>
            </div>

            {/* Leadership Story */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
                Visionary Leadership
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#09172E] leading-tight">
                Two Decades of Dedication to Real Woodcraft
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                At the helm of our journey is our founder, whose lifelong devotion to the ancient
                traditions of Indian woodwork and modern interior architecture has established Gauri
                Enterprises as a trusted name in luxury home furnishings.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                With a career spanning decades, his leadership philosophy centers around precision,
                honesty, and direct collaboration with homeowners. Under his mentorship, every
                carpenter, polisher, and upholsterer at our workshop takes personal pride in the
                finish, durability, and ergonomic comfort of every piece produced.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our workshop eliminates retail markups, allowing homeowners to acquire heirloom-grade
                teakwood beds, custom couches, and sacred pooja mandirs crafted from seasoned logs.
              </p>

              {/* Action Links */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={companyInfo.whatsapp.createUrl("Hello, I would like to consult with Gauri Enterprises regarding custom woodwork.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#09172E] hover:bg-[#050E1C] text-white text-xs font-medium uppercase tracking-wider shadow-xs border border-[#C29B38]/40 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAFAF8] hover:bg-slate-100 text-slate-800 text-xs font-medium uppercase tracking-wider border border-[#E8E6E0] transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>Call <span className="font-numeric font-medium">{companyInfo.phone}</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Principles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7D2B]">
            Our Standards
          </span>
          <h3 className="text-2xl font-bold text-[#09172E] mt-1">
            Built for Generations, Not Seasons
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E8E6E0] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] text-[#9E7D2B] flex items-center justify-center border border-[#E8E6E0]">
              <Hammer className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#09172E]">Interlocking Joinery</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We employ mortise-and-tenon and double-doweled wood joinery that lasts for decades, far
              outperforming glued flatpack alternatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8E6E0] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] text-[#9E7D2B] flex items-center justify-center border border-[#E8E6E0]">
              <TreePine className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#09172E]">Kiln-Seasoned Teak</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every timber plank of Burma Teak, CP Teak, and Marine Plywood is certified and kiln-dried
              to resist borer infestation and expansion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8E6E0] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] text-[#9E7D2B] flex items-center justify-center border border-[#E8E6E0]">
              <Factory className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#09172E]">Open Workshop Policy</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              You are welcome to visit our workshop at any stage of manufacturing to inspect the raw
              timber framing and internal foam before final upholstery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
