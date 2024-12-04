import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

type FooterSectionItemProps = {
  title: string;
  links: string[];
};

export default function FooterSectionItem({ section }: { section: FooterSectionItemProps }) {
  return (
    <article className={styles.footerSectionItemArticle}>
      <h3 className={styles.footerSectionItemH3}>{section.title}</h3>
      <div className={styles.footerSectionItemDiv}>
        {section.links.map((link, linkIndex) => (
          <Link key={linkIndex} href="/" className="hover:text-white transition-all">
            {link}
          </Link>
        ))}
      </div>
    </article>
  );
}
