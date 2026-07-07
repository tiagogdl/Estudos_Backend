import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.end("Ola Mundo");
});

server.listen(3000, () => {
    console.log('Servidor funcionando http://localhost:3000');
});