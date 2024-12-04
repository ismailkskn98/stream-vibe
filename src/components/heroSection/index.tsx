import Image from "next/image";
import React from "react";
import bgBackgroundLogo from "@/../public/abstract-design.svg";
import Entry from "./entry";
import styles from "./styles.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.heroBackground} fluid bg-heroBackground`}></div>
      <main className={styles.heroMain}>
        <div className={styles.heroBackgroundLogo}>
          <Image src={bgBackgroundLogo} alt="logo" fill className="backdrop-blur-[2px]" />
        </div>
      </main>
      <Entry />
    </section>
  );
}
