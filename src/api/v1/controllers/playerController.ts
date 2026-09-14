import { Request, Response } from "express";
import * as playerService from "../services/playerServices";    

export const getAllPlayers = (req: Request, res: Response): void => {
    const players:  string[] = playerService.getAllPlayers();
    res.status(200).json({ message: "Get all Players.", data: players });
};


export const createPlayer = (req: Request, res: Response): void => {
    const newPlayer: string = req.body;
    playerService.createPlayer(newPlayer);
    res.status(201).json({ message: "Create new player.", data: newPlayer});
};

export const updatePlayer = (req: Request, res: Response) => {
    res.status(200).sendjson("Update Player.");
};

export const deletePlayer = (req: Request, res: Response) => {
    res.status(200).send("Delete Player.");
};
