import { Router } from "express";
import { createUser, createUsers, deleteUser, getAllUsers, getUserByEmail, updateUser } from "../services/user.js";
import { count } from "node:console";


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true});
})

mainRouter.post('/user', async (req, res) => {
    // Validar os dados recebidos

    const user = await createUser({
        name: 'Testador 1',
        email: 'teste2@teste.com',
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

mainRouter.put('/user', async (req, res) => {
    const result = await updateUser()
    res.json({ result })
})

mainRouter.delete('/user', async (req, res) => {
    const result = await deleteUser()
    res.json({ result })
})