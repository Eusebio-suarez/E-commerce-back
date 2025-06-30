import { ResultSetHeader, RowDataPacket } from "mysql2"
import coneccion from "../../config/db"
import { emptyCar } from "../../utility/emptyCar"

//intefas del total
interface totalRow extends RowDataPacket{
    total:number|null
}

export const calculatePrice = async(carrito_id:number)=>{
    const [rows] = await coneccion.query<totalRow[]>("select sum(lr.precio * cp.cantidad) as total from libros_recetas lr join carrito_productos cp on lr.id_libro = cp.libro_id where carrito_id = ?",[carrito_id])
    
    if(rows[0].total === 0 || rows[0].total===null){
        return 0
    }

    return rows[0].total
}

export const createOrder = async(id_usuario:number,total:number,carrito_id:number)=>{
    const [rows] = await coneccion.query<ResultSetHeader>("INSERT INTO ordenes (`id_usuario_compra`, `precio_total`) VALUES (?, ?);",[id_usuario,total])

    if(rows.affectedRows===0){
       return false
    }

    //id de la orden que se creo
    const orderId = rows.insertId

    //crear el detalle de orden
    const order = await createDetails(orderId,carrito_id)

    //vaciar el carrito
    await emptyCar(carrito_id)

    return order
}


export const createDetails =async(id_orden:number,carrito_id:number)=>{
    const [rows] = await coneccion.query<ResultSetHeader>("insert into orden_detalle(orden_id,libro_id,cantidad,precio_unitario) select ?,cp.libro_id,cp.cantidad,lr.precio from carrito_productos cp join libros_recetas lr on cp.libro_id = lr.id_libro where cp.carrito_id = ?",[id_orden,carrito_id])
    
    return rows.affectedRows > 0
}