import React from "react";
import Button from "../common/button";
import { FaPlay } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Entry() {
  return (
    <main className={styles.entryMain}>
      <article className={styles.entryArticle}>
        <h2 className={styles.entryH2}>En İyi Yayın Deneyimi</h2>
        <p className={styles.entryP}>
          StreamVibe, favori filmlerinizi ve şovlarınızı istediğiniz zaman, istediğiniz yerde izlemek için en iyi akış deneyimidir.
          <span className="hidden md:block">
            StreamVibe ile en yeni gişe rekorları kıran filmler, popüler TV şovları ve daha fazlasını içeren çok çeşitli içeriğin keyfini çıkarabilirsiniz.
          </span>
          <span className="hidden lg:block">Ayrıca kendi izleme listelerinizi de oluşturabilirsiniz, böylece izlemek istediğiniz içerikleri kolayca bulabilirsiniz.</span>
        </p>
      </article>
      <Button title="hemen İzlemeye başlayın" url="/" Icon={FaPlay} />
    </main>
  );
}