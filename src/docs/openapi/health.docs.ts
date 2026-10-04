import { registry } from "../../config/openapi.js";
import { healthResponseSchema } from "../../validators/common/helath.validator.js";

registry.registerPath({
  method: "get",
  path: "/api/health",
  summary: "Check API health",
  tags: ["Health"],
  responses: {
    200: {
      description: "API is running successfully",
      content: {
        "application/json": {
          schema: healthResponseSchema
        }
      }
    }
  }
});