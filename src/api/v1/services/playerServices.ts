import {Player} from '../models/playerModel';
import app from "../../../app";

const COLLECTION = "player";
/**
 * Updates an existing post.
 * @param {Post} postData - The updated post data.
 * @returns {Promise<void>}
 * @throws {Error} - If validation or repository operation fails.
 */

app.get("/api/v1/players", (req, res) =>{

    const player1: Player = {
        id: 1,
        name: "ShadowStrike",
        wins: 15,
        losses: 5,
        totalScore: 28500
    }

    const player2: Player = {
        id: 2,
        name: "Noobmaster",
        wins: 3,
        losses: 12,
        totalScore: 4200
    }

    const player3: Player = {
        id: 3,
        name: "Progamer99",
        wins: 0,
        losses: 0,
        totalScore: 0
    }

});

export const getAllPlayers =  (): string[] => {
    return ["Player 1", "Player 2", "Player 3"];
}

export const createPlayer =  (name: string): string => {
    return "Player created.";
}

export const updatePlayer =  (id: number, name: string): string => {
    return "Player updated.";
}

export const deletePlayer =  (id: number): string => {
    return "Player deleted.";
}