import coneccion from "../../config/db";

export const getOrders= async()=>{
    const [rows] = await coneccion.query("select o.id_orden,o.fecha,u.nombre_usuario,sum(od.cantidad) as num_productos,o.precio_total,o.estado from ordenes o join orden_detalle od on o.id_orden = od.orden_id join usuarios u on o.id_usuario_compra = u.id_usuario GROUP BY o.id_orden order by o.id_orden desc ;")
    
    return rows
}