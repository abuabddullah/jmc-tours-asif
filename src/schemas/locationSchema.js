// tourSchema.ts
import { z } from "zod";

const tourSchema = z.object({
  name: z.string().min(5, "Title is required"),
  image: z
    .string()
    .url()
    .default("https://i.ibb.co/jvBVcJh/tour-9.jpg")
    .optional(),
  description: z.string().min(15, "Title is required"),
  category: z.enum(["Wildlife", "Adventure"]).default("Adventure"),
});

export default tourSchema;
