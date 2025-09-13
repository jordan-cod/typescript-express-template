import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		environment: "node",
		include: ["tests/**/*.test.ts", "tests/**/*.e2e.ts"],
		exclude: ["node_modules", "dist"],
		typecheck: {
			tsconfig: "./tsconfig.test.json",
		},
		setupFiles: ["tests/setup-env.ts"],
	},
});
