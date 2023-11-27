create database RedDaily;
use RedDaily;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
senha varchar(20),
email varchar(50),
endereco varchar(45),
telefone char(11),
cpf char(12),
fkRanking int);
select*from Usuario;


create table Pontuacao(
idPontuacao int primary key auto_increment,
Pontuacao int,
fkUsuario int, constraint fkUsuario foreign key (fkUsuario) references Usuario(idUsuario))
auto_increment = 100;

create table Ranking(
idRanking int primary key auto_increment,
Ranking varchar(45))
auto_increment = 1000;

alter table Usuario add constraint fkRanking foreign key (fkRanking) references Ranking (idRanking);



