import swaggerUi from "swagger-ui-express";
import { generateOpenApiDocument } from "../config/openapi.js";
import "./openapi/health.docs.js";

export const swaggerDocument = generateOpenApiDocument();

export const swaggerMiddleware = [
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
];