import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { companyInfo } from "@/data/companyInfo";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
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
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/logo.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FurnitureStore",
      "@id": "https://gaurienterprises.vercel.app/#organization",
      name: "Gauri Enterprises",
      alternateName: "Gauri Enterprises Premium Furniture & Interiors",
      url: "https://gaurienterprises.vercel.app/",
      logo: "https://gaurienterprises.vercel.app/images/logo.png",
      image: "https://gaurienterprises.vercel.app/images/logo.png",
      description: companyInfo.shortDesc,
      telephone: companyInfo.phone,
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address,
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.0760",
        longitude: "72.8777",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "20:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "10:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        companyInfo.socials.instagram,
        companyInfo.socials.youtube,
        companyInfo.socials.facebook,
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://gaurienterprises.vercel.app/#website",
      url: "https://gaurienterprises.vercel.app/",
      name: "Gauri Enterprises",
      description: "Premium Furniture & Bespoke Interiors",
      publisher: {
        "@id": "https://gaurienterprises.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAFAF8] text-[#0A1628] antialiased selection:bg-[#C29B38]/20 selection:text-[#09172E]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
