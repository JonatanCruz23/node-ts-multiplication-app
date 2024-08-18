const fs = require('fs');
import { yarg } from "./config/plugins/yargs.pligin";

console.log(yarg);
const { b:base, l:limit, s:showTable } = yarg;
let resultado = '';
const header = `
==============================
    Tabla del ${base}
==============================\n
`

for (let num = 1; num <= limit; num++) {
    resultado += `${num} X ${base} = ${base * num}\n`;
}

resultado = header + resultado
if (showTable) {
    console.log(resultado)
}

const salidaPadth = 'ouputs';

fs.mkdirSync(salidaPadth, {recursive: true});
fs.writeFileSync(`${salidaPadth}/tabla-${base}.txt`, resultado);
console.log('File creado!');


