import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import styles from "./styles.module.css";

export default function MobilNavigationBar() {
  return (
    <nav className={styles.mobilNavigationBar}>
      <HiMenuAlt3 className="min-w-6 min-h-6" />
    </nav>
  );
}
