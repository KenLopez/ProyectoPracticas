create database proyecto_practicas
use proyecto_practicas


drop database proyecto_practicas

create table Usuario(
	carnet int PRIMARY KEY,
	nombres varchar(45),
	apellidos varchar(45),
	contrasena varchar(45),
	correo varchar(45)
);

create table Curso(
	codigoCurso int PRIMARY KEY,
	nombre varchar(60)
);

create table Catedratico(
	noCatedratico int PRIMARY KEY,
	nombres varchar(45),
	apellidos varchar(45),
);

create table Auxiliar(
	noAuxiliar int PRIMARY KEY,
	nombres varchar(100)
);

create table Curso_Catedratico(
	idCatedraticoCurso int PRIMARY KEY,
	curso_CodigoCurso int FOREIGN KEY REFERENCES Curso(codigoCurso),
	catedratico_NoCatedratico int FOREIGN KEY REFERENCES Catedratico(noCatedratico),
	auxiliar_NoAuxiliar int FOREIGN KEY REFERENCES Auxiliar(noAuxiliar)
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
	idPublicacion int PRIMARY KEY IDENTITY(1,1),
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
	mensaje varchar(125),
	publicacion_idPublicacion int FOREIGN KEY REFERENCES Publicacion(idPublicacion),
	usuario_Carnet int FOREIGN KEY REFERENCES Usuario(carnet)
);




select carnet from Usuario
INSERT INTO Curso(codigoCurso,nombre) VALUES (283 ,'Analisis y Diseño de Sistemas 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (785 ,'Analisis y Diseño de Sistemas 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (778 ,'Arquitectura de Computadoras y Ensambladores 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (779 ,'Arquitectura de Computadoras y Ensambladores 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (774 ,'Bases de Datos 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (775 ,'Bases de Datos 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (014 ,'Economia');
INSERT INTO Curso(codigoCurso,nombre) VALUES (790 ,'Emprendedores de Negocios Informáticos');
INSERT INTO Curso(codigoCurso,nombre) VALUES (772 ,'Estructura de Datos');
INSERT INTO Curso(codigoCurso,nombre) VALUES (787 ,'Gerenciales 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (972 ,'Inteligencia Artificial 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (770 ,'Introducción a la Programación y Computación 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (771 ,'Introducción a la Programación y Computación 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (796 ,'Lenguajes Formales y de Programación');
INSERT INTO Curso(codigoCurso,nombre) VALUES (795 ,'Logica de Sistemas');
INSERT INTO Curso(codigoCurso,nombre) VALUES (773 ,'Manejo e Implementación de Archivos');
INSERT INTO Curso(codigoCurso,nombre) VALUES (729 ,'Modelacion y Simulación 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (720 ,'Modelación y Simulación 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (964 ,'Organización Computacional');
INSERT INTO Curso(codigoCurso,nombre) VALUES (781 ,'Organización de Lenguajes y Compiladores 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (777 ,'Organización Lenguajes y Compiladores 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (2025 ,'Prácticas Iniciales');
INSERT INTO Curso(codigoCurso,nombre) VALUES (2036 ,'Prácticas Intermedias');
INSERT INTO Curso(codigoCurso,nombre) VALUES (090 ,'Programación de Computadoras 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (092 ,'Programación de Computadoras 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (970 ,'Redes de computadoras 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (975 ,'Redes de Computadoras 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (797 ,'Seminario de Sistemas 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (798 ,'Seminario de Sistemas 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (281 ,'Sistemas Operativos 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (285 ,'Sistemas Operativos 2');
INSERT INTO Curso(codigoCurso,nombre) VALUES (786 ,'Sistemas Organizaciones y Gerenciales 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (780 ,'Software Avanzado');
INSERT INTO Curso(codigoCurso,nombre) VALUES (722 ,'Teoria de Sistemas 1');
INSERT INTO Curso(codigoCurso,nombre) VALUES (724 ,'Teoria de Sistemas 2');


delete from Curso
delete from Curso_Catedratico
delete from Catedratico
delete from Auxiliar

INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (1 ,'Jose Ricardo', 'Morales Prado');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (2 ,'William Samuel', 'Guevara Orellana');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (3 ,'Ivonne Mirna', 'Aldana Larrazabal');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (4 ,'Otto Rene', 'Escobar Leiva');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (5 ,'Gabriel Alejandro', 'Dias Lopez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (6 ,'Otto Amilcar', 'Rodriguez Acosta');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (7 ,'Luis Fernando', 'Espino Barrios');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (8 ,'Alvaro Giovanni', 'Longo Morales');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (9 ,'Luis Alberto', 'Arias');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (10 ,'Ileana Guisela', 'Ralda Recinos');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (11 ,'Evelyn Carolina', 'Morales Ruiz');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (12 ,'Ludwing Federico', 'Altan Sac');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (13 ,'Jesus Alberto', 'Guzmán');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (14 ,'Alvaro Obrayan', 'Hernandez Garcia');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (15 ,'Marlon Francisco', 'Orellana Lopez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (16 ,'Byron Rodolfo', 'Zepeda Arevalo');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (17 ,'Moises Eduardo', 'Velasquez Oliva');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (18 ,'Herman Igor', 'Veliz Linares');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (19 ,'Neftali De Jesus', 'Calderon Mendez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (20 ,'Marlon Antonio', 'Pérez Türk');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (21 ,'Claudia Liceth', 'Rojas Morales');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (22 ,'Jose Manuel', 'Ruiz Juarez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (23 ,'William Estuardo', 'Escobar Argueta');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (24 ,'Edwin Estuardo', 'Zapeta Gómez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (25 ,'Zulma Karina', 'Aguirre');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (26 ,'Virginia Victoria', ' Tala Ayerdi');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (27 ,'Floriza Felipa', 'Avila Pesquera de Medinilla');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (28 ,'Juan Alvaro', 'Diaz Ardavin');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (29 ,'Oscar Alejandro', 'Paz Campos');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (30 ,'Miguel Angel', 'Cancinos Rendon');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (31 ,'Cesar Augusto', 'Fernandez Caceres');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (32 ,'Bayron Wosvely', 'Lopez Lopez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (33 ,'Edgar Ruben', 'Saban Raxon');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (34 ,'Erick Carlos', 'Roberto Navarro Delgado');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (35 ,'Mario Jose', 'Bautista Fuentes');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (36 ,'Manuel Haroldo', 'Castillo Reyna');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (37 ,'Kevin Adiel', 'Lajpop Ajpacajá');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (38 ,'Sergio Leonel', 'Gómez Bravo');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (39 ,'Jose Anibal', 'Silva de los Angeles');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (40 ,'Pedro Pablo', 'Hernandez Ramirez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (41 ,'Manuel Fernando', 'Lopez Fernandez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (42 ,'Sergio Arnaldo', 'Mendez Aguilar');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (43 ,'Cesar Rolando', 'Batz Saquimux');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (44 ,'Everest Darwin', 'Medinilla Rodriguez');
INSERT INTO Catedratico(noCatedratico,nombres,apellidos) VALUES (45 ,'Jorge Luis', 'Alvarez Mejiam');


INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (1 ,'Juan Raul Mendizábal Rabanales');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (2 ,'Brandon Javier Soto Castañeda');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (3 ,'Darwin Dodany Girón Reyes');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (4 ,'Herberth Josué Argueta Aragón');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (5 ,'Carlos Enrique Canté López');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (6 ,'Hilbert Josué Perucho Ramírez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (7 ,'Jonnathan Antonio Castillo Avendaño');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (8 ,'Luis Alejandro López López');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (9 ,'Astrid Ileana Cortéz Bendfeldt');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (10 ,'Kevin Oswaldo Mejía Lemus');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (11 ,'Fredy José Ramírez Sandoval');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (12 ,'Astrid Ileana Cortéz Bendfeldt');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (13 ,'Marvin Ronaldo Martínez Marroquín');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (14 ,'Juan Luis Landaverde González');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (15 ,'Carlos Andree Avalos Soto');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (16 ,'Cristian Esteban Moino Rodriguez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (17 ,'Jorge Mario Gutierrez Ovando');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (18 ,'Herbert Rafael Reyes Portillo');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (19 ,'Ingrid Rossana Pérez Mena');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (20 ,'Pablo Andrés Hernández Rivera');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (21 ,'Carlos Roberto Jiménez Pérez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (22 ,'Ariel Alejandro Bautista Méndez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (23 ,'Tanya Beatriz Muhun Recinos');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (24 ,'Kevin Ariel Cruz Ortiz');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (25 ,'Juan Pablo Juárez López');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (26 ,'Mauro Alejandro Herrera Castro');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (27 ,'Andrea María López Flores');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (28 ,'Javier Alberto Cabrera Puente');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (29 ,'Danilo Urías Coc');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (30 ,'Erick Fernando Hernández Arroyo');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (31 ,'Fernando Arturo Pensamiento Calderón');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (32 ,'Carlos Luis Pablo Hernández Gramajo');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (33 ,'Luis Angel Vargas León');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (34 ,'Jorge Mauricio Vásquez Cos');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (35 ,'Brayan Ezequiel Santiago Brito');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (36 ,'Diego Josue Berrios Gutierrez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (37 ,'Cristian David Alvarado López');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (38 ,'Pavel Alexander Vásquez Flores');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (39 ,'Erik Gerardo Flores Díaz');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (40 ,'Luis Fernando Mazariegos de León');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (41 ,'Huriel Uvaldo Gómez Gómez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (42 ,'Fernando José Paz González');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (43 ,'Carlos Roberto Jiménez Pérez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (44 ,'Douglas Daniel Aguilar Cuque');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (45 ,'Haroldo Pablo Arias Molina');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (46 ,'Andrea Nicte Vicente Campos');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (47 ,'Oscar Ariel Corleto Soto');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (48 ,'Andrés Alejandro Montúfar Cordero');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (49 ,'Dennis Alejandro Masaya Nájera');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (50 ,'Fernando Hernández Juárez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (51 ,'Breynner Miguel Cortez Sic');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (52 ,'David Andrés Alvarado Castellanos');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (53 ,'Franklin Estuardo Velásquez Fuentes');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (54 ,'Bayron Romeo Axpuac Yoc');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (55 ,'José Augusto Alvarez Morán');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (56 ,'Kevin Eduardo Estrada Martínez');
INSERT INTO Auxiliar(noAuxiliar,nombres) VALUES (57 ,'José Carlos Bautista Mazariegos');


INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (1 ,283, 1,1);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (2 ,785, 2,2);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (3 ,785, 3,3);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (4 ,778, 4,4);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (5 ,779, 5,5);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (6 ,774, 6,6);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (7 ,774, 7,7);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (8 ,775, 8,8);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (9 ,775, 9,9);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (10 ,014, 10,10);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (11 ,014, 11,11);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (12 ,790, 12,12);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (13 ,772, 13,13);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (14 ,772, 14,14);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (15 ,772, 7,15);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (16 ,787, 9,16);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (17 ,972, 7,17);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (18 ,770, 15,18);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (19 ,770, 16,19);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (20 ,770, 17,20);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (21 ,770, 18,21);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (22 ,770, 19,22);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (23 ,771, 20,23);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (24 ,771, 21,24);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (25 ,771, 22,25);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (26 ,771, 23,26);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (27 ,771, 24,27);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (28 ,796, 6,28);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (29 ,796, 25,29);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (30 ,795, 26,30);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (31 ,795, 27,31);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (32 ,773, 28,32);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (33 ,773, 29,33);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (34 ,729, 30,34);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (35 ,720, 31,35);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (36 ,964, 4,36);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (37 ,781, 32,37);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (38 ,781, 33,38);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (39 ,781, 34,39);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (40 ,777, 35,40);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (41 ,777, 36,41);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (42 ,777, 37,42);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (43 ,2025, 38,43);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (44 ,2036, 27,44);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (45 ,090, 18,45);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (46 ,092, 18,46);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (47 ,092, 39,47);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (48 ,970, 40,48);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (49 ,975, 41,49);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (50 ,797, 41,50);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (51 ,798, 9,51);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (52 ,281, 42,52);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (53 ,285, 43,53);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (54 ,786, 24,54);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (55 ,780, 44,55);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (56 ,722, 45,56);
INSERT INTO Curso_Catedratico(idCatedraticoCurso,curso_CodigoCurso,catedratico_NoCatedratico,auxiliar_NoAuxiliar) VALUES (57 ,724, 45,57);



INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (1 ,283,5,8);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (2 ,785,5,9);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (3 ,778,5,6);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (4 ,779,4,7);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (5 ,774,5,7);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (6 ,775,4,8);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (7 ,014,4,6);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (8 ,790,4,10);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (9 ,772,5,5);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (10 ,787,0,7);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (11 ,972,4,9);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (12 ,770,5,3);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (13 ,771,5,4);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (14 ,796,3,4);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (15 ,795,2,3);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (16 ,773,4,6);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (17 ,729,5,9);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (18 ,720,5,10);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (19 ,964,3,5);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (20 ,781,5,6);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (21 ,777,4,5);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (22 ,2025,0,4);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (23 ,2036,0,7);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (24 ,090,4,5);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (25 ,092,4,6);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (26 ,970,4,7);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (27 ,975,4,8);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (28 ,797,3,8);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (29 ,798,3,9);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (30 ,281,5,7);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (31 ,285,4,8);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (32 ,786,4,9);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (33 ,780,6,10);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (34 ,722,5,6);
INSERT INTO PensumSistemas(idCursoPensum,curso_codigoCurso,creditos,semestre) VALUES (35 ,724,5,7);




select Curso.nombre,Catedratico.nombres,Auxiliar.nombres 
FROM (((Curso_Catedratico
 JOIN Curso ON Curso_Catedratico.curso_CodigoCurso=Curso.codigoCurso)
 JOIN Catedratico ON Curso_Catedratico.catedratico_NoCatedratico=Catedratico.noCatedratico)
 JOIN Auxiliar ON Curso_Catedratico.auxiliar_NoAuxiliar=Auxiliar.noAuxiliar);

select * from Auxiliar
select * from Curso
select * from PensumSistemas