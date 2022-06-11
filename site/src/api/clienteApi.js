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