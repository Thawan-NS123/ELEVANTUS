INSERT INTO tb_personal (nm_personal, ds_email, ds_senha)
VALUES  ("Cleiton", "Elev.clei@gmail.com", "716182020");

use elevantusBD;

select * from tb_cliente;

 -- Login Personal
select id_personal 		id,
       nm_personal		nome,
       ds_email			email
  from tb_personal
 where ds_email 		= 'Elev.clei@gmail.com'
   and ds_senha			= '716182020';
   

-- Cadastrar cliente
INSERT INTO tb_cliente (id_personal,
						nm_cliente,
                        ds_plano,
                        ds_cpf,
						ds_genero,
                        dt_nascimento,
                        nr_altura,
                        nr_peso,
                        nr_telefone,
						ds_objetivo,
                        ds_observacao,
                        ds_treino_da_semana,
                        ds_dia_da_semana,
						hr_horario)
				VALUES (1, 
						'Thawan Nascimento Silva',
                        'Premium', 
                        '546.643.643-34',
                        'Masculino',
                        '2003-10-29',
                        1.87,
                        80.00,
                        '(11)94002-8922', 
						'Ganhar massa muscular',
                        '',
                        'Manguito Rotatorio, Supino Reto, Supino com alteres, Crucifixo, Deck Pack',
                        'Segunda à Quarta',
                        '14:00');
                        

-- Alterar a imagem de perfil do cliente
UPDATE tb_cliente
   SET img_cliente = '/storage/cliente/342431342423.jpg'
 WHERE id_cliente = 1;
 
 
 

     

-- Alterar cliente
UPDATE tb_cliente 
   SET  id_personal			 		= 1, 
		nm_cliente 					= 'Thawan Nascimento Silva', 
        ds_plano 					= 'Premium',
        ds_cpf						= '546.643.643-00',
        ds_genero 					= 'Masculino', 
        dt_nascimento 				= '2003-10-29', 
        nr_altura 					=  1.90, 
        nr_peso 					=  80.00, 
        nr_telefone 				= '(11)94002-8922',
        ds_objetivo 				= 'Ganhar massa muscular',
        ds_observacao 				= 'Dificuldade na movimentação dos ombros', 
        ds_treino_da_semana 		= 'Manguito Rotatorio, Supino Reto, Supino com alteres, Crucifixo, Deck Pack',
        ds_dia_da_semana 			= 'Quinta à sábado',
        hr_horario 					= '13:00'
 WHERE  id_cliente					= 1;

-- Buscar todos Clientes
SELECT   id_cliente			            			id,
		nm_cliente			            			nome,
		ds_plano			            			plano,
		ds_cpf				            			cpf,
		ds_genero			            			genero,
		date_format(dt_nascimento, '%d/%m/%Y')      nasciemento,
		nr_altura			            			altura,
		nr_peso				            			peso,
		nr_telefone			            			telefone,
		ds_objetivo			            			objetivo,
		ds_observacao		            			observacao,
		ds_treino_da_semana	            			treino,
		ds_dia_da_semana	            			dia,	
        time_format(hr_horario, '%Hh%m')			horario  
   FROM tb_cliente;


-- Buscar por nome
SELECT 	id_cliente								id,
		nm_cliente								nome,
		ds_plano			     				plano,
		ds_cpf									cpf,
	    ds_genero			     				genero,
        date_format(dt_nascimento, '%d/%m/%Y')  nascimento,
	    nr_altura			     				altura,
	    nr_peso									peso,
	    nr_telefone								telefone,
	    ds_objetivo								objetivo,
	    ds_observacao		     				observacao,
	    ds_treino_da_semana	     				treino,
	    ds_dia_da_semana	     				dia,
		time_format(hr_horario, '%Hh%m')		horario
  FROM tb_cliente
 WHERE nm_cliente			like '%w%';



-- Buscar por Cpf 
SELECT  id_cliente								id,
		nm_cliente								nome,
		ds_plano			     				plano,
		ds_cpf									cpf,
	    ds_genero			     				genero,
        date_format(dt_nascimento, '%d/%m/%Y')  nascimento,
	    nr_altura			     				altura,
	    nr_peso									peso,
	    nr_telefone								telefone,
	    ds_objetivo								objetivo,
	    ds_observacao		     				observacao,
	    ds_treino_da_semana	     				treino,
	    ds_dia_da_semana	     				dia,
		time_format(hr_horario, '%Hh%m')		horario
  FROM tb_cliente
 WHERE ds_cpf			like '%34%';


-- Buscar por id
SELECT 	id_cliente								id,
		nm_cliente								nome,
		ds_plano			     				plano,
		ds_cpf									cpf,
	    ds_genero			     				genero,
        date_format(dt_nascimento, '%d/%m/%Y')  nascimento,
	    nr_altura			     				altura,
	    nr_peso									peso,
	    nr_telefone								telefone,
	    ds_objetivo								objetivo,
	    ds_observacao		     				observacao,
	    ds_treino_da_semana	     				treino,
	    ds_dia_da_semana	     				dia,
		time_format(hr_horario, '%Hh%m')		horario
  FROM tb_cliente
 WHERE id_cliente = 1;
 


-- Remover cliente
 DELETE FROM tb_cliente
        WHERE id_cliente = 5;
        
        
        


