import type { SupportFormType } from "@/types";
import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(2, { message: "Ad en az 2 karakterden oluşmalıdır." }),
  lastname: z.string().min(2, { message: "Soyad en az 2 karakterden oluşmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  number: z
    .string()
    .min(10, { message: "Telefon numarası en az 10 karakterden oluşmalıdır." })
    .max(11, { message: "Telefon numarası en fazla 11 karakterden oluşmalıdır." })
    .refine((val) => /^\+?\d+$/.test(val), { message: "Telefon numarası yalnızca sayılardan oluşmalıdır." }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakterden oluşmalıdır." }),
});

export const formInitialState: SupportFormType = {
  firstname: "",
  lastname: "",
  email: "",
  number: "", // String olmalı, null olmamalı
  message: "",
};
