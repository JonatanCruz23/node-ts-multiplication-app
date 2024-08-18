import { CreateTable } from "../domain/use-cases/create-table.use-cases";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOption {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}


export class ServerApp {

    static run({base, limit, showTable, fileDestination, fileName}: RunOption) {
        console.log('Server running...');

        const table = new CreateTable().execute({ base, limit});
        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileDestinations: fileDestination,
                fileName: fileName,
            });
        
        if( showTable ) console.log(table);

        (wasCreated) ? console.log('File created') : console.log('File not created')
        
    }
}