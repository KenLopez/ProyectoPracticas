import { Curso } from './Curso';
import { Catedratico } from './Catedratico';
export class CursoCatedratico{
    id: number;
    curso: Curso;
    catedratico: Catedratico;

    constructor(id: number, curso: Curso, catedratico: Catedratico){
        this.id = id;
        this.curso = curso;
        this.catedratico = catedratico;
    }

    toString(){
        return this.curso.toString().concat(": " ,this.catedratico.nombreCompleto())
    }
}