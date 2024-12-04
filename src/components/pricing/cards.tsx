import React from "react";
import styles from "./styles.module.css";

export default function PricingCards({ children }: { children: React.ReactNode }) {
  return <main className={styles.pricingCardsMain}>{children}</main>;
}
