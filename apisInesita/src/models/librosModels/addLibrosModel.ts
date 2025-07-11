import { ResultSetHeader, RowDataPacket } from "mysql2"
import coneccion from "../../config/db"


export const validatLibro = async(nombre_libro:string):Promise<boolean>=>{
    const [rows] = await coneccion.query<RowDataPacket[]>("SELECT * FROM libros_recetas WHERE nombre_libro = ?",[nombre_libro])

    return rows.length > 0
}

export const addLibro = async( nombre_libro:string, precio: number, descripcion: string, stock: number, estado: number, foto: string):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("insert into libros_recetas (nombre_libro,precio,descripcion,stock,estado,foto) values (?,?,?,?,?,?)",[ nombre_libro, precio, descripcion, stock, estado, foto])
    return rows.affectedRows > 0
}


