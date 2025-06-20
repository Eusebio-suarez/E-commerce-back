import { LibrosEntry, NewLibrosEntry } from '../../types'
import librosData from './libros.json'

const libros: LibrosEntry[] = librosData as LibrosEntry[]

export const getEntries = (): LibrosEntry[] => libros

export const findById = (id_libro: number): LibrosEntry | undefined =>{
    const entry = libros.find(d => d.id_libro == id_libro)
    return entry
}

export const addLibros = (newLibrosEntry: NewLibrosEntry): LibrosEntry => {
    const newLibros = {
        id: libros.length + 1,
        ...newLibrosEntry
    }

    libros.push(newLibros)
    return newLibros
}