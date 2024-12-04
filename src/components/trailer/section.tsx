import React from "react";
import styles from "./styles.module.css";

export default function TrailerSection({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className={styles.trailerSection}>
      <article className={styles.trailerSectionArticle}>
        <div className={styles.trailerSectionDiv}>
          <span className={styles.trailerSectionSpan}>{title}</span>
        </div>
      </article>
      <main className={styles.trailerSectionMain}>{children}</main>
    </section>
  );
}
