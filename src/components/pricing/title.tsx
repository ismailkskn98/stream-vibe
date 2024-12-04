import React from "react";
import styles from "./styles.module.css";

export default function PricingTitle({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.pricingTitleArticle}>
      <div className={styles.pricingTitleDiv}>
        <h2 className={styles.pricingTitleH2}>Size uygun planı seçin</h2>
        <p className={styles.pricingTitleP}>
          StreamVibe&apos;ye katılın ve görüntüleme tercihlerinize uyacak şekilde uyarlanmış esnek abonelik seçeneklerimiz arasından seçim yapın. Kesintisiz eğlenceye hazır olun!
        </p>
      </div>
      {children}
    </article>
  );
}
