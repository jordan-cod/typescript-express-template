import z from "zod";

export const envSchema = z.object({
	PORT: z.coerce.number().default(8080),
	DATABASE_URL: z.url(),
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	FRONTEND_URL: z.url().default("http://localhost:3000"),
});

export const env = envSchema.parse(process.env);
