import React from "react";
import FaqTitle from "./title";
import FaqAccordion from "./accordion";
import styles from "./styles.module.css";

export default function Faq() {
  return (
    <section className={styles.faqSection}>
      <FaqTitle />
      <FaqAccordion />
    </section>
  );
}
