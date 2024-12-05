import React from "react";
import styles from "./styles.module.css";

export default function SupportWelcome({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.welcome}>
      <div className={styles.welcomeDiv}>
        <h1 className={styles.welcomeH1}>
          <span>Destek sayfamıza</span> <span>hoş geldiniz!</span>
        </h1>
        <p className={styles.welcomeP}>Ürünümüzle ilgili yaşayabileceğiniz her türlü sorunda size yardımcı olmak için buradayız.</p>
      </div>
      {children}
    </article>
  );
}
