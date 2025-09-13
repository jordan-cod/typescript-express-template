import "reflect-metadata";

import express, { type Express } from "express";
import { initializeDatabase } from "../db/connection";

export async function createServer(): Promise<Express> {
	await initializeDatabase();

	const app = express();

	app.use(express.json());

	return app;
}
