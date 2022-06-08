import { conexao } from "./connection.js"


//Cadastrar cliente
export async function inserirCliente(cliente) {
    const comando =
    
   `INSERT INTO tb_cliente (id_personal, 
                            nm_cliente, 
                            ds_plano, 
                            ds_cpf,ds_genero, 
                            dt_nascimento, 
                            nr_altura, 
                            nr_peso,
                            nr_telefone,
                            ds_objetivo,
                            ds_observacao, 
                            ds_treino_da_semana, 
                            ds_dia_da_semana, 
                            hr_horario)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resposta] = await conexao.query(comando, 

   [cliente.personal, 
    cliente.nome, 
    cliente.plano,
    cliente.cpf, 
    cliente.genero, 
    cliente.nascimento, 
    cliente.altura, 
    cliente.peso, 
    cliente.telefone,
    cliente.objetivo, 
    cliente.observacao, 
    cliente.treino, 
    cliente.dia, 
    cliente.horario]);

    cliente.id = resposta.insertId;
    return cliente;
}








//Busca de cliente por nome
export async function buscarPorNome(nome) {
    const comando = 
    `SELECT id_cliente			            id,
            nm_cliente			            nome,
            ds_plano			            plano,
            ds_cpf				            cpf,
            ds_genero			            genero,
            dt_nascimento		            nasciemento,
            nr_altura			            altura,
            nr_peso				            peso,
            nr_telefone			            telefone,
            ds_objetivo			            objetivo,
            ds_observacao		            observacao,
            ds_treino_da_semana	            treino,
            ds_dia_da_semana	            dia	
            
       FROM tb_cliente
      WHERE nm_cliente			like ? `;

    const [linhas] = await conexao.query(comando, [`%${nome}%`]);
    return linhas;
}








//Busca de cliente por ID
export async function buscarPorId(id) {
    const comando = 
    `
    SELECT 	id_cliente			            id,
            nm_cliente			            nome,
            ds_plano			            plano,
            ds_cpf				            cpf,
            ds_genero			            genero,
            dt_nascimento		            nascimento,
            nr_altura			            altura,
            nr_peso				            peso,
            nr_telefone			            telefone,
            ds_objetivo			            objetivo,
            ds_observacao		            observacao,
            ds_treino_da_semana	            treino,
            ds_dia_da_semana	            dia
              
      FROM  tb_cliente
     WHERE  id_cliente = ?
    `;

    const [linhas] = await conexao.query(comando, [id]);
    return linhas[0];
}








//Alterar cliente 
export async function alterarCliente(id, cliente){
    const comando = 
    `
    UPDATE  tb_cliente 
       SET  id_personal                 = ?, 
            nm_cliente                  = ?,
            ds_plano                    = ?, 
            ds_cpf                      = ?,
            ds_genero                   = ?, 
            dt_nascimento               = ?, 
            nr_altura                   = ?, 
            nr_peso                     = ?, 
            nr_telefone                 = ?,
            ds_objetivo                 = ?, 
            ds_observacao               = ?, 
            ds_treino_da_semana         = ?, 
            ds_dia_da_semana            = ?,
            hr_horario                  = ?
     WHERE  id_cliente                  = ?`

    const [resposta] = await conexao.query(comando, 

    [cliente.personal, 
    cliente.nome, 
    cliente.plano, 
    cliente.cpf, 
    cliente.genero, 
    cliente.nascimento, 
    cliente.altura, 
    cliente.peso, 
    cliente.telefone,
    cliente.objetivo, 
    cliente.observacao, 
    cliente.treino, 
    cliente.dia, 
    cliente.horario, 
    id]);
  
    return resposta.affectedRows;
}








//Remover cliente
export async function removerCliente (id){
    const comando =
    `DELETE FROM tb_cliente 
           WHERE id_cliente = ? `;

    const [resposta] = await conexao.query(comando, [id]);
    return resposta.affectedRows; 
}