create database sistemadecadastro;
use sistemadecadastro;

create table usuario(
id int primary key auto_increment,
nome varchar(30),
email varchar(30),
idade int
);

insert into usuario(id,nome,email,idade) values (null,'igor','igor251999@hotmail.com',23);

select * from usuario;

insert into usuario(id,nome,email,idade) values (null,'jose','jose@hotmail.com',8);

insert into usuario(id,nome,email,idade) values (null,'maria','maria@hotmail.com',82);

insert into usuario(id,nome,email,idade) values (null,'joao','joao@hotmail.com',17);

insert into usuario(id,nome,email,idade) values (null,'leonardo','leonardo@hotmail.com',14);

select * from usuario where idade=8;

select * from usuario where nome='igor';

select * from usuario where idade<18;

delete from usuario where id=2;

delete from usuario where idade<10;

update usuario set nome='igor souza' where nome='igor';