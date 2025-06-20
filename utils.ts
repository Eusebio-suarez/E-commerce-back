import { NewLibrosEntry } from "./types";

const parseNombre_Libro = (nombre_libroFromRequest: any): string =>{
    if(isString(nombre_libroFromRequest)){
        throw new Error('Incorrect or missing comment');
        
    }

    return nombre_libroFromRequest
}

const isString = (string: string): boolean =>{
    return typeof string === 'string'
}

const toNewLibrosEntry = (object: any): NewLibrosEntry =>{
    const newLibros: NewLibrosEntry ={
        nombre_libro: parseNombre_Libro(object.nombre_libro)
        // ...
    }

    return newLibros
}

export default toNewLibrosEntry