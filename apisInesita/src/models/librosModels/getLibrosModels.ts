import coneccion from "../../config/db"
export const getLibros = async()=>{
    const [rows] = await coneccion.query("SELECT * FROM libros_recetas where estado = 1 AND stock > 0")

    return rows
}