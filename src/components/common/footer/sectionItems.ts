import type { FooterSectionItemType } from "@/types";

export const footerSectionItems: FooterSectionItemType[] = [
  {
    title: "Ana Sayfa",
    links: [
      { name: "Kategoriler", link: "/filmler" },
      { name: "Cihazlar", link: "/abonelikler" },
      { name: "Fiyatlandırma", link: "/abonelikler" },
      { name: "SSS", link: "/destek" },
    ],
  },
  {
    title: "Filmler",
    links: [
      { name: "Türler", link: "/filmler" },
      { name: "Trendler", link: "/filmler-ve-diziler" },
      { name: "Yeni Çıkanlar", link: "/filmler-ve-diziler" },
      { name: "Popüler", link: "/filmler-ve-diziler" },
    ],
  },
  {
    title: "Diziler",
    links: [
      { name: "Türler", link: "/filmler" },
      { name: "Trendler", link: "/filmler-ve-diziler" },
      { name: "Yeni Çıkanlar", link: "/filmler-ve-diziler" },
      { name: "Popüler", link: "/filmler-ve-diziler" },
    ],
  },
  {
    title: "Destek",
    links: [{ name: "Bize Ulaşın", link: "/destek" }],
  },
  {
    title: "Abonelik",
    links: [
      { name: "Planlar", link: "/abonelikler" },
      { name: "Özellikler", link: "/abonelikler" },
    ],
  },
];
