import {Player} from '../models/playerModel';

const COLLECTION = "player";
/**
 * Updates an existing post.
 * @param {Post} postData - The updated post data.
 * @returns {Promise<void>}
 * @throws {Error} - If validation or repository operation fails.
 */

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