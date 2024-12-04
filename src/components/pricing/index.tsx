"use client";
import React, { useState } from "react";
import PricingTitle from "./title";
import PricingCards from "./cards";
import PricingCard from "./card";
import { pricingPlan } from "./pricingPlan";
import PricingButtons from "./buttons";
import style from "./styles.module.css";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const handleMonthClick = () => {
    if (isYearly) {
      setIsYearly(!isYearly);
    }
  };
  const handleYearClick = () => {
    if (!isYearly) {
      setIsYearly(!isYearly);
    }
  };

  return (
    <section className={style.pricingSection}>
      <PricingTitle>
        <PricingButtons handleMonthClick={handleMonthClick} handleYearClick={handleYearClick} isYearly={isYearly} />
      </PricingTitle>
      <PricingCards>
        {pricingPlan.map((plan, index) => (
          <PricingCard key={index} pricingPlan={plan} isYearly={isYearly} />
        ))}
      </PricingCards>
    </section>
  );
}
