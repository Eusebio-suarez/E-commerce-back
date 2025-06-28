import { ResultSetHeader } from "mysql2/promise"
import coneccion from "../../config/db"


export const eliminateLibro = async(id_libro:number)=>{
    const [rows] = await coneccion.query<ResultSetHeader>("DELETE FROM `libros_recetas` WHERE `id_libro` = ?",[id_libro])
    return rows.affectedRows > 0
}