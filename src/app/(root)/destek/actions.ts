"use server";

import { formSchema } from "@/components/support/formSchema";
import type { FormData } from "@/types";
import { z } from "zod";

export async function supportForm(state: unknown, formData: FormData) {
  try {
    // Validasyon
    const parsedData = formSchema.parse(formData); // Validasyon
    console.log("Form verisi işlendi:", parsedData);

    // Örnek işlem (veritabanı kaydı vs.)
    // await db.user.create({ data: parsedData });

    return { success: true, message: "Form başarıyla işlendi!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.message };
    }
  }
}
