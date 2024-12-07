/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./styles.module.css";

type InputProps = {
  state: any;
  label: string;
  input: {
    id: string;
    type: string;
    placeholder: string;
    name: string;
  };
};

export default function CustomInput(props: InputProps) {
  const { state, label, input } = props;
  return (
    <div className={styles.supportFormDiv}>
      <label htmlFor={input.id} className={styles.supportFormLabel}>
        {label}
      </label>
      <input {...input} defaultValue={(state?.state as any)?.[input.name] || ""} className={styles.supportFormInput} />
      {state?.errors?.[input.name] && <span className={styles.supportFormSpan}>*{state?.errors?.[input.name]}</span>}
    </div>
  );
}
