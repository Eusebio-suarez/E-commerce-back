import coneccion from "../config/db"

export const eliminateRegisters = async()=>{
    coneccion.query("DELETE FROM carrito_productos WHERE cantidad < 1")
}