
  export interface CreateTableUseCase {
    execute:(options: CreateTableOptions)=> string
  }

  export interface CreateTableOptions {
    base: number;
    limit: number;
  }


export class CreateTable implements CreateTableUseCase{

    constructor(

    ){}
    execute({base, limit}: CreateTableOptions){

        let resultado = '';
        for (let num = 1; num <= limit; num++) {
            resultado += `${num} X ${base} = ${base * num}\n`;
        }
        return resultado;
    }
}