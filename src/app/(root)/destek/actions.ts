"use server";

import { formSchema } from "@/components/support/form/formSchema";

export async function supportFormAction(state: unknown, formData: FormData) {
  // Validasyon
  const validatedFields = formSchema.safeParse({
    firstname: formData.get("firstname") || "",
    lastname: formData.get("lastname") || "",
    email: formData.get("email") || "",
    number: formData.get("number") || "",
    message: formData.get("message") || "",
  }); // Validasyon

  // Form verisi geçerli değilse
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      state: Object.fromEntries(formData.entries()),
    };
  }

  // Başarılı durumda herhangi bir işlem yapılabilir
  return {
    success: true,
    state: {}, // Form temizlenmiş durumda geri dönebilir
  };
}
