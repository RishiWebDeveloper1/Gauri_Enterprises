import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  Ruler,
  Layers,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Star,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Award,
} from "lucide-react";
import { getProductById, getRelatedProducts, getAllProducts } from "@/services/productService";
import { companyInfo } from "@/data/companyInfo";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  const all = await getAllProducts();
  return all.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.name} | Gauri Enterprises`;
  const description = product.description.slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${companyInfo.domain}/products/${product.id}`,
      images: [
        {
          url: product.images[0] || "/images/logo.png",
          width: 1200,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.images[0] || "/images/logo.png"],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category, product.id, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images?.map((img) => `https://${companyInfo.domain}${img}`) || [],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Gauri Enterprises",
    },
    offers: {
      "@type": "Offer",
      url: `https://${companyInfo.domain}/products/${product.id}`,
      priceCurrency: "INR",
      price: product.price,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Gauri Enterprises",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount || 15,
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Breadcrumb Navigation Bar */}
      <div className="border-b border-[#E8E6E0] bg-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-[#09172E] transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <Link href="/products" className="hover:text-[#09172E] transition-colors shrink-0">
            Collections
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-[#09172E] transition-colors capitalize shrink-0"
          >
            {product.category.replace("-", " ")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-800 truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Interactive Product Section (Client Component) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <ProductDetailClient product={product} />
      </div>

      {/* Workshop Craftsmanship Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-[#E8E6E0]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C29B38] flex items-center justify-center border border-amber-200/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#09172E]">
              10-Year Structural Integrity
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every joint is crafted with mortise-and-tenon interlocking woodwork, sealed against
              moisture and termite damage.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C29B38] flex items-center justify-center border border-amber-200/50">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#09172E]">
              White Glove In-Home Setup
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Delivered in cushioned wooden crates and assembled inside your room by our master
              carpenters.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C29B38] flex items-center justify-center border border-amber-200/50">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#09172E]">
              100% Bespoke Customization
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Need custom dimensions to fit an alcove, or specific fabric shades? Our workshop tailors
              every piece to your exact blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-[#E8E6E0]">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29B38]">
                Complementary Pieces
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#09172E] mt-1">
                You May Also Admire
              </h3>
            </div>
            <Link
              href={`/products?category=${product.category}`}
              className="text-xs font-semibold text-[#09172E] hover:text-[#C29B38] transition-colors hidden sm:inline"
            >
              View All {product.category} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => {
              const relFormatted = new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(rel.price);

              return (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="editorial-card rounded-2xl overflow-hidden group flex flex-col justify-between"
                >
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <Image
                      src={rel.images[0]}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#0E2445] transition-colors">
                        {rel.name}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="font-price font-bold text-sm sm:text-base text-[#09172E] tracking-tight">
                        {relFormatted}
                      </span>
                      <span className="text-[11px] font-semibold text-[#C29B38]">Explore →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
