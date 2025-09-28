import type { NextFunction, Request, Response } from "express";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { logger } from "@/core/logger/logger";

export class AppError extends Error {
	statusCode: number;
	isOperational: boolean;

	constructor(
		message?: string,
		statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
		isOperational = true,
	) {
		super(message ?? getReasonPhrase(statusCode));
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		Error.captureStackTrace(this, this.constructor);
	}
}

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (!err) return next();

	let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
	let message = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);

	if (err instanceof AppError) {
		statusCode = err.statusCode;
		message = err.message;
	}

	logger.error({
		message: message,
		stack: err.stack,
		name: err.name,
		path: req.path,
		method: req.method,
	});

	res.status(statusCode).json({
		success: false,
		message,
	});
}
