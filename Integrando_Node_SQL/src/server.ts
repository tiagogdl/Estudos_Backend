import express from 'express'; 
import { mainRouter } from './routes/main.js';

const server = express();

server.use(mainRouter)

server.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

server.listen(3000, () => {
    console.log(`O servidor está rodando na porta: http://localhost:3000/`)
})