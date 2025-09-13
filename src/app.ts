import "reflect-metadata";
import { env } from "@/core/config/env";
import { createServer } from "@/infra/http/server";
import { logger } from "./core/logger/logger";

async function main() {
	const app = await createServer();
	app.listen(env.PORT, () => {
		logger.info(`Server running on port ${env.PORT}`);
	});
}

main().catch((err) => {
	logger.error("Failed to start server", err);
	process.exit(1);
});
