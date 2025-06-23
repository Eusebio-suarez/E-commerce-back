import { ResultSetHeader } from "mysql2/promise"
import coneccion from "../../config/db"
import { eliminateRegisters } from "../../utility/eliminateRegiters"

export const eliminateProduct = async(carrito_id:number,id_libro:number,cantidad:number)=>{

    const [rows] = await coneccion.query<ResultSetHeader>("UPDATE `carrito_productos` SET `cantidad` = `cantidad` - ? WHERE (`libro_id` = ?) AND (`carrito_id` = ?)",[cantidad,id_libro,carrito_id])
    
    //eliminar los registros que en la catidad sea menor o igual a 0
    eliminateRegisters()
    
    return rows.affectedRows > 0

}