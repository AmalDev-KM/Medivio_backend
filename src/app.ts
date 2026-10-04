import express from "express";
import { swaggerMiddleware } from "./docs/swagger.js";

const app = express();

app.use(express.json());

// Swagger documentation
app.use("/api-docs", ...swaggerMiddleware);

// Health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Medivio is healthy",
  });
});

export default app;