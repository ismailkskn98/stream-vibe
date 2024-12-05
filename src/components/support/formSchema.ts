import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  number: z.string(),
  message: z.string().min(10),
});
