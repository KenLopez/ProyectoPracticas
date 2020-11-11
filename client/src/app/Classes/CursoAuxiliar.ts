import { Curso } from '../Classes/Curso';
import { Auxiliar } from '../Classes/Auxiliar';

export class CursoAuxiliar{
    id: number;
    curso: Curso;
    auxiliar: Auxiliar;
    
    
    constructor(id: number, curso: Curso, auxiliar: Auxiliar){
        this.id = id;
        this.curso = curso;
        this.auxiliar = auxiliar;
    }

    toString(){
        return this.curso.toString().concat(': ',this.auxiliar.nombres)
    }
}