import express from "express";
import cors from "cors";

import analyzeRoute
  from "./routes/analyze.js";

import { env }
  from "./config/env.js";

const app = express();

app.use(cors());

app.use(express.json({
  limit: "10mb",
}));

app.get("/", (req, res) => {
  res.json({
    message:
      "AI Resume Matcher API running",
  });
});

app.use(
  "/analyze",
  analyzeRoute
);

app.listen(env.PORT, () => {
  console.log(
    `Server running on port ${env.PORT}`
  );
});