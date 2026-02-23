import express from "express";
import cors from "cors";

import groupRoutes from "./routes/group.routes.js";
import personRoutes from "./routes/person.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import rankingRoutes from "./routes/ranking.routes.js";

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://rankja2026.netlify.app"],
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
