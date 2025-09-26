import express from "express";
import serverless from "serverless-http";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello từ Vercel serverless!" });
});

export default serverless(app);
