import Link from "next/link";
import Image from "next/image";
import { Home, ShoppingBag, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FAFAFC]">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg">
        <div className="relative w-40 h-32 mx-auto">
          <Image
            src="/images/error_page.jpg"
            alt="Page Not Found"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-[#0B2545]">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2545] text-white text-xs font-bold shadow-sm hover:bg-[#07172B] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-amber-300" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#B88E1F]" />
            <span>Browse Furniture</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
