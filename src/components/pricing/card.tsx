import type { PricingPlanType } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import Price from "./price";

type PricingCardsProps = {
  pricingPlan: PricingPlanType;
  isYearly: boolean;
};

export default function PricingCard(props: PricingCardsProps) {
  const {
    pricingPlan: { name, description, monthlyPrice, yearlyPrice, url },
    isYearly,
  } = props;
  return (
    <article className={styles.pricingCardArticle}>
      <div className="flex flex-col items-start gap-4">
        <h5 className={styles.pricingCardH5}>{name}</h5>
        <p className={styles.pricingCardP}>{description}</p>
      </div>
      <Price isYearly={isYearly} monthlyPrice={monthlyPrice} yearlyPrice={yearlyPrice} />
      <div className="flex items-center gap-3 2xl:gap-5">
        <Link href={"/"} className={styles.pricingCardFreeLink}>
          Ücretsiz Deneme Başlat
        </Link>
        <Link href={url} className={styles.pricingCardPlanLink}>
          Planı Seç
        </Link>
      </div>
    </article>
  );
}
