import { ResultSetHeader } from "mysql2"
import coneccion from "../../config/db"

export const addProduct = async(carrito_id: number,libro_id: number,cantidad: number):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("insert into carrito_productos (carrito_id,libro_id,cantidad) values (?,?,?)",[carrito_id,libro_id,cantidad])
    return rows.affectedRows > 0
}
export const searchCar = async(userId:number)=>{
    const [carrito] = await coneccion.query("SELECT id FROM carrito WHERE user_id = ?",userId);
    
    // Verifica si se encontró un carrito
    if ((carrito as any[]).length === 0) {
        return null;
    }
    
    // Devuelve el id del carrito
    return (carrito as any)[0].id;
}