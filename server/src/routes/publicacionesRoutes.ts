import {Router} from 'express';
var mssql = require('mssql');

var config = {
    server: 'localhost',
    database: 'proyecto_practicas',
    host: 'localhost',
    user: 'ProyectoPracticas',
    password: '1234',
    port: 1433,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        },
}

class PublicacionesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res)=>{res.send('esta es una publicacion');});

        //      **************** Anadir publicacion - curso ******************
        this.router.post('/nuevaCurso', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.mensaje);
                var cadena = "INSERT INTO Publicacion(mensaje,usuario_carnet,fecha,curso_CodigoCurso,tipo) values('"+resp.mensaje+"','"+resp.usuario_carnet+"','"+resp.fecha+"','"+resp.curso_CodigoCurso+"','"+resp.tipo+"');";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //      **************** Anadir publicacion - catedratico ******************
        this.router.post('/nuevaCatedratico', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.mensaje);
                var cadena = "INSERT INTO Publicacion(mensaje,usuario_carnet,fecha,catedratico_NoCatedratico,tipo) values('"+resp.mensaje+"','"+resp.usuario_carnet+"','"+resp.fecha+"','"+resp.catedratico_NoCatedratico+"','"+resp.tipo+"');";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //      **************** Anadir publicacion - curso-Catedratico ******************
        this.router.post('/nuevaCursoCatedratico', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.mensaje);
                var cadena = "INSERT INTO Publicacion(mensaje,usuario_carnet,fecha,curso_Catedratico_idCatedraticoCurso,tipo) values('"+resp.mensaje+"','"+resp.usuario_carnet+"','"+resp.fecha+"','"+resp.curso_Catedratico_idCatedraticoCurso+"','"+resp.tipo+"');";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //      **************** Anadir publicacion - auxiliar ******************
        this.router.post('/nuevaAuxiliar', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.mensaje);
                var cadena = "INSERT INTO Publicacion (mensaje,usuario_carnet,fecha, auxiliar_idAuxiliar, tipo) VALUES ('"+resp.mensaje+"','"+resp.usuario_carnet+"','"+resp.fecha+"','"+resp.auxiliar_idAuxiliar+"','"+resp.tipo+"');";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });


        //      **************** Anadir publicacion - catedratico ******************
        this.router.post('/nuevaAuxiliarCurso', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.mensaje);
                var cadena = "INSERT INTO Publicacion (mensaje,usuario_carnet,fecha, auxiliar_Curso, tipo) VALUES ('"+resp.mensaje+"','"+resp.usuario_carnet+"','"+resp.fecha+"','"+resp.auxiliar_Curso+"','"+resp.tipo+"');";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });
        //******************************************get publicacion************************************************************ */
        this.router.get('/getPublicacion', async function (req, res) {
            try{
                var cadena = "select * from Publicacion";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset.recordsets[0]));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //******************************************get info publicacion tipo 1************************************************************ */
        this.router.get('/tipo1', async function (req, res) {
            try{
                var cadena = "Select Publicacion.idPublicacion,Publicacion.usuario_carnet,Usuario.nombres,Usuario.apellidos,Publicacion.mensaje,Publicacion.fecha, Publicacion.curso_CodigoCurso, Curso.nombre,Publicacion.tipo FROM ((Publicacion JOIN Usuario ON Publicacion.usuario_carnet = Usuario.carnet) JOIN Curso ON Publicacion.curso_CodigoCurso = Curso.codigoCurso);";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset.recordsets[0]));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //******************************************get info publicacion tipo 2*********************************************************** */
        this.router.get('/tipo2', async function (req, res) {
            try{
                var cadena = "Select Publicacion.idPublicacion,Publicacion.usuario_carnet,Usuario.nombres,Usuario.apellidos,Publicacion.mensaje,Publicacion.fecha, Publicacion.catedratico_NoCatedratico,Catedratico.nombres,Catedratico.apellidos,Publicacion.tipo FROM ((Publicacion JOIN Usuario ON Publicacion.usuario_carnet = Usuario.carnet) JOIN Catedratico ON Publicacion.catedratico_NoCatedratico = Catedratico.noCatedratico);";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset.recordsets[0]));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //******************************************get info publicacion tipo 3************************************************************ */
        this.router.get('/tipo3', async function (req, res) {
            try{
                var cadena = "Select Publicacion.idPublicacion,Publicacion.usuario_carnet,Usuario.nombres,Usuario.apellidos,Publicacion.mensaje,Publicacion.fecha, Publicacion.curso_Catedratico_idCatedraticoCurso,Publicacion.curso_CodigoCurso,Curso.codigoCurso,Curso.nombre,Publicacion.catedratico_NoCatedratico,Catedratico.noCatedratico,Catedratico.nombres,Catedratico.apellidos,Publicacion.tipo FROM ((((Publicacion JOIN Curso_Catedratico ON Publicacion.curso_Catedratico_idCatedraticoCurso = Curso_Catedratico.idCatedraticoCurso) JOIN Usuario ON Publicacion.usuario_carnet = Usuario.carnet) JOIN Curso ON Curso.codigoCurso = Curso_Catedratico.curso_CodigoCurso) JOIN Catedratico ON Catedratico.noCatedratico= Curso_Catedratico.catedratico_NoCatedratico);";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset.recordsets[0]));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //******************************************get info publicacion tipo 4************************************************************ */
        this.router.get('/tipo4', async function (req, res) {
            try{
                var cadena = "SELECT Publicacion.idPublicacion, Publicacion.usuario_carnet, Usuario.nombres, Usuario.apellidos, Publicacion.mensaje,Publicacion.fecha, Publicacion.auxiliar_idAuxiliar,Auxiliar.nombres,Publicacion.tipo FROM ((Publicacion JOIN Usuario ON Publicacion.usuario_carnet = Usuario.carnet) JOIN Auxiliar ON Publicacion.auxiliar_idAuxiliar = Auxiliar.noAuxiliar);";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset.recordsets[0]));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

        //******************************************get info publicacion tipo 5************************************************************ */
        this.router.get('/tipo5', async function (req, res) {
            try{
                var cadena = "SELECT Publicacion.idPublicacion,Publicacion.usuario_carnet, Usuario.nombres, Usuario.apellidos, Publicacion.mensaje,Publicacion.fecha, Publicacion.curso_CodigoCurso,Curso.nombre, Publicacion.auxiliar_Curso,Publicacion.auxiliar_idAuxiliar,Auxiliar.nombres,Publicacion.tipo FROM ((((Publicacion JOIN Usuario ON Publicacion.usuario_carnet = Usuario.carnet) JOIN Curso ON Publicacion.curso_CodigoCurso = Curso.codigoCurso) JOIN Curso_Catedratico ON Publicacion.auxiliar_Curso = Curso_Catedratico.idCatedraticoCurso) JOIN Auxiliar ON Publicacion.auxiliar_idAuxiliar = Auxiliar.noAuxiliar);";
                var con = new mssql.ConnectionPool(config);

                con.connect(function(err:any){
                var req = new mssql.Request(con);
                if(err){
                    console.log(err);
                    return;
                }
            req.query(cadena,function(err:any, recordset:any){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(JSON.stringify(recordset.recordsets[0]));
                    }
                    con.close();
                });
            });                
            }catch(Exception){
                console.log(Exception);
            }
        });

    }
}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;

