// FH_BackEnd/api/hello.js
import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.json({ message: "Hello từ FH_BackEnd!" });
});

export default serverless(app);
