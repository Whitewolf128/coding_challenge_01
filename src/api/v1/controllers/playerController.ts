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

export const updatePlayer = (req: Request, res: Response): void => {
    res.status(200).json({message:"Player Updated.", data:updatePlayer});
};

export const deletePlayer = (req: Request, res: Response): void => {
    const {id} = req.params;
    playerService.deletePlayer(id);
    res.status(200).json({message:"Delete Player."});
};
