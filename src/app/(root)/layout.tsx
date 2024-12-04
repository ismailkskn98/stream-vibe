import React from "react";
import StoreProvider from "./storeProvider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative grid-container font-font-manrope w-full h-full">
      <StoreProvider>
        <Header />
        {children}
        <Footer />
      </StoreProvider>
    </main>
  );
}
