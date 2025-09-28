import type { Express } from "express";
import { beforeAll } from "vitest";
import { createServer } from "../src/infra/http/server";

export let server: Express;

beforeAll(async () => {
	server = await createServer();
});
