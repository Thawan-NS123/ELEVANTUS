import { inserirCliente, buscarPorId, alterarCliente, removerCliente,  buscarTodosClietes, buscarPorNome, alterarImagem } from '../repository/clienteRepository.js'

import multer from 'multer'
import{ Router } from 'express'

const server = Router();
const upload = multer({dest:'storage/capasClientes'});


//Alterar foto de perfil do cliente
server.put('/cliente/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        if(!req.file)
            throw new Error('❌Imagem do Cliente Obrigatória')

        const { id } = req.params;
        const imagem = req.file.path;
        
        const resposta = await alterarImagem(imagem, id);

        if(resposta != 1){
            throw new Error('❌A imagem não pode ser salva');
        }

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


//Cadastrar cliente
server.post('/cliente' , async (req, resp) => {
    try {
        const cliente = req.body;
        
        if(!cliente.personal) 
            throw new Error ('❌Id do personal obrigatórioooo');

        if(!cliente.nome.trim()) 
            throw new Error ('❌Nome do cliente não foi preenchido');

        if(!cliente.plano.trim()) 
            throw new Error ('❌Nome do plano é obrigatório');

        if(!cliente.cpf.trim()) 
            throw new Error ('❌CPF é obrigatório');

        if(!cliente.genero.trim()) 
            throw new Error ('❌Gênero é obrigatório');

        if(!cliente.nascimento.trim() || cliente.nascimento == 'dd/mm/aaaa') 
            throw new Error ('❌Data de nascimento é obrigatória');

        if(cliente.altura == undefined || cliente.altura < 0 || cliente.altura == '' ) 
            throw new Error ('❌Altura obrigatória');

        if(!cliente.peso == undefined || cliente.peso < 0 || cliente.peso == '') 
            throw new Error ('❌Peso obrigatório');

        if(!cliente.telefone.trim()) 
            throw new Error ('❌Telefone obrigatório');

        if(!cliente.objetivo.trim() ) 
            throw new Error ('❌Objetivo obrigatório');

        if(!cliente.treino.trim()) 
            throw new Error ('❌Informações sobre treino obrigatórias');

        if(!cliente.dia.trim()) 
            throw new Error ('❌Dia da semana obrigatório');

        if(!cliente.horario.trim() || cliente.horario == '--:--') 
            throw new Error ('❌Horário obrigatório');

        const clienteAdcionado = await inserirCliente(cliente);
        resp.send(clienteAdcionado);

    } catch (err) {

            resp.status(400).send({
                erro:err.message
        })

    }
})




//Buscar todos os cliente
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
        const { nome } = req.query;
        const resposta = await buscarPorNome(nome);

        // if(resposta.length == 0) 
        //     resp.status(404).send(['Cliente não encontrado']) ;
        // else
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

        if(!resposta) throw new Error ('❌Cliente não encontrado') 

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
        throw new Error ('❌Id do personal obrigatórioooo');

    if(!cliente.nome.trim()) 
        throw new Error ('❌Nome do cliente não foi preenchido');

    if(!cliente.plano.trim()) 
        throw new Error ('❌Nome do plano é obrigatório');

    if(!cliente.cpf.trim()) 
        throw new Error ('❌CPF é obrigatório');

    if(!cliente.genero.trim()) 
        throw new Error ('❌Gênero é obrigatório');

    if(!cliente.nascimento.trim() || cliente.nascimento == 'dd/mm/aaaa') 
        throw new Error ('❌Data de nascimento é obrigatória');

    if(cliente.altura == undefined || cliente.altura < 0 || cliente.altura == '' ) 
        throw new Error ('❌Altura obrigatória');

    if(!cliente.peso == undefined || cliente.peso < 0 || cliente.peso == '') 
        throw new Error ('❌Peso obrigatório');

    if(!cliente.telefone.trim()) 
        throw new Error ('❌Telefone obrigatório');

    if(!cliente.objetivo.trim() ) 
        throw new Error ('❌Objetivo obrigatório');

    if(!cliente.treino.trim()) 
        throw new Error ('❌Informações sobre treino obrigatórias');

    if(!cliente.dia.trim()) 
        throw new Error ('❌Dia da semana obrigatório');

    if(!cliente.horario.trim() || cliente.horario == '--:--') 
        throw new Error ('❌Horário obrigatório');

        const resposta = await alterarCliente(id, cliente);
        if (resposta != 1)
            throw new Error ('❌Cliente não encontrado');
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
        throw new Error('❌Cliente não removido.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;