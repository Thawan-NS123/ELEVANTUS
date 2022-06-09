create database elevantusBD;
use elevantusBD;

CREATE TABLE tb_personal (
    id_personal         int primary key auto_increment,
    nm_personal         varchar(200),
    ds_email            varchar(200),
    ds_senha            varchar(20)
);


CREATE TABLE tb_cliente(
        id_cliente              int primary key auto_increment,
        id_personal             int,
        nm_cliente              varchar(100),
        ds_plano                varchar(10),
        ds_cpf                  varchar(14),
        ds_genero               varchar(50),
        dt_nascimento           date,
        nr_altura               decimal(15,2),
        nr_peso                 decimal(15,2),
        nr_telefone             varchar(14),
        ds_objetivo             varchar(4000),
        ds_observacao           varchar(4000),
        ds_treino_da_semana     varchar(5000),
        ds_dia_da_semana        varchar(100),
        hr_horario              time,
        FOREIGN KEY (id_personal) REFERENCES tb_personal (id_personal)
);
