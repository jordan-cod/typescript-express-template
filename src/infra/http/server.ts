import express, { type Express } from "express";
import helmet from "helmet";
import { httpLogger } from "@/core/logger/http-logger";
import { initializeDatabase } from "../db/connection";

export async function createServer(): Promise<Express> {
	await initializeDatabase();

	const app = express();

	app.use(helmet());

	app.use(express.json());

	app.use(httpLogger);

	return app;
}
