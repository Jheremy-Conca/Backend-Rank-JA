import "dotenv/config"; // Esto carga las variables de .env
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 JA Scoreboard corriendo en puerto ${PORT}`);
});
