import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello từ FH_BackEnd!" });
});

// Export serverless cho Vercel
export default serverless(app);
