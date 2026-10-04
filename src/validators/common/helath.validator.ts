import { z } from "zod";

export const healthResponseSchema = z
  .object({
    success: z.boolean().openapi({
      example: true
    }),
    message: z.string().openapi({
      example: "Medivio API is running"
    })
  })
  .openapi("HealthResponse");