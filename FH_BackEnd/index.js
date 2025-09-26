// FH_BackEnd/index.js
import app from "./api/hello.js"; // chỉ để chạy dev
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Dev server running on port ${PORT}`));
}