import { AppDataSource } from "@/infra/db/connection";
import type { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";

export async function healthCheck(_: Request, res: Response) {
	await AppDataSource.query("SELECT 1");

	res.status(StatusCodes.OK).json({
		status: "ok",
		database: "connected",
		timestamp: new Date(),
	});
}
