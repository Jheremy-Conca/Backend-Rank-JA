import { Router } from "express";
import {
  createGroup,
  listGroups,
  addGroupPoints,
  subtractGroupPoints,
} from "../controllers/group.controller.js"; // <-- IMPORTA TODO

const router = Router();

router.post("/", createGroup);
router.get("/", listGroups);

// NUEVAS RUTAS para puntos de grupo
router.post("/:id/add-points", addGroupPoints);
router.post("/:id/subtract-points", subtractGroupPoints);

export default router;
