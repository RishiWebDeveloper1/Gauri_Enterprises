export const companyInfo = {
  name: "Gauri Enterprises",
  tagline: "Premium Furniture & Interiors",
  shortDesc:
    "Handcrafted luxury furniture, bespoke home interiors, and custom woodwork tailored to elevate your living and working spaces.",
  phone: "+91 9321763572",
  phoneRaw: "9321763572",
  email: "gaurienterprises.interiors@gmail.com",
  address: "Showroom & Workshop, Sector 12, Industrial Area, Maharashtra, India",
  googleMapsUrl: "https://maps.google.com/?q=Gauri+Enterprises+Furniture",
  workingHours: "Mon - Sat: 9:30 AM - 8:30 PM | Sun: 10:00 AM - 6:00 PM",
  domain: "gaurienterprises.vercel.app",
  canonicalUrl: "https://gaurienterprises.vercel.app",
  socials: {
    instagram: "https://www.instagram.com/vishwakarma.ramchandra/?utm_source=ig_web_button_share_sheet&igshid=MjU0YjQ2MmQ2OQ==",
    youtube: "https://youtube.com/@gaurienterprises1701?si=PpLV7B9SdY00scqQ",
    facebook: "https://m.facebook.com/profile.php/?id=100054658110172&name=xhp_nt__fb__action__open_user",
  },
  whatsapp: {
    number: "9321763572",
    createUrl: (message) => {
      const defaultText =
        "Hello Gauri Enterprises, I am interested in your luxury furniture & interior solutions.";
      return `https://wa.me/919321763572?text=${encodeURIComponent(
        message || defaultText
      )}`;
    },
  },
};
