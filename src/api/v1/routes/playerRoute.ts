import express, { Router } from "express";
import {
    getAllPlayers,
    createPlayer,
    updatePlayer,
    deletePlayer,
} from "../controllers/playerController";

const router: Router = express.Router();

router.get("/players", getAllPlayers);
router.post("/players", createPlayer);
router.put("/players/:id", updatePlayer);
router.delete("/players/:id", deletePlayer);

export default router;
