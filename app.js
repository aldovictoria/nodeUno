const argv = require('yargs')
    .command('listar', 'imprime en consoila la tabla de multiplicar', {
        base: {
            demand: true
        }
    })
    .argv;
const { crearArchivo } = require('./multiplicar/multiplicar')


let argv2 = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${ archivo}`))
    .catch(e => console.log(e));