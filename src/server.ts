import "reflect-metadata";

import express, { type Response } from "express";
import { env } from "./core/config/env";
import { initializeDatabase } from "./infra/db/connection";

const app = express();

app.get("/", (res: Response) => {
	res.send("Hello World!");
});

app.listen(env.PORT, () => {
	console.log(`Server is running on port ${env.PORT}`);
});

initializeDatabase()
	.then(() => {
		console.log("Database initialized");
	})
	.catch((error) => {
		console.error("Error initializing database:", error);
		process.exit(1);
	});
