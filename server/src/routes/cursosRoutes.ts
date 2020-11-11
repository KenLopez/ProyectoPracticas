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

class CursosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res)=>{res.send('esta es una publicacion');});


//*********************************************************get curso************************************************************ */
        this.router.get('/getCurso', async function (req, res) {
            try{
                var cadena = "select * from Curso";
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


//*********************************************************get catedratico************************************************************ */
        this.router.get('/catedratico', async function (req, res) {
            try{
                var cadena = "Select * from Catedratico";
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

//*********************************************************get curso-catedratico************************************************************ */
    this.router.get('/curso-catedratico', async function (req, res) {
        try{
            var cadena = "select Curso_Catedratico.idCatedraticoCurso, Curso.codigoCurso, Curso.nombre, Catedratico.nombres, Catedratico.apellidos FROM ((Curso_Catedratico JOIN Curso ON Curso_Catedratico.curso_CodigoCurso=Curso.codigoCurso) JOIN Catedratico ON Curso_Catedratico.catedratico_NoCatedratico=Catedratico.noCatedratico);";
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

//*********************************************************get auxiliar************************************************************ */
    this.router.get('/auxiliar', async function (req, res) {
        try{
            var cadena = "Select * from Auxiliar";
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

//*********************************************************get auxiliar************************************************************ */
    this.router.get('/curso-auxiliar', async function (req, res) {
        try{
            var cadena = "Select Curso_Catedratico.auxiliar_NoAuxiliar, Curso.codigoCurso, Curso.nombre, Auxiliar.nombres FROM ((Curso_Catedratico JOIN Curso ON Curso_Catedratico.curso_CodigoCurso=Curso.codigoCurso) JOIN Auxiliar ON Curso_Catedratico.auxiliar_NoAuxiliar=Auxiliar.noAuxiliar)";
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

const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;