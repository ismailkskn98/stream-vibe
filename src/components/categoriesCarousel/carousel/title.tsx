import React from "react";
import styles from "./styles.module.css";

export default function Title({ title, description }: { title: string; description?: string }) {
  return (
    <article className={styles.title}>
      <h2 className={styles.titleH2}>{title}</h2>
      {description && <p className={styles.titleDescription}>{description}</p>}
    </article>
  );
}
