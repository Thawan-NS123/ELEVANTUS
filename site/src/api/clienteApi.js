import axios from 'axios'
const api = axios.create({ 
    baseURL:'http://localhost:5000'
});


export async function cadastrarCliente(nome, plano, cpf, genero, nascimento, altura, peso,
                                        telefone, objetivo, observacao, treino, dia, horario, usuario){

    const resposta = await api.post('/cliente',{
            personal: usuario,
            nome: nome,
            plano: plano,
            cpf: cpf,
            genero: genero,
            nascimento: nascimento,
            altura: altura,
            peso: peso,
            telefone: telefone,
            objetivo: objetivo,
            observacao: observacao,
            treino: treino,
            dia: dia,
            horario: horario
          }
    )

    return resposta.data;
}   



export async function alterarCliente(id, nome, plano, cpf, genero, nascimento, altura, peso,
    telefone, objetivo, observacao, treino, dia, horario, usuario){

const resposta = await api.put(`/cliente/${id}`,{
        personal: usuario,
        nome: nome,
        plano: plano,
        cpf: cpf,
        genero: genero,
        nascimento: nascimento,
        altura: altura,
        peso: peso,
        telefone: telefone,
        objetivo: objetivo,
        observacao: observacao,
        treino: treino,
        dia: dia,
        horario: horario
        }
)

return resposta.data;
}   

export async function listarTodosFilmes(){
    const resposta = await api.get('/cliente');
    return resposta.data;
}

export async function buscarPorCpf(cpf){
    const resposta = await api.get(`/cliente/busca?cpf=${cpf}`);
    return resposta.data;
}

export async function deletarCliente(id) {
    const resposta = await api.delete(`/cliente/${id}`);
    return resposta.status;
}

export async function buscarPorid(id) {
    const resposta = await api.get(`/cliente/${id}`);
    return resposta.data;
}