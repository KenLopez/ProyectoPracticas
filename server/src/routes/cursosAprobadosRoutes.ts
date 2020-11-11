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

        //      **************** Anadir comentario ******************
        this.router.post('/nuevo', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.carnet);
                var cadena = "insert into CursosAprobados values('"+resp.carnet+"','"+resp.curso+"','"+resp.notaAprobada+"');";
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
                var cadena = "Select Curso.nombre,PensumSistemas.idCursoPensum,PensumSistemas.curso_codigoCurso, PensumSistemas.creditos, PensumSistemas.semestre FROM (PensumSistemas JOIN Curso ON PensumSistemas.curso_CodigoCurso = Curso.codigoCurso);";
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