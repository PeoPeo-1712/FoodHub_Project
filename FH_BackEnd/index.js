import { app } from "./api/hello.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Dev server running on port ${PORT}`));
