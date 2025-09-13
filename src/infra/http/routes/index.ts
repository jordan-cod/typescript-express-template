import type { Express } from "express";
import { healthRoutes } from "@/domains/health";

export function registerRoutes(app: Express) {
	app.use("/health", healthRoutes);
}
