import { ResultSetHeader, RowDataPacket } from "mysql2"
import coneccion from "../../config/db"

export const validatProduct = async(carrito_id:number,libro_id:number):Promise<boolean>=>{
    const [rows] = await coneccion.query<RowDataPacket[]>("SELECT * FROM carrito_productos WHERE carrito_id = ? and libro_id = ?",[carrito_id,libro_id])

    return rows.length > 0
}

export const addProduct = async(carrito_id: number,libro_id: number,cantidad: number):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("insert into carrito_productos (carrito_id,libro_id,cantidad) values (?,?,?)",[carrito_id,libro_id,cantidad])
    return rows.affectedRows > 0
}

export const updateCuantity = async(carrito_id:number,id_libro:number,cantidad:number)=>{
    const [rows] = await coneccion.query<ResultSetHeader>("UPDATE `carrito_productos` SET `cantidad` = `cantidad` + ? WHERE (`libro_id` = ?) AND (`carrito_id` = ?)",[cantidad,id_libro,carrito_id])
    return rows.affectedRows > 0
}