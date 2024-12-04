import React from "react";
import styles from "./styles.module.css";

export default function Price({ isYearly, monthlyPrice, yearlyPrice }: { isYearly: boolean; monthlyPrice: string; yearlyPrice: string }) {
  return (
    <div className="flex items-end justify-start gap-[2px] xl:gap-1">
      <span className={styles.pricingCardMoneySpan}>{isYearly ? yearlyPrice : monthlyPrice}₺</span>
      <span className={styles.pricingCardTextSpan}>{isYearly ? "/Yıl" : "/Ay"}</span>
    </div>
  );
}
