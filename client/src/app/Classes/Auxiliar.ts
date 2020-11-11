export class Auxiliar{
    noAuxiliar: number;
    nombres: string;

    constructor(noAuxiliar: number, nombres: string){
        this.noAuxiliar = noAuxiliar;
        this.nombres = nombres;
    }

    toString(){
        return this.noAuxiliar + ' - ' + this.nombres;
    }
}