import cors from "cors";
import { env } from "./env";

export const corsOptions = {
	origin: env.NODE_ENV === "production" ? [env.FRONTEND_URL] : "*",
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
};

export const corsMiddleware = cors(corsOptions);
