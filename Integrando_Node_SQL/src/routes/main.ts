import { Router } from "express";
import { prisma } from "../libs/prisma.js";

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true});
})

mainRouter.post('/user', (req, res) => {
    
})

