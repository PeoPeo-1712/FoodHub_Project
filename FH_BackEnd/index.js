// FH_BackEnd/index.js (chỉ dev local)
import { default as serverlessApp } from "./api/hello.js";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Chạy local dev
app.use(serverlessApp); // hoặc copy route hello trực tiếp
app.listen(PORT, () => console.log(`Dev server running on port ${PORT}`));
