import { Router } from "express";
import { createUser, createUsers, getAllUsers, getUserByEmail } from "../services/user.js";
import { count } from "node:console";


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true});
})

mainRouter.post('/user', async (req, res) => {
    // Validar os dados recebidos

    const user = await createUser({
        name: 'Leon',
        email: 'leon@delas.com',
        posts: {
            create: {
                title: 'Título de Teste do Leon', 
                body: 'Corpo de Teste'
            }
        }
    });
    res.status(201).json({ user });

})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'Leo', email: 'leodias@gmail.com'},
        { name: 'Leo 2', email: 'leodias@gmail.com'},
        { name: 'Ruth', email: 'Ruthdias@gmail.com'},
        { name: 'Ana', email: 'Anadias@gmail.com'}
    ]);
    res.json({result})
})

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers();
    res.json({ result });
})

mainRouter.get('/user', async (req, res) => {
    const result = await getUserByEmail('tiagodiasgdl474@gmail.com')
    res.json({ result })
})
