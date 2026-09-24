export const companyInfo = {
  name: "Gauri Enterprises",
  tagline: "Premium Furniture & Interiors",
  shortDesc:
    "Handcrafted luxury furniture, bespoke home interiors, and custom woodwork tailored to elevate your living and working spaces.",
  phone: "+91 9819213473",
  phoneRaw: "9819213473",
  email: "gaurienterprises.interiors@gmail.com",
  address: "Showroom & Workshop, Sector 12, Industrial Area, Maharashtra, India",
  googleMapsUrl: "https://maps.google.com/?q=Gauri+Enterprises+Furniture",
  workingHours: "Mon - Sat: 9:30 AM - 8:30 PM | Sun: 10:00 AM - 6:00 PM",
  domain: "gaurienterprises.vercel.app",
  canonicalUrl: "https://gaurienterprises.vercel.app",
  socials: {
    instagram: "https://www.instagram.com/vishwakarma.ramchandra",
    youtube: "https://youtube.com/@gaurienterprises1701?si=PpLV7B9SdY00scqQ",
    facebook: "https://www.facebook.com/profile.php?id=100054658110172",
  },
  whatsapp: {
    number: "9819213473",
    createUrl: (message) => {
      const defaultText =
        "Hello Gauri Enterprises, I am interested in your luxury furniture & interior solutions.";
      return `https://wa.me/919819213473?text=${encodeURIComponent(
        message || defaultText
      )}`;
    },
  },
};
