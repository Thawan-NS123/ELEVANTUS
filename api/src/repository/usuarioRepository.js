import { conexao } from './connection.js'


//Login personal
export async function login(email, senha) {
    const comando = 
     `select id_personal 	    id,
             nm_personal		  nome,
             ds_email		      email
        from tb_personal
       where ds_email    		= ?
         and ds_senha	    	= ?`

    const [linhas] = await conexao.query(comando, [email, senha]);
    return linhas [0];
}

