import React from "react";
import styles from "./styles.module.css";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { accordionItems } from "./accordionItems";

export default function FaqAccordion() {
  const midPoint = Math.ceil(accordionItems.length / 2);
  const firstColumnFaqs = accordionItems.slice(0, midPoint);
  const secondColumnFaqs = accordionItems.slice(midPoint);

  return (
    <main className={styles.faqAccordionMain}>
      <Accordion type="single" collapsible className={styles.faqAccordion}>
        {firstColumnFaqs.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className={styles.faqAccordionItem}>
            <article className={styles.faqAccordionArticle}>
              <span className={styles.faqAccordionArticleSpan}>{index + 1 > 9 ? index + 1 : `0${index + 1}`}</span>
              <div className="w-full space-y-[14px] 2xl:space-y-5">
                <AccordionTrigger className="flex-between gap-3 hover:underline-offset-1 p-0">
                  <h4 className={styles.faqAccordionTriggerh4}>{item.title}</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className={styles.faqAccordionContentP}>{item.description}</p>
                </AccordionContent>
              </div>
            </article>
            <div className={`${styles.faqBorder}`}></div>
          </AccordionItem>
        ))}
        {/* Mobil */}
        <div className="w-full block xl:hidden space-y-[2px]">
          {secondColumnFaqs.map((item, index) => (
            <AccordionItem key={index + midPoint + 1} value={`item-${index + midPoint + 1}`} className={styles.faqAccordionItem}>
              <article className={styles.faqAccordionArticle}>
                <span className={styles.faqAccordionArticleSpan}>{midPoint + index + 1 > 9 ? midPoint + index + 1 : `0${midPoint + index + 1}`}</span>
                <div className="w-full space-y-[14px] 2xl:space-y-5">
                  <AccordionTrigger className="flex-between gap-3 hover:underline-offset-1 p-0">
                    <h4 className={styles.faqAccordionTriggerh4}>{item.title}</h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className={styles.faqAccordionContentP}>{item.description}</p>
                  </AccordionContent>
                </div>
              </article>
              <div className={styles.faqBorder}></div>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
      <Accordion type="single" collapsible className={styles.faqAccordionMobil}>
        {secondColumnFaqs.map((item, index) => (
          <AccordionItem key={index + midPoint + 1} value={`item-${index + midPoint + 1}`} className={styles.faqAccordionItem}>
            <article className={styles.faqAccordionArticle}>
              <span className={styles.faqAccordionArticleSpan}>{midPoint + index + 1 > 9 ? midPoint + index + 1 : `0${midPoint + index + 1}`}</span>
              <div className="w-full space-y-[14px] 2xl:space-y-5">
                <AccordionTrigger className="flex-between gap-3 hover:underline-offset-1">
                  <h4 className={styles.faqAccordionTriggerh4}>{item.title}</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className={styles.faqAccordionContentP}>{item.description}</p>
                </AccordionContent>
              </div>
            </article>
            <div className={`${styles.faqBorder}`}></div>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
