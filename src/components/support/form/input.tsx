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
      <div className={`absolute right-1 2xl:left-2 flex flex-col gap-1 ${state?.errors?.[input.name]?.length > 1 ? "-bottom-[53px]" : "-bottom-7"}`}>
        {state?.errors?.[input.name]?.map((error: any, index: number) => (
          <span key={index} className={styles.supportFormSpan}>
            *{error}
          </span>
        ))}
      </div>
    </div>
  );
}
