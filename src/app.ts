import { env } from "@/core/config/env";
import { createServer } from "@/infra/http/server";

async function main() {
	const app = await createServer();
	app.listen(env.PORT, () => {
		console.log(`Server running on port ${env.PORT}`);
	});
}

main().catch((err) => {
	console.error("Failed to start server", err);
	process.exit(1);
});
