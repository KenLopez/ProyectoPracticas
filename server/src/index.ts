import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import publicacionesRoutes from './routes/publicacionesRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import comentariosRoutes from './routes/comentariosRoutes';
import cursosAprobadosRoutes from './routes/cursosAprobadosRoutes';
import cursosRoutes from './routes/cursosRoutes';

import morgan from 'morgan';
import cors from 'cors';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/publicacion', publicacionesRoutes);
        this.app.use('/usuario', usuariosRoutes)
        this.app.use('/comentario', comentariosRoutes)
        this.app.use('/cursoAprobado', cursosAprobadosRoutes),
        this.app.use('/cursos', cursosRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();