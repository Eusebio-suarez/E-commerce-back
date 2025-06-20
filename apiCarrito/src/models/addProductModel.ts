import { ResultSetHeader } from "mysql2"
import coneccion from "../config/db"

export const addProduct = async(carrito_id: number,libro_id: number,cantidad: number):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("insert into carrito_productos(carrito_id,libro_id,cantidad) values (?,?,?)",[carrito_id,libro_id,cantidad])

    return rows.affectedRows > 0
}