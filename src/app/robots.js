import { companyInfo } from "@/data/companyInfo";

export default function robots() {
  const baseUrl = `https://${companyInfo.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
