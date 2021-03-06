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


export async function enviarImagemCliente(id, imagem){
    const formData = new FormData();
    formData.append('capa',imagem);
    const resposta = await api.put(`cliente/${id}/capa`, formData, {
        headers: {
            "Content-Type":"multipart/form-data"
        }
    })

    return resposta.status;
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

export async function buscarPorNome(nome){
    const resposta = await api.get(`/cliente/busca?nome=${nome}`);
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

export function buscarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}