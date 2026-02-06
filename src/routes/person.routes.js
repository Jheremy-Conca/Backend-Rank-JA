import { Router } from "express";
import {
  createPerson,
  listPersons,
  getPersonById, // 👈 IMPORTANTE
  updatePerson,
  addPoints,
  subtractPoints,
} from "../controllers/person.controller.js";

const router = Router();

router.post("/", createPerson);
router.get("/", listPersons);
router.get("/:id", getPersonById); // 🔥 ESTA RUTA SOLUCIONA EL 404
router.put("/:id", updatePerson);
router.post("/:id/add-points", addPoints);
router.post("/:id/subtract-points", subtractPoints);

export default router;
