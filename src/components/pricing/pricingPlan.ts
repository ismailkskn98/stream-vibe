import type { PricingPlanType } from "@/types";

export const pricingPlan: PricingPlanType[] = [
  {
    name: "Temel Plan",
    description: "Film ve dizi kütüphanesine geniş erişim, içerikler arasında yakın zamanda yayımlanan başlıklar da dahil.",
    monthlyPrice: "9.99",
    yearlyPrice: "99.99",
    url: "/abonelikler",
  },
  {
    name: "Standart Plan",
    description: "Yeni çıkan başlıklar ve özel içeriklerin çoğu da dahil olmak üzere daha geniş bir film ve dizi seçimine erişim.",
    monthlyPrice: "12.99",
    yearlyPrice: "129.99",
    url: "/abonelikler",
  },
  {
    name: "Premium Plan",
    description: "En geniş film ve dizi seçimine erişim, tüm yeni çıkan başlıklar ve çevrimdışı izleme dahil.",
    monthlyPrice: "14.99",
    yearlyPrice: "149.99",
    url: "/abonelikler",
  },
];
