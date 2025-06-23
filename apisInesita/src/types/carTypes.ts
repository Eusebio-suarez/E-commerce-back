//interfas de carrito_producto
import { QueryResult } from "mysql2/promise"

 export interface carrito_producto{
    id:number
    carrito_id:number
    libro_id:number
    cantidad:number
}