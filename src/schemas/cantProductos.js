import { z } from "zod";

export const cantProductos = z.object({
  cantidad: z.number().int().positive(),
});
