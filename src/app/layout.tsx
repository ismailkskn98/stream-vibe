import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const manropeSans = localFont({
  src: [
    {
      path: "./fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "StreamVibe",
  description:
    "StreamVibe, en sevdiğiniz filmleri ve şovları istediğiniz zaman, istediğiniz yerde izlemek için en iyi yayın deneyimidir. StreamVibe ile en son gişe rekorları kıran filmler, klasik filmler, popüler TV şovları ve daha fazlası dahil olmak üzere çok çeşitli içeriklerin keyfini çıkarabilirsiniz. Ayrıca kendi izleme listelerinizi oluşturabilir, böylece izlemek istediğiniz içeriği kolayca bulabilirsiniz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${manropeSans.variable} bg-black-08`}>{children}</body>
    </html>
  );
}
