import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes';
import { errorHandler, notFoundRequest } from './routes/errorhandler.js';

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true}));
server.use(express.static(path.join(__dirname, '../public')));

server.use('/', router);
server.use(notFoundRequest);
server.use(errorHandler)

server.listen(3000, () => {
    console.log('Servidor está rodando no link: http://localhost:3000/')
})