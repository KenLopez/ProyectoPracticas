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
    }
}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;

