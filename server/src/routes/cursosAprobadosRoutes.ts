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

class CursosAprobadosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res)=>{res.send('esto es un curso aprobado');});

        //      **************** Anadir curso aprobado ******************
        this.router.post('/nuevo', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.carnetU);
                var cadena = "insert into CursosAprobados values('"+resp.carnetU+"','"+resp.cursoP+"','"+resp.notaAprobada+"');";
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

        //      **************** eliminar curso aprobado ******************
        this.router.post('/eliminar', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.carnetU);
                var cadena = "delete from CursosAprobados where carnetU = "+resp.carnetU+" and cursoP = "+resp.cursoP+";";
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

        //******************************************get Pensum************************************************************ */
        this.router.get('/getPensum', async function (req, res) {
            try{
                var cadena = "Select PensumSistemas.idCursoPensum,Curso.nombre, PensumSistemas.creditos FROM (PensumSistemas JOIN Curso ON PensumSistemas.curso_CodigoCurso = Curso.codigoCurso);";                
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

         //******************************************get cursos aprobados************************************************************ */
         this.router.get('/getCursosAprobados', async function (req, res) {
            try{
                var cadena = "Select PensumSistemas.idCursoPensum,Curso.nombre, CursosAprobados.notaAprobada FROM ((PensumSistemas JOIN Curso ON PensumSistemas.curso_CodigoCurso = Curso.codigoCurso) JOIN CursosAprobados ON PensumSistemas.idCursoPensum = CursosAprobados.cursoP and CursosAprobados.carnetU=201900629);";                
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

const cursosAprobadosRoutes = new CursosAprobadosRoutes();
export default cursosAprobadosRoutes.router;