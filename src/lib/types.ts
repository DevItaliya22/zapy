import { z } from "zod";

export const EditUserProfileSchema = z.object({
  name: z.string().min(1, 'Required'),
});
