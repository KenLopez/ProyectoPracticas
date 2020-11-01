import {Router} from 'express';
var mssql = require('mssql');

var config = {
    server: 'localhost',
    host: 'localhost',
    user: 'mario',
    password: 'MarioSolis',
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


    }
}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;