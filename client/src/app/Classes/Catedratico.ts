import { stringify } from "querystring";

export class Catedratico{
    numero: number;
    nombres: string;
    apellidos: string;

    constructor(numero: number, nombres: string, apellidos: string){
        this.numero = numero;
        this.nombres = nombres;
        this.apellidos = apellidos;
    }

    nombreCompleto(){
        return this.nombres.concat(" ", this.apellidos)
    }

    toString(){
        return this.numero.toString().concat(" - ", this.nombreCompleto())
    }
}