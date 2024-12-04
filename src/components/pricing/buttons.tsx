import React from "react";
import styles from "./styles.module.css";

type ButtonsProps = {
  handleMonthClick: () => void;
  handleYearClick: () => void;
  isYearly: boolean;
};

export default function PricingButtons(props: ButtonsProps) {
  const { handleMonthClick, handleYearClick, isYearly } = props;
  return (
    <article className={styles.pricingButtonsArticle}>
      <button onClick={handleMonthClick} className={`${styles.pricingButton} ${!isYearly ? styles.pricingButtonIsYearly : "bg-transparent"}`}>
        Aylık
      </button>
      <button onClick={handleYearClick} className={`${styles.pricingButton} ${isYearly ? styles.pricingButtonIsYearly : "bg-transparent"}`}>
        Yıllık
      </button>
    </article>
  );
}
