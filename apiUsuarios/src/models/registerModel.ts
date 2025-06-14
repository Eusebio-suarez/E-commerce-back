import { ResultSetHeader } from "mysql2"
import coneccion from "./db"
import { Usuario } from "../types/usuario"

export const validarCorreo = async (correo:string):Promise<boolean>=>{
    const [rows] = await coneccion.query<Usuario[]>("SELECT * FROM usuarios WHERE correo = ?",[correo])
    return rows.length > 0
}

export const crearUsuario = async(nombre:string,correo:string,contraseña:string):Promise<boolean>=>{
    const [resultado]= await coneccion.query<ResultSetHeader>("INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)",[nombre,correo,contraseña])
    return resultado.affectedRows > 0;
}