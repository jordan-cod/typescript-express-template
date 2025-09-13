import { corsMiddleware } from "@/core/config/cors";
import { httpLogger } from "@/core/logger/http-logger";
import { errorHandler } from "@/core/middleware/error-handler";
import express, { type Express } from "express";
import helmet from "helmet";
import { initializeDatabase } from "../db/connection";

export async function createServer(): Promise<Express> {
	await initializeDatabase();

	const app = express();

	app.use(errorHandler);

	app.use(corsMiddleware);

	app.use(helmet());

	app.use(express.json());

	app.use(httpLogger);

	return app;
}
