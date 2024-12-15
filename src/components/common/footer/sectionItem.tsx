import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

type FooterSectionItemProps = {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
};

export default function FooterSectionItem({ sectionItem }: { sectionItem: FooterSectionItemProps }) {
  return (
    <article className={styles.footerSectionItemArticle}>
      <h3 className={styles.footerSectionItemH3}>{sectionItem.title}</h3>
      <div className={styles.footerSectionItemDiv}>
        {sectionItem.links.map((item, linkIndex) => (
          <Link key={linkIndex} href={item.link} className="hover:text-white transition-all capitalize">
            {item.name}
          </Link>
        ))}
      </div>
    </article>
  );
}
