import { inserirCliente, buscarPorId, buscarPorNome, alterarCliente, removerCliente, buscarPorCpf, buscarTodosClietes } from '../repository/clienteRepository.js'

import{ Router } from 'express'

const server = Router();


//Cadastrar cliente
server.post('/cliente' , async (req, resp) => {
    try {
        const cliente = req.body;

        if(!cliente.personal) 
            throw new Error ('Id do personal obrigatório');

        if(!cliente.nome) 
            throw new Error ('Nome do cliente é obrigatório');

        if(!cliente.plano) 
            throw new Error ('Nome do plano é obrigatório');

        if(!cliente.cpf) 
            throw new Error ('CPF é obrigatório');

        if(!cliente.genero) 
            throw new Error ('Gênero é obrigatório');

        if(cliente.nascimento == undefined) 
            throw new Error ('Data de nascimento é obrigatória');

        if(cliente.altura == undefined || cliente.altura < 0) 
            throw new Error ('Altura obrigatória');

        if(cliente.peso == undefined || cliente.peso < 0) 
            throw new Error ('Peso obrigatório');

        if(!cliente.telefone) 
            throw new Error ('Telefone obrigatório');

        if(!cliente.objetivo) 
            throw new Error ('Objetivo obrigatório');

        if(!cliente.treino) 
            throw new Error ('Informações sobre treino obrigatórias');

        if(!cliente.dia) 
            throw new Error ('Dia da semana obrigatório');

        if(!cliente.horario) 
            throw new Error ('Horário obrigatório');

        const clienteAdcionado = await inserirCliente(cliente);
        resp.send(clienteAdcionado);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.get('/cliente', async (req, resp) =>{
    try {

        const resposta = await buscarTodosClietes();

        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



server.get('/cliente/busca' , async (req, resp) => {
    try {
        const { cpf } = req.query;
        const resposta = await buscarPorCpf(cpf);

        if(resposta.length == 0) 
            resp.status(404).send(['Cliente não encontrado']) ;
        else
            resp.send(resposta); 
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



//Busca de cliente por nome
server.get('/cliente/busca' , async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await buscarPorNome(nome);

        if(resposta.length == 0) 
            resp.status(404).send(['Cliente não encontrado']) ;
        else
            resp.send(resposta); 

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})





//Busca de cliente por ID
server.get('/cliente/:id' , async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await buscarPorId(id);

        if(!resposta) throw new Error  ('Cliente não encontrado.') 

        resp.send(resposta); 
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



//Alterar cliente
server.put('/cliente/:id' , async (req, resp) => {
    try {
        const { id } = req.params;
        const cliente = req.body;

        if(!cliente.personal) 
            throw new Error ('Id do personal obrigatório');

        if(!cliente.nome) 
            throw new Error ('Nome do cliente é obrigatório');

        if(!cliente.plano) 
            throw new Error ('Nome do plano é obrigatório');

        if(!cliente.cpf) 
            throw new Error ('CPF é obrigatório');

        if(!cliente.genero) 
            throw new Error ('Gênero é obrigatório');

        if(cliente.nascimento == undefined) 
            throw new Error ('Data de nascimento é obrigatória');

        if(cliente.altura == undefined || cliente.altura < 0) 
            throw new Error ('Altura obrigatória');

        if(cliente.peso == undefined || cliente.peso < 0) 
            throw new Error ('Peso obrigatório');

        if(!cliente.telefone) 
            throw new Error ('Telefone obrigatório');

        if(!cliente.objetivo) 
            throw new Error ('Objetivo obrigatório');

        if(!cliente.treino) 
            throw new Error ('Informações  sobre treino obrigatórias');

        if(!cliente.dia) 
            throw new Error ('Dia da semana obrigatório');

        if(!cliente.horario) 
            throw new Error ('Horário obrigatório');

        const resposta = await alterarCliente(id, cliente);
        if (resposta != 1)
            throw new Error ('Cliente não encontrado');
        else
            resp.status(204).send();


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


//Remover cliente
server.delete('/cliente/:id' , async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerCliente(id);
        if (resposta != 1) 
        throw new Error('Cliente não removido.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;