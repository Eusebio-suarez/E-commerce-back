import coneccion from "../config/db"

//vaciar el carrito 
export const emptyCar = async (carrito_id:number)=>{
    await coneccion.query("delete from carrito_productos where carrito_id = ?;",[carrito_id])
}