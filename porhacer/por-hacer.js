const fs = require('fs');

let listado = [];

const GuardarDB = () => {
    let data = JSON.stringify(listado);
    fs.writeFile('data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {

    try {

        listado = require('../data.json');
    } catch (err) {

        listado = [];

    }


}

const listar = () => {

    cargarDB();
    return listado;
}
const crear = (descripcion) => {

    cargarDB();
    let porhacer = {
        descripcion,
        completado: false
    };
    listado.push(porhacer);

    GuardarDB();

    return porhacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listado[index].completado = completado;
        GuardarDB();
        return true;
    } else {
        return false;
    }




}
const borrar = (descripcion) => {
    cargarDB();

    let listadonuevo = listado.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listado.length === listadonuevo.length) {
        return false;
    } else {
        listado = listadonuevo;
        GuardarDB();
        return true;

    }
}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}