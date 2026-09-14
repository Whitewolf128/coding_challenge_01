import { Request, Response } from "express";    

export const getAllPlayers = (req: Request, res: Response) => {
    res.status(200).send("Get all Players.");
};


export const createPlayer = (req: Request, res: Response) => {
    res.status(201).send("Create new player.");
};

export const updatePlayer = (req: Request, res: Response) => {
    res.status(200).send("Update Player.");
};

export const DeletePlayer = (req: Request, res: Response) => {
    res.status(200).send("Delete Player.");
};
