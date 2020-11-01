create database proyecto_practicas
use proyecto_practicas

create table Usuario(
	carnet int PRIMARY KEY,
	nombres varchar(45),
	apellidos varchar(45),
	contrasena varchar(45),
	correo varchar(45)
);

create table Curso(
	codigoCurso int PRIMARY KEY,
	nombre varchar(45)
);

create table Catedratico(
	noCatedratico int PRIMARY KEY,
	nombres varchar(45),
	apellidos varchar(45)
);

create table Curso_Catedratico(
	idCatedraticoCurso int PRIMARY KEY,
	curso_CodigoCurso int FOREIGN KEY REFERENCES Curso(codigoCurso),
	catedratico_NoCatedratico int FOREIGN KEY REFERENCES Catedratico(noCatedratico)
);



create table PensumSistemas(
	idCursoPensum int PRIMARY KEY,
	curso_codigoCurso int FOREIGN KEY REFERENCES Curso(codigoCurso),
	creditos int,
	semestre int
);

create table CursosAprobados(
	carnetU int FOREIGN KEY REFERENCES Usuario(carnet),
	cursoP int FOREIGN KEY REFERENCES PensumSistemas(idCursoPensum),
	notaAprobada int
);

create table Publicacion(
	idPublicacion int PRIMARY KEY,
	mensaje varchar(100),
	usuario_carnet int FOREIGN KEY REFERENCES Usuario(carnet),
	fecha date,
	curso_Catedratico_idCatedraticoCurso int FOREIGN KEY REFERENCES Curso_Catedratico(idCatedraticoCurso),
	curso_CodigoCurso int FOREIGN KEY REFERENCES Curso(codigoCurso),
	catedratico_NoCatedratico int FOREIGN KEY REFERENCES Catedratico(noCatedratico),
	tipo int
	);

create table Comentario(
	idComentario int identity(1,1) PRIMARY KEY,
	mensaje varchar(100),
	publicacion_idPublicacion int FOREIGN KEY REFERENCES Publicacion(idPublicacion),
	usuario_Carnet int FOREIGN KEY REFERENCES Usuario(carnet)
);

