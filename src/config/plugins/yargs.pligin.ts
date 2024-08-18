import { argv } from 'process';
import yargs, { boolean, number, option } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.options('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'Multiplication table base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    description: 'Multiplication limit table'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    description: 'Show multiplication table'
})
.option('n',{
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    description: 'File name'
})
.option('d',{
    alias: 'destination',
    type: 'string',
    default: 'ouputs',
    description: 'File destination'
})
.check((argv, options) =>{

    if (argv.b < 1) {
        throw 'Error, Base tiene que ser mayor a 1'
    }

    return true
})
.parseSync()
