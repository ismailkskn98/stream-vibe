import React from "react";
import FooterSectionItem from "./sectionItem";
import { footerSectionItems } from "./sectionItems";
import type { FooterSectionItemType } from "@/types";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import styles from "./styles.module.css";

export default function FooterSection() {
  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "/" },
    { icon: <FaTwitter className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "/" },
    { icon: <FaLinkedin className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "/" },
  ];
  return (
    <section className={styles.footerSection}>
      {footerSectionItems.map((section: FooterSectionItemType, index: number) => (
        <FooterSectionItem key={index} section={section} />
      ))}
      <article className={styles.footerSectionArticle}>
        <h3 className={styles.footerSectionH3}>Abonelik</h3>
        <div className={styles.footerSectionDiv}>
          {socialLinks.map((social, socialIndex) => (
            <Link key={socialIndex} href={social.href} className={styles.footerSectionLink}>
              {social.icon}
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}
