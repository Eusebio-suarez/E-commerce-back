import coneccion from "../../config/db"
export const getProducts = async(car_id:number)=>{
    const [rows] = await coneccion.query("SELECT libros_recetas.foto,libros_recetas.nombre_libro,carrito_productos.cantidad,libros_recetas.precio,carrito_productos.cantidad * libros_recetas.precio AS sub_total FROM carrito_productos JOIN libros_recetas ON libros_recetas.id_libro = carrito_productos.libro_id WHERE carrito_productos.carrito_id = ?",[car_id])

    return rows
}