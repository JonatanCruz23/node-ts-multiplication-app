import fs from 'fs';


export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestinations?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(

    ) { }

    execute({
        fileContent,
        fileDestinations = 'ouputs',
        fileName = 'table'
    }: Options): boolean {

        try {
            fs.mkdirSync(fileDestinations, { recursive: true });
            fs.writeFileSync(`${fileDestinations}/${fileName}.txt`, fileContent);
            return true

        } catch (error) {
            console.log(error);
            return false;

        }

    }
}