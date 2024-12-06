import type { SupportFormType } from "@/types";
import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(2, { message: "Ad en az 2 karakterden olusmalıdır." }),
  lastname: z.string().min(2, { message: "Soyad en az 2 karakterden olusmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  number: z.number().min(10, { message: "Lütfen geçerli bir telefon numarası girin." }),
  message: z.string().min(10, { message: "Lütfen geçerli bir mesaj girin." }),
});

export const formInitialState: SupportFormType = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  message: "",
};
