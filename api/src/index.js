import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import clienteController from './controller/clienteController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

//liberar arquivos da storage
server.use('/storage/capasClientes' , express.static('storage/capasClientes'));


//configuração dos endpoints
server.use(usuarioController);
server.use(clienteController);

server.listen(process.env.PORT , () => console.log(`API Conectada na Porta ${process.env.PORT}`));