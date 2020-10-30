import {Router} from 'express';
var mssql = require('mssql');

var config = {
    server: 'localhost',
    database: 'proyecto_practicas',
    host: 'localhost',
    user: 'mario',
    password: 'MarioSolis',
    port: 1433,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        },
}

class UsuariosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res)=>{res.send('esta es una publicacion');});

//*********************************************************añadir usuario************************************************************ */
        this.router.post('/nuevo', async function (req, res) {
            try{
                let resp = req.body;
                console.log(resp.carnet);
                var cadena = "insert into usuario values('"+resp.carnet+"','"+resp.nombres+"','"+resp.apellidos+"','"+resp.contrasena+"','"+resp.correo+"');";
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
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;