import React from "react";
import FooterSectionItem from "./sectionItem";
import { footerSectionItems } from "./sectionItems";
import type { FooterSectionItemType } from "@/types";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import styles from "./styles.module.css";

export const socialLinks = [
  { icon: <FaFacebook className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "https://hismailkeskin.net/" },
  { icon: <FaTwitter className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "https://hismailkeskin.net/" },
  { icon: <FaLinkedin className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "https://hismailkeskin.net/" },
];
export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      {footerSectionItems.map((item: FooterSectionItemType, index: number) => (
        <FooterSectionItem key={index} sectionItem={item} />
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
