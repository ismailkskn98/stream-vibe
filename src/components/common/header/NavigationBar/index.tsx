import React from "react";
import NavItem from "./navItem";
import styles from "./styles.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <article className={styles.navigationBarArticle}>
        <NavItem href="/" title="Anasayfa" />
        <NavItem href="/filmler-ve-diziler" title="Filmler ve Diziler" />
        <NavItem href="/destek" title="Destek" />
        <NavItem href="/abonelikler" title="Abonelikler" />
      </article>
    </nav>
  );
}
