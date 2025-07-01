import { ResultSetHeader, RowDataPacket  } from "mysql2"
import coneccion from "../../config/db"
import { LibrosEntry } from "../../types/types";

export const getLibroById = async (id_libro: number): Promise<LibrosEntry | null> => {
    const [rows] = await coneccion.query<RowDataPacket[]>(
        "SELECT * FROM libros_recetas WHERE id_libro = ?",
        [id_libro]
    );

    if (rows.length === 0) {
        return null;
    }

    return rows[0] as LibrosEntry;
};

export const updateLibro = async (
    id_libro: number,
    nombre_libro: string,
    precio: number,
    descripcion: string,
    stock: number,
    estado: number,
    foto: string
): Promise<boolean> => {
    try {
        const [result] = await coneccion.query<ResultSetHeader>("UPDATE libros_recetas SET nombre_libro = ?, precio = ?, descripcion = ?, stock = ?, estado = ?, foto = ? WHERE id_libro = ?", [nombre_libro, precio, descripcion, stock, estado, foto, id_libro]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
        return false;
    }
};


