import React from "react";
import Button from "../common/button";
import styles from "./styles.module.css";

export default function FaqTitle() {
  return (
    <article className={styles.faqTitleArticle}>
      <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
        <h2 className={styles.faqTitleH2}>Sıkça Sorulan Sorular</h2>
        <p className={styles.faqTitleP}>Sorularınız mı var? Cevaplarımız var! StreamVibe hakkında en sık sorulan soruların yanıtlarını bulmak için SSS bölümümüze göz atın.</p>
      </div>
      <Button title="Soru Sor" url="/" />
    </article>
  );
}
