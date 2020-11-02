export class Curso{
    codigo: number;
    nombre: string;

    constructor(codigo: number, nombre: string){
        this.codigo = codigo;
        this.nombre = nombre;
    }

    toString(){
        return this.codigo.toString().concat(" - ", this.nombre)
    }
}