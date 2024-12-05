import React from "react";
import styles from "./styles.module.css";

export default function SupportWelcome({ children }: { children: React.ReactNode }) {
  console.log(styles.supportImg + "_" + Math.ceil(Math.random() * 5));
  return (
    <article className={styles.welcome}>
      <div className={styles.welcomeDiv}>
        <h1 className={styles.welcomeH1}>Destek sayfamıza hoş geldiniz!</h1>
        <p className={styles.welcomeP}>Ürünümüzle ilgili yaşayabileceğiniz her türlü sorunda size yardımcı olmak için buradayız.</p>
      </div>
      {children}
    </article>
  );
}
