/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./styles.module.css";

type TextareaProps = {
  state: any;
  label: string;
  textarea: {
    id: string;
    name: string;
    placeholder: string;
  };
};

export default function CustomTextarea(props: TextareaProps) {
  const { state, label, textarea } = props;
  return (
    <article className={styles.customTextareaArticle}>
      <label htmlFor={textarea.id} className={styles.customTextareaLabel}>
        {label}
      </label>
      <textarea {...textarea} cols={30} rows={10} defaultValue={(state?.state as any)?.[textarea.name] || ""} className={styles.customTextarea} />
      {state?.errors?.[textarea.name] && <span className={styles.customTextareaSpan}>*{state?.errors?.[textarea.name]}</span>}
    </article>
  );
}
