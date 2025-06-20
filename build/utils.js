"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseNombre_Libro = (nombre_libroFromRequest) => {
    if (isString(nombre_libroFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return nombre_libroFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const toNewLibrosEntry = (object) => {
    const newLibros = {
        nombre_libro: parseNombre_Libro(object.nombre_libro)
        // ...
    };
    return newLibros;
};
exports.default = toNewLibrosEntry;
