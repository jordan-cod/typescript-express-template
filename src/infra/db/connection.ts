import { DataSource } from "typeorm";
import { env } from "@/core/config/env";

import { logger } from "@/core/logger/logger";

export const AppDataSource = new DataSource({
	type: "postgres",
	url: env.DATABASE_URL,
	useUTC: true,
	logging: true,
	entities: [],
	migrations: ["src/infra/db/migrations/*.ts"],
});

export async function initializeDatabase() {
	if (!AppDataSource.isInitialized) {
		await AppDataSource.initialize();
		logger.info("DataSource initialized");
	}
}
