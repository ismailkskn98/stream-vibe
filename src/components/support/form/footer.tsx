import React from "react";
import styles from "./styles.module.css";

type FormFooterProps = {
  isPending: boolean;
  label: string;
  input: {
    id: string;
    name: string;
    type: string;
  };
};

export default function FormFooter(props: FormFooterProps) {
  const { isPending, label, input } = props;
  return (
    <article className={`${styles.supportFormArticle} mt-4 xl:mt-0`}>
      <div className="flex items-center gap-2">
        <input {...input} className={styles.formFooterCheckbox} />
        <label htmlFor={input.id} className="text-grey-60 text-base font-normal">
          {label}
        </label>
        {/* {error?.errors?.firstname && <span className="text-red-500 text-sm absolute -bottom-7 left-2">*{error?.errors?.firstname}</span>} */}
      </div>
      <button disabled={isPending} type="submit" className={`common-button min-w-full xl:min-w-min flex justify-center ${isPending && "hover:bg-red-45 cursor-progress"}`}>
        {isPending ? "Gönderiliyor..." : "Gönder"}
      </button>
    </article>
  );
}
