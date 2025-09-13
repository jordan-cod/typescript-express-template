import request from "supertest";
import { describe, expect, it } from "vitest";
import { server } from "../setup-server";

describe("GET /health", () => {
	it("should return 200 and status ok", async () => {
		const res = await request(server).get("/health");
		expect(res.status).toBe(200);
		expect(res.body).toEqual({
			database: "connected",
			status: "ok",
			timestamp: expect.any(String),
		});
	});
});
