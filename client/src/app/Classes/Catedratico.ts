import { stringify } from "querystring";

export class Catedratico{
    noCatedratico: number;
    nombres: string;
    apellidos: string;

    constructor(numero: number, nombres: string, apellidos: string){
        this.noCatedratico = numero;
        this.nombres = nombres;
        this.apellidos = apellidos;
    }

    nombreCompleto(){
        return this.nombres.concat(" ", this.apellidos)
    }

    toString(){
        return this.noCatedratico.toString().concat(" - ", this.nombreCompleto())
    }
}