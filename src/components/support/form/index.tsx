/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { supportFormAction } from "@/app/(root)/destek/actions";
import { useActionState } from "react";
import styles from "./styles.module.css";
import CustomInput from "./input";
import CustomTextarea from "./textarea";
import FormFooter from "./footer";

export default function SupportForm() {
  const [state, formAction, isPending] = useActionState(supportFormAction, null);

  return (
    <section className={styles.supportFormSection}>
      <form action={formAction} className={styles.supportForm}>
        <article className={styles.supportFormArticle}>
          <CustomInput state={state} label="Ad" input={{ id: "firstname", name: "firstname", type: "text", placeholder: "Adınızı giriniz" }} />
          <CustomInput state={state} label="Soyad" input={{ id: "lastname", name: "lastname", type: "text", placeholder: "Soyadınızı giriniz" }} />
        </article>
        <article className={styles.supportFormArticle}>
          <CustomInput state={state} label="Email" input={{ id: "email", name: "email", type: "email", placeholder: "Email adresinizi giriniz" }} />
          <CustomInput state={state} label="Telefon Numarası" input={{ id: "number", name: "number", type: "text", placeholder: "Telefon numaranızı giriniz" }} />
        </article>
        <CustomTextarea state={state} label="Mesajınız" textarea={{ id: "message", name: "message", placeholder: "Mesajınızı giriniz" }} />
        <FormFooter isPending={isPending} label="Kullanım Şartları ve Gizlilik Politikası'nı kabul ediyorum" input={{ id: "checkbox", name: "checkbox", type: "checkbox" }} />
      </form>
    </section>
  );
}
