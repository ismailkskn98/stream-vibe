"use client";
import React, { useState } from "react";
import { features } from "./features";

enum PricingPlan {
  basic = "basic",
  standard = "standard",
  premium = "premium",
}

export default function MobilPricingTable() {
  const [active, setActive] = useState<PricingPlan>(PricingPlan.basic);

  return (
    <section className="w-full md:hidden flex flex-col items-center gap-5">
      <article className="w-full flex-between bg-black-06 border border-solid border-black-15 rounded-lg p-2">
        {Object.values(PricingPlan).map((plan) => (
          <button key={plan} onClick={() => setActive(plan)} className={`px-5 py-3 text-grey-60 font-medium text-sm rounded-md ${active === plan ? "bg-black-12 text-white" : ""}`}>
            {plan === "basic" ? "Temel" : plan === "standard" ? "Standart" : "Premium"}
          </button>
        ))}
      </article>
      <article className="grid grid-cols-2 gap-5 p-6 bg-black-06 rounded-xl border border-solid border-black-15">
        {features.map((feature) => (
          <div
            key={feature.name}
            className={`flex flex-col item-start pb-2 ${feature.name === "İçerik" ? "col-span-2 row-start-2 row-end-2" : ""} ${
              feature.name === "Cihazlar" ? "col-span-2 row-start-3 row-end-3" : ""
            }`}
          >
            <h4 className="font-medium text-grey-60 text-sm">{feature.name}</h4>
            <p className="text-white text-sm font-medium">{feature[active]}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
