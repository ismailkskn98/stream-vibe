import React from "react";
import PricingTable from "./pricingTable";

export default function FeaturesComparison() {
  return (
    <main className="flex flex-col items-start gap-20">
      <article className="flex flex-col items-start gap-[14px]">
        <h3 className="font-bold text-5xl text-white">Planlarımızı karşılaştırın ve sizin için doğru olanı bulun</h3>
        <p className="font-normal text-lg text-grey-60">
          StreamVibe ihtiyaçlarınıza uygun üç farklı plan sunar: Basic, Standard ve Premium. Her planın özelliklerini karşılaştırın ve sizin için doğru olanı seçin.
        </p>
      </article>
      <PricingTable />
    </main>
  );
}
