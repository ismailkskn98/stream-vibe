import React from "react";
import styles from "./styles.module.css";

type DeviceCardProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

export default function DeviceCard(props: DeviceCardProps) {
  const { title, description, Icon } = props;
  return (
    <article className={styles.deviceCardArticle}>
      <div className={`${styles.deviceCardBg}`}></div>
      <div className="flex items-center gap-[10px] md:gap-3 2xl:gap-4">
        <span className={styles.deviceCardIconSpan}>
          <Icon className={styles.deviceCardIcon} />
        </span>
        <h4 className={styles.deviceCardH4}>{title}</h4>
      </div>
      <p className={styles.deviceCardP}>{description}</p>
    </article>
  );
}
