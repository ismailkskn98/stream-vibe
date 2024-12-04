import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function FooterPolicies() {
  return (
    <main className={styles.footerPoliciesMain}>
      <div className="w-full h-[1px] bg-black-15"></div>
      <article className={styles.footerPoliciesArticle}>
        <p className="text-grey-60 text-sm">@2024 streamvib, Tüm Hakları Saklıdır</p>
        <div className="flex items-center gap-5">
          <Link href="/" className={styles.footerPoliciesLink}>
            Kullanım Şartları
          </Link>
          <Link href="/" className={`${styles.footerPoliciesLink} flex items-center gap-5 overflow-hidden`}>
            <div className="w-[1px] min-h-5 bg-black-15"></div>
            <span>Gizlilik Politikası</span>
            <div className="w-[1px] min-h-5 bg-black-15"></div>
          </Link>
          <Link href="/" className={styles.footerPoliciesLink}>
            Çerez Politikası
          </Link>
        </div>
      </article>
    </main>
  );
}
