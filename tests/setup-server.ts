import { beforeAll } from "vitest";
import { createServer } from "../src/infra/http/server";
import type { Express } from "express";

export let server: Express;

beforeAll(async () => {
	server = await createServer();
});
