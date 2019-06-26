// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./porhacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listar = porHacer.listar();

        for (let tarea of listar) {
            console.log('====POR HACER===='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('================='.green);
        }
        console.log('listar tarea');
        break;


    case 'actualizar':

        let TareaActualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('actualizar tarea', TareaActualizar);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('tarea no encontrada');
}