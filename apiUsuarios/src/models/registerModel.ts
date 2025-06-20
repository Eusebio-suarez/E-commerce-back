import { ResultSetHeader } from "mysql2"
import coneccion from "./db"
import { Usuario } from "../types/usuario"

export const validateEmail = async (correo:string):Promise<boolean>=>{
    const [rows] = await coneccion.query<Usuario[]>("SELECT * FROM usuarios WHERE correo = ?",[correo])
    return rows.length > 0
}

export const createUserAndCar = async(nombre:string,correo:string,contraseña:string):Promise<boolean>=>{
    try{
        const [resultado]= await coneccion.query<ResultSetHeader>("INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)",[nombre,correo,contraseña])
        
        const id_usuario = resultado.insertId;

        //crear el carrito del usuario
        const carrito = await crearCarritoParaUsuario(id_usuario)

        //si se creo correctamente el carrito devuelve el resultado
        if(carrito){
            return resultado.affectedRows > 0;
        }
        //si no se creo el usuario o el carrito devuelve false
        else{
            return false
        }
    }
    catch(error){
        return(false)
    }
}


export const crearCarritoParaUsuario = async (userId: number): Promise<boolean> => {
  try {
    const [resultado] = await coneccion.query<ResultSetHeader>(
      'INSERT INTO carrito (user_id) VALUES (?)',
      [userId]
    );

    return resultado.affectedRows > 0;
  } catch (error) {
    console.error("Error al crear el carrito:", error);
    return false;
  }
};
