import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { companyInfo } from "@/data/companyInfo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(companyInfo.canonicalUrl),
  title: {
    default: "Gauri Enterprises | Premium Furniture & Interiors",
    template: "%s | Gauri Enterprises",
  },
  description:
    "Explore luxury teakwood furniture, modern bedroom sets, handcrafted sofas, pooja mandirs, and custom bespoke interiors from Gauri Enterprises. Direct workshop pricing with Pan-India delivery.",
  keywords: [
    "Gauri Enterprises",
    "premium furniture",
    "teak wood sofa",
    "hydraulic storage bed",
    "wooden pooja mandir",
    "custom interiors",
    "luxury furniture Mumbai",
    "modular wardrobes",
    "dining table sets",
    "bespoke carpentry",
  ],
  authors: [{ name: "Gauri Enterprises" }],
  creator: "Gauri Enterprises",
  publisher: "Gauri Enterprises",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: companyInfo.canonicalUrl,
    title: "Gauri Enterprises | Premium Furniture & Interiors",
    description:
      "Transform your spaces with bespoke luxury furniture, solid teak woodwork, and custom home interior solutions directly from our artisan workshop.",
    siteName: "Gauri Enterprises",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Gauri Enterprises - Premium Furniture & Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gauri Enterprises | Premium Furniture & Interiors",
    description:
      "Transform your spaces with bespoke luxury furniture and custom home interior solutions.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/Logo_favicon3.png",
    shortcut: "/images/Logo_favicon.png",
    apple: "/images/Logo_favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#FAFAFC] text-[#0B192C] antialiased selection:bg-[#D4AF37]/30 selection:text-[#0B2545]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
