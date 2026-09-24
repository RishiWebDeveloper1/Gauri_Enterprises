import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Users,
  Building,
  CheckCircle,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Hammer,
  HeartHandshake,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export const metadata = {
  title: "About Us | Heritage & Leadership",
  description:
    "Learn about Gauri Enterprises, our inspirational leadership, decades of woodcraft experience, and commitment to custom luxury interiors.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-16">
      {/* Hero Header */}
      <section className="bg-[#0B2545] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Our Heritage & Craftsmanship
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            About Gauri Enterprises
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Transforming spaces into timeless masterpieces. For over two decades, we have shaped raw
            seasoned timber into the finest bespoke furniture and luxury home interiors.
          </p>
        </div>
      </section>

      {/* Inspirational Leader Showcase (from .bin/html/about.html) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            {/* Leader Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80 aspect-3/4 rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200/60 bg-slate-100">
                <Image
                  src="/images/boss_image.jpg"
                  alt="Ramchandra Vishwakarma - Founder & Inspirational Leader"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06152B] to-transparent p-4 text-white text-center">
                  <p className="font-serif font-bold text-base">Ramchandra Vishwakarma</p>
                  <p className="text-[11px] text-amber-300">Master Craftsman & Founder</p>
                </div>
              </div>
            </div>

            {/* Leadership Story */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#B88E1F]">
                <Award className="w-4 h-4" />
                <span>Meet Our Inspirational Leader</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] leading-tight">
                A Visionary Journey Built on Dedication & Precision
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Welcome to our world, where innovation meets passion! At the helm of our journey is
                our founder, whose lifelong devotion to the ancient craft of Indian woodwork and
                modern architectural joinery has established Gauri Enterprises as a symbol of
                uncompromising quality.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With decades of hands-on experience, his leadership philosophy centers on
                collaboration, empowerment, and honest artisan craftsmanship. Under his mentorship,
                every carpenter and interior engineer at our workshop takes personal pride in the
                finish, durability, and elegance of each piece that leaves our facility.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Beyond the workshop, our mission is simple: to bring authentic teakwood luxury and
                tailor-made furniture directly to homeowners without the inflated commissions of
                retail showrooms.
              </p>

              {/* Direct Connect */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={companyInfo.whatsapp.createUrl("Hello, I would like to consult with Gauri Enterprises management.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Connect with our Team
                </a>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#B88E1F]" /> Call {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Principles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#0B2545]">Authentic Joinery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We employ mortise-and-tenon and double-doweled wood joinery that lasts for generations,
              far outperforming staple-and-glue factory alternatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#0B2545]">Verified Materials</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every plank of Burma and CP Teak, HDHMR board, and BWP marine plywood is certified and
              kiln-seasoned for moisture resistance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#0B2545]">Transparent Relationships</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You are welcome to visit our workshop at any stage of production to see the internal
              woodwork, framing, and cushioning firsthand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
