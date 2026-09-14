import express, { Router } from "express";
import {
    getAllPlayers,
    createPlayer,
    updatePlayer,
    deletePlayer,
} from "../controllers/playerController";

const router: Router = express.Router();

router.get("/", getAllPlayers);
router.post("/", createPlayer);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

export default router;