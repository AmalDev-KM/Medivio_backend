import express from "express";

const app = express();

app.use(express.json);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Medivio is healthy",
  });
});

export default app;
