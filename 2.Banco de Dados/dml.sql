INSERT INTO tb_personal (nm_personal, ds_email, ds_senha)
VALUES  ("Cleiton", "cleiton@gmail.com", "716182020");

select * from tb_personal;

 -- Login Personal
select id_personal 		id,
       nm_personal		nome,
       ds_email			email
  from tb_personal
 where ds_email 		= 'cleiton@gmail.com'
   and ds_senha			= '716182020';
   

-- Cadastrar cliente
INSERT INTO tb_cliente (id_personal, nm_cliente, ds_plano, ds_cpf,
        ds_genero, dt_nascimento, nr_altura, nr_peso, nr_telefone,
        ds_objetivo, ds_observacao, ds_treino_da_semana, ds_dia_da_semana,
        hr_horario)
     VALUES (1, 'THawan Nascimento Silva', 'Premium', '546.643.643-34', 'Masculino', '2004-09-23', 1.90,  80.00, '4002-8922', 
     'Virar pagodeiro', 'Desligamento automático da perna após carga excessiva', 'Pandeiro', 'Segunda à Quarta', '14:00');
     

-- Alterar cliente
UPDATE tb_cliente 
   SET id_personal = 1, nm_cliente = 'Thawan Nascimento Silva', ds_plano = 'Premium', ds_cpf= '546.643.643-34',
        ds_genero = 'Masculino', dt_nascimento = '2004-09-23', nr_altura = 1.90, nr_peso = 80.00, nr_telefone = '4002-8922',
        ds_objetivo = 'Fazer parte do samba', ds_observacao = 'Perna arrumada', ds_treino_da_semana = 'Tambor', ds_dia_da_semana = 'Dias úteis',
        hr_horario = '14:00'
 WHERE id_cliente = 1;


-- Buscar por nome
SELECT 	id_cliente			id,
		nm_cliente			nome,
		ds_plano			     plano,
		ds_cpf				cpf,
          ds_genero			     genero,
          dt_nascimento		     nascimento,
          nr_altura			     altura,
          nr_peso				peso,
          nr_telefone			telefone,
          ds_objetivo			objetivo,
          ds_observacao		     observacao,
          ds_treino_da_semana	     treino,
          ds_dia_da_semana	     dia
        
		
  FROM tb_cliente
 WHERE nm_cliente			like '%w%';


-- Buscar por id
SELECT 	id_cliente			id,
		nm_cliente			nome,
		ds_plano			     plano,
		ds_cpf				cpf,
          ds_genero			     genero,
          dt_nascimento		     nascimento,
          nr_altura			     altura,
          nr_peso				peso,
          nr_telefone			telefone,
          ds_objetivo			objetivo,
          ds_observacao		     observacao,
          ds_treino_da_semana	     treino,
          ds_dia_da_semana	     dia
        
		
  FROM tb_cliente
 WHERE id_cliente = 1;
 


-- Remover cliente
 DELETE FROM tb_cliente
        WHERE id_cliente = 4;

