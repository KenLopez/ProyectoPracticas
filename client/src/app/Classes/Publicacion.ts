import { CursoCatedratico } from './CursoCatedratico';

export class Publicacion{
    id: number;
    mensaje: string;
    carnet: number;
    fecha: Date;
    idCursoCatedratico: number;
    idCurso: number;
    tipo: number;

    constructor(id: number, mensaje: string, carnet: number, fecha: Date, idCursoCatedratico: number,
        idCurso: number, tipo: number){
        this.id = id;
        this.mensaje = mensaje;
        this.carnet = carnet;
        this.fecha = fecha;
        this.idCursoCatedratico = idCursoCatedratico;
        this.idCurso = idCurso;
        this.tipo = tipo;
    }
}