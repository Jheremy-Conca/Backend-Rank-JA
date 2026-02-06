import { Router } from "express";
import {
  groupRanking,
  personRanking,
} from "../controllers/ranking.controller.js";

const router = Router();

router.get("/groups", groupRanking);
router.get("/persons", personRanking);

export default router;
