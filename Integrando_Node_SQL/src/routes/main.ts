import { Router } from "express";
import { prisma } from "../libs/prisma.js";

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true});
})

mainRouter.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: 'Tiago',
            email: 'tiagodiasgdl474@gmail.com'
        }
    });

    res.json({ user });
})

