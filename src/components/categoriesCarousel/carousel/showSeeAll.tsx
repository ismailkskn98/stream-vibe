import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function ShowSeeAll({ link }: { link?: string }) {
  return (
    <Link href={link || "/filmler"} className={styles.showSeeAllLink}>
      <div className={styles.showSeeAllBg}></div>
      <span
        className={styles.showSeeAllSpan}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          whiteSpace: "nowrap",
        }}
      >
        Tümünü Gör
      </span>
    </Link>
  );
}
