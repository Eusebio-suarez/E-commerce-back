import { ResultSetHeader, RowDataPacket } from "mysql2"
import coneccion from "../../config/db"


export const validatLibro = async(id_libro:number):Promise<boolean>=>{
    const [rows] = await coneccion.query<RowDataPacket[]>("SELECT * FROM libros_recetas WHERE id_libro = ?",[id_libro])

    return rows.length > 0
}

export const addLibro = async( nombre_libro:string, precio: number, descripcion: string, stock: number, estado: number, foto: string):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("insert into libros_recetas (nombre_libro,precio,descripcion,stock,estado,foto) values (?,?,?,?,?,?)",[ nombre_libro, precio, descripcion, stock, estado, foto])
    return rows.affectedRows > 0
}
/*
export const updateLibro = async(id_libro:number, nombre_libro:string, precio:number, descripcion:string, stock:number, estado:number, foto:string):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("UPDATE libros_recetas SET nombre_libro = ?, precio = ?, descripcion = ?, stock = ?, estado = ?, foto = ? WHERE id_libro = ?", [nombre_libro, precio, descripcion, stock, estado, foto, id_libro])
    return rows.affectedRows > 0
}

*/

