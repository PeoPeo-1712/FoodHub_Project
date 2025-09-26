import express from "express";
import serverless from "serverless-http";

const app = express();

// CORS nếu cần frontend gọi
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello từ serverless FH_BackEnd!" });
});

export default serverless(app);
