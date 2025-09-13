import { corsMiddleware } from "@/core/config/cors";
import { errorHandler } from "@/core/middleware/error-handler";
import express, { type Express } from "express";
import helmet from "helmet";
import { httpLogger } from "@/core/logger/http-logger";
import { initializeDatabase } from "../db/connection";
import { rateLimiter } from "@/core/config/rate-limit";

export async function createServer(): Promise<Express> {
	await initializeDatabase();

	const app = express();

	app.use(rateLimiter);
	app.use(corsMiddleware);
	app.use(helmet());
	app.use(express.json());
	app.use(httpLogger);

	app.use(errorHandler);

	return app;
}
