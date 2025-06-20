export interface LibrosEntry {
    id_libro: number,
    nombre_libro: string,
    precio: number,
    descripcion: string,
    stock: number, 
    id_autor: number,
    estado: string,
    foto: string
}

export type NewLibrosEntry = omit<LibrosEntry, 'id_libro'>