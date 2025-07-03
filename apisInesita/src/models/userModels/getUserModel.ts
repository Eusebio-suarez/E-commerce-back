import coneccion from "../../config/db";

export const getUsers = async ()=>{
    const [rows] = await coneccion.query("select id_usuario, nombre_usuario, rol ,correo,fecha_creacion from  usuarios order by id_usuario desc;") 

    return rows
}