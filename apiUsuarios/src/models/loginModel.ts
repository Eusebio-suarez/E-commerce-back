import { Usuario } from "../types/usuario";
import coneccion from "./db";

export const validateUser= async( correo:string,contraseña:string)=>{
    const [rows]:any = await coneccion.query("SELECT id_usuario, nombre_usuario, correo, rol FROM usuarios WHERE correo = ? AND contraseña = ?",[correo,contraseña])
        
    if(rows.length===0){
        return null
    }

    return rows[0]
}