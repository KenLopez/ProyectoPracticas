import { Catedratico } from './Catedratico';
import { CursoCatedratico } from './CursoCatedratico';

export class Publicacion{
    id: number;
    mensaje: string;
    carnet: number;
    fecha: Date;
    tipo: number;
    relacion: number;

    constructor(id: number, mensaje: string,  fecha: Date, tipo: number, carnet: number, relacion: number){
        this.id = id;
        this.mensaje = mensaje;
        this.carnet = carnet;
        this.fecha = fecha;
        this.tipo = tipo;
        this.relacion = relacion
    }

    getType(){
        switch(this.tipo){
            case 1:
                return "Curso";
            case 2: 
                return "Catedrático";
            case 3:
                return "Curso-Catedrático";
            case 4:
                return "Auxiliar";
            case 5:
                return "Auxiliar-Curso";
        }
    }
}