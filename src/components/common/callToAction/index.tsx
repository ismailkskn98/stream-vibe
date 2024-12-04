import React from "react";
import CTATitle from "./title";
import Button from "../button";
import styles from "./styles.module.css";

export default function CallToAction({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.ctaSection}>
      {children}
      <CTATitle />
      <Button title="Ücretsiz Deneme Başlat" url="/" />
    </section>
  );
}
