export class Curso{
    codigoCurso: number;
    nombre: string;

    constructor(codigo: number, nombre: string){
        this.codigoCurso = codigo;
        this.nombre = nombre;
    }

    toString(){
        return this.codigoCurso.toString().concat(" - ", this.nombre)
    }
}