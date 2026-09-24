# Gauri Enterprises - Premium Furniture & Interiors

A high-performance, modern Next.js web application for **Gauri Enterprises**, handcrafted to showcase luxury teakwood furniture, modular wardrobes, bespoke sofas, pooja mandirs, and turnkey interior design solutions.

Hosted and configured for **[gaurienterprises.vercel.app](https://gaurienterprises.vercel.app)**.

---

## 🌟 Highlights & Features

- **Brand Theme & Color Palette**: Styled around the official logo (`.bin/image/logo.png`):
  - **Royal Sapphire & Deep Navy**: `#051329` / `#0B2545` / `#0E356A`
  - **Champagne & Artisan Gold Accents**: `#D4AF37` / `#E6C566` / `#B88E1F`
  - **Serif & Clean Geometric Typography**: Playfair Display & Plus Jakarta Sans
- **Dynamic Navbar & Header**:
  - Sticky glassmorphic navigation bar with scroll transparency detection.
  - Active route indicators across Home, Furniture Catalog, About Us, Help & Reviews, and Contact.
  - Direct WhatsApp order CTA and catalog shortcut.
- **Dynamic Mobile Sidebar (Drawer)**:
  - Responsive slide-out navigation with smooth backdrop blur.
  - Quick category shortcuts with Lucide icons (Sofas, Beds, Mandir, Wardrobes, Dining, TV Units, Doors).
  - Workshop contact details & social channels (Instagram, YouTube, Facebook).
- **Interactive Furniture Catalog (`/products`)**:
  - Live category filters and instantaneous search input.
  - Sorting by price (Low to High, High to Low) and top ratings.
  - Quick View modal with multiple image gallery preview, dimensions, wood type, and warranty specifications.
- **Direct 1-Click WhatsApp Ordering**:
  - Pre-populates product details, customized measurements, name, and address to `+91 9819213473`.
- **Pages Converted & Enhanced from `.bin`**:
  - `/` — Homepage with Hero Showcase, Live Category Bar, Product Grid, Workshop Heritage, and Client Testimonials.
  - `/products` — Full searchable and filterable furniture showroom.
  - `/about` — Inspirational Founder Story (featuring `boss_image.jpg`), craftsmanship heritage, and core values.
  - `/contact` — Interactive quotation form with direct WhatsApp submission, workshop address, and operating hours.
  - `/help` — Help center with search, FAQ accordion, and verified buyer reviews.
- **SEO & Vercel Optimized**:
  - OpenGraph cards, Twitter cards, metadata base `https://gaurienterprises.vercel.app`.
  - Dynamic `sitemap.xml` and `robots.txt`.
  - Configured `vercel.json` with security headers and image asset caching.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack & React Compiler)
- **Styling**: Tailwind CSS v4 with custom luxury design tokens
- **Icons**: `lucide-react` + custom brand social icons
- **Fonts**: Google Fonts (`Playfair Display`, `Plus Jakarta Sans`) via `next/font/google`

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Convert website to modern Next.js with luxury theme, dynamic sidebar & navbar"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and import the repository: `RishiWebDeveloper1/Gauri_Enterprises`.
   - Vercel automatically detects Next.js.
   - Click **Deploy**.

3. **Set the Domain**:
   - In your Vercel project dashboard, navigate to **Settings** > **Domains**.
   - Add `gaurienterprises.vercel.app` (or your custom domain).
