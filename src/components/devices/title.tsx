import React from "react";
import styles from "./styles.module.css";

export default function DeviceTitle() {
  return (
    <article className={styles.deviceTitleArticle}>
      <h2 className={styles.deviceTitleH2}>Size çeşitli cihazlarda akış deneyimi sunuyoruz</h2>
      <p className={styles.deviceTitleP}>
        StreamVibe ile en sevdiğiniz filmleri ve TV şovlarını her zaman, her yerde izleyebilirsiniz. Platformumuz, geniş bir cihaz yelpazesiyle uyumlu olacak şekilde
        tasarlanmıştır, böylece eğlencenin bir anını bile kaçırmazsınız.
      </p>
    </article>
  );
}
