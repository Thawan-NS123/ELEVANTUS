import axios from 'axios'
const api = axios.create({ 
    baseURL:'http://localhost:5000/usuario/login'
});



export async function login(email, senha){
    const resposta = await api.post('/usuario/login', {
        email:email,
        senha:senha
    });

    return resposta.data
}