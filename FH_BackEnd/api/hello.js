// FH_BackEnd/api/hello.js
import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello từ backend dev!" });
});

// chỉ chạy khi dev để log
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Dev server running on port ${PORT}`));
}

// export serverless cho Vercel
export default serverless(app);
