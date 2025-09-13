import { DataSource } from "typeorm";
import { env } from "@/core/config/env";

import { User } from "@/domains/users/user.entity";

export const AppDataSource = new DataSource({
	type: "postgres",
	url: env.DATABASE_URL,
	useUTC: true,
	logging: true,
	entities: [User],
	migrations: ["src/infra/db/migrations/*.ts"],
});

export async function initializeDatabase() {
	if (!AppDataSource.isInitialized) {
		await AppDataSource.initialize();
		console.log("DataSource initialized");
	}
}
