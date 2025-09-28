import express, { type Express } from "express";
import helmet from "helmet";
import { corsMiddleware } from "@/core/config/cors";
import { rateLimiter } from "@/core/config/rate-limit";
import { httpLogger } from "@/core/logger/http-logger";
import { errorHandler } from "@/core/middleware/error-handler";
import { initializeDatabase } from "../db/connection";
import { registerRoutes } from "./routes";

export async function createServer(): Promise<Express> {
	await initializeDatabase();

	const app = express();

	app.use(rateLimiter);
	app.use(corsMiddleware);
	app.use(helmet());
	app.use(express.json());
	app.use(httpLogger);

	registerRoutes(app);

	app.use((_, res) => {
		res.status(404).json({
			success: false,
			message: "Not found",
		});
	});

	app.use(errorHandler);

	return app;
}
