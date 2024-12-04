import React from "react";
import styles from "./styles.module.css";

export default function CTATitle() {
  return (
    <article className={styles.ctaTitleArticle}>
      <h3 className={styles.ctaTitleH3}>Bugün ücretsiz denemenizi başlatın!</h3>
      <p className={styles.ctaTitleP}>Bu, kullanıcıları StreamVibe&apos;ın ücretsiz denemesine kaydolmaya teşvik eden net ve öz bir harekete geçirme çağrısıdır.</p>
    </article>
  );
}
