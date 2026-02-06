import express from "express";
import cors from "cors";

import groupRoutes from "./routes/group.routes.js";
import personRoutes from "./routes/person.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import rankingRoutes from "./routes/ranking.routes.js";

const app = express();

// Permite recibir datos JSON
app.use(express.json());

// CORS
app.use(
  cors({
    origin: "http://localhost:5173", // <--- Cambia al puerto de tu frontend Vue 3
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Rutas
app.use("/api/groups", groupRoutes);
app.use("/api/persons", personRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/ranking", rankingRoutes);

export default app;
