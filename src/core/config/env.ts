import z from 'zod';

export const envSchema = z.object({
    PORT: z.coerce.number().default(8080),
    DATABASE_URL: z.url(),
})

export const env = envSchema.parse(process.env);