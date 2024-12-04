import React from "react";
import FooterSection from "./section";
import FooterPolicies from "./policies";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={`fluid grid-container ${styles.footer}`}>
      <main className={styles.footerMain}>
        <FooterSection />
        <FooterPolicies />
      </main>
    </footer>
  );
}
