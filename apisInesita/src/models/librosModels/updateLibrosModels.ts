import { ResultSetHeader } from "mysql2"
import coneccion from "../../config/db"
import { RowDataPacket } from 'mysql2';

export const getLibroById = async (id_libro: number): Promise<any | null> => {
    const [rows] = await coneccion.query<RowDataPacket[]>(
        "SELECT * FROM libros_recetas WHERE id_libro = ?",
        [id_libro]
    );

    // Verificamos si existe al menos un libro
    if (rows.length === 0) {
        return null;
    }

    return rows[0]; // Retorna el primer libro encontrado
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
    const [result] = await coneccion.query<ResultSetHeader>(
        "UPDATE libros_recetas SET nombre_libro = ?, precio = ?, descripcion = ?, stock = ?, estado = ?, foto = ? WHERE id_libro = ?",
        [nombre_libro, precio, descripcion, stock, estado, foto, id_libro]
    );

    return result.affectedRows > 0; // Retorna true si se actualizó al menos un registro
};

