import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

server.listen(3000, () => {
    console.log(`O servidor está rodando na porta: http://localhost:3000/`)
})